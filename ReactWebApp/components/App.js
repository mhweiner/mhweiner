import React, {Component} from 'react';
import mr from 'mr-router'
import throttle from 'react-throttle-render'
import { CSSTransition } from 'react-transition-group';
import clone from "../utils/clone";

/* models */

import VKRModel from "../models/VKRModel";
import SummaryModel from "../models/SummaryModel";

/* services */

import ECXService from "../services/ECXService";

/* components */

import Story from "./Story";
import Chat from "./chat/Chat";
import Nav from "./Nav";
import Lenses from "./VKR/Lenses";
import LoadingOverlay from "./LoadingOverlay";
import FatalClaraError from "./FatalClaraError";
import Settings from "./Settings";
import Summary from "./Summary";
import StorySelectionModal from "./StorySelectionModal";

const ThrottledLenses = throttle(50)(Lenses);

/* styles */

import styles from './App.scss';
import overlayStyles from "./overlayStyles.scss";
import settingsStyles from './Settings.scss';
import ErrorLogDialog from "./ErrorLogDialog";


export default class App extends Component {

  constructor(props) {

    super(props);

    //some defaults
    this.DEFAULT_LENS = 'objects';
    this.DEFAULT_STORY_ID = 'what-plants-need';
    this.SESSION_STORAGE_KEY = 'ecx2'; //increment to bust old caches
    this.SETTINGS_STORAGE_KEY = 'ecxUserSettings2'; //increment to bust old caches
    this.pollingIntervalDuration = 2000; //check every 2 seconds for new PD nodes

    //default user settings
    this.DEFAULT_USER_SETTINGS = {
      useFakeVKRData: false,
      useScriptedDialog: true,
      claraHost: window.CONFIG.endpoints.clara.host
    };

    //initialize internalState
    this.internalState = {
      nodes: []
    };

    //initialize user settings
    this.userSettings = clone(this.DEFAULT_USER_SETTINGS);

    //initialize state with default settings
    this.state = {
      settings: clone(this.userSettings)
    };

    //expose internalState to window for debugging and cache script
    window.appData = () => { return this.internalState; };
    window.appUserSettings = () => { return this.userSettings; };

    //expose function for development of InputBox component
    window.testInputBox = (type) => {

      switch (type) {
        case 'SINGLE_SELECT':
          this.setState({
            prompt: {
              type: 'SINGLE_SELECT',
              options: [
                'Lorem ipsum dolar sit amet',
                'This is a really cool option',
                'The brown dog jumped over the red fox',
                'Another really cool option'
              ]
            }
          });
          break;
        case 'TEXT':
          this.setState({
            prompt: {
              type: 'TEXT'
            }
          });
          break;
        case 'BK_DSL':
          this.setState({
            prompt: {
              type: 'BK_DSL'
            }
          });
          break;
      }

    };

  }

  componentDidMount() {

    //you need to recover settings before initializing models or doing anything interesting, otherwise settings
    //will be wrong on refresh
    this.recoverSettings();

    this.initModels();
    this.recoverSession();
    this.route();

  }

  initModels = () => {

    let ecxUrl = window.CONFIG.endpoints.ecx;
    let claraHost = this.userSettings.claraHost;

    this.ecx = new ECXService(ecxUrl.scheme + ecxUrl.host + ecxUrl.path, claraHost, this.getNodes);
    this.summaryModel = new SummaryModel(this.ecx);
    this.vkrModel = new VKRModel(this.ecx);

  };

  getNodes = () => {

    return this.internalState.nodes || null;

  };

  getStateFromInternalState = () => {

    return {
      storyModelId: this.internalState.storyModelId,
      isSessionEnded: this.internalState.isSessionEnded,
      messages: this.getMessages(),
      prompt: this.internalState.prompt,
      story: this.internalState.story,
      vkr: this.internalState.vkr,
      summary: this.internalState.summary,
      vkrErrors: this.internalState.vkrErrors,
      summaryErrors: this.internalState.summaryErrors
    };

  };

  /**
   * Destroys session. Removes from localStorage and resets application back to empty state.
   */
  resetSession = () => {

    //stop polling and end session but does not destroy internal state. user can continue to browse dialog, vkr, etc.
    this.endSession();

    //remove from localStorage
    window.localStorage.removeItem(this.SESSION_STORAGE_KEY);

    //reset internalState
    this.internalState = {
      storyModelId: null,
      isSessionEnded: false, //when true, the StoryModel resource is no longer available via API (unless using cache)
      vkr: null,
      summary: null,
      story: null,
      prompt: null,
      nodes: []
    };

    clearTimeout(this.showTypingIndicatorTimeout);

    //update state, which calls React's render()
    this.setState(Object.assign({
      loadingOverlay: null,
      vkrIsLoading: false,
      summaryIsLoading: false,
      showNewVKRBadge: false,
      showNewSummaryBadge: false,
      showClaraTyping: false
    }, this.getStateFromInternalState()));

  };

  /**
   * Creates new session and starts polling server for questions.
   * @param storyId
   */
  createNewSession = (storyId) => {

    storyId = storyId || this.DEFAULT_STORY_ID;

    this.resetSession();

    this.setState({
      loadingOverlay: 'Creating session...',
      showSettings: false
    });

    //re-instantiate models and services
    this.initModels();

    this.ecx.createSession(storyId, this.userSettings.useScriptedDialog).then(/**Response*/response => {

      this.setState({
        loadingOverlay: 'Waiting for Clara...'
      });

      if (response.ok) {

        response.json().then(json => {

          console.log('session created: ' + json.data.id);

          this.internalState.storyModelId = json.data.id;
          this.fetchPDNodesFromServer();
          this.saveSession('session created');

          return true;

        }).catch(e => {

          throw e;

        });

      } else {

        throw 'when trying to create session, server failed to respond with 201 Created.';

      }
    }).catch(e => {

      if (e instanceof Response) {

        //see if response is JSON
        return e.json().then(resp => {

          if (resp && resp.errors && resp.errors.length) {

            //show server errors
            console.log('failed to start session:');
            console.log(resp.errors);

            this.setState({
              loadingOverlay: null
            });

            this.showFatalError('Failed to start session:', resp.errors);

          }

        }).catch(e => {

          return Promise.reject({reason: 'INTERNAL SERVER ERROR'});

        });

      }

    }).catch(e => {

      console.log('failed to start session:');
      console.log(e);

      this.setState({
        loadingOverlay: null
      });

      this.showFatalError('Failed to start session.');

      throw e;

    });

  };

  /**
   * Saves session to localStorage.
   */
  saveSession = (reason) => {

    console.log(`saving session (${reason})...`);

    if (!this.internalState.storyModelId) return;

    let internalState = clone(this.internalState);

    //stringify
    let str = JSON.stringify(internalState);

    //store
    window.localStorage.setItem(this.SESSION_STORAGE_KEY, str);

  };

  /**
   * Settings should be recovered prior to calling this method, otherwise it would be assumed (possibly incorrectly)
   * that the settings are all default.
   */
  recoverSession = () => {

    let obj = window.localStorage.getItem(this.SESSION_STORAGE_KEY);

    if (obj) {

      let parsedObj = JSON.parse(obj);

      if (parsedObj && parsedObj.storyModelId) {

        this.internalState = parsedObj;
        this.setState(this.getStateFromInternalState());

        console.log('loaded session from localStorage: ' + this.internalState.storyModelId);
        console.log(this.internalState);

        // If session is still running, fetch the latest nodes to stay in sync
        if (!this.internalState.isSessionEnded) {

          this.fetchPDNodesFromServer();

        }

      } else {

        //clear out session
        this.resetSession();

      }

    }

  };

  /**
   * Recovers the settings from localStorage.
   */
  recoverSettings = () => {

    let obj = window.localStorage.getItem(this.SETTINGS_STORAGE_KEY);

    if (obj) {

      let parsedObj = JSON.parse(obj);

      if (parsedObj) {

        this.userSettings = parsedObj;
        this.setState({
          settings: this.userSettings
        });

        console.log('recovered settings from localStorage');

      }

    }

  };

  /**
   * @param newSettings
   */
  saveSettings = (newSettings) => {

    this.oldUserSettings = clone(this.userSettings);
    this.userSettings = newSettings;
    this.setState({settings: newSettings});

    window.localStorage.setItem(this.SETTINGS_STORAGE_KEY, JSON.stringify(newSettings));

    console.log(`new fake vkr setting: ${newSettings.useFakeVKRData}, old fake vkr setting: ${this.oldUserSettings.useFakeVKRData}`);

    if (newSettings.useFakeVKRData && !this.oldUserSettings.useFakeVKRData) {

      this.fetchFakeVKR();

    } else if (!newSettings.useFakeVKRData && this.oldUserSettings.useFakeVKRData) {

      //it was on, but now we have turned it off

      if (this.internalState.storyModelId) {

        //there is a storyModelId, so let's try to fetch the latest real VKR.
        this.fetchVKR();

      } else {

        //just clear out all vkr
        this.internalState.vkr = null;
        this.setState({
          vkr: null,
          vkrIsLoading: false,
          showNewVKRBadge: false
        });

      }

    }

  };

  resetSettings = () => {

    this.saveSettings(this.DEFAULT_USER_SETTINGS);

  };

  fetchPDNodesFromServer = () => {

    if (this.internalState.isSessionEnded) {

      throw 'Cannot poll for new questions, because this session has ended.';

    }

    let storyModelId = this.internalState.storyModelId;

    clearTimeout(this.pollingTimeout);

    this.ecx.getPDList(this.internalState.storyModelId)
      .then(resp => {

        if (storyModelId !== this.internalState.storyModelId) {

          return Promise.reject({
            reason: 'CANCELLED'
          });

        }

        return resp;

      })
      .then(resp => resp.json())
      .then(resp => resp.data)
      .then(this.handlePDNodesResponse)
      .catch(e => {

        if (e && e.reason === 'CANCELLED') {

          console.log('cancelled fetch pd nodes request');

          return null;

        }

        throw e;

      })
      .catch(this.handleServerErrorResponse)
      .catch((e) => {

        console.log(e);
        this.showFatalError('Unable to get node list.');

      });

  };

  /**
   * Returns a Promise that resolves with the PD node from the server.
   * @param id
   * @returns {Promise}
   * @private
   */
  fetchPDNodeDetailsFromServer(id) {

    let storyModelId = this.internalState.storyModelId;

    return this.ecx.getPDById(this.internalState.storyModelId, id)
      .then(resp => {

        if (storyModelId !== this.internalState.storyModelId) {

          return Promise.reject({
            reason: 'CANCELLED'
          });

        }

        return resp;

      })
      .then(resp => resp.json())
      .then(resp => resp.data)
      .catch(e => {

        if (e && e.reason === 'CANCELLED') {

          console.log('cancelled fetch pd nodes request');

          return null;

        }

        throw e;

      })
      .catch(this.handleServerErrorResponse)
      .catch((e) => {

        console.log(e);
        this.showFatalError('Unable to get node details.');
        throw e;

      });

  }

  /**
   * @param nodeList
   */
  handlePDNodesResponse = (nodeList) => {

    let pollAgain = (showTyping) => {

      clearTimeout(this.pollingTimeout);
      this.showClaraTypingIndicator(showTyping);
      this.pollingTimeout = setTimeout(this.fetchPDNodesFromServer, this.pollingIntervalDuration);

    };

    //we need to get details for all new nodes, and current latest one
    let currentNodes = this.internalState.nodes;
    let currentLastNode = currentNodes.length ? currentNodes[currentNodes.length - 1] : null; //id of last node
    let newNodeRefs = nodeList.slice(currentNodes.length); //array of new node's ids, in order
    let nodesToFetch = [];

    if (currentLastNode) {

      nodesToFetch.push(currentLastNode); //the last node could have always changed so we need to re-fetch it

    }

    nodesToFetch = nodesToFetch.concat(newNodeRefs);

    //if there are no nodes to fetch, then keep polling
    if (!nodesToFetch.length) {

      pollAgain(!!nodeList.length);
      return;

    }

    let promises = [];

    nodesToFetch.map(ref => {

      promises.push(this.fetchPDNodeDetailsFromServer(ref.id));

    });

    Promise.all(promises).then(nodes => {

      //update current node if exists
      if (this.internalState.nodes.length) {

        this.internalState.nodes[this.internalState.nodes.length - 1] = nodes.shift();

      }

      //update remaining nodes
      this.internalState.nodes = this.internalState.nodes.concat(nodes);

      //update prompt
      this.internalState.prompt = this.getPromptFromLastNode();

      //story highlighting (entire story text with markdown is in meta)
      this.internalState.story = this.getStoryFromLastNode();

      //save session
      this.saveSession('new PD nodes');

      //push new state
      this.setState(Object.assign({
        animateInNewMessages: true,
        loadingOverlay: null
      }, this.getStateFromInternalState()));

      //check for last message
      if (this.isDialogFinished()) {

        this.endSession();

        //fetch final VKR and Summary
        this.fetchVKR();
        this.fetchSummary();

      }

      //if there is no prompt, and session is still running, then keep polling
      if (!this.internalState.prompt && !this.internalState.isSessionEnded) {

        //keep polling
        pollAgain(true);

      } else {

        this.showClaraTypingIndicator(false);
        this.fetchVKR();
        this.fetchSummary();

      }

    });

  };

  /**
   * Returns what the prompt should be based on the current node list. Does not take into account current session
   * status.
   * @returns {null}
   */
  getPromptFromLastNode = () => {

    if (!this.internalState.nodes.length) {

      return null;

    }

    let lastNode = this.getLastNode();

    //make sure last question hasn't been answered
    if (!lastNode.answer || !lastNode.answer.length) {

      return lastNode.prompt ? clone(lastNode.prompt) : null;

    }

    return null;

  };

  /**
   * Returns story data from the last node.
   */
  getStoryFromLastNode = () => {

    if (!this.internalState.nodes.length) {

      return null;

    }

    let lastNode = this.getLastNode();

    if(lastNode.meta && lastNode.meta.story) {

      return lastNode.meta.story;

    }

    return null;

  };

  /**
   * Checks if the last node has the 'endSession' meta flag.
   * @returns {boolean}
   */
  isDialogFinished = () => {

    let lastNode = this.getLastNode();

    if (!lastNode) {

      return false;

    }

    return !!lastNode.meta && !!lastNode.meta.endSession;

  };

  getLastNode = () => {

    if (this.internalState.nodes.length) {

      return this.internalState.nodes[this.internalState.nodes.length - 1];

    } else {

      return null;

    }

  };

  /**
   * @param responseObj
   */
  handleServerErrorResponse = (responseObj) => {

    if (responseObj.status === 404 || responseObj.status === 410) {

      //if we get a 404 or 410 error then the session has expired/ended
      this.endSession();

    }

    // any other response codes, re-throw error so it can be handled on a case-by-case basis

    throw responseObj;

  };

  /**
   * Ends the session permanently. Stops polling server. Session is still recoverable, but cannot be continued.
   */
  endSession() {

    console.log('ending session...');

    clearTimeout(this.pollingTimeout);
    clearTimeout(this.showTypingIndicatorTimeout);
    this.internalState.isSessionEnded = true;
    this.internalState.prompt = null;

    //update state
    this.setState({
      isSessionEnded: true,
      prompt: null,
      showClaraTyping: false
    });

    this.saveSession('session ended');

  }

  /**
   * Shows indicator after 2 seconds of inactivity while waiting for server.
   * @param show
   */
  showClaraTypingIndicator = show => {

    clearTimeout(this.showTypingIndicatorTimeout);

    if (show) {

      this.showTypingIndicatorTimeout = setTimeout(() => {

        this.setState({
          showClaraTyping: true
        });

      }, 2000);

    } else {

      this.setState({
        showClaraTyping: false
      });

    }

  };

  /**
   * Updates VKR state with setState().
   * @param vkr
   */
  updateVKR = (vkr) => {

    this.internalState.vkr = vkr;

    this.setState({
      vkrIsLoading: this.vkrModel.data.isLoading,
      vkr: vkr
    });

    //new VKR badge. this check may take some time, so we can do this async
    let oldVKR = this.internalState.oldVKR;

    if (!oldVKR || VKRModel.didVKRChange(oldVKR, vkr)) {

      this.setState({
        showNewVKRBadge: true
      });

      this.internalState.oldVKR = vkr;

    }

    this.saveSession('new vkr');

  };

  /**
   * Updates Summary state with setState().
   * @param summary
   */
  updateSummary = (summary) => {

    this.internalState.summary = summary;

    this.setState({
      summaryIsLoading: this.summaryModel.data.isLoading,
      summary: summary
    });

    //new Summary badge. this check may take some time, so we can do this async
    let oldSummary = this.internalState.oldSummary;

    if ((!oldSummary && summary) || SummaryModel.didSummaryChange(oldSummary, summary)) {

      this.setState({
        showNewSummaryBadge: true
      });

      this.internalState.oldSummary = summary;

    }

    //save state
    this.saveSession('new summary');

  };

  /**
   * Update the message list to contain an answer from the user, and do post to server.
   * @param answerText
   */
  submitAnswer = (answerText) => {

    if (!this.internalState.storyModelId) {

      throw 'Cannot submit answer because this.internalState.storyModelId is null.';

    }

    if (this.internalState.isSessionEnded) {

      throw 'Cannot submit answer because the session has ended.';

    }

    let lastNode = this.getLastNode();

    //update node (for caching)
    lastNode.answer = [answerText];

    //disable prompt
    this.internalState.prompt = null;

    //update state
    this.setState(this.getStateFromInternalState());

    //show clara typing indicator
    this.showClaraTypingIndicator(true);

    //POST to server
    this.ecx.postPDAnswer(this.internalState.storyModelId, lastNode.id, answerText)
      .then(this.fetchPDNodesFromServer)
      .catch(e => {

        if (e instanceof Response) {

          e.json().then(resp => {

            if (resp && resp.errors && resp.errors[0] === 'ALREADY_ANSWERED') {

              //this means we are out of sync. let's fetch new pd nodes.
              this.showClaraTypingIndicator(true);
              this.fetchPDNodesFromServer();

            }

          });

        }

      })
      .catch(e => {

        console.log(e);

        //POST to server failed, so revert! go back!
        lastNode.answer = null;
        this.internalState.prompt = this.getPromptFromLastNode();
        this.setState(this.getStateFromInternalState());
        clearTimeout(this.pollingTimeout);
        this.showClaraTypingIndicator(false);

        //alert user about the issue
        this.showFatalError('Sorry, there was an issue sending the message to the server.');

      });

  };

  route = () => {

    // Set routes
    mr.setRoutes({
      home: '!',
      lenses: 'lenses/:lens',
      summary: 'summary'
    });

    // Set controllers
    mr.setControllers({
      home: () => this.setState({
        page: 'home',
        showErrorDialog: null
      }),
      lenses: this.showLenses,
      summary: this.showSummary
    });

    // Route according to current hash or set to home
    if(!mr.route()) {

      mr.go('home');

    }

  };

  /**
   * Shows or hides the settings.
   * @param show
   */
  showSettings = (show) => {

    this.setState({
      showSettings: show
    });

  };

  /**
   * Shows or hides the settings.
   * @param show
   */
  showStorySelectionModal = (show) => {

    this.setState({
      showStorySelectionModal: show
    });

  };

  /**
   * Shows the lenses page.
   * @param params
   */
  showLenses = (params) => {

    this.setState({
      page: 'lenses',
      lens: params.lens,
      showNewVKRBadge: false //hide new badge when opening Lenses page to mark it as 'read'
    });

  };

  /**
   * Shows the summary page.
   */
  showSummary = () => {

    this.setState({
      page: 'summary',
      showNewSummaryBadge: false //hide new badge when opening Summary page to mark it as 'read'
    });

  };

  /**
   * Fetches VKR and updates state when done.
   */
  fetchVKR = () => {

    if (this.userSettings.useFakeVKRData) {

      return null;

    }

    let sid = this.internalState.storyModelId;

    if (!sid) {

      throw 'cannot fetch VKR since this.internalState.storyModelId is undefined';

    }

    this.setState({
      vkrIsLoading: true
    });

    this.vkrModel.fetch(sid)
      .then(resp => {

        if (sid !== this.internalState.storyModelId || this.userSettings.useFakeVKRData) {

          return Promise.reject({
            reason: 'CANCELLED'
          });

        }

        return resp;

      })
      .then(resp => {

        if (resp.errors && resp.errors.length) {

          let dateOfError = new Date();

          this.logVKRError(`${dateOfError.toUTCString()} VKR partially loaded, with the following errors: ${resp.errors.join(', ')}`);

        }

        this.updateVKR(resp.vkr);

      })
      .catch(e => {

        if (e && e.reason === 'CANCELLED') {

          console.log('vkr request cancelled');
          return;

        }

        this.setState({
          vkrIsLoading: this.vkrModel.data.isLoading
        });

        let dateOfError = new Date();

        this.logVKRError(`Failed to load VKR at ${dateOfError.toUTCString()}.`);

        console.log(e);

      });

  };

  /**
   * Fetches Fake VKR and updates state when done.
   */
  fetchFakeVKR = () => {

    let storyModelId = this.internalState.storyModelId;

    this.setState({
      vkrIsLoading: true
    });

    this.vkrModel.fetch(null, true)
      .then(resp => {

        if (storyModelId !== this.internalState.storyModelId || !this.userSettings.useFakeVKRData) {

          return Promise.reject({
            reason: 'CANCELLED'
          });

        }

        return resp;

      })
      .then(resp => {

        this.internalState.vkr = resp.vkr;

        this.saveSession('new fake vkr');

        this.setState({
          vkr: resp.vkr,
          vkrIsLoading: false
        });

      })
      .catch(e => {

        if (e && e.reason === 'CANCELLED') {

          console.log('FAKE vkr request cancelled');
          return;

        }

        let dateOfError = new Date();

        this.logVKRError(`Failed to load TEST VKR at ${dateOfError.toUTCString()}.`);

        console.log(e);

    });

  };

  /**
   * Fetches summary data and updates state when done.
   */
  fetchSummary() {

    let sid = this.internalState.storyModelId;

    if (!sid) {

      throw 'cannot fetch summary since this.internalState.storyModelId is undefined';

    }

    this.setState({
      summaryIsLoading: true
    });

    this.summaryModel.fetch(sid)
      .then(resp => {

        if (sid !== this.internalState.storyModelId) {

          return Promise.reject({
            reason: 'CANCELLED'
          });

        }

        return resp;

      })
      .then(resp => this.updateSummary(resp.summary))
      .catch(e => {

        this.setState({
          summaryIsLoading: this.summaryModel.data.isLoading
        });

        if (e && e.reason === 'CANCELLED') {

          console.log('summary request cancelled');
          return;

        }

        let dateOfError = new Date();

        this.logSummaryError(`Failed to load Summary at ${dateOfError.toUTCString()}.`);

        console.log(e);

      });

  }

  /**
   * Does a data transform on internalState.nodes to return messages for Chat component.
   * @returns {Array}
   */
  getMessages() {

    let nodes = this.internalState.nodes || [];
    let messages = [];

    nodes.map((node, index) => {

      //see if we can rewind to this node
      let rewind = null;

      if (index < nodes.length - 1 && node.prompt && window.CONFIG.IS_CACHE) {

        rewind = () => {
          this.rewindToNode(index)
        };

      }

      messages.push({
        user: 'Clara',
        message: node.messageText,
        thinking: node.meta ? node.meta.thinking : null,
        rewind: rewind
      });

      if (node.answer) {

        messages.push({
          user: 'User',
          message: node.answer.join(', ')
        });

      }

    });

    return messages;

  }

  /**
   * Rewinds internal state of primary dialog to a specific node. This will fail if not using cached mode.
   * @param nodeIndex
   */
  rewindToNode(nodeIndex) {

    //resume if ended
    this.internalState.isSessionEnded = false;

    //remove answer
    this.internalState.nodes[nodeIndex].answer = null;

    //remove any trailing nodes
    this.internalState.nodes.splice(nodeIndex + 1, this.internalState.nodes.length);

    //update state
    this.setState(this.getStateFromInternalState());

  }

  /**
   * Shows the fatal error modal.
   * @param errorText
   * @param errorArray
   */
  showFatalError = (errorText, errorArray) => {

    this.setState({
      fatalError: {
        message: errorText,
        errors: errorArray
      },
      loadingOverlay: null
    });

  };

  /**
   * Hides the fatal error modal.
   */
  dismissFatalError = () => {

    this.setState({
      fatalError: null
    });

  };

  logVKRError = (error) => {

    console.log(error);
    this.internalState.vkrErrors = this.internalState.vkrErrors || [];
    this.internalState.vkrErrors.push(error);
    this.setState({
      vkrErrors: this.internalState.vkrErrors
    });
    this.saveSession('new VKR error');

  };

  logSummaryError = (error) => {

    console.log(error);
    this.internalState.summaryErrors = this.internalState.summaryErrors || [];
    this.internalState.summaryErrors.push(error);
    this.setState({
      summaryErrors: this.internalState.summaryErrors
    });
    this.saveSession('new Summary error');

  };

  backButtonClick = (e) => {

    e.preventDefault();
    MrRouter.go('home');
    return false;

  };

  toggleErrorDialog = (type) => {

    if (!!this.state.showErrorDialog) {

      this.setState({
        showErrorDialog: null
      });

    } else if (type === 'VKR') {

      this.setState({
        showErrorDialog: this.state.vkrErrors
      });

    } else if (type === 'Summary') {

      this.setState({
        showErrorDialog: this.state.summaryErrors
      });

    }

  };

  render() {

    let storyModelId = this.internalState.storyModelId;

    let lensTransitionOptions =  {
      in: (this.state.page === 'lenses'),
      timeout: 200,
      mountOnEnter: true,
      unmountOnExit: true,
      classNames: overlayStyles
    };

    let summaryTransitionOptions =  {
      in: (this.state.page === 'summary'),
      timeout: 200,
      mountOnEnter: true,
      unmountOnExit: true,
      classNames: overlayStyles
    };

    let settingsTransitionOptions =  {
      in: (this.state.showSettings),
      timeout: 300,
      mountOnEnter: true,
      unmountOnExit: true,
      classNames: settingsStyles
    };

    let chatOptions = {
      messages: this.state.messages || [],
      prompt: this.state.prompt,
      submitAnswer: this.submitAnswer,
      isSessionEnded: this.state.isSessionEnded,
      animate: this.state.animateInNewMessages,
      showClaraTyping: this.state.showClaraTyping,
      chooseAStory: () => this.showStorySelectionModal(true)
    };

    let lensOptions = {
      lens: this.state.lens,
      vkr: this.state.vkr || {},
      isLoading: this.state.vkrIsLoading,
      useFakeVKRData: this.state.settings.useFakeVKRData,
      containerClassName: overlayStyles.overlay
    };

    let settingsOptions = {
      resetSession: this.resetSession,
      storyModelId: storyModelId,
      saveSettings: this.saveSettings,
      resetSettings: this.resetSettings,
      settings: this.state.settings,
      onClose: () => this.showSettings(false),
      showStorySelectionModal: () => this.showStorySelectionModal(true)
    };

    let navOptions = {
      lens: this.state.lens || this.DEFAULT_LENS,
      showNewVKRBadge: this.state.showNewVKRBadge,
      showNewSummaryBadge: this.state.showNewSummaryBadge,
      showSettings: this.showSettings
    };

    let storySelectionModalOptions = {
      choose: (storyId) => {
        this.createNewSession(storyId);
        this.showStorySelectionModal(false);
      },
      onClose: () => this.showStorySelectionModal(false)
    };

    let fatalErrorOptions = this.state.fatalError ? {
      message: this.state.fatalError.message,
      errors: this.state.fatalError.errors || [],
      onDismiss: this.dismissFatalError,
      storyModelId: storyModelId
    } : {};

    let toggleVKRErrorsLogButton = !!this.state.vkrErrors &&
      <i className={
        !!this.state.showErrorDialog ? [overlayStyles.errors, overlayStyles.toggledButton].join(' ') : overlayStyles.errors
      } onClick={() => this.toggleErrorDialog('VKR')}>
        ERRORS<span>{this.state.vkrErrors.length}</span>
      </i>;

    let toggleSummaryErrorsLogButton = !!this.state.summaryErrors &&
      <i className={
        !!this.state.showErrorDialog ? [overlayStyles.errors, overlayStyles.toggledButton].join(' ') : overlayStyles.errors
      } onClick={() => this.toggleErrorDialog('Summary')}>
        ERRORS<span>{this.state.summaryErrors.length}</span>
      </i>;

    return (
      <div className={styles.default}>
        {!!this.state.showStorySelectionModal && <StorySelectionModal {...storySelectionModalOptions}/>}
        {!!this.state.fatalError && <FatalClaraError {...fatalErrorOptions}/>}
        {!!this.state.loadingOverlay && <LoadingOverlay text={this.state.loadingOverlay}/>}
        <Nav {...navOptions}/>
        <Story story={this.state.story}/>
        <Chat {...chatOptions}/>
        <CSSTransition {...lensTransitionOptions}>
          <div className={[overlayStyles.default].join(' ')}>
            <header>
              {toggleVKRErrorsLogButton}
              <i className={overlayStyles.close} onClick={this.backButtonClick}>BACK</i>
            </header>
            <ThrottledLenses {...lensOptions}/>
          </div>
        </CSSTransition>
        <CSSTransition {...summaryTransitionOptions}>
          <div className={[overlayStyles.default].join(' ')}>
            <header>
              {toggleSummaryErrorsLogButton}
              <i className={overlayStyles.close} onClick={this.backButtonClick}>BACK</i>
            </header>
            <Summary summary={this.state.summary} isLoading={this.state.summaryIsLoading}/>
          </div>
        </CSSTransition>
        <CSSTransition {...settingsTransitionOptions}>
          <Settings {...settingsOptions}/>
        </CSSTransition>
        {!!this.state.showErrorDialog && <ErrorLogDialog errors={this.state.showErrorDialog}/>}
      </div>
    );

  }
}

import React from 'react';
import throttle from "../utils/throttle";

export default class StarField extends React.Component {

  ref = React.createRef();
  currentAnimations = [];
  scrollListener = throttle(() => {

    this.stop();
    clearTimeout(this.restartTimeout);

    if (window.scrollY < 400) {

      if (!this.isPlaying) {

        this.restartTimeout = setTimeout(this.start, 200);

      }

    }

  }, 100, {leading: true});

  componentDidMount() {

    this.start();

    window.addEventListener('scroll', this.scrollListener);

  }

  componentWillUnmount() {

    window.removeEventListener('scroll', this.scrollListener);

  }

  shootingStar(elementContainer, zIndex, startPos, distance, angle, duration, brightness) {

    let startTime = Date.now();
    let theta = angle * Math.PI / 180.0;
    let velocity = distance / duration; //pixel/ms
    let animateInterval;
    let raf = (function() {
      return window.requestAnimationFrame   ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
          window.setTimeout(callback, 1000 / 60);
        };
    })();
    let el;

    function createElement() {

      let randomId = 'shooting-star-' + Math.floor(Math.random()*10000000);
      let newElement = document.createElement('div');

      newElement.id = randomId;
      elementContainer.insertBefore(newElement, parent.firstChild);

      setTimeout(() => {

        el = elementContainer.querySelector('#' + randomId);
        applyCSS();
        startAnimating();

      }, 10);

    }

    function applyCSS() {

      el.style.width = '100px';
      el.style.height = '3px';
      el.style.background = 'white';
      el.style.left = '0';
      el.style.top = '0';
      el.style.zIndex = zIndex;
      el.style.position = 'absolute';
      el.style.opacity = '0';

    }

    function startAnimating() {

      animateInterval = setInterval(() => {

        raf(() => {

          let t = Date.now() - startTime;

          if (t >= duration) {

            //finished!
            clearInterval(animateInterval);
            el.remove();
            return;

          }

          _updatePosition(t);

        });

      }, 10);

    }

    function _updatePosition(t) {

      let x = velocity * t * Math.cos(theta) + startPos.x;
      let y = velocity * t * Math.sin(theta) + startPos.y;
      let transform = 'translate3d(' + x + 'px, ' + y + 'px, 0) rotate3d(0, 0, 1, ' + angle + 'deg)';

      el.style.transform = transform;
      el.style.WebkitTransform = transform;
      el.style.opacity = brightness;

    }

    createElement();

    return {
      stop: () => {

        clearInterval(animateInterval);

        if (el) {

          el.remove();

        }

      }
    };

  }

  generateRandomShootingStar = () => {

    setTimeout(() => {

      let clientRect = this.ref.current.getClientRects()[0];
      let startPos = {
        x: this.rand(-100, clientRect.width - 100),
        y: 275
      };
      let angle = -75;
      let duration = this.rand(600, 1400);
      let brightness = this.rand(4, 10) / 10;
      let distance = 350;

      this.currentAnimations.push(this.shootingStar(
        this.ref.current, 1, startPos, distance, angle, duration, brightness
      ));

    }, this.rand(50, 100));

  };

  start = () => {

    this.isPlaying = true;
    this.generateRandomShootingStar();
    this.generateRandomShootingStar();
    this.generateRandomShootingStar();
    this.interval = setInterval(this.generateRandomShootingStar, 150);

  };

  stop = () => {

    this.isPlaying = false;
    clearInterval(this.interval);

  };

  rand = (min,max) => {

    return Math.floor(Math.random()*(max-min+1)+min);

  };

  render() {

    let style = {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      zIndex: 0
    };

    return <div style={style} ref={this.ref} />;

  }

}
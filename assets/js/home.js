(function() {

	var $body = $('body'),
		$popup = $body.find('#popup'),
		$menu_toggle = $body.find('a.menu-toggle'),
		$nav = $body.find('nav');

	var routes = {
		project: 'project/:id',
		closePopup: '!'
	};

	function _init() {

		//feature detection
		_featureDetection();

		//bind events
		_bindEvents();

		//load fastclick
		FastClick.attach(document.body);

		//setup routes
		router.setControllers(controller);
		router.setRoutes(routes);

		//route!
		if(!router.route()){
			window.location.hash = "!";
		}
	}

	function _featureDetection(){
		//add some classes to html
		if(_env('isMac')){
			$('html').addClass('mac');
		} else {
			$('html').addClass('not-mac');
		}
		if(_env('isiOS')){
			$('html').addClass('iOS');
		} else {
			$('html').addClass('not-iOS');
		}
		if(_env('isSafari')){
			$('html').addClass('safari');
		} else {
			$('html').addClass('not-safari');
		}
	}

	/**
	 * Environment detection. Returns information about the browser, OS, ADV master Area, etc.
	 * Possible keywords:
	 * isChrome, isSafari, isiOS, isMac
	 * @param test
	 * @returns {*}
	 */
	function _env(test){
		var tests = {};
		tests.isChrome = function(){ return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);};
		tests.isSafari = function(){ return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);};
		tests.isiOS = function(){ return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;};
		tests.isMac = function(){ return navigator.platform.toUpperCase().indexOf('MAC')>=0; };

		//make sure test exists
		if(typeof tests[test] === 'undefined'){
			throw "test '" + test + "' is not defined in Pivot.util.env";
		}

		return tests[test].apply();
	}

	function _bindEvents() {

		//toggle nav bar
		$menu_toggle.on('click', function(e){
			e.preventDefault();
			e.stopPropagation();
			if($menu_toggle.hasClass('active')){
				_closeMenu();
			} else {
				_openMenu();
			}
		});

		//project item
		$body.on('click', 'article', function (e) {
			router.go2('project', {id: $(this).data('id')});
		});

		//page jumping
		$body.on('click', '[data-jump]', function(e){
			e.preventDefault();
      smoothScrollToElement($(this).data('jump'));
		});
	}

	function _load(id, onSuccess){
		$.ajax({
			url: 'content/' + id + '/index.html',
			success: onSuccess
		});
	}

	function _open(id){
		_showProgressBar();
		_load(id, function(content){
			$popup.addClass(id);
			$popup.find('.content').html(content);
			var num_images = $popup.find('img').length,
				num_images_loaded = 0;
			$popup.imagesLoaded().always(function(){
				_hideProgressBar();
				$body.addClass('popup-open');
			}).progress(function(instance, image){
				num_images_loaded++;
				var percentage = (num_images_loaded / num_images) * 100;
				//we're always starting with 25% for the loader, so let's do percentage of remaining 75
				percentage = percentage * 0.80 + 20;
				_updateProgressBar(percentage);
			});
		});
	}

	/**
	 * @param {boolean=} doNotUpdateHash
	 * @private
	 */
	function _close(doNotUpdateHash){
		//do animation and then close
		console.log('closing...');
    $popup.addClass('slideOut');
		setTimeout(function(){
			$popup.removeClass('slideOut');
      $popup.find('.content').html('');
      $popup.get(0).scrollTop = 0;
      $body.removeClass('popup-open');
      if(!doNotUpdateHash){
        window.location.hash = '!';
      }
		}, 305);
	}

	function _showProgressBar(){
		_hideProgressBar();
		$body.prepend('<div class="progressbar"><div class="progress"></div><div class="barberpole"></div></div>');
	}

	function _hideProgressBar(){
		$body.find('.progressbar').remove();
	}

	function _updateProgressBar(percentage){
		$body.find('.progressbar .progress').css('width', percentage + '%');
	}

	function _openMenu(){
		$menu_toggle.addClass('active');
		$nav.css('display','block');
		$body.on('click.menu', _closeMenu);
	}

	function _closeMenu(){
		$body.off('click.menu');
		$menu_toggle.removeClass('active');
		$nav.css('display','');
	}

	var controller = {
		project: function(data){
			_open(data.id);
		},
		closePopup: function(){
			_close(true);
		}
	};

	_init();

})();
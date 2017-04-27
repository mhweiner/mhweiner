(function() {

	var $body = $('body'),
		$popup = $body.find('#popup'),
		$menu_toggle = $body.find('a.menu-toggle'),
		$nav = $body.find('nav');

	var routes = {
		project: 'project/:id',
		about: 'about'
	};

	function _init() {
		_bindEvents();

		//load fastclick
		FastClick.attach(document.body);

		//setup routes
		router.setControllers(controller);
		router.setRoutes(routes);

		//route!
		router.route();
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
			_open($(this).data('id'));
			//router.go2('project', {id: $(this).attr('rel')});
		});

		//close button
		$body.on('click', '.close-popup i', _close);

		//nav
		$body.on('click', '[data-jump]', function(e){
			e.preventDefault();
			_scrollTo($(this).data('jump'));
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
			$popup.find('.content').html(content).css('display','block');
			var num_images = $popup.find('img').length,
				num_images_loaded = 0;
			$popup.imagesLoaded().always(function(){
				_hideProgressBar();
				$popup.addClass('loaded');
				$body.addClass('popup-open'); //prevent page scrolling
				setTimeout(function(){
					$body.find('.close-popup').css('display','block'); //show close button
				}, 200);
			}).progress(function(instance, image){
				num_images_loaded++;
				var percentage = (num_images_loaded / num_images) * 100;
				//we're always starting with 25% for the loader, so let's do percentage of remaining 75
				percentage = percentage * 0.80 + 20;
				_updateProgressBar(percentage);
			});
		});
	}

	function _close(){
		$body.find('.close-popup').css('display','');
		$popup.find('.content').html('').css('display','');
		$body.removeClass('popup-open blur');
		window.location.hash = '';
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
		about: function(data){
			_loadAbout();
		}
	};

	//No need to ask, he's a smooth operator
	var _scrollTo = (function(){
		// first add raf shim
		// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
		window.requestAnimFrame = (function(){
			return  window.requestAnimationFrame       ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame    ||
				function( callback ){
					window.setTimeout(callback, 1000 / 60);
				};
		})();

		// main function
		function scrollToY(scrollTargetY, speed, easing) {
			// scrollTargetY: the target scrollY property of the window
			// speed: time in pixels per second
			// easing: easing equation to use

			var scrollY = window.scrollY || document.documentElement.scrollTop,
				scrollTargetY = scrollTargetY || 0,
				speed = speed || 2000,
				easing = easing || 'easeOutSine',
				currentTime = 0;

			// min time .1, max time .8 seconds
			var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

			// easing equation
			function easingEquation(pos) {
				return (-0.5 * (Math.cos(Math.PI * pos) - 1));
			}

			// add animation loop
			function tick() {
				currentTime += 1 / 60;

				var p = currentTime / time;
				var t = easingEquation(p);

				if (p < 1) {
					requestAnimFrame(tick);

					window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
				} else {
					console.log('scroll done');
					window.scrollTo(0, scrollTargetY);
				}
			}

			// call it once to get started
			tick();
		}

		return function(id){
			var $elem = $('#' + id);
			scrollToY($elem.offset().top, 500);
		};

	})();

	_init();

})();
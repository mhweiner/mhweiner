(function() {

	var $body = $('body'),
		$grid = $body.find('.grid'),
		$popup = $body.find('#popup');

	var routes = {
		project: 'project/:id',
		about: 'about'
	};

	function _init() {
		_bindEvents();

		//load fastclick
		FastClick.attach(document.body);

		//start header animation
		_initHeaderAnimation();

		//setup routes
		router.setControllers(controller);
		router.setRoutes(routes);

		//route!
		router.route();
	}

	function _bindEvents() {

		//grid item
		$grid.on('click', '[rel]', function (e) {
			router.go2('project', {id: $(this).attr('rel')});
		});

		//close button
		$body.on('click', '.close-popup', _hidePopup);

		//about link
		$body.on('click', '.about', function(e){
			e.preventDefault();
			router.go2('about');
			return false;
		});
	}

	/**
	 * @param {string} id
	 * @private
	 */
	function _loadPopup(id) {
		_showSpinner();
		$.ajax({
			url: 'content/' + id + '/content.html',
			success: function(resp){
				_showPopup(resp);
			}
		}).always(function(){
			_hideSpinner();
		});
	}

	function _loadAbout(){
		_showSpinner($body);
		$.ajax({
			url: 'content/about.html',
			success: function(resp){
				_showPopup(resp);
			}
		}).always(function(){
			_hideSpinner();
		});
	}

	function _showPopup(content, classes){
		$popup.find('.belt').html(content);
		$popup.addClass(classes);
		setTimeout(function(){
			$popup.scrollTop(0);
			setTimeout(function(){
				$body.addClass('popup-open');
			}, 50);
			setTimeout(function(){
				$body.find('.close-popup').css('display','block');
			}, 600);
		}, 10);
	}

	function _hidePopup(){
		$popup.scrollTop(0);
		$popup.find('.belt').html('');
		$body.removeClass('popup-open');
		$body.find('.close-popup').css('display','none');
		window.location.hash = '';
	}

	function _showSpinner(){
		_hideSpinner();
		$body.prepend('<div class="spinner"><i></i></div>');
	}

	function _hideSpinner(){
		$body.find('.spinner').remove();
	}

	function _initHeaderAnimation(){
		var colors = ['f60000','f10053','a200ac','7800bb','4433b0','0095ec','00afc6','008f7e'],
			len = colors.length,
			i = 0,
			$h1 = $('header h1');
		function next(){
			i++;
			if(i >= len) i = 0;
			var c = '#' + colors[i];
			$h1.css('color', c);
		}
		setInterval(next, 4000);
		setTimeout(next, 10);
	}

	var controller = {
		project: function(data){
			_loadPopup(data.id);
		},
		about: function(data){
			_loadAbout();
		}
	};

	_init();

})();
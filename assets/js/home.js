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

		//setup routes
		router.setControllers(controller);
		router.setRoutes(routes);

		//route!
		router.route();

		window.showPopup = _showPopup;

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
		}, 10);
		setTimeout(function(){
			$body.addClass('popup-open');
			$body.find('.close-popup').css('display','block');
		}, 50);
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
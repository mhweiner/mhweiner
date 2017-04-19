(function() {

	var $body = $('body'),
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
	}

	function _bindEvents() {

		//project item
		$body.on('click', 'article', function (e) {
			_open($(this).data('id'));
			//router.go2('project', {id: $(this).attr('rel')});
		});

		//close button
		$body.on('click', '.close-popup', _closePopup);

		//about link
		$body.on('click', '.about', function(e){
			e.preventDefault();
			router.go2('about');
			return false;
		});
	}

	function _load(id, onSuccess){
		$.ajax({
			url: 'content/' + id + '/index.html',
			success: onSuccess
		});
	}

	function _open(src){
		_showSpinner();
		_load(src, function(content){
			$popup.find('.content').html(content).css('display','block');
			$popup.imagesLoaded().always(function(){
				_hideSpinner();
				$popup.addClass('loaded');
				$body.addClass('popup-open'); //prevent page scrolling
				$body.find('.close-popup').css('display','block'); //show close button
			});
		});
	}

	function _closePopup(){
		$popup.find('.content').html('').css('display','');
		$body.removeClass('popup-open');
		$body.find('.close-popup').css('display','');
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
			_open(data.id);
		},
		about: function(data){
			_loadAbout();
		}
	};

	_init();

})();
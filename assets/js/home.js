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
			open($(this).data('src'));
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

	function _load(src, onSuccess){
		_showSpinner();
		$.ajax({
			url: 'content/' + src,
			success: function(resp){
				onSuccess.call(undefined, resp);
			}
		}).always(function(){
			_hideSpinner();
		});
	}

	function open(src){
		var popupAnimationComplete = $.Deferred(),
			contentLoaded = $.Deferred(),
			content;

		$.when(
			popupAnimationComplete,
			contentLoaded
		).done(function(){
			$popup.find('.content').html(content).css('display','block');
		});

		_showPopup(null, null, function(){
			popupAnimationComplete.resolve();
		});

		_load(src, function(resp){
			content = resp;
			contentLoaded.resolve();
		});
	}

	function _showPopup(content, classes, animationComplete){
		$popup.addClass(classes);
		setTimeout(function(){
			$body.addClass('popup-open'); //prevent page from scrolling
			$body.find('.close-popup').css('display','block'); //show popup close button
			setTimeout(function(){
				if(typeof animationComplete == 'function'){
					animationComplete.apply();
				}
				if(content){
					$popup.find('.content').html(content).css('display','block');
				}
			}, 350);
		}, 0);
	}

	function _closePopup(){
		$popup.scrollTop(0);
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
			_loadPopup(data.id);
		},
		about: function(data){
			_loadAbout();
		}
	};

	_init();

})();
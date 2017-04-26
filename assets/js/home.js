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
		$body.on('click', '.close-popup i', _close);

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
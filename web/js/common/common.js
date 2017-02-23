define(["jquery", "jquery-ui.min", "html5", "TweenMax", "ScrollToPlugin"], function($) {

	console.log('global js loaded');


	var isScrollingAllowed = true;
	var win = $(window);
	var doc = $(document);
	var delay = 400;

	function get_biggest(elements){
		var biggest_height = 0;
		for ( var i = 0; i < elements.length ; i++ ){
			var element_height = $(elements[i]).height();
			//compare the height, if bigger, assign to variable
			if(element_height > biggest_height ) biggest_height = element_height;
		}
		return biggest_height;
	}


	function resizeWindow() {
		var wH = win.height();
		var hH = $('header').outerHeight(false);
		var fH = $('footer').outerHeight(false);
		
	}

	function addBlur() {
		$('#main-container').addClass('is-blur');
		$('#sidebar-menu').addClass('is-blur');
		$('header').addClass('is-blur');
	}

	function removeBlur() {
		$('#main-container').removeClass('is-blur');
		$('#sidebar-menu').removeClass('is-blur');
		$('header').removeClass('is-blur');
	}

	function smoothScroll() {
	    var scrollTime = 1;
	    var scrollDistance = 150;

	    win.on("mousewheel DOMMouseScroll", function(event) {
	        event.preventDefault();
	        if (isScrollingAllowed) {
	            var delta = ( Math.abs(event.originalEvent.wheelDelta) < 120 ? event.originalEvent.wheelDelta / 30 : event.originalEvent.wheelDelta / 120 ) || -event.originalEvent.detail;
	            var scrollTop = win.scrollTop();
	            var finalScroll = scrollTop - parseInt(delta * scrollDistance);

	            TweenMax.to(win, scrollTime, {
	                scrollTo: { y: finalScroll, autoKill: true },
	                ease: Power4.easeOut,
	                autoKill: true,
	                overwrite: 5
	            });
	        }
	    });

	}



	win.resize(function(){
		resizeWindow();
	});

	doc.ready(function(){
		smoothScroll();
		resizeWindow();

		$('.header-hamburger').click(function(e){
			e.preventDefault();
			$(this).toggleClass('active');
		});	
		
	});
});



$(document).ready(function() {
	/*// scroll checker - use
	$('.scr').viewportChecker({
		classToAdd: 'on',
		offset:0,
		repeat:true
	});

	// scroll function
	var scroll = $(window).scrollTop();
	// box
	var box_s = $('.box_wrap').offset().top, box_e = box_s + $('.box_wrap').height() - $(window).height();
	// targetElement
	var target_s = $('.sc1').offset().top, target_e = $('.sc2').offset().top;
	var translateY_b = 50, translateY_a = 0, opacity_b = 0, opacity_a = 1, calc_translateY, calc_opacity;
	function scrollTransition(){
		scroll = $(window).scrollTop();

		// box
		box_s = $('.box_wrap').offset().top;
		box_e = box_s + $('.box_wrap').height() - $(window).height();
		if (scroll < box_s) $('.box_wrap').removeClass('fixed ended');
		else if (scroll >= box_s && scroll < box_e) $('.box_wrap').removeClass('ended').addClass('fixed');
		else $('.box_wrap').removeClass('fixed').addClass('ended');

		// targetElement
		target_s = $('.sc1').offset().top;
		target_e = $('.sc2').offset().top;
		if (scroll < target_s) calc_translateY = translateY_b;
		else if (scroll >= target_s && scroll < target_e) calc_translateY = translateY_b + (scroll - target_s)/(target_e - target_s)*(translateY_a - translateY_b);
		else calc_translateY = translateY_a;
		if (scroll < target_s) calc_opacity = opacity_b;
		else if (scroll >= target_s && scroll < target_e) calc_opacity = opacity_b + (scroll - target_s)/(target_e - target_s)*(opacity_a - opacity_b);
		else calc_opacity = opacity_a;
		$('.targetElement').css({'transform' : 'translateY('+calc_translateY+'%)', 'opacity': calc_opacity});
	}
	scrollTransition();
	$(window).on('scroll resize', function(){
		scrollTransition();
	});*/
});

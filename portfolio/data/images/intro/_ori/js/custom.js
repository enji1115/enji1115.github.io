$(document).ready(function() {
	/*// scroll checker - use
	$('.scr').viewportChecker({
		classToAdd: 'on',
		offset:0,
		repeat:true
	});*/

	// scroll function
	var scroll = $(window).scrollTop(), win_h = $(window).height();
	var scroll_s = 0, scroll_e = $('.sc1').offset().top;
	var bg_scale_b = 1, bg_scale_a = 1.2, bg_calc_scale = bg_scale_b;
	var logo_translateY_b = 10, logo_translateY_a = 0, logo_scale_b = 1.5, logo_scale_a = 1, logo_calc_translateY = logo_translateY_b, logo_calc_scale = logo_scale_b;
	var bldg_translateY_b = 0, bldg_translateY_a = 30, bldg_translateY_btw = -25, bldg_scale_b = 1, bldg_scale_a = 8, bldg_scale_btw = 1.5, 
		bldg_calc_translateY = bldg_translateY_b, bldg_calc_scale = bldg_scale_b, bldg_i, bldg_l = 4;
	function scrollTransition(){
		scroll = $(window).scrollTop();
		win_h = $(window).height();
		scroll_e = $('.sc1').offset().top;
		// scroll_bg
		if (scroll < scroll_s) {
			$('.scroll_bg').css({'transform' : 'scale('+bg_scale_b+')'});
		} else if (scroll >= scroll_s && scroll < scroll_e) {
			bg_calc_scale = bg_scale_b + (scroll - scroll_s)/(scroll_e - scroll_s)*(bg_scale_a - bg_scale_b);
			$('.scroll_bg').css({'transform' : 'scale('+bg_calc_scale+')'});
		} else {
			$('.scroll_bg').css({'transform' : 'scale('+bg_scale_a+')'});
		}
		// scroll_logo
		if (scroll < scroll_s) {
			$('.scroll_logo').css({'transform' : 'translateY('+logo_translateY_b+'%) scale('+logo_scale_b+')'});
		} else if (scroll >= scroll_s && scroll < scroll_e - win_h*0.5) {
			logo_calc_translateY = logo_translateY_b + (scroll - scroll_s)/((scroll_e - win_h*0.5) - scroll_s)*(logo_translateY_a - logo_translateY_b);
			logo_calc_scale = logo_scale_b + (scroll - scroll_s)/((scroll_e - win_h*0.5) - scroll_s)*(logo_scale_a - logo_scale_b);
			$('.scroll_logo').css({'transform' : 'translateY('+logo_calc_translateY+'%) scale('+logo_calc_scale+')'});
		} else {
			$('.scroll_logo').css({'transform' : 'translateY('+logo_translateY_a+'%) scale('+logo_scale_a+')'});
		}
		// building
		for (bldg_i = 0; bldg_i < bldg_l; bldg_i++) {
			if (scroll < scroll_s) {
				$('.building'+(bldg_i+1)).css({'transform' : 'translateY('+bldg_translateY_b+'%) scale('+bldg_scale_b+')'});
			} else if (scroll >= scroll_s && scroll < scroll_e) {
				bldg_calc_translateY = bldg_translateY_b + (scroll - scroll_s)/(scroll_e - scroll_s)*(bldg_translateY_a - bldg_translateY_b - bldg_translateY_btw*(bldg_l-bldg_i));
				bldg_calc_scale = bldg_scale_b + (scroll - scroll_s)/(scroll_e - scroll_s)*(bldg_scale_a - bldg_scale_b - bldg_scale_btw*(bldg_l-bldg_i));
				$('.building'+(bldg_i+1)).css({'transform' : 'translateY('+bldg_calc_translateY+'%) scale('+bldg_calc_scale+')'});
			} else {
				bldg_calc_translateY = bldg_translateY_b + (bldg_translateY_a - bldg_translateY_b - bldg_translateY_btw*(bldg_l-bldg_i));
				bldg_calc_scale = bldg_scale_b + (bldg_scale_a - bldg_scale_b - bldg_scale_btw*(bldg_l-bldg_i));
				$('.building'+(bldg_i+1)).css({'transform' : 'translateY('+bldg_calc_translateY+'%) scale('+bldg_calc_scale+')'});
			}
		}

		// sc
		if (scroll < scroll_e) {
			$('body').removeClass('on1');
		} else {
			$('body').addClass('on1');
		}
	}
	scrollTransition();
	$(window).on('scroll', function(){
		scrollTransition();
	});

	// 
	var music = bodymovin.loadAnimation({
		container: document.getElementById('btn_music_ico'),
		path: './images/music.json',
		renderer: 'svg',
		loop: true,
		autoplay: false
	});
	$('.btn_music').on('click', function() {
		if ($(this).hasClass('musicOn')) {
			music.pause();
		} else {
			music.play();
		}
		if ($(this).hasClass('aniOn')) {$(this).removeClass('aniOn');}
	});
});

function detectIEEdge() {
    var agent = navigator.userAgent.toLowerCase();
	if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) $('body').addClass('ie');
}
$(document).ready(function() {
	// s: common
	// detect IE Edge
	detectIEEdge();

	// scroll checker - use
	$('.scr').viewportChecker({
		classToAdd: 'on',
		offset:0
	});
	$('.scr_rp').viewportChecker({
		classToAdd: 'on',
		offset:0,
		repeat:true
	});

	// btn_scList_more
	$('.btn_scList_more').on('click', function(){
		$(this).parent('.sc_list').toggleClass('conOn');
	});
	// e: common

	// s: header
	// Hamberger button - toggle menu popup
	$('.btn_ham').on('click', function(){
		$('body').toggleClass('menuOn');
	});
	function menuOff() {
		if ($('body').hasClass('menuOn')) $('body').removeClass('menuOn');
	}
	// Logo and Top button - scroll Top
	$('.btn_logo, .btn_top').on('click', function(e){
		e.preventDefault();
		menuOff();
		$('html, body').stop(true, false).animate({scrollTop: '0'}, 700);
	});
	// gnb link - scroll move content
	var gnb_link_tgt = '';
	$('.gnb_link').on('click', function(e){
		e.preventDefault();
		menuOff();
		gnb_link_tgt = $(this).attr('href');
		$('html, body').stop(true, false).animate({scrollTop: $(gnb_link_tgt).offset().top + 8}, 700);
	});
	// e: header

	// s: scExperience
	// project listup
	function expPrjListUp (cat) {
		$('.expPrj_list_wrap').html('');
		var expPrj_list = '';
		for(var i = 0; i < ary_expPrj.length; i++){
			var tgt_data = ary_expPrj[i];
			var tgt_cat = tgt_data.category;
			if (cat == 'LATEST' || tgt_cat.indexOf(cat) > -1) {
				expPrj_list += `
					<li class="sc_list expPrj_list expPrj_list_${i}">
						<button type="button" class="btn_scList_more btn_expPrj">
							<h4 class="sc_list_tit expPrj_tit"><span>${tgt_data.title}</span></h4>
							<h3 class="sc_list_subtit expPrj_subtit">${tgt_data.subtitle}</h3>
							<p class="sc_list_p expPrj_date">${tgt_data.date}</p>
							<p class="sc_list_p expPrj_client">${tgt_data.client}</p>
							<p class="sc_list_p expPrj_cat notranslate">${tgt_data.category}</p>
						</button>
						<div class="scList_more">
							<p class="sc_list_area expPrj_info">
							${tgt_data.info}
							</p>
						</div>
						<style>.expPrj_list_${i}.conOn {background-color: ${tgt_data.background};}</style>
					</li>
				`;
			}
		}
		if (expPrj_list == '') {
				expPrj_list += `
				<li class="sc_list expPrj_list">
					<p class="sc_list_p">The project doesn't exist yet.</p>
				</li>
			`;
		}
		$('.expPrj_list_wrap').append(expPrj_list);
	}
	expPrjListUp('LATEST');
	// project's btn_scList_more
	$('.expPrj_list_wrap').on('click', '.btn_expPrj', function(){
		$(this).parent('.sc_list').toggleClass('conOn');
		if ($(window).width() < 768 && $(this).parent('.sc_list').hasClass('conOn')) $('html, body').stop(true, true).animate({scrollTop: $(this).offset().top - $('.logo').height()*3}, 700);
	});
	// project category slider
	var swiper_expPrjCat_list = new Swiper(".expPrjCat_list_wrap", {
	  slidesPerView: 'auto',
	  spaceBetween: 14,
	  freeMode: true,
	  on: {
		progress: function(data)  {
		  $('.expPrjCat_list_wrap').removeClass('onBeg onEnd');
		  if (data <= 0) $('.expPrjCat_list_wrap').addClass('onBeg');
		  if (data >= 1) $('.expPrjCat_list_wrap').addClass('onEnd');
		}
	  }
	});
	// project category
	$('.btn_expPrjCat').on('click', function(){
		$('.btn_expPrjCat').removeClass('on');
		$(this).addClass('on');
		expPrjListUp($(this).data('cat'));
		$('html, body').stop(true, false).animate({scrollTop: $('#Experience_Projects').offset().top - $('.logo').height() - 10}, 700);
	});
	// e: scExperience

	// s: scroll function
	var scroll = $(window).scrollTop(), win_h = $(window).height();
	// s: header
	var gnbList_i = 0, gnbList_ary = [], gnbList_tgt = '';
	// e: header
	// s: scIntro
	var scIntro_top = $('.scIntro').offset().top, scIntro_btm = scIntro_top + $('.scIntro').height();
	var scIntro_bgScale_b = 1, scIntro_bgScale_a = 1.2, scIntro_bgScale_calc = scIntro_bgScale_b;
	var scIntro_logoTranslateY_b = 10, scIntro_logoTranslateY_a = 0, scIntro_logoTranslateY_calc = scIntro_logoTranslateY_b, 
		scIntro_logoScale_b = 1.5, scIntro_logoScale_a = 1, scIntro_logoScale_calc = scIntro_logoScale_b;
	var scIntro_bldgTranslateY_b = 0, scIntro_bldgTranslateY_a = 30, scIntro_bldgTranslateY_btw = -25, scIntro_bldgScale_b = 1, scIntro_bldgScale_a = 8, scIntro_bldgScale_btw = 1.5, 
		scIntro_bldgTranslateY_calc = scIntro_bldgTranslateY_b, scIntro_bldgScale_calc = scIntro_bldgScale_b, scIntro_bldg_i, scIntro_bldg_l = 4;
	// e: scIntro
	function scrollTransition(){
		scroll = $(window).scrollTop();
		win_h = $(window).height();

		// s: header
		// wrap - detect top
		if (scroll > $('.logo').height()) $('.wrap').addClass('offTop');
		else $('.wrap').removeClass('offTop');
		// gnb_list - detect content
		gnbList_i = 0;
		while (gnbList_i < $('.sc').length) {
			if (scroll >= $('.sc').eq(gnbList_i).offset().top - win_h*0.1
				&& scroll < $('.sc').eq(gnbList_i).offset().top - win_h*0.1 + $('.sc').eq(gnbList_i).height()) {
				if (gnbList_i !== 0) {
					$('.gnb_list').removeClass('on');
					$('.gnb_list').eq(gnbList_i - 1).addClass('on');
				} else $('.gnb_list').removeClass('on');
				break
			}
			else gnbList_i += 1;
		}
		// e: header
		
		// s: scIntro
		scIntro_top = $('.scIntro').offset().top
		scIntro_btm = scIntro_top + $('.scIntro').height();
		// scroll_bg
		if (scroll < scIntro_top) {
			$('.scroll_bg').css({'transform' : 'scale('+scIntro_bgScale_b+')'});
		} else if (scroll >= scIntro_top && scroll < scIntro_btm) {
			scIntro_bgScale_calc = scIntro_bgScale_b + (scroll - scIntro_top)/(scIntro_btm - scIntro_top)*(scIntro_bgScale_a - scIntro_bgScale_b);
			$('.scroll_bg').css({'transform' : 'scale('+scIntro_bgScale_calc+')'});
		} else {
			$('.scroll_bg').css({'transform' : 'scale('+scIntro_bgScale_a+')'});
		}
		// scroll_logo
		if (scroll < scIntro_top) {
			$('.scroll_logo').css({'transform' : 'translateY('+scIntro_logoTranslateY_b+'%) scale('+scIntro_logoScale_b+')'});
		} else if (scroll >= scIntro_top && scroll < scIntro_btm - win_h*0.5) {
			scIntro_logoTranslateY_calc = scIntro_logoTranslateY_b + (scroll - scIntro_top)/((scIntro_btm - win_h*0.5) - scIntro_top)*(scIntro_logoTranslateY_a - scIntro_logoTranslateY_b);
			scIntro_logoScale_calc = scIntro_logoScale_b + (scroll - scIntro_top)/((scIntro_btm - win_h*0.5) - scIntro_top)*(scIntro_logoScale_a - scIntro_logoScale_b);
			$('.scroll_logo').css({'transform' : 'translateY('+scIntro_logoTranslateY_calc+'%) scale('+scIntro_logoScale_calc+')'});
		} else {
			$('.scroll_logo').css({'transform' : 'translateY('+scIntro_logoTranslateY_a+'%) scale('+scIntro_logoScale_a+')'});
		}
		// building
		for (scIntro_bldg_i = 0; scIntro_bldg_i < scIntro_bldg_l; scIntro_bldg_i++) {
			if (scroll < scIntro_top) {
				$('.building'+(scIntro_bldg_i+1)).css({'transform' : 'translateY('+scIntro_bldgTranslateY_b+'%) scale('+scIntro_bldgScale_b+')'});
			} else if (scroll >= scIntro_top && scroll < scIntro_btm) {
				scIntro_bldgTranslateY_calc = scIntro_bldgTranslateY_b + (scroll - scIntro_top)/(scIntro_btm - scIntro_top)*(scIntro_bldgTranslateY_a - scIntro_bldgTranslateY_b - scIntro_bldgTranslateY_btw*(scIntro_bldg_l-scIntro_bldg_i));
				scIntro_bldgScale_calc = scIntro_bldgScale_b + (scroll - scIntro_top)/(scIntro_btm - scIntro_top)*(scIntro_bldgScale_a - scIntro_bldgScale_b - scIntro_bldgScale_btw*(scIntro_bldg_l-scIntro_bldg_i));
				$('.building'+(scIntro_bldg_i+1)).css({'transform' : 'translateY('+scIntro_bldgTranslateY_calc+'%) scale('+scIntro_bldgScale_calc+')'});
			} else {
				scIntro_bldgTranslateY_calc = scIntro_bldgTranslateY_b + (scIntro_bldgTranslateY_a - scIntro_bldgTranslateY_b - scIntro_bldgTranslateY_btw*(scIntro_bldg_l-scIntro_bldg_i));
				scIntro_bldgScale_calc = scIntro_bldgScale_b + (scIntro_bldgScale_a - scIntro_bldgScale_b - scIntro_bldgScale_btw*(scIntro_bldg_l-scIntro_bldg_i));
				$('.building'+(scIntro_bldg_i+1)).css({'transform' : 'translateY('+scIntro_bldgTranslateY_calc+'%) scale('+scIntro_bldgScale_calc+')'});
			}
		}
		// e: scIntro
	}
	scrollTransition();
	$(window).on('scroll', function(){
		scrollTransition();
	});
	// e: scroll function
});

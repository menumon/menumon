
$(document).ready(function(){

	scrollChk()

	var winSize = $(window).outerWidth(true);
	$('.width-check').text(winSize);

	$('.btn-menu').on('click', function(e){
		e.preventDefault;
		$(this).parent().toggleClass('active');
	})

	$('.dimmed').on('click', function(e){
		e.preventDefault;
		if($('.nav-wrap').hasClass('active')){
			$('.nav-wrap').removeClass('active')
		}
	});

	$('.anchor-nav').on('click', function(){
		$('.nav-wrap').removeClass('active')
	})

	// gnb 스크롤
	$(window).on("load", function(){
		// console.log("loading..")
		osActive();
	});

	$(window).scroll(function() {
		// console.log("scrolling..")
		scrollChk()
		osActive()
	}); // scroll

	$(window).resize(function() {
		// console.log("resizing..")
		var reSize = $(window).outerWidth(true);
		$('.width-check').text(reSize)
		
	}); // resize
	
}); // ready

function ahchorMove(seq) {
	var href = $(seq).attr('href');
	var targetPos = $(href).offset().top;
	$('html').animate({
		scrollTop : targetPos - $('header').height()
	}, 500)
}

function scrollChk(){
	var scrollTop = $(window).scrollTop();
	var visualH = $('.visual').height();
	var headerH = $('header').height();

	if(scrollTop > (visualH - headerH)) {
		$('header').addClass('scrolling')
	}else {
		$('header').removeClass('scrolling')
	}
}

function osActive(){
	var _windowOffset = window.innerHeight * 0.8;
	for( var i = 0; i< document.querySelectorAll('.animate').length; i++ ){
		var el = document.querySelectorAll('.animate')[i];

		if( el.getBoundingClientRect().top < _windowOffset ){
				if( !el.classList.contains('active') ){
						el.classList.add('active');
				}
		}else{
				el.classList.remove('active');
		}
	}
}

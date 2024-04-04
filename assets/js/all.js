
//header side popup
function allMenuToggle(){
    $('.navbar-nav').toggleClass('on');
    $('.pc_ham').toggleClass('on');
    $('.header').toggleClass('on');
    $('.nav-side').toggleClass('on');
}

//scroll bar
let lastScroll = 0;
$(window).on('scroll', function(){
    let scrollTop = $(this).scrollTop();
    let hH = $('.header').innerHeight();

    if(scrollTop > lastScroll) {
        //down
        $('.header').css('top', -hH );
    } else {
        // up
        $('.header').css('top', 0);
    }
    lastScroll = scrollTop;
});

//견적신청 팝업
function formBx(){
//    $('.m-form').toggleClass('on');
    $('.side_hd_pop').toggleClass('on');
}

//close btn
function closeBtn(v){
    if(v === 1){
        $('.kakao-bx').hide('');
    }else{
        $('.m-form').toggleClass('on');
    }		
}

//탭버튼
function tabBtn(v){
	$('.main8-item').removeClass('active');
	$('.main8-item'+v).addClass('active');

	$('.main8-img-bx').removeClass('on');
	$('.main8-img-bx'+v).addClass('on');
}


//메뉴몬 주문앱 스와이퍼
var swiper = new Swiper('.x-swiper', {
	slidesPerView:2,
	spaceBetween: 20,
	pagination: {
		mode: 'horizontal',
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	loop: false,
	breakpoints: {
        575: {
            slidesPerView: 1,  
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 2,  
            spaceBetween: 15,
       },
    },
});

//매장사진 스와이퍼
var swiper = new Swiper('.main10-swiper', {
	slidesPerView:1,
	spaceBetween: 5,
	pagination: {
		mode: 'horizontal',
		el: '.swiper-pagination2',
		clickable: true,
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	loop: false,
	navigation: {
		nextEl: '.next-btn',
		prevEl: '.prev-btn',
	},
	breakpoints: {
	  575: {
		slidesPerView: 1,  
		spaceBetween: 15,
	  },
	  1024: {
		slidesPerView: 1,  
		spaceBetween: 15,
	  },
	},
});


//폼 버튼 컬러 변경
$(function(){
	$("#mainfrm .form-input").on('keyup', function(){
		var inputed = 0;
		$("#mainfrm .form-input").each(function(){
			if($(this).val() != ''){
				inputed++;
			}
		});
		console.log(inputed, $("#mainfrm .form-input").length);

		if($("#mainfrm .form-input").length <= inputed){
			$(".sbm-btn").attr("style","background:#FFCF5D");
		}else{
			$(".sbm-btn").attr("style","background:#E8E8E8");
		}
	});

	$(".m-form .form-input").on('keyup', function(){
		var inputed = 0;
		$(".m-form .form-input").each(function(){
			if($(this).val() != ''){
				inputed++;
			}
		});
		console.log(inputed, $("#mainfrm .form-input").length);

		if($(".m-form .form-input").length <= inputed){
			$(".sbm-btn").attr("style","background:#FFCF5D");
		}else{
			$(".sbm-btn").attr("style","background:#E8E8E8");
		}
	});
});

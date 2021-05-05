(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu',
    
});

// Stikey Js  
(function () {
    var nav = $('.menu-nav-sec');
    var scrolled = false;
    $(window).on('scroll', function () {
      if (120 < $(window).scrollTop() && !scrolled) {
        nav.addClass('sticky_menu animated fadeInDown').animate({ 'margin-top': '0px' });
        scrolled = true;
      }
      if (90 > $(window).scrollTop() && scrolled) {
        nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
        scrolled = false
      }
    });
  }());

// service
$('.portfolio-hero').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    autoplay:true,
     navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:2
        },
        1000:{
            items:4
        }
    }
})




//LightBox / Fancybox
if($('.lightbox-image').length) {
	$('.lightbox-image').fancybox({
		openEffect  : 'fade',
		closeEffect : 'fade',
		helpers : {
			media : {}
		}
	});
}


//
$('#bar1').barfiller({barColor: "#05fab8"});
$('#bar2').barfiller({barColor: "#05fab8"});
$('#bar3').barfiller({barColor: "#05fab8"});
$('#bar4').barfiller({barColor: "#05fab8"});
$('#bar5').barfiller({barColor: "#05fab8"});
$('#bar6').barfiller({barColor: "#05fab8"});


})(jQuery);	
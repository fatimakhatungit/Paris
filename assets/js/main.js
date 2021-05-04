(function ($) {
"use strict";


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
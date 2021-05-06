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

  // Menu Nav

function smoothSctollTop() {

	$('.main-menu ul li > a,.mean-nav ul li > a').on('click', function (event) {

		var target = $(this.getAttribute('href'));

		if (target.length) {

			event.preventDefault();

			$('html, body').stop().animate({

				scrollTop: target.offset().top - 100

			}, 1000);

		}

	});

}

smoothSctollTop();

  //site menu start
  $('.info-bar').on('click', function () {
    $('.extra-info').addClass('info-open');
  })

  $('.close-icon').on('click', function () {
    $('.extra-info').removeClass('info-open');
  })



 $('#click_advance').click(function(){
$('#display_advance').toggle('1000');
$(this).html('<i class=" far fa-eye-slash"></i>');

});

//site menu end

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

// testimonial-active
$('.testimonial-active').owlCarousel({
  loop:true,
  nav:false,
  dots:true,
  autoplay:true,
   navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      767:{
          items:1
      },
      1000:{
          items:1
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


// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}



// counterUp
$('.counter').counterUp({
  delay: 10,
  time: 1000
});


})(jQuery);	
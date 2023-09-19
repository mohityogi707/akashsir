// // on scorll navbar
window.onscroll = function () {
    scrollFunction();
};
var first = true;
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").classList.add('fixed-navbar');
    }
    else {
        document.getElementById("navbar").classList.remove('fixed-navbar');
    }
}




// channel img owl carousel
$(document).ready(function() {
$(".channelCarousel").owlCarousel({
    margin: 20,
    nav: false,
    dots: false,
    loop:true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      576: {
        items: 1.3,
        dots: true,
      },
      768: {
        items: 2,
        dots: true,
      },
      992: {
        items: 2,
        dots: true,
      },
      1200: {
        items: 2,
        dots: false,
      },
    },
  });
  });



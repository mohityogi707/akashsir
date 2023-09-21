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
    autoplayTimeout: 6000,
    autoplaySpeed: 6000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      576: {
        items: 1.3,
        margin: 20,
      },
      768: {
        items: 2,
      },
    },
  });
  });




 $(document).ready(function () {
  const lightbox = GLightbox({
    selector: '.glightbox',
});
 });

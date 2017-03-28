$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      }
  });
  $('.scrollToTop').hover(function() {
      $(this).animate({
          width: "10vw"
      }, {
          duration: 100,
      }, "easeIn");
      $(this).html('Scroll to top');
  });
  $('.scrollToTop').on('mouseleave', function() {
      $(this).html('<i class="fa fa-arrow-up" aria-hidden="true"></i>').animate({
          width: "4vw"
      }, 200);
  });   
});
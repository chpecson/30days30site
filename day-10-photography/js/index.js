$(function(){
  $('#homeLink').click(function() {
    $('.site-wrapper').removeClass('plain-top');
    $('.site-wrapper').addClass('abstract-top');
  });
  $('#galleryLink').click(function() {
    $('.site-wrapper').removeClass('abstract-top');
    $('.site-wrapper').addClass('plain-top');
  });
});
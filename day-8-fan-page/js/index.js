$(function(){
  $('#linuxHead').click(function(){       
    if($('#gitDetails').hasClass('show')) {
      $('#gitDetails').collapse('toggle');
    };
    $('#linuxDetails').collapse('toggle');
  });
  
  $('#gitHead').click(function(){
    if($('#linuxDetails').hasClass('show')) {
      $('#linuxDetails').collapse('toggle');
    };
    $('#gitDetails').collapse('toggle');
  });
});
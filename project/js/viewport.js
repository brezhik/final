function viewport() {
  $('meta[name="viewport"]').attr('content','width=device-width, initial-scale=1.0');
  var ww  = $(window).width();

  if (ww < 768) {
      $('meta[name="viewport"]').attr('content','width=320px, user-scalable=no');
  } else {
      $('meta[name="viewport"]').attr('content','width=device-width, initial-scale=1.0');
  }
}

$(document).ready(function() {


  (function() {

    viewport();

    $(window).bind('orientationchange', function(event) {
      viewport();
    });
  });
});

$(window).resize(function () {
  viewport();
});

$('.header-menu-label').click(function(){
    $('body').toggleClass('overflow');
    });
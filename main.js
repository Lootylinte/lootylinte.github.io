$(document).ready(function(){
    $('.sidenav').sidenav();
  });

function preloaderFadeOutInit()
{
    $('.progress').fadeOut('slow');
    $('#overlayer').fadeOut('slow');
}

jQuery(window).on('load', function () 
{
    (function ($) {
      preloaderFadeOutInit();
      setInterval(function(e){
        $('body').attr('id','');
    }, 'slow');
      
    })(jQuery);
});
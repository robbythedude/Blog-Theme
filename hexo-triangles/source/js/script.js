(function($){
  $("#hobbiesbutton").on('click', function(){
    if ($('.slidediv').is(':visible')){
      $(".slidediv").slideUp();
    }else{
      $(".slidediv").slideDown();
    }
  });
})(jQuery);
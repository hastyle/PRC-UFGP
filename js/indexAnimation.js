$(window).scroll(function(){

  var $WinScroll = $(this).scrollTop();
  var employees = ('.emp-whole-wrapper');
  if ($WinScroll > $('.emp-whole-wrapper').offset().top - $(window).height()+ 300) {
    $('.stroke-wrapper-1').addClass('stroke-wrapper-1-animation');
    $('.stroke-wrapper-2').addClass('stroke-wrapper-2-animation');
    $('.employee-content-wrapper').addClass('employee-content-wrapper-animation');

  }

});

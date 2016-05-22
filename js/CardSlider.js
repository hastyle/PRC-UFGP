$('document').ready(function(){

  $('.circle').on('click',function(){
    //which dot was clicked
    var $employeeId= $(this).attr('data-employee');
    var $EmployeePicture = $('li[data-employee-picture='+$employeeId+']');
    var $EmployeeDescription = $('li[data-employee-description='+$employeeId+']');
    var $CardWrapper  = $('.card')
    var $ContentWrapper = $('.employee-content-wrapper');
    var $stroke1 = $CardWrapper.find('.stroke-wrapper-1');
    var $stroke2 = $CardWrapper.find('.stroke-wrapper-2');


    //activate the new dot and disable the old one
    $(this).addClass('activated')
      .siblings().removeClass('activated')
    //end of Dots

    //activate Picture Animation
    $EmployeePicture.siblings().children().addClass('fadeout-picture')
    $stroke1.addClass('fadeout-stroke1')
    $stroke2.addClass('fadeout-stroke2')
    setTimeout(
  function()
  {
    $EmployeePicture.siblings().addClass('hide')
    $EmployeePicture.removeClass('hide')
    $EmployeePicture.siblings().children().removeClass('fadeout-picture')
    $stroke1.removeClass('fadeout-stroke1')
    $stroke2.removeClass('fadeout-stroke2')
    $stroke1.addClass('fadein-stroke1')
    $stroke2.addClass('fadein-stroke2')
    $EmployeePicture.children().addClass('fadein-picture')
  },1500);
    $EmployeePicture.children().removeClass('fadein-picture')
    // end of Picture


    //activate Content Animation
    $ContentWrapper.addClass('fadeout-description')


    setTimeout(
  function()
  {
    $EmployeeDescription.siblings().addClass('hide')
    $EmployeeDescription.removeClass('hide')
    $ContentWrapper.removeClass('fadeout-description')
    $ContentWrapper.addClass('fadein-description')
  }, 1500);
    $ContentWrapper.removeClass('fadein-description')
    //end of Content



  });


});

$(function(){

// number of loaded images for preloader progress
  var loadedCount = 0; //current number of images loaded
  var imagesToLoad = $('.embed-responsive').length; //number of slides with .bcg container
  var loadingProgress = 0; //timeline progress - starts at 0
  $('.embed-responsive').imagesLoaded({
      background: true
  }).progress( function( instance, image ) {
      loadProgress();
  });

  function loadProgress(imgLoad, image)
  {
      //one more image has been loaded
      loadedCount++;

      loadingProgress = (loadedCount/imagesToLoad);

      // GSAP tween of our progress bar timeline
      TweenLite.to(progressTl, 0.7, {progress:loadingProgress, ease:Linear.easeNone});

  }

  //progress timeline
var progressTl = new TimelineMax({
    paused: true,
    onUpdate: progressUpdate,
    onComplete: loadComplete
});

progressTl
    //tween the progress bar width
    .to($('.progress span'), 1, {width:100, ease:Linear.easeNone});

//as the progress bar width updates and grows we put the percentage loaded in the screen
function progressUpdate()
{
    //the percentage loaded based on the tween's progress
    loadingProgress = Math.round(progressTl.progress() * 100);

    //we put the percentage in the screen
    $(".loader-counter").text(loadingProgress + '%');

}
});

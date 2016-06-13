$(function(){
  var $Diamond = $('.diamond'),
      tl = new TimelineLite(),
      controller = new ScrollMagic.Controller(),
      tween = tl.staggerFrom($Diamond,.6,{cycle:{x: [-300,300]},autoAlpha:0, ease: Back.easeOut.config(1.7)},.5),
      scene = new ScrollMagic.Scene({triggerElement:'.diamond', offset: -200})
              .setTween(tween)
	            .addTo(controller);



});

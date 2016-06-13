$(function(){
  var $HeroImage = $('.hero-image'),
      $BackgroundImage = $HeroImage.find('.background-image'),
      $AuthorImage = $HeroImage.find('.author-image'),
      $BlogTitle = $HeroImage.find('.blog-title'),
      $BlogAuthor =$HeroImage.find('.blog-author'),
      $BlogPost =$HeroImage.find('.blog-post'),
      $Quote = $HeroImage.find('blockquote'),
      $BlogImage =$HeroImage.find('.blog-image'),
      $BlogButton =$HeroImage.find('.blog-button'),
      $Form =$HeroImage.find('form'),
      $TextArea =$HeroImage.find('textarea'),
      $CommentsTitle =$('.comments-title'),
      $Commentors =$('.commentor'),
      tl = new TimelineLite();

      tl
        .from($BackgroundImage,.4,{y:100,autoAlpha:0, ease: Power4.easeOut})
        .from($AuthorImage,.4,{y:100,autoAlpha:0, ease: Power4.easeOut})
        .from($CommentsTitle,.4,{y:100,autoAlpha:0, ease: Power4.easeOut}, '-=.5')
        .staggerFrom($Commentors,.4,{y:100,autoAlpha:0, ease: Power4.easeOut}, 0.1, '-=.4')
        .from($BlogTitle,.4,{y:100,autoAlpha:0, ease: Power4.easeOut})
        .from($BlogAuthor,.4,{y:100,autoAlpha:0, ease: Power4.easeOut})
        .staggerFrom($BlogPost,.4,{y:100,autoAlpha:0, ease: Power4.easeOut}, 0.2)
        .from($Quote,.4,{y:100,autoAlpha:0, ease: Power4.easeOut})
        .from($BlogImage,.4,{y:100,autoAlpha:0, ease: Power4.easeOut})
        .from($BlogButton,.4,{y:100,autoAlpha:0, ease: Power4.easeOut})
        .from($Form,.4,{y:100,autoAlpha:0, ease: Power4.easeOut})
        .from($TextArea,.4,{y:100,autoAlpha:0, ease: Power4.easeOut});
        //.staggerFrom($Commentors,.4,{y:100,autoAlpha:0, ease: Power4.easeOut}, 0.1);
});

/* Author: meltmedia
*/

(function() {

  $.Mobile = ($('body').hasClass('webkit-mobile') || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)));

  if($.Mobile){
    $(document)
      .TouchEnable()
      .bind('KEYBOARD_RIGHT', function(event) {
        $('#image-slider').cycle('prev');
      })
      .bind('KEYBOARD_LEFT', function(event) {
        $('#image-slider').cycle('next');
      });
  }else{
    
  }

  function fadeInAll(elems) {
    var i=-1;
    function next() {
        i = i+1;
        if (i < elems.length)
          $(elems[i]).delay(50).animate({
            opacity: 1
          }, 500, 'easeInOutQuint', next);
    }
    next();
  }

  function fadeOutAll(elems) {
    var i=-1;
    function next() {
        i = i+1;
        if (i < elems.length)
          $(elems[i]).delay(50).animate({
            opacity: 0
          }, 500, 'easeInOutQuint', next);

    }
    next();
  }

  $.fn.cycle.transitions.heroSlide = function($cont, $slides, opts) {
    var $caption = $('#text-slider');

    $cont.parent().css('overflow','hidden');

    opts.fxFn = function(curr,next,opts,cb,fwd) {

        fadeOutAll($('#text-slider').find('li').eq(opts.currSlide).find('.slide-header'));

        console.log(opts.currSlide);

        $(curr).animate({
          opacity: 0,
          left: '-=30px'
        }, 500, opts.easing, function() {

          $(curr).css({
            display: 'none'
          });

        });

        $(next).css({ display: 'block' }).animate({
          opacity: 1,
          left: '+=30px'
        }, 500, opts.easing, function() {

          fadeInAll($('#text-slider').find('li').eq(opts.nextSlide).find('.slide-header'));

          console.log(opts.nextSlide);

        });

    };

  };

 $('#image-slider').cycle({
   fx: 'heroSlide',
   easing: 'easeInOutQuint',
   next: '#right-nav',
   prev: '#left-nav',
   timeout: 0
 });

 $(document.documentElement).keyup(function (e) {
    if (e.keyCode == 39)
    {        
       $('#image-slider').cycle('next');
    }

    if (e.keyCode == 37)
    {
        $('#image-slider').cycle('prev');
    }

});

  // $('#introduction').parallax(0, 2500, 0.1, true);
  $('#photos').parallax(0, 1500, 0.1, true);
  $('#additional-details').parallax(0, 500, 0.1, true);

  // Sublime Video Responsive Player

  // media query event handler
  if (matchMedia) {
    var mq = window.matchMedia("(max-width: 1000px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  function WidthChange(mq) {  
    if (mq.matches) {
      $(".video-container").css('display', 'block');

      sublimevideo.ready(function() {
        sublimevideo.prepare('rejecting-the-noise');
        resizeVideo();
      });

      $(window).resize(function() {
        resizeVideo();
      });
    }

    else {
      sublimevideo.ready(function() {
        sublimevideo.prepare('rejecting-the-noise');
      });
      $(".video-container").css('display', 'inline-block');
    }
  }  


// Prevents some flickering
  $('#rejecting-the-noise').css("visibility", "hidden");

  // Fluid column video is inside of
  var fluidParent = $(".video-container"),
  newWidth, newHeight;

  // Gets called when video needs resizing
  function resizeVideo() {
    newWidth = fluidParent.width();
    console.log(newWidth);
    
    // 1.78125 == Aspect Ratio of my videos
    sublimevideo.resize('rejecting-the-noise', newWidth, newWidth/1.78125);
  };

  // ScrollTo Nav links

  $('#navbar a').on('click', function(event) {
    event.preventDefault();

    var target = this.hash;
    $.scrollTo(target, 500, {easing:'easeInOutQuint',axis: 'y'});
  });

  $('#navbar').scrollspy();

  $('#photos').flexslider({
    animation: "slide",
    controlNav: true,
    controlsContainer: "#pagi",
    directionNav: false,
    slideshow: false,
    keyboardNav: true,
    animationLoop: false
  });

  $(window).on('scroll', function(event) {
    var scrolled = $(window).scrollTop();
    $('#parallax-1').css('top',(-100+(scrolled*0.1))+'px');
    $('#parallax-2').css('top',(300+(scrolled*0.2))+'px');
    $('#parallax-3').css('top',(-200+(scrolled*0.2))+'px');
    $('#parallax-4').css('top',(300+(scrolled*0.1))+'px');
  });

}());
/* Author: meltmedia
*/

(function() {

  // Prevents some flickering
  $('#the-video').css("visibility", "hidden");

  // Fluid column video is inside of
  var fluidParent = $(".main-column"),
  newWidth, newHeight;

  // Gets called when video needs resizing
  function resizeVideo() {
    newWidth = fluidParent.width();
    // 1.78125 == Aspect Ratio of my videos
    sublimevideo.resize('the-video', newWidth, newWidth/1.78125);
  };

  $(window).resize(function() {
    resizeVideo();
  });

  // When the resources are ready,
  // load up the video and size it correctly
  sublimevideo.ready(function() {
    sublimevideo.prepare('the-video');
    resizeVideo();
  });

  $('#navbar a').on('click', function(event) {
    event.preventDefault();
    target = this.hash;
    console.log(target);
    $.scrollTo(target, 500);
  });

  $('#navbar').scrollspy();

  $(window).on('scroll', function(event) {
    var scrolled = $(window).scrollTop();
    $('#parallax-1').css('top',(-100+(scrolled*0.5))+'px');
    $('#parallax-2').css('top',(-100+(scrolled*0.3))+'px');
    $('#parallax-3').css('top',(-100+(scrolled*0.4))+'px');
    $('#parallax-4').css('top',(-100+(scrolled*0.6))+'px');
  });

  var maxItems = 4;

  $('.gallery').cycle({
    fx:     'scrollHorz',
    speed:  '600',
    timeout: 0,
    pager: '#pagi'
  });
  }());
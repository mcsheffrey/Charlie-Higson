/* Author: meltmedia
*/

(function() {

  $.Mobile = ($('body').hasClass('webkit-mobile') || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)));

  if($.Mobile){
    //code for mobile device
  }else{
    
  }

  $('#introduction').parallax(0, 2500, 0.1, true);
  $('#photos').parallax(0, 1500, 0.1, true);
  $('#additional-details').parallax(0, 500, 0.1, true);

  // Chris Coyier Sublime Video Trick

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

  $(window).on('resize', function(event) {
    console.log(this);
    
    resizeVideo();
  });

  // When the resources are ready,
  // load up the video and size it correctly
  sublimevideo.ready(function() {
    sublimevideo.prepare('the-video');
    resizeVideo();
  });

  // ScrollTo Nav links

  $('#navbar a').on('click', function(event) {
    event.preventDefault();

    target = this.hash;
    $.scrollTo(target, 500);
  });

  $('#navbar').scrollspy();

  $(window).on('scroll', function(event) {
    var scrolled = $(window).scrollTop();
    $('#parallax-1').css('top',(-100+(scrolled*0.5))+'px');
    $('#parallax-2').css('top',(-100+(scrolled*0.3))+'px');
    $('#parallax-3').css('top',(-200+(scrolled*0.4))+'px');
    $('#parallax-4').css('top',(200+(scrolled*0.6))+'px');
  });

}());
/* Author: meltmedia
*/

(function() {

  $.Mobile = ($('body').hasClass('webkit-mobile') || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)));

  if($.Mobile){
    //code for mobile device
  }else{
    
  }

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
  // media query change
  function WidthChange(mq) {
    if (mq.matches) {
      sublimevideo.ready(function(){
        sublimeResize();
      });

      $(window).resize(function(){
        sublimeResize();
      });
    }
  }

function sublimeResize(){
  var sublimeWidth=$(".video-container").innerWidth();
  /*
    Set sublimeAspect according to the aspect ratio of your video.
    Widescreen (16:9) = 1.7777778
    Standard (4:3) = 1.3333333
    Determine your own aspect ratio by width/height.
  */
  var sublimeAspect = 1.8049327;
  sublimevideo.resize("rejecting-the-noise",sublimeWidth,sublimeWidth/sublimeAspect);
}
  // ScrollTo Nav links

  $('#navbar a').on('click', function(event) {
    event.preventDefault();

    target = this.hash;
    $.scrollTo(target, 500, {easing:'easeInOutQuint'});
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
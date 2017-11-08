//No need to ask, he's a smooth operator
window.smoothScrollToElement = (function(){

  'use strict';

  var default_speed = 1800;

  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame   ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      function( callback ){
        window.setTimeout(callback, 1000 / 60);
      };
  })();

  function scrollToY(scrollTargetY, speed) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    console.log('scrolling at' + speed);
    console.log(scrollTargetY);

    var scrollY = window.scrollY || document.documentElement.scrollTop,
      currentTime = 0;
      scrollTargetY = scrollTargetY || 0;

    // min time .1, max time 20 seconds
    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 20));

    console.log(time);

    // easing equation
    function easingEquation(pos) {
      return (-0.5 * (Math.cos(Math.PI * pos) - 1));
    }

    // add animation loop
    function tick() {
      currentTime += (1 / 60);

      var p = currentTime / time;
      var t = easingEquation(p);

      if (p < 1) {
        requestAnimFrame(tick);
        window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
      } else {
        window.scrollTo(0, scrollTargetY);
      }
    }

    // call it once to get started
    tick();
  }

  return function(id){
    var $elem = $('#' + id);
    scrollToY($elem.offset().top, default_speed);
  };

})();
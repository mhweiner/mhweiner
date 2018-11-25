import React from 'react';

import styles from './CapsuleIcon.scss';

export default class CapsuleIcon extends React.Component {

  ref = React.createRef();

  shootingStar(elementContainer, zIndex, x0, angle, duration, brightness) {


    let startTime = Date.now();
    let heightOfScope = elementContainer.offsetHeight;
    let theta = angle * Math.PI / 180.0;
    let totalDistance = Math.round(heightOfScope * Math.sin(45) + 400);
    let velocity = totalDistance / duration; //pixel/ms
    let animateInterval;
    let raf = (function() {
      return window.requestAnimationFrame   ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
          window.setTimeout(callback, 1000 / 60);
        };
    })();
    let el;

    function createElement() {

      let randomId = 'shooting-star-' + Math.floor(Math.random()*10000000);
      let newElement = '<div id="' + randomId + '"></div>';

      elementContainer.insertBefore(newElement, parent.firstChild);
      setTimeout(function(){

        el = elementContainer.querySelector('#' + randomId);
        applyCSS();
        startAnimating();

      }, 10);

    }

    function applyCSS() {

      el.style.width = '150px';
      el.style.height = '1px';
      el.style.background = 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))';
      el.style.left = 0;
      el.style.bottom = '100%';
      el.style.zIndex = zIndex;
      el.style.position = 'absolute';
      el.style.opacity = brightness;

    }

    function startAnimating() {

      animateInterval = setInterval(() => {

        raf(() => {

          let t = Date.now() - startTime;

          if (t >= duration) {

            //finished!
            clearInterval(animateInterval);
            el.remove();
            return;

          }

          _updatePosition(t);

        });

      }, 10);

    }

    function _updatePosition(t) {

      let x = Math.round(velocity * t * Math.cos(theta) + x0);
      let y = Math.round(velocity * t * Math.sin(theta));
      let transform = 'translate3d(' + x + 'px, ' + y + 'px, 0) rotate3d(0, 0, 1, ' + angle + 'deg)';

      el[0].style.transform = transform;
      el[0].style.WebkitTransform = transform;

    }

    createElement();

  }

  render() {

    return (
      <div className={styles.default} ref={this.ref}>
        <object type="image/svg+xml" data="static/images/capsule.svg"/>
      </div>
    );

  }

}
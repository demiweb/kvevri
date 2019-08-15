import Parallax from 'parallax-js';
import isTouch from '../helpers';

export default function setParralax() {
  function initParallaxJs() {
    const scenes = [].slice.call(document.querySelectorAll('.js-parallax-scene'));
    if(!scenes.length) return;

    scenes.forEach(scene => {
      const parallaxInstance = new Parallax(scene, {
        relativeInput: true
      });
    }); 
  };

  if(!isTouch) {
    initParallaxJs();
  };
};

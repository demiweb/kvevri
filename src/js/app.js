import $ from 'jquery';
import 'intersection-observer';

import sayHello from './lib/sayHello';
import setTouch from './components/setHTMLClassNames';
import setLazy from './components/setLazy';
import setSliders from './components/setSliders';
import setTabs from './components/setTabs';
import toggleMenu from './components/toggleMenu';
import setGallery from './components/setGallery';
import setParrallax from './components/setParralax';
import animateOnScroll from './components/animateOnScroll';
// import './components/animations';
import setTextareaHeight from './components/setTextareaHeight';
import setPopups from './components/setPopups';

$(() => {
  sayHello();
  setTouch();
  setLazy();
  setSliders();
  setTabs();
  toggleMenu();
  setGallery();
  setParrallax();
  animateOnScroll();
  setTextareaHeight();
  setPopups();
});
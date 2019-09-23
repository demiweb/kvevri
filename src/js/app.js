import $ from 'jquery';
import 'intersection-observer';
import './lib/polyfill';

import sayHello from './lib/sayHello';
import { setTouch, setReady } from './components/setHTMLClassNames';
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
import setScrollbar from './components/setScrollbar';
import toggleFormAdressBlock from './components/toggleFormAdressBlock';
import setDatepicker from './components/setDatepicker';

$(() => {
  sayHello();
  setTouch();
  setReady();
  setLazy();
  setSliders();
  setTabs();
  toggleMenu();
  setGallery();
  setParrallax();
  animateOnScroll();
  setTextareaHeight();
  setPopups();
  setScrollbar();
  toggleFormAdressBlock();
  setDatepicker();
});

window.setLazy = setLazy;

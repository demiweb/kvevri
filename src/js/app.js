import sayHello from './lib/sayHello';
import { setTouch } from './components/setHTMLClassNames';
import setLazy from './components/setLazy';
import setSliders from './components/setSliders';
import setTabs from './components/setTabs';


$(function() {
  sayHello();
  setTouch();
  setLazy();
  setSliders();
  setTabs();
});

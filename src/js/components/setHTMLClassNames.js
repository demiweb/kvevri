import { isTouch, isIE } from '../helpers';
import { NO_TOUCH } from '../constants';

export function setTouch() {
  if (!isTouch) {
    document.documentElement.classList.add(NO_TOUCH);
  };
};

export function detectIE() {
  if(isIE) {
    document.documentElement.classList.add('is-ie');
  };
};

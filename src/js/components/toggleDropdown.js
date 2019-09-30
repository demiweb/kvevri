import { IS_ACTIVE } from '../constants';
import { isTouch } from '../helpers';

class Dropdown {
  constructor() {
    this.classNames = {
      btn: 'js-dropdown-btn',
      dropdown: 'js-dropdown',
    };
  }

  toggle(e) {
    if (!e.target.closest(`.${this.classNames.dropdown}`) && !e.target.closest(`.${this.classNames.btn}`)) {
      this.close();
    }

    this.btn = e.target.classList.contains(this.classNames.btn) ? e.target : null;
    if (!this.btn) return;

    e.preventDefault();

    this.dropdown = this.btn.parentNode.querySelector(`.${this.classNames.dropdown}`)
      || this.btn.nextElementSibling;

    this.btnsElse = [...document.querySelectorAll(`.${this.classNames.btn}`)].filter((btn) => btn !== this.btn);
    this.dropdownsElse = this.btnsElse.map((btn) => btn.parentNode.querySelector(`.${this.classNames.dropdown}`)
        || btn.nextElementSibling);

    this.btnsElse.forEach((btn) => {
      btn.classList.remove(IS_ACTIVE);
    });
    this.dropdownsElse.forEach((dropdown) => {
      // slideUp(dropdown);
      dropdown.classList.remove(IS_ACTIVE);
    });


    // slideToggle(this.dropdown);

    this.btn.classList.toggle(IS_ACTIVE);
    this.dropdown.classList.toggle(IS_ACTIVE);
  }

  close() {
    this.btns = [...document.querySelectorAll(`.${this.classNames.btn}`)];
    this.dropdowns = [...document.querySelectorAll(`.${this.classNames.dropdown}`)];

    this.btns.forEach((btn) => btn.classList.remove(IS_ACTIVE));
    this.dropdowns.forEach((dropdown) => dropdown.classList.remove(IS_ACTIVE));
  }

  _toggle() {
    document.addEventListener('click', this.toggle.bind(this));
  }

  init() {
    this._toggle();
  }
}

export default function toggleDropdown() {
  if (!isTouch) return;
  const dropdown = new Dropdown();
  dropdown.init();
}

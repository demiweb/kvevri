import { $DOC, $BODY, IS_ACTIVE, NO_SCROLL } from '../constants';

class Burger {
  init() {
    $DOC.on('click', `.${Burger.classNames.burger}`, this.toggle.bind(this));
  };

  toggle(e) {
    e.preventDefault();

    this.$btn = $(e.currentTarget);
    this.name = e.currentTarget.getAttribute('data-menu-target');
    this.$target = this.name 
      ? $(`.${Burger.classNames.menu}[data-menu="${name}"]`)
      : $(`.${Burger.classNames.menu}`);

    this.$btn.toggleClass(IS_ACTIVE);
    this.$target.toggleClass(IS_ACTIVE);

    if (this.onToggle) {
      this.onToggle(this.$btn, this.$target);
    };
  };

  close() {
    this.$burgers = $(`.${Burger.classNames.burger}`);
    this.$targets = $(`.${Burger.classNames.menu}`);

    if (this.$burgers.length > 0 && this.$targets.length > 0) {
      this.$burgers.removeClass(IS_ACTIVE);
      this.$targets.removeClass(IS_ACTIVE);
      
      if (this.onClose) {
        this.onClose(this.$burgers, this.$targets);
      };
    };   
  };
};

Burger.classNames = {
  burger: 'js-burger',
  menu: 'js-menu'
};

export default function toggleMenu() {
  const burger = new Burger();
  burger.onToggle = () => {
    $BODY.toggleClass(NO_SCROLL);
  };
  burger.onClose = () => {
    $BODY.removeClass(NO_SCROLL);
  };
  burger.init();

  const close = 'js-menu-close';

  $DOC.on('click', `.${close}`, e => {
    e.preventDefault();
    burger.close();
  });
};

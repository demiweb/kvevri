import $ from 'jquery';

export const {
  $DOC,
  $WIN,
  $HTMLBODY,
  $HTML,
  $BODY,

  IS_ACTIVE,
  IS_OPEN,
  IS_VISIBLE,
  IS_READY,
  IS_LOADING,
  IS_LOADED,
  HAS_FOCUS,
  IS_ANIMATE,
  IS_HIDDEN,
  NO_SCROLL,
  NO_TOUCH,
  HAS_ERROR,
  HAS_TEXT,
  IS_VALID,
  IS_FIXED,
  HAS_OPEN_MENU,
} = {
  $DOC: $(document),
  $WIN: $(window),
  $HTMLBODY: $('html, body'),
  $HTML: $('html'),
  $BODY: $('body'),

  IS_ACTIVE: 'is-active',
  IS_OPEN: 'is-open',
  IS_VISIBLE: 'is-visible',
  IS_READY: 'is-ready',
  IS_LOADING: 'is-loading',
  IS_LOADED: 'is-loaded',
  HAS_FOCUS: 'has-focus',
  IS_ANIMATE: 'is-animate',
  IS_HIDDEN: 'is-hidden',
  NO_SCROLL: 'no-scroll',
  NO_TOUCH: 'no-touch',
  HAS_ERROR: 'has-error',
  HAS_TEXT: 'has-text',
  IS_VALID: 'is-valid',
  IS_FIXED: 'is-fixed',
  HAS_OPEN_MENU: 'has-open-menu',
};

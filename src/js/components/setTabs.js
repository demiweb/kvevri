class Tabs {
  init() {
    this._initTabs();
  };

  destroy() {
    this._destroy();
  };

  toggleTabs(e) {
    e.preventDefault();
    this.$btn = $(e.currentTarget);
    this.$wrap = this.$btn.closest('.'+Tabs.classNames.wrap);
    this.$tabs = this.$wrap.find('.'+Tabs.classNames.tab);
    this.$items = this.$wrap.find('.'+Tabs.classNames.item);
    this.tabName = this.$btn.data('target-tab');
    this.$item = this.$wrap.find('[data-tab="'+this.tabName+'"]');

    this.$tabs.removeClass(Tabs.classNames.active);
    this.$items.removeClass(Tabs.classNames.active);

    this.$btn.addClass(Tabs.classNames.active);
    this.$item.addClass(Tabs.classNames.active);    
  };

  _initTabs() {
    this.toggleTabsBinded = this.toggleTabs.bind(this);
    $(document).on('click', '.'+Tabs.classNames.tab, this.toggleTabsBinded);
  };

  _destroy() {
    $(document).off('click', '.'+Tabs.classNames.tab, this.toggleTabsBinded);
  };
};

Tabs.classNames = {
  wrap: 'js-tabs',
  tab: 'js-tab',
  item: 'js-tabs-item',
  active: 'is-active'
};

export default function setTabs() {
  const tabs = new Tabs();
  tabs.init();
}

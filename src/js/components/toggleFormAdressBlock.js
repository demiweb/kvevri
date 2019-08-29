import { IS_HIDDEN } from '../constants';

class AddressBlock {
  constructor(input) {
    this.input = input;
  }

  getElements() {
    this.name = this.input.name;
    this.targetData = this.input.dataset.toggleBlockTarget;
    this.block = document.querySelector(`.js-toggle-block[data-toggle-block="${this.targetData}"]`);
    this.inputsAll = [].slice.call(document.querySelectorAll(`input[name="${this.name}"]`));
    this.inputsElse = this.inputsAll.filter((elseInput) => {
      if (elseInput !== this.input) {
        return elseInput;
      }
      return null;
    });
  }

  toggle() {
    if (this.input.checked) {
      this.block.classList.remove(IS_HIDDEN);
    } else {
      this.block.classList.add(IS_HIDDEN);
    }
  }

  hideBlock() {
    this.block.classList.add(IS_HIDDEN);
  }

  toggleBlock() {
    this.toggle();
    this.input.addEventListener('change', this.toggle.bind(this));
    this.inputsElse.forEach((inputElse) => {
      inputElse.addEventListener('change', this.hideBlock.bind(this));
    });
  }

  init() {
    this.getElements();
    this.toggleBlock();
  }
}

export default function toggleFormAdressBlock() {
  const inputs = [].slice.call(document.querySelectorAll('.js-toggle-btn'));
  if (!inputs.length) return;

  inputs.forEach((input) => {
    const adrBlock = new AddressBlock(input);
    adrBlock.init();
  });
}

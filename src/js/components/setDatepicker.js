import flatpickr from 'flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru';

class Picker {
  constructor(input, options) {
    this.input = input;
    this.type = input.dataset.type || 'date';
    this.options = options[this.type];
  }

  _initPlugin() {
    this.plugin = flatpickr(this.input, this.options);
  }

  init() {
    this._initPlugin();
  }
}

export default function setDatepicker() {
  const inputs = [].slice.call(document.querySelectorAll('.js-picker'));
  if (!inputs.length) return;

  inputs.forEach((input) => {
    const locale = Russian;
    const options = {
      time: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        time_24hr: true,
        disableMobile: 'true',
      },
      date: {
        locale,
        disableMobile: 'true',
        enableTime: true,
        time_24hr: true,
      },
    };

    const picker = new Picker(input, options);
    picker.init();
  });
}

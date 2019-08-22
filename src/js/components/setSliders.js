import Swiper from 'swiper/dist/js/swiper';
import setLazy from './setLazy';
import { IS_VISIBLE } from '../constants';

class MySlider {
  constructor(slider, getOptions) {
    this.slider = slider;
    this.name = slider.dataset.slider;
    this.wrap = slider.closest('.slider__wrap');
    this.prev = this.wrap.querySelector('.js-prev');
    this.next = this.wrap.querySelector('.js-next');
    this.pagination = this.wrap.querySelector('.js-pagination');
    this.slides = [].slice.call(slider.querySelectorAll('.swiper-slide'));

    this.options = getOptions({
      next: this.next,
      prev: this.prev,
      pagination: this.pagination,
    })[this.name];
  }

  init() {
    this._initSlider();
    if (this.name === 'gallery') {
      this.toggleGallerySlides();
    }
  }

  _initSlider() {
    this.mySwiper = new Swiper(this.slider, this.options);
  }

  toggleGallerySlides() {
    this.slides.forEach((slide) => {
      const myObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(IS_VISIBLE);
          } else {
            entry.target.classList.remove(IS_VISIBLE);
          }
        });
      }, { threshold: 0.95 });
      myObserver.observe(slide);
    });
  }
}

export default function setSliders() {
  const sliders = [].slice.call(document.querySelectorAll('.js-slider'));
  if (!sliders.length) return;

  function getOptions({ next, prev, pagination }) {
    return {
      hero: {
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        loop: true,
        breakpoints: {
          575: {
            pagination: {
              el: pagination,
              clickable: true,
            },
          },
        },
        on: {
          init: setLazy,
        },
      },
      items: {
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
          1399: {
            spaceBetween: 20,
          },
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 1,
          },
        },
        on: {
          init: setLazy,
        },
      },
      gallery: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        grabCursor: true,
        // centeredSlides: true,
        loop: true,
        breakpoints: {
          767: {
            centeredSlides: true,
          },
          575: {
            spaceBetween: 20,
            centeredSlides: true,
          },
        },
        on: {
          init: setLazy,
        },
      },
      testimonials: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: pagination,
          clickable: true,
        },
        breakpoints: {
          1399: {
            spaceBetween: 20,
          },
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 1,
          },
        },
        on: {
          init: setLazy,
        },
      },
    };
  }

  sliders.forEach((slider) => {
    const mySlider = new MySlider(slider, getOptions);
    mySlider.init();
  });
}

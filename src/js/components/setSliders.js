import setLazy from './setLazy';
import Swiper from 'swiper';

export default function setSliders() {
  const $sliders = $('.js-slider');
  if(!$sliders.length) return;

  $sliders.each((i, slider) => {
    const name = slider.dataset.slider;
    const $wrap = $(slider).closest('.slider__wrap');
    const prev = $wrap.find('.js-prev')[0];
    const next = $wrap.find('.js-next')[0];
    const pagination = $wrap.find('.js-pagination')[0];
    const options = {
      hero: {
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        loop: true,
        breakpoints: {
          568: {
            pagination: {
              el: pagination,
              type: 'bullets',
            }
          }
        },
        on: {
          init: setLazy
        }
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
          768: {
            slidesPerView: 1
          },
          992: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          },
          1400: {
            spaceBetween: 20
          }
        },
        on: {
          init: setLazy
        }
      },
      gallery: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        grabCursor: true,
        centeredSlides: true,
        breakpoints: {
          568: {
            spaceBetween: 20
          }
        }
      }
    };

    const mySlider = new Swiper(slider, options[name]);
  });
}; 

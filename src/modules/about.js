// eslint-disable-next-line import/extensions
import $ from 'jquery';

export const initJquerySlick = (elem) => {
  $(document).ready(() => {
    $(elem).slick({
      infinite: false,
      speed: 300,
      rows: 3,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow:
        '<button type="button" class="slick-prev slick-arrow">' +
        '<img src="img/prevArrow.png" />' +
        '</button>',
      nextArrow:
        '<button type="button" class="slick-next slick-arrow">' +
        '<img src="img/nextArrow.png" />' +
        '</button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
};

export const destroyJquerySlick = elem => $(elem).slick('unslick');

"use strict"
let bg__elements = document.querySelectorAll('.bg-src');
bg__elements.forEach(element => {
  let bg_img_src = element.getAttribute('data-bg-src');
  element.style.backgroundImage = 'url(' + bg_img_src + ')';
});
//слайдер в шапке на главной странице
$('.promo-slider__wrap').slick({
  slidesToShow: 1,
  slidesToScroll: 1,               
  dots: true,
  arrows:false,
  infinite: true,
  dotsClass: 'promo-slider__slick-dots'
});
//мини-слайдер под слайдером в шапке главной страницы
$('.advantages__slider-wrap').slick({
  slidesToShow: 3,
  slidesToScroll: 3,               
  dots: false,
  arrows:false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//слайдер в секции "Лидеры продаж"
$('.products-list__inner--bestsellers-slider').slick({
  slidesToShow: 4,
  margin: 45,
  slidesToScroll: 1,               
  dots: false,
  arrows:false,
  infinite: true,
  dotsClass: 'bestseller-slider__slick-dots',
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
//слайдер "Популярные товары"
$('.products-list__inner--popular-slider').slick({
  slidesToShow: 4,
  margin: 45,
  slidesToScroll: 1,               
  dots: false,
  arrows:false,
  infinite: true,
  dotsClass: 'bestseller-slider__slick-dots',
  responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
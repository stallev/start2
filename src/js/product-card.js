if($('.product__main-slider')){
  $('.product__main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,               
    dots: false,
    arrows:false,
    infinite: true,
    asNavFor: '.product__thumb-slider',
    responsive:[
      {
        breakpoint: 765,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          dotsClass: 'main-slider-slick-dots',
        }
      }
    ]
  });  
}

if($('.product__thumb-slider')){
  $('.product__thumb-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,               
    dots: false,
    infinite: true,
    prevArrow:'<button class="slick-prev"></button>',
    nextArrow:'<button class="slick-next"></button>',
    asNavFor: '.product__main-slider',
    focusOnSelect: true,
    centerMode: false,
    vertical: true,
  });
}

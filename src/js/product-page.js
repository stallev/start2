if($('.product__main-slider')){
  $('.product__main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,               
    dots: false,
    arrows:true,
    infinite: true,
    prevArrow:'<button class="slick-prev"></button>',
    nextArrow:'<button class="slick-next"></button>',
    asNavFor: '.product__thumb-slider',
    responsive:[
      {
        breakpoint: 769,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
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
    prevArrow:'<button class="thumb-slider-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow:'<button class="thumb-slider-next"><i class="far fa-angle-right"></i></button>',
    asNavFor: '.product__main-slider',
    focusOnSelect: true,
    centerMode: false,
    //vertical: true,
    responsive:[
      {
        breakpoint: 993,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          vertical: false,
        }
      },
      {
        breakpoint: 769,
        settings:{
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          vertical: false,
        }
      },
      {
        breakpoint: 577,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          vertical: false,
        }
      }
    ]
  });
}

//большой слайдер в быстром просмотре
if($('.product__main-slider--quickview')){
  $('.product__main-slider--quickview').slick({
    slidesToShow: 1,
    slidesToScroll: 1,               
    dots: false,
    arrows:true,
    infinite: true,
    prevArrow:'<button class="slick-prev"></button>',
    nextArrow:'<button class="slick-next"></button>',
    asNavFor: '.product__thumb-slider--quickview',
    responsive:[
      {
        breakpoint: 769,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dotsClass: 'main-slider-slick-dots',
        }
      }
    ]
  });  
}

//малый слайдер в быстром просмотре
if($('.product__thumb-slider--quickview')){
  $('.product__thumb-slider--quickview').slick({
    slidesToShow: 3,
    slidesToScroll: 1,               
    dots: false,
    infinite: true,
    prevArrow:'<button class="thumb-slider-prev"><i class="far fa-angle-left"></i></button>',
    nextArrow:'<button class="thumb-slider-next"><i class="far fa-angle-right"></i></button>',
    asNavFor: '.product__main-slider--quickview',
    focusOnSelect: true,
    centerMode: false,
    responsive:[
      {
        breakpoint: 993,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          vertical: false,
        }
      },
      {
        breakpoint: 577,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          vertical: false,
        }
      }
    ]
  });
}

//панель product-info

let productNavTabLinks = document.querySelectorAll('.product__info-nav-link');
let productNavTabs = document.querySelectorAll('.product__info-content-item');

if(productNavTabLinks&&productNavTabs){
	productNavTabLinks.forEach(
		element => {
			element.addEventListener('click', function(e){
				e.preventDefault();
        productNavTabLinks.forEach(
          NavTabLink =>{
            NavTabLink.classList.remove('product__info-nav-link--active');
          }
        );
        productNavTabs.forEach(
          NavTab =>{
            NavTab.classList.remove('product__info-content-item--active');
          }
        );
				let activeNavTabID = e.target.getAttribute('data-tab-id');
        e.target.classList.add('product__info-nav-link--active');
				document.getElementById(activeNavTabID).classList.add('product__info-content-item--active');
			})
		}
	)
}

//счетчик товаров
let countBox = document.querySelectorAll('.count-box');
if(countBox){
  countBox.forEach(
    counter => {
      let minusBtn = counter.querySelector('.count-box__minus');
      let plusBtn = counter.querySelector('.count-box__plus');
      let countField = counter.querySelector('.count-box__value');
      let countStr = countField.value;
      let countValue = Number(countStr);
      minusBtn.addEventListener('click', function(e){
        e.preventDefault();
        if(countValue > 1){
          countValue--;
          countStr = String(countValue);
          countField.value = countStr;
        }
      });
      plusBtn.addEventListener('click', function(e){
        e.preventDefault();
        if(countValue < 100000){
          countValue++;
          countStr = String(countValue);
          countField.value = countStr;
        }
      });
    }
  )
}

//быстрый просмотр
let quickviewBtns = document.querySelectorAll('.product-card__quick-view');
let quickviewCloseBtn = document.querySelector('.product-quickview__icon-close-wrap');

if(quickviewBtns){
  quickviewBtns.forEach(
    btn => {
      btn.addEventListener('click', function(e){
        e.preventDefault();
        document.body.classList.add('quickview');
      })
    }
  )
}
if(quickviewCloseBtn){
  quickviewCloseBtn.addEventListener('click', function(){
    document.body.classList.remove('quickview');
  });
}

// let zoomingImages = document.querySelectorAll('.zoom');
// if(zoomingImages){
//   zoomingImages.forEach(
//     image => {
//       image.elevateZoom();
//     }
//   )
// }
// $('#zoom1').elevateZoom();
// $('#zoom2').elevateZoom();
// $('#zoom3').elevateZoom();
// $('#zoom4').elevateZoom();
// $('#zoom5').elevateZoom();
if($('.zoom__img')){
  $('.zoom__img').each(function(){
    $(this).elevateZoom(
    );
  });
}

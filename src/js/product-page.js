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
    prevArrow:'<button class="slick-prev"></button>',
    nextArrow:'<button class="slick-next"></button>',
    asNavFor: '.product__main-slider',
    focusOnSelect: true,
    centerMode: false,
    vertical: true,
    responsive:[
      {
        breakpoint: 993,
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
      console.log(countValue);
    }
  )
}
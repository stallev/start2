"use strict"

//поведение боковой панели

let filtrsTogggleBtns = document.querySelectorAll('.catalog-sidebar__toggle');
let closeSidebarBtn = document.querySelector('.catalog-sidebar__icon-close-wrap');
let leftCatalogSidebar = document.querySelector('.catalog-sidebar');
let returnSidebarBtn = document.getElementById('return-sidebar');
let catalogSidebarOverlay = document.querySelector('.catalog-sidebar__overlay');
if(filtrsTogggleBtns&&leftCatalogSidebar){
  filtrsTogggleBtns.forEach(
    filtrsTogggleBtn => {
      filtrsTogggleBtn.addEventListener('click', function(e){
        e.preventDefault();
        if(document.documentElement.clientWidth<993){
          document.querySelector('body').classList.toggle('sidebar-active');
          returnSidebarBtn.style.display = 'inline-block';
        }
        else{
          leftCatalogSidebar.classList.toggle('closed-left-sidebar');
          returnSidebarBtn.style.display = 'inline-block';
        }
      });
    }
  );
  returnSidebarBtn.addEventListener('click', function(){
    leftCatalogSidebar.classList.remove('closed-left-sidebar');
    returnSidebarBtn.style.display = 'none';
  });
  if(document.documentElement.clientWidth<993){
    closeSidebarBtn.addEventListener('click', function(){
      document.querySelector('body').classList.toggle('sidebar-active');
      returnSidebarBtn.style.display = 'inline-block';
    });
  }
}
if(catalogSidebarOverlay){
  catalogSidebarOverlay.addEventListener('click',  function (e) {
    document.querySelector('body').classList.toggle('sidebar-active');
    returnSidebarBtn.style.display = 'inline-block';
  });
}
//изменяем чекбоксы в фильтре
let chkboxFilterLinks = document.querySelectorAll('.filter__options-list--chkbox .filter__option-link');
if(chkboxFilterLinks){
	chkboxFilterLinks.forEach(
		element => {
			element.addEventListener('click', function(e){
				e.preventDefault();
				e.target.closest('.filter__option-link').classList.toggle('checked-option');
			})
		}
	)
}
//ползунок для фильтра

let input0 = document.querySelector('.filter__price-control-min');
let input1 = document.querySelector('.filter__price-control-max');
const inputs = [input0, input1];
document.addEventListener('DOMContentLoaded', ()=>{
  let priceFiltr = document.querySelector('.filter__price-filter');
  if(priceFiltr){
    noUiSlider.create(priceFiltr, {
      start: [250, 3250],
      tooltips: false,
      step: 1,
      connect: true,
      padding: 6,
      range: {
          'min': 250,
          'max': 3250
      },
    });
    priceFiltr.noUiSlider.on('update', function (values, handle) {
      inputs[handle].innerHTML = String(Math.round(values[handle]))+'р';
    });
    

  }
});
//изменяем представление карточек в каталоге с табличного на колоночный вид и обратно
let productList = document.querySelector('.products-list--catalog');
let productListViewControls = document.querySelector('.products-list__controls-change-grid');
if(productList&&productListViewControls){
  let gridViewBtn = document.querySelector('.products-list__controls-to-grid');
  let columnViewBtn = document.querySelector('.products-list__controls-to-column');
  let productCards = productList.querySelectorAll('.product-card');
  
  if(gridViewBtn){
    gridViewBtn.addEventListener('click', function(e){
      gridViewBtn.classList.add('products-list__controls-to-grid--active');
      columnViewBtn.classList.remove('products-list__controls-to-column--active');
      productList.classList.remove('products-list--catalog-column');
      productList.classList.add('products-list--catalog-grid');
      productCards.forEach(
        card => {
          card.classList.remove('product-card--one-view');
          card.classList.remove('col-lg-12');
          card.classList.add('col-sm-4');
          card.classList.add('col-6');
        }
      );
    });
    columnViewBtn.addEventListener('click', function(e){
      columnViewBtn.classList.add('products-list__controls-to-column--active');
      gridViewBtn.classList.remove('products-list__controls-to-grid--active');
      productList.classList.remove('products-list--catalog-grid');
      productList.classList.add('products-list--catalog-column');
      productCards.forEach(
        card => {
          card.classList.remove('col-sm-4');
          card.classList.remove('col-6');
          card.classList.add('col-lg-12');
          card.classList.add('product-card--one-view');
        }
      );
    });
  }
}

var string = "some text here with some amount of chars lets rteplaece it like a excerpt";
var description = getExcerpt(string,10);

// принимает строку и лимит после скольки знаков искать пробел и обрезать
function getExcerpt( str, limit ){
    var fullText = str;
    var shortText = str;
    shortText = shortText.substr( 0, shortText.lastIndexOf( ' ', limit ) ) + '...';
    var returnString = {
        fullText: fullText,
        shortText: shortText
    };
    return returnString;
}
let excerptsDescr = document.querySelectorAll('.excerpt-descr');
let excerptCatalogCartTitle = document.querySelectorAll('.excerpt-catalog-cart-title');
let blogItemExcerpt = document.querySelectorAll('.blog-item__excerpt');
let excerptAsideCatalogCartTitle = document.querySelectorAll('.aside-cart-title__excerpt');
if(excerptsDescr){
  excerptsDescr.forEach(
    item => {
      item.innerHTML = getExcerpt( item.innerHTML, 180 ).shortText;
    }
  );
}
if(excerptCatalogCartTitle){
  excerptCatalogCartTitle.forEach(
    item => {
      item.innerHTML = getExcerpt( item.innerHTML, 120 ).shortText;
    }
  );
}
if(blogItemExcerpt){
  blogItemExcerpt.forEach(
    item => {
      item.innerHTML = getExcerpt( item.innerHTML, 80 ).shortText;
    }
  );
}
if(excerptAsideCatalogCartTitle){
  console.log(excerptAsideCatalogCartTitle);
  excerptAsideCatalogCartTitle.forEach(
    item => {
      item.innerHTML = getExcerpt( item.innerHTML, 60 ).shortText;
    }
  );
}


//about counter
// if($('.about__item-counts-value')){
//   $('.about__item-counts-value').countTo();
// }

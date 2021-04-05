"use strict"

//поведение боковой панели

let filtrsTogggleBtn = document.querySelector('.products-list__controls-filters');
let closeSidebarBtn = document.querySelector('.catalog-sidebar__close');
let leftCatalogSidebar = document.querySelector('.catalog-sidebar');

if(filtrsTogggleBtn&&leftCatalogSidebar){
  filtrsTogggleBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(document.documentElement.clientWidth<993){
      document.querySelector('body').classList.add('sidebar-active');
    }
    else{
      leftCatalogSidebar.classList.toggle('closed-left-sidebar');
    }
  })
}
if(closeSidebarBtn&&leftCatalogSidebar){
  closeSidebarBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(document.documentElement.clientWidth<993){
      document.querySelector('body').classList.remove('sidebar-active');
    }
    else{
      leftCatalogSidebar.classList.toggle('closed-left-sidebar');
    }
  })
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
document.addEventListener('DOMContentLoaded', ()=>{
  let priceFiltr = document.querySelector('.filter__price-filter');
  if(priceFiltr){
    noUiSlider.create(priceFiltr, {
      start: [250, 3250],
      tooltips: true,
      step: 1,
      connect: true,
      padding: 6,
      range: {
          'min': 250,
          'max': 3250
      },
    });
  }
});

//about counter
// if($('.about__item-counts-value')){
//   $('.about__item-counts-value').countTo();
// }

"use strict"

//поведение боковой панели

let filtrsTogggleBtn = document.querySelector('.products-list__controls-filters');
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
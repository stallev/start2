"use strict"

//right sidebar


let closeSidebarBtn = document.querySelector('.sidebar__icon-close-wrap');
let rightSidebar = document.querySelector('.sidebar--right');
let displaySidebarBtn = document.querySelector('.sidebar-toggle');
let sidebarOverlay =  document.querySelector('.sidebar__overlay');
if(displaySidebarBtn&&rightSidebar&&closeSidebarBtn){
  displaySidebarBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(document.documentElement.clientWidth<993){
      document.querySelector('body').classList.add('sidebar-active');
    }
  })
  //скрытие сайдбара при клике на пустое место
  if(sidebarOverlay){
    sidebarOverlay.addEventListener('click', function(){
      document.querySelector('body').classList.remove('sidebar-active');
    });
  }
}
if(closeSidebarBtn&&rightSidebar){
  closeSidebarBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log(closeSidebarBtn);
    if(document.documentElement.clientWidth<993){
      document.querySelector('body').classList.remove('sidebar-active');
    }
  })
}
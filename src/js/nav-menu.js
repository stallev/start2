"use strict"
const screenWidth = document.documentElement.clientWidth;
let body = document.querySelector('body');
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}

// Меню бургер
const iconMenu = document.querySelector('.header__menu-icon-wrap');
const mobileNavBlock = document.querySelector('.header__nav-block');
const menuBody = document.querySelector('.nav');
const closeIcon = document.querySelector('.mobile-nav__icon-close-wrap');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.add('_lock');
	});
}
if (closeIcon) {
	closeIcon.addEventListener("click", function (e) {
		document.body.classList.remove('_lock');
	});
}
//показываем и скрываем списки и подменю
let hiddenItemsControls = document.querySelectorAll('.hidden-items-control');
if(hiddenItemsControls){
	hiddenItemsControls.forEach(
		element => {
			element.addEventListener('click', function(e){
				e.preventDefault();
				e.target.classList.toggle('open-state');
				let sublist = e.target.closest('.sublist-title').nextSibling.nextElementSibling;
				console.log(sublist);
				sublist.classList.toggle('hidden-items');
			})
		}
	)
}

//меню футер
const footerMenu = document.querySelector('.footer__mobile-nav-wrap');
if(footerMenu&&(screenWidth<769)){
	let scrollPos = 0;
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		if (st > scrollPos){
			//$('#result').html('Вниз');
			console.log('st');
			body.classList.add('show-footer-menu');
		} else {
			//$('#result').html('Вверх');
			console.log('st');
			//body.classList.remove('show-footer-menu');
		}
		scrollPos = st;
 });
	// window.addEventListener('scroll', function(){
	// 	console.log('14585');
	// 	body.classList.add('show-footer-menu');
	// })
}
let headerMenu = document.querySelector('.main-header');
let headerMenuToggle = document.querySelector('.main-header__menu');

headerMenu.classList.remove('main-header--nojs');

headerMenuToggle.addEventListener('click', function () {
  if (headerMenu.classList.contains('main-header--close')) {
    headerMenu.classList.remove('main-header--close');
    headerMenu.classList.add('main-header--open');
  } else {
    headerMenu.classList.add('main-header--close');
    headerMenu.classList.remove('main-header--open');
  }
})



// let navMain = document.querySelector('.main-nav');
// let navToggle = document.querySelector('.main-nav__toggle');

// navMain.classList.remove('main-nav--nojs');

// navToggle.addEventListener('click', function () {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   }
// });

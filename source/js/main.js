let headerMenu = document.querySelector('.main-header');
let headerMenuToggle = document.querySelector('.main-header__menu');
let modalOpen = document.querySelector('.add-profile__link');
let modalIndex = document.querySelector('.modal-container');
let modalClose = document.querySelector('.modal-contant__link');
let scrollMenu = document.querySelector('.scroll-wrapper');
let sticky = scrollMenu.offsetTop;

headerMenu.classList.remove('main-header--nojs');

headerMenuToggle.addEventListener('click', function () {
  if (headerMenu.classList.contains('main-header--close')) {
    headerMenu.classList.remove('main-header--close');
    headerMenu.classList.add('main-header--open');
    headerMenu.classList.add('scroll-menu__open');
  } else {
    headerMenu.classList.add('main-header--close');
    headerMenu.classList.remove('main-header--open');
    headerMenu.classList.remove('scroll-menu__open');
  }
});

modalOpen.addEventListener('click', function (Event) {

  Event.preventDefault();

  if (modalIndex.classList.contains('modal-container--close')) {
    modalIndex.classList.remove('modal-container--close');
    modalIndex.classList.add('modal-container--open');
  }
});

modalClose.addEventListener('click', function () {
  modalIndex.classList.remove('modal-container--open');
  modalIndex.classList.add('modal-container--close');
});

window.onscroll = function()
{myFunction()};

function myFunction() {
  if (window.scrollY >= sticky) {
    scrollMenu.classList.add('scroll-menu__open');
    headerMenu.classList.add('main-header--scroll-menu-open');
  } else {
    scrollMenu.classList.remove('scroll-menu__open');
    headerMenu.classList.remove('main-header--scroll-menu-open');
  }
}

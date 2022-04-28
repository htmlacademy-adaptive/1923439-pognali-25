let headerMenu = document.querySelector('.main-header');
let headerMenuToggle = document.querySelector('.main-header__menu');
let modalOpen = document.querySelector('.add-profile__link');
let modalIndex = document.querySelector('.modal-container');
let modalClose = document.querySelector('.modal-contant__link');

headerMenu.classList.remove('main-header--nojs');

headerMenuToggle.addEventListener('click', function () {
  if (headerMenu.classList.contains('main-header--close')) {
    headerMenu.classList.remove('main-header--close');
    headerMenu.classList.add('main-header--open');
  } else {
    headerMenu.classList.add('main-header--close');
    headerMenu.classList.remove('main-header--open');
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

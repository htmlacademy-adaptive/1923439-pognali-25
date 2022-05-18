let headerMenu = document.querySelector('.main-header');
let headerMenuToggle = document.querySelector('.main-header__menu');
let countriesFilterToggle = document.querySelector('.countries-filter__button');
let countriesFilter = document.querySelector('.countries-filter');
let countriesFilterToggle2 = document.querySelector('.countries-filter__close');
let countriesFilterToggleDesktop = document.querySelector('.countries-filter__link');
let countriesFilterToggleButton = document.querySelector('.countries-filter__button--close');
let scrollMenu = document.querySelector('.scroll-wrapper');
let sticky = scrollMenu.offsetTop;
let innerPadding = document.querySelector('.main-header--inner');

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

countriesFilterToggleButton.addEventListener('click', function () {
  if (countriesFilterToggleButton.classList.contains('countries-filter__button--dots')) {
    countriesFilterToggleButton.classList.remove('countries-filter__button--dots');
    countriesFilterToggleButton.classList.add('countries-filter__button--x');
  } else {
    countriesFilterToggleButton.classList.remove('countries-filter__button--x');
    countriesFilterToggleButton.classList.add('countries-filter__button--dots');
  }
});

countriesFilterToggle2.addEventListener('click', function () {
  if (countriesFilter.classList.contains('countries-filter--desktop')) {
    countriesFilter.classList.remove('countries-filter--desktop');
    countriesFilter.classList.add('catalog-form__countries-filter--close');
  } });


countriesFilterToggleDesktop.addEventListener('click', function () {
  if (countriesFilter.classList.contains('catalog-form__countries-filter--close')) {
    countriesFilter.classList.remove('catalog-form__countries-filter--close');
    countriesFilter.classList.add('countries-filter--desktop');
  }
});

countriesFilterToggle.addEventListener('click', function () {
  if (countriesFilter.classList.contains('countries-filter--close')) {
    countriesFilter.classList.remove('countries-filter--close');
  } else {
    countriesFilter.classList.add('countries-filter--close');
  }
});

window.onscroll = function()
{myFunction()};

function myFunction() {
  if (window.scrollY >= sticky) {
    scrollMenu.classList.add('scroll-menu__open')
    innerPadding.classList.add('main-header--scroll-menu-catalog');
    headerMenu.classList.add('main-header--scroll-menu-open');
  } else {
    scrollMenu.classList.remove('scroll-menu__open');
    innerPadding.classList.remove('main-header--scroll-menu-catalog');
    headerMenu.classList.remove('main-header--scroll-menu-open');
  }
}

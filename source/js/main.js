let headerMenu = document.querySelector('.main-header');
let headerMenuToggle = document.querySelector('.main-header__menu');
let countriesSelect = document.querySelector('.popup-countries');
let countriesSelectToggle = document.querySelector('.plans-algoritm-countries__item--select');
let countriesFilterToggle = document.querySelector('.countries-filter__button');
let countriesFilter = document.querySelector('.countries-filter');
let countriesFilterToggle2 = document.querySelector('.countries-filter__close')
let countriesFilterToggleDesktop = document.querySelector('.countries-filter__link')
let countriesFilterToggleButton = document.querySelector('.countries-filter__button--open')


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
  if (countriesFilterToggleButton.classList.contains('countries-filter__button--x')) {
    countriesFilter.classList.remove('countries-filter--desktop');
    countriesFilterToggleButton.classList.remove('countries-filter__button--x');
    countriesFilterToggleButton.classList.add('countries-filter__button--dots');
    countriesFilter.classList.add('countries-filter--close');
  } else {
    countriesFilter.classList.remove('countries-filter--desktop');
  }
});

countriesFilterToggleDesktop.addEventListener('click', function () {
  if (countriesFilter.classList.contains('countries-filter--desktop')) {
    countriesFilter.classList.add('countries-filter--close');
  } else {
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

countriesSelectToggle.addEventListener('click', function () {
  if (countriesSelect.classList.contains('popup-countries--close')) {
    countriesSelect.classList.remove('popup-countries--close');
  } else {
    countriesSelect.classList.add('popup-countries--close');
  }
});

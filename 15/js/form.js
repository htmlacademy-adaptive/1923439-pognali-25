let headerMenu=document.querySelector(".main-header"),headerMenuToggle=document.querySelector(".main-header__menu"),countriesSelect=document.querySelector(".popup-countries"),countriesSelectToggle=document.querySelector(".plans-algoritm__input-countries--choisen"),scrollMenu=document.querySelector(".scroll-wrapper"),sticky=scrollMenu.offsetTop;function myFunction(){window.scrollY>=sticky?scrollMenu.classList.add("scroll-menu"):scrollMenu.classList.remove("scroll-menu")}headerMenu.classList.remove("main-header--nojs"),headerMenuToggle.addEventListener("click",(function(){headerMenu.classList.contains("main-header--close")?(headerMenu.classList.remove("main-header--close"),headerMenu.classList.add("main-header--open")):(headerMenu.classList.add("main-header--close"),headerMenu.classList.remove("main-header--open"))})),countriesSelectToggle.addEventListener("click",(function(){countriesSelect.classList.contains("popup-countries--close")?(countriesSelect.classList.remove("popup-countries--close"),countriesSelect.classList.add("popup-countries--open"),countriesSelectToggle.classList.add("plans-algoritm__input-countries--active")):(countriesSelect.classList.add("popup-countries--close"),countriesSelectToggle.classList.remove("plans-algoritm__input-countries--active"))})),window.onscroll=function(){myFunction()};
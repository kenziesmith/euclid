const body = document.body; // body
const burger = document.querySelector('[data-burger]'); // бургер
const burgerClose = document.querySelector('[data-burger-close]'); // активный бургер
const nav = document.querySelector('[data-menu]'); // меню
const navItems = document.querySelectorAll('.nav__item'); // элементы меню

const stepsBtn = document.querySelectorAll('.steps__btn'); // кнопки блока steps
const accordion = document.querySelectorAll('.accordion__item'); // элементы accordion
const accordionContent = document.querySelectorAll('.accordion__content'); // контент accordion

const search = document.querySelector('.search'); // блок поиска
const serachBtnFirst = document.querySelector('.search-icon-first'); // иконка поиска
const serachBtn = document.querySelector('.search-icon'); // иконка поиска
const serachClose = document.querySelector('.search__close'); // иконка закрытия поиска


// параметры swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 'auto',
});

// раскрыть search
serachBtn.addEventListener('click', () => {
  search.classList.add('active');
  serachBtnFirst.classList.remove('visible');
  serachBtn.classList.add('active');
});

// скрыть search
serachClose.addEventListener('click', () => {
  search.classList.remove('active');
  serachBtnFirst.classList.add('visible');
});

// меню и бугер
burger.addEventListener('click', () => {
  nav.classList.add('active');
  body.classList.add('lock');
  search.classList.remove('active');
  serachBtnFirst.classList.add('visible');
});

burgerClose.addEventListener('click', () => {
  nav.classList.remove('active');
  body.classList.remove('lock');
});

navItems.forEach(elem => {
  elem.addEventListener('click', () => {
    nav.classList.remove('active');
    body.classList.remove('lock');
  });
});

// tabs
stepsBtn.forEach(tabsBtn => {
  tabsBtn.addEventListener("click", function (event) {
    const path = event.currentTarget.dataset.path;

    stepsBtn.forEach(function (btn) { btn.classList.remove('active') });
    event.currentTarget.classList.add('active');

    stepsContent.forEach(function (tabContent) { tabContent.classList.remove("active") });
    document.querySelector(`[data-target="${path}"]`).classList.add("active");
    document.querySelector('.how-right__img').src = event.currentTarget.dataset.src; // меняет путь изображения по клику
  });
});

// accordion
accordion.forEach(btn => {
  btn.addEventListener('click', function (elem) {
    elem.currentTarget.classList.toggle('active');
  });
});

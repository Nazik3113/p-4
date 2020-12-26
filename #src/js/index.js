import Swiper, { Navigation } from 'swiper';
import gsap from 'gsap';
import webp from './modules/webp';

window.addEventListener('DOMContentLoaded', () => {
  webp();
  Swiper.use([Navigation]);

  let rooms = new Swiper('.swiper-container', {
    speed: 700,
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: false,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      1020: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      630: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
        speed: 500,
      },
    }
  });

  let quotes = new Swiper('.qoutes-container', {
    slidesPerView: 1,
    speed: 700,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  function openAlert(buttonClass) {
    const btn = document.querySelector(buttonClass);

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('plug');
    });
  }
  openAlert('.header__signIn');
  openAlert('.header__signUp');
  openAlert('.header__signIn-mobile');
  openAlert('.header__signUp-mobile');
  openAlert('.first__page-btn');
  openAlert('.about__consultation');
  openAlert('.realize__consultation');
  openAlert('.footer__logo');

  function alertTwo(btnsClass) {
    const btns = document.querySelectorAll(btnsClass);

    btns.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('plug');
      });
    });
  }
  alertTwo('.header__link');
  alertTwo('.partners__item');
  alertTwo('.footer__link');

  function mobileMenu(btnClass, btnActiveClass, menuClass, menuActiveClass) {
    const btn = document.querySelector(btnClass);
    const menu = document.querySelector(menuClass);

    btn.addEventListener('click', () => {
      btn.classList.toggle(btnActiveClass);
      menu.classList.toggle(menuActiveClass);
      document.body.classList.toggle('overflowY');
    });
  };
  mobileMenu('.mobile__menu-btn', 'mobile__menu-btn--active', '.mobile__menu', 'mobile__menu--active');

  const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

  tl.fromTo('.header__link', {y: '-50%', opacity: 0}, {y: '0%', opacity: 1, duration: 0.8, stagger: 0.1});
  tl.fromTo('.header__logo', {y: '-50%', opacity: 0}, {y: '0%', opacity: 1, duration: 0.8}, '-=0.8');
  tl.fromTo('.header__search', {y: '-50%', opacity: 0}, {y: '0%', opacity: 1, duration: 0.8}, '-=0.8');
  tl.fromTo('.header__signIn', {x: '50%', opacity: 0}, {x: '0%', opacity: 1, duration: 0.8}, '-=0.8');
  tl.fromTo('.header__signUp', {x: '50%', opacity: 0}, {x: '0%', opacity: 1, duration: 0.8}, '-=0.8');
  tl.fromTo('.first__page-title-row', {y: '30%', opacity: 0}, {y: '0%', opacity: 1, duration: 0.8, stagger: 0.1}, '-=0.6');
  tl.fromTo('.first__page-text', {y: '30%', opacity: 0}, {y: '0%', opacity: 1, duration: 0.8}, '-=0.8');
  tl.fromTo('.first__page-btn', {y: '50%', opacity: 0}, {y: '0%', opacity: 1, duration: 0.8}, '-=0.8');
  tl.fromTo('.first__page-img', {x: '10%', opacity: 0}, {x: '0%', opacity: 1, duration: 0.8}, '-=0.8');


});

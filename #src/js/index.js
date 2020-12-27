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

  function mobileMenu(btnClass, btnActiveClass, menuClass, menuActiveClass) {
    const btn = document.querySelector(btnClass);
    const menu = document.querySelector(menuClass);

    btn.addEventListener('click', () => {
      btn.classList.toggle(btnActiveClass);
      menu.classList.toggle(menuActiveClass);
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

  function mavMenu(linkClass) {
    const links = document.querySelectorAll(linkClass);
    links.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(item.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.mobile__menu').classList.remove('mobile__menu--active');
        document.querySelector('.mobile__menu-btn').classList.remove('mobile__menu-btn--active');
      });
    });
  }
  mavMenu('.header__link');
  mavMenu('.header__link-mobile');

  function openAlert(btnClass) {
    const btn = document.querySelectorAll(btnClass);
    const modal = document.querySelector('.modal');
    const modalBg = document.querySelector('.modalbg');

    btn.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('modal--active');
        modalBg.classList.add('modalbg--active');
      });
    });
  }
  openAlert('.header__logo');
  openAlert('.header__signUp');
  openAlert('.header__signIn');
  openAlert('.first__page-btn');
  openAlert('.about__consultation');
  openAlert('.realize__consultation');
  openAlert('.partners__item');
  openAlert('.header__search');
  openAlert('.footer__link');
  openAlert('.footer__logo');
  openAlert('.header__signIn-mobile');
  openAlert('.header__signUp-mobile');

  function closeModal(btnClass, modalClass, modalBgClass, modalCloseClass, modalBgCloseClass) {
    const btn = document.querySelector(btnClass);
    const modal = document.querySelector(modalClass);
    const modalBg = document.querySelector(modalBgClass);

    btn.addEventListener('click', () => {
      modal.classList.remove(modalCloseClass);
      modalBg.classList.remove(modalBgCloseClass);
    });
    modalBg.addEventListener('click', () => {
      modal.classList.remove(modalCloseClass);
      modalBg.classList.remove(modalBgCloseClass);
    });
  }
  closeModal('.modal__close-btn', '.modal', '.modalbg', 'modal--active', 'modalbg--active');

});

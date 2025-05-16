import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { setupProjectFilter } from './js/projectFilter';
import { setupFormValidation } from './js/formValidation';
import { setupSmoothScroll } from './js/smoothScroll';
import { setupDarkMode } from './js/darkMode';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });
  
  setupProjectFilter();
  setupFormValidation();
  setupSmoothScroll();
  setupDarkMode();
  
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});



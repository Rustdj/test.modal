'use strict';
// Modal

const modalTrigger = document.querySelector('[data-modal]'),
      modal = document.querySelector('.valut__modal'),
      modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.addEventListener('click', () => {
      modal.classList.add('show');
      modal.classList.remove('hide');

});
modalCloseBtn.addEventListener('click', () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
});
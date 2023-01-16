'use strict';
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');
let btnShowModal = document.querySelectorAll('.show-modal');
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnShowModal.length; i++) {
  console.log(i);
  btnShowModal[i].addEventListener('click', openModal);
}
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

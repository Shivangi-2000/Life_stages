'use strict';
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelectorAll('.close-modal');
let btnShowModal = document.querySelectorAll('.show-modal');
let modalClass = [
  document.querySelector('.i'),
  document.querySelector('.j'),
  document.querySelector('.k'),
  document.querySelector('.l'),
  document.querySelector('.m'),
  document.querySelector('.n'),
  document.querySelector('.o'),
  document.querySelector('.p'),
];

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', function () {
    modalClass[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  btnCloseModal[i].addEventListener('click', function () {
    modalClass[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });

  overlay.addEventListener('click', function () {
    modalClass[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });

  // // keypess, keyup, keyDown event
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalClass[i].classList.contains('hidden')) {
      modalClass[i].classList.add('hidden');
      overlay.classList.add('hidden');
    }
  });
}

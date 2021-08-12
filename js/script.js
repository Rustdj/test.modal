'use strict';
// Modal
//------------------------------------
const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.valut__modal'),
        backModal = document.querySelectorAll('[data-return]'),
        back = document.querySelector('.modal');
        


    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        //document.body.style.overflow = 'hidden';
        // clearInterval(modalTimerId);
    }
    function openBack() {
        back.classList.add('show');
        back.classList.remove('hide')
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    backModal.forEach(btn => {
        btn.addEventListener('click', openBack);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function closeBack() {
        back.classList.add('hide');
        back.classList.remove('show');
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    back.addEventListener('click', (e) => {
        if (e.target === back || e.target.getAttribute('data-out') == '') {
            closeBack();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && back.classList.contains('show')) {
            closeBack();
        }
    });

    //---------------------------------------------



    

    
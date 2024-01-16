const el = document.querySelector('.category-logo');
const choices = new Choices(el, {
    searchEnabled: false,
    itemSelectText: '',
});

const elem = document.querySelector('.category-brend');
const choices2 = new Choices(elem, {
    searchEnabled: false,
    itemSelectText: '',
});

const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});

const selectBtn = document.querySelector('.mobil__select-btn');
const selectMobile = document.querySelector('.select-mobile');

selectBtn.addEventListener('click', () => {
    selectMobile.classList.toggle('select--active');
});




const hameburger = document.querySelector('.hamburger');
const listMenu = document.querySelector('ul');

hameburger.addEventListener('click', ()=>{
    hameburger.classList.toggle('active');
    listMenu.classList.toggle('active');
});

const link = document.querySelectorAll('ul a').forEach(element =>{
    element.addEventListener('click', ()=>{
        hameburger.classList.remove('active');
        listMenu.classList.remove('active');
    });
});

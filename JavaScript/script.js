const menuBtn = document.getElementById('menu_btn');
const menuMobile = document.getElementById('menu_mobile');
const linksMobile = document.querySelectorAll('.header_links_mobile a');

// Abre e fecha o menu mobile
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('ativo');
    menuMobile.classList.toggle('ativo');
});

// Fecha quando clicar em um link
linksMobile.forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.remove('ativo');
        menuBtn.classList.remove('ativo');
    });
});

// Fecha quando aumentar a tela
window.addEventListener('resize', () => {
    if (window.innerWidth > 850) {
        menuMobile.classList.remove('ativo');
        menuBtn.classList.remove('ativo');
    }
});
AOS.init({
    duration: 800,
    once: false,   
});
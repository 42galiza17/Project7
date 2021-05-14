const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.burger');
    const navLinks = document.querySelector('.burger li');

    menu.addEventListener('click', () => {
    // toggle Nav
        nav.classList.toggle('burger');
    
    // animate Links
        navLinks.for((link, index) => {
            if (link.style.animation0) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinks 0.5s ease forwards ${index / 5}s;`;
            }
        }); 

        menu.classList.toggle('menu');
    }); 
}
navSlide();


 
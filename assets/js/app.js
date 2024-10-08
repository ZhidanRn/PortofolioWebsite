/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;1
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: false,
    distance: '150px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading, .about-content', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact form, .project p, .project img, .overview .btn-box, .portfolio-container, #image', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .home-content p, .about-img, .desc-skills, .desc-content', { origin: 'left' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['FullStack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

document.addEventListener("DOMContentLoaded", function() {
    function isFormEmpty() {
        const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
        for (let input of inputs) {
            if (input.value.trim() === '') {
                return true; 
            }
        }
        return false; 
    }

    if (isFormEmpty()) {
        document.getElementById('contactForm').reset();
    }
});
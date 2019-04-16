const slideNav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // burger animation
        const burgerLines = document.querySelectorAll(".line");
        burgerLines.forEach(line => line.classList.toggle('active'));

        // links slide animation
        const navLinks = document.querySelectorAll('.nav-links li');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .3}s`;
            }
        })
    })
}

slideNav();


// CHANGE OPACITY ON SCROOL

const $headerSection = $('section.header');
const $aboutSection = $('section.about');

$(document).on('scroll', function () {
    const scrollPosition = $(document).scrollTop();
    const sectionAboutOffset = $aboutSection.offset().top;


    $headerSection.css('background-color', `rgba(255,255,255,${scrollPosition / sectionAboutOffset})`);
})

// HIDING NAV ON SCROLL DOWN

let scrollFlag = 0;
$(window).on('scroll', function () {
    $('section.header nav').toggleClass('hide', $(window).scrollTop() > scrollFlag);
    scrollFlag = $(window).scrollTop();
})


// HOME BUTTON VISIBILITY

const homeBtn = document.querySelector(".home-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        homeBtn.style.right = "3vw";
    } else {
        homeBtn.style.right = "-30%";
    }
})
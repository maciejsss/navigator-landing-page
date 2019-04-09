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
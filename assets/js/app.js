const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Handle menu
var menu = $('.header-3__menu');
var navbar = $('.header-3__navbar');
var header1 = $('.header-1');
var header2 = $('.header-2');
var header3 = $('.header-3');
var scrollTop = $('.scroll-top');

menu.addEventListener('click', function(e) {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

window.onscroll = function() {
    // Header + Scroll top
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');

    if(window.scrollY >= (header1.clientHeight + header2.clientHeight)) {
        header3.classList.add('active');
        scrollTop.style.display = 'initial';
    }else {
        header3.classList.remove('active');
        scrollTop.style.display = 'none';
    }
}

// Swiper slider in home
var swiper = new Swiper(".home__container", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    loop: true,
});

// Get time in deal
let countDate = new Date('january 28, 2022 00:00:00').getTime();

function countDown() {
    let now = new Date().getTime();
    gap = countDate - now;
    
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function() {
    countDown()
}, 1000)
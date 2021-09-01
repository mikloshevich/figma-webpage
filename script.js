const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const tl = gsap.timeline({defaults: {duration: 0.2}});

burger.addEventListener('click', function() {
    tl
      .to(burger, {scale: 1.2, transformOrigin: 'center'})
      .to(burger, {scale: 0.8, transformOrigin: 'center'})
      .to(burger, {scale: 1, transformOrigin: 'center'})
    nav.classList.toggle('active');
});
let hamburger = document.querySelector('.hamburger-menu');
let mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('transformation');
    console.log(hamburger);
})

mobileMenu.addEventListener('click', function(){
    mobileMenu.classList.toggle('transformation');
})

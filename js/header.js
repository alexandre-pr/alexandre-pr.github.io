const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

const aboutBlock = document.getElementById('about')


window.onscroll = function(){
    var top = window.scrollY;
    console.log('Top: ' + top);
            var header = document.getElementsByTagName('header');
            var offset = header.innerHeight; //changed offset to be dynamic, so it works on mobile screens.
    if(top > aboutBlock.offsetTop){
        document.body.classList.add('light-background');
    } else {
        document.body.classList.remove('light-background');
            }
};
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

function setHeader () {
    const scrollPoint = window.pageYOffset + headerHeight
  
    let blockPoint = 61 - (scrollPoint - secondBlock.offsetTop)
    if (blockPoint <= 0) { blockPoint = 0 }
  
    if (scrollPoint > secondBlock.offsetTop) {
      header[0].style = `max-height: ${blockPoint}px;`
    } else {
      header[0].style = `max-height: ${headerHeight}px;`
    }
    window.requestAnimationFrame(setHeader)
  }

window.onscroll = function(){
    var top = window.scrollY;
    console.log('Top: ' + top);
            var header = document.getElementsByTagName('header');
            var offset = header.innerHeight; //changed offset to be dynamic, so it works on mobile screens.
    if(top > offset){
        header[0].classList.remove('top');
        header[0].classList.add('scrolled');
    } else {
                header[0].classList.remove('scrolled');
                header[0].classList.add('top');
            }
};
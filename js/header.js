const navToggle = document.querySelector('.header__nav-toggle-button');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function HandleScrollHeader(){
    var headerBlock = document.getElementsByClassName('header__logos')[0];

    if(headerBlock != null){
        if (window.scrollY > headerBlock.offsetHeight){
            document.body.classList.add('header--w-background');
        }
        //console.log('Top: ' + top);
        else {
            document.body.classList.remove('header--w-background');
        }
    }
};

window.addEventListener('scroll', HandleScrollHeader, true)
HandleScrollHeader()
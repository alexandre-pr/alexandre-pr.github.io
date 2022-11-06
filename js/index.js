const aboutBlock = document.getElementById('about');
const skillsBlock = document.getElementById('skills');
const educationBlock = document.getElementById('education');


const amonBlock = document.getElementById('amon');
const moodseedBlock = document.getElementById('moodseed');
const domosBlock = document.getElementById('domos');
const sunkpearlBlock = document.getElementById('sunkpearl');
const illustrationsBlock = document.getElementById('illustrations');


function HandleScrollPorftolioWork(){
    var headerBlock = document.getElementsByClassName('header__logos')[0];
    
    var startfocus = window.scrollY + 0.85 * window.innerHeight;
    var stopfocus = window.scrollY + 0.15 * window.innerHeight;

    /**if(headerBlock != null){
        var top = window.scrollY + headerBlock.offsetHeight;
        //console.log('Top: ' + top);
        if((top > aboutBlock.offsetTop && top<skillsBlock.offsetTop)||(top>educationBlock.offsetTop)){
            document.body.classList.add('light-background');
        } else {
            document.body.classList.remove('light-background');
                }
    }
    **/

    var portfolioItems = document.getElementsByClassName('portfolio__item');

    console.log('Item: ' + window.scrollY);
    Array.prototype.forEach.call(portfolioItems, function(portfolioItem) {
        
        if ((startfocus > (portfolioItem.offsetTop + portfolioItem.offsetHeight) && stopfocus<(portfolioItem.offsetTop))){
            portfolioItem.classList.add('portfolio-item-focus');
        }
        else{
            portfolioItem.classList.remove('portfolio-item-focus');
        }
    });
};

window.addEventListener("scroll", HandleScrollPorftolioWork, true);

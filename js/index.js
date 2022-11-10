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
    
    var startfocus = window.scrollY + 0.75 * window.innerHeight;
    var stopfocus = window.scrollY + 0.25 * window.innerHeight;

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

    var portfolioItems = document.getElementsByClassName('my-work__item');

    //console.log('Item: ' + window.scrollY);
    Array.prototype.forEach.call(portfolioItems, function(portfolioItem) {
        var portfolioVideo = portfolioItem.getElementsByClassName('my-work__video');

        if ((startfocus > (portfolioItem.offsetTop) && stopfocus<(portfolioItem.offsetTop + portfolioItem.offsetHeight))){
            
            if (portfolioVideo.length>0){
                portfolioVideo[0].play();
            }
            portfolioItem.classList.add('my-work__item--focus');
        }
        else{
            portfolioItem.classList.remove('my-work__item--focus');
            if (portfolioVideo.length>0){
                portfolioVideo[0].pause();
            }
        }
    });
};

window.addEventListener("scroll", HandleScrollPorftolioWork, true);

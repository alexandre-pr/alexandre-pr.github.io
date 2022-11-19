const aboutBlock = document.getElementById('about');
const skillsBlock = document.getElementById('skills');
const educationBlock = document.getElementById('education');


const amonBlock = document.getElementById('amon');
const moodseedBlock = document.getElementById('moodseed');
const domosBlock = document.getElementById('domos');
const sunkpearlBlock = document.getElementById('sunkpearl');
const illustrationsBlock = document.getElementById('illustrations');

// Add active class to the current control button (highlight it)

var filteredElements = document.getElementById("work").getElementsByClassName("filter-div");;
var btns = document.getElementsByClassName("filter-btn");
var lastActive = document.getElementsByClassName("filter-btn--active")[0];
var portfolio = document.getElementById("work-portfolio");
animDuration=500;
portfolio.style.animationDuration = "250ms";

var portfolioItems = document.getElementsByClassName('my-work__item');

// Video streaming

function HandleScrollPorftolioWork(){
    var headerBlock = document.getElementsByClassName('header__logos')[0];
    
    var startfocus = window.scrollY + 0.6 * window.innerHeight;
    var stopfocus = window.scrollY + 0.4 * window.innerHeight;
    //console.log('Item: ' + window.scrollY);
    Array.prototype.forEach.call(portfolioItems, function(portfolioItem) {
        var portfolioVideo = portfolioItem.getElementsByClassName('my-work__video');

        
        
    if ((startfocus > (portfolioItem.offsetTop) && stopfocus<(portfolioItem.offsetTop + portfolioItem.offsetHeight))){
        
        if (portfolioVideo.length>0){
          if (window.matchMedia("(min-width: 800px)").matches) {
            //portfolioVideo[0].load();
            if(portfolioVideo[0].readyState==0){
                portfolioVideo[0].load();
            }
          } else {
            portfolioVideo[0].play();
          }
          
        }
        portfolioItem.classList.add('my-work__item--focus');
    }
    else{
        portfolioItem.classList.remove('my-work__item--focus');
        if (portfolioVideo.length>0){
          if (window.matchMedia("(min-width: 800px)").matches) {
            
          } else {
            portfolioVideo[0].pause();
          }
        }
    }
      
  });
};

window.addEventListener("scroll", HandleScrollPorftolioWork, true);


// On hover
Array.prototype.forEach.call(portfolioItems, function(portfolioItem) {
  
  var portfolioVideo = portfolioItem.getElementsByClassName('my-work__video');
  if (portfolioVideo.length>0){
    portfolioItem.addEventListener("mouseenter", function(event){portfolioVideo[0].play()});
    portfolioItem.addEventListener("mouseleave", function(event){portfolioVideo[0].pause()});
  }
})


// Work filter


filterSelection("all")
function filterSelection(c) {
  var i;
  if (c == "all") c = "";
  
  setTimeout(() => {FadeIn(c)}, animDuration/2);
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//   for (i = 0; i < filteredElements.length; i++) {
//     RemoveClass(filteredElements[i], "filter-div--show");
//     if (filteredElements[i].className.indexOf(c) > -1) AddClass(filteredElements[i], "filter-div--show");
//   }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    lastActive.className = lastActive.className.replace("filter-btn--active", "");
    this.className += " filter-btn--active";
    if(lastActive != this){
        portfolio.style.animationName = "fade-out";
    }
    lastActive = this;
  });
}

function FadeIn(c){
    portfolio.offsetHeight;
    portfolio.style.animationName = "fade-in";
    for (i = 0; i < filteredElements.length; i++) {
        RemoveClass(filteredElements[i], "filter-div--show");
        if (filteredElements[i].className.indexOf(c) > -1) AddClass(filteredElements[i], "filter-div--show");
    }
}
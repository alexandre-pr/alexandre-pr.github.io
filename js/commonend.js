var portfolioItems = document.getElementsByClassName('video__speed1-5');

    //console.log('Item: ' + window.scrollY);
Array.prototype.forEach.call(portfolioItems, function(portfolioItem) {
    portfolioItem.playbackRate = 1.5;
});

var portfolioItems = document.getElementsByClassName('video__speed2');

    //console.log('Item: ' + window.scrollY);
Array.prototype.forEach.call(portfolioItems, function(portfolioItem) {
    portfolioItem.playbackRate = 2;
});

function watchForHover() {
    // lastTouchTime is used for ignoring emulated mousemove events
    let lastTouchTime = 0
  
    function enableHover() {
      if (new Date() - lastTouchTime < 500) return
      document.body.classList.remove('no-hover')
    }
  
    function disableHover() {
      document.body.classList.add('no-hover')
    }
  
    function updateLastTouchTime() {
      lastTouchTime = new Date()
    }
  
    document.addEventListener('touchstart', updateLastTouchTime, true)
    document.addEventListener('touchstart', disableHover, true)
    document.addEventListener('mousemove', enableHover, true)
  
    enableHover()
}
  
watchForHover()
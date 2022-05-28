document.querySelectorAll('image-w-description__video').defaultPlaybackRate = 4.0;

Array.prototype.forEach.call(document.getElementsByClassName('speed2'), function(video) {
    video.playbackRate = 2.0;
});
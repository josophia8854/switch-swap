$('.short-video').on('click', function(){
  var video = $(this).find('video')[0];
  if (video.paused) {
    $(this).removeClass('paused');
    video.play();
  } else {
    video.pause();
    $(this).addClass('paused');
  }
});
// DA RIATTIVARE --> messo in index.html
document.querySelector('.destinations').addEventListener('scroll', function(){
  scrollDetection();
  $('.scroll-cue').css('visibility', 'hidden')



  // $(".place").each(function(){
  //   if ($(this).isInViewport()) {
  //     $($(this)).css({
  //       transform: 'translate(0, 0)',
  //         transition: 'all 1s',
  //         opacity: '1',
  //         background: 'red'
  //     }, 500, 'ease');
  //   }
  // });

  // $.fn.isInViewport = function() {
  //   var elementTop = $(this).offset().top;
  //   var elementBottom = elementTop + $(this).outerHeight();

  //   var viewportTop = $(window).scrollTop();
  //   var viewportBottom = viewportTop + $(window).height();

  //   return elementBottom > viewportTop && elementTop < viewportBottom;
  // };
});



// window.onload = function() {
//   var img = document.createElement("video");
//     img.setAttribute("src", "assets/videos/venice.mp4");
//     img.setAttribute("class", "player");
//     img.setAttribute("alt", "Video");
//     img.autoplay = true;
//     document.getElementsByClassName("video-wrapper")[0].appendChild(img);

// }


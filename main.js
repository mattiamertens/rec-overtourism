// DA RIATTIVARE --> messo in index.html
document.querySelector('.destinations').addEventListener('scroll', function(){
  scrollDetection();
  $('.scroll-cue').css('visibility', 'hidden')
});


window.onload = function() {
    var img = document.createElement("iframe");
      img.setAttribute("src", "http://195.31.128.34:80/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER");
      img.setAttribute("class", "player");
      img.setAttribute("alt", "Video");
      document.getElementsByClassName("video-wrapper")[0].appendChild(img);
    }


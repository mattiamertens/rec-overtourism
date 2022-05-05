// $('.place').on('mouseenter', function(){
//     $(this).children('.left-info').children('.header').children('.destination-title').addClass('yellow-text');
//     $(this).children('.left-info').children('.header').children('.square').addClass('on-screen');
// }).on('mouseleave', function(){
//     $(this).children('.left-info').children('.header').children('.destination-title').removeClass('yellow-text')
//     $(this).children('.left-info').children('.header').children('.square').removeClass('on-screen');
// })



// DA RIATTIVARE
// document.querySelector('.destinations').addEventListener('scroll', function(){

//     scrollDetection();
// });

function scrollDetection() {
    $('.place').each(function() {

        var offset = this.getBoundingClientRect().top;
        if (offset < 300 && offset > 120){
            // console.log(this)
        }
    
        if(offset < 530 && offset > 120){ 
          $(this).find('.destination-title').addClass('yellow-text')
          $(this).find('.square').addClass('on-screen');
          $(this).data('')
          var dataSource = this.getAttribute('data-attr')
          console.log(dataSource)

          $('.player').attr('src', dataSource)
        }
        
        else{
            $(this).find('.destination-title').removeClass('yellow-text')
            $(this).find('.square').removeClass('on-screen');
        }
    })
}

window.onload = function() {
var img = document.createElement("iframe");
  img.setAttribute("src", "http://195.31.128.34:80/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER");
  img.setAttribute("class", "player");
  img.setAttribute("alt", "Video");
  document.getElementsByClassName("video-wrapper")[0].appendChild(img);
}

$('.list-btn').on('click', function(){
    $('.side-bar-left').toggleClass('unfolded')
    $('.arrow').toggleClass('rotate')
})
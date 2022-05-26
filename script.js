// $('.place').on('mouseenter', function(){
//     $(this).children('.left-info').children('.header').children('.destination-title').addClass('yellow-text');
//     $(this).children('.left-info').children('.header').children('.square').addClass('on-screen');
// }).on('mouseleave', function(){
//     $(this).children('.left-info').children('.header').children('.destination-title').removeClass('yellow-text')
//     $(this).children('.left-info').children('.header').children('.square').removeClass('on-screen');
// })





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



var txtToggle = true;
$('.list-btn').on('click', function(){

    if (txtToggle) {
        this.innerHTML = "Hide list" + "<img src='../assets/arrow.svg' class='arrow'></img>";
        $('.arrow').addClass('rotate')
        txtToggle = false;

    } else if (!txtToggle) {
        this.innerHTML = "Show list" + "<img src='../assets/arrow.svg' class='arrow'></img>";
        $('.arrow').removeClass('rotate')
        txtToggle = true;
    }
    // toggle();
    $('.sb-left').toggleClass('unfolded')
})
$('.statistics-btn').on('click', function(){
    $('.sb-right').toggleClass('unfolded')
    $(this).text('Hide statistics')
})

// SINGLE CAMERA STREAM
$('.location-menu').on('click', function(){
    $('.location-dropdown').toggleClass('hidden')
    $(this).find('img').toggleClass('rotate')
})

$('.location').on('click', function(){
    // $('.location-dropdown').addClass('hidden')
    $(this).find('.check').toggleClass('vis')
})


// $('.place').on('mouseenter', function(){
//     $(this).children('.left-info').children('.header').children('.destination-title').addClass('yellow-text');
//     $(this).children('.left-info').children('.header').children('.square').addClass('on-screen');
// }).on('mouseleave', function(){
//     $(this).children('.left-info').children('.header').children('.destination-title').removeClass('yellow-text')
//     $(this).children('.left-info').children('.header').children('.square').removeClass('on-screen');
// })

//Session storage for tutorial Waiting time
$(document).ready(function () {
    if (!window.sessionStorage.getItem("isExecuted")) {
      window.sessionStorage.setItem("isExecuted", true);
    }
     else {
      $('.popUp-index').addClass('hidden')
    }
});
$('.close').on('click', function(){
    $('.popUp-index').addClass('hidden')
})



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
$('.animated-btn').on('click', function(){

    if (txtToggle) {
        this.innerHTML = "Hide list" + "<img src='../assets/arrow.svg' class='arrow'></img>";
        $('.arrow').addClass('rotate')
        txtToggle = false;

    } else if (!txtToggle) {
        this.innerHTML = "Show list" + "<img src='../assets/arrow.svg' class='arrow'></img>";
        $('.arrow').removeClass('rotate')
        txtToggle = true;
    }
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


// SIMULATOR
var slider = $(".actual-slider")[0];

var output = $(".value")[0];
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  console.log(slider.value) // valore 1 - slider
}

$('.unselected-button').on('click', function(){
    $(this).addClass('selected-btn');
    $(this).siblings().removeClass('selected-btn');
})
$('.reset').on('click', function(){
    $('.unselected-button').removeClass('selected-btn')

    document.getElementById("checky").checked = false;
    document.getElementById("checky2").checked = false;

    slider.value = 15;
    output.innerHTML = 15;
})


var d = slider.value;
    var tT = 0;
    var tM = 0;
    var Fc = 0;
    var oS = 0;

// TRAVEL TYPE
$('.tT-button').on('click', function(){
    tT = this.getAttribute('data-attr')
    console.log(tT);
});

// TRAVEL MEANS
$('.tM-button').on('click', function(){
    var tM = this.getAttribute('data-attr')
    console.log(tM);
});

$('#checky').on('click', function(){
    console.log(this.checked)
    
})

function validate() {

    if ($('#checky').checked) {
        Fc = 7;
        console.log(Fc);
    } else {
       alert('calrmo')
    }
}


// FORMULA
$('#calculator').on('click', function(){

    validate()
    console.log(tT);

    var formula = 1*d*tT*(Fc + oS) + tM;
    console.log(formula);

    // $('#result-nmbr').html(formula + " days <span class='sans-regular'>of waiting time for others!</span>")
    $('.results-section').removeClass('hidden')
})



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


// SIDEBAR TOGGLING
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

var statsToggle = true;

$('.statistics-btn').on('click', function(){
    if (statsToggle){
        $('.sb-right').addClass('unfolded')
        $(this).text('Hide statistics')
        statsToggle = false;

    } else if (!statsToggle) {
        $('.sb-right').removeClass('unfolded')
        $(this).text('See statistics')
        statsToggle = true;
    }
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

// CAMERA STREAMS

$('.single-stream-card').on('mouseover', function(){
    $(this).find('.player-single-str').addClass('noBW')
}).on('mouseleave', function(){
    $(this).find('.player-single-str').removeClass('noBW') 
})






// SIMULATOR
var slider = $(".actual-slider")[0];
var d = 1.3;

var output = $(".value")[0];
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;

  if (slider.value <= 3) {
      d = 3;
  } 
  else if (slider.value >= 4 && slider.value <=7) {
    d = 2.2;
  }
  else if (slider.value >= 8 && slider.value <= 14){
    d = 1.6;
  }
  else{
    d = 1.3;
  }
  console.log(d)
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

var tT = 0;
var tM = 0;
var Fc = 1;
var oS = 1;

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
    var firstCC = this.checked
    console.log(firstCC)
    
    Fc = firstCC ? 7 : 1;
    console.log(Fc)
})

$('#checky2').on('click', function(){
    var offSC = this.checked
    console.log(offSC)
    
    oS = offSC ? 1 : 2;
    console.log(oS)
})


// FORMULA
$('#calculator').on('click', function(){

    var formula = Math.round(1*d*tT* (Fc + oS) + tM);
    console.log(formula);

    $('#result-nmbr').html(formula + " days <span class='sans-regular'>of waiting time for others!</span>")
    $('.results-section').removeClass('hidden')
})
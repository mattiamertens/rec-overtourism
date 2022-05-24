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

// MAP MARKERS
const venice = new mapboxgl.Marker()
    .setLngLat([12.347337, 45.436674])
    .addTo(map),
    boracay = new mapboxgl.Marker()
    .setLngLat([121.92473979033042, 11.968946748452733])
    .addTo(map),
    dubrovnik = new mapboxgl.Marker()
    .setLngLat([18.110759418529227, 42.64139850493931])
    .addTo(map),
    mayaB = new mapboxgl.Marker()
    .setLngLat([98.76598119568365, 7.676724786925769])
    .addTo(map),
    cinqueT = new mapboxgl.Marker()
    .setLngLat([9.729454129038485, 44.1073633521156])
    .addTo(map),
    santorini = new mapboxgl.Marker()
    .setLngLat([25.462121592740505, 36.39382747441639])
    .addTo(map),
    machuP = new mapboxgl.Marker()
    .setLngLat([-72.54480794468684, -13.162385365206783])
    .addTo(map),
    mallorca = new mapboxgl.Marker()
    .setLngLat([3.0270760435441506, 39.72470785203198])
    .addTo(map),
    canyon = new mapboxgl.Marker()
    .setLngLat([ -18.171860286912676, 63.77198381927736])
    .addTo(map);

    
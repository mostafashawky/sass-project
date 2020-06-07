$(function() {
  //variable environment
  var indexBuilding,indexClients;


  //responsive navbar
  $('#toggle').click( function(){
      $('.menu').fadeToggle();
  });
  //sticky navbar when scroll
  $(window).on('scroll', function(){
    if( $(window).scrollTop() > 200 ) { // check if user make scrolling
      $('.navbar').addClass('sticky')
    } else {
      $('.navbar').removeClass('sticky');
    }
  })


    //counter
    indexBuilding = 0,
    indexClients  = 0;
    var interBuilding = setInterval( function(){
        if( $(window).scrollTop() > $('.about').offset().top - 200  ) { //check if we in about section
          indexBuilding++;
          $('.counter-building').text( indexBuilding );
          if( indexBuilding == 120 ) { //check if get the specific number we stop the interval function
            clearInterval( interBuilding );
          }
        }

    },50 )

    var interClients = setInterval( function(){
        if( $(window).scrollTop() > $('.about').offset().top  ) {
          indexClients++;
          $('.counter-clients').text( parseInt(indexClients) );
          console.log( indexClients );
          if( indexClients == 500 ) {
            clearInterval( interClients );
          }
        }

    },10 )



})

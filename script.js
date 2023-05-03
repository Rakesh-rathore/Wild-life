$(window).scroll(function(){
    var positiontop=$(document).scrollTop();
    console.log(positiontop);
})

$(window).on("scroll", function(){
    if($(window).scrollTop()>440){
      $(".navbar").addClass("navbar-change");
    }else{
      $(".navbar").removeClass("navbar-change");
    }
  })

  $(window).on("scroll", function(){
    if($(window).scrollTop()>200){
      $(".navbar-brand img").addClass("animate__fadeInLeft");
    }
    // else{
    //   $(".navbar-brand").removeClass("navbar-change");
    // }
  })
  
  $(window).on(scroll(function(){
    if($(window).scrollTop()>200){
        $(".carousel-caption").addClass("animate__fadeInLeft");
      }
  }))

  $(window).on("scroll",function(){
    if ($(window).scrollTop()>300 &&($(window).scrollTop()<500)){
      $("#about-i").addClass("animate__animated animate__fadeInLeftBig");
      $("#about-info").addClass("animate__animated animate__backInRight");
    }
    else{
      $("#about-i").removeClass("animate__animated animate__fadeInLeftBig");
      $("#about-info").removeClass("animate__animated animate__backInRight");
    }
  })

  $(window).on("scroll",function(){
    if ($(window).scrollTop()>850 &&($(window).scrollTop()<1000)){
      $("#sample-info").addClass("animate__animated animate__fadeInLeft animate__delay-0.5s");
    }
    else{
      $("#sample-info").removeClass("animate__animated animate__fadeInLeft animate__delay-0.5s");
    }
  })

  $(window).on("scroll",function(){
    if ($(window).scrollTop()>1390 &&($(window).scrollTop()<1460)){
      $("#card-1").addClass("animate__animated animate__flipInY animate__delay-0.5s");
      $("#card-2").addClass("animate__animated animate__flipInY animate__delay-0.5s");
      $("#card-3").addClass("animate__animated animate__flipInY animate__delay-0.5s");
      $("#card-4").addClass("animate__animated animate__flipInY animate__delay-0.5s");
      
    }
    else{
      $("#card-1").removeClass("animate__animated animate__flipInY animate__delay-0.5s");
      $("#card-2").removeClass("animate__animated animate__flipInY animate__delay-0.5s");
      $("#card-3").removeClass("animate__animated animate__flipInY animate__delay-0.5s");
      $("#card-4").removeClass("animate__animated animate__flipInY animate__delay-0.5s");
      
    }
  })

  $(window).on("scroll",function(){
    if ($(window).scrollTop()>1590 &&($(window).scrollTop()<1700)){
      $("#globe-info").addClass("animate__animated animate__fadeInLeft");
    }
    else{
      $("#globe-info").removeClass("animate__animated animate__fadeInLeft");
    }
  })

  $(window).on("scroll",function(){
    if ($(window).scrollTop()>2400 &&($(window).scrollTop()<2520)){
      $(".gallery-2").addClass("animate__animated animate__flipInY animate__delay-0.5s");
      $(".gallery-2").addClass("animate__animated animate__flipInY animate__delay-0.5s");
      $(".gallery-2").addClass("animate__animated animate__flipInY animate__delay-0.5s");
      
    }
    else{
      $(".gallery-2").removeClass("animate__animated animate__flipInY animate__delay-0.5s");
      $(".gallery-2").removeClass("animate__animated animate__flipInY animate__delay-0.5s");
      $(".gallery-2").removeClass("animate__animated animate__flipInY animate__delay-0.5s");
      
    }
  })

  $(window).on("scroll",function(){
    if ($(window).scrollTop()>3170 &&($(window).scrollTop()<3300)){
      $(".gallery-3").addClass("animate__animated animate__flipInY");
      $(".gallery-3").addClass("animate__animated animate__flipInY");
      $(".gallery-3").addClass("animate__animated animate__flipInY");
      
    }
    else{
      $(".gallery-3").removeClass("animate__animated animate__flipInY");
      $(".gallery-3").removeClass("animate__animated animate__flipInY");
      $(".gallery-3").removeClass("animate__animated animate__flipInY");
      
    }
  })


  $(window).on("scroll",function(){
    if ($(window).scrollTop()>3300 &&($(window).scrollTop()<3400)){
      $("#team-info").addClass("animate__animated animate__fadeInLeft");
    }
    else{
      $("#team-info").removeClass("animate__animated animate__fadeOutLeft");
    }
  })

  $(window).on("scroll",function(){
    if ($(window).scrollTop()>3910 &&($(window).scrollTop()<4000)){
      $("#card-5").addClass("animate__animated animate__fadeInLeftBig animate__delay-1s");
      $("#card-6").addClass("animate__animated animate__fadeInLeftBig animate__delay-1s");
      $("#card-7").addClass("animate__animated animate__fadeInRightBig animate__delay-1s");
      $("#card-8").addClass("animate__animated animate__fadeInRightBig animate__delay-1s");
      
    }
    else{
      $("#card-5").removeClass("animate__animated animate__fadeInLeftBig animate__delay-1s");
      $("#card-6").removeClass("animate__animated animate__fadeInLeftBig animate__delay-1s");
      $("#card-7").removeClass("animate__animated animate__fadeInRightBig animate__delay-1s");
      $("#card-8").removeClass("animate__animated animate__fadeInRightBig animate__delay-1s");
      
    }
  })

  // second banner animation//

  $(window).on("scroll",function(){
    if ($(window).scrollTop()>4350 &&($(window).scrollTop()<4500)){
      $("#banner-head").addClass("animate__animated animate__backInLeft animate__delay-0.5s");
      $("#banner-text").addClass("animate__animated animate__backInRight animate__delay-0.5s");
    }
    else{
      $("#banner-head").removeClass("animate__animated animate__backInLeft animate__delay-0.5s");
      $("#banner-text").removeClass("animate__animated animate__backInRight animate__delay-0.5s");
    }
  })

// footer animation//

  $(window).on("scroll",function(){
    if ($(window).scrollTop()>4780 &&($(window).scrollTop()<4900)){
      $("#footer-head").addClass("animate__animated animate__backInLeft animate__delay-0.5s");
      $("#footer-head1").addClass("animate__animated animate__backInLeft animate__delay-0.5s");
      $("#footer-head2").addClass("animate__animated animate__backInLeft animate__delay-0.5s");
     
    }
    else{
      $("#footer-head").removeClass("animate__animated animate__backInLeft animate__delay-0.5s");
      $("#footer-head1").removeClass("animate__animated animate__backInLeft animate__delay-0.5s");
      $("#footer-head2").removeClass("animate__animated animate__backInLeft animate__delay-0.5s");
    }
  })

 
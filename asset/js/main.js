// counter js

let count = document.querySelectorAll(".count")
let arr = Array.from(count)



arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},50)

})


$(document).ready(function(){
  
  $(window).scroll(function() {
    if($(this).scrollTop() > 100)
    {
      $('.ben').fadeIn(1000);
    }
    else{
      $('.ben').fadeOut(1000);
    }
  });
  $('.ben').click(function(){
    $('html,body').animate({scrollTop: 0 }, 1000);
  });
 });

// main banner
jQuery(document).ready(function($) {
  $('#main-slider').liquidSlider({
autoSlide:          true,
autoSlideInterval:  4800,
autoSlideControls:  true,
forceAutoSlide: false,
dynamicArrows: false,
slideEaseFunction:'animate.css',
slideEaseDuration:800,
heightEaseDuration:800,
animateIn:"bounceIn",
animateOut:"bounceOut",
callback: function(){}
});

var api2 = $.data( $('#main-slider')[0], 'liquidSlider');

$(".slider-navigation .slider-nav-left").click(function(){ api2.setNextPanel('left');api2.updateClass($(this)); });
$(".slider-navigation .slider-nav-right").click(function(){ api2.setNextPanel('right');api2.updateClass($(this)); });
})




  // top button
// header
$(window).scroll(function(){
  if(scrollY>100)
  {
     $('header').addClass('hscroll');
  
  }
  else
  {
     $('header').removeClass('hscroll');
     $('header').addClass('nscroll');
    
  }

 });








// partical js
particlesJS("particles-js", {
    particles: {
      number: {
        value: 91,
        density: { enable: true, value_area: 479.8080767692925 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 6 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3.998400639744104,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ab886c",
        opacity: 0.4,
        width: 1.2794882047181133
      },
      move: {
        enable: true,
        speed: 5.02796376526191,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 866.4828672705786,
          rotateY: 551.3981882630954
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 800, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  


  // top button
// header
$(window).scroll(function(){
  if(scrollY>100)
  {
     $('header').addClass('hscroll');

  }
  else
  {
     $('header').removeClass('hscroll');
     $('header').addClass('nscroll');
    
  }
 
 });



 $(window).scroll(function(){
  if(scrollY>100)
  {
   
     $('.ben').fadeIn(1000);
  }
  else
  {

     $('.ben').fadeOut(1000);
  }
  $('.ben').click(function(){
      $('html,body').animate( {scrollTop: 0} , 1000);
  });
 });




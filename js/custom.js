$(document).ready(function(){
$('.owl-slider').owlCarousel({
    loop:true,
    margin:20,
    slideBy:1,
    nav:true,
    dots: false,
    smartSpeed:500,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

$('.quote').owlCarousel({
    loop:true,
    margin:10,
    slideBy:1,
    nav:true,
    dots: false,
    smartSpeed:500,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


 var containerEl = document.querySelector('.cont');

            var mixer = mixitup(containerEl);
});
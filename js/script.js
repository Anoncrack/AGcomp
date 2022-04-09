$(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        navText: ['<img src="img/Arrow left.svg">', '<img src="img/Arrow right.svg">'],
        navClass: ['owl-prev', 'owl-next'],
        startPosition: 1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
});
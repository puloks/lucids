$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 33,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});
new WOW().init();
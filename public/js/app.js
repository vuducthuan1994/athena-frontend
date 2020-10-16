$(document).ready(function() {
    owlApartmentInit();
    owlDevelopmentProjectInit();
    owlDevelopmentController();
    owlNewsInit();
    owlPositionInit();
    owlPositionController();
    owlDotsForPositionSlider();
});

function owlApartmentInit() {
    // SLider mặt bằng căn hộ
    $('#owl-carousel-1').owlCarousel({
        dotsContainer: '#owl-carousel-1-dots',
        items: 1,
        center: true,
        nav: false,
        dots: true,
        loop: true,
        autoplay: false
    });
    $('.owl-dot').click(function() {
        const _idx = $(this).index() + 1;
        $('#owl-carousel-1').trigger('to.owl.carousel', [$(this).index(), 500]);
        $(`.apartment-left h2`).removeClass("active");
        $(`.apartment-left .typical-grounds-${_idx}  h2`).addClass("active");
    });
}

function owlDevelopmentProjectInit() {
    $('#owl-carousel-2').owlCarousel({
        items: 2,
        center: false,
        nav: false,
        autoHeight: true,
        dots: false,
        loop: true,
        autoplay: false,
        margin: 95
    });
}

function owlDotsForPositionSlider() {
    $('#owl-carousel-5').owlCarousel({
        items: 2.5,
        nav: false,
        dots: false,
        autoHeight: true,
        autoplay: false,
        center: false,
        margin: 40,
        dots: false
    });
}

function owlPositionInit() {
    $('#owl-carousel-4').owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        loop: false,
        autoplay: false,
        center: false,
        nav: false,
        margin: 10,
        animateIn: 'fadeIn', // add this
        animateOut: 'fadeOut', // and this
    });
}

function owlNewsInit() {
    $('#owl-carousel-3').owlCarousel({
        items: 3,
        center: false,
        nav: false,
        autoHeight: true,
        dots: false,
        loop: true,
        autoplay: false,
        margin: 40
    });
}

function owlPositionController() {
    var owl2 = $('#owl-carousel-4');
    // Go to the next item of slider text
    $('.btn-next-position').click(function() {
        owl2.trigger('next.owl.carousel', [1000]);
    });

    // Go to the previous item of sliderText
    $('.btn-prev-position').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl2.trigger('prev.owl.carousel', [1000]);
    });
}

function owlDevelopmentController() {
    var owl2 = $('#owl-carousel-2');
    // Go to the next item of slider text
    $('.development-item.next-development-item').click(function() {
        owl2.trigger('next.owl.carousel', [500]);
    });

    // Go to the previous item of sliderText
    $('.development-item.prev-development-item').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl2.trigger('prev.owl.carousel', [500]);
    });
}
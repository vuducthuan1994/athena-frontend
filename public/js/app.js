$(document).ready(function() {
    owlApartmentInit();
    owlDevelopmentProjectInit();
    owlDevelopmentController();
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

function owlDevelopmentController() {
    var owl2 = $('#owl-carousel-2');
    // Go to the next item of slider text
    $('.development-item.next-development-item').click(function() {
        owl2.trigger('next.owl.carousel', [300]);
    });

    // Go to the previous item of sliderText
    $('.development-item.prev-development-item').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl2.trigger('prev.owl.carousel', [300]);
    });
}
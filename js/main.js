$(function () {

    Fancybox.bind("[data-fancybox]", {

    });

    var mixer = mixitup('.directions__list')

    $('.directions__filter-btn').on('click', function name() {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
        responsive:
        [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                    dots: true,
                    appendDots: $('.team__dots'),
                },
            },
        ]
    })

    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })

    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.testimonials__dots'),
        responsive:
        [
            {
                breakpoint: 700,
                settings: {
                    
                },
            },
        ]

    })

    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })

    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    //$('.program__acc-link').on('click', function (e) {
    //    e.preventDefault()
    //    $(this).toggleClass('program__acc-link--active')
    //    $(this).children('.program__acc-text').slideToggle()
    //})

    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
        } else {
            $('.program__acc-link').removeClass('program__acc-link--active')
            $('.program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })

    $(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (e) {
        e.preventDefault()
        var id  = $(this).attr('href'),
        top = $(id).offset().top
        $('body,html').animate({scrollTop: top}, 800)
    });

    setInterval(() => {
        if ($(window).scrollTop() > 0 && !$('.header__top').hasClass('header__top--open')) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0)
    
    $('.burger, .overlay, .header__top a').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
    })


    $('.footer__top-title--slide').on('click', function () {
        $(this).next().slideToggle()
    })

})
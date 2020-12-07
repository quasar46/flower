const menu = document.querySelectorAll(".panel");
menu.forEach(box => {
    const button = box.querySelector(".btn-more-details");
    const content = box.querySelector(".cabinet-details");

    button.addEventListener("click", e => {
        const activeClassBTN = "btn-more-details--active";
        const activeClassTXT = "cabinet-details--active";
        const active_button = document.querySelectorAll(".btn-more-details");
        const active_content = document.querySelectorAll(".cabinet-details");

        active_button.forEach((s) =>
            s !== button ? s.classList.remove(activeClassBTN) : null);

        active_content.forEach((n) =>
            n !== content ? n.classList.remove(activeClassTXT) : null);

        button.classList.toggle(activeClassBTN);
        content.classList.toggle(activeClassTXT);
    });
});

$('.preview-catalog-slider').slick({
    slidesToShow: 2,
    dots: true,
    prevArrow: "<img src='images/svg/prev.svg' class='prev'>",
    nextArrow: "<img src='images/svg/next.svg' class='next'>",
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 1022,
            settings: "unslick",
        },
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});


$('.valentin-slider').slick({
    dots: true,
    prevArrow: "<img src='images/svg/prev.svg' class='prev'>",
    nextArrow: "<img src='images/svg/next.svg' class='next'>",
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 1022,
            settings: "unslick",
        },
        {
            breakpoint: 399,
            settings: {
                slidesToShow: 2,
                // rows: 2,
                // slidesPerRow: 2,
            }
        },
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
                // rows: 2,
                // slidesPerRow: 2,
            }
        }
    ]
});

$('.vitrina-slider').slick({
    slidesToShow: 4,
    dots: true,
    prevArrow: "<img src='images/svg/prev.svg' class='prev'>",
    nextArrow: "<img src='images/svg/next.svg' class='next'>",
    responsive: [
        {
            breakpoint: 1022,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.help-list-slider').slick({
    slidesToShow: 2,
    dots: true,
    prevArrow: "<img src='images/svg/prev.svg' class='prev'>",
    nextArrow: "<img src='images/svg/next.svg' class='next'>",
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 1022,
            settings: "unslick",
        },
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.offer-slider').slick({
    dots: true,
    prevArrow: "<img src='images/svg/prev.svg' class='prev'>",
    nextArrow: "<img src='images/svg/next.svg' class='next'>",
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 1022,
            settings: "unslick",
        },
        {
            breakpoint: 0,
            settings: {
                // rows: 2,
                slidesToShow: 2,
            }
        }
    ]
});

$('.related-slider').slick({
    dots: true,
    prevArrow: "<img src='images/svg/prev.svg' class='prev'>",
    nextArrow: "<img src='images/svg/next.svg' class='next'>",
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 1022,
            settings: "unslick",
        },
        {
            breakpoint: 0,
            settings: {
                // rows: 2,
                slidesToShow: 2,
            }
        }
    ]
});

$('.blog-slider').slick({
    dots: true,
    prevArrow: "<img src='images/svg/prev.svg' class='prev'>",
    nextArrow: "<img src='images/svg/next.svg' class='next'>",
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 1022,
            settings: "unslick",
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.hero-slider').slick({
    slidesToShow: 1,
    dots: true,
    prevArrow: "<img src='images/svg/prev.svg' class='prev'>",
    nextArrow: "<img src='images/svg/next.svg' class='next'>",
});

$('.cart-slider__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.cart-slider__nav'
});

$('.cart-slider__nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.cart-slider__for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 1022,
            settings: {
                slidesToShow: 4,
            }
        }
    ]
});

$(document).ready(function () {
    $('.show').on('click', function () {
        $(this).toggleClass('active');
    })
})

$(document).ready(function () {
    $('.burger').on('click', function () {
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('active');
    })
})

$(document).ready(function () {
    $('.catalog__filter-btn').on('click', function () {
        $('.catalog__filters').toggleClass('active');
    })
})

$(document).ready(function () {
    $('#request').on('click', function () {
        $('#modal').toggleClass('active');
    })
    $('.help-feedback__cross').on('click', function () {
        $('#modal').removeClass('active');
    })
})

$(document).mouseup(function (e) { // событие клика по веб-документ
    var div = $(".help-feedback"); // тут указываем class элемента
    var toggle = $('#request');
    if (!div.is(e.target) // если клик был не по нашему блоку
        &&
        !toggle.is(e.target)
        &&
        div.has(e.target).length === 0) { // и не по его дочерним элементам
        $("#modal").removeClass('active');
    }
});
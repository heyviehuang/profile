$(document).ready(function() {

    $('.scrollTop').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html,body').animate({
            scrollTop: targetPos
        }, 700);
    });


    $(".snow").let_it_snow({
        windPower: 0.01,
        speed: 0.001,
        count: 20,
        size: 3,
        image: "../img/img-bgItem-snow.png"
    });
    $("canvas.flake").let_it_snow({
        windPower: 2,
        speed: 0.5,
        count: 2,
        size: 10,
        image: "../img/img-bgItem-snow.png"
    });

    $(".anim-sparkle").sparkle({
        color: "#FFFFFF",
        count: 30,
        overlap: 0,
        speed: 1,
        minSize: 4,
        maxSize: 10,
        direction: "both"
    });

    $('.btnTop').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    function showBtnCondition() {
        if ($(this).scrollTop() > 1200) {
            $('.btnTop').fadeIn();
        } else {
            $('.btnTop').fadeOut();
        }
    }
    $(window).scroll(showBtnCondition);


    var mm = window.matchMedia("(max-width: 415px)");
    mm.addListener(resizeWidth);
    resizeWidth(mm);

    function resizeWidth(pMatchMedia) {
        if (pMatchMedia.matches) {
            var swiper = new Swiper(".modelingWorkBy3dsMax-swiper", {
                slidesPerView: 1,
                spaceBetween: 8,
                slidesPerGroup: 1,
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        } else {
            var swiper = new Swiper(".modelingWorkBy3dsMax-swiper", {
                slidesPerView: 3,
                spaceBetween: 16,
                slidesPerGroup: 1,
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        }
    }

    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        // animated
        $('.animated-t,.animated-r,.animated-b,.animated-l,.animated-m').each(function() {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });
    });
});
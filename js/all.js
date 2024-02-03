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
        image: "img/img-bgItem-snow.png"
    });
    $("canvas.flake").let_it_snow({
        windPower: 2,
        speed: 0.5,
        count: 2,
        size: 10,
        image: "img/img-bgItem-snow.png"
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


    $(function() {
        // 選擇所有的 .infiniteslide 元素
        $('.infiniteslide').each(function(index, element) {
            var direction = $(element).data('direction');
            var clone = $(element).data('clone');


            // 在每個元素上初始化 infiniteslide 插件
            $(element).infiniteslide({
                'speed': 10, // 速度 單位是 px/秒
                'direction': direction, // 根據 data-direction 屬性設定方向
                'pauseonhover': true, // 滑鼠懸停時暫停
                'responsive': false, // 子元素的寬度以百分比指定時
                'clone': clone // 子元素的複製次數
            });
        });
    });

    $('.grid').masonry({

        itemSelector: '.grid-item',

        columnWidth: 320

    });
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    function init() {
        // 選擇所有帶有 'home-snap-section' 類的元素
        document.querySelectorAll('.home-snap-section').forEach(function(section) {
            var targets = [];
            var container = section.querySelector('.snap-container');
            var message = section.querySelector('.message');

            // 選擇所有 'snap-container' 中的 '.col' 元素，並將它們添加到 targets 數組中
            section.querySelectorAll('.snap-container .col').forEach(function(image) {
                targets.push({
                    image: image,
                    speed: image.dataset.speed || 1,
                    mask: image.querySelector('.mask'),
                    lastOffset: null
                });
            });

            // 定義動畫函數，使用 requestAnimationFrame 進行連續的動畫更新
            function animate() {
                for (var i = 0; i < targets.length; i++) {
                    update(targets[i]);
                }

                window.requestAnimationFrame(animate);
            }

            // 定義更新函數，根據視口中的位置更新圖像的遮罩
            function update(target) {
                var rect = target.image.getBoundingClientRect();
                var screenHeight = window.innerHeight;
                var inViewport = rect.top < screenHeight && rect.bottom > 0;

                if (inViewport) {
                    var offset = screenHeight / 2 - rect.top;
                    offset = offset * target.speed - offset;
                    offset = offset * -1;

                    if (offset !== target.lastOffset) {
                        target.mask.style.transform = "translateY(".concat(offset, "px)");
                        target.lastOffset = offset;
                    } else {
                        if (offset !== (offset | 0)) {
                            offset = offset | 0;
                            target.mask.style.transform = "translateY(".concat(offset, "px)");
                        }
                    }
                }
            }

            // 定義模糊函數，根據容器的位置更新消息的模糊效果
            function blur() {
                var rect = container.getBoundingClientRect();
                var screenHeight = window.innerHeight;
                var start = screenHeight / 2;
                var end = 0;
                var inRange = rect.top < start && rect.bottom > screenHeight - end;
                var maxRange = rect.height - start + (screenHeight - end) - screenHeight;

                if (inRange) {
                    var progress = Math.min(maxRange, Math.max(0, start - rect.top));
                    var delta = progress / maxRange;
                    updateMessage(delta);
                } else {
                    updateMessage(rect.top < start ? 1.0 : 0);
                }

                window.requestAnimationFrame(blur);
            }

            // 定義更新消息函數，根據過渡更新消息的模糊和透明度
            function updateMessage(delta) {
                var blur = 10 * delta;
                var opacity = 1 - delta;
                message.style.filter = "blur(".concat(blur, "px)");
                message.style.opacity = opacity;
            }

            // 使用 requestAnimationFrame 啟動動畫和模糊效果的更新
            window.requestAnimationFrame(animate);
            window.requestAnimationFrame(blur);
        });
    }
    $("#tab1").show();
    $("#tab2").hide();

    // 按鈕切換內容
    $(".tab-btn").click(function() {
        var tabId = $(this).attr("id");

        // 使用 if 條件判斷來切換內容
        if (tabId === "btn-tab1") {
            $("#tab1").show();
            $("#tab2").hide();
        } else if (tabId === "btn-tab2") {
            $("#tab1").hide();
            $("#tab2").show();
        }

        // 切換按鈕的 active 狀態
        $(".tab-btn").removeClass("active");
        $(this).addClass("active");
    });
});
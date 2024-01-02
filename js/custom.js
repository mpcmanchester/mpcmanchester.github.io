$(function (e) {

    "use strict";

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var box = $('.header-text').height();
        var header = $('header').height();

        if (scroll >= box - header) {
            $("header").addClass("background-header");
        } else {
            $("header").removeClass("background-header");
        }
    });

    if ($('.menu-trigger').length) {
        $(".menu-trigger").on('click', function () {
            $(this).toggleClass('active');
            $('.header-area .nav').slideToggle(200);
        });
    }

    // Menu elevator animation
    $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var width = $(window).width();
                if (width < 991) {
                    $('.menu-trigger').removeClass('active');
                    $('.header-area .nav').slideUp(200);
                }
                $('html,body').animate({
                    scrollTop: (target.offset().top) - 80
                }, 700);
                return false;
            }
        }
    });


    const dropdownOpener = $('.main-nav ul.nav .has-sub > a');

    // Open/Close Submenus
    if (dropdownOpener.length) {
        dropdownOpener.each(function () {
            var _this = $(this);

            _this.on('tap click', function (e) {
                var thisItemParent = _this.parent('li'),
                    thisItemParentSiblingsWithDrop = thisItemParent.siblings('.has-sub');

                if (thisItemParent.hasClass('has-sub')) {
                    var submenu = thisItemParent.find('> ul.sub-menu');

                    if (submenu.is(':visible')) {
                        submenu.slideUp(450, 'easeInOutQuad');
                        thisItemParent.removeClass('is-open-sub');
                    } else {
                        thisItemParent.addClass('is-open-sub');

                        if (thisItemParentSiblingsWithDrop.length === 0) {
                            thisItemParent.find('.sub-menu').slideUp(400, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        } else {
                            thisItemParent.siblings().removeClass('is-open-sub').find('.sub-menu').slideUp(250, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        }
                    }
                }

                e.preventDefault();
            });
        });
    }

    var screenWidth = screen.width;
    var wordCount = 50;
    var toastText = 'Click here to know about us';

    $(window).resize(function () {
        screenWidth = $(this).width();
    });

    if (screenWidth > 767) {
        wordCount = 100;
        toastText = "Welcome to Manchester Pentecostal Church, to know more about us click here";
    }
    $("#read-more").moreLess({
        wordsCount: wordCount,
        moreLabel: "... Read more",
        lessLabel: "... Read less",
    });


    // var swiper = new Swiper('.blog-slider', {
    //     spaceBetween: 30,
    //     effect: 'fade',
    //     loop: true,
    //     mousewheel: {
    //         invert: false,
    //     },
    //     autoplay: {
    //         delay: 5000,
    //         pauseOnMouseEnter: true,
    //     },

    //     // autoHeight: true,
    //     pagination: {
    //         el: '.blog-slider__pagination',
    //         clickable: true,
    //     }
    // });

    // Toastify({
    //     text: toastText,
    //     duration: 5000,
    //     offset: {
            
    //         y: 110 // vertical axis - can be a number or a string indicating unity. eg: '2em'
    //       },
    //     destination: "https://mpcmanchester.com/about-us",
    //     // avatar: '<i class="bi bi-hand-index"></i>',
    //     newWindow: true,
    //     close: true,
    //     gravity: "top", // `top` or `bottom`
    //     position: "left", // `left`, `center` or `right`
    //     stopOnFocus: true, // Prevents dismissing of toast on hover
    //     style: {
    //       background: "linear-gradient(to right, #00b09b, #96c93d)",
    //     },
    //     onClick: function(){} // Callback after click
    //   }).showToast();
      


});
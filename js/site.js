$(function(){
  'use strict';
  var $page = $('#main-page'),
      options = {
        // blacklist: 'form',
        blacklist: '',
        scroll: true,
        debug: false,
        prefetch: true,
        repeatDelay: 1600,
        cacheLength: 8,
        onStart: {
          duration: 1700,
          render: function ($container) {
            $container.addClass('is-exiting');
            smoothState.restartCSSAnimations();
          },
        },
        onReady: {
          duration: 580,
          render: function ($container, $newContent) {
            $container.removeClass('is-exiting');
            $container.html($newContent);
            // $container.onPageLoad();
          },
        },
        onAfter: function($container) {
          $container.onPageLoad();
        },
      },
      smoothState = $page.smoothState(options).data('smoothState');
});


(function($) {
  $.fn.onPageLoad = function() {






    var mainLogo = $(".main-logo"),
        header = $("header");
    $(function(){
      if (header.hasClass("white")) {
          mainLogo.addClass("f-w");
      }
      else {
          mainLogo.removeClass("f-w");
      }
    });


    function cursorInit() {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
       var body = $("body");
       body.addClass("no-cursor");
      }
      else {
        var body = $("body");
        body.removeClass("no-cursor");
        var $bigBall = document.querySelector('.cursor__ball--big');
        var $smallBall = document.querySelector('.cursor__ball--small');
        var $bigBallCircle = $('.bigBallCircle');
        var $cursorArrows = document.querySelector('.cursor__arrows');
        TweenMax.set($cursorArrows, {autoAlpha: 0, scale: 0.66, transformOrigin: '50% 50%'});
        TweenMax.set($bigBall, {transformOrigin:'38% 36%'});
        function onMouseMove( e ) {
           var follower = this.querySelector('.cursor__ball--small')
            TweenMax.to(follower, 0.1, {
                x: e.clientX - 3,
                y: e.clientY - 2
            })
            TweenMax.to($cursorArrows, 0.6, {
              x: e.clientX - 12.5,
              y: e.clientY - 12,
              ease:Power3.easeOut })
              TweenMax.to($bigBall, 0.6, {
                x: e.clientX - 12.5,
                y: e.clientY - 12,
                ease:Power3.easeOut });
        }
        function init() {
            document.addEventListener('mousemove', onMouseMove)
            document.addEventListener('mousedown', onMouseMove)
        };
        init();
        var globalLink = $(".hoverable");
        var swiperSlide = $(".swiper-slide");

        swiperSlide.mouseenter(function(){
          TweenMax.to($cursorArrows, 1.4, {autoAlpha: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3)});
        });
        swiperSlide.mouseleave(function(){
          TweenMax.to($cursorArrows, 0.8, {autoAlpha: 0, scale: 0.44, ease: Power4.easeOut});
        });

        globalLink.mouseenter(function() {
          TweenMax.to($bigBall, 1.1, {
            scale: 2.8, ease: Elastic.easeOut.config(1, 0.5) });
          TweenMax.to($bigBallCircle, 0.4, {
              fill:"rgba(255,255,255,1)", ease:Power2.easeOut });
          TweenMax.to($cursorArrows, 0.4, {scale: 0, ease:Power3.easeOut});
        });

        globalLink.mouseleave(function() {
          TweenMax.to($bigBall, 1.2, {
            fill: "rgba(255,255,255,0)", scale: 1, ease: Elastic.easeOut.config(1, 0.3) });
            TweenMax.to($bigBallCircle, 0.4, {
            fill:"rgba(255,255,255,0)", ease:Power2.easeOut });
            TweenMax.to($cursorArrows, 0.4, {scale: 1, ease:Power3.easeOut});
            if($(".scene").hasClass("is-exiting")) {
              TweenMax.to($cursorArrows, 0, {autoAlpha: 0, scale: 0.44, ease: Power4.easeOut});
            }
        });

        $("#main").mousedown(function(){
          TweenMax.to($bigBall, 0.2, {
            scale: 0.6, ease: Power2.easeOut });
        });
        $("#main, .hoverable").mouseup(function(){
          TweenMax.to($bigBall, 0.2, {
            scale: 1, ease: Power2.easeOut });
        });
        $.attractHover('.js-attract-hover',{proximity: 25,magnetism: 2,});
        $.attractHover('.js-attract-hover--alt', {proximity: 70, magnetism: 2,});
      }
    }


    function iconWipe() {
      var $rect = $(".rect");
      TweenMax.set($rect, {transformOrigin: "0% 50%", scaleX: 0});
    }
    iconWipe();

    cursorInit();

    $(function(){
      if ($(".swiper-container").length) {
        var swiper = new Swiper('.swiper-container', {
          direction: 'horizontal',
          mousewheelControl: false,
          speed: 520,
          slidesPerView: 1,
          freeMode: false,
          loop: false,
          freeModeSticky: false,
          parallax: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
      			clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '</span>';
              },
          },
          dynamicBullets: true,
          observer: true,
          observeParents: true,
          keyboard: {
            enabled: true,
            onlyInViewport: false
          },
        });
      }
    });



var $svgStars = $(".svg-stars"),
    $svgStarsPath = $(".svg-stars path").toArray(),
    $svgStarsGroup = $(".svg-stars--group"),
    $headerStarsAnim = new TimelineMax({paused: true, repeat: -1, repeatDelay: 0, yoyo: true}),
    $headerStarsFlicker = new TimelineMax({paused: true, repeat: -1, repeatDelay: 0, yoyo: true});
    $svgStarsPath.sort(function(){return 0.5-Math.random()});
    $headerStarsFlicker
    .fromTo($svgStarsGroup, 0.066, {opacity: 1}, {opacity: 0.92, ease:Power2.easeInOut});
    $headerStarsAnim
    .staggerTo($svgStarsPath, 1.2, {autoAlpha: 0, ease:Power4.easeOut}, 0.018)
    .staggerTo($svgStarsPath, 1.2, {autoAlpha: 1, ease:Power4.easeIn}, -0.018, '-0.6');



inView.threshold(0.3);
inView('.el').on('enter', function(el){
  el.classList.add("anim");
  if ($(el).hasClass("service-skill__item")) {
    var $rect = $(el).find(".rect");
    var $svg = $(el).find("svg");
    TweenMax.staggerTo($rect, 2.6, {scaleX: 1, ease:Power4.easeOut, delay: 0.3}, 0.48);
  }
  if($(el).hasClass("header__bg--home")) {
    $headerStarsAnim.play();
    $headerStarsFlicker.play();
  }
});
inView('.el').on('exit', function(el){
  // el.classList.remove("anim");
  if($(el).hasClass("header__bg--home")) {
    $headerStarsAnim.pause();
    $headerStarsFlicker.pause();
  }
});

    var headroomMenu = document.querySelector(".main-menu");
    var headroom  = new Headroom(headroomMenu, {
      "offset": 120,
      "tolerance": {
        up: 20,
        down: 20
      },
      "classes": {
        "initial": "topmenu--fixed",
        "pinned": "slideDown",
        "unpinned": "slideUp",
        "top": "top",
        "notTop" : "not-top",
      }
    });
    headroom.init();




    // $('a[href^="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     $(document).off("scroll");
    //
    //     $('a').each(function () {
    //         $(this).removeClass('active');
    //     })
    //     $(this).addClass('active');
    //
    //     var target = this.hash,
    //         menu = target;
    //     // $target = $(target);
    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top-40
    //     }, 1000, 'swing', function () {
    //         window.location.hash = target;
    //         $(document).on("scroll", onScroll);
    //     });
    // });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $(document).off("scroll");
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top+90
        }, 400);
    });


    // $(function(){
    //     lax.setup()
    //   	const updateLax = () => {
    //   		lax.update(window.scrollY)
    //   		window.requestAnimationFrame(updateLax)
    //   	}
    //   	window.requestAnimationFrame(updateLax)
    // });


    $(document).on("scroll", onScroll);





    //smoothscroll


    function onScroll(event){

      var anchorList = $(".anchor-list");
      if($(window).scrollTop() > 360) {
        TweenMax.to(anchorList, 0.24, {autoAlpha: 1, ease:Power2.easeOut});
      }
      else {
        TweenMax.to(anchorList, 0.24, {autoAlpha: 0, ease:Power2.easeOut});
      }

      if ($(window).scrollTop() >= $(document).height() - $(window).height() - 1080) {
        TweenMax.to(anchorList, 0.24, {autoAlpha: 0, ease:Power2.easeOut});
      }

        var scrollPos = $(document).scrollTop();
        $('.anchor-menu li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.anchor-menu li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }

  var content = $(".content");
  var sceneElement = $(".scene_element");


$(".sticky").stick_in_parent({
  parent: '.grid',
  offset_top: 128,
});

$(".sticky-al").stick_in_parent({
  parent: '.push-right',
  offset_top: 0,
});



var button = $(".button"),
    gloopPath = $(".gloop-path"),
    menuItem = $(".menu-item"),
    logoPaths = $(".main-logo polygon, .main-logo rect"),
    mainMenu = $(".main-menu"),
    // transition = new TimelineMax({
    //   paused: true, repeat: 0, delay: 0, yoyo: false
    // }),

    ease = CustomEase.create("custom", "M0,0 C0,0 0.204,0.75 0.3,1.1 0.358,1.288 0.484,1.022 0.53,0.997 0.62,0.828 0.667,1.002 0.725,1.004 0.829,1.008 1,1 1,1");

    // TweenMax.set(gloopPath, {visibility: 'visible', scaleY: 0, transformOrigin: '50%, 0%', attr: {d: 'M1920,198.6V0H0v168.8c0,0,25.4-85.6,188.6-85.6s99.5,179.2,236.9,179.2c157.3,0,108-113.5,264.8-113.5c173.2,0,123.4,223,294.6,223c137.4,0,141.4-318.9,244.9-318.9c137.4,0,141.3,275.3,254.8,275.3c151.3,0,131.4-227.2,262.8-227.2C1841,101.1,1920,198.6,1920,198.6z'}})
    // TweenMax.set(menuItem, {autoAlpha: 1});

// transition
//   .to(gloopPath, 0.3, { scaleY: 1, transformOrigin: '50%, 0%', ease: Power1.easeIn })
//   .to(gloopPath, 0.2, { attr: {d: 'M1920,885.5V0H0v872.2c0,0,25.4-496.4,188.6-496.4s99.5,703,236.9,703c157.3,0,108-572.9,264.8-572.9c173.2,0,123.4,572.9,294.6,572.9c137.4,0,141.4-787.9,244.9-787.9c137.4,0,141.3,772.4,254.8,772.4c151.3,0,131.4-464.5,262.8-464.5C1841,598.8,1920,885.5,1920,885.5z'}, ease:Power0.easeNone })
//   .to(gloopPath, 0.6, { attr: {d: 'M1920,1080V0H0v1080c0,0,25.4-1.2,188.6-1.2s99.5,0,236.9,0c157.3,0,108,1.2,264.8,1.2c173.2,0,123.4-1.2,294.6-1.2c137.4,0,141.4,1.2,244.9,1.2c137.4,0,141.3,0,254.8,0c151.3,0,131.4,0,262.8,0C1841,1080,1920,1080,1920,1080z'}, ease: Power4.easeOut})
//   .staggerFrom(menuItem, 0.4, {y: '0%', autoAlpha:0, delay:0, ease:Power2.easeOut}, 0.06, '-=0.6');
  // .to(logoPaths, 0.2, {fill:'#FFFFFF', ease:Power1.easeInOut}, '-=1.1');

  $(".menu-toggle").click(function(){
    if ( $("body").hasClass("menu-open") ) {
      $("nav").removeClass("nav-is-open");
      $("body").removeClass("menu-open");
      $(".hb").removeClass("toggled");
      setTimeout(function(){
        $(".main-menu").removeClass("has-open");
      }, 820);
      // transition.reverse();
    }
    else {
      $("nav").addClass("nav-is-open");
      $(".hb").addClass("toggled");
      $("body").addClass("menu-open");
      $(".main-menu").addClass("has-open");
      // transition.play();
    }
  });




  var loader = $(".loader");
  loader.removeClass("exit");
  $("body").removeClass("menu-open");


};
}(jQuery));


$(document).ready(function() {
  $('body').onPageLoad();
});

$(window).on('beforeunload', function(){
  $(window).scrollTop();
});



//
// $(function(){
//   if($("div").hasClass("rellax")) {
//     var rellax = new Rellax('.rellax');
//   }
// });

// var myLazyLoad = new LazyLoad({
//     elements_selector: ".lzl",
//     threshold: 920,
//   //   callback_set: function(el) {
//   //   el.style.opacity = "1";
//   // }
// });
// $(function(){
//   var $window = $(window);
//
//   var scrollTime = 0.72;
//   var scrollDistance = 160;
//   $window.on("mousewheel DOMMouseScroll", function(event){
//     event.preventDefault();
//     var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
//     var scrollTop = $window.scrollTop();
//     var finalScroll = scrollTop - parseInt(delta*scrollDistance);
//
//     TweenMax.to($window, scrollTime, {
//       scrollTo : { y: finalScroll, autoKill:true },
//         ease: Power4.easeOut,
//         autoKill: true,
//         overwrite: 5
//       });
//
//   });
//
// });

// var body = $("body");
// var link = $(".link, a.menu-link");
// var nav = $("nav");
// link.click(function(){
//   body.addClass("loading");
//   // body.addClass("no-scroll");
//
// });
// body.removeClass("loading");
// body.removeClass("no-scroll");




// $(function(){
//   if($("div").hasClass("rellax")) {
//     var rellax = new Rellax('.rellax');
//   }
// });

// $('.js-tilt').tilt({
//     maxTilt: 5,
//     perspective: 5000,
//     speed: 900,
//     transition: true,
//     // easing: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
// });
// $('.js-tilt-two').tilt({
//     maxTilt: 7,
//     perspective: 1000,
//     speed: 1700,
//     transition: true,
// });
// $('.js-tilt-three').tilt({
//     maxTilt: 12,
//     perspective: 1500,
//     speed: 1200,
//     transition: true,
// });

// $('.js-tilt').each(function(){
//   $(this).tilt({
//       maxTilt: 5,
//       perspective: 5000,
//       speed: 800,
//       transition: true,
//       // easing: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
//   });
// });
//
// $('.js-tilt-two').each(function(){
//   $(this).tilt({
//       maxTilt: 6,
//       perspective: 1000,
//       speed: 1700,
//       transition: true,
//   });
// });
//
// $('.js-tilt-three').each(function(){
//   $(this).tilt({
//       maxTilt: 12,
//       perspective: 1500,
//       speed: 1200,
//       transition: true,
//
//   });
// });



// $('.menu-link').click(function(e){
//       if (header.hasClass("white")) {
//           mainLogo.removeClass("f-w");
//       }
//        e.preventDefault();
//        var content  = $('#main-page').smoothState().data('smoothState');
//        var href = $(this).attr('href');
//        content.load(href);
//       $(".scene_element").addClass("is-exiting");
//        loader.addClass("exit");
//  });

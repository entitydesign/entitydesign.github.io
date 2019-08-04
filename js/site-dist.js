"use strict";$(function(){var e={blacklist:"form",scroll:!0,debug:!1,prefetch:!0,repeatDelay:1600,cacheLength:8,onStart:{duration:1700,render:function(e){e.addClass("is-exiting"),a.restartCSSAnimations()}},onReady:{duration:580,render:function(e,a){e.removeClass("is-exiting"),e.html(a)}},onAfter:function(e){e.onPageLoad()}},a=$("#main-page").smoothState(e).data("smoothState")}),function(i){i.fn.onPageLoad=function(){var e,a=i(".main-logo"),o=i("header");i(function(){o.hasClass("white")?a.addClass("f-w"):a.removeClass("f-w")}),e=i(".rect"),TweenMax.set(e,{transformOrigin:"0% 50%",scaleX:0}),function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))i("body").addClass("no-cursor");else{var e=function(e){var a=this.querySelector(".cursor__ball--small");TweenMax.to(a,.1,{x:e.clientX-3,y:e.clientY-2}),TweenMax.to(t,.6,{x:e.clientX-12.5,y:e.clientY-12,ease:Power3.easeOut}),TweenMax.to(o,.6,{x:e.clientX-12.5,y:e.clientY-12,ease:Power3.easeOut})};i("body").removeClass("no-cursor");var o=document.querySelector(".cursor__ball--big"),a=(document.querySelector(".cursor__ball--small"),i(".bigBallCircle")),t=document.querySelector(".cursor__arrows");TweenMax.set(t,{autoAlpha:0,scale:.66,transformOrigin:"50% 50%"}),TweenMax.set(o,{transformOrigin:"38% 36%"}),document.addEventListener("mousemove",e),document.addEventListener("mousedown",e);var n=i(".hoverable"),s=i(".swiper-slide");s.mouseenter(function(){TweenMax.to(t,1.4,{autoAlpha:1,scale:1,ease:Elastic.easeOut.config(1,.3)})}),s.mouseleave(function(){TweenMax.to(t,.8,{autoAlpha:0,scale:.44,ease:Power4.easeOut})}),n.mouseenter(function(){TweenMax.to(o,1.1,{scale:2.8,ease:Elastic.easeOut.config(1,.5)}),TweenMax.to(a,.4,{fill:"rgba(255,255,255,1)",ease:Power2.easeOut}),TweenMax.to(t,.4,{scale:0,ease:Power3.easeOut})}),n.mouseleave(function(){TweenMax.to(o,1.2,{fill:"rgba(255,255,255,0)",scale:1,ease:Elastic.easeOut.config(1,.3)}),TweenMax.to(a,.4,{fill:"rgba(255,255,255,0)",ease:Power2.easeOut}),TweenMax.to(t,.4,{scale:1,ease:Power3.easeOut}),i(".scene").hasClass("is-exiting")&&TweenMax.to(t,0,{autoAlpha:0,scale:.44,ease:Power4.easeOut})}),i("#main").mousedown(function(){TweenMax.to(o,.2,{scale:.6,ease:Power2.easeOut})}),i("#main, .hoverable").mouseup(function(){TweenMax.to(o,.2,{scale:1,ease:Power2.easeOut})})}}(),i(function(){if(i(".swiper-container").length)new Swiper(".swiper-container",{direction:"horizontal",mousewheelControl:!1,speed:520,slidesPerView:1,freeMode:!1,loop:!1,freeModeSticky:!1,parallax:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,a){return'<span class="'+a+'"></span>'}},dynamicBullets:!0,observer:!0,observeParents:!0,keyboard:{enabled:!0,onlyInViewport:!1}})}),inView.threshold(.4),inView(".el").on("enter",function(e){if(e.classList.add("anim"),i(e).hasClass("services-skills__list")){var a=i(".rect");TweenMax.staggerTo(a,2.6,{scaleX:1,ease:Power4.easeOut,delay:.6},.44)}});var t=document.querySelector(".main-menu");new Headroom(t,{offset:120,tolerance:{up:20,down:20},classes:{initial:"topmenu--fixed",pinned:"slideDown",unpinned:"slideUp",top:"top",notTop:"not-top"}}).init(),i(document).on("click",'a[href^="#"]',function(e){e.preventDefault(),i(document).off("scroll"),i("a").each(function(){i(this).removeClass("active")}),i(this).addClass("active");this.hash;i("html, body").animate({scrollTop:i(i.attr(this,"href")).offset().top+90},400)}),i(document).on("scroll",function(e){var a=i(".anchor-list");360<i(window).scrollTop()?TweenMax.to(a,.24,{autoAlpha:1,ease:Power2.easeOut}):TweenMax.to(a,.24,{autoAlpha:0,ease:Power2.easeOut}),i(window).scrollTop()>=i(document).height()-i(window).height()-1080&&TweenMax.to(a,.24,{autoAlpha:0,ease:Power2.easeOut});var o=i(document).scrollTop();i(".anchor-menu li a").each(function(){var e=i(this),a=i(e.attr("href"));a.position().top<=o&&a.position().top+a.height()>o?(i(".anchor-menu li a").removeClass("active"),e.addClass("active")):e.removeClass("active")})});i(".content"),i(".scene_element");i(".sticky").stick_in_parent({parent:".grid",offset_top:128}),i(".sticky-al").stick_in_parent({parent:".push-right",offset_top:0});i(".button"),i(".gloop-path"),i(".menu-item"),i(".main-logo polygon, .main-logo rect"),i(".main-menu"),CustomEase.create("custom","M0,0 C0,0 0.204,0.75 0.3,1.1 0.358,1.288 0.484,1.022 0.53,0.997 0.62,0.828 0.667,1.002 0.725,1.004 0.829,1.008 1,1 1,1");i(".menu-toggle").click(function(){i("body").hasClass("menu-open")?(i("nav").removeClass("nav-is-open"),i("body").removeClass("menu-open"),i(".hb").removeClass("toggled"),setTimeout(function(){i(".main-menu").removeClass("has-open")},820)):(i("nav").addClass("nav-is-open"),i(".hb").addClass("toggled"),i("body").addClass("menu-open"),i(".main-menu").addClass("has-open"))}),i.attractHover(".js-attract-hover",{proximity:25,magnetism:2}),i.attractHover(".js-attract-hover--alt",{proximity:100,magnetism:2}),i(".loader").removeClass("exit"),i("body").removeClass("menu-open")}}(jQuery),$(document).ready(function(){$("body").onPageLoad()}),$(window).on("beforeunload",function(){$(window).scrollTop()});
// Script for Agrikon website

(function ($) {
    "use strict";

    // Preloader
    $(window).on("load", function () {
        $("#preloader").fadeOut("slow", function () {
            $(this).remove();
        });
    });

    // Sticky Navbar
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".navbar").addClass("sticky-header");
        } else {
            $(".navbar").removeClass("sticky-header");
        }
    });

    // Mobile Menu Toggle
    $(".navbar-toggler").on("click", function () {
        $(this).toggleClass("active");
    });

    // Search Box Toggle
    $(".search-btn").on("click", function (e) {
        e.preventDefault();
        $(".search-popup").toggleClass("active");
    });
    $(".search-popup .close-search").on("click", function (e) {
        e.preventDefault();
        $(".search-popup").removeClass("active");
    });

    // Smooth Scroll for Anchor Links
    $("a.scroll-to").on("click", function (e) {
        e.preventDefault();
        var target = $(this.hash);
        $("html, body").animate(
            {
                scrollTop: target.offset().top - 80,
            },
            1000
        );
    });

    // Counter Up
    $(".counter").counterUp({
        delay: 10,
        time: 2000,
    });

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Back to Top Button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".back-to-top").fadeIn();
        } else {
            $(".back-to-top").fadeOut();
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            1000
        );
        return false;
    });
})(jQuery);

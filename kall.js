

$(function () {

  /* ---------------------------------------------------------
     Preloader — fade out once everything has loaded
  --------------------------------------------------------- */
  $(window).on("load", function () {
    $(".loader_bg").addClass("loaded");
  });
  // safety net in case "load" already fired before this script ran
  setTimeout(function () {
    $(".loader_bg").addClass("loaded");
  }, 1200);

  /* ---------------------------------------------------------
     Current year in footer
  --------------------------------------------------------- */
  $("#year").text(new Date().getFullYear());

  /* ---------------------------------------------------------
     Sticky header + back-to-top visibility on scroll
  --------------------------------------------------------- */
  var $header = $(".header");
  var $backToTop = $("#back-to-top");

  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop() > 60;
    $header.toggleClass("sticky-header", scrolled);
    $backToTop.toggleClass("show", $(window).scrollTop() > 400);
  });

  $backToTop.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  /* ---------------------------------------------------------
     Mobile menu toggle
  --------------------------------------------------------- */
  var $navToggle = $("#mobile-nav-toggle");
  var $nav = $("#menu-area-main");

  $navToggle.on("click", function () {
    $(this).toggleClass("open");
    $nav.toggleClass("show-menu");
  });

  // close the mobile menu after a link is tapped
  $nav.on("click", "a", function () {
    $navToggle.removeClass("open");
    $nav.removeClass("show-menu");
  });

  /* ---------------------------------------------------------
     Smooth scroll for in-page anchors (e.g. the "signup" link)
  --------------------------------------------------------- */
  $('a[href^="#"]').on("click", function (e) {
    var target = $(this).attr("href");
    if (target.length > 1 && $(target).length) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: $(target).offset().top - 90 }, 500);
    }
  });

  /* ---------------------------------------------------------
     Newsletter form — front-end only feedback
  --------------------------------------------------------- */
  $("#newsletter-form").on("submit", function (e) {
    e.preventDefault();
    var $input = $(this).find("input[type='email']");
    var $message = $("#form-message");

    if ($input.val().trim() === "") {
      $message.text("Please enter your email address.");
      return;
    }

    $message.text("Thanks — you're on the list!");
    $input.val("");
  });

});
import $ from "jquery";

  $(window).on("load", function () {
    $('.loader').addClass('preloader');
    $(".preloader").delay(3500).fadeOut(200);
    $(".preloader .start").delay(3500).fadeOut(200);
  });



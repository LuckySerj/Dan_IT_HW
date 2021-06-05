`use strict`;

$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() > $(window).height()) {
    $(".scrollUp").addClass("show");
  } else {
    $(".scrollUp").removeClass("show");
  }
});
$(".scrollUp").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 700);
  return false;
});

$("#MostPopularPosts").click(function () {
  $(".post-gallery").slideToggle(500);
  return false;
});

/* About Slide */
$(".about-slide").slick({
  dots: false,
  infinite: true,
  centerMode: true,
  variableWidth: true,
  centerPadding: "0",
  slidesToShow: 1,
  slidesToScroll: 1,
  edgeFriction: 0.5,
  arrows: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".about-slide-prev").on("click", function () {
  $(".about-slide").slick("slickPrev");
});

$(".about-slide-next").on("click", function () {
  $(".about-slide").slick("slickNext");
});

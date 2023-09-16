/* About Slide */
$(".about-slide").slick({
  dots: false,
  infinite: true,
  centerMode: true,
  variableWidth: true,
  centerPadding: "60px",
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
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

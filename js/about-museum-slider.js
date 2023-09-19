/* About Museum Slide */
$(".about-projects-slide").slick({
  dots: false,
  infinite: true,
  centerMode: true,
  variableWidth: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
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
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0",
      },
    },
  ],
});

$(".about-projects-slide-prev").on("click", function () {
  $(".about-projects-slide").slick("slickPrev");
});

$(".about-projects-slide-next").on("click", function () {
  $(".about-projects-slide").slick("slickNext");
});

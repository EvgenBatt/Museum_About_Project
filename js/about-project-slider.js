/* About Slide */
$(".about-project-slide").slick({
  dots: false,
  infinite: true,
  centerMode: true,
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
});

$(".about-project-slide-prev").on("click", function () {
  $(".about-project-slide").slick("slickPrev");
});

$(".about-project-slide-next").on("click", function () {
  $(".about-project-slide").slick("slickNext");
});

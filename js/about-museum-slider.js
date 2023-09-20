/* About Museum Slide */
$(".about-museum-slide").slick({
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
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".about-museum-slide-prev").on("click", function () {
  $(".about-museum-slide").slick("slickPrev");
});

$(".about-museum-slide-next").on("click", function () {
  $(".about-museum-slide").slick("slickNext");
});

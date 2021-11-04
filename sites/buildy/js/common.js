$(function () {
  // Custom JS

  // alert('Ваша версия jQuery ' + jQuery.fn.jquery);
  $(".vertical-center-4").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });

  $(".feedback__slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
		prevArrow: '<div class="prev_quot"></div>',
		nextArrow: '<div class="next_quot"></div>',
  });
});

// $(".chzn-select").chosen();

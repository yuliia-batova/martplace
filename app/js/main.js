$(function(){
    $(".rating").rateYo({
        rating: 4.5,
        starWidth: "16px",        
        readOnly: true,
        spacing: "5px",
      });
      $(".slider__products-wrapp").slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true,
        dots: false,
        prevArrow: '<button class="slick-arrow slick-prew"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></button>',
      });
});
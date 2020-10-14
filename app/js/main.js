$(function(){
    $(".rating").rateYo({
        rating: 4.5,
        starWidth: "16px",        
        readOnly: true,
        spacing: "2px",
      });
      $(".slider__inner").slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true,
        dots: false,
        appendArrows: $('.slider__arrows'),
        prevArrow: '<button class="slick-arrow slick-prew"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></button>',
      });
      
      
      var mixer=mixitup(".products__inner--flex");
});

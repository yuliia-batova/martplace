$(function(){
    $(".slider__rating").rateYo({
        rating: 4.5,
        starWidth: "16px",        
        readOnly: true,
        spacing: "2px",
      });
      $(".product__rating").rateYo({
        rating: 4.5,
        starWidth: "15px",        
        readOnly: true,
        spacing: "1.5px",
      });
      $(".slider__inner-featured").slick({
        slidesToShow: 1,    
        adaptiveHeight: true,
        arrows: true,
        dots: false,
        appendArrows: $('.slider__arrows--violet'),
        prevArrow: '<button class="slick-arrow slick-prew"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></button>',    
      });
      $(".slider__inner-followers").slick({
        slidesToShow: 3,  
        slidesToScroll: 3,          
                       
        arrows: true,
        dots: false,
        appendArrows: $('.slider__arrows--blue'),
        prevArrow: '<button class="slick-arrow slick-prew"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></button>',    
      });
      $('.products__filter').on('click', function(){
        $('.list').slideToggle();
      });      
      var mixer=mixitup(".products__inner--flex");
});


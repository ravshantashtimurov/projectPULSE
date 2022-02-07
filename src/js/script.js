$(document).ready(function(){
    $('.carousel__inner').slick({
        // dots: true, <--{вкл/выкл точки под слайдером}->
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        // adaptiveHeight: true, <--{вкл/выкл автофиксации высоты картинки в слайдере}->
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
});

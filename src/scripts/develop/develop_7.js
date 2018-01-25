function stepsSlider(selector, slides){
  $(selector).slick({
    slidesToShow: slides,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.consult-slider'
  });
  $(selector).on('afterChange', function(){
     sliderCount();
  });
};

function consultSlider(selector, slides){
  $(selector).slick({
    slidesToShow: slides,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.steps-slider',
    responsive: [
      {
        breakpoint: 660,
        settings: {
          adaptiveHeight: true
        }
      }
    ]
  });

  $(selector).on('afterChange', function(){
    sliderCount();
  });

  $('.consult-prev').on('click', function(e) {
    e.preventDefault();
    $(selector).slick('slickPrev');
  });

  $('.consult-next').on('click', function(e) {
    e.preventDefault();
    $(selector).slick('slickNext');
  });
};

function sliderCount(){
  var indexPrev = $('.consult-slide.slick-current.slick-active').index()+1;
  var indexNext = $('.consult-slide.slick-current.slick-active').index()+1;

  if(indexNext == 7) {
    indexNext = 1;
  }
  if (indexPrev == 2) {
    indexPrev = 8;
  }
  $('.js-num-next').text('0'+indexNext);
  $('.js-num-prev').text( '0'+(indexPrev-2) );
}


$(document).ready(function(){
  stepsSlider('.steps-slider', 6);
  consultSlider('.consult-slider', 1);
  sliderCount();

  $('.consult-prev, .consult-next').click(function() {
    sliderCount();
  });

  $('.send-link').on('click', function(e){
    e.preventDefault();
    $('.consult-form').addClass('active');
    $(this).hide();
  })

  $('.js-social').on('click', function(e){
    e.preventDefault();
    $('.other-social').addClass('active');
    return false;
  })
});

//Other Socail Hide
$(document).click(function(e) {
  if ($(e.target).closest('.other-social').length)
    return;
  $('.other-social').removeClass('active');

  e.stopPropagation();
});

$(window).load(function(){

});

$(window).resize(function(){

});
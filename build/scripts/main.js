'use strict';

/**
* Check scroll-bar width
* exemple ->   let scroll = $.scrollbarWidth();
*/
$.scrollbarWidth = function () {
    var a, b, c;if (c === undefined) {
        a = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b = a.children();c = b.innerWidth() - b.height(99).innerWidth();a.remove();
    }return c;
};

/**
* Scroll to the block
* @param {block} str - For what we click
* @param {targetBlock} str - to what we should scroll
*/
function scrollUp(block, targetBlock) {
    $(block).click(function (e) {
        var target = $(targetBlock).offset().top;

        $('body,html').stop().animate({ scrollTop: target }, 800);
        return false;

        e.preventDefault();
    });
}

/**
* Scroll animation
* @param {item} jquery obj - Wrapper for class 'animate-it';
*/
function animationBlock(item) {

    $(window).scroll(function () {
        checkForAnimate();
    });

    function checkForAnimate() {
        var bottomCheck = $(window).height() + $(window).scrollTop();
        var windowTop = $(window).scrollTop() + $(window).height() / 1.5;
        item.each(function () {
            if (windowTop > $(this).offset().top || bottomCheck > $('body').height() * 0.98) {

                var itemSect = $(this);
                var point = 0;
                itemSect.find('.animate-it').addClass('animated');

                var timer = setInterval(function () {
                    itemSect.find('.animate-delay').eq(point).addClass('animated');
                    point++;
                    if (itemSect.find('.animate-delay').length == point) {
                        clearInterval(timer);
                    }
                }, 200);
            }
        });
    }
    checkForAnimate();
}

/**
* GO TO href (smooth)
*/
function goTo() {
    $('.js-scrolltop').click(function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top - 65;
        $('body,html').animate({ scrollTop: target }, 500);
    });
}

/**
* Cut text script
* (Add to  div class "cut-text" width data-attr "data-cut"(length letters to show) )
*/
function cutText() {
    var filler = '...';
    var filler_length = filler.length;
    $('.cut-text').each(function () {
        var value = $(this).data('cut') - filler_length;
        var text = $.trim($(this).text());
        if (text.length > value && value > 0) {
            var newText = text.substring(0, value) + filler;
            $(this).text(newText);
        }
    });
};

/**
* Functional header butter
* @param {menuMobile} jquery obj - For what we click
* @param {toggleMenu} jquery obj - to what menu we will slideToggle
*/
function headeButer(menuMobile, toggleMenu) {
    if (menuMobile) {
        menuMobile.click(function (event) {
            if ($(window).width() < 1024 - $.scrollbarWidth()) {
                $(this).toggleClass('active');
                toggleMenu.stop().slideToggle();
            }
        });

        $(document).on('click touchstart', function (event) {
            if ($(window).width() < 1024 - $.scrollbarWidth()) {
                var div = toggleMenu;
                if (!div.is(event.target) && div.has(event.target).length === 0 && !menuMobile.is(event.target) && menuMobile.has(event.target).length === 0) {
                    toggleMenu.slideUp();
                    menuMobile.removeClass('active');
                }
            }
        });
    }
}

/**
* Expresion for numbers with spaces
* @param {x} number
* @return {string}
*/
function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

$(document).ready(function () {

    $('.footer_placeholder').height($('.footer').outerHeight());

    goTo();
    animationBlock($('.setion-animate'));
});

$(window).resize(function () {

    $('.footer_placeholder').height($('.footer').outerHeight());
});
"use strict";

var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 55.755282, lng: 37.597609 },
		zoom: 15,
		scrollwheel: false,
		// zoomControl: false,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		rotateControl: false,
		styles: [{
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [{
				"hue": "#6600ff"
			}, {
				"saturation": -11
			}, {
				"visibility": "on"
			}]
		}, {
			"featureType": "poi",
			"elementType": "all",
			"stylers": [{
				"saturation": "33"
			}, {
				"hue": "#6600ff"
			}, {
				"lightness": "2"
			}, {
				"visibility": "simplified"
			}]
		}, {
			"featureType": "poi.attraction",
			"elementType": "all",
			"stylers": [{
				"saturation": "-58"
			}, {
				"lightness": "28"
			}]
		}, {
			"featureType": "poi.business",
			"elementType": "all",
			"stylers": [{
				"saturation": "-58"
			}, {
				"lightness": "28"
			}]
		}, {
			"featureType": "poi.government",
			"elementType": "all",
			"stylers": [{
				"saturation": "-58"
			}, {
				"lightness": "28"
			}]
		}, {
			"featureType": "poi.medical",
			"elementType": "all",
			"stylers": [{
				"saturation": "-58"
			}, {
				"lightness": "28"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "all",
			"stylers": [{
				"visibility": "on"
			}, {
				"saturation": "-58"
			}, {
				"lightness": "28"
			}]
		}, {
			"featureType": "poi.place_of_worship",
			"elementType": "all",
			"stylers": [{
				"saturation": "-58"
			}, {
				"lightness": "28"
			}]
		}, {
			"featureType": "poi.school",
			"elementType": "all",
			"stylers": [{
				"saturation": "-58"
			}, {
				"lightness": "28"
			}]
		}, {
			"featureType": "poi.sports_complex",
			"elementType": "all",
			"stylers": [{
				"saturation": "-58"
			}, {
				"lightness": "28"
			}]
		}, {
			"featureType": "road",
			"elementType": "all",
			"stylers": [{
				"hue": "#5e00ff"
			}, {
				"saturation": -79
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "all",
			"stylers": [{
				"lightness": 30
			}, {
				"weight": 1.3
			}]
		}, {
			"featureType": "transit",
			"elementType": "all",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"hue": "#5e00ff"
			}, {
				"saturation": -16
			}]
		}, {
			"featureType": "transit.line",
			"elementType": "all",
			"stylers": [{
				"saturation": -72
			}]
		}, {
			"featureType": "water",
			"elementType": "all",
			"stylers": [{
				"saturation": -65
			}, {
				"hue": "#1900ff"
			}, {
				"lightness": 8
			}]
		}]
	});

	var marker = new google.maps.Marker({
		position: { lat: 55.755282, lng: 37.597609 },
		map: map,
		icon: "images/marker.png"
	});
}

function mainSlider(selector) {
	var prev = $('.wrap-main-slider .prev');
	var next = $('.wrap-main-slider .next');
	$('.colorfull-slide').removeClass('active');
	$(selector).slick({
		dots: false,
		infinite: true,
		autoplay: true,
		draggable: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: 'progressive',
		fade: true,
		waitForAnimate: true,
		speed: 1500,
		asNavFor: '.main-slider-bg'
	});
	$('.slick-active .colorfull-slide').addClass('active');

	$(selector).on('afterChange', function () {
		$('.colorfull-slide').removeClass('active');
		$('.slick-current.slick-active .colorfull-slide').addClass('active');
		$(selector).slick("pause");
		var color = $('.slick-active').attr('data-color');
		$('.wrap-main-slider').removeClass().addClass('wrap-main-slider');
		$('.wrap-main-slider').addClass(color);
		setTimeout(function () {
			$(selector).slick("play");
		}, 5000);
	});

	prev.click(function (e) {
		e.preventDefault();
		$('.slick-active .colorfull-slide').addClass('active');
		setTimeout(function () {
			$(selector).slick('slickPrev');
		}, 1500);
	});
	next.click(function (e) {
		e.preventDefault();
		$('.slick-active .colorfull-slide').addClass('active');
		setTimeout(function () {
			$(selector).slick('slickNext');
		}, 1500);
	});
};
function mainSliderBg(selector) {
	$(selector).slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		lazyLoad: 'progressive',
		fade: true,
		waitForAnimate: true,
		speed: 1500,
		asNavFor: '.main-slider'
	});
}

$(document).ready(function () {
	initMap();
	mainSlider('.main-slider');
	mainSliderBg('.main-slider-bg');

	var margin = $('.header').innerHeight();
	$('.wrap-main-slider').css('margin-top', margin);

	$('.el_input, .el_textarea').change(function () {
		if ($(this).val().length > 0) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});

	$('.burger').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.header-content .menu').slideToggle();
	});

	$('.header .logo a').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('body,html').animate({ scrollTop: 0 }, 1000);
		setTimeout(function () {
			window.location.reload();
		}, 1000);
	});
});

$(window).load(function () {});

$(window).resize(function () {
	var margin = $('.header').innerHeight();
	$('.wrap-main-slider').css('margin-top', margin);
});
'use strict';

function stepsSlider(selector, slides) {
  $(selector).slick({
    slidesToShow: slides,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.consult-slider'
  });
  $(selector).on('afterChange', function () {
    sliderCount();
  });
};

function consultSlider(selector, slides) {
  $(selector).slick({
    slidesToShow: slides,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.steps-slider',
    responsive: [{
      breakpoint: 660,
      settings: {
        adaptiveHeight: true
      }
    }]
  });

  $(selector).on('afterChange', function () {
    sliderCount();
  });

  $('.consult-prev').on('click', function (e) {
    e.preventDefault();
    $(selector).slick('slickPrev');
  });

  $('.consult-next').on('click', function (e) {
    e.preventDefault();
    $(selector).slick('slickNext');
  });
};

function sliderCount() {
  var indexPrev = $('.consult-slide.slick-current.slick-active').index() + 1;
  var indexNext = $('.consult-slide.slick-current.slick-active').index() + 1;

  if (indexNext == 7) {
    indexNext = 1;
  }
  if (indexPrev == 2) {
    indexPrev = 8;
  }
  $('.js-num-next').text('0' + indexNext);
  $('.js-num-prev').text('0' + (indexPrev - 2));
}

$(document).ready(function () {
  stepsSlider('.steps-slider', 6);
  consultSlider('.consult-slider', 1);
  sliderCount();

  $('.consult-prev, .consult-next').click(function () {
    sliderCount();
  });

  $('.send-link').on('click', function (e) {
    e.preventDefault();
    $('.consult-form').addClass('active');
    $(this).hide();
  });

  $('.js-social').on('click', function (e) {
    e.preventDefault();
    $('.other-social').addClass('active');
    return false;
  });
});

//Other Socail Hide
$(document).click(function (e) {
  if ($(e.target).closest('.other-social').length) return;
  $('.other-social').removeClass('active');

  e.stopPropagation();
});

$(window).load(function () {});

$(window).resize(function () {});
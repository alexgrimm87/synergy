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
    styles: [
	    {
	        "featureType": "landscape",
	        "elementType": "all",
	        "stylers": [
	            {
	                "hue": "#6600ff"
	            },
	            {
	                "saturation": -11
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": "33"
	            },
	            {
	                "hue": "#6600ff"
	            },
	            {
	                "lightness": "2"
	            },
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.attraction",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": "-58"
	            },
	            {
	                "lightness": "28"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.business",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": "-58"
	            },
	            {
	                "lightness": "28"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.government",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": "-58"
	            },
	            {
	                "lightness": "28"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.medical",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": "-58"
	            },
	            {
	                "lightness": "28"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.park",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "saturation": "-58"
	            },
	            {
	                "lightness": "28"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.place_of_worship",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": "-58"
	            },
	            {
	                "lightness": "28"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.school",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": "-58"
	            },
	            {
	                "lightness": "28"
	            }
	        ]
	    },
	    {
	        "featureType": "poi.sports_complex",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": "-58"
	            },
	            {
	                "lightness": "28"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "all",
	        "stylers": [
	            {
	                "hue": "#5e00ff"
	            },
	            {
	                "saturation": -79
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "all",
	        "stylers": [
	            {
	                "lightness": 30
	            },
	            {
	                "weight": 1.3
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            },
	            {
	                "hue": "#5e00ff"
	            },
	            {
	                "saturation": -16
	            }
	        ]
	    },
	    {
	        "featureType": "transit.line",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": -72
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": -65
	            },
	            {
	                "hue": "#1900ff"
	            },
	            {
	                "lightness": 8
	            }
	        ]
	    }
	]
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

	$(selector).on('afterChange', function(){
		$('.colorfull-slide').removeClass('active');
		$('.slick-current.slick-active .colorfull-slide').addClass('active');
		$(selector).slick("pause");
		var color = $('.slick-active').attr('data-color');
		$('.wrap-main-slider').removeClass().addClass('wrap-main-slider');
		$('.wrap-main-slider').addClass(color);
		setTimeout(function() {
	        $(selector).slick("play");
	    },5000);
	});

	prev.click(function(e) {
		e.preventDefault();
		$('.slick-active .colorfull-slide').addClass('active');
		setTimeout(function() {
		    $(selector).slick('slickPrev')
		}, 1500);
	});
	next.click(function(e) {
		e.preventDefault();
		$('.slick-active .colorfull-slide').addClass('active');
		setTimeout(function() {
		    $(selector).slick('slickNext')
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

$(document).ready(function(){
	initMap();
	mainSlider('.main-slider');
	mainSliderBg('.main-slider-bg');

	var margin = $('.header').innerHeight();
	$('.wrap-main-slider').css('margin-top', margin);

	$('.el_input, .el_textarea').change(function() {
		if ($(this).val().length > 0) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});

	$('.burger').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-content .menu').slideToggle();
    });

    $('.header .logo a').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('body,html').animate({scrollTop:0},1000);
        setTimeout(function() {
        	window.location.reload();
    	}, 1000);
    });
});

$(window).load(function(){

});

$(window).resize(function(){
	var margin = $('.header').innerHeight();
	$('.wrap-main-slider').css('margin-top', margin);
});
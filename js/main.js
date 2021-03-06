(function($){
	"use strict";

/*=========================================================================
      Preloader js
  =========================================================================*/

	$(window).on('load', function() {
		/*------------------
			Preloader
		--------------------*/
		$(".loader").fadeOut();
		$("#preloader").delay(50).fadeOut(1000);

	});

/*=========================================================================
      Ajax Contact Form js
  =========================================================================*/
  // init the validator
  $('#contactForm').validator();

  // when the form is submitted
  $('#contactForm').on('submit', function (e) {

      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
          var url = $(this).attr('action');

          // POST values in the background the the script URL
          $.ajax({
              type: "POST",
              url: url,
              data: $(this).serialize(),
              success: function (data){

                  if(data === 'success'){
                      $('.message-success').fadeIn();
                      $('#contactForm')[0].reset();
                  }else{
                      $('.message-error').fadeIn();
                  }
              }
          });
          return false;
      }
  });

	/*=========================================================================
        Owl Carousel Init
    =========================================================================*/

  // TESTIMONIALS SLIDER
	$(".owl-one").owlCarousel({
		autoplay: true,
		autoplayTimeout: 9000,
		dotsEach: true,
		loop: true,
		margin: 50,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1000: {
				items: 2
			}
		},
		margin: 50
	});

	// ARTICLES SLIDER

	$(".owl-two").owlCarousel({
		loop: true,
		margin: 50,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 2
			}
		},
		stagePadding: 120
	});

	$(".owl-three").owlCarousel({
		autoplay: false,
		loop: true,
		nav: true,
		dots: false,
		margin: 50,
		responsive: {
			0: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	/*=========================================================================
				Init smooth-scroll
		=========================================================================*/

	var scroll = new SmoothScroll('a[href*="#"]', {
		offset: 72
	});

	/*=========================================================================
				Waypoints JS Init
		=========================================================================*/

		var waypoint1 = new Waypoint({
		  element: document.getElementById('navbar'),
		  handler: function() {
		    $('a[href="#home"]').toggleClass('active');
		  },
			offset: 72
		})
		var waypoint2 = new Waypoint({
		  element: document.getElementById('products'),
		  handler: function() {
				$('a[href="#home"]').toggleClass('active');
		    $('a[href="#products"]').toggleClass('active');
		  },
			offset: 72
		})
		var waypoint3 = new Waypoint({
		  element: document.getElementById('clients'),
		  handler: function() {
				$('a[href="#products"]').toggleClass('active');
		    $('a[href="#clients"]').toggleClass('active');
		  },
			offset: 72
		})
		var waypoint4 = new Waypoint({
		  element: document.getElementById('testimonials'),
		  handler: function() {
				$('a[href="#clients"]').toggleClass('active');
		    $('a[href="#testimonials"]').toggleClass('active');
		  },
			offset: 72
		})
		var waypoint6 = new Waypoint({
		  element: document.getElementById('blog'),
		  handler: function() {
				$('a[href="#testimonials"]').toggleClass('active');
		    $('a[href="#blog"]').toggleClass('active');
		  },
			offset: 72
		})
		var waypoint5 = new Waypoint({
		  element: document.getElementById('contact'),
		  handler: function() {
				$('a[href="#blog"]').toggleClass('active');
		    $('a[href="#contact"]').toggleClass('active');
		  },
			offset: 72
		})



}(jQuery));

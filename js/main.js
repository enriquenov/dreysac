(function($){
	"use strict";

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
	$(".owl-one").owlCarousel({
		autoplay: true,
		loop: true,
		margin: 50,
		responsive: {
			0: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	});

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
		stagePadding: 200
	})

	/*=========================================================================
				Init smooth-scroll
		=========================================================================*/

	var scroll = new SmoothScroll('a[href*="#"]', {
		offset: 72
	});



}(jQuery));

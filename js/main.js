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


}(jQuery));

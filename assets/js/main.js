	$(document).ready(function() {

		// Homepage Slider Carousel Section

		$(".homepage-slides").owlCarousel({
			items:1,
			dots:false,
			nav:false,
			autoplay:true,
			loop:true
		});


		// Testimonial Carousel Section

		$(".testimonial-carousel").owlCarousel({
			items:2,
			dots:false,
			nav:false,
			autoplay:true,
			margin:20,
			loop:true
		});


		// Initialize material-scrolltop

		 $('body').materialScrollTop();

		// Portfolio Section Isotope Activation

		$(".portfolio-item").isotope();

		// Active Class Changing for Portfolio Section

		  $(".portfolio-list li").on('click',function(){
				$(".portfolio-list li.active").removeClass('active');
				$(this).addClass('active');

				// Isotope Filtering Activation

			  	var selector = $(this).attr('data-filter');
			    $(".portfolio-item").isotope({
			        filter: selector
			    });

		});

	});


	

    $(window).scroll(function() {

    	// Animated Progress Bar on Skills Section

        var hT = $('#skill-bar-wrapper').offset().top,
            hH = $('#skill-bar-wrapper').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-1.4*wH)){
            jQuery(document).ready(function(){
                jQuery('.skillbar-container').each(function(){
                    jQuery(this).find('.skills').animate({
                        width:jQuery(this).attr('data-percent')
                    }, 5000); // 5 seconds
                });
            });
        }

		// Color changeing script for header on scrolling

        var scroll = $(window).scrollTop();
          if (scroll > 415) {
            $(".header-area").css("background" , "#2cc990");
          }

          else{
              $(".header-area").css("background" , "transparent");  	
          }

     });

  
	// Typed.js Installation and Options:

	  var typed3 = new Typed('.type-text', {
	    strings: [
		    		'Web Designer',
		    		'Web Developer', 
		    		'Tech Enthusiast', 
		    		'Freelancer',
		    		'Coder',
		    		'Dreamer'
	    		],
	    typeSpeed: 200,
	    backSpeed: 70,
	    smartBackspace: true, // this is a default
	    loop: true
	  });

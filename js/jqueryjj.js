	jQuery(document).ready(function($) {
		  $(window).scroll(function() {
		    var scrollPos = $(window).scrollTop(),
		        navbar = $('.x-navbar');

		    if (scrollPos > 1000) {
		      navbar.addClass('alt-color');
		    } else {
		      navbar.removeClass('alt-color');
		    }
		  });
		});
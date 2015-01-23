/* global jQuery:false */

(function($) {
//alert("test");

/*
setInterval(function() {
  $("service-pop-out").velocity("callout.shake");
}, 2000); */

/*
$("service-pop-out").velocity({ 
  width: "*=2"
}, 2000); */

/*
$(".service-pop-out").velocity({ 
  properties:{width: "*=2",height: "*=2"},
  options:{duration: "1000", easing:"easeInOutCubic"}
});*/


	$( ".our-services" ).click(function(e) {

		e.preventDefault();

	  	$(".service-pop-out").velocity({

	 		properties:{ width: "92%", height: "500" , opacity:"1"},
	 		
	  		options:{ duration: "800", easing:"easeInOutCubic", display:"block"}
		});

		
	});
	

	$("#services-searchfield").focus(function(e) {

		e.preventDefault();

		$(".service-pop-out").velocity({

		properties:{ width: "92%", height: "500" , opacity:"1"},
					 		
		options:{ duration: "800", easing:"easeInOutCubic", display:"block"}

		});

		$(".helpOption")
		.velocity("transition.slideLeftIn", { stagger: 250 })
		.delay(750)
    	//.velocity({ opacity: 0 }, 750)

		/*$(".helpOption").velocity({

		properties:{ opacity:"1"},
					 		
		options:{ duration: "2000", easing:"easeInOutCubic", display:"block"}

		});*/

	});



	$( ".pop-out-close" ).click(function(e) {

		e.preventDefault();

	  	$(".service-pop-out").velocity({

	 		properties:{ width: "100", height: "100" , opacity:"0"},
	 		
	  		options:{ duration: "800", easing:"easeInOutCubic", display:"none"}
		});

		
	});


})( jQuery );

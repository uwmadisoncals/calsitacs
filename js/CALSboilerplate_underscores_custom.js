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

 		//properties:{ width: "500", height: "50" },
 		properties:{ width: "100%", height: "500", /*translateX: "150" */},
 		
  		options:{ duration: "1000", easing:"easeInOutCubic", display:"block" }
	});

});

	$("#services-searchfield").focus(function(e) {

					 	 e.preventDefault();

					 	 $(".service-pop-out").velocity({

					 		properties:{ width: "500", height: "50" },
					 		
					  		options:{ duration: "1000", easing:"easeInOutCubic", display:"block" }

						});

	});

})( jQuery );

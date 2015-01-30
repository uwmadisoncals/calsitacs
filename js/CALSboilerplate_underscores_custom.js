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

	var documentHeight = $(document).height();
	var windowHeight = $(window).height();
	console.log(documentHeight);


	//Initialize position.left and position.right on page load
	var position = $("#services-searchfield").position();
	var posLeft = "left";
	var opts={};
	opts[posLeft]=position.left;
	//console.log("position-left: " + position.left + " position-top: " + position.top);
	$( ".service-pop-out" ).css({top:position.top,left:position.left});

	//on resize dynamically change posLeft and documentHeight
	$(window).resize(function(){
		var documentHeight = $(window).height();

		var position = $("#services-searchfield").position();

		//var posLeft = "left";
		//var opts={};
		//opts[posLeft]=position.left;
		//console.log(opts);
		//$( ".service-pop-out" ).css({top:position.top,left:position.left});
		$( ".service-pop-out" ).css({left:position.left});
		//console.log("position-left: " + position.left + " position-top: " + position.top);
		console.log("posLeft: " + opts[posLeft] + ", documentHeight: " + documentHeight);

	});



	$( ".our-services" ).click(function(e) {

		e.preventDefault();

	  	$(".service-pop-out").velocity({

	 		properties:{ width: "92%", height: "500" , opacity:"1"},
	 		
	  		options:{ duration: "800", easing:"easeInOutCubic", display:"block"}
		});

		$(".helpOption")
		.velocity("transition.slideLeftIn", { stagger: 250 })
		.delay(750)

		
	});
	

	$("#services-searchfield").focus(function(e) {

		e.preventDefault();
		$(".service-pop-out").velocity({

		properties:{ width: "100%", height: documentHeight , left: "0px", top: "0px", opacity:"1"/*,translateX:"-200px"*/},
					 		
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

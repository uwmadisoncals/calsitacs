/* global jQuery:false */

(function($) {
//alert("test");

	var documentHeight = $(document).height(); //Height of document
	var windowHeight = $(window).height(); //Height of window
	var currentScrollVal = 0;

	$(window).scroll(function() {
    currentScrollVal = $(window).scrollTop();
    //console.log("currentScrollVal "+currentScrollVal);

    var position = $("#services-searchfield").position();
	var posLeft = "left";
	var posTop = "top";
	var opts={};
  
	opts[posTop]=position.top-currentScrollVal;
	console.log("position.top: "+position.top+" currentScrollVal: "+currentScrollVal+" posTop: "+opts[posTop]);
    });

	//Initialize position.left and position.right on page load
	var position = $("#services-searchfield").position();
	var posLeft = "left";
	var posTop = "top";
	var opts={};
	opts[posLeft]=position.left;
	opts[posTop]=position.top;




    

	
	//Ensure that service-pop-out is absolutely centered where it should be on page load.
	$( ".service-pop-out" ).css({top:position.top,left:position.left});

	//on resize dynamically change posLeft and documentHeight
	$(window).resize(function(){
		var documentHeight = $(window).height();

		position = $("#services-searchfield").position();
		posLeft = "left";
		posTop = "top";
		opts={};
		opts[posLeft]=position.left;
		opts[posTop]=position.top;
		
		
		if(!$(".service-pop-out").hasClass("open")){

			$( ".service-pop-out" ).css({top:position.top,left:position.left});
			
		}
		

	});



	$( ".our-services" ).click(function(e) {

		e.preventDefault();

	

		$(".service-pop-out").velocity({

		properties:{ width: "100%", height: windowHeight , left: "0px", top: "0px", opacity:"1"/*,translateX:"-200px"*/},
					 		
		options:{ duration: "800", easing:"easeInOutCubic", display:"block"}

		});

		$(".helpOption")
		.velocity("transition.slideLeftIn", { stagger: 250 })
		.delay(750)
    	

		$(".service-pop-out").addClass("open");

		
	});
	

	$("#services-searchfield").focus(function(e) {

		e.preventDefault();

	

		$(".service-pop-out").velocity({

		properties:{ width: "100%", height: windowHeight , left: "0px", top: "0px", opacity:"1"/*,translateX:"-200px"*/},
					 		
		options:{ duration: "800", easing:"easeInOutCubic", display:"block"}

		});

		$(".helpOption")
		.velocity("transition.slideLeftIn", { stagger: 250 })
		.delay(750)
    	

		$(".service-pop-out").addClass("open");



	});



	$( ".pop-out-close" ).click(function(e) {

		e.preventDefault();

	  	$(".service-pop-out").velocity({

	 		properties:{ width: "100", height: "100" ,left:position.left, top:position.top, opacity:"0"},
	 		
	  		options:{ duration: "800", easing:"easeInOutCubic", display:"none"}
		});

		$(".service-pop-out").removeClass("open");
	});


})( jQuery );

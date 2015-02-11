/* global jQuery:false */

(function($) {
//alert("test");

	var documentHeight = $(document).height(); //Height of document
	var windowHeight = $(window).height(); //Height of window
	var currentScrollVal = 0;

	var lastScrollTop = 0;
	$(window).scroll(function() {
		var st = $(this).scrollTop();
		var diff = Math.abs(lastScrollTop-st);

		var myTop = parseInt($(".service-pop-out").css("top"),10);

		if(st > lastScrollTop){
			console.log("scrolling down, st: "+st+", diff: "+diff+", myTop: "+myTop);
			myTop = myTop - diff;
			//console.log("st: "+st+" myTop: "+myTop);

		}else{
			console.log("scrolling up, st: "+st+" myTop: "+myTop);
			myTop = myTop + diff;
		}

		lastScrollTop=st;


	$( ".service-pop-out" ).css({top:myTop});




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

		var searchFieldLeft = $("#services-searchfield").position().left;
		

		if(!$(".service-pop-out").hasClass("open")){


			$( ".service-pop-out" ).css({left:searchFieldLeft});
			
		}
		

	});



	$( ".our-services" ).click(function(e) {

		e.preventDefault();

		window.thisTop = parseInt($(".service-pop-out").css("top"),10);
		window.thisLeft = parseInt($(".service-pop-out").css("left"),10);

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

		window.thisTop = parseInt($(".service-pop-out").css("top"),10);
		window.thisLeft = parseInt($(".service-pop-out").css("left"),10);

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

		//alert("thisTop: "+window.thisTop+", thisLeft: "+window.thisLeft);

	  	$(".service-pop-out").velocity({

	 		properties:{ width: "100", height: "100" ,left:window.thisLeft, top:window.thisTop, opacity:"0"},
	 		
	  		options:{ duration: "800", easing:"easeInOutCubic", display:"none"}
		});

		$(".service-pop-out").removeClass("open");
	});


})( jQuery );

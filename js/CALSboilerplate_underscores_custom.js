/* global jQuery:false */

(function($) {

	//alert("test");
	
	function SPO_swal(){

		swal({
		title: "cals itacs",   
		text: "What can we help you with?",
		type: "input",   showCancelButton: true,
		closeOnConfirm: false,
		customClass:"myCustomClass",
		imageUrl:"http://it.calsmain.localhost/wp-content/themes/calsitacs/dist/images/calsitlogo.svg",
		animation: "slide-from-top" },

		function(inputValue){
			if (inputValue === false) return false;

			if (inputValue === ""){ 
				swal.showInputError("You need to write something!");
				return false
			}
			swal("Nice!", "You wrote: " + inputValue, "success");
		});

	};


		
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Fixed Footer Feature:
	// 
	// Based upon the relationship between viewport size, and <body> height, toggle on or off the fixed position of the footer.
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	var windowHeight = $( window ).height(); // get the computed height of the browser viewport
	var footerHeight = 250; // hardcoded height for the footer
	var bodyHeight = $("body.page").height(); // get the computed height of the body

	//Console.log for Debugging
	//console.log("Position: " + $("#colophon").css("position") + ", windowHeight: " + windowHeight + ", bodyHeight: "+bodyHeight +", bodyHeight+250: "+(bodyHeight+250));

	// If footer is position fixed. This matters because whether fixed vs static affects calculation of body height.
	if($("#colophon").css("position") == "fixed"){

			var bodyHeight_fixed = bodyHeight + 250; //define new variable equal to bodyheight plus footer height
			if($("#wpadminbar").length) { //if logged in to admin, account for height of the wpadminbar by adding 32 pixels.
					bodyHeight_fixed += 32;
			}

			if(windowHeight <= bodyHeight_fixed){
				$("#colophon").removeClass("footerPositionFixed"); //remove position fixed from footer
				$("#colophon").addClass("footerPositionStatic"); //add position static to footer
			}

	//If footer is position static
	}else if($("#colophon").css("position") == "static"){
			if(windowHeight >= bodyHeight){
				$("#colophon").removeClass("footerPositionStatic");//remove position static to footer
				$("#colophon").addClass("footerPositionFixed"); //add postition fixed to footer
			}
	}	

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Fixed Footer Feature, for on resize events.
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$(window).resize(function(){


		var windowHeight = $( window ).height(); // get the computed height of the browser viewport
		var footerHeight = 250; // get the computed height of the footer
		var bodyHeight = $("body.page").height(); // get the computed height of the body
	
		// If footer is position fixed. This matters because whether fixed vs static affects calculation of body height.
		if($("#colophon").css("position") == "fixed"){

				var bodyHeight_fixed = bodyHeight + 250; //define new variable equal to bodyheight plus footer height
				if($("#wpadminbar").length) { //if logged in to admin, account for height of the wpadminbar by adding 32 pixels.
					bodyHeight_fixed += 32;
				}
				

				if(windowHeight <= bodyHeight_fixed){
					$("#colophon").removeClass("footerPositionFixed"); //remove position fixed from footer
					$("#colophon").addClass("footerPositionStatic"); //add position static to footer
				}

		//If footer is position static
		}else if($("#colophon").css("position") == "static"){
				if(windowHeight >= bodyHeight){
					$("#colophon").removeClass("footerPositionStatic");//remove position static to footer
					$("#colophon").addClass("footerPositionFixed"); //add postition fixed to footer
				}
		}

		//console.log for Debugging.
		//console.log("Position: " + $("#colophon").css("position") + ", windowHeight: " + windowHeight + ", bodyHeight: "+bodyHeight +", bodyHeight+250: "+(bodyHeight+250));

	}); //END .resize 




	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Execute the following if current page is .page-home
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	if($('body').is('.page-home')){

		var documentHeight = $(document).height(); //Height of document
		var windowHeight = $(window).height(); //Height of window
		var currentScrollVal = 0;

		var lastScrollTop = 0;

/*
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




	    });*/

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

		///function to animate service pop out, when the wpadminbar is not showing
		function animateSPO(e){

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

		}

		//function to animate service pop out, when the wpadminbar is showing
		function adminAnimateSPO(e){

			e.preventDefault();

			window.thisTop = parseInt($(".service-pop-out").css("top"),10);
			window.thisLeft = parseInt($(".service-pop-out").css("left"),10);

			$(".service-pop-out").velocity({

			properties:{ width: "100%", height: "100%"/*windowHeight*/ , left: "0px", top: "32px", opacity:"1"/*,translateX:"-200px"*/}, //top is 32px, to account for wpadminbar
						 		
			options:{ duration: "800", easing:"easeInOutCubic", display:"block"}

			});

			
			$(".helpOption")
			.velocity("transition.slideLeftIn", { stagger: 250 })
			.delay(750)
	    	

			$(".service-pop-out").addClass("open");

		}


		$( ".pop-out-close" ).click(function(e) {

			e.preventDefault();

			//alert("thisTop: "+window.thisTop+", thisLeft: "+window.thisLeft);

		  	$(".service-pop-out").velocity({

		 		properties:{ width: "100", height: "100" ,left:window.thisLeft, top:window.thisTop, opacity:"0"},
		 		
		  		options:{ duration: "800", easing:"easeInOutCubic", display:"none"}
			});

			$(".service-pop-out").removeClass("open");
		});


		//Conditional that executes correct function according to whether wpadminbar is showing
		if($("#wpadminbar").length) {
			//wpadminbar showing, user logged on
			$( ".our-services" ).click(function(e) {
			//adminAnimateSPO(e);
			SPO_swal();	
			});
		

			$("#services-searchfield").focus(function(e) {
			//adminAnimateSPO(e);
			SPO_swal();
			});

		}else{

			//wpadminbar not showing, user logged off
			$( ".our-services" ).click(function(e) {
			animateSPO(e);		
			});
		

			$("#services-searchfield").focus(function(e) {
			animateSPO(e);
			});

		} //end else


		
	} //end if is page-home


})( jQuery );

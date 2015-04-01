/* global jQuery:false */

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//  Notes: new requirements for SPO
	//  
	//  * On focus, increase height of red .headerContainer
	//  * On focus, move up .homePageFeature
	//  * On focus, change title text
	//  * Use icons in some way in the new area provided 
	//  
	//  Additional:
	//  
	//  *use css animations or velocity.js
	//  * perhaps icons are animated into view on click event.
	// 
	//
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


(function($) {

	//alert("test");
	
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

		//Check if user is logged in
		if($("#wpadminbar").length) {

		//User logged in

		}else{

		//User not logged in

		} 

		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		// service search feature
		///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		var serviceSearchIsActive = false; //returns whether service search is active. Initialized to false.

		function serviceSearchActivate(){
		//console.log("serviceSearchActivate fired");
		
		$(".height-div").addClass("service-search-active"); //add class which increases height of .height-div and it's parent .headerContainer
		$(".homePageFeature").addClass("service-search-active");
		$(".cyan").addClass("service-search-active");
			
		}

		function serviceSearchDeactivate(){
		//console.log("serviceSearchDeactivate fired!");
		$(".height-div").removeClass("service-search-active");
		$(".homePageFeature").removeClass("service-search-active");
		$(".cyan").removeClass("service-search-active");


		}

		//Handle searchfield on focus event
		$("#services-searchfield").focus(function(e) {

		//alert("Works");
		//$("#services-searchfield").blur();
		//$("body").removeClass("footerPositionStatic");//remove position static to footer
		$("body").addClass("service-search-active"); //add postition fixed to footer
		serviceSearchIsActive = true;

		console.log(serviceSearchIsActive);
		serviceSearchActivate();

		});

		//Handle searchfield on blur event
		$("#services-searchfield").on('blur',function() {

			$("body").removeClass("service-search-active"); //add postition fixed to footer
			serviceSearchIsActive = false;
			console.log(serviceSearchIsActive);
			serviceSearchDeactivate();

		});

		



	
	} //end if is page-home


})( jQuery );

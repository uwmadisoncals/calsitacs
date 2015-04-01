/* global jQuery:false */

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

	
	} //end if is page-home


})( jQuery );

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
		var iconClickInProgress = false;

		function serviceSearchActivate(){

			$("body").addClass("service-search-active"); //add said class to body

			//Remove old sub heading text with fade transition and replace it 
			$(".subHeading").fadeOut("slow",function(){

				$(this).text("How may we help you?").fadeIn();
			});

			$(".height-div").addClass("service-search-active"); //add class which increases height of .height-div and it's parent .headerContainer

			$(".homePageFeature").addClass("service-search-active");

			$(".cyan").addClass("service-search-active");

			$(".serviceWrapper").addClass("service-search-active");

			$(".serviceWrapper").velocity("transition.slideLeftIn", {stagger:110}).delay(750);
			
		}

		function serviceSearchDeactivate(){

			$("body").removeClass("service-search-active"); //remove said class from body

			//reinstate the original subheading text with fade transition
			$(".subHeading").fadeOut("slow",function(){

				$(this).text("Here for you.").fadeIn();
			});

			

			$(".height-div").removeClass("service-search-active");

			$(".homePageFeature").removeClass("service-search-active");

			$(".cyan").removeClass("service-search-active");

			//$(".serviceWrapper.service-search-active > div").velocity({ opacity: 0 }, { display: "none", duration:"slow" });
			
			//$(".serviceWrapper.service-search-active > div").fadeOut("slow");
			
			/*$(".serviceWrapper").velocity({
			properties:{opacity:0},
			options:{display:"none", duration:"slow", easing:"easeInOutCubic"}
			});*/
			

		}
		$(".serviceWrapper > div > a, .serviceHeading").mousedown(function(){

			iconClickInProgress = true;
			console.log("iconClickInProgress: "+iconClickInProgress);
		});

		$(".serviceWrapper > div > a, .serviceHeading").mouseup(function(){
			iconClickInProgress = false;
			console.log("iconClickInProgress: "+iconClickInProgress);
		});

		//Handle searchfield on focus event
		$("#services-searchfield").focus(function(e) {

			serviceSearchIsActive = true;

			serviceSearchActivate();

		});

		//Handle searchfield on blur event
		$("#services-searchfield").on('blur',function() {
			if(iconClickInProgress==false){
				console.log("inside of if successfully!");
				
				serviceSearchDeactivate();
			}
			
			serviceSearchIsActive = false;

			

		});



		



	
	} //end if is page-home


})( jQuery );

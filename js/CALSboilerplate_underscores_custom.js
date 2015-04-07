/* global jQuery:false */

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//  Notes: new requirements for SPO
	//  * Redudce animation speed by .5 or even less
	//  * searchbox more prominent, replace background fill (see http://tympanus.net/Development/TextInputEffects/    ...akira)
	//  * Instead of row of icons, display list (below it/acs heading).
	//  * Initially, list displays common items, but search suggests as user types (fading away irrelevent list items)
	//  * make responsive
	//  
	//  
	//  Additional:
	//  
	//  *some type of "more info" modal (or other animated div) 
	//  
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

			$(".serviceWrapper.service-search-active > div").css("display", "block");

			//Remove old sub heading text with fade transition and replace it 
			$(".subHeading").fadeOut("slow",function(){
								
				$(this).css({"font-weight": "500","font-style":"italic"});

				$(this).text("How may we help you?").fadeIn();

			});

			//add .service-search-active to several selectors 
			$(" .height-div, .homePageFeature, .subHeading, #services-searchfield, .cyan, .serviceWrapper, .opacityLayer ").addClass("service-search-active");

			$(".serviceWrapper").velocity("transition.slideLeftIn", {stagger:110}).delay(750);
			
			
		}

		function serviceSearchDeactivate(){

			$("body").removeClass("service-search-active"); //remove said class from body

			//reinstate the original subheading text with fade transition
			$(".subHeading").fadeOut("slow",function(){

				$(this).css({"font-weight": "100","font-style":"normal"});

				$(this).text("Here for you.").fadeIn();
			});

			setTimeout(function(){

			//remove .service-search-active to several selectors 
			$(" .height-div, .homePageFeature, .subHeading, #services-searchfield, .cyan, .opacityLayer ").removeClass("service-search-active");

			
			},200);

	
			$(".serviceWrapper.service-search-active > div").fadeOut();
			

			

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

				if($("body").hasClass("page-home")){

				serviceSearchActivate();

				}


		});

		//Handle searchfield on blur event
		$("#services-searchfield").on('blur',function() {
			if(iconClickInProgress==false){
				
				if( $("body").hasClass("page-home") ){

				serviceSearchDeactivate(); 
				
				}

				
			}
			
			serviceSearchIsActive = false;

			

		});



		



	
	} //end if is page-home


})( jQuery );

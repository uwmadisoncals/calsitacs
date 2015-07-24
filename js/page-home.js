/* global jQuery:false */

(function($) {
	 
	 if($('body').is('.page-home')){
		 //alert('test');
		 
		 $(".filtered ul").load( "https://kb.wisc.edu/cals/ #kbleftul0" );

	 var peoplecount = 0;

	//Regular Expression Search Filter Auto Complete
		$("#input-16").keyup(function () {
			var filter = $(this).val(), count = 0;
			$("#input-16").attr("value",filter);
			
			
			
			
			var resultscounted = 0;
			    
			$(".filtered:first li").each(function () {
				
			
		        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
		        	$(this).addClass("hidden"); 
		        	$(this).removeClass("visible"); 
			       
			        
		        } else {
				
					
					
					//$(".cleartrigger").fadeIn(300);
				/*$('.instructions').fadeOut('fast', function() {
		        		// Animation complete
					
		     		 });*/
				
		            $(this).removeClass("hidden");
		            $(this).addClass("visible");
		            
		            $(".filtered .visible").each(function(index) {
					$(this).attr("data-counted",resultscounted);
					resultscounted = resultscounted + 1;
					
					
					});
		            
		            count++;
		           
		            
		        }
		    });
		    
		    if(filter == "") {
			    $(".filtered ul li").removeClass("visible").removeClass("hidden");
			    $(".filtered").removeClass("expanded");
		    } else {
			    if(resultscounted > 0) {
			    			    $(".filtered").addClass("expanded");
			    			   }
		    }
		   
		    
		  /* $(".filtered li.visible").each(function () {
		    	//console.log('ran');
		    		$(this).addClass("checking");
		    		var currentobj = $(this);
		    		var currenttextobj = $(this).text();
		    		
		    		//var nexttextobj = $(this).next("li.visible").text();
		    		$(".filtered li.visible").not($(".checking")).each(function () {
			    		var nexttextobj = $(this).text();
			    		if(currenttextobj == nexttextobj) {
				    		//console.log(currenttextobj +" "+ nexttextobj);
				    		$(this).addClass("duplicate");
				    		currentobj.removeClass("checking");
			    		}
		    		});
		    		
	
		    });*/
		    
		   
		    
		    $("#filter-count").text(count+peoplecount);
		    
		    if((count + peoplecount) > 0) {
			            $(".filtered").show();
			            $("#input-16").addClass("notEmpty");
			            //$(".searchClear").show();
		            } else {
		            $("#input-16").removeClass("notEmpty");
			            $(".filtered").stop().fadeOut(300);
			            
		            }
		          if(filter.length > 0) {
			        $(".searchClear").show();
		        }  else {
			        $(".searchClear").hide();
		        }
		            
    	});
    	
    	 var seen = {};
			$('.filtered li').each(function() {
			    var txt = $(this).text();
			    if (seen[txt])
			        $(this).remove();
			    else
			        seen[txt] = true;
			});
    	
    	
    	//Check for search complete to be ignored and hide
    	//setInterval(function() {
    		
			var v = $("#input-16").val();
			if(v != "") {
			
				var filter = $("#input-16").val(), count = 0;
				var resultscounted = 0;
			
		            
			$(".filtered:first li").each(function () {
		        if ($(this).text().search(new RegExp(filter, "i")) < 0) {$(this).addClass("hidden"); $(this).removeClass("visible"); 
			       
			        
		        } else {
				
				
		            $(this).removeClass("hidden");
		            $(this).addClass("visible");
		            
		            $(".filtered .visible").each(function(index) {
					$(this).attr("data-counted",resultscounted);
					resultscounted = resultscounted + 1;
					
					
					});
		            
		            count++;
		           
		            
		        }
		    });
		    $("#filter-count").text(count);
		    if(count > 0) {
		    		$("#input-16").addClass("notEmpty");
			            $(".filtered").show();
			            //$(".searchClear").show();
		            } else {
		            	$("#input-16").removeClass("notEmpty");
			            $(".filtered").stop().fadeOut(300);
			            
			            
		            }
		         if(filter.length > 0) {
			        $(".searchClear").show();
		        }  else {
			        $(".searchClear").hide();
		        }
			}
			
			
}//END if body is page-home

})( jQuery );
 
jQuery(document).ready(function($) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 
    var ajax_url = ajax_params.ajax_url; // so we access our ajax_url through the ajax_params object
    var data = {
        'action': 'my_action',
        'whatever': 1234
    };
 
    $.post(ajax_url, data, function(response) {
        //alert(response.whatever);
    });
});
=======
=======
>>>>>>> 4da3996e1e5b97a0aa245a06ee63c7556e3c9225
=======

	var appended = false;
>>>>>>> 1e0c5710d604e40acbf6fbec3126e59e192832d2
=======

	var appended = false;
>>>>>>> f3385434494879ac4b3452a1590157cd09eb1dc9

	if($('body').is('.page-home')){


	  var data = {
	    action: 'my_frontend_action', //the php ajax event handler named 'wp_ajax_my_frontend_action' defined in functions.php
	    security : MyAjax.security, 
	    dataType:"json",
	    whatever: 1234
	  };


	 
	  // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
	  
	  // This is the ajax request to the server
	  $.post(MyAjax.ajaxurl, data, function(response) {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	    console.log(response); //this is the ajax success callback function, it manipulates the RESPONSE from the server
=======
	  		var ajaxResponseLength = response.length;
	  		var noOfMoreResults = ajaxResponseLength-10;

	    	//console.log(response); //this is the ajax success callback function, it manipulates the RESPONSE from the server	

		
				
			$("#input-16").focus(function(){

				if (!appended){

					for( i=0; i < 10; i++ ) {

						$(".searchResults ul").append("<li class=\"singleSearchResult\"><a class=\"linkSearchResult\" href='" + response[i].post_permalink + "'>" + response[i].post_title + "</a></li>");


						appended = true;

					
					}

					$(".searchResults ul").append("<li class=\"moreCommon\"><a class=\"linkMoreCommon\" href='#'>" + noOfMoreResults + " more...</a></li>");

				}
				
				

				
			});

	


>>>>>>> 1e0c5710d604e40acbf6fbec3126e59e192832d2

			

	  }); //END $.post

	}//END ispage home

<<<<<<< HEAD
}); //END jQuery.ready
>>>>>>> 1fd08164ba29562a1aa87a007b22e27ee8cd5103
=======
	  		var ajaxResponseLength = response.length;
=======
	  		var ajaxResponseLength = response.length;
	  		var noOfMoreResults = ajaxResponseLength-10;

	    	//console.log(response); //this is the ajax success callback function, it manipulates the RESPONSE from the server	

		
				
			$("#input-16").focus(function(){

				if (!appended){

					for( i=0; i < 10; i++ ) {
>>>>>>> f3385434494879ac4b3452a1590157cd09eb1dc9

						$(".searchResults ul").append("<li class=\"singleSearchResult\"><a class=\"linkSearchResult\" href='" + response[i].post_permalink + "'>" + response[i].post_title + "</a></li>");


						appended = true;

					
					}

					$(".searchResults ul").append("<li class=\"moreCommon\"><a class=\"linkMoreCommon\" href='#'>" + noOfMoreResults + " more...</a></li>");

				}
				
				

				
			});

	



			

	  }); //END $.post

	}//END ispage home

<<<<<<< HEAD
}); //END jQuery.ready
>>>>>>> 4da3996e1e5b97a0aa245a06ee63c7556e3c9225
=======
}); //END jQuery.ready
>>>>>>> 1e0c5710d604e40acbf6fbec3126e59e192832d2
=======
}); //END jQuery.ready
>>>>>>> f3385434494879ac4b3452a1590157cd09eb1dc9

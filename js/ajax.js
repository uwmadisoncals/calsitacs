jQuery(document).ready(function($) {
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
	    console.log(response); //this is the ajax success callback function, it manipulates the RESPONSE from the server

	    console.log( response[1].post_title );

	  });

	}

}); //END jQuery.ready
>>>>>>> 1fd08164ba29562a1aa87a007b22e27ee8cd5103
=======
	  		var ajaxResponseLength = response.length;

	    	//console.log(response); //this is the ajax success callback function, it manipulates the RESPONSE from the server	

			for( i=0; i < ajaxResponseLength; i++ ) {

				$(".searchResults ul").append("<li class='singleSearchResult' ><a class='linkSearchResult' href='" + response[i].post_permalink + "'>" + response[i].post_title + "</a></li>");

			}

	  }); //END $.post

	}//END ispage home

}); //END jQuery.ready
>>>>>>> 4da3996e1e5b97a0aa245a06ee63c7556e3c9225

jQuery(document).ready(function($) {

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

	  		var ajaxResponseLength = response.length;

	    	//console.log(response); //this is the ajax success callback function, it manipulates the RESPONSE from the server	

			for( i=0; i < ajaxResponseLength; i++ ) {

				$(".searchResults ul").append("<li class='singleSearchResult' ><a class='linkSearchResult' href='" + response[i].post_permalink + "'>" + response[i].post_title + "</a></li>");

			}

	  }); //END $.post

	}//END ispage home

}); //END jQuery.ready
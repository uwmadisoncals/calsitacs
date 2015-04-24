jQuery(document).ready(function($) {
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

	    console.log(response); //this is the ajax success callback function, it manipulates the RESPONSE from the server

	    console.log( response[1].post_title );

	  });

	}

}); //END jQuery.ready
>>>>>>> 1fd08164ba29562a1aa87a007b22e27ee8cd5103

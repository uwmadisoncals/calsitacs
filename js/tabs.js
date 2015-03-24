(function( $ ){
	$('.page-help .content-area').velocity("transition.slideDownBigIn", 1000);
	//$('.content-area').velocity("callout.bounce", 1000);
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('form-data');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current').hide();
		$(this).addClass('current').velocity("callout.pulse",300);
		$('#borderTop').velocity("transition.slideLeftIn", 1500);
		$("#"+tab_id).addClass('current').velocity("transition.bounceLeftIn", 1300);
		//$("#"+tab_id).fadeIn().velocity("transition.bounceLeftIn", 500).addClass('current');
})
}) (jQuery);
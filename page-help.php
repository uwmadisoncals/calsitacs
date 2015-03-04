<?php
/**
 * Template Name: page-help
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package CALSboilerplate_underscores
 */

get_header(); ?>
<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main"> 
 		<ul class="tabs">
            <li class="current" form-data="form-1">ACS Support Request Form</li>
            <li form-data="form-2">CALSNET Services Form</li>
        </ul>
        	<div id="borderTop"></div>
            <div id="form-1" class="tab-content current">
                <h2>ACS Support Request Form</h2>

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'content', 'page' ); ?>

				<?php
					// If comments are open or we have at least one comment, load up the comment template
					if ( comments_open() || '0' != get_comments_number() ) :
						comments_template();
					endif;
				?>

			<?php endwhile; // end of the loop. ?>
		</div>
		<div id="form-2" class="tab-content">
			 <h2>CALSNET Service Form</h2>
			 <?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'content', 'page' ); ?>
				<?php //get_template_part ('content', get_post_format()); ?>

				<?php
					// If comments are open or we have at least one comment, load up the comment template
					if ( comments_open() || '0' != get_comments_number() ) :
						//comments_template();
					endif;
				?>

			<?php endwhile; // end of the loop. ?>

		</div>
	</main><!-- #main -->
</div><!-- #primary -->

<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script>

$(document).ready(function(){
	
	$('.content-area').velocity("transition.slideDownBigIn", 1000);
	//$('.content-area').velocity("callout.bounce", 1000);
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('form-data');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current').velocity({opacity:0},300).fadeOut();
		$(this).addClass('current').velocity("callout.pulse",300);
		$('#borderTop').velocity("transition.slideLeftIn", 1500);
		$("#"+tab_id).addClass('current').fadeIn().velocity("transition.slideRightBigIn", 1300);
		//$("#"+tab_id).fadeIn().velocity("transition.bounceLeftIn", 500).addClass('current');
	})
})

</script>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
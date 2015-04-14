<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package CALSboilerplate_underscores
 */

get_header(); ?>
	<div class="titleBox">Services</div>
		<div class="service">
			<div class="serviceIcon">
				<img src="<?php echo get_template_directory_uri(); ?>/img/hosticon.svg" alt=" ">
			</div>
			<div class="serviceContent">Hello this is a test, this is a test</div>
		</div>
	<!-- <div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php //while ( have_posts() ) : the_post(); ?>

				<?php// get_template_part( 'content', 'page' ); ?>

			<?php// endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php /* get_sidebar(); */?>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script>
		$(document).ready(function(){
		$('.titleBox').velocity("transition.expandIn", 1000);
		$('.serviceIcon').fadeIn().velocity("transition.bounceLeftIn", 1000);
		$('.serviceContent').fadeIn().velocity("slideDown", 1000);

		})
	</script>

<?php get_footer(); ?>
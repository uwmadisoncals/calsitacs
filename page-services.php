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
	<!--SERVICES!-->
	<div class="layout">	
		<div class="titleBox">Services</div>
			<div class="service">
				<div class="serviceIcon">
					<img src="<?php echo get_template_directory_uri(); ?>/img/hosticon.svg" alt=" ">
				</div>
			<div class="serviceContent">Hello this is a test, this is a test</div>
		</div>
	</div>
	<!--EQUIPMENT!-->
	<div class="layout2">
		<div class="titleBox">Equipment</div>
			<div class="service">
					<div class="serviceContent">Hello this is a test, this is a test</div>
						<div class="serviceIcon">
							<img src="<?php echo get_template_directory_uri(); ?>/img/laptopicon.svg" alt=" ">
						</div>	
			</div>
	</div>
	<!--IT SECURITY!-->
	<div class="layout">	
		<div class="titleBox">IT Security</div>
			<div class="service">
				<div class="serviceIcon">
					<img src="<?php echo get_template_directory_uri(); ?>/img/securityicon.svg" alt=" ">
				</div>
			<div class="serviceContent">Hello this is a test, this is a test</div>
		</div>
	</div>
	<!-- <div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php //while ( have_posts() ) : the_post(); ?>

				<?php// get_template_part( 'content', 'page' ); ?>

			<?php// endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php /* get_sidebar(); */?>
<!--Velocity Animation Test!-->
<!--<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script>
		$(document).ready(function(){
		$('.serviceIcon').velocity({opacity:0},{delay:700});
		$('.serviceContent').velocity({opacity:0});
		$('.titleBox').velocity("transition.expandIn", 800);
		$('.serviceContent').fadeIn().velocity("transition.bounceLeftIn", 700);
		$('.serviceIcon').fadeIn().velocity("transition.slideLeftBigIn", 700);
		

		})
	</script>!-->

<?php get_footer(); ?>
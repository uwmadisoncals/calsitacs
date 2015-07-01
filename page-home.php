<?php
/**
 * Template Name: Home Page
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package CALSboilerplate_underscores
 */

get_header(); ?>

<?php
$linkTo_itSecurity = get_permalink((get_page_by_path( 'it-security' )->ID));
$linkTo_webHosting = get_permalink((get_page_by_path( 'website-hosting' )->ID));
$linkTo_equipment = get_permalink((get_page_by_path( 'equipment' )->ID));
$linkTo_instructionalIT = get_permalink((get_page_by_path( 'instructional-it' )->ID));
 ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
		
			<div class="row homeSubFeatures">
				<div class="span-25 service-item" >
					<div class="icon tooltip" id="webhosting-service" title="some title"><a href="<?php echo $linkTo_webHosting; ?>"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/hosting.svg" alt=" "></a></div>
					<a href="<?php echo $linkTo_webHosting; ?>"><h3>Web Hosting</h3></a><i class="icon-link-ext"></i>
				</div>

				<div class="span-25 service-item tooltip">
					<div class="icon tooltip" id="security-service"><a href="<?php echo $linkTo_itSecurity; ?>"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/security.svg" alt=" "></a></div>
					<a href="<?php echo $linkTo_itSecurity; ?>"><h3>IT Security</h3></a>
				</div>

				<div class="span-25 service-item">
					<div class="icon tooltip" id="Equipment-service"><a href="<?php echo $linkTo_equipment; ?>"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/notebook.svg" alt=" "></a></div>
					<a href="<?php echo $linkTo_equipment; ?>"><h3>Equipment</h3></a>
				</div>

				<div class="span-25 service-item">
					<div class="icon tooltip" id="InstructionalIT-service"><a href="<?php echo $linkTo_instructionalIT; ?>"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/Tablet-Chart.svg" alt=" "></a></div>
					<a href="<?php echo $linkTo_instructionalIT; ?>"><h3>Instructional IT</h3></a>
				</div>
			</div>

			<?php while ( have_posts() ) : the_post(); ?>

				<?php //get_template_part( 'content', 'page' ); ?>

				<?php
					// If comments are open or we have at least one comment, load up the comment template
					if ( comments_open() || '0' != get_comments_number() ) :
						//comments_template();
					endif;
				?>

			<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php //get_sidebar(); 
//logit($wp_query,'$wp_query: ');
//logit($translation_array,'$translation_array: ');
//logit($commonSearchArray,'$commonSearchArray: ');
//logit($commonSearchArray2,'$commonSearchArray2: ');

?>
<?php get_footer(); ?>

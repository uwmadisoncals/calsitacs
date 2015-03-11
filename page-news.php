<?php
/**
 * Template Name: page-news
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

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'content', 'page' ); ?>

			<?php endwhile; // end of the loop. ?>

			<?php
				$args = array( 'posts_per_page' => 10, 'orderby' => 'date_time' ); //order by recent date
				$postslist = get_posts( $args );
				foreach ( $postslist as $post ) :
  				setup_postdata( $post ); ?> 
					<?php echo get_edit_post_link('edit','<p>','</p>'); ?> 
					<div id="news-head">
						<div id="news-date"><?php the_date(); ?></div>
					<br />
						<?php the_title(); ?>
					</div>

					<div id="news-content">   
						<?php the_excerpt(); ?>
						<?php edit_post_link( $link, $before, $after, $id ); ?> 
					</div> 
				<?php
				endforeach; 
					wp_reset_postdata();


				?>



		</main><!-- #main -->
	</div><!-- #primary -->

<?php /* get_sidebar(); */?>
<?php get_footer(); ?>

<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package CALSboilerplate_underscores
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php get_template_part('breadcrumb', 'menu'); ?>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		
		<div class="edit-post">
		<?php edit_post_link( __( 'Edit', 'calsboilerplate_underscores' ), '<span class="edit-link">', '</span>' ); ?>
		</div><!-- END .edit-post -->
		<?php the_post_thumbnail( 'full' ); ?>
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'calsboilerplate_underscores' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
	<footer class="entry-footer">
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->

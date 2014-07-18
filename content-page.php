<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package CALSboilerplate_underscores
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<a class="breadcrumb" href="#">breadcrumb</a>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'calsboilerplate_underscores' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
	<footer class="entry-footer">
		<?php edit_post_link( __( 'Edit', 'calsboilerplate_underscores' ), '<span class="edit-link">', '</span>' ); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->

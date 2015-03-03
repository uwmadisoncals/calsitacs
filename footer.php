<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package CALSboilerplate_underscores
 */
?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info">
			<!--<a href="<?php echo esc_url( __( 'http://wordpress.org/', 'calsboilerplate_underscores' ) ); ?>"><?php printf( __( 'Proudly powered by %s', 'calsboilerplate_underscores' ), 'CALS Web Hosting' ); ?></a> -->
		</div><!-- .site-info -->
		<div class="darkband"></div>
		<div class="contactInfo">
		<!-- <img src="" alt="" class="logo"> -->
		<div class="uwaddress">
			<h3>CALS IT ACS</h3>
			<a href="">University of Wisconsin Madison</a>
			<address>
				<span class="street">216 Agricultural Hall,</span>
				<span>• 1450 Linden Dr.</span>
				<span>• Madison, WI</span>
				<span>• 53706</span>
			</address>
			<div class="phone">(608) 262-3193</div>
			<div class="links">
				<a href="">Contact Us</a>
				<a href="">• Accessibility</a>
				<a href="">• Code-of-conduct</a>
			</div>
		</div>
			
		</div>
		<div class="support">
			<h3>Did you know?</h3>
			<p class="mission-statement">CALS_IT_ presently hosts over 130 sites.</p>
			<a href="" class="button blue 1234">Support CALS</a>
		</div>
		<div class="copyright_container"><a class="copyright_link cf" href="">©2014. Board of Regents of the University of Wisconsin System</a></div>

	</footer><!-- #colophon -->
</div><!-- #page -->
</div><!-- .siteWrapper -->
<?php wp_footer(); ?>

<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/scripts/main.min.js"></script>

<!-- For Debugging, use javascript debugger and uncomment this-->
<!-- <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/scripts/main.js"></script>-->

</body>
</html>

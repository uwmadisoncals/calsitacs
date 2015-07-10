<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package CALSboilerplate_underscores
 */
?>
<?php 

$calsLocation = 'https://www.google.com/maps/place/College+of+Agricultural+and+Life+Sciences/@43.0755991,-89.4103266,17z/data=!3m1!4b1!4m2!3m1!1s0x8807acc7afef44a7:0xace2a86d41c6acf1';

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
			<!--<h3>CALS IT ACS</h3>-->
			<img class="calsitLogo" src="<?php echo get_template_directory_uri(); ?>/img/calsitlogo-grey-textonly.svg" />
			<div class="cf"></div>
			<a href="http://www.wisc.edu/">University of Wisconsin Madison</a>
			<address>
				<span class="street">216 Agricultural Hall,</span>
				<span>• 1450 Linden Dr.</span>
				<span>• Madison, WI</span>
				<span>• 53706</span>
				<a href="<?php echo $calsLocation; ?>" target="_blank"><i class='locationIcon'></i></a>
			</address>
			<div class="phone">(608) 262-3193</div>
			<div class="links">
				<a href="<?php echo site_url(); ?>/contact">Contact Us</a>
				<a href="<?php echo site_url(); ?>/accessibility">• Accessibility</a>
				<a href="<?php echo site_url(); ?>/code-of-conduct">• Code-of-conduct</a>
			</div>
			
		</div>
			
		</div>
		<div class="support">
			<!--<h3>Did you know?</h3>
			<p class="mission-statement">CALS_IT_ presently hosts over 130 sites.</p>
			<a href="https://www.myuwconnect.org/give" class="button blue 1234">Support CALS</a> -->
			<!--<img src="<?php echo get_template_directory_uri(); ?>/dist/images/test.svg" />-->
			
		</div>
		<div class="cf"></div>
		<div class="copyright_container"><p class="copyright_link cf"><?php echo comicpress_copyright(); ?>. Board of Regents of the University of Wisconsin System</p></div>
		
	</footer><!-- #colophon -->
</div><!-- #page -->
</div><!-- .siteWrapper -->
<?php 
$pbp = get_permalink((get_page_by_path( 'it-security' )->ID));
//logit($pbp,'$pbp: '); 
?>
<?php wp_footer(); ?>

<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/scripts/main.min.js"></script>

<!-- For Debugging, use javascript debugger and uncomment this-->
<!-- <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/scripts/main.js"></script>-->

</body>
</html>

<footer>
	<?php wp_footer(); ?>

	<p><?php the_field('footer_info',110); ?></p>
		<!-- pull the ACF from the Home Page ID=110.-->

	<?php

	if ( is_active_sidebar( 'main_footer' ) ) : ?>
	<div>
		<?php dynamic_sidebar( 'main_footer' ); ?>
	</div><!-- FOOTER AREA to add widgets -->

	<!-- ADD CLASSES TO REGISTER_SIDEBAR FUNCTION IN FUNCTIONS.PHP TO WRAP DIVS UNIQUELY.-->
	<?php endif; ?>


	<p>Copyright ©<?php echo year_shortcode(); ?></p>
	<!-- need to add year shortcode to functions.php for this to work-->

	<?php
		$image = get_field('social_media_icons');
		if( !empty($image) ): ?>
		<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
	<?php endif; ?>

</footer>



<!-- i have a plugin installed ("Insert Headers and Footers" under "Settings" that automatically adds scripts to the <head> section, which means they can't be styled.  So they should only be JS, styelsheets, or font loading scripts. Inserting script in the footer goes right above the </body> tag.-->
</body>
</html>

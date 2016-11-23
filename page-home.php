<?php get_header(); ?>
<!-- HEADER.PHP IS ACTUALLY THE <HEAD> INFO!!  NOT THE HEADER SECTION. -->
<!-- HEADER IS UNIQUE FOR INDEX AND CONDENSED FOR TEMPLATES: SINGLE & PAGE.   -->


<!-- GOOGLE ANALYTICS TRACKING.  TRACKING NUMBER STARTS WITH UA.


HOWEVER, WORDPRESS/GODADDY ("3rd party web hosting providers") have their OWN INSTRUCTIONS FOR HOW TO SETUP GOOGLE ANALYTICS.
But apparently this costs money through WP, and WP has it's own analytics.  So just use WP's.



<script>
GET FROM GOOGLE ANALYTICS
</script> -->
<!-- GOOGLE ANALYTICS TRACKING: PHP ALTERNATIVE!  via https://analytics.google.com/analytics/web/?authuser=1#management/Settings/a72902531w110694745p115471852/%3Fm.page%3DTrackingCode%26_r.ghFlowId%3D6324039/

Use the code above to create a file named "analyticstracking.php", and include the file on each PHP template page.
Add the following line to each template page immediately after the opening <body> tag:
<?php include_once("analyticstracking.php") ?>

This is good for blog posts that you want to track, like scheduled events or blog entries.  Good for Gingarte and RESUSblog.  RESUS doesn't have php yet, so have to add the code manually.  Same domain so same code though.

-->




<!-- LARGER HEADER BEGINS HERE.   -->
<header>
	<div class="logo">
	  <a href="<?php echo esc_url( home_url( '/' ) );	    ?>">
	    <img src="<?php bloginfo( 'template_url' ); ?>/imgs/logo.png">
	  </a>
	</div>

	<div class="title"><h1><?php bloginfo( 'name' );	    ?></h1></div>

 <!-- BE CAREFUL!  SOMETIMES ITS BEST TO DEFINE A VARIABLE AND THEN CALL IT LATER. ON GINGARTE'S SITE, I PUT IT IN DIRECTLY-->
	<?php
		$description = get_bloginfo( 'description', 'display' );
	?>
	<div class="tagline"><h2><?php echo $description; ?></h2></div>

	<?php
	include ('menu.php');
	?>

</header>

<!-- PAGE CONTENT BEGINS HERE.   -->


<div class="introduction">
	<h2>
		<!-- Yes this echoed the title of the ACF!: http://www.advancedcustomfields.com/resources/get_field_object/-->
		<?php
			$field_key = "field_568c6c418b6a0";
			$post_id = 110;
			$field = get_field_object($field_key);
			echo $field['label'];
		?>
	</h2>

	<?php the_field('why_care'); ?>
	<!-- pulling using the About Page ID wooooooorrrked! -->
	<!-- BTW, it seems like ACF automatically puts <p> tags around the values, because when I wrapped the above in <p> tags, lines appeared doubly.  -->
</div>

	<div class="subscribe">
		<div class="col-md-6">
			<a href="http://resusstudio.com/blog/feed/"><?php
					$image = get_field('subscribe_rss');
					if( !empty($image) ): ?>
					<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
				<?php endif; ?>
				<p>
					<?php
							$field_key = "field_568c75a2d2586";
							$post_id = 110;
							$field = get_field_object($field_key);
							echo $field['label'];
					?>
				</p></a>
		</div>

	<div class="col-md-6">
		<a href="http://eepurl.com/bSO64f"><?php
				$image = get_field('subscribe_email');
				if( !empty($image) ): ?>
				<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
			<?php endif; ?>
			<p>
				<?php
						$field_key = "field_56a65a09e2efc";
						$post_id = 110;
						$field = get_field_object($field_key);
						echo $field['label'];
				?>
			</p></a>
	</div>
</div>

<div class="container">

	<!-- DIDN'T KNOW HOW TO HAVE A STATIC PAGE BUT ALSO DISPLAY BLOG POSTS.  BY DEFAULT, THE LOOP ONLY DISPLAYS THE PAGE INFO.  THANKS TO THIS THREAD, YOU CAN SETUP A DIFFERENT LOOP TO SHOW THE BLOG POSTS
	https://wordpress.org/support/topic/blog-posts-on-static-front-page
	-->

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<!-- standard tags to display the static page information like the_title() here -->
		<p><?php the_content(); ?></p>
	<?php endwhile; endif; ?>


	<div class="row">

	<?php $my_query = "showposts=6"; $my_query = new WP_Query($my_query); ?>
	<?php if ($my_query->have_posts()) : while ($my_query->have_posts()) : $my_query->the_post(); ?>

		<!-- standard tags to display blog post information like the_title() here -->
			<div class="entrycontain">
				<div class="entry">
				  <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
					<p class="date"><?php the_time('D, M d, Y'); ?></p>
				  <p class="summary"><?php the_excerpt();
					?></p>
					<div class="button"><a href="<?php the_permalink(); ?>">Read More</a></div>
				</div>
			</div>

	<?php endwhile; endif; // MAKE SURE THIS IS OUTSIDE THE ENTRY DIV ?>


</div>

</div>


<?php get_footer(); ?>

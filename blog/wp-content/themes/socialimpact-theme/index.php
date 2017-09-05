<?php get_header(); ?>

<div class="unsplash">
	<h1> Forget it, I want to go back to index.html</h1>
	<img src="https://images.unsplash.com/photo-1431542535025-608d7b779625?crop=entropy&fit=crop&fm=jpg&h=625&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1250" alt="" />
</div>



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
			$post_id = 6;
			$field = get_field_object($field_key, $post_id);
			echo $field['label'];
		?>
	</h2>

	<?php the_field('why_care',6); ?>
	<!-- pulling using the About Page ID wooooooorrrked! -->
	<!-- BTW, it seems like ACF automatically puts <p> tags around the values, because when I wrapped the above in <p> tags, lines appeared doubly.  -->


</div>

<div class="row">
	<div class="subscribe">
		<div class="col-md-6">
			<?php
				$image = get_field('social_media_icons',6);
				if( !empty($image) ): ?>
				<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
			<?php endif; ?>
			<p>Subscribe options appear here along with icons</p>
		</div>
		<div class="col-md-6">
			<?php
				$image = get_field('subscribe_email',6);
				if( !empty($image) ): ?>
				<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
			<?php endif; ?>
			<p>Subscribe options appear here along with icons</p>
		</div>
	</div>
</div>

<div class="container">
	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>


<div class="row">
	<div class="col-md-4">
		<div class="entry">
		  <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
			<p class="date"><?php the_time('D, M d, Y'); ?></p>
		  <p class="summary"><?php the_excerpt(); ?></p>
			<div class="button"><a href="<?php the_permalink(); ?>">Read More</a>
			</div>

			<div class="taglist">
				<ul>
					<div class="tags">tags:
						<?php the_tags( '<li>', '</li><li>', '</li>' ); ?>
					</div>
				</ul>
			</div>

		</div>
	</div>
</div>

<?php endwhile; endif; // MAKE SURE THIS IS OUTSIDE THE ENTRY DIV ?>



</div>


<?php get_footer(); ?>

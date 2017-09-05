<?php get_header();
// THIS IS THE PAGE RENDERED TO DISPLAY ALL POSTS TAGGED WITH "EVENTS"?>

<header>
	<div class="condenseheader">
		<div class="logo">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php bloginfo( 'template_url' ); ?>/imgs/logo.png"></a>
		</div>


		<div class="title"><h1><?php bloginfo( 'name' ); ?></h1></div>

		</div>

		<?php
			$description = get_bloginfo( 'description', 'display' );
		?>
		<div class="tagline"><h2><?php echo $description; ?></h2></div>

		<?php
			include ('menu.php');
		?>
</header>


	<div class="container">

	  <div class="eventdisplay">
	  	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

			<?php
				$day = DateTime::createFromFormat('Ymd', get_field('event_date_start'));
				$month = DateTime::createFromFormat('Ymd', get_field('event_date_start'));
			?>
			<div class="datebox">
				<div span="month"><?php	echo $month->format('M'); ?></div>
				<?php echo $day->format('d'); ?>
			</div>

	  			  	<div class="eventinfo">
	  			  		<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
	  			  		<p><?php the_content(); ?></p>
	  			  	</div>
		<div class="clear"></div>
	<?php endwhile; endif; // MAKE SURE THIS IS OUTSIDE THE ENTRY DIV ?>

  </div>


</div>


<?php get_footer(); ?>

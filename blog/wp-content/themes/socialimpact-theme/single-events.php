<?php get_header();
?>
<!-- THIS IS GENERAL BLOG POST FORMAT IS RENDERED FOR A SINGLE POST TAGGED WITH "EVENT"-->

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
	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<article>


	<div class="event">

		<h3>Posted on: <?php the_date('l, F j, Y'); ?></h3>


			<?php
			// edited code from: http://www.advancedcustomfields.com/resources/date-picker/
				$day = DateTime::createFromFormat('Ymd', get_field('event_date_start'));
				$month = DateTime::createFromFormat('Ymd', get_field('event_date_start'));
				?>

	<!-- FIGURE OUT HOW TO MAKE DIV PROPERTIES APPEAR ONLY IF INFO EXISTS.  LIKE THE LOOP.  Sure, here it's fine because every event will need a date. -->
		<div class="datebox">
			<div span="month"><?php	echo $month->format('M'); ?></div>
			<?php echo $day->format('d');
			// date and time formats: https://codex.wordpress.org/Formatting_Date_and_Time
			?>

		</div>


		  <h2><?php the_title(); ?></h2>
		  <p><?php the_content(); ?></p>

			<?php
				// displaying the Google Map requires a little more code
				// http://www.advancedcustomfields.com/resources/google-map/
			 ?>


		<div class="taglist">
			<ul>
				<div class="tags">tags:
					<?php the_tags( '<li>', '</li><li>', '</li>' ); ?>
				</div>
			</ul>
		</div>

	<?php endwhile; endif;?>

	</div>


</article>

	<div class="alltags">
		<h3>All Tags in Blog</h3>
		<div class="taglist">
			<ul class="tags">tags:
				<?php wp_tag_cloud('smallest=12&largest=12&format=list'); ?>
			</ul>
		</div>
	</div>


</div>



<?php get_footer(); ?>

<?php get_header();
// TITLE OF WEBSITE IS ALREADY CALLED IN HEAD INFO
// WILL BUILD DYNAMIC MENU WHICH WLL BE IN HEADER
//  STYLES FOR ALL PAGES ARE ALREADY CALLED IN HEAD INFO
?>
<!-- THIS IS A TEMPLATE PAGE!  MEANING: YOU WON'T EVER BE ABLE TO VIEW THIS PAGE UNLESS YOU'VE CREATED A SAMPLE PAGE VIA WP DASHBOARD.  E.G. AN ABOUT PAGE.  -->


<!-- HEADER IS UNIQUE FOR INDEX AND CONDENSED FOR TEMPLATES: SINGLE & PAGE.   -->
<header>
	<div class="condenseheader">
		<div class="logo">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php bloginfo( 'template_url' ); ?>/imgs/logo.png"></a>
		</div>
		<!-- ADDED <?php bloginfo( 'name' ); ?> TO SHOW THE BLOG TITLE. -->

		<div class="title"><h1><?php bloginfo( 'name' ); ?></h1></div>
		<!-- ADDED <?php echo esc_url( home_url( '/' ) ); ?> TO LINK TO HOME. -->
		</div>		<!-- CRAZY THAT THE END OF THE condenseheader TAG NEEDED TO BE BEFORE THE tagline TAG IN ORDER FOR THE BLACK BAR TO CLEAR AFTER THE FLEX ITEMS.  DIDN'T HAVE TO BE LIKE THIS FOR THE STATIC PAGE. -->

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

  <h3><?php the_title(); ?></h3>
  <p><?php the_content(); ?></p>
	<?php endwhile; endif;?>

</div>

<?php get_footer(); ?>

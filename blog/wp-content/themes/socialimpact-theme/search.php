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

<h1>You searched for "<span class="searchword"><?php echo esc_html( get_search_query( false ) ); ?></span>". </h1>
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
	<div class="results">
		<h1>Here are the results:</h1>
		<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
		<p class="summary"><?php the_excerpt();?></p>
	</div>
<?php endwhile;
else:
	echo '<div class="noresults">'; // this is how you add a class around something in php
		echo ("<h1>Sorry, no posts found.</h1>");
	echo '</div>'; // wrap the RETURN value with these
endif; ?>
<!-- combo of this: https://codex.wordpress.org/Function_Reference/have_posts
and this: http://wordpress.stackexchange.com/questions/170701/if-no-search-results-show-posts-from-alternate-search-query -->



</br>
<h2>Didn't find what you're looking for?  Search for something else:</h2>
<?php get_search_form(); ?>


<h2>Or look through the latest posts:</h2>
<?php $my_query = "showposts=4"; $my_query = new WP_Query($my_query); ?>
<?php if ($my_query->have_posts()) : while ($my_query->have_posts()) : $my_query->the_post(); ?>
	<div class="recents">
		<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
		<p class="summary"><?php the_excerpt();?></p>
	</div>
<?php endwhile; endif; // MAKE SURE THIS IS OUTSIDE THE ENTRY DIV ?>


</div>

<?php get_footer(); ?>

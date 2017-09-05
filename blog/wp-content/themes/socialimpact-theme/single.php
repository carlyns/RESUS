<?php get_header();
// TITLE OF WEBSITE IS ALREADY CALLED IN HEAD INFO
// WILL BUILD DYNAMIC MENU WHICH WLL BE IN HEADER
//  STYLES FOR ALL PAGES ARE ALREADY CALLED IN HEAD INFO
?>
<!-- THIS IS A TEMPLATE PAGE!  MEANING: YOU WON'T EVER BE ABLE TO VIEW THIS PAGE UNLESS YOU'VE CREATED A SAMPLE POST VIA WP DASHBOARD.  E.G. A BLOG ENTRY.  -->


	<!-- HEADER IS UNIQUE FOR INDEX AND CONDENSED FOR TEMPLATES: SINGLE & PAGE.   -->
<header>
	<div class="condenseheader">
		<div class="logo">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php bloginfo( 'template_url' ); ?>/imgs/logo.png"></a>
		</div>

		<div class="title"><h1><?php bloginfo( 'name' ); ?></h1></div>
		<!-- ADDED <?php echo esc_url( home_url( '/' ) ); ?> TO LINK TO HOME. -->
		</div>	<!-- CRAZY THAT THE END OF THE condenseheader TAG NEEDED TO BE BEFORE THE tagline TAG IN ORDER FOR THE BLACK BAR TO CLEAR AFTER THE FLEX ITEMS.  DIDN'T HAVE TO BE LIKE THIS FOR THE STATIC PAGE. -->

		<?php
			$description = get_bloginfo( 'description', 'display' );
		?>
		<div class="tagline"><h2><?php echo $description; ?></h2></div>

		<?php
			include ('menu.php');
		?>
</header>


<div class="container">
<article>

	<?php
	/* ADDING CODE TO RENDER POST FORMAT IF APPLICABLE*/
		if ( has_post_format( 'video' )) {
	  echo 'Enjoy the following video!  love, Carlyn';
		/* seems as if functions needs to be defined to add classes for styling.  so maybe this for-else statement isn't necessary at all and instead use the post_class() function.  see "Using Formats" http://codex.wordpress.org/Post_Formats  */
		}
		 else if (has_post_format('gallery')) {
		   echo 'Hope you like this photo gallery!  love, Carlyn';
		} else if (has_post_format('status')) {
		    echo 'What we are saying on the twitterverse:';
		} else if (has_post_format('quote')) {
		   echo 'Isnt this a great pull quote?';
		} else {
		   echo 'Display the normal format with code.  Prob cant leave the else blank.  This is from trying to create a different kinds of formats for a post.';
		}
	?>


  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
		<?php the_date('l, F j, Y', '<h3>', '</h3>');
		// https://codex.wordpress.org/Function_Reference/the_date
		?>
	  <h2><?php the_title(); ?></h2>
	  <p><?php the_content(); ?></p>
		<?php /* here's an example of the Custom Fields printing the whole array
			the_meta(); */?>
	<?php endwhile; endif;?>


	<div class="taglist">
		<div class="tags">tags:
				<ul><?php the_tags( '<li>', '</li><li>', '</li>' );
					//with these <li> tags, formatting is not the same as the ALL TAGS list ?>
				</ul>
		</div>
	</div>

</article>

<div class="alltags">
	<h3>All Tags in Blog</h3>

	<div class="taglist">
		<div class="tags">tags:
			<?php wp_tag_cloud('smallest=12&largest=12&format=list'); ?>
		</div>
	</div>

</div>

<!-- THIS IS SHOWING UP. -->
<p><?php the_field('extra_info'); ?></p>

<!-- ADDING FORMATTABLE TEXT. THIS IS NOT SHOWING UP . -->
<?php the_field('wysiwyg'); ?>

<!-- THIS IS SHOWING UP. -->
<!-- ADDING AN IMAGE.  Caption info is a little more complicated and can be done later.  -->
<?php
$image = get_field('post_image');
if( !empty($image) ): ?>

	<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />

<?php endif; ?>


	<?php /* ADDING UNIQUE CLASSES TO SPECIFIC TAGS
	$tags = get_the_tags();
	if( $tags ) : ?>
	  <p class="tags">
	  <?php foreach( $tags as $tag ) { ?>
	   <span class="<?php echo $tag->slug; ?>"><a href="<?php echo get_tag_link($tag->term_id); ?>"><?php echo $tag->name; ?></a></span>
	  <?php } ?>
	</p>
<?php endif;

*/ ?>


</div>


<?php get_footer(); ?>

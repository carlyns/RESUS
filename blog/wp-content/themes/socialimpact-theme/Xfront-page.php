<?php get_header(); ?>


<h2>Changed my mind yet again.  I'd rather have this as the Front Page</h2>

<img src="https://images.unsplash.com/photo-1431492299426-2ea1ce429cc0?crop=entropy&fit=crop&fm=jpg&h=625&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1250" alt="cityscape" />


<div>
	<ul>
		<li>lorem3</li>
		<li></li>
		<li></li>
	</ul>
</div>

<p>p>lorem5 gives you: Lorem ipsum dolor sit amet.</p>

<div class="container">
	<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

	<div class="row">
		<div class="col-md-4">
			<div class="entry">
			  <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				<p class="date"><?php the_time('D, M d, Y'); ?></p>
			  <p class="summary"><?php the_excerpt();
				?></p>
				<div class="button"><a href="<?php the_permalink(); ?>">Read More</a>
			</div>

			</div>
		</div>
	</div>

<?php endwhile; endif; // MAKE SURE THIS IS OUTSIDE THE ENTRY DIV ?>

</div>


<?php get_footer(); ?>

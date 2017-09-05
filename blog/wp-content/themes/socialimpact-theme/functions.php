<?php
// show WP admin bar
// DIND'T WORK: show_admin_bar( true );


// add post formats
add_theme_support( 'post-formats', array( 'aside', 'link', 'image', 'quote', 'status', 'video', 'audio', 'chat', 'gallery' ) );


// This theme uses wp_nav_menu() in one location.
function register_theme_menu() {
  register_nav_menus( 'primary', 'RESUS Navigation' );
}

add_action( 'init', 'register_theme_menu' );


// Year Shortcode
function year_shortcode() {
  $year = date('Y');
  return $year;
}
add_shortcode('year', 'year_shortcode');
// Use php echo year_shortcode();  in your posts.
// from https://css-tricks.com/snippets/wordpress/year-shortcode


// REGISTERING WIDGET AREA

/**
 * Register our sidebars and widgetized areas.
 *
 */
function resus_widgets_init() {
// function was defined here, which not everyone does.

	register_sidebar( array(
		'name'          => 'Main Footer',
		'id'            => 'main_footer',
		'before_widget' => '<div>',
		'after_widget'  => '</div>',
		'before_title'  => '<h1 class="square">',
		'after_title'   => '</h1>',
	) );

}

// if a function was defined above, then you need to initiate it here, calling the function.
add_action( 'widgets_init', 'resus_widgets_init' );




// TO BE ABLE TO MAKE CUSTOM POST TEMPLATES FOR CATEGORIES.
// OPTION A (but keep in mind these methods are from 2010-2012 ish)
// Gets post cat slug and looks for single-[cat slug].php and applies it  From: http://mor10.com/creating-custom-single-post-templates/
add_filter('single_template', create_function(
	'$the_template',
	'foreach( (array) get_the_category() as $cat ) {
		if ( file_exists(TEMPLATEPATH . "/single-{$cat->slug}.php") )
		return TEMPLATEPATH . "/single-{$cat->slug}.php"; }
	return $the_template;' )
);
// I can still use this in combination with ACF, right?

// OPTION B
// USE CUSTOM POST TYPES UI with ACF.  Will create another type in the sidebar (along with Posts & Pages).  Have to check whether these "posts" show up in RSS feeds.  Probably more intuitive for Gingarte Site.  And, you probably don't need a widget.


?>

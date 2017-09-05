
	<div class="menu">

		<!-- THIS is CRAZINESS.  I just wanted to get rid of the line breaks.
					TRYING TO GET RID OF THE DIV AND UL TAGS THAT WRAP THE MENU ITEMS.  LOOKING AT https://developer.wordpress.org/reference/functions/wp_nav_menu/ IT SEEMS EASY.
				THEN FOUND THIS THREAD: https://wordpress.org/support/topic/remove-the-div-and-ul-tags-from-wp_nav_menu-function?replies=24#post-2079864
			IT PULLS ALL POSSIBLE MENU ITEMS AND GIVES THEM A LONG ASS ID AND CLASS NAME AND ADDS THEIR SPECIFIC ID SOMEHOW.  -->

		<?php wp_nav_menu(array('menu' => 'primary', 'container' => false, 'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>')); ?>

	</div>

<!DOCTYPE html>
<html lang="en">

<head>
	<title><?php wp_title(); ?></title>
	<meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
	<meta name="keywords" content="social impact, design, systems thinking">
	<meta name="description" content="Thoughts on the emerging field of social impact.">

	<link rel="shortcut icon" href="<?php bloginfo( 'template_url' ); ?>/imgs/resus.ico" type="image/ico" width="16" height="16">

	<link href='https://fonts.googleapis.com/css?family=Oxygen:300,400,700' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Crete+Round:400,400italic' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url')/style.css ; ?>">
	<script>DO THE SAME FOR ANY JS FILES</script>

  <?php wp_head(); ?> <!-- MARKS THIS FILE AS THE HEADER AND TELLS WP TO LOOK FOR IT. -->
	<!-- i have a plugin installed ("Insert Headers and Footers" under "Settings" that automatically adds scripts to the <head> section, which means they can't be styled.  So they should only be JS, styelsheets, or font loading scripts. Inserting script in the footer goes right above the </body> tag.-->
</head>

<body>

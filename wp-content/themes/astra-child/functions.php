<?php
/**
 * Astra Child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra Child
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_ASTRA_CHILD_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 'astra-child-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_ASTRA_CHILD_VERSION, 'all' );
	wp_enqueue_script( 'connect-web3', get_stylesheet_directory_uri() . '/connect-web3.js', array('jquery'), ASTRA_THEME_VERSION, false );
	wp_enqueue_script( 'Web3', 'https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js', array('jquery'), ASTRA_THEME_VERSION, false );
	wp_enqueue_script( 'Moralis', 'https://unpkg.com/moralis/dist/moralis.js', array('jquery'), ASTRA_THEME_VERSION, false );
}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );


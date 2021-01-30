<?php
/**
 * Plugin Name: gzBlocks
 */

// Exit if accessed directly.

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function require_all_subdir_file( $dir, $depth = 0 ) {
	$scan = glob( "$dir/*/*.php" );
	foreach ( $scan as $file ) {
		require_once $file;
	}
}

require_all_subdir_file( plugin_dir_path( __FILE__ ) . "blocks", 1 );


/**
 * Add custom category for gutenberg
 * @param $cats
 * @param $post
 *
 * @return array
 */
function gzblocks_categories( $cats ) {
	return array_merge(
		$cats,
		array(
			array(
				'slug'  => "gzblocks",
				'title' => __( 'gzBlocks', 'gzblocks' ),
				'icon'  => 'wordpress'
			)
		)
	);
}

add_filter('block_categories', 'gzblocks_categories');

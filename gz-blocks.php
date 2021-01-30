<?php
/**
 * Plugin Name: gzBlocks
 */

// Exit if accessed directly.

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function require_all_subdir_file($dir, $depth=0) {
	$scan = glob("$dir/*/*.php");
	foreach ($scan as $file) {
		require_once $file;
	}
}

require_all_subdir_file( plugin_dir_path(__FILE__) . "blocks" , 1);
<?php
/**
 * Simple Single Block
 *
 * @name   : start-multi-block
 * @func   : start_multi_block
 * @comment: replace all @name & @func with your new naming
 */

function gz_register_start_multi_block() {

	// Register our block editor-specific front css
	wp_register_style(
		'start-multi-block',
		plugins_url( 'dist/style.css', __FILE__ ),
		array( 'wp-blocks' )
	);

	// Register our block editor-specific front js
	wp_register_script(
		'start-multi-block',
		plugins_url( 'dist/script.js', __FILE__ ),
		array( 'jquery' )
	);

	// Register our block editor-specific CSS/JS
	if ( is_admin() ) :
		wp_register_style(
			'start-multi-block-editor',
			plugins_url( 'dist/editor.css', __FILE__ ),
			array( 'wp-edit-blocks' )
		);

		// Register our block script with WordPress
		wp_register_script(
			'start-multi-block-editor',
			plugins_url( 'dist/editor.js', __FILE__ ),
			array( 'wp-blocks', 'wp-element', 'wp-editor' )
		);
	endif;

	// Enqueue the script in the editor
	register_block_type( 'start-multi-block/main', array(
		'editor_script' => 'start-multi-block-editor',
		'editor_style'  => 'start-multi-block-editor',
		'style'         => 'start-multi-block',
		'script'        => 'start-multi-block',
	) );
}

add_action( 'init', 'gz_register_start_multi_block' );
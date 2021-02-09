<?php
/**
 * Team Member Block
 */

function gz_register_team_member() {

	// Register our block editor-specific front css
	wp_register_style(
		'gz-team-member',
		plugins_url( 'dist/style.css', __FILE__ ),
		array( 'wp-blocks' )
	);

	// Register our block editor-specific front js
	wp_register_script(
		'gz-team-member',
		plugins_url( 'dist/script.js', __FILE__ ),
		array( 'jquery' )
	);

	// Register our block editor-specific CSS/JS
	if ( is_admin() ) :
		wp_register_style(
			'gz-team-member-editor',
			plugins_url( 'dist/editor.css', __FILE__ ),
			array( 'wp-edit-blocks' )
		);

		// Register our block script with WordPress
		wp_register_script(
			'gz-team-member-editor',
			plugins_url( 'dist/editor.js', __FILE__ ),
			array( 'wp-blocks', 'wp-element', 'wp-editor' )
		);
	endif;

	// Enqueue the script in the editor
	register_block_type( 'gzblocks/team-member', array(
		'editor_script' => 'gz-team-member-editor',
		'editor_style'  => 'gz-team-member-editor',
		'style'         => 'gz-team-member',
		'script'        => 'gz-team-member',
	) );
}

add_action( 'init', 'gz_register_team_member' );
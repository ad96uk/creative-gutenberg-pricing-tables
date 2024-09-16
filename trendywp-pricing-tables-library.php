<?php
/**
 * Plugin Name:       TrendyWp Pricing Tables Library
 * Description:       Effortlessly design responsive, eye-catching pricing tables with our creative templates.
 * Requires at least: 6.6
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            ad96.uk
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       trendywp-pricing-tables-library
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_trendywp_pricing_tables_library_block_init() {
	register_block_type( __DIR__ . '/build/elegant' );
	register_block_type( __DIR__ . '/build/murky' );
}
add_action( 'init', 'create_block_trendywp_pricing_tables_library_block_init' );

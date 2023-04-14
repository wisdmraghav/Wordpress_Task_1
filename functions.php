<?php 
    function html2wp_custom_logo_setup() {
        $defaults = array(
            'height'               => 120,
            'width'                => 420,
            'flex-height'          => true,
            'flex-width'           => true,
            'header-text'          => array( 'site-title', 'site-description' ),
            'unlink-homepage-logo' => true, 
        );
        add_theme_support( 'custom-logo', $defaults );
    }
    add_action( 'after_setup_theme', 'html2wp_custom_logo_setup' );






function html2wp_theme_setup(){
    register_nav_menus(
        array('primary'=>'html2wp')
    );
    // add_theme_support( 'custom-logo');
    add_theme_support( 'title-tag');
    add_theme_support( 'post-thumbnails');
    // add_image_size( 'home-featured',680,400,array('center','center'));
    // add_image_size( 'single-img',680,550,array('center','center'));
    add_theme_support( 'automatic-feed-links');

};
add_action( 'after_setup_theme', 'html2wp_theme_setup' );



function html2wp_scripts(){
    wp_enqueue_style('style',get_stylesheet_uri() );
};

add_action( 'wp_enqueue_scripts','html2wp_scripts');




// for dynamic footer
function wsd_widgets_areas()
{
    register_sidebar(array(
        'name' => 'Company info in footer area',
        'id' => 'comp-info',
        'description' => 'Company info in the footer left bottom under company logo',
        'before_title' => '',
        'after_title' => '',
        'before_widget' => '',
        'after_widget' => '',
    ));

    register_sidebar(array(
        'name' => 'Bottom footer',
        'id' => 'b-footer',
        'description' => 'footer at the bottom',
        'before_title' => '',
        'after_title' => '',
        'before_widget' => '',
        'after_widget' => '',
    ));
}

add_action('widgets_init', 'wsd_widgets_areas');
?>
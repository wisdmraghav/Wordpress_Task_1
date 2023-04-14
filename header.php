<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <!-- <link rel="stylesheet" href=" /* php code <echo get_template_directory_uri();*/style.css"> -->
    <!-- <link rel="stylesheet" href="media-queries.css"> -->
    <?php wp_head( );?>
</head>
<body>
    
    <!-- top banner -->

    <!-- <div class="top-banner">
        <div class="container">
            <div class="small-bold-text banner-text">🥳 New to Usability Hub: Open and Closed card sorting</div>
        </div>
    </div> -->

    <!-- nav bar -->
    <nav>
        <div class="container main-nav flex">
            <a href="#" class="company-logo">
                <!-- <img src="php code echo get_template_directory_uri();?>/assets/images/logo.png" alt="company logo"> -->
                <?php if ( function_exists( 'the_custom_logo' ) ) {
	                    the_custom_logo();
                }?>

            </a>
            <div class="nav-links" id="nav-links">
                <!-- for dynamic menu -->
                <ul class="flex">
                    <?php
                    wp_nav_menu( array(
                        'theme-location'=>'primary',
                        'items_wrap' => '<ul class="flex">%3$s</ul>'

                    ) );
                    ?>

                </ul>
                <!-- <ul class="flex">
                    <li><a href="#feature-id" class="hover-link">Features</a></li>
                    <li><a href="#adv-feature" class="hover-link">Advanced</a></li>
                    <li><a href="#testimonial-id" class="hover-link">Testimonial</a></li>
                    <li><a href="#more-id" class="hover-link">More</a></li>
                    <li><a href="#" class="hover-link secondary-button">Sign in</a></li>
                    <li><a href="#" class="hover-link primary-button">Sign up</a></li>
                </ul> -->
            </div>
            <a href="#" class="nav-toggle hover-link" id="nav-toggle">
                <i class="fa-solid fa-bars"></i>
            </a>
        </div>
    </nav>

    <!-- header section -->
    <header>
        <div class="container header-section flex">
            <div class="header-left">
                <h1>Warehouse stock Management Solution</h1>
                <p>Inventory system to control and manage proucts in the Warehouse in real time and integrated to make it easier to develop your business</p>
                <a href="demo.html" class="primary-button get-started-btn">Get Started</a>
            </div>
            <div class="header-right">
                <img src="<?php echo get_template_directory_uri();?>/assets/images/inventory1.png" alt="hero image">
            </div>
        </div>
    </header>
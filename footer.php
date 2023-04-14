<footer>
        <div class="container flex footer-container" id="more-id">
            <div >
                <a href="#" class="company-logo">
                    <!-- <img src=" php-code echo get_template_directory_uri();?>/assets/images/logo.png" alt="company logo"> -->
                    <?php if ( function_exists( 'the_custom_logo' ) ) {
	                    the_custom_logo();
                    }?>
                </a>
                <div style="width:400px;">
                    <?php dynamic_sidebar('comp-info'); ?>
                </div>
               
                
                
            </div>
            <div class="link-column flex">
                <h4>Company</h4>
                <a href="#" class="hover-link">Overview</a>
                <a href="#" class="hover-link">Pricing</a>
                <a href="#" class="hover-link">Services</a>
                <a href="#" class="hover-link">Career</a>
                <!-- <a href="#" class="hover-link">Community</a> -->
            </div>
            <div class="link-column flex">
                <h4>Features</h4>
                <a href="#" class="hover-link">Accountancy</a>
                <a href="#" class="hover-link">Invoice</a>
                <a href="#" class="hover-link"> Finance statements</a>
                <a href="#" class="hover-link">Inventory</a>
                <!-- <a href="#" class="hover-link">Status Page</a> -->
            </div>
            <div class="link-column flex">
                <h4>Resources</h4>
                <a href="#" class="hover-link">News & Blog</a>
                <a href="#" class="hover-link">Social Media</a>
                <a href="#" class="hover-link">API Development</a>
                <a href="#" class="hover-link">Brochure</a>
                <!-- <a href="#" class="hover-link">Status Page</a> -->
            </div>
        </div>
    </footer>

    <!-- subfooter -->

    <div class="subfooter">
        <div class="container flex subfooter-container">
        <?php dynamic_sidebar('b-footer'); ?>
            <!-- <a class="hover-link" href="#">Privacy policy</a>
            <a class="hover-link" href="#">Terms & Condition</a>
            <a class="hover-link" href="#">Security Information</a>
            <a class="hover-link" href="#"><i class="fa-brands fa-facebook"></i></a>
            <a class="hover-link" href="#"><i class="fa-brands fa-twitter"></i></a> -->

        </div>
    </div>

    <script src="https://kit.fontawesome.com/c1fc3d2826.js" crossorigin="anonymous"></script>

    <script>
        const toggleButton = document.getElementById('nav-toggle');
        const navLinks = document.getElementById('nav-links');

        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        })

    </script>
<?php wp_footer( );?>
</body>
</html>
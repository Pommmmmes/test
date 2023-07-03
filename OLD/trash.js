(function() {
    "use strict"; // Start of use strict

    var mainNav = document.querySelector('#mainNav');

    if (mainNav) {
        var navbarCollapse = mainNav.querySelector('.navbar-collapse');

        if (navbarCollapse) {
            var collapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });

            var navbarItems = navbarCollapse.querySelectorAll('a');

            // Closes responsive menu when a scroll trigger link is clicked
            for (var item of navbarItems) {
                item.addEventListener('click', function(event) {
                    collapse.hide();
                });
            }
        }

        // Scroll to target element
        var scrollToTarget = function(target) {
            var targetElement = document.querySelector(target);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        };

        // Handle click event on your button
        var yourButton = document.querySelector('#ScrollButton');
        if (yourButton) {
            yourButton.addEventListener('click', function(event) {
                scrollToTarget('#about');
            });
        }

        // Handle scroll event
        document.addEventListener('scroll', function(event) {
            var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            var aboutSection = document.querySelector('#about');
            var contactSection = document.querySelector('#contact');

            if (scrollPosition < aboutSection.offsetTop) {
                mainNav.querySelector('.nav-link.active').classList.remove('active');
                document.querySelector('#navItem1').classList.add('active');
            } else if (scrollPosition >= aboutSection.offsetTop && scrollPosition < contactSection.offsetTop) {
                mainNav.querySelector('.nav-link.active').classList.remove('active');
                document.querySelector('#navItem2').classList.add('active');
            } else {
                mainNav.querySelector('.nav-link.active').classList.remove('active');
            }
        });

        // Collapse Navbar
        var collapseNavbar = function() {
            var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

            if (scrollTop > 100) {
                mainNav.classList.add("navbar-shrink");
            } else {
                mainNav.classList.remove("navbar-shrink");
            }
        };

        // Collapse now if page is not at top
        collapseNavbar();

        // Collapse the navbar when page is scrolled
        document.addEventListener("scroll", collapseNavbar);
    }
})(); // End of use strict

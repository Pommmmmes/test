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
        item.addEventListener('click', function (event) {
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
      
    // Event listener for nav-item 1
    var navItem1 = document.querySelector('#navItem1');
    if (navItem1) {
      navItem1.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor link behavior
        scrollToTarget('#about'); // Scroll to the desired section
      });
    }

    // Event listener for nav-item 2
    var navItem2 = document.querySelector('#navItem2');
    if (navItem2) {
      navItem2.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor link behavior
        scrollToTarget('#contact'); // Scroll to the desired section
      });
    }

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

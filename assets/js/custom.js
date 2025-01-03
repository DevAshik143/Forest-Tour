(function($) {
    'use strict';
    // Preloader
    $(window).on('load', function() {
        $('.preloader').addClass('hidden');
        $('[data-popup="tooltip"]').tooltip();
    });
    $(".hamburger>.hamburger_btn").on('click', function() {
        $(".header .navigation").toggleClass('open');
        $(this).toggleClass('active');
    });
    // Mobile Menu
    $(".header .menu-item-has-children > a").on('click', function(e) {
        var submenu = $(this).next(".sub-menu");
        e.preventDefault();
        submenu.slideToggle(200);
    });


       // Navigation
    $(document).ready(function () {
        $('.navigation .main-menu li.menu-item-has-children>a, .navigation .main-menu li.menu-item-has>a').on('click', function () {
          $(this).removeAttr('href');
          var element = $(this).parent('li');
          if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul.sub-menu').slideUp();
          } else {
            element.addClass('open');
            element.children('ul.sub-menu').slideDown();
            element.siblings('li').children('ul.sub-menu').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul.sub-menu').slideUp();
          }
        });
        $('.menu-item-has-children>a').append('<span class="arrow"></span>');
        $('.menu-item-has>a').append('<span class="arrow"></span>');
    });
    // 
    
    // Main Banner
    $('.banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        speed: 1000,
        dots: false,
        arrows: false,
        dotsClass: "slick-dots d-flex",
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: false,
            }
        }]
    });
   
     // counter
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
    });
    

    $('.testimoation-slider').slick({
  dots: true,
  infinite: true,
  speed: 700,
  autoplaySpeed: 1500,
  autoplay: true,
  slidesToShow: 2,
  arrows: true,

  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    
    // Blog Slider
    $('.event-slider').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 700,
  autoplaySpeed: 1500,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

    // our tour Slider
    $('.tour-slider').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 700,
  autoplaySpeed: 1500,
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    
   
    // Countdown
    $(".countdown").each(function() {
        var $this = $(this);
        $this.countdown($this.data('countdown'), function(event) {
            $(this).html("<ul> <li> <h4>" + event.strftime('%D') + "</h4> <p>Days</p></li><li> <h4>" + event.strftime('%H') + "</h4> <p>Hours</p></li><li> <h4>" + event.strftime('%M') + "</h4> <p>Minutes</p></li><li> <h4>" + event.strftime('%S') + "</h4> <p>Seconds</p></li></ul>")
        });
    });
    // Countdown
    $(".countdown_basic").each(function() {
        var $this = $(this);
        $this.countdown($this.data('countdown'), function(event) {
            $(this).text(
                event.strftime('%D days %Hh : %Mm : %Ss')
            );
        });
    });
    // Countdown
    $(".countdown_basic_two").each(function() {
        var $this = $(this);
        $this.countdown($this.data('countdown'), function(event) {
            $(this).text(
                event.strftime('%H:%M:%S')
            );
        });
    });
    // Progress bar
    $(".featured_product").each(function() {
        var progressBar = $(this).find(".claimed_bar>div");
        $(progressBar).one('inview', function(event, isInView) {
            if (isInView) {
                $(progressBar).animate({
                    width: $(progressBar).attr("data-valuenow") + "%"
                });
            }
        });
    });
    // Progress bar
    $(".rating_bar li").each(function() {
        var progressBar = $(this).find(".rate_bar>div");
        $(progressBar).one('inview', function(event, isInView) {
            if (isInView) {
                $(progressBar).animate({
                    width: $(progressBar).attr("data-valuenow") + "%"
                });
            }
        });
    });
    // Product Social
    $(".social_trigger").on('click', function() {
        $(this).next().slideToggle(200);
    });
    // Sticky Header
    var header = $(".can-sticky");
    var footer = $(".ft-sticky");
    var headerHeight = header.innerHeight();
    var FooterHeight = footer.innerHeight();

    function doSticky() {
        if (window.pageYOffset > headerHeight) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
        if (window.pageYOffset > FooterHeight) {
            footer.addClass("d-flex");
        } else {
            footer.removeClass("d-flex");
        }
    }
    doSticky();
    //On scroll events
    $(window).on('scroll', function() {
        doSticky();
    });
    if ($(".back-to-top").length) {
        $(".back-to-top").on("click", function() {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate({
                    scrollTop: $(target).offset().top,
                },
                1000
            );

            return false;
        });
    };
    // Current year
    var d = new Date();
    document.getElementById("year").innerHTML = d.getFullYear();
    // Add / Subtract Quantity
    $(".quantity button").on('click', function() {
        var qty = $(this).closest('.quantity').find('input');
        var qtyVal = parseInt(qty.val());
        if ($(this).hasClass('qty-add')) {
            qty.val(qtyVal + 1);
        } else {
            return qtyVal > 1 ?
                qty.val(qtyVal - 1) :
                0;
        }
    });
     // Toggle eye
    function VisiblePassword() {
        var togglePassword = document.querySelector('#password_eye');
        var password = document.querySelector('#password_value');
        if (togglePassword) {
            togglePassword.addEventListener('click', function(e) {
                // toggle the type attribute
                const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
                password.setAttribute('type', type);
                // toggle the eye / eye slash icon
                this.classList.toggle('fa-eye-slash');
            });
        }
    }
    VisiblePassword();
})(jQuery);

// --------
//Counter
    const counters = document.querySelectorAll('.counter')
    counters.forEach(counter => {
     counter.innerText = '0'
     const updatecounter =() => {
         const target = +counter.getAttribute('data-target')
         const c = +counter.innerText
         const increment = target / 200
         if (c<target) {
             counter.innerText = `${Math.ceil(c+increment)}`
             setTimeout(updatecounter,1 )
         }
         else{
             counter.innerText=target
         }
     }
     updatecounter()
 });


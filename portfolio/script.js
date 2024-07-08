$(document).ready(function () {
  $(window).scroll(function () {
   
    // nav links //
    document.querySelectorAll('.menu li a').forEach(link => {
      link.addEventListener('click', function() {
          document.querySelectorAll('.menu li a').forEach(el => el.classList.remove('active'));
          this.classList.add('active');
      });
  });

    // navlinks ends //

    //  scroll-up button show/hide script  //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //  slide-up script  //

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    //  removing smooth scroll on slide-up button click  //
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //

    $("html").css("scrollBehavior", "smooth");
  });

  //  Toggle Navbar  //

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //  Typing Text Animation  //

  var typed = new Typed(".typing", {
    strings: [
   "Student",
   "Frontend Developer" ,
   "React js Developer" 

    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Student",
      "React js Developer" ,
      "Frontend Developer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  AOS.init();

  //  Owl Carousel  //

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: false,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});
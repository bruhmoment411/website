/**
* Template Name: MyResume - v4.8.1
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/


(function () {

  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  if (document.getElementById("myBar") !== null) {
    window.onscroll = function () { myFunction() };

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";

    }
  }

  var windowHeight = window.innerHeight;
  var scrollArea = 1000 - windowHeight;
  var hero2 = document.getElementById('hero');
  var heroBlur = document.getElementById('blur');

  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop / scrollArea || 0;
    if (hero2 != null && heroBlur != null) {
      //hero2.style.bottom = (scrollPercent * windowHeight) / -25 + 'px';
      let blurString = 'blur(' + scrollPercent + 'px)';
      hero2.style.filter = blurString;
    }
  });


  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
        if (document.getElementById("myBar") !== null) {
          select('.toggle').classList.remove('inactive')
          select('.toggle').classList.add('active')
        }
      } else {
        backtotop.classList.remove('active')
        if (document.getElementById("myBar") !== null) {
          select('.toggle').classList.remove('active')
          select('.toggle').classList.add('inactive')
        }
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */

  let hovereffect = document.getElementById('hovereffect')
  let boolean = false;
  on('click', '.mobile-nav-toggle', function (e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
    if (boolean == false) {
      boolean = true
      hovereffect.style.animation = "hovereffect 0.2s linear"
      hovereffect.style.animationFillMode = 'forwards'
    }
    else {
      boolean = false
      hovereffect.style.animation = "hovereffect2 0.2s linear"
      hovereffect.style.animationFillMode = 'forwards'
    }
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */

  on('click', '.scrollto', function (e) {

    if (select(this.hash)) {
      e.preventDefault()
      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
        hovereffect.style.animation = "hovereffect2 0.2s linear"
        hovereffect.style.animationFillMode = 'forwards'
        boolean = false;
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let slider = document.getElementById('slider');
  let preloader = select('#preloader');
  let opening = document.getElementById('opening');
  let openingtwo = document.getElementById('openingtwo');
  let loader = document.getElementById('load');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
      opening.style.animation = "animate-opening 0.5s cubic-bezier(.73,-0.03,.27,1.06)"
      opening.style.animationDelay = "0.6s";
      opening.style.animationFillMode = "forwards"
      openingtwo.style.animation = "animate-openingtwo 0.5s cubic-bezier(.73,-0.03,.27,1.06)"
      openingtwo.style.animationDelay = "0.6s";
      openingtwo.style.animationFillMode = "forwards"
      slider.style.animation = "sliding 0.5s cubic-bezier(.73,-0.03,.27,1.06)"
      slider.style.animationDelay = "0.6s";
      loader.style.animation = "loading 0.4s cubic-bezier(.21,.71,.31,.97)"
      loader.style.animationDelay = "0.2s";
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function (direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

  var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.onresize = updateDim;

  document.getElementById('canvas').style.opacity = window.innerWidth / 2500;

  function updateDim() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.getElementById('canvas').style.opacity = window.innerWidth / 2500;
  }

  var stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = 100, // Number of stars
    mouse = {
      x: 0,
      y: 0
    };  // mouse location

  // Push stars to array

  for (var i = 0; i < x; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1 + 1,
      vx: Math.floor(Math.random() * 50) - 25,
      vy: Math.floor(Math.random() * 50) - 25
    });
  }

  // Draw the scene

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "lighter";

    for (var i = 0, x = stars.length; i < x; i++) {
      var s = stars[i];

      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillStyle = 'black';
      ctx.stroke();
    }

    ctx.beginPath();
    for (var i = 0, x = stars.length; i < x; i++) {
      var starI = stars[i];
      ctx.moveTo(starI.x, starI.y);
      if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
      for (var j = 0, x = stars.length; j < x; j++) {
        var starII = stars[j];
        if (distance(starI, starII) < 150) {
          //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
          ctx.lineTo(starII.x, starII.y);
        }
      }
    }
    ctx.lineWidth = 0.05;
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }

  function distance(point1, point2) {
    var xs = 0;
    var ys = 0;

    xs = point2.x - point1.x;
    xs = xs * xs;

    ys = point2.y - point1.y;
    ys = ys * ys;

    return Math.sqrt(xs + ys);
  }

  // Update star locations

  function update() {
    for (var i = 0, x = stars.length; i < x; i++) {
      var s = stars[i];

      s.x += s.vx / FPS;
      s.y += s.vy / FPS;

      if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
      if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
    }
  }

  canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Update and draw

  function tick() {
    draw();
    update();
    requestAnimationFrame(tick);
  }

  tick();

})()


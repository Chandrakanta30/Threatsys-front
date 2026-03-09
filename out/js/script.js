// ================= WOW INIT =================
if (typeof WOW !== "undefined") {
  new WOW().init();
}

// ================= GSAP TEXT SPLITTING =================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined" && typeof Splitting !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  Splitting();

  gsap.utils.toArray("[data-splitting]").forEach(section => {
    if (section.querySelectorAll(".char").length) {
      gsap.from(section.querySelectorAll(".char"), {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "back.out(1.7)"
      });
    }
  });
}

// ================= BRAND LOGO ROTATOR =================
if (document.querySelectorAll('.partner-logo img').length > 0) {
  const logos = [
    './images/Aadhaar.png',
    './images/airtel.png',
    './images/axis.png',
    './images/first-bank.png',
    './images/UN_Logo.png'
  ];
  const imgElements = document.querySelectorAll('.partner-logo img');
  let currentIndexes = Array.from({ length: imgElements.length }, (_, i) => i);

  imgElements.forEach((img, i) => {
    img.src = logos[currentIndexes[i] % logos.length];
    img.classList.add('active');
  });

  let changeIndex = 0;
  setInterval(() => {
    if (!imgElements.length) return;
    const img = imgElements[changeIndex];
    currentIndexes[changeIndex] = (currentIndexes[changeIndex] + imgElements.length) % logos.length;

    img.classList.remove('active');
    setTimeout(() => {
      img.src = logos[currentIndexes[changeIndex]];
      img.classList.add('active');
    }, 300);

    changeIndex = (changeIndex + 1) % imgElements.length;
  }, 1000);
}

// ================= CUSTOM TABS =================
if (document.querySelectorAll('.custom-tabs .nav-link').length > 0 && document.getElementById('tabBg')) {
  const tabs = document.querySelectorAll('.custom-tabs .nav-link');
  const tabBg = document.getElementById('tabBg');

  function updateBgPosition(activeTab) {
    if (!activeTab) return;
    const offsetLeft = activeTab.offsetLeft;
    const width = activeTab.offsetWidth;
    tabBg.style.left = offsetLeft + 'px';
    tabBg.style.width = width + 'px';
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      updateBgPosition(this);
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    updateBgPosition(document.querySelector('.nav-link.active'));
  });
  window.addEventListener('resize', () => {
    updateBgPosition(document.querySelector('.nav-link.active'));
  });
}

// ================= SWIPER (Safe Init) =================
if (typeof Swiper !== "undefined") {
  if (document.querySelector(".mySwiper")) {
    const swiper2 = new Swiper(".mySwiper", {
      slidesPerView: 1.2,
      spaceBetween: 20,
      loop: true,
      autoplay: { delay: 2500, disableOnInteraction: false },
      breakpoints: {
        768: { slidesPerView: 1 },
        991: { slidesPerView: 2 }
      }
    });

    const swiperEl = document.querySelector(".mySwiper");
    swiperEl.addEventListener("mouseenter", () => swiper2.autoplay.stop());
    swiperEl.addEventListener("mouseleave", () => swiper2.autoplay.start());
  }

  if (document.querySelector(".CSwiper")) {
    new Swiper(".CSwiper", {
      slidesPerView: 6,
      spaceBetween: 30,
      navigation: { nextEl: ".custom-next", prevEl: ".custom-prev" },
      breakpoints: {
        0: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 }
      }
    });
  }

  if (document.querySelector(".mySwiper2")) {
    new Swiper(".mySwiper2", {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: { nextEl: ".custom-next", prevEl: ".custom-prev" },
      pagination: { el: ".swiper-pagination", type: "progressbar" },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
      }
    });
  }
}

// ================= OWL CAROUSEL =================
if (typeof $ !== "undefined" && typeof $.fn.owlCarousel !== "undefined") {
  if ($('.advisors-carousel').length > 0) {
    $('.advisors-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      }
    });
  }

  if ($('.courses-carousel').length > 0) {
    $('.courses-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 800,
      navText: [
        '<i class="fa fa-arrow-left"></i>',
        '<i class="fa fa-arrow-right"></i>'
      ],
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 }
      }
    });
  }
}

// ================= COUNTER =================
if (document.querySelectorAll('.number').length > 0) {
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.number');
    const speed = 200;

    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target')) || 0;
      const hasPlus = counter.getAttribute('data-plus') === "true";
      const hasPercent = counter.getAttribute('data-percent') === "true";
      const hasK = counter.getAttribute('data-k') === "true";
      let count = 0;

      const updateCount = () => {
        const increment = target / speed;
        if (count < target) {
          count += increment;
          const displayValue = Math.ceil(count);
          counter.innerText =
            hasPercent ? `${displayValue}%` :
              hasPlus ? `${displayValue}+` :
                hasK ? `${displayValue}k` : `${displayValue}`;
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText =
            hasPercent ? `${target}%` :
              hasPlus ? `${target}+` :
                hasK ? `${target}k` : `${target}`;
        }
      };
      updateCount();
    });
  });
}

// ================= HEADER FIX =================
if (document.querySelector('.header')) {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 80) header.classList.add('fixed');
    else header.classList.remove('fixed');
  });
}

// ========== DAY TIMER ==========
if (document.getElementById("days")) {
  var timer;
  var compareDate = new Date();
  compareDate.setDate(compareDate.getDate() + 7);

  timer = setInterval(function () {
    timeBetweenDates(compareDate);
  }, 1000);

  function timeBetweenDates(toDate) {
    var now = new Date();
    var difference = toDate.getTime() - now.getTime();
    if (difference <= 0) {
      clearInterval(timer);
    } else {
      var seconds = Math.floor(difference / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);
      hours %= 24; minutes %= 60; seconds %= 60;

      $("#days").text(days);
      $("#hours").text(hours);
      $("#minutes").text(minutes);
      $("#seconds").text(seconds);
    }
  }
}

// ========== MEGA MENU ==========
if ($('.mega-menu-dropdown').length > 0 || $('#v-pills-tab').length > 0) {
  $(document).ready(function ($) {
    $('#v-pills-tab[data-mouse="hover"] a').hover(function () {
      $(this).tab('show');
    });
    $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
      var target = $(e.relatedTarget).attr('href');
      $(target).removeClass('active');
    });

    var hideTimer;
    $('.mega-menu-dropdown').on('mouseenter', function () {
      clearTimeout(hideTimer);
      $('.dropdown-menu').show();
    }).on('mouseleave', function () {
      hideTimer = setTimeout(function () {
        $('.dropdown-menu').hide();
      }, 200);
    });
    $('.dropdown-menu').on('mouseenter', function () {
      clearTimeout(hideTimer);
    }).on('mouseleave', function () {
      $(this).hide();
    });
  });
}

// ========== CLICK MEGA MENU ==========
document.addEventListener("DOMContentLoaded", function () {
  const tabContainer = document.querySelector("#v-pills-tabContent"); // parent of tab panes
  const tabs = document.querySelectorAll(".mega-menu-tab-link[data-toggle='pill']"); // only real tabs
  const tabContents = tabContainer ? tabContainer.querySelectorAll(".tab-pane") : [];

  // Handle tab clicks
  tabs.forEach(tab => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      // remove active from all tab buttons
      tabs.forEach(t => t.classList.remove("active"));
      this.classList.add("active");

      // reset tab panes
      if (tabContents.length > 0) {
        tabContents.forEach(content => content.classList.remove("show", "active"));

        const targetContent = tabContainer.querySelector(this.getAttribute("href"));
        if (targetContent) targetContent.classList.add("show", "active");
      }
    });
  });

  // Handle normal links (no data-toggle)
  const normalLinks = document.querySelectorAll(".mega-menu-tab-link:not([data-toggle])");
  normalLinks.forEach(link => {
    link.addEventListener("click", function () {
      // remove active from all tabs only, not from links
      tabs.forEach(t => t.classList.remove("active"));
    });
  });
});


// if (document.querySelectorAll("#v-pills-tabContent .tab-pane").length > 0) {
//   document.addEventListener("DOMContentLoaded", function () {
//     const tabContainer = document.querySelector("#v-pills-tabContent"); // specific parent
//     const tabs = document.querySelectorAll(".mega-menu-tab-link"); // your tab buttons
//     const tabContents = tabContainer.querySelectorAll(".tab-pane"); // only inside this parent

//     tabs.forEach(tab => {
//       tab.addEventListener("click", function (e) {
//         e.preventDefault();

//         tabs.forEach(t => t.classList.remove("active"));
//         this.classList.add("active");

//         // affect only tab panes inside #v-pills-tabContent
//         tabContents.forEach(content => content.classList.remove("show", "active"));

//         const targetContent = tabContainer.querySelector(this.getAttribute("href"));
//         if (targetContent) targetContent.classList.add("show", "active");
//       });
//     });
//   });
// }

// // remove active
// document.querySelectorAll('.mega-menu-tab-link[href]').forEach(link => {
//   link.addEventListener('click', function (e) {
//     if (!this.hasAttribute('data-toggle')) {
//       document.querySelectorAll('.mega-menu-tab-link').forEach(l => l.classList.remove('active'));
//     }
//   });
// });
// ========== BANNER SWIPER ==========
if ($('.swiper-container-h').length > 0) {
  if (document.querySelector(".swiper-container-h")) {
    new Swiper(".swiper-container-h", {
      direction: "horizontal",
      effect: "slide",
      autoplay: { delay: 3000, disableOnInteraction: false },
      parallax: true,
      speed: 1600,
      rtl: true,
      loop: true,
      loopFillGroupWithBlank: true,
      keyboard: { enabled: true, onlyInViewport: true },
      scrollbar: { el: ".swiper-scrollbar", hide: false, draggable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      pagination: { el: ".swiper-pagination", type: "progressbar" }
    });
  }
}
// ---------------vdo career
// $('#play-video').on('click', function(e){
//   e.preventDefault();
//   $('#video-overlay').addClass('open');
//   $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
// });

// $('.video-overlay, .video-overlay-close').on('click', function(e){
//   e.preventDefault();
//   close_video();
// });

// $(document).keyup(function(e){
//   if(e.keyCode === 27) { close_video(); }
// });

// function close_video() {
//   $('.video-overlay.open').removeClass('open').find('iframe').remove();
// };
if ($('.happy-family-carousel').length > 0) {
  $(document).ready(function () {
    $(".happy-family-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      navText: ["←", "→"],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 3
        }
      }
    });
  });
}

if ($('.case-carousel').length > 0) {
  $(document).ready(function () {
    $(".case-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      navText: ["←", "→"],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        1024: {
          items: 1
        }
      }
    });
  });
}

if ($('.searchable-select').length > 0) {
  $(document).ready(function () {
    $('.searchable-select').select2({
      placeholder: "Select or search course",
      allowClear: true
    });
  });

}

// --------------
if ($('.checkbox').length > 0) {
  const checkbox = document.getElementById("checkbox")
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
  })
}

// -----------exam page
$(function () {
  // ========== Form-select-option ========== //
  $(".step_1").on('click', function () {
    $(".step_1").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_2").on('click', function () {
    $(".step_2").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_3").on('click', function () {
    $(".step_3").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_4").on('click', function () {
    $(".step_4").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_5").on('click', function () {
    $(".step_5").removeClass("active");
    $(this).addClass("active");
  });

});

// --------------------------------------
var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("multisteps_form_panel");

  // ✅ Safety check to prevent undefined error
  if (n < 0 || n >= x.length) return;

  // Show the current tab
  x[n].style.display = "block";

  // Handle Prev button
  if (n === 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  // Handle Next button text
  if (n === (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next Question";
  }

  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("multisteps_form_panel");

  // ✅ Prevent error if currentTab is invalid
  if (currentTab < 0 || currentTab >= x.length) return;

  // Validation check
  if (n === 1 && !validateForm()) return false;

  // Hide current tab
  x[currentTab].style.display = "none";

  // Update current tab index
  currentTab = currentTab + n;

  // If reached the end → submit form
  if (currentTab >= x.length) {
    document.getElementById("wizard").submit();
    return false;
  }

  // Otherwise show next tab
  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("multisteps_form_panel");

  // ✅ Prevent error if no panels
  if (currentTab < 0 || currentTab >= x.length) return false;

  y = x[currentTab].getElementsByTagName("input");

  for (i = 0; i < y.length; i++) {
    if (y[i].value.trim() === "") {
      y[i].classList.add("invalid"); // cleaner than += " invalid"
      valid = false;
    }
  }

  if (valid) {
    var steps = document.getElementsByClassName("step");
    if (steps[currentTab]) {
      steps[currentTab].classList.add("finish");
    }
  }
  return valid;
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
  if (x[n]) {
    x[n].classList.add("active");
  }
}


// var currentTab = 0; 
// showTab(currentTab); 

// function showTab(n) {

//   var x = document.getElementsByClassName("multisteps_form_panel");
//   x[n].style.display = "block";

//   if (n == 0) {
//     document.getElementById("prevBtn").style.display = "none";
//   } else {
//     document.getElementById("prevBtn").style.display = "inline";
//   }
//   if (n == (x.length - 1)) {
//     document.getElementById("nextBtn").innerHTML = "Submit";
//   } else {
//     document.getElementById("nextBtn").innerHTML = "Next Question";
//   }

//   fixStepIndicator(n)
// }

// function nextPrev(n) {

//   var x = document.getElementsByClassName("multisteps_form_panel");

//   if (n == 1 && !validateForm()) return false;

//   x[currentTab].style.display = "none";

//   currentTab = currentTab + n;

//   if (currentTab >= x.length) {

//     document.getElementById("wizard").submit();
//     return false;
//   }

//   showTab(currentTab);
// }

// function validateForm() {accordion-button

//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("multisteps_form_panel");
//   y = x[currentTab].getElementsByTagName("input");

//   for (i = 0; i < y.length; i++) {
//     // If a field is empty...
//     if (y[i].value == "") {

//       y[i].className += " invalid";

//       valid = false;
//     }
//   }

//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid;
// }

// function fixStepIndicator(n) {
//   var i, x = document.getElementsByClassName("step");
//   for (i = 0; i < x.length; i++) {
//     x[i].className = x[i].className.replace(" active", "");
//   }
//   x[n].className += " active";
// }


// ================= FANCYBOX =================
if (typeof $ !== "undefined" && typeof $.fancybox !== "undefined") {
  $(document).ready(function () {
    if ($('[data-fancybox="gallery"]').length > 0) {
      $('[data-fancybox="gallery"]').fancybox({
        buttons: [
          "slideShow",
          "thumbs",
          "zoom",
          "fullScreen",
          "share",
          "close"
        ],
        loop: false,
        protect: true
      });
    }
  });
}

// ------------------------
// Example: Fetch values passed from quiz page (could be via query params or localStorage)
// const userName = localStorage.getItem("userName") || "Monalisha Dash";
// const totalQuestions = localStorage.getItem("totalQuestions") || 20;
// const totalAttempted = localStorage.getItem("totalAttempted") || 0;
// const scorePercent = localStorage.getItem("scorePercent") || "0%";

// document.getElementById("userName").innerText = userName;
// document.getElementById("totalQuestions").innerText = totalQuestions;
// document.getElementById("totalAttempted").innerText = totalAttempted;
// document.getElementById("scorePercent").innerText = scorePercent;

// // Download result
// function downloadResult() {
//   const resultData = `
//     Name: ${userName}
//     Total Questions: ${totalQuestions}
//     Attempted: ${totalAttempted}
//     Score: ${scorePercent}
//   `;
//   const blob = new Blob([resultData], { type: "text/plain" });
//   const link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = "mock_test_result.txt";
//   link.click();
// }

// --------Hamburger

const menuBtn = document.querySelector(".menu-icon");
const hamenu = document.querySelector(".hamenu");
const closeBtn = document.querySelector(".close-btn");

// Toggle menu when clicking the menu icon
menuBtn?.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
  hamenu.classList.toggle("open");
});

// Close menu when clicking the close button
if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    menuBtn.classList.remove("open");
    hamenu.classList.remove("open");
  });
}

// Dropdown menu logic
// const dropdownMenus = document.querySelectorAll('.dmenu');

// dropdownMenus.forEach(dmenu => {
//   dmenu.addEventListener('click', function () {
//     // Find the correct submenu (not necessarily next sibling)
//     const parentLi = this.closest('li');
//     const submenu = parentLi.querySelector('.ham-sub-menu');

//     if (submenu) {
//       // Optional: Close other submenus
//       document.querySelectorAll('.ham-sub-menu').forEach(menu => {
//         if (menu !== submenu) {
//           menu.classList.remove('open');
//         }
//       });

//       submenu.classList.toggle('open');
//     }
//   });
// });

// Dropdown menu logic
const dropdownMenus = document.querySelectorAll('.dmenu');
const hamSubMenus = document.querySelectorAll('.ham-sub-menu');
const hamMenu = document.querySelector('.hamenu');

// Handle dropdown toggle
  dropdownMenus.forEach(dmenu => {
  dmenu.addEventListener('click', function () {
    const parentLi = this.closest('li');
    const submenu = parentLi.querySelector('.ham-sub-menu');

    if (submenu) {
      // Close other submenus
      hamSubMenus.forEach(menu => {
        if (menu !== submenu) {
          menu.classList.remove('open');
        }
      });

      submenu.classList.toggle('open');
    }
  });
});

// When menu is closed → close all submenus too
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    hamMenu.classList.remove('open'); // assuming you toggle .open for hamenu
    hamSubMenus.forEach(menu => menu.classList.remove('open'));
  });
}

// ----footer tab
document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll('.footer .accordion-header');

    headers.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;

        // Close all other items in footer
        document.querySelectorAll('.footer .accordion-item').forEach(i => {
          if (i !== item) {
            i.classList.remove('active');
          }
        });

        // Toggle the clicked item
        item.classList.toggle('active');
      });
    });
  });

// ===================course tab

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        // get all sections that are linked in the nav
        var sections = document.querySelectorAll(
            "#about-course, #curriculum, #faq-section, #learning-outcomes, #exam-details, #target-audience, #Pre-requisites"
        );

        sections.forEach(function (section) {
            var rect = section.getBoundingClientRect();

            if (rect.top <= 80 && rect.bottom > 80) {  // offset = 80px for navbar height
                var id = section.getAttribute("id");
                var activeLink = document.querySelector(".course-details-navlist a[href='#" + id + "']");
                if (activeLink) {
                    document.querySelectorAll(".course-details-navlist li a").forEach(function (link) {
                        link.classList.remove("active");
                    });
                    activeLink.classList.add("active");
                }
            }
        });
    });

    // Insert <br> after first word inside elements with class "training-mode"
    let tdElements = document.querySelectorAll('.training-mode');
    tdElements.forEach(tdElement => {
        let textContent = tdElement.textContent.trim();
        let words = textContent.split(" ");
        if (words.length >= 2) {
            words.splice(1, 0, "<br>");
            tdElement.innerHTML = words.join(" ");
        }
    });
});



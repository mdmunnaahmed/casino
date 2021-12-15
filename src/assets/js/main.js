'user strict';

// Preloader
$(window).on('load', function () {
    $('.preloader').fadeOut(1000);
});


//Menu Dropdown
$("ul>li>.sub-menu").parent("li").addClass("has-sub-menu");

$('.menu li a').on('click', function () {
  var element = $(this).parent('li');
  if (element.hasClass('open')) {
    element.removeClass('open');
    element.find('li').removeClass('open');
    element.find('ul').slideUp(300, "swing");
  } else {
    element.addClass('open');
    element.children('ul').slideDown(300, "swing");
    element.siblings('li').children('ul').slideUp(300, "swing");
    element.siblings('li').removeClass('open');
    element.siblings('li').find('li').removeClass('open');
    element.siblings('li').find('ul').slideUp(300, "swing");
  }
});

// Responsive Menu
var headerTrigger = $('.header-trigger');
headerTrigger.on('click', function(){
    $('.menu, .header-trigger').toggleClass('active')
    $('.overlay').toggleClass('active')
});

var headerTrigger2 = $('.top-bar-trigger');
headerTrigger2.on('click', function(){
    $('.header-top').toggleClass('active')
    $('.overlay').addClass('active')
    $('.overlay').removeClass('active')
});

// Overlay Event
var over = $('.overlay');
over.on('click', function() {
  $('.overlay').removeClass('overlay-color')
  $('.overlay').removeClass('active')
  $('.menu, .header-trigger').removeClass('active')
  $('.header-top').removeClass('active')
  $('.dashboard__sidebar').removeClass('active')
})


// // Sticky Menu
// window.addEventListener('scroll', function(){
//   var header = document.querySelector('.header-bottom');
//   header.classList.toggle('sticky', window.scrollY > 0);
// });

// Nice Select
// $('.nice-select').niceSelect();

// Scroll To Top 
var scrollTop = $(".scrollToTop");
$(window).on('scroll', function () {
  if ($(this).scrollTop() < 500) {
    scrollTop.removeClass("active");
  } else {
    scrollTop.addClass("active");
  }
});

//Click event to scroll to top
$('.scrollToTop').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 300);
  return false;
});


$('.header-top-trigger').on('click', function() {
  var e = $('.header-top')
  if(e.hasClass('active')) {
    $('.header-top').removeClass('active')
    $('.overlay').removeClass('active')
  }else {
    $('.header-top').addClass('active')
    $('.overlay').addClass('active')
  }
})

$('.feature__slider').slick({
  fade: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  centerMode: false,
  dots: false,
  arrows: true,
  nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
  prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    },

  ]
});
$('.plan__slider').slick({
  fade: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  centerMode: false,
  dots: false,
  arrows: true,
  nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
  prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    },

  ]
});

$('.brand__slider').slick({
  fade: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  centerMode: false,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      }
    },

  ]
});

// Odometer Counter
$(".counter__item, .dashboard__card__item").each(function () {
  $(this).isInViewport(function (status) {
    if (status === "entered") {
      for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
        var el = document.querySelectorAll('.odometer')[i];
        el.innerHTML = el.getAttribute("data-odometer-final");
      }
    }
  });
});

//Faq
$('.faq__item-title').on('click', function (e) {
  var element = $(this).parent('.faq__item');
  if (element.hasClass('open')) {
    element.removeClass('open');
    element.find('.faq__item-content').removeClass('open');
    element.find('.faq__item-content').slideUp(300, "swing");
  } else {
    element.addClass('open');
    element.children('.faq__item-content').slideDown(300, "swing");
    element.siblings('.faq__item').children('.faq__item-content').slideUp(300, "swing");
    element.siblings('.faq__item').removeClass('open');
    element.siblings('.faq__item').find('.faq-title').removeClass('open');
    element.siblings('.faq__item').find('.faq__item-content').slideUp(300, "swing");
  }
});


$('.user-thumb').on('click', function() {
  $('.dashboard__sidebar').addClass('active')
  $('.overlay').addClass('active')
})

$('.btn-close, .overlay').on('click', function() {
  $('.dashboard__sidebar').removeClass('active')
  $('.overlay').removeClass('active')
})

$('.video-button').magnificPopup({
  type: 'iframe'
  // other options
});

$(window).on(('load'), function(){
  // filter functions
  var $gallery = $(".game-wrapper");
  var filterFns = {};
  $gallery.isotope({
    itemSelector: '.game-item',
    masonry: {
      columnWidth: 0,
    }
  });
  // bind filter button click
  $('ul.filter').on('click', 'li', function () {
    $('ul.filter li').removeClass('active');
    $(this).addClass('active');
    var filterValue = $(this).attr('data-filter');
    filterValue = filterFns[filterValue] || filterValue;
    $gallery.isotope({
      filter: filterValue
    });
  });
})

$(document).ready(function(){
  $(".game-item").slice(0, 4).show();
  $("#game-load").on("click", function(e){
    e.preventDefault();
    $(".game-item:hidden").slice(0, 2).slideDown();
    if($(".game-item:hidden").length == 0) {
      $("#game-load").text("No Content").addClass("noContent");
    }
  });
})
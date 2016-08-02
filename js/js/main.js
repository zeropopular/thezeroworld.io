/*!
 * OutSider v1.0.0
 * Copyright 2015, Filip Greksa
 * www.filiponline.tk
 * 18/05/2015
 */

// -----------------------------
// Preloader
// -----------------------------
$(window).load(function () { 
    $('.preloader').fadeOut(1200);
});

 // function heightTrigger: This sets height of the element (.item) considering to width
(function( $ ){
   $.fn.heightTrigger = function() {
        var squareWidth = $(".item").width();
        $(".square").css('height', squareWidth);
        $(".rectangle").css('height', squareWidth*1.5);
        $(".rectangle-big").css('height', squareWidth*2);
   }; 
})( jQuery );

// function imgTrigger: change image to centered background 
(function( $ ){
    $.fn.imgTrigger = function() {
        var trig = '.img-trigger';
        var imgSrc = $(this).children('img').attr('src');
        $(this).css('background', 'url("' + imgSrc + '")');
        $(this).children('img').hide();
        $(this).css('background-position', '50% 0%');
    }; 
})( jQuery );

// Call heightTrigger
$('.item').heightTrigger();
// Call imgTrigger
$('.img-trigger').each(function() {
    $(this).imgTrigger();
});

// -----------------------------
// Navbar fade
// -----------------------------
$(document).ready(function() {
    var navbar = $('.navbar');
    if (navbar.hasClass("is-transparent")) {
        $(window).scroll(function() {
            if (navbar.offset().top > 250) {
                navbar.removeClass("is-transparent");                
            } else {
                navbar.addClass("is-transparent");
            }
        });
    } else {
        return;
    }
});

// -----------------------------
// Isotope filtering
// -----------------------------
$(function(){
    var $container = $('.masonry');
    // init
    $container.imagesLoaded( function() {
        $container.isotope({ 
            itemSelector: ".item",
            transitionDuration: '0.8s',
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            },
            masonry: {
                columnWidth: ".grid-sizer",
                gutter: ".gutter-sizer"
            }
        });
    });
    // infiniteScroll
    $container.infinitescroll({
        navSelector  : '.content-nav .pager',    // selector for the paged navigation 
        nextSelector : '.content-nav .pager a',  // selector for the NEXT link (to page 2)
        itemSelector : '.item',     // selector for all items you'll retrieve
        loading: {
            finishedMsg: 'No more pages to load.',
            msgText: "Loading the next set of posts...",
            img: 'img/svg/ring.svg',
            speed: 'slow'
          }
        },
        // call Isotope as a callback
        function( newElements ) {
            var $newElems = $( newElements ).css({ opacity: 0 });
            $newElems.imagesLoaded(function(){
                $newElems.animate({ opacity: 1 });
                $(this).heightTrigger();
                $('.img-trigger').each(function() {
                    $(this).imgTrigger();
                });
                $container.isotope( 'appended', $( newElements ) );
            });
        }
      );
    // filter items when filter link is clicked
    $('#filter a').click(function(){
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });
});

// -----------------------------
// Slick
// -----------------------------
$(document).ready(function () {
    $('.slider').slick({
        slide: 'ul>li',
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true
    });
});

// -----------------------------
// Twitter
// -----------------------------
$(document).ready(function () {
    $(".twitter-feed").tweet({
        join_text: "auto",
        username: ["envato"],
        modpath: "php/twitter/",
        count: 6,
        loading_text: "loading ...",
        template: "{text}{time}{user}",        
        auto_join_text_default: " ", //We said,
        auto_join_text_ed: " ", //We 
        auto_join_text_ing: " ", //We were 
        auto_join_text_reply: " ", //We replied 
        auto_join_text_url: " " //We were checking out 
    });
 
    //Carousel for tweets
    $('.tweet_list').slick({  
        fade: false,
        slide: 'ul>li',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    });
});

// -----------------------------
// Tooltip
// -----------------------------
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();    
});

// -----------------------------
// ScrollTop
// -----------------------------
$(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > $(window).height() *0.7 ) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
		}
	});
	//Click event to scroll to top
	$('.scroll-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});	

// -----------------------------
// Leave Comment fadeToggle
// -----------------------------
$(document).ready(function(){
    $("#comment-fade").click(function(){
        $("#reply-form").fadeToggle();
    });
});

// -----------------------------
// Filter to Dropdown in xs
// ----------------------------
$(document).ready(function(){
    // Create the dropdown base
    $("<label><select />").appendTo(".filter");
    // Populate dropdown with menu items
    $("#filter a").each(function() {
        var el = $(this);
        $("<option />", {
            "data-filter"   : el.attr("data-filter"),
            "text"    : el.text()
        }).appendTo(".filter select");
    });
    // To make dropdown actually work
    $(".filter select").change(function() {
        var selector = $(".filter select option:selected").attr('data-filter');
        $('.masonry').isotope({ filter: selector });
        return false;
    });
});	

// -----------------------------
// Magnific Popup
// ----------------------------
$('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    removalDelay: 0,
    mainClass: 'mfp-fade',
    closeBtnInside: false,
    closeMarkup: '<button title="%title%" class="mfp-close"><i class="icon icon-remove"></i></button>'
});


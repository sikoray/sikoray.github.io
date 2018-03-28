( function($) {
  
  $(document).ready(function() {
    
    var s           = $('.slider'),
        sWrapper    = s.find('.slider-wrapper'),
        sItem       = s.find('.slide'),
        btn         = s.find('.slider-link'),
        sWidth      = sItem.width(),
        sCount      = sItem.length,
        slide_date  = s.find('.slide-date'),
        slide_title = s.find('.slide-title'),
        slide_text  = s.find('.slide-text'),
        slide_more  = s.find('.slide-more'),
        slide_image = s.find('.slide-image img'),
        sTotalWidth = sCount * sWidth;
    
    sWrapper.css('width', sTotalWidth);
    sWrapper.css('width', sTotalWidth);
    
    var clickCount  = 0;
    
    btn.on('click', function(e) {
      e.preventDefault();

      if( $(this).hasClass('next') ) {
        
        ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
      } else if ( $(this).hasClass('prev') ) {
        
        ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
      }
      TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })


      //CONTENT ANIMATIONS

      var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
      var toProperties = {autoAlpha:0.8, x:'0', y:'0'};

      TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
      TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
      TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
      TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
      TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

    });
          
  });
})(jQuery);

$('.overlay').addClass('overlay-blue');

$(function() {/*
    $(document).ready(function() {
  
  var $slider = $(".slider"),
      $slideBGs = $(".slide__bg"),
      diff = 0,
      curSlide = 0,
      numOfSlides = $(".slide").length-1,
      animating = false,
      animTime = 500,
      autoSlideTimeout,
      autoSlideDelay = 6000,
      $pagination = $(".slider-pagi");
  
  function createBullets() {
    for (var i = 0; i < numOfSlides+1; i++) {
      var $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-"+i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  };
  
  createBullets();
  
  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
  };
  
  function autoSlide() {
    autoSlideTimeout = setTimeout(function() {
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  };
  
  autoSlide();
  
  function changeSlides(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-"+curSlide).addClass("active");
      setTimeout(function() {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoSlideTimeout);
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-"+curSlide).addClass("active");
    $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
    $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
    diff = 0;
    autoSlide();
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function(e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = $(window).width();
    diff = 0;
    
    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
      $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
      $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
    });
  });
  
  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-control", function() {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-pagi__elem", function() {
    curSlide = $(this).data("page");
    changeSlides();
  });
  
});*/
});



  
  // ===== service slider =======
  $('.gallery-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      prevArrow: '<span class="arrow prev_arrow"><i class="fas fa-angle-left"></i></span>',
      nextArrow: '<span class="arrow next_arrow"><i class="fas fa-angle-right"></i></span>',
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
  });
  
  
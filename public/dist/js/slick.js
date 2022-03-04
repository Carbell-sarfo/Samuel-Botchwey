$(".gallery-container").slick({
    infinite: true,
    autoplay: true,
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    pauseOnDotsHover: true,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-circle-chevron-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-circle-chevron-right"></i></button>',

    responsive: [
     
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
    
  });
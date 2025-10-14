  $(document).ready(function(){
    $('.hero-slider').slick({
      dots: false,
      arrows: false,
      infinite: false
    });
    $('.prev-arrow').click(function(){
      $('.hero-slider').slick('slickPrev');
    });
    $('.next-arrow').click(function(){
      $('.hero-slider').slick('slickNext');
    });
  });


$(document).ready(function(){
  $('.blog-slider').slick({
    slidesToShow: 3,        // Desktop: 3 slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,   // Tablet and smaller
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,    // Mobile
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
    // 👉 Slide ke beech space JS se
  $('.blog-slider .slick-slide').css({
    'margin': '0 10px'
  });
  $('.blog-slider .slick-list').css({
    'margin': '0 -10px'
  });
});

$(document).ready(function(){
  $('.testi-slider').slick({
    slidesToShow: 2,        // Desktop: 3 slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,   // Tablet and smaller
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,    // Mobile
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
    // 👉 Slide ke beech space JS se
  $('.testi-slider .slick-slide').css({
    'margin': '0 10px',
    'padding':'10px'
  });
  $('.testi-slider .slick-list').css({
    'margin': '0 -10px'
  });
});


  function animateCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target'); // 85 or 50

      const updateCount = () => {
        let count = +counter.innerText.replace('K+', '');
        let increment = Math.ceil(target / 100); // Speed

        if(count < target) {
          counter.innerText = count + increment + "K+";
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + "K+";
        }
      };

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            updateCount();
            observer.unobserve(counter);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(counter);
    });
  }

  document.addEventListener('DOMContentLoaded', animateCounters);


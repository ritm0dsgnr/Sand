$(function() {
    
$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop:  blockOffset
    }, 600);
});

$(".burger").on("click", function(event) {
    $(".burger").toggleClass("active");
    $(".burger__nav").toggleClass("active");
    $(".burger_nav__link").toggleClass("active");
    $("body").toggleClass("lock");
});

$(".burger_nav__link").on("click", function(event) {
    $(".burger").removeClass("active");
    $(".burger__nav").removeClass("active");
    $(".burger_nav__link").removeClass("active");
    $("body").removeClass("lock");
});

$("[data-slider]").slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
    breakpoint: 1400,
    settings: {
    slidesToShow: 3,
    slidesToScroll: 1,
    }
    },
    {
    breakpoint: 1050,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true
    }
    },
    
    ]
});

function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
        change.target.classList.add('anim-show');
    }
   
    });
    }
    let options = {
      threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.anim');

    for (let elm of elements) {
      observer.observe(elm);
    }
    });




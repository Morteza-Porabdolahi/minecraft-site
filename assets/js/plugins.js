$(document).ready(function () {
    // -------- change text -------------//
    let texts = ['B', 'Be', 'Bes', 'Best', 'Best P', 'Best Pl', 'Best Plu', 'Best Plug', 'Best Plugi', 'Best Plugin', 'Best Plugins', 'Best Plugins', 'Best Plugins Fo', 'Best Plugins For', 'Best Plugins For Y', 'Best Plugins For Yo', 'Best Plugins For You', 'Best Plugins For Your', 'Best Plugins For Your S', 'Best Plugins For Your Se', 'Best Plugins For Your Ser', 'Best Plugins For Your Serv', 'Best Plugins For Your Serve', 'Best Plugins For Your Server', 'Best Plugins For Your Serve', 'Best Plugins For Your Serv', 'Best Plugins For Your Ser', 'Best Plugins For Your Se', 'Best Plugins For Your S', 'Best Plugins For Your', 'Best Plugins For You', 'Best Plugins For Yo', 'Best Plugins For Y', 'Best Plugins For', 'Best Plugins Fo', 'Best Plugins F', 'Best Plugins', 'Best Plugin', 'Best Plugi', 'Best Plug', 'Best Plu', 'Best Pl', 'Best P', 'Best', 'Bes', 'Be', 'B']
    let number = 0;
    let html = document.getElementById('txt-rotate');

    function txtRotate() {
        number++;
        if (number >= texts.length) {
            number = 0;
        }
        html.innerHTML = texts[number];
    }
    setInterval(txtRotate, 300);
    // ----------------- menu ---------------- //
    $('#burger-menu').click(function (e) {
        $('.header-list').toggleClass('flex');
        if ($('.header-list').hasClass('flex')) {
            $('.burger').addClass('fa-times');
        } else {
            $('.burger').addClass('fa-bars');
        }
    });
    // -----------------------------------------//
    let SlidersLength = document.getElementsByClassName('slider-page').length;
    let nextSlidetButton = document.getElementById('next-btn');
    let prevSlideButton = document.getElementById('prev-btn');
    let dots = document.getElementsByClassName('dot');
    let index = 0;

    function nextSlide() {
        $('.slider-page:first-child').appendTo('.slider-body');
        index++;
        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }
        if (index >= dots.length) {
            index = 0;
        }
        dots[index].classList.add('active');
    }

    function prevSlide() {
        $('.slider-page:last-child').prependTo('.slider-body');
        index--;
        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }
        if (index < 0) {
            index = 2;
        }
        dots[index].classList.add('active');
    }

    nextSlidetButton.addEventListener('click', function () {
        nextSlide();
    });
    prevSlideButton.addEventListener('click', function () {
        prevSlide();
    });
});
//------------- Category Dropdown ----------------//
$('.category-toggle').click(function (e) { 
    var hasClass = $(this).hasClass('category-toggle-active');
    $('.category-toggle').removeClass('category-toggle-active');
    $('.category-toggle').children('.angle').addClass('zmdi-chevron-right');
    $('.category-toggle').children('.angle').removeClass('zmdi-chevron-down');
    if(hasClass){
        $(this).removeClass('category-toggle-active');
        $(this).children('.angle').addClass('zmdi-chevron-right');
        $(this).children('.angle').removeClass('zmdi-chevron-down');
        $('.category-section-search').css({
            'padding' : '6.55rem 1rem',
        });
    }else{
        $(this).addClass('category-toggle-active');
        $(this).children('.angle').removeClass('zmdi-chevron-right');
        $(this).children('.angle').addClass('zmdi-chevron-down');
        $('.category-section-search').css({
            'padding' : '1.2rem 1rem',
        });
    }
});
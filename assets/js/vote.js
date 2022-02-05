// -------- change text -------------//
let texts = ['V','Vo','Vot','Vote','Vote S','Vote Se','Vote Ser','Vote Serv','Vote Serve','Vote Server','Vote Server T','Vote Server To','Vote Server To G','Vote Server To Ge','Vote Server To Get','Vote Server To Get I','Vote Server To Get It','Vote Server To Get Ite','Vote Server To Get Item','Vote Server To Get Items']
let number = 0;
let html = document.getElementById('txt-rotate');

function txtRotate() {
    number++;
    if (number >= texts.length) {
        texts.reverse();
        number = 0;
    }
    html.innerHTML = texts[number];
}
setInterval(txtRotate, 300);
// ----------------- menu ---------------- //
$('#burger-menu').click(function (e) {
    $('.header-list').toggleClass('flex');
    if ($('.header-list').hasClass('flex')) {
        $('.burger').addClass('zmdi-sort-amount-asc');
        $('.burger').removeClass('zmdi-menu');
    } else {
        $('.burger').addClass('zmdi-menu');
        $('.burger').removeClass('zmdi-sort-amount-asc');
    }
});
// -----------------------------------------//
var backToTopButton = document.getElementById('scroll-top-button');
window.onscroll = function styleButton() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
}
backToTopButton.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
$('#account-buy-btn').click(function (e) {
    $('body').css({ 'overflow': 'hidden' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $('#account-buy-modal').css({
        'display': 'flex',
        'opacity': 0,
    }).animate({ 'opacity': 1 }, 200);
});
$('.hide-modal').click(function (e) {
    $('body').css({ 'overflow': 'auto' });
    $('#account-buy-modal').css({
        'display': 'none',
        'opacity': 1,
    }).animate({ 'opacity': 0 }, 400);
});

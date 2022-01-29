// -------- change text -------------//
let texts = ['D', 'De', 'Del', 'Delt', 'Delta', 'Delta M', 'Delta Mi', 'Delta Min', 'Delta Mine', 'Delta Minec', 'Delta Minecr', 'Delta Minecra', 'Delta Minecraf', 'Delta Minecraft', 'Delta Minecraft S', 'Delta Minecraft Se', 'Delta Minecraft Ser', 'Delta Minecraft Serv', 'Delta Minecraft Serve', 'Delta Minecraft Server', 'Delta Minecraft Serve', 'Delta Minecraft Serv', 'Delta Minecraft Ser', 'Delta Minecraft Se', 'Delta Minecraft S', 'Delta Minecraft', 'Delta Minecraf', 'Delta Minecra', 'Delta Minecr', 'Delta Minec', 'Delta Mine', 'Delta Min', 'Delta Mi', 'Delta M', 'Delta', 'Delt', 'Del', 'De', 'D'];
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
// -------- Slider ------------- //
var index = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName('slider-img');
  var dots = document.getElementsByClassName('dots');
  var texts = document.getElementsByClassName('game-mod-description');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  for (i = 0; i < texts.length; i++) {
    texts[i].style.display = 'none';
  }
  index++;
  if (index > slides.length) {
    index = 1;
  }
  slides[index - 1].style.display = 'block';
  dots[index - 1].className += ' active';
  texts[index - 1].style.display = 'block';
  setTimeout(showSlides, 7000);
}
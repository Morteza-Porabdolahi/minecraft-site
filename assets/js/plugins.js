// -------- change text -------------//
let texts = ['B', 'Be', 'Bes', 'Best', 'Best P', 'Best Pl', 'Best Plu', 'Best Plug', 'Best Plugi', 'Best Plugin', 'Best Plugins', 'Best Plugins F', 'Best Plugins Fo', 'Best Plugins For', 'Best Plugins For Y', 'Best Plugins For Yo', 'Best Plugins For You', 'Best Plugins For Your', 'Best Plugins For Your S','Best Plugins For Your Se','Best Plugins For Your Ser','Best Plugins For Your Serv','Best Plugins For Your Serve','Best Plugins For Your Server','Best Plugins For Your Serve','Best Plugins For Your Serv','Best Plugins For Your Ser','Best Plugins For Your Se','Best Plugins For Your S','Best Plugins For Your','Best Plugins For You','Best Plugins For Yo','Best Plugins For Y','Best Plugins For','Best Plugins Fo','Best Plugins F','Best Plugins','Best Plugin','Best Plugi','Best Plug','Best Plu','Best Pl','Best P','Best','Bes','Be','B']
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
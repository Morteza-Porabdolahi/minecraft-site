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
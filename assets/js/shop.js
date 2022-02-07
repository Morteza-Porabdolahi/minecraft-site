// -------- change text -------------//
let texts = ['P', 'Pu', 'Pur', 'Purc', 'Purch', 'Purcha', 'Purchas', 'Purchase', 'Purchase S', 'Purchase Se', 'Purchase Ser', 'Purchase Serv', 'Purchase Serve', 'Purchase Server', 'Purchase Server R', 'Purchase Server Ra', 'Purchase Server Ran', 'Purchase Server Rank', 'Purchase Server Ranks'];
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

function mouseOver(i) {
    i.style.backgroundColor = "white";
    i.style.color = "#008080";

    let pBefore = i.previousElementSibling;
    let pAfter = i.nextElementSibling;

    if (pBefore && pBefore.tagName.toLowerCase() === 'p') {
        pBefore.style.backgroundColor = "white";
        pBefore.style.padding.color = "white";
        pBefore.classList.add('active-separator');
    }

    if (pAfter && pAfter.tagName.toLowerCase() === 'p') {
        pAfter.style.backgroundColor = "white";
        pAfter.classList.add('active-separator');
    }

    const elem1 = document.getElementById('li-menu-1');
    const bg1 = getComputedStyle(elem1).backgroundColor;

    const elem2 = document.getElementById('li-menu-2');
    const bg2 = getComputedStyle(elem2).backgroundColor;

    const elem3 = document.getElementById('li-menu-3');
    const bg3 = getComputedStyle(elem3).backgroundColor;
    
    const elem4 = document.getElementById('li-menu-4');
    const bg4 = getComputedStyle(elem4).backgroundColor;

    const elem5 = document.getElementById('li-menu-5');
    const bg5 = getComputedStyle(elem5).backgroundColor;

    const elem6 = document.getElementById('li-menu-6');
    const bg6 = getComputedStyle(elem6).backgroundColor;

    if (bg1 === "rgb(255, 255, 255)") {
        document.getElementById('li-opened-1').innerText = "עשור לישיבה";
        document.getElementById('li-opened-2').innerText = "";
        document.getElementById('li-opened-3').innerText = "";
        document.getElementById('li-opened-4').innerText = "";
    } else if (bg2 === "rgb(255, 255, 255)") {
        document.getElementById('li-opened-1').innerText = "מערכת שעות";
        document.getElementById('li-opened-2').innerText = "כיתות מקוונות";
        document.getElementById('li-opened-3').innerText = "המורים והצוות";
        document.getElementById('li-opened-4').innerText = "";
    } else if (bg3 === "rgb(255, 255, 255)"){
        document.getElementById('li-opened-1').innerText = "";
        document.getElementById('li-opened-2').innerText = "";
        document.getElementById('li-opened-3').innerText = "";
        document.getElementById('li-opened-4').innerText = "";
    } else if (bg4 === "rgb(255, 255, 255)") {
        document.getElementById('li-opened-1').innerText = "";
        document.getElementById('li-opened-2').innerText = "";
        document.getElementById('li-opened-3').innerText = "";
        document.getElementById('li-opened-4').innerText = "";
    } else if (bg5 === "rgb(255, 255, 255)") {
        document.getElementById('li-opened-1').innerText = "אלקטרוניקה";
        document.getElementById('li-opened-2').innerText = "הנדסת תוכנה";
        document.getElementById('li-opened-3').innerText = "פיתוח ועיצוב מוצר";
        document.getElementById('li-opened-4').innerText = "מגמת ניו מדיה ופרסום";
    } else if (bg6 === "rgb(255, 255, 255)") {
        document.getElementById('li-opened-1').innerText = "על הישיבה";
        document.getElementById('li-opened-2').innerText = "דבר ראש הישיבה";
        document.getElementById('li-opened-3').innerText = "חזון הישיבה";
        document.getElementById('li-opened-4').innerText = "";
    }
}

function mouseOut(i) {
    i.style.backgroundColor = "#70a33d";
    i.style.color = "white";
    i.style.borderRadius = "0px";

    let pBefore = i.previousElementSibling;
    let pAfter = i.nextElementSibling;

    if (pBefore && pBefore.tagName.toLowerCase() === 'p') {
        pBefore.style.backgroundColor = "transparent";
        pBefore.classList.remove('active-separator');
    }

    if (pAfter && pAfter.tagName.toLowerCase() === 'p') {
        pAfter.style.backgroundColor = "transparent";
        pAfter.classList.remove('active-separator');
    }
}

let i = 2;
function image() {
    document.getElementById('image').src = 'images/image' + i + '.jpg';
    i++;
    if (i >= 7) {
        i = 1;
    }
    
}

function left() {
    i--;
    if(i === 0){
        i = 6;
    }
    document.getElementById('image').src = 'images/image' + i + '.jpg';
}

function right(){
    i++;
    if(i === 7){
        i = 1
    }
    document.getElementById('image').src = 'images/image' + i + '.jpg'
}

setInterval(image, 2500);
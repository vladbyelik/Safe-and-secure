let elem = document.getElementById('img-absolute');
let pos = 38;
let sop = -17;
let id = setInterval(frame, 50);
function frame () {
  if (pos === 51 || sop === -40) {
    clearInterval(id);
  } else {
    pos++;
    sop = sop - 1.75;
    elem.style.left = pos + "px";
    elem.style.top = sop + "px";
  }
}


let tail = document.getElementById('tail');
let wave = 0;
function taleMove () {
  if (wave === 50) {
    clearInterval(time1);
  } else {
    wave++;
    tail.style.transform = "rotateZ(" + wave + "deg)";
  }
}

function taleMoveBack () {
  if (wave === 0) {
    clearInterval(time2);
  } else {
    wave--;
    tail.style.transform = "rotateZ(" + wave + "deg)";
  }
}

let time1 = setInterval(taleMove, 20);
let time2 = setInterval(taleMoveBack, 40);
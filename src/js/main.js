let elem = document.getElementById('img-absolute');
let left = 38;
let top = -17;
let id = setInterval(frame, 50);
function frame () {
  if (left === 51 || top === -40) {
    clearInterval(id);
  } else {
    left++;
    top = top - 1.75;
    elem.style.left = left + "px";
    elem.style.top = top + "px";
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
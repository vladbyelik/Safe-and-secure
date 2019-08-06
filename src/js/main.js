let elem = document.getElementById('img-absolute');
let leftMove = 38;
let upMove = 21;
let id = setInterval(fly, 50);
function fly () {
  if (leftMove === 51 || upMove === -1.75) {
    clearInterval(id);
  } else {
    leftMove++;
    upMove = upMove - 1.75;
    elem.style.left = leftMove + "px";
    elem.style.top = upMove + "px";
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
let elem = document.getElementById('img-absolute');
let pos = 38;
let sop = -17;
let id = setInterval(frame, 40);
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
//your JS code here. If required.
let angle = 0;

function rotateLine() {
  angle += 2;
  document.getElementById('line').style.transform = `rotate(${angle}deg)`;
}

setInterval(rotateLine, 20);

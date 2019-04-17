const start = document.querySelector(".main");
const reset = document.querySelector(".reset");
const clock = document.querySelector(".time div");

let time = 0;
let active = false;
let idI;

function oclock() {
  if (!active) {
    active = !active;
    start.textContent = "Pauza";
    idI = setInterval(letStart, 10);
  } else {
    active = !active;
    start.textContent = "Start";
    clearInterval(idI);
  }
}

const letStart = () => {
  time++;
  clock.textContent = (time / 100).toFixed(2);
};

const rest = () => {
  time = 0;
  clock.textContent = "---";
};
start.addEventListener("click", oclock);
reset.addEventListener("click", rest);

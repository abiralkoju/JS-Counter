const Title = document.querySelector(".title");
let curValue = 0;

const Decrement = document.getElementById("decrement");
const Reset = document.getElementById("reset");
const Increment = document.getElementById("increment");

function changeColor() {
  if (Title.textContent < 0) {
    Title.style.color = "red";
  } else if (Title.textContent > 0) {
    Title.style.color = "green";
  } else {
    Title.style.color = "black";
  }
}

Decrement.addEventListener("click", function () {
  curValue--;
  Title.textContent = curValue;
  changeColor();
});

Reset.addEventListener("click", function () {
  curValue = 0;
  Title.textContent = curValue;
  changeColor();
});

Increment.addEventListener("click", function () {
  curValue++;
  Title.textContent = curValue;
  changeColor();
});

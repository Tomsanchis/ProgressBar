const backprogress = document.querySelector(".barprogress");

function progression(w) {
  backprogress.style.width = `${w}%`;
  backprogress.style.backgroundColor = "red";
}

setTimeout(() => progression(25), 2500);
setTimeout(() => progression(50), 5500);
setTimeout(() => progression(75), 7500);
setTimeout(() => progression(100), 10500);

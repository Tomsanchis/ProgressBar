const backprogress = document.querySelector(".barprogress");

function progression(w) {
  backprogress.style.width = `${w}%`;
  backprogress.style.backgroundColor = "red";
}

setTimeout(() => progression(25), 1000);
setTimeout(() => progression(50), 1000);
setTimeout(() => progression(75), 1000);
setTimeout(() => progression(100), 1000);

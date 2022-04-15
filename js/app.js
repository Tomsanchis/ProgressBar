const backprogress = document.querySelector(".barprogress");
let temp = 0;
let random = Math.floor(Math.random() * (15 - 3) + 3);
console.log(random);
function progression(w) {
  temp = temp + w;
  backprogress.style.width = `${temp}%`;
}

setInterval(() => progression(0.1), random);

const jsInput1 = document.querySelector(".js-input1");
jsInput2 = document.querySelector(".js-input2");
btn = document.querySelector(".btn");
move1 = document.getElementById("move-1");
move2 = document.getElementById("move-2");
move3 = document.getElementById("move-3");
move4 = document.getElementById("move-4");

let result = "";
move1.addEventListener("click", () => {
   result = +jsInput1.value + +jsInput2.value;
   btn.innerHTML = "Ответ: " + result;
});

move2.addEventListener("click", () => {
   result = +jsInput1.value - +jsInput2.value;
   btn.innerHTML = "Ответ: " + result;
});

move3.addEventListener("click", () => {
   result = +jsInput1.value * +jsInput2.value;
   btn.innerHTML = "Ответ: " + result;
});

move4.addEventListener("click", () => {
   result = +jsInput1.value / +jsInput2.value;
   btn.innerHTML = "Ответ: " + result;
});

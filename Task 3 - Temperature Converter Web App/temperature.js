let celciusInput = document.querySelector("#celcius > input");
let fahrenheitInput = document.querySelector("#fahrenheit > input");

let btn = document.querySelector(".buttonBox button");

function roundNumber(num) {
  return Math.round(num * 100) / 100;
}

/* Celcius to Fahrenheit */
celciusInput.addEventListener("input", function () {
  let cel = parseFloat(celciusInput.value);
  let far = cel * (9 / 5) + 32;

  fahrenheitInput.value = roundNumber(far);
});

/* Fahrenheit to Celcius */
fahrenheitInput.addEventListener("input", function () {
  let far = parseFloat(fahrenheitInput.value);
  let cel = (far - 32) * (5 / 9);

  celciusInput.value = roundNumber(cel);
});

btn.addEventListener("click", () => {
  celciusInput.value = "";
  fahrenheitInput.value = "";
});

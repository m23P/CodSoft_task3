let display = document.getElementById("display");

function append(char) {
  if (display.innerText === "0") {
    display.innerText = char;
  } else {
    display.innerText += char;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}

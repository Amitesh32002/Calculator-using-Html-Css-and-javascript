const history_value = document.getElementById("history-value");
const output = document.getElementById("output-value");
btns = document.querySelectorAll("button"); // this is returning array of buttons

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    var clickedBtn = btn.textContent;

    if (clickedBtn === "C") {
      history_value.innerText = " ";
      output.innerText = " ";
    } else if (clickedBtn === "CE") {
      var number = history_value.innerText;
      var numbertoString = number.toString();
      history_value.innerText = numbertoString.substr(
        0,
        numbertoString.length - 1
      );
    } else {
      historyValueScreen(clickedBtn);
      if (clickedBtn === "=") {
        output.innerText = eval(history_value.innerText);
      }
    }
  });
});

const historyValueScreen = (clickedvalue) => {
  if (clickedvalue !== "=") {
    history_value.innerText += clickedvalue;
  }
};

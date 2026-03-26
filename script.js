function isNumeric(val) {
  return !Number.isNaN(Number.parseFloat(val));
}

addEventListener("DOMContentLoaded", () => {
  function updateNumber(text) {
    if (res.textContent === "0") {
      res.textContent = text;
    } else {
      res.textContent += text;
    }
  }

  function updateOperator(operator) {
    if (isNumeric(res.textContent.at(-1))) {
      res.textContent += operator;
    }
  }

  const res = document.getElementById("result");

  const btn0 = document.getElementById("btn0");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const btn4 = document.getElementById("btn4");
  const btn5 = document.getElementById("btn5");
  const btn6 = document.getElementById("btn6");
  const btn7 = document.getElementById("btn7");
  const btn8 = document.getElementById("btn8");
  const btn9 = document.getElementById("btn9");

  const btnDot = document.getElementById("btnDot");

  const btnAdd = document.getElementById("btn+");
  const btnSubtract = document.getElementById("btn-");
  const btnMultiply = document.getElementById("btnX");
  const btnDivide = document.getElementById("btn/");
  const btnPercent = document.getElementById("btn%");

  const btnC = document.getElementById("btnC");
  const btnCalc = document.getElementById("btnCalc");
  const btnInv = document.getElementById("btnInv");

  btn0.onclick = () => updateNumber("0");
  btn1.onclick = () => updateNumber("1");
  btn2.onclick = () => updateNumber("2");
  btn3.onclick = () => updateNumber("3");
  btn4.onclick = () => updateNumber("4");
  btn5.onclick = () => updateNumber("5");
  btn6.onclick = () => updateNumber("6");
  btn7.onclick = () => updateNumber("7");
  btn8.onclick = () => updateNumber("8");
  btn9.onclick = () => updateNumber("9");

  btnDot.onclick = () => {
    if (!res.textContent.includes(".")) {
      res.textContent += ".";
    }
  };

  btnAdd.onclick = () => updateOperator("+");
  btnSubtract.onclick = () => updateOperator("-");
  btnMultiply.onclick = () => updateOperator("*");
  btnDivide.onclick = () => updateOperator("/");
  btnPercent.onclick = () => updateOperator("%");

  btnC.onclick = () => (res.textContent = "0");
  btnCalc.onclick = () => {
    try {
      res.textContent = eval(res.textContent);
    } catch (e) {
      res.textContent = "Error";
      console.log(`Exception while doing something: ${e}`);
    }
  };
  btnInv.onclick = () => {
    try {
      res.textContent = -eval(res.textContent);
    } catch (e) {
      res.textContent = "Error";
      console.log(`Exception while doing something: ${e}`);
    }
  };
});

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

  function hasDot() {
    for (let i = res.textContent.length; i >= 0; i--) {
      if (res.textContent.at(i) === ".") {
        return true;
      } else if (["+", "-", "*", "/"].includes(res.textContent.at(i))) {
        return false;
      }
    }
    return false;
  }

  const res = document.getElementById("result");

  const digit_btns = document.querySelectorAll('[id ^= "btn_digit_"]');
  const operator_btns = document.querySelectorAll('[id ^= "btn_operator_"]');

  digit_btns.forEach((el) => {
    el.onclick = () => updateNumber(el.id.at(-1));
  });

  operator_btns.forEach((el) => {
    el.onclick = () => updateOperator(el.id.at(-1));
  });

  const btnDot = document.getElementById("btnDot");
  const btnC = document.getElementById("btnC");
  const btnCalc = document.getElementById("btnCalc");
  const btnInv = document.getElementById("btnInv");

  btnDot.onclick = () => {
    if (!hasDot()) {
      res.textContent += ".";
    }
  };

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

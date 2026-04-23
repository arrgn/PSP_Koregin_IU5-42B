function isNumeric(val) {
  return !Number.isNaN(Number.parseFloat(val));
}

function isInteger(val) {
  return Number.isInteger(Number.parseFloat(val));
}

function factorial(val) {
  if (val === 0) {
    return 1;
  }

  return val * factorial(val - 1);
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
    el.onclick = () => updateNumber(el.id.replace("btn_digit_", ""));
  });

  operator_btns.forEach((el) => {
    el.onclick = () => updateOperator(el.id.at(-1));
  });

  const btnDot = document.getElementById("btnDot");
  const btnC = document.getElementById("btnC");
  const btnCalc = document.getElementById("btnCalc");
  const btnInv = document.getElementById("btnInv");
  const btnTheme = document.getElementById("btnTheme");
  const btnSqrt = document.getElementById("btnSqrt");
  const btnPow2 = document.getElementById("btnPow2");
  const btnFact = document.getElementById("btnFact");

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

  btnSqrt.onclick = () => {
    try {
      res.textContent = eval("Math.sqrt(" + res.textContent + ")");
    } catch (e) {
      res.textContent = "Error";
      console.log(`Exception while doing something: ${e}`);
    }
  };

  btnPow2.onclick = () => {
    try {
      res.textContent = eval(res.textContent) ** 2;
    } catch (e) {
      res.textContent = "Error";
      console.log(`Exception while doing something: ${e}`);
    }
  };

  btnFact.onclick = () => {
    try {
      let val = eval(res.textContent);
      if (!isInteger(val)) {
        throw new Error("Not an integer");
      }
      res.textContent = factorial(val);
    } catch (e) {
      res.textContent = "Error";
      console.log(`Exception while doing something: ${e}`);
    }
  };

  btnTheme.onclick = () => {
    const lightElements = document.querySelectorAll("[class*='calc-'][class*='-light']");
    const darkElements = document.querySelectorAll("[class*='calc-'][class*='-dark']");

    lightElements.forEach((el) => {
      el.classList.replace("calc-primary-light", "calc-primary-dark");
      el.classList.replace("calc-secondary-light", "calc-secondary-dark");
      el.classList.replace("calc-result-light", "calc-result-dark");
    });

    darkElements.forEach((el) => {
      el.classList.replace("calc-primary-dark", "calc-primary-light");
      el.classList.replace("calc-secondary-dark", "calc-secondary-light");
      el.classList.replace("calc-result-dark", "calc-result-light");
    });

    if (btnTheme.textContent === "☀") {
      btnTheme.textContent = "☾";
    } else {
      btnTheme.textContent = "☀";
    }
  };
});

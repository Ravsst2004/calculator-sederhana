var result = document.getElementById("result");
var currentValue = "0";
var currentOperator = "";
var prevValue = "";

function updateDisplay() {
    result.innerHTML = currentValue;
}

function clearDisplay() {
    currentValue = "0";
    currentOperator = "";
    prevValue = "";
    updateDisplay();
}

function handleNumberClick(number) {
    if (currentValue === "0" || currentOperator === "=") {
        currentValue = number;
    } else {
        currentValue += number;
    }
    updateDisplay();
}

function handleOperatorClick(operator) {
    if (currentValue !== "0") {
        if (prevValue !== "") {
            calculateResult();
        }
        prevValue = currentValue;
        currentValue = "0";
        currentOperator = operator;
    }
}

function calculateResult() {
    if (currentOperator === "+") {
        currentValue = (parseFloat(prevValue) + parseFloat(currentValue)).toString();
    } else if (currentOperator === "-") {
        currentValue = (parseFloat(prevValue) - parseFloat(currentValue)).toString();
    } else if (currentOperator === "*") {
        currentValue = (parseFloat(prevValue) * parseFloat(currentValue)).toString();
    } else if (currentOperator === "/") {
        if (currentValue === "0") {
            currentValue = "Error";
        } else {
            currentValue = (parseFloat(prevValue) / parseFloat(currentValue)).toString();
        }
    }
    prevValue = "";
    currentOperator = "=";
}

document.getElementById("num0").addEventListener("click", function() {
    handleNumberClick("0");
});
document.getElementById("num1").addEventListener("click", function() {
    handleNumberClick("1");
});
document.getElementById("num2").addEventListener("click", function() {
    handleNumberClick("2");
});
document.getElementById("num3").addEventListener("click", function() {
    handleNumberClick("3");
});
document.getElementById("num4").addEventListener("click", function() {
    handleNumberClick("4");
});
document.getElementById("num5").addEventListener("click", function() {
    handleNumberClick("5");
});
document.getElementById("num6").addEventListener("click", function() {
    handleNumberClick("6");
});
document.getElementById("num7").addEventListener("click", function() {
    handleNumberClick("7");
});
document.getElementById("num8").addEventListener("click", function() {
    handleNumberClick("8");
});
document.getElementById("num9").addEventListener("click", function() {
    handleNumberClick("9");
});

document.getElementById("add").addEventListener("click", function() {
    handleOperatorClick("+");
});
document.getElementById("subtract").addEventListener("click", function() {
    handleOperatorClick("-");
});
document.getElementById("multiply").addEventListener("click", function() {
    handleOperatorClick("*");
});
document.getElementById("divide").addEventListener("click", function() {
    handleOperatorClick("/");
});

document.getElementById("equal").addEventListener("click", function() {
    calculateResult();
    updateDisplay();
});

document.getElementById("clear").addEventListener("click", function() {
    clearDisplay();
});

updateDisplay();

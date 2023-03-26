function operate(num1, num2, operator) {
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return subtract(num1, num2);
    if (operator === "*") return multiply(num1, num2);
    if (operator === "/") return divide(num1, num2);
};

function add(num1, num2) {
    return num1 + num2
};

function subtract(num1, num2) {
    return num1 - num2
};

function multiply(num1, num2) {
    return num1 * num2
};

function divide(num1, num2) {
    return num1 / num2
};


// operator buttons

const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => console.log("add"));

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", () => console.log("subtract"));

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", () => console.log("multiply"));

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", () => console.log("divide"));

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => console.log("equals"));


// number buttons

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", () => console.log("decimal"));

const zeroButton = document.querySelector("#num0");
zeroButton.addEventListener("click", () => console.log("num0"));

const oneButton = document.querySelector("#num1");
oneButton.addEventListener("click", () => console.log("num1"));

const twoButton = document.querySelector("#num2");
twoButton.addEventListener("click", () => console.log("num2"));

const threeButton = document.querySelector("#num3");
threeButton.addEventListener("click", () => console.log("num3"));

const fourButton = document.querySelector("#num4");
fourButton.addEventListener("click", () => console.log("num4"));

const fiveButton = document.querySelector("#num5");
fiveButton.addEventListener("click", () => console.log("num5"));

const sixButton = document.querySelector("#num6");
sixButton.addEventListener("click", () => console.log("num6"));

const sevenButton = document.querySelector("#num7");
sevenButton.addEventListener("click", () => console.log("num7"));

const eightButton = document.querySelector("#num8");
eightButton.addEventListener("click", () => console.log("num8"));

const nineButton = document.querySelector("#num9");
nineButton.addEventListener("click", () => console.log("num9"));


// special buttons

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => console.log("clear"));

const negativeButton = document.querySelector("#negative");
negativeButton.addEventListener("click", () => console.log("negative"));

const percentButton = document.querySelector("#percent");
percentButton.addEventListener("click", () => console.log("percent"));
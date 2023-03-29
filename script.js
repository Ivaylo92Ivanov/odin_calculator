function operate(num1, num2, operator) {
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return subtract(num1, num2);
    if (operator === "*") return multiply(num1, num2);
    if (operator === "/") return divide(num1, num2);
};

function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2)
};

function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2)
};

function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2)
};

function divide(num1, num2) {
    if (num2 == 0) {
        alert("Can`t divide by 0!");
        clear();
        return "";
    }
    return parseFloat(num1) / parseFloat(num2);
};

const buttonsList = document.querySelectorAll("button");
buttonsList.forEach(button => button.addEventListener("click", () => updateCalculation(button)))

const specialButtons = Array.from(document.querySelectorAll(".special-buttons>button"));
const numberButtons = Array.from(document.querySelectorAll(".number-buttons>button"));
const operatorButtons = Array.from(document.querySelectorAll(".operation-buttons>button"));
const equalsButton = operatorButtons.splice(operatorButtons.indexOf("button#equals"), 1)[0];

let num1 = "";
let num2 = "";
let operator = "";
let lastOperatorWasEqual = false;

function clear() {
    num1 = "";
    num2 = "";
    operator = "";
    lastOperatorWasEqual = false;
};

function updateCalculation (button) {
    
    if (button.id==="clear") clear();

    if (numberButtons.includes(button)) {
        if (operator === "") {
            if (button.id === "decimal" && num1.toString().includes(".")) return ;
            if (lastOperatorWasEqual) (num1="");
            num1 += button.textContent;
            console.log(`num1: ${num1}\nnum2: ${num2}`)
        } else {
            if (button.id === "decimal" && num2.toString().includes(".")) return ;
            num2 += button.textContent;
            console.log(`num1: ${num1}\nnum2: ${num2}`)
        };
    };

    if (button.id === "equals" && num1 != "" && num2 != "" && operator != "") {
        if(num1===".") num1=0;
        if(num2===".") num2=0;
        if(num1==="") num1=0;
        result = operate(num1, num2, operator);
        num1 = result;
        num2 = "";
        operator = "";
        lastOperatorWasEqual = true;

        console.log(`equals: ${result}`);
        console.log(`num1: ${num1}\nnum2: ${num2}`)    
    };

    if (operatorButtons.includes(button)) {
        if(num2 === "") {
            operator = button.textContent;            
        } else {
            if(num1===".") num1=0;
            if(num2===".") num2=0;
            if(num1==="") num1=0;
            result = operate(num1, num2, operator);
            num1 = result;
            num2 = "";
            operator = button.textContent;
            lastOperatorWasEqual = false;

            console.log(`equals: ${result}`);
            console.log(`num1: ${num1}\nnum2: ${num2}`)    
        };    
    };

};


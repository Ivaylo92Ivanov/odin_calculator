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

const displayTop = document.querySelector("#display-top");
const displayBottom = document.querySelector("#display-bottom");

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
    displayTop.innerText="0";
    displayBottom.innerText="";
};

function getResult(num1, num2, operator) {
    if(num1===".") num1=0;
    if(num2===".") num2=0;
    if(num1==="") num1=0;
    result = operate(num1, num2, operator);
    num1 = result;
    num2 = "";
    return [num1, num2, result]
}

function updateCalculation (button) {
    
    if (button.id==="clear") clear();


    //0. + should display as "0+"" instead of "0.+""
    if (numberButtons.includes(button)) {
        let currentSymbol = button.textContent.toString();
        console.log(currentSymbol)
        if (operator === "") {
            if (lastOperatorWasEqual) (num1="", lastOperatorWasEqual=false, displayBottom.innerText = '');
            if (currentSymbol === "." && num1.toString().includes(".")) currentSymbol="" ; 
            if (currentSymbol === "." && num1==0) num1="0.", currentSymbol="";
            if (currentSymbol === "0" && num1==="0") currentSymbol="";
            num1 += currentSymbol;
        } else {
            if (currentSymbol === "." && num2.toString().includes(".")) currentSymbol="";
            if (currentSymbol === "." && num2==0) num2="0.", currentSymbol="";
            if (currentSymbol === "0" && num2==="0") currentSymbol=""; //
            num2 += currentSymbol;
        };
        if (num1.toString().startsWith("0") && num1.length > 1 && !num1.includes(".")) num1 = num1.slice(1); // bugs
        if (num2.toString().startsWith("0") && num2.length > 1 && !num2.includes(".")) num2 = num2.slice(1); // bugs

        displayTop.innerText = num1 + operator + num2; 
    };

    if (button.id === "equals" && num2 != "" && operator != "") {
        [num1, num2, result] = getResult(num1, num2, operator);
        operator = "";
        lastOperatorWasEqual = true;
        if(displayTop.innerText != 0) displayTop.innerText+="=";
        displayBottom.innerText=result;   
    };

    if (operatorButtons.includes(button)) {
        if(num1==="") num1=0;
        if(num2==="") {
            operator = button.textContent;
            displayTop.innerText=num1+operator; 
        } else {
            [num1, num2, result] = getResult(num1, num2, operator);
            operator = button.textContent;
            lastOperatorWasEqual = false;
            if(num1==="") num1="0";
            displayTop.innerText=num1+operator;
            displayBottom.innerText=result; 
        };    
    };

};

let num1 = "";
let num2 = "";
let operator = null;
let result = "";

const display = document.querySelector(".display");
const container = document.querySelector(".container"); 

const add = function(num1, num2) {
	const added = num1 + num2; 
    return added
}

const subtract = function(num1, num2) {
    const subtracted = num1 - num2;
    return subtracted;
}

const multiply = function(num1, num2) {
	const multiplied = num1 * num2; 
    return multiplied;
}

const divide = function(num1, num2) {
	const divided = num1 / num2; 
    return divided;
    }

const operate = function(num1, operator, num2) {
    let number1 = Number(num1);
    let number2 = Number(num2);
    switch(operator) {
        case '+':
            return add(number1, number2);
        case '-': 
            return subtract(number1, number2);
        case 'x':
            return multiply(number1, number2);
        case '÷':
            return divide(number1, number2);
    }
}

container.addEventListener('click', (e) => {

    if(e.target.classList.contains('digit')){
        if(result !== '') {
            num1 = "";
            result = "";
            num1 +=e.target.textContent;
            display.textContent = `${num1}`;
        }else if(operator === null){
            num1 += e.target.textContent;
            display.textContent = `${num1}`;
        } else if (operator !== null) {
            num2 += e.target.textContent;
            display.textContent = `${num1} ${operator} ${num2}`;
        }
        }      

    if(e.target.classList.contains('operator')) {
        if(num1 !== "" && num2 === "") {
            operator = e.target.textContent;
            display.textContent = `${num1} ${operator}`;
        } else if(num1 !== "" && num2 !== "") {
            let newOperator = e.target.textContent;
            result = operate(num1, operator, num2)
            num1 = parseFloat(result.toFixed(2));
            num2 = "";
            operator = newOperator;
            display.textContent = `${num1} ${operator}`;
        }
    }  

    if(e.target.classList.contains('equal') && 
        num1 !== "" && 
        num2 !== "" &&
        operator !== null) {
            result = operate(num1, operator, num2);
            num1 = parseFloat(result.toFixed(2));
            num2 = '';
            operator = null;
            display.textContent = `${num1}`;
        }

    if(e.target.classList.contains('clear')) {
        display.textContent = '';
        num1 = "";
        num2 = "";
        operator = null;
    }
})

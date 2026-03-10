let num1 = "";
let num2 = "";
let operator = null;
let result = "";

//used to translate multiplication and division symbols
const keyMap = {
    '*': 'x',
    '/': '÷'
};

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

const clear = function () {
        display.textContent = '';
        num1 = "";
        num2 = "";
        operator = null;
        result = "";
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
            if(number2 === 0) {
                alert("You can't divide by zero, dummy.")
                return divide(number1, number2);
            } else {
                return divide(number1, number2);
            }
    }
}

// adds keyboard functionality
document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if(/[0-9]/.test(e.key))
        if(result !== '') {
            num1 = "";
            result = "";
            num1 += e.key;
            display.textContent = `${num1}`;
        }else if(operator === null){
            num1 += e.key;
            display.textContent = `${num1}`;
        } else if (operator !== null) {
            num2 += e.key;
            display.textContent = `${num1} ${operator} ${num2}`;
        }

    if(/[+\-*/]/.test(e.key)){
        if(num1 !== "" && num2 === "") {
            result = "";
            operator = keyMap[e.key] || e.key;
            display.textContent = `${num1} ${operator}`;
        } else if(num1 !== "" && num2 !== "") {
            let newOperator = keyMap[e.key] || e.key;
            result = operate(num1, operator, num2);
            num1 = parseFloat(result.toFixed(2));
            num2 = "";
            result = "";
            operator = newOperator;
            display.textContent = `${num1} ${operator}`;
        }
    }

        if((e.key === "=" || e.key === "Enter") && 
        num1 !== "" && 
        num2 !== "" &&
        operator !== null) {
            result = operate(num1, operator, num2);
            if(result === Infinity|| isNaN(result)){
                clear();
            } else {
            num1 = parseFloat(result.toFixed(2));
            num2 = '';
            operator = null;
            display.textContent = `${num1}`;
            }
        }

        if(e.key === 'Backspace') {
            if(num2 !== "") {
                num2 = num2.slice(0, -1);
                display.textContent = `${num1} ${operator} ${num2}`;
            } else if(num2 === "" && operator !== null) {
                operator = null;
                display.textContent = `${num1}`;
            } else {
                num1 = num1.slice(0, -1)
                display.textContent = `${num1}`;
            }
}

    if(e.key === ".") {
        if(result !== '') {
            num1 = "";
            result = "";
            num1 +=e.key;
            display.textContent = `${num1}`;
        }else if(operator === null){
            if(num1.includes('.')) {
                alert('Your number can only include one decimal point')
            } else {
                num1 += e.key;
                display.textContent = `${num1}`;
            }
        } else if (operator !== null) {
            if(num2.includes('.')) {
                alert('Your number can only include one decimal point')
            } else {
                num2 += e.key;
                display.textContent = `${num1} ${operator} ${num2}`;
            }
        }
        } 
})


// adds click functionality
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
            result = "";
            operator = e.target.textContent;
            display.textContent = `${num1} ${operator}`;
        } else if(num1 !== "" && num2 !== "") {
            let newOperator = e.target.textContent;
            result = operate(num1, operator, num2);
            num1 = parseFloat(result.toFixed(2));
            num2 = "";
            result = "";
            operator = newOperator;
            display.textContent = `${num1} ${operator}`;
        }
    }  

    if(e.target.classList.contains('equal') && 
        num1 !== "" && 
        num2 !== "" &&
        operator !== null) {
            result = operate(num1, operator, num2);
            if(result === Infinity|| isNaN(result)){
                clear();
            } else {
            num1 = parseFloat(result.toFixed(2));
            num2 = '';
            operator = null;
            display.textContent = `${num1}`
            }
        }

    if(e.target.classList.contains('clear')) {
        clear();
    }

    if(e.target.classList.contains('backspace')) {
        if(num2 !== "") {
            num2 = num2.slice(0, -1);
            display.textContent = `${num1} ${operator} ${num2}`;
        } else if(num2 === "" && operator !== null) {
            operator = null;
            display.textContent = `${num1}`;
        } else {
            num1 = num1.slice(0, -1)
            display.textContent = `${num1}`;
        }
    }

    if(e.target.classList.contains('decimal')) {
        if(result !== '') {
            num1 = "";
            result = "";
            num1 +=e.target.textContent;
            display.textContent = `${num1}`;
        }else if(operator === null){
            if(num1.includes('.')) {
                alert('Your number can only include one decimal point')
            } else {
                num1 += e.target.textContent;
                display.textContent = `${num1}`;
            }
        } else if (operator !== null) {
            if(num2.includes('.')) {
                alert('Your number can only include one decimal point')
            } else {
                num2 += e.target.textContent;
                display.textContent = `${num1} ${operator} ${num2}`;
            }
        }
        } 
     if(e.target.classList.contains('show')){
        alert("This button is just for show. It doesn't work.")
     }
})

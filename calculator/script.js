let currentInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = '';
    }
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function appendOperator(operator) {
    currentInput += operator;
    document.getElementById('result').value = currentInput;
}

function appendFunction(func) {
    currentInput += func + '(';
    document.getElementById('result').value = currentInput;
}

function clearResult() {
    currentInput = '0';
    document.getElementById('result').value = currentInput;
}

function removeLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    document.getElementById('result').value = currentInput;
}

function calculateResult() {
    try {
        let result = currentInput
            .replace(/√/g, 'Math.sqrt')
            .replace(/π/g, 'Math.PI')
            .replace(/e/g, 'Math.E')
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan')
            .replace(/log/g, 'Math.log10')
            .replace(/ln/g, 'Math.log')
            .replace(/exp/g, 'Math.exp')
            .replace(/x\^y/g, 'Math.pow');
        result = eval(result);
        currentInput = result.toString();
        document.getElementById('result').value = currentInput;
    } catch (error) {
        alert('Invalid Input');
    }
}

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

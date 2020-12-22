const OPERATIONS = {
    ADD: (a, b) => a + b,
    SUBTRACT: (a, b) => a - b,
    MULTIPLY: (a, b) => a * b,
    DIVIDE: (a, b) => a / b,
}


function Calculator() {
    this.stack = [];
    this.showingTotal = true;
}

Calculator.prototype.addOperation = function (operation) {
    this.stack.push(operation)
}

Calculator.prototype.doOperations = function () {
    let runningTotal = 0
    for (let i = 0; i < this.stack.length; i++) {
        let currentNumber = this.stack[i][0];
        if (i === 0) {
            runningTotal += currentNumber;
        } else {
            let lastOperation = this.stack[i - 1][1];
            runningTotal = OPERATIONS[lastOperation](runningTotal, currentNumber);
        }
    }
    return runningTotal;
}

Calculator.prototype.reset = function () {
    this.stack = [];
}

Calculator.prototype.serialize = function () {
    let stackString = this.stack.toString()
        .replaceAll('ADD', '+')
        .replaceAll('SUBTRACT', '-')
        .replaceAll('MULTIPLY', '*')
        .replaceAll('DIVIDE', '/')
        .replaceAll(',', ' ');
    return stackString;
}





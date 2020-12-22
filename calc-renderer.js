function Renderer(
    parentGui,
    controller,
) {
    this.parentGui = parentGui;
    this.controller = controller;
    this.appending = true;
}

Renderer.prototype.initialise = function (calculator) {
    this.calculator = calculator; // calculator is here now
    const operationButtons = [
        ['plusButton', 'ADD'],
        ['minusButton', 'SUBTRACT'],
        ['multiplyButton', 'MULTIPLY'],
        ['divideButton', 'DIVIDE'],
        ['equalsButton', 'EQUALS']
    ];

    for (const tuple of operationButtons) {
        document.getElementById(tuple[0]).addEventListener("click", () => {
            let operation = [this.getDisplayedNumber(), tuple[1]]
            this.controller.onNewOperation (operation)
            this.appending = false;
        })
    }

    for (let i = 0; i < 10; i++) {
        document.getElementById(`_${i}_Button`).addEventListener("click", () => this.onNumberPressed(i));
    }

    const onKeyDown = (e) => {
        console.log(e.key)
        switch (e.key) {
            case '1':
                this.onNumberPressed(1);
                break;
            case '2':
                this.onNumberPressed(2);
                break;
            case '3':
                this.onNumberPressed(3);
                break;
            case '4':
                this.onNumberPressed(4);
                break;
            case '5':
                this.onNumberPressed(5);
                break;
            case '6':
                this.onNumberPressed(6);
                break;
            case '7':
                this.onNumberPressed(7);
                break;
            case '8':
                this.onNumberPressed(8);
                break;
            case '9':
                this.onNumberPressed(9);
                break;
            case '0':
                this.onNumberPressed(0);
                break;
            case '+':
                onOperatorInput(this.getDisplayedNumber(), 'ADD');
                break;
            case '-':
                onOperatorInput(this.getDisplayedNumber(), 'SUBTRACT');
                break;
            case '*':
                onOperatorInput(this.getDisplayedNumber(), 'MULTIPLY');
                break;
            case '/':
                onOperatorInput(this.getDisplayedNumber(), 'DIVIDE');
                break;
            case '=':
                onOperatorInput(this.getDisplayedNumber(), 'EQUALS');
                break;
        }
    }
    document.addEventListener('keydown', onKeyDown);
}

// to go into controller
Renderer.prototype.onNumberPressed = function (number) {
    if (this.appending) {
        let asString = this.value + '';
        let appended = asString + (number + '');
        this.updateNumber(Number(appended));
    } else {
        this.appending = true;
        this.updateNumber(number);
    }
}

Renderer.prototype.getDisplayedNumber = function () {
    return parseInt(document.getElementById('number-display').innerHTML);
}

Renderer.prototype.updateNumber = function (numberToShow) {
    this.value = numberToShow;
    document.getElementById('number-display').innerHTML = numberToShow;
}

Renderer.prototype.updateSummary = function (summary) {
    document.getElementById('summary-display').innerHTML = summary;
}

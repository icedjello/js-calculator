function Controller (
    calculator
){
    this.calculator = calculator;
}

Controller.prototype.onNewOperation = function (operation) {
    this.calculator.addOperation(operation);
    this.renderer.updateNumber(calculator.doOperations());
    if (operation[1] === 'EQUALS'){
        this.calculator.reset();
    }
}

Controller.prototype.init = function (renderer) {
    this.renderer = renderer;

}

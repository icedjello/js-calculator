function main(calculator, renderer) {
    renderer.initialise(
        calculator,
        controller
    );
}

const calculator = new Calculator();
const controller = new Controller (calculator);
const renderer = new Renderer(document, controller);
controller.init (renderer); // lazy initialisation
// to get around the circular dependency of adding renderer into controller
// because renderer needs controller

renderer.updateNumber(0);
main(calculator, renderer)





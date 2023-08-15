const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');




const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters.',
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color for your shape?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What type of shape do you want?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want for your text?',
    },
])

    .then(res => {
        let shape
        if (res.shape ==='Circle'){
            shape = new Circle(res.text, res.color, res.textColor);
        } else if 
        (res.shape ==='Square') {
            shape = new Square(res.text, res.color, res.textColor);
        } else if
        (res.shape ==='Triangle') {
            shape = new Triangle(res.text, res.color, res.textColor);
        }

        console.log(shape);

        const svgFile = shape.render();
        fs.writeFileSync('logo.svg', svgFile);
        console.log('image saved to logo.svg');

    });

};

promptUser();
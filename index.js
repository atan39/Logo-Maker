const inquirer = require('inquirer');

const shapes = require('./lib/shapes.js');

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
])};


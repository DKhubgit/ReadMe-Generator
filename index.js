// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generator = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'Enter Title of Project: ', 
    'Enter Description: ',  
    'Provide installation instruction: ',
    'Provide usage guide: ',
    'Enter Contributing guidelines: ',
    'Enter test example: ',
    'Enter Github Username: ',
    'Enter email: ',
    'Choose a license: '
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, generator.generateMarkdown(data), err => {
        err ? console.log(err) : console.log('Successfully created ReadMe File!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installGuide'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usageGuide'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contribution'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'tests'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'username'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'email'
        },
        {
            type: 'list',
            message: questions[8],
            choices: ['GNU GPLv3', 'Apache License 2.0', 'MIT license'],
            name: 'license'
        },
    ])
    .then (response => {
        writeToFile('README.md', response);
    })
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init();

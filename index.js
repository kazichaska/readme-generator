// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const choices = require('inquirer/lib/objects/choices');
const generate = require('./utils/generateMarkdown');
const path = require('path');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Project title:"
    },
    {
        type: 'input',
        name: 'description',
        message: "Project description:"
    },
    {
        type: 'input',
        name: 'installation',
        message: "Installation instruction:"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Usage information:"
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Contributing Guidelines:"
    },
    {
        type: 'input',
        name: 'test',
        message: "Test instructions:"
    },
    {
        type: 'checkbox',
        name: 'license',
        message: "Pick the type of license:",
        choices: ['MIT', 'Apache', 'GLP', 'BSD', 'None' ]
    },
    {
        type: 'input',
        name: 'questions',
        message: "Do you have any question about this application:"
    },
    {
        type: 'input',
        name: 'username',
        message: "Please enter your Github username:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email adddress:"
    },
];


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), "utils", fileName), data);
};

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((returnedData) => {
        writeToFile('generatedReadme.md', generate({...returnedData}));
    })
}

// Function call to initialize app
init();

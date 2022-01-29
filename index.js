// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const choices = require('inquirer/lib/objects/choices');
const generate = require('./utils/generateMarkdown');
const path = require('path');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project_title',
        message: "Project title:"
    },
    {
        type: 'input',
        name: 'description',
        message: "Project description:"
    },
    {
        type: 'input',
        name: 'installation_instruction',
        message: "Installation instruction:"
    },
    {
        type: 'input',
        name: 'usage_information',
        message: "Usage information:"
    },
    {
        type: 'input',
        name: 'contribution_guidelines',
        message: "Contribution Guidelines:"
    },
    {
        type: 'input',
        name: 'test_instructions',
        message: "Test instructions:"
    },
    {
        type: 'checkbox',
        name: 'license',
        message: "Pick the type of license:",
        choices: ['MIT', 'GNU', 'ISC', 'Microsoft Public License', 'Open Software License 3.0' ]
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

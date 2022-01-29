// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project_title',
        message: "Enter project title here:"
    },
    {
        type: 'input',
        name: 'installation_instruction',
        message: "Enter installation instruction:"
    },
    {
        type: 'input',
        name: 'usage_information',
        message: "Enter usage information:"
    },
    {
        type: 'input',
        name: 'contribution_guidelines',
        message: "Contribution Guidelines:"
    },
    {
        type: 'input',
        name: 'test_instructions',
        message: "Enter test instructions:"
    },
    {
        type: 'list',
        name: 'licenses',
        message: "Pick the type of license:",
        choices: ['MIT', 'GNU', 'ISC', 'Microsoft Public License', 'Open Software License 3.0' ]
    },
];

inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, ' '));
    console.log(data.project_title);
    writeToFile("./utils/README.md", data);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log(fileName);
    // console.log(data);
    // try {
    //     fs.writeFile('./utils/README.MD', data)
    // } catch (err) {
    //     console.error(err);
    // }
    fs.writeFile(fileName, JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Create a function that returns a license badge based on which license is passed in

const { fstat } = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  console.log(data);
  return `# ${data.description}

  ## Table of contents
  1. [Description](#description)
  2. [Installation Instruction](#installation instruction)
  3. [Usage Information](#usage information)
  4. [Contribution Guidelines](#contributeion guidelines)
  5. [Test Instructions](#test instructions)

  ## Description
  ${data.description}

  ## Installation Instruction
  ${data.installation_instruction}

`;
}

module.exports = generateMarkdown;

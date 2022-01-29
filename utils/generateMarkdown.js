// TODO: Create a function that returns a license badge based on which license is passed in

const { fstat } = require("fs");

function licenseBadge (data) {
  const licenseType = (data.license);
  if (licenseType == 'MIT') {
      licenseDetail = `[License: MIT](https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#mit-license)`
  };
  if (licenseType == 'Apache') {
    licenseDetail = `![License: GNU]"https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#apache-license-20"`
  };
  if (licenseType == 'GLP') {
    licenseDetail = `![License: ISC]"https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#3-gpl"`
  };
  if (licenseType == 'BSD') {
    licenseDetail = `![License: BSD]"https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#the-bsd-license-case"`
  };
  if (licenseType == 'None') {
    licenseDetail = `"None"`
  };
  return licenseDetail;
}

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
  licenseBadge(data);
  console.log(data);
  return `# ${data.title}

  ## Table of contents
  1. [Title](#title)
  2. [Description](#description)
  3. [Installation Instruction](#installation)
  4. [Usage Information](#usage)
  5. [Contribution Guidelines](#contributeion)
  6. [Test Instructions](#test)
  7. [License](#license)

  ## Project Title
  ${data.title}

  ## Description
  ${data.description}

  ## Installation Instruction
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## Contribution Guidelines
  ${data.contribution}

  ## Test Instructions
  ${data.test}

  ## License
  ${licenseBadge(data)}

`;

}

module.exports = generateMarkdown;

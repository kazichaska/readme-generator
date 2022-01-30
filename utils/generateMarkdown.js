
const { fstat } = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license) {
    return `![License](https://img.shields.io/badge/License-${data.license}%20-yellow.svg)`;
  } else {
    return '';
  }
}

// If there is no license, return an empty string
function renderLicenseLink(data) {
  const licenseType = (data.license);
  if (licenseType == 'MIT') {
      licenseDetail = `[MIT](https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#mit-license)`
  };
  if (licenseType == 'Apache') {
    licenseDetail = `[Apache](https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#apache-license-20)`
  };
  if (licenseType == 'GLP') {
    licenseDetail = `[GLP](https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#3-gpl)`
  };
  if (licenseType == 'BSD') {
    licenseDetail = `[BSD](https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#the-bsd-license-case)`
  };
  if (licenseType == 'None') {
    licenseDetail = `"None"`
  };
  return licenseDetail
}

// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license) {
   return `## License`;
  } else {
    return '';
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data);
  renderLicenseLink(data);
  renderLicenseSection(data);
  
  // console.log(data);
  return `# ${data.title}

  ${renderLicenseBadge(data)}

  ## Table of contents
  1. [Title](#title)
  2. [Description](#description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Contributing](#contributing)
  6. [Test](#test)
  7. [License](#license)
  8. [Questions](#questions)

  ## Title
  ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contributing}

  ## Test
  ${data.test}

  ${renderLicenseSection(data)}
  ${renderLicenseLink(data)}

  ## Questions
  ${data.questions}<br />
  Find me on Github [${data.username}](https://github.com/${data.username})<br />
  Email me with any question: ${data.email} <br />
`;
}

module.exports = generateMarkdown;

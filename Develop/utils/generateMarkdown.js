// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GNU GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'MIT license') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GNU GPLv3') {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'MIT license') {
    return `(https://opensource.org/licenses/MIT)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return `## License

  Copyright (c) ADD_YEAR , ADD_NAME
  
  All rights reserved.

  Licensed under the [${license}]${renderLicenseLink(license)} License.
  
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation

  ${data.installGuide}

  ## Usage

  ${data.usageGuide}

  ## Contributing

  ${data.contribution}

  ## Tests 

  ${data.test}

  ## Questions

  GitHub profile: [https://github.com/${data.username}](https://github.com/${data.username})

  Email me at - ${data.email} - if you have questions!

  ${renderLicenseSection(data.license)}

`
};

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
}

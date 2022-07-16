// TODO: Create a function that returns a license badge based on which license is passed in
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
  return `
  # ${data.title}

  ${data.description}

  # Table of Contents

  - [Installation](#installation)
  - [Usage Guide](#usage)
  - [Contribution](#contribution)
  - [Test Sample](#test)
  - [Questions](#question)
  - [License](#license)

  # Installation

  ${data.installGuide}

  # Usage Guide

  ${data.usageGuide}

  # Contribution

  ${data.contribution}

  # Test Sample 

  ${data.test}

  # Questions

  GitHub profile: [https://github.com/${data.username}](https://github.com/${data.username})

  Email me at - ${data.email} - if you have questions!

  # License

  ${data.license}

`;
}

module.exports = {
  generateMarkdown
}

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage information.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please provide contribution guidelines.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide tests instructions.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub link?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'list',
      message: 'Please pick from the available licenses?',
      name: 'contact',
      choices: ['Apache License 2.0', 'MIT License', 'Eclipse Public License'],
    },
  ])
  .then((data) => {
    fs.writeFile("README.md", `# Title: ${data.title}

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [Tests](#Tests)
    
## Description, Installation, Usage, Contributing, and Tests
    
    Description:
    ${data.description} 

    Installation: 
    ${data.installation}

    Usage:
    ${data.usage}
    
    Credits:
    ${data.contribution}
    
    Tests:
    ${data.tests}
    
## Questions
    
    - [My Github](${data.github})
    
    If there are any additional questions you can reach me at my email: 
    ${data.email}` , 
    (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

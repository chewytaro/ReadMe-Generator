// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questionsArray = [
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
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'list',
      message: 'Please pick from the available licenses?',
      name: 'license',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
  ];

// Function to write README file

function writeToFile(fileName, data) {
  // Use fs to write data to a file
  fs.writeFile(fileName, data, (err) => {
      if (err) {
          console.log(err); 
      }
      else {
          console.log('README.md created!'); 
      }   
  });
}

// Function to initialize app

function init() {
  // Use inquirer to prompt user with questions and then generate README file based on their responses
  inquirer.prompt(questionsArray)
      .then((data) => {
          const readme = generateMarkdown(data);
          writeToFile('README.md', readme);
      });
}

// Call function to initialize app

init();
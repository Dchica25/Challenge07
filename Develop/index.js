// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
function generateREADME(answers) {
    return `
  # ${answers.projectTitle}
  
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  This project is licensed under the [${answers.license} License](https://opensource.org/licenses/${answers.license}).
  
  ## Contributing
  ${answers.contributing}

  ## GitHub username
  ${answers.github}
  
  ## Tests
  ${answers.tests}
  
  ## Contact
  ${answers.contact}
    `;
  }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, 'utf8');
    console.log(`${fileName} has been generated successfully!`);
  }
  
  // Prompt the user for input and generate the README
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['MIT', 'GPL', 'Apache', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What are the contributing guidelines?',
      },
      {
        type: 'input',
        name: 'Github USERNAME',
        message: 'Please enter github username?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How can someone test your project?',
      },
      {
        type: 'input',
        name: 'contact',
        message: 'What is your contact information?',
      },
    ])
    .then((answers) => {
      const readmeContent = generateREADME(answers);
      writeToFile('README.md', readmeContent);
    });


// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();

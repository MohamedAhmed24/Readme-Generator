// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    message: "what is your name?",
    name: "Name",
},
{
    type: "input",
    message: "what is your email address?",
    name: "Email",
},
{
    type: "input",
    message: "what is your Github username?",
    name: "Username",
},
{
    type: "input",
    message: "What is the title of your project?",
    name: "Title",
},
{
    type: "input",
    message: "Give a Description of your project",
    name: "Description",
},
{
    type: "input",
    message: "What are the installation intructions?",
    name: "Installation",
},
{
    type: "input",
    message: "what is this application used for?",
    name: "Usage",
},
{
    type: "input",
    message: "What was the motavation for this project?",
    name: "Motavation",
},
{
    type: "input",
    message: "Add any contributors",
    name: "Contributor",
},
{
    type: "input",
    message: "What command do you use to test your application?",
    name: "Test",
},
{
    type: "input",
    message: "What licencse was used for your README?",
    name: "License",
},




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("./demo/demREADME.md", generatorMarkdown({...data}));
    });
}

// Function call to initialize app
init();

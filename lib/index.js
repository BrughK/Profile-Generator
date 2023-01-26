const inquirer = require('inquirer');
const fs = require('fs');
const generateFunctions = require('./generateHtml.js');

const mainQ = [
    { 
        type: 'list',
        message: "What kind of employee would you like to add?",
        choices: ["manager", "engineer", "intern"], 
        name: 'employeeRole',
    },
]
// manager Q's
const managerQ = [
    {
        type: 'input',
        message: "What is your team manager's name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is your team manager's employee ID?",
        name: 'managerId',
    },
    {
        type: 'input',
        message: "What is your team manager's e-mail?",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is your team manager's office number?",
        name: 'managerOffice',
    },
    {
        type: 'list', 
        message: 'Would you like to add another employee?',
        choices: ["Yes", "No"],
        name: 'addMore',
    },
];

// engineer q's
const engineerQ = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is the engineer's employee ID?",
        name: 'engineerId',
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: "What is the engineer's Github username?",
        name: 'engineerGithub',
    },
    {
        type: 'list', 
        message: 'Would you like to add another employee?',
        choices: ["Yes", "No"],
        name: 'addMore',
    },
]; 

// intern's q's
const internQ = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'internName',
    },
    {
        type: 'input',
        message: "What is the intern's employee ID?",
        name: 'internId',
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'internEmail',
    },
    {
        type: 'input',
        message: "Which school does the intern attend?",
        name: 'internSchool',
    },
    {
        type: 'list', 
        message: 'Would you like to add another employee?',
        choices: ["Yes", "No"],
        name: 'addMore',
    },
];

const mainQuestion = () => {
    return inquirer
    .prompt(mainQ).then((employeeData) => {
        if (employeeData.employeeRole == "manager"){
            managerQuestions();
        }
        else if (employeeData.employeeRole == "engineer"){
            engineerQuestions();
        }
        else if (employeeData.employeeRole == "intern"){
            internQuestions();
        }
    })
};

fs.appendFile('index-.html', generateFunctions.generateHtml(), (err) => {})
// Call main
mainQuestion();

const managerQuestions = () => {
    return inquirer
    .prompt(managerQ).then((data) => {
        let managerAdded = generateFunctions.generateManager({
            managerName: `${data.managerName}`, 
            managerId: `${data.managerId}`, 
            managerEmail: `${data.managerEmail}`, 
            managerOffice: `${data.managerOffice}`, 
        })
        fs.appendFile('index.html', managerAdded, (err) => {
            if (err){
                console.log(err);
            }
            else {
                console.log('');
            }
        })
        if (data.addMore == "Yes"){
            mainQuestion();
        }
        else if(data.addMore == "No") {
            console.log("All Done! Your Page is now ready!")
        }
    });
}

const engineerQuestions = () => {
    return inquirer
    .prompt(engineerQ).then((data) => {
        let engineerAdded =  generateFunctions.generateEngineer({
            engineerName: `${data.engineerName}`, 
            engineerId: `${data.engineerId}`, 
            engineerEmail: `${data.engineerEmail}`, 
            engineerGithub: `${data.engineerGithub}`, 
        }) 
        fs.appendFile('index.html', engineerAdded, (err) => {
            if (err){
                console.log(err);
            }
            else {
                console.log('');
            }
        })
        if (data.addMore == "Yes"){
            mainQuestion();
        }
        else if(data.addMore == "No") {
            console.log("All Done! Your Page is now ready!")
        }
    });
}

const internQuestions = () => {
    return inquirer 
    .prompt(internQ).then((data) => {
        let internAdded = generateFunctions.generateIntern({
            internName: `${data.internName}`, 
            internId: `${data.internId}`, 
            internEmail: `${data.internEmail}`, 
            internSchool: `${data.internSchool}`,
        })
        fs.appendFile('index.html', internAdded, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('');
            }
        })
        if (data.addMore == "Yes"){
            mainQuestion();
        }
        else if(data.addMore == "No") {
            console.log("All Done! Your Page is now ready!")
        }
    });    
}
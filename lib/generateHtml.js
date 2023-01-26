// main fucntion to write html doc
function generateHtml() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css"/>
        <title>My Team</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>`
}

// function to make html for manager section
function generateManager(data) {
    return `<div class="row">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">${data.managerName}<p>Manager</p></div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data.managerId}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data.managerEmail}">${data.managerEmail}</a></li>
                    <li class="list-group-item">Office number: ${data.managerOffice}</li>
            </div>
        </div>`;       
}
// function to make html for engineer section
function generateEngineer(data) {
    return `<div class="row">
            <div class="card bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">${data.engineerName}<p>Engineer</p></div>
                <div class="card-body">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.engineerId}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.engineerEmail}">${data.engineerEmail}</a></li>
                <li class="list-group-item">Github: <a href = "https://github.com/${data.engineerGithub}" target="_blank" rel="noopener noreferrer">${data.engineerGithub}</a></li>
            </div>
        </div>`;
}
// function to make html for intern section
function generateIntern(data) {
    return `<div class="row">
    <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">${data.internName}<p>Intern</p></div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.internId}</li>
        <li class="list-group-item">Email: <a href="mailto:${data.internEmail}">${data.internEmail}</a></li>
        <li class="list-group-item">School: ${data.internSchool}</li>
    </div>`;
 }
//Exports
module.exports = {
    generateHtml: function(){ return generateHtml()},
    generateManager: function(data) {return generateManager(data)}, 
    generateEngineer: function(data) {return generateEngineer(data)}, 
    generateIntern: function(data){return generateIntern(data)}, 
    finishedFunction: function(data){return finishedFunction()}
};
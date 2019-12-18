const fs = require("fs");
const inquirer = require("inquirer");

// const Employee = require("./Employee");
// const Engineer = require("./Engineer");
// const Intern = require("./Intern");
// const Manager = require("./Manager");



inquirer.prompt([
    {
        message: "Add an Employee to your Team Profile. \n What's their name?",
        name: "name"
    },
    {
        message: "What's their ID?",
        name: "id"
    },
    {
        message: "What's their title?",
        name: "title"
    },
    {
        message: "What's their email?",
        name: "email"
    }
]).then(function(response) {
    const employeeCard = `
    <div class="card" style="width:400px">
        <img class="card-img-top" src="img_avatar1.png" alt="Card image">
        <div class="card-body">
            <h4 class="card-title">${response.name}</h4>
            <p class="card-text">Employee ID: ${response.id}</p>
            <p class="card-text">Role: ${response.title}</p>
        </div>
    </div>
    `
    fs.appendFile("team.html")
})


const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");



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
    <!doctype html>
<html lang="en">
  <head>
    <title>Dev Team Profile</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
      <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Dev Team Profile</h1>
            <p class="lead">This profile was created by a node.js command line interface.</p>
          </div>
      </div>
      <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <div class="container" id="profile-container">
                  <div class="card" style="width:400px">
                      <div class="card-body">
                          <h4 class="card-title">${response.name}</h4>
                          <p class="card-text">Employee ID: ${response.id}</p>
                          <p class="card-text">Role: ${response.title}</p>
                          <p class="card-text">Role: ${response.email}</p>
                      </div>
                  </div>
              </div>
            </div>
            <div class="col-md-2"></div>
        </div>

      </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
  </html>
    `
    fs.writeFile("./output/team.html", employeeCard, (err) => {
        if (err) throw err;
    })
})


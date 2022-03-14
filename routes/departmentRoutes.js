const db = require("../db/connection");
const inquirer = require("inquirer");

//=============================================================
//                 Function to view Departments               == DONE ==
//=============================================================

const viewDepartment = () => {
  const sql = `SELECT department.name AS Department, department.id AS Department_ID FROM department`;
  db.query(sql, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(res);
  });
};

//=============================================================
//                 Function to add Departments                == DONE ==
//=============================================================

const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: "newDepartment",
        type: "input",
        message: "What is the name of the new department?",
        validate: (departmentInput) => {
          if (departmentInput) {
            return true;
          } else {
            console.log("Enter the name of the new department");
            return false;
          }
        },
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO department (name) VALUES (?)`;
      db.query(sql, answer.newDepartment, (err, res) => {
        if (err) {
          console.log(err);
        }
        viewDepartment();
      });
    });
};

module.exports = { viewDepartment, addDepartment };

const db = require('../db/connection');
const inquirer = require('inquirer');


//=============================================================
//              Function to view all employees                == DONE ==
//=============================================================
const viewEmployees = () => {
    const sql = `SELECT employee.first_name AS First_Name, employee.last_name AS Last_name, employee.roles_id, roles.job_title AS Title FROM employee LEFT JOIN roles ON employee.roles_id = roles.id`;
    db.query(sql, (err, res) => {
        if (err) {
          console.log(err);
          return;
        }; console.table(res);
    });
};

//=============================================================
//       Function to create role array for addin employee
//=============================================================
let roleArray = [];
const selectRole = () => {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, res) => {
        if (err) {
          console.log(err);
          return;
        }; for (var i = 0; i < res.length; i++) {
            roleArray.push(res[i].job_title);
        }
    })
    return roleArray;
}


//=============================================================
//             Function to add employee to database
//=============================================================
const addEmployee = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "firstName",
            message: "What is this employee's first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is this employee's last name?"
        },
        {
            type: "list",
            name: "addRole",
            Message: "What is this employee's role?",
           // choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
           choices: selectRole,
        },

    ]) 
    
    .then (employeeData => {
        const sql = `INSERT INTO employee (first_name, last_name, roles_id)
        VALUES('${employeeData.firstName}', '${employeeData.lastName}', '${employeeData.addRole})`
        db.query(sql, (err, res) => {
            if (err) {
                console.log (err);
                return;
            }; console.log(res);
        })
    })
    viewEmployees();
}

module.exports = {viewEmployees, addEmployee};
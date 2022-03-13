const db = require('../db/connection');
const inquirer = require('inquirer');


//=============================================================
//              Function to view all employees
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
            name: "role",
            Message: "What is this employee's role?",
            choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
        },

    ]) 
    
    .then (employeeData => {
        const sql = `INSERT INTO employee (first_name, last_name, roles_id)
        VALUES('${employeeData.firstName}', '${employeeData.lastName}', '${employeeData.role})`
        db.query(sql, (err, res) => {
            if (err) {
                console.log (err);
                return;
            }; console.log(res);
        })
    })
    
}

module.exports = {viewEmployees, addEmployee};
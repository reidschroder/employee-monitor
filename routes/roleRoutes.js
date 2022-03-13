const db = require('../db/connection');
const inquirer = require('inquirer');

//=============================================================
//               Function to View all roles                   == DONE ==
//=============================================================

const viewRole = () => {
    const sql = `SELECT roles.job_title AS Job_Title, roles.salary AS Salary, department.name AS Department FROM roles LEFT JOIN department ON roles.department_id = department.id`;
    db.query(sql, (err, res) => {
        if (err) {
          console.log(err);
          return;
        }; console.table(res);
    });
};


//=============================================================
//       Function to Update an existing employee's role
//=============================================================
const updateRole = () => {

}

//=============================================================
//      Function to add a new role to the array of roles
//=============================================================
const addRole = () => {

}
module.exports = {viewRole, updateRole, addRole};
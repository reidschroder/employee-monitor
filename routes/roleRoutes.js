const db = require('../db/connection');
const inquirer = require('inquirer');

//=============================================================
//               Function to View all roles
//=============================================================

const viewRole = () => {
    const sql = `SELECT roles.job_title AS Job_Title, roles.salary AS Salary FROM roles`;
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
const db = require("../db/connection");
const inquirer = require("inquirer");

//=============================================================
//               Function to View all roles                   == DONE ==
//=============================================================

const viewRole = () => {
  const sql = `SELECT roles.job_title AS Job_Title, roles.salary AS Salary, department.name AS Department FROM roles LEFT JOIN department ON roles.department_id = department.id`;
  db.query(sql, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(res);
  });
};

//=============================================================
//      Function to add a new role to the array of roles
//=============================================================
function addRole() {
  const deptSql = `SELECT * FROM department`;
  db.query(deptSql, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }

    let deptNames = [];

    res.forEach((department) => {
      deptNames.push(department.name);
    });

    inquirer
      .prompt([
        {
          name: "departmentName",
          type: "list",
          message: "What department does this new role belong to?",
          choices: deptNames,
        },
      ])
      .then((answer) => {
        addRoleContinue(answer);
      });

    const addRoleContinue = (departmentData) => {
      inquirer
        .prompt([
          {
            name: "newRole",
            type: "input",
            message: "What is the title of the new role?",
          },
          {
            name: "salary",
            type: "input",
            message: "How much salary does this new role earn?",
          },
        ])
        .then((answer) => {
          let newRole = answer.newRole;
          let departmentId;

          res.forEach((department) => {
            if (departmentData.departmentName === department.name) {
              departmentId = department.id;
            }
          });

          let sql = `INSERT INTO roles (job_title, salary, department_id) VALUES (?,?,?)`;
          let params = [newRole, answer.salary, departmentId];

          db.query(sql, params, (err) => {
            if (err) {
              console.log(err);
              return;
            }

            viewRole();
          });
        });
    };
  });
}
module.exports = { viewRole, addRole };

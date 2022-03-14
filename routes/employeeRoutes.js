const db = require("../db/connection");
const inquirer = require("inquirer");

//=============================================================
//              Function to view all employees                == DONE ==
//=============================================================
const viewEmployees = () => {
  const sql = `SELECT employee.first_name AS First_Name, employee.last_name AS Last_name, employee.roles_id, roles.job_title AS Title FROM employee LEFT JOIN roles ON employee.roles_id = roles.id`;
  db.query(sql, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(res);
  });
};

//=============================================================
//           Function to Add New Employee                     == DONE ==
//=============================================================
function addEmployee(){
    inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'What is the first name of this new employee?'
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'What is the last name of this new employee?'
        }
    ]).then(answer => {
        const params = [answer.firstName, answer.lastName];

        const roleSql = `SELECT roles.id, roles.job_title FROM roles`;
        db.query(roleSql, (err, data) =>{
            if (err) throw err; 

            const roles = data.map(({ id, job_title }) => ({ name: job_title, value: id }));
            inquirer.prompt([
                {
                    name: 'role',
                    type: 'list',
                    message: "What is the new employee's role?",
                    choices: roles
                }
            ]).then(roleChoice => {
                const role = roleChoice.role;
                params.push(role);

                const managerSql = `SELECT * FROM employee`
                db.query(managerSql, (err, data) => {
                    if (err) throw error;
                    const managers = data.map(({ id, first_name, last_name }) => ({ name: first_name + " "+ last_name, value: id }));
                    inquirer.prompt([
                        {
                            name: 'manager',
                            type: 'list',
                            message: "Who will be this employee's manager?",
                            choices: managers
                        }
                    ]).then(managerChocie => {
                        const manager = managerChocie.manager;
                        params.push(manager);

                        const sql = `INSERT INTO employee (first_name, last_name, roles_id, manager_id)
                                        VALUES (?,?,?,?)`;
                        db.query(sql, params, (err) => {
                            if (err) throw err;
                            viewEmployees();
                        });
                    });
                });
            });
        });
    });
};

module.exports = { viewEmployees, addEmployee };

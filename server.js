const inquirer = require('inquirer');
const {viewEmployees } = require('./routes/employeeRoutes');
const {viewRole } = require('./routes/roleRoutes');

const promptInput = () => {
   return inquirer.prompt([
    {
        type: "list",
        name: "questions",
        message: "What would you like to do?",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Leave"], 
        }     
   ]

    )
    .then(answer => {
        switch (answer.questions) {
            case "View All Employees":
                viewEmployees();

                break;
            case "Add Employee":
                addEmployee(); 
                break;
            case "Update Employee Role":
                viewRole(); 
                break;
            case "View All Roles":
                 //add function here 
                break;
            case "Add Role":
                //add function here 
                break;
            case "View All Departments":
                //add function here 
                break;
            case "Add Department":
                //add function here 
                break;
            case "Leave":
                console.log('Goodbye')
                process.exit();
                      
        }
    }) .then (data => {
        promptInput();
    })
};


// const viewEmployees = () => {
//     const sql = `SELECT employee.first_name AS First_Name, employee.last_name AS Last_name FROM employee`;
//     db.query(sql, (err, res) => {
//         if (err) {
//           console.log(err);
//           return;
//         };
//     });
//     promptInput();
// };
    

promptInput();
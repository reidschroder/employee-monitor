const inquirer = require('inquirer');
//=====================================================================
// Connection to each function in the routes folders for switch case
//=====================================================================
const {viewEmployees, addEmployee} = require('./routes/employeeRoutes');
const {viewRole, updateRole, addRole} = require('./routes/roleRoutes');
const {viewDepartment, addDepartment} = require('./routes/departmentRoutes');

//=============================================================
//                          Prompt
//=============================================================
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
//======================================================================================================
//  switch case to run different functions from modular routes based on each choice in the list above             
//======================================================================================================
    .then(answer => {
        switch (answer.questions) {
//===============================================================
//            function to view all employees in current database == DONE==
//===============================================================
            case "View All Employees":
                viewEmployees();
                break;
//===============================================================
//            function to add employee to database
//===============================================================
            case "Add Employee":
                addEmployee(); 
                break;
//===============================================================
//              function to change role of an employee
//===============================================================
            case "Update Employee Role":
                updateRole(); 
                break;
//===============================================================
//  function to view all roles available in the current database == DONE ==
//===============================================================
            case "View All Roles":
                 viewRole();
                break;
//===============================================================
//               function to add another role
//===============================================================
            case "Add Role":
                addRole(); 
                break;
//===============================================================
//    function to view all departments in the current database  == DONE ==
//===============================================================
            case "View All Departments":
                viewDepartment();
                break;
//===============================================================
//          function to add a department to the database        == DONE ==
//===============================================================
            case "Add Department":
                addDepartment(); 
                break;
//===============================================================
//         process.exit escapes from node in the terminal
//===============================================================
            case "Leave":
                console.log('Goodbye')
                process.exit();
                      
        }
    }) .then (data => {
        promptInput();
    })
};

promptInput();
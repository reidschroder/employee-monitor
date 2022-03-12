const db = require('../db/connection');

const viewEmployees = () => {
    const sql = `SELECT employee.first_name AS First_Name, employee.last_name AS Last_name FROM employee`;
    db.query(sql, (err, res) => {
        if (err) {
          console.log(err);
          return;
        }; console.table(res);
    });
};

const addEmployee = () => {
    
}

module.exports = {viewEmployees, addEmployee};
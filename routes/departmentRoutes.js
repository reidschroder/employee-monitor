const db = require('../db/connection');

const viewDepartment = () => {
    const sql = `SELECT department.name AS Department FROM department`;
    db.query(sql, (err, res) => {
        if (err) {
          console.log(err);
          return;
        }; console.table(res);
    });
};

const addDepartment = () => {
    
}

module.exports = {viewDepartment, addDepartment};
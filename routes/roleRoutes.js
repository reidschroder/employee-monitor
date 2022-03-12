const db = require('../db/connection');

const viewRole = () => {
    const sql = `SELECT roles.job_title AS Job_Title, roles.salary AS Salary FROM roles`;
    db.query(sql, (err, res) => {
        if (err) {
          console.log(err);
          return;
        }; console.table(res);
    });
};

const updateRole = () => {

}

const addRole = () => {
    
}
module.exports = {viewRole, updateRole, addRole};
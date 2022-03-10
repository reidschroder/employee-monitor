INSERT INTO department (name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');
    
INSERT INTO roles (job_title, department_id, salary)
VALUES
    ('Sales Lead', 4, 100000),
    ('Salesperson', 4, 80000),
    ('Lead Engineer', 1, 150000),
    ('Software Engineer', 1, 120000),
    ('Account Manager', 2, 160000),
    ('Accountant', 2, 125000),
    ('Legal Team Lead', 3, 250000),
    ('Lawyer', 3, 190000);

INSERT INTO employee (first_name,last_name, roles_id, manager_id)
VALUES
    ('John', 'Doe', 1, null),
    ('Mike', 'Wozowski', 2, 1),
    ('John P', 'Sullivan', 3, null),
    ('Luke', 'Skywalker', 4, 3),
    ('Harry', 'Potter', 5, null),
    ('Wade', 'Watts', 6, 5),
    ('Bruce', 'Wayne', 7, null),
    ('Reid', 'Schroder', 8, 7);


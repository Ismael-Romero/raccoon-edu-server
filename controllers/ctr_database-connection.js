var mysql = require('mysql');

var connection = mysql.createConnection({
    host:       process.env.DATABASE_HOST,
    user:       process.env.DATABASE_USER,
    password:   process.env.DATABASE_KEY,
    database:   process.env.DATABASE_MODEL
});

connection.connect((err) => {
    if(err){
        console.error(`Database connection failed`);
        errorMessage(err);
        return;
    }
    okMessage(connection);
});

//Call the stored procedure to confirm the existence of the user
const matchLogin = (params, callback) => {
    
    const sql = `call match_user("${params.user}", "${params.pass}");`;

    connection.query(sql, (err, results, fields) => {
        if(err) {
            console.error('The request was rejected');
            errorMessage(err);
        }
        callback(results[0][0]);
    });
}

const newTask = (params, callback) => {
    const sql = `call create_task("${params.title}","${params.description}","${params.date}","${params.subject}")`;

    connection.query(sql, (err, results, fields) => {
        if(err){ errorMessage(err) }
        callback(results[0][0]);
    });
}

const getSubject = (params, callback) => {
    const sql = `call get_subjects("${params.teach}")`;

    connection.query(sql, (err, results, fields) => {
        if(err){ errorMessage(err) }
        callback(results[0]);
    });
}

const getTaskTeach = (params, callback) => {
    const sql = `call get_task_teach("${params.teach}")`;
    connection.query(sql,(err, results, fields) => {
        if (err) {errorMessage(err)}
        callback(results[0]);
    });
}


const deteleTask = (params, callback) => {
    const id = parseInt(params.id);
    const sql = `call delete_task(${id})`;
    connection.query(sql, (err, results, fields) => {
        if(err){errorMessage(err)}
        callback(results[0]);
    })
}

const getTaskUpdate = (params, callback) => {
    const id = parseInt(params.id);
    const sql = `call update_get_task(${id})`;
    connection.query(sql, (err, results, fields) => {
        if (err) {errorMessage(err)}
        callback(results[0]);
    });
}

const updateTask = (params, callback) => {
    const id = parseInt(params.id);
    const sql = `call update_task(${id}, "${params.title}","${params.desc}", "${params.date}", "${params.sub}")`;
    connection.query(sql, (err, results, fields) => {
        if (err) {errorMessage(err)}
        callback(results[0]);
    });
}
//Error or success messages
const okMessage = (conn) => {
    console.log(`Database connection established`);
    console.log(`DB Thread ID -> ${conn.threadId}`);
    console.log(`DB State     -> ${conn.state}`);
}

const errorMessage = (err) => {
    console.error('------------- ERROR INFORMATION ------------');
    console.error(`Code       -> ${err.code}`);
    console.error(`sql        -> ${err.sql}`);
    console.error(`sqlState   -> ${err.sqlState}`);
    console.error(`sqlMessage -> ${err.sqlMessage}`);
}

module.exports = {
    matchLogin, 
    newTask, 
    getSubject, 
    getTaskTeach, 
    deteleTask, 
    getTaskUpdate,
    updateTask
};
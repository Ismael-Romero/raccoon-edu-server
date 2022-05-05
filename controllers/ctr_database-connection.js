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
    
    const sql = `call login("${params.user}", "${params.pass}");`;

    connection.query(sql, (err, results, fields) => {
        if(err) {
            console.error('The request was rejected');
            errorMessage(err);
        }
        callback(results[0]);
    });
}

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

module.exports = matchLogin;
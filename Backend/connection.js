const mysql = require('mysql');
require('dotenv').config({ path: '/.env' })
const fs = require('fs');
var conn = mysql.createConnection({ host: "sql.freedb.tech", user: "freedb_Aditya", password: "xYd44CHsbF?%R#$", database: "freedb_nodecafe", port: 3306 });

conn.connect((err) => {
    if (!err) {
        console.log('success');
    } else {
        console.log('error', err)
    }
});

// const mysql = ('mysql2/promise');


module.exports = conn;

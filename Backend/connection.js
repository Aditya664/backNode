const mysql = require('mysql');
require('dotenv').config({ path: '/.env' })
const fs = require('fs');
var conn = mysql.createConnection({ host: "nodejs.mysql.database.azure.com", user: "Aditya664", password: "Rutuja@123", database: "nodejs", port: 3306, ssl: { ca: fs.readFileSync("./DigiCertGlobalRootCA.crt.pem") } });

conn.connect((err) => {
    if (!err) {
        console.log('success');
        throw err
    } else {
        console.log('error')
    }
});

module.exports = conn;
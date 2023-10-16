var mysql = require("mysql2");
console.log("Getting connection......");

var conn = mysql.createConnection({
    database: "defaultdb",
    host: "mysql-2c350324-cegeplimoilou-tp2-mb-ac-e.aivencloud.com",
    user: "mainuser",
    password: "AVNS_dy1bVOkVtP4zbEFvpzf",
    port: 18745
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
})
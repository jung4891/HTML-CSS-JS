var express = require('express');
var http = require('http');
var app = express();

let mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
});
connection.connect(); // 로그인하는거임 하이디sql
var server = http.createServer(app).listen(80);


app.get('/if', function (req, res) {
  res.sendfile("src/if.html")
});

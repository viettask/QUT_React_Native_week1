var express = require('express');
var http = require('http');
var socketIo = require('socket.io');
var mySQL = require('mysql');
const { on } = require('events');

var ObjectID = mySQL.ObjectID;
var db = mySQL(process.env.MYSQL_URI || 'mysql://localhost:3306/mydatabase');
var app = express();
var server = http.createServer(app);
var websocket = socketIo(server);

server.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});

var clients = [];

var users = db.collection('users');

var chatID =1;
websocket.on('connection', (socket) => {
    console.log('A user connected');
    clients[socket.id] = socket;    
    socket.on('userJoined', (userId) => {   
        onUserJoined(userId, socket);
    });

    socket.on('sendMessage', (message) => {
        onSendMessage(message, socket);
    });     

    // function onUserJoined(userId, socket) {
    //     try {
    //         if(!userId) {

    //         }
    //     }
});
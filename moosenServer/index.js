var http = require('http')
var https = require('https')
var express = require('express')
var socketio = require('socket.io')

var app = express()

var server = http.Server(app)
var socket = socketio(server)
server.listen(3000, () => console.log('listening on *:3000'))

socket.on('connection',(socket) => {
    console.log('connection acctepted')
})

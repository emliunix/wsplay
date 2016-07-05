var express = require('express')
var http = require('http')
var WSServer = require('../lib/websocketserver.js')
var config = require('../config.js')

var app = express()
var port = process.env.PORT || config.dev.port

app.use('/', express.static(config.build.assetsRoot))

var server = http.createServer(app)
server.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
WSServer(server)

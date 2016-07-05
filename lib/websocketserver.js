var Websocket = require('socket.io')

module.exports = function WSServer (server) {
  if (!(this instanceof WSServer)) return new WSServer(server)

  var io = this.io = Websocket(server, { servClient: false })
  let connectionHandler = socket => {
    socket.on('message', data => console.log(`Server received ${data}`))
    socket.on('msg', data => socket.emit('msg', data))
  }

  io.on('connection', connectionHandler)

  io.of('/wsapi').on('connection', connectionHandler)
}

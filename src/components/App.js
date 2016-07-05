import SocketClient from 'socket.io-client'
import html from './App.html'

var io = void 0

export default {
  template: html,
  data () {
    return {
      message: '',
      messageList: [ ]
    }
  },
  ready () {
    io = new SocketClient('/wsapi')
    io.on('connect', () => console.log('WebSocket connection established'))
    io.on('msg', data => {
      console.log(`received ${data}`)
      this.messageList.push(data)
    })
  },
  events: {
    send (msg) {
      console.log(`sending message ${msg}`)
      io.emit('msg', msg)
      this.message = ''
    }
  }
}

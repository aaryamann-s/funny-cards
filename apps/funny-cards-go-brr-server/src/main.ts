const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:4200', 'http://aaryamann.in'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});
app.use(cors());

const roomData = {};

io.on('connection', (socket) => {
  console.log('SOCKET!', socket.id);
  socket.on('disconnect', () => {
    console.log('disconnect');
  });
});

app.use('/api', (req, res) => {
  console.log('here');
  return res.json(true);
});

const port = process.env.PORT || 3333;
const server = httpServer.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

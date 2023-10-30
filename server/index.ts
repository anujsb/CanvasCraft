import express from 'express';
import http, { IncomingMessage, ServerResponse } from 'http'; // Import the necessary types from 'http'.
import { Server } from 'socket.io';

const app = express(); // Corrected the variable declaration for 'app'.
const server = http.createServer(app);

const io = new Server(server, { // Added a comma to separate the arguments.
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  socket.on('disconnect', () => { // Added a disconnect event handler.
    console.log('A user disconnected');
  });
  
  // You can add your custom event handlers here.
});

// Define a route for your Express app.
app.get('/', (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

const port = 3001; // Define the port number.

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express');
const helemt = require('helmet')
const cors = require('cors');
const { socketEvents } = require('./src/event/');
const router = require('./src/routes/api');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.use(express.json());

app.use(cors({origin:"*"}))
app.use(helemt())
app.use('/',router);

io.on("connection", socketEvents(io));

const PORT = 8001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




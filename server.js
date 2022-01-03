const express = require("express");
const cors = require("cors");

const socketIO = require("socket.io");
const http = require("http");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require('path')

const app = express();
app.use(bodyParser.json({ limit: "500mb", extended: true }));
app.use(
	bodyParser.urlencoded({
		limit: "500mb",
		extended: true,
		parameterLimit: 500000,
	})
);


const PORT = process.env.PORT || 8080;
// settings cors
app.use(cors({
	origin: "*",
	methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
	allowHeaders: ["Content-Type", "multipart/form-data"],
}));

// settings socketIO
const server = http.createServer(app);
const io = socketIO(server);

// setup socketIO
io.on("connection", (socket) => console.log("new client connected"));


// Khai báo static file

app.use('/static', express.static(path.join(__dirname, './src/public')))

//set route 
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
// setting port
server.listen(PORT, () => {
    console.log(`http://localhost:3000`);
});

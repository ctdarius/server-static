const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 8080;
// settings cors
app.use(cors({
	origin: "*",
	methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
	allowHeaders: ["Content-Type", "multipart/form-data"],
}));
// Khai báo static file
app.use(require('less-middleware')(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static('src/image'));
app.use(express.static('src/public'));

// app.use('/static', express.static(path.join(__dirname, './src/public')))
// app.use('/image', express.static(path.join(__dirname, './src/image')))

// setting port
app.listen(PORT, () => {
  
});

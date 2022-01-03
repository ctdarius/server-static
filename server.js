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
app.use('/static', express.static(path.join(__dirname, './src/public')))

// //set route 
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
// setting port
app.listen(PORT, () => {
    console.log(`http://localhost:3000`);
});

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload")
const path = require('path')

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileupload());

const books = require('./routes/bookroute');

app.use('/api/v1',books);

app.use(express.static(path.join(__dirname,"./frontend/public")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./frontend/public/index.html"));
});


module.exports = app;
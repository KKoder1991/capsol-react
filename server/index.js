const express = require('express');
const app = express()
const mysql = require("mysql");

app.listen(3001, () => {
    console.log("Your server is running on 3001");
});
const express = require('express');
const app = express()
const mysql = require("mysql");

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'NB2020_Apple',
    database: 'CapSol-System'
});

app.post('/create', (req, res) => {
    const eventName = req.body.eventName;
    const eventDate = req.body.eventDate;
    const eventLocation = req.body.eventLocation;
    const eventImage = req.body.eventImage;
    const eventDescription = req.body.eventDescription;
})

app.listen(3001, () => {
    console.log("Your server is running on 3001");
});
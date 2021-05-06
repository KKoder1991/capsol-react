const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "NB2020_Apple",
  database: "CapSol-System",
});

app.post("/create", (req, res) => {
  const eventName = req.body.eventName;
  const eventDate = req.body.eventDate;
  const eventLocation = req.body.eventLocation;
  const eventImage = req.body.eventImage;
  const eventDescription = req.body.eventDescription;

  db.query(
    "INSERT INTO CapSol-Events (eventName, eventDate, eventLocation, eventImage, eventDescription) VALUES (?, ?, ?, ?, ?)",
    [eventName, eventDate, eventLocation, eventImage, eventDescription],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Your server is running on 3001");
});

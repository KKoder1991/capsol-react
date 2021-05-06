const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "NB2020_Apple",
  database: "CapSol-System",
});

app.post("/create", (req, res) => {
  const {
    eventName,
    eventDate,
    eventLocation,
    eventImage,
    eventDescription,
  } = req.body;

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
app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "...",
  });
});

app.post("/test", (req, res) => {
  const {} = req.body;
  res.json({
    success: true,
    message: "...",
  });
});
app.listen(3001, () => {
  console.log("Your server is running on 3001");
});

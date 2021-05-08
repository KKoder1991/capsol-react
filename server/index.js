const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "capsol_schema",
});

app.post("/create", (req, res) => {
  const { date, name, place, description } = req.body;

  db.query(
    "INSERT INTO capsol_events (date, name, place, description) VALUES ( ?, ?, ?, ?)",
    [ date, name, place, description],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/events", (req, res) => {
  db.query("SELECT * FROM capsol_events", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM capsol_events WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Your server is running on 3001");
});

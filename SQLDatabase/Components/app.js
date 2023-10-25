//https://www.youtube.com/watch?v=sTHWNPVNvm8

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:8081"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
/*
app.use(
  session({                     // initialise la session
    key: "userId",              // nom du cookie
    secret: "subscribe",        // utilisé pour hasché l'id de session
    resave: false,              // a vous de trouver l'utilité
    saveUninitialized: false,   //a vous de trouver l'utilité
    cookie: {                   //
      expires: 60 * 60 * 24,    // 24 heures
    },                          
  })
);
*/
var db = mysql.createConnection({
  database: "defaultdb",
  host: "mysql-2c350324-cegeplimoilou-tp2-mb-ac-e.aivencloud.com",
  user: "mainuser",
  password: "AVNS_dy1bVOkVtP4zbEFvpzf",
  port: 18745
});


//Permet d'Ajouter un evenement en l'envoiyant sous form de json
app.post("/addEvent", (req, res) => {
  const eventName = req.body.eventName;
  const eventDate = req.body.eventDate;

    db.query(
      "INSERT INTO event (name, eDate) VALUES ( '" + eventName + "' ,  '" +eventDate + "' )",
    );

    res.end();
  });

  //Envoie tout les elements sous la forme de json
app.get("/getEvents", (req, res) =>
  {
      let err;
      let field;

      db.query("SELECT * FROM event", (err, result) => 
        {
            if(err)
            {
              res.send({err : err}) 
            } 
            else 
            {
              res.send(result);
            }
        }
      ); 
  }
);

//Efface un evenement dont on envoi l'id 
app.delete(
 "/deleteEvent", (req, res) =>
  {
      const id = req.body.id;
      db.query("DELETE FROM event WHERE event_id = " + id);
      res.end()
  }
);


/*
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  const eDate = req.body.date;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});
*/
app.listen(3001, () => {
  console.log("running server");
});
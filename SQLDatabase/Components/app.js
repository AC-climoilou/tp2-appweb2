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

var db = mysql.createConnection({
  database: "defaultdb",
  host: "mysql-2c350324-cegeplimoilou-tp2-mb-ac-e.aivencloud.com",
  user: "mainuser",
  password: "AVNS_dy1bVOkVtP4zbEFvpzf",
  port: 18745
});


//Permet d'Ajouter un evenement en l'envoiyant sous form de json
//A envoyer
//Client_id number
//name string
//eDate string representant une date
app.post("/addEvent", (req, res) => {
  const eventName = req.body.name;
  const eventDate = req.body.eDate;
  const clientId = req.body.client_id;

    db.query(
      "INSERT INTO event (name, eDate, client_id) VALUES ( '" + eventName + "' ,  '" +eventDate + "' , " + clientId + " );",
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
//A envoyer, 
app.delete(
 "/deleteEvent", (req, res) =>
  {
      const id = req.body.id;
      db.query("DELETE FROM event WHERE event_id = " + id);
      res.end();
  }
);

//Pour creer un utilisateur
app.post(
  "/addUser", (req, res) => 
  {
    console.log("addUser appeler");
      const username = req.body.username;
      const password = req.body.password;

      //Pour verifier que le username 
      db.query("SELECT COUNT(*) as nbMemeUsername FROM client WHERE username = '" + username + "' ;" , 
      (err, resQuery ) => {
        if(err)
        {
          console.log(err);
          res.send("Erreur sql");
          res.end();
        }
          bcrypt.hash(password, saltRounds,  (err, hash) => 
          {
            console.log(resQuery);
            if(err)
            {
               res.send("Erreur d'encryption du mot de passe");
            }
            else if(resQuery[0].nbMemeUsername > 0)
            {
               res.send("Il y a deja un utilisateur avec ce nom");
            }
            else
            {
               db.query("INSERT INTO client (username, password) VALUES ( '" + username + "' , '"   + hash + "');");
               res.send("Utilisateur créé");
            }
          }
        );
      }
      );
  }
);


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

      if (result.length > 0) 
      {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) 
          {
            req.session.user = result;
            res.send(result);
          }
          else 
          {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } 
      else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
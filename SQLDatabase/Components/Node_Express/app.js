const express = require('express');

const app = express();

// use recoit une fonction en parametre et elle sera appellé pour tous les requetes.
app.use((req, res) => {

    // permet de retourner la réponse en format JSON
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });

module.exports = app;

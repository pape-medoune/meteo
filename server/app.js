const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = "4400";
const axios = require("axios");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

const apiKey = "";

app.get("/display", (req, res) => {
  const { lon, lat } = req.query; // Utilisez req.query au lieu de req.body pour les requêtes GET
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    )
    .then(response => {
      res.send(response.data); // Utilisez response.data directement
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Une erreur s'est produite."); // Envoyez une réponse d'erreur appropriée
    });
});

app.post("/add", (req, res) => {
  const { lon, lat } = req.body;
  axios
    .post(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send("Une erreur s'est produite.");
    });
});

app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}`);
});

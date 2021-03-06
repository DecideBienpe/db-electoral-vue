// const Sequelize = require("sequelize");
/* eslint-disable no-console */
require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const db = require("./models");

const app = express();
// const PORT = process.env.PORT;

function checkOrigin(origin) {
  if (!origin) return true;
  if (origin.indexOf("localhost") > -1) return true;
  if (origin.indexOf("decidebienrepo.netlify.app") > -1) return true;
  if (origin.indexOf("decidebien.pe") > -1) return true;
  return false;
}

var corsOptions = {
  origin: function(origin, callback) {
    console.log("origin", origin);
    if (checkOrigin(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(logger("dev"));
app.use(cors(corsOptions));

app.use(express.json()); //http://expressjs.com/en/api.html#express.json
app.use(express.urlencoded({ extended: false })); //http://expressjs.com/en/5x/api.html#express.urlencoded

const regionesRouter = require("./routes/regiones");
const partidosRouter = require("./routes/partidos");
const congresoRouter = require("./routes/candidatosC");
const presidenteRouter = require("./routes/candidatosP");
const resumentPartidoRouter = require("./routes/resumenPartido");
const resumentPartido2Router = require("./routes/resumenPartido2");

app.use("/regiones", regionesRouter);
app.use("/partidos", partidosRouter);
app.use("/congreso/candidatos", congresoRouter);
app.use("/presidente/candidatos", presidenteRouter);
app.use("/resumen-partido", resumentPartidoRouter);
app.use("/resumen-partido2", resumentPartido2Router);

db.sequelize
  .sync()
  .then(() => {
    console.info(`App listening`);
  })
  .catch(err => {
    console.error(err);
  });
// Set our GCF handler to our Express app.
exports.helloGCS = app;

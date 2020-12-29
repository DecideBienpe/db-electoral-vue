/* eslint-disable no-console */
require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const db = require("./models");

const app = express();
const PORT = process.env.PORT;

app.use(logger("dev"));
app.use(cors());

app.use(express.json()); //http://expressjs.com/en/api.html#express.json
app.use(express.urlencoded({ extended: false })); //http://expressjs.com/en/5x/api.html#express.urlencoded

const regionesRouter = require("./routes/regiones");
const partidosRouter = require("./routes/partidos");
const congresoRouter = require("./routes/candidatosC");
const presidenteRouter = require("./routes/candidatosP");

app.use("/regiones", regionesRouter);
app.use("/partidos", partidosRouter);
app.use("/congreso/candidatos", congresoRouter);
app.use("/presidente/candidatos", presidenteRouter);

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.info(`App listening on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error(err);
  });

module.exports = app;

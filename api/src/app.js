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

const postRouter = require("./routes/posts");
const regionRouter = require("./routes/regions");

app.use("/posts", postRouter);
app.use("/regiones", regionRouter);

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

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");


const app = express();

const db = require("./models");

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json({ limit:  '10mb' }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

const Role = db.role;

  // db.sequelize.sync({force: true}).then(() => {
  //   console.log('Drop and Resync Db');
  //   initial();
  // });
 db.sequelize.sync();

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to MLM application." });
});
//routes for tutorial
app.use('/v1', routes);
// routes
require('./routes/auth')(app);
require('./routes/user')(app);

app.use('*', (req, res) => {
  res.status(404).json({ 
    status: 'error',
    message: `unimplemented ${req.method} ${req.path} route access`})
});



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app
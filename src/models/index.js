'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

config.pool = {
  max: 100,
  min: 0,
  acquire: 60000,
  idle: 30000,
};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("../models/user.js")(sequelize, Sequelize);
db.role = require("../models/role.js")(sequelize, Sequelize);
db.profiles = require("../models/profiles.js")(sequelize, Sequelize);
db.tutorials = require("../models/tutorials.js")(sequelize, Sequelize);
db.planAs = require("../models/planA")(sequelize, Sequelize);
db.planBs = require("../models/planB")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.profiles.belongsTo(db.user, { 
  as: "profile",
        foreignKey: "userId",
        otherKey: "profileId"
 });
db.user.hasOne(db.profiles, {
  as: "user",
   onDelete: "Cascade",
   foreignKey: "userId",
   otherKey: "profileId"

});

db.planAs.belongsToMany(db.user, { 
  through: "plan_a_users",
  foreignKey: "planAId",
  otherKey: "userId"
  });
db.user.hasOne(db.planAs, {
  through: "plan_a_users",
  foreignKey: "userId",
  otherKey: "planAId"

});

db.planBs.belongsToMany(db.user, { 
  through: "plan_b_users",
  foreignKey: "planBId",
  otherKey: "userId"
});
db.user.hasOne(db.planBs, {
  through: "plan_b_users",
  foreignKey: "userId",
  otherKey: "planBId"

});
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;

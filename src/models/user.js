const uuid = require('uuid/v4');
//import { uuid } from "uuid";
module.exports = (sequelize, Sequelize) => {
  
    const User = sequelize.define("users", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
       // defaultValue: Sequelize.literal('uuid_generate_v4()')

      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
    });
    User.beforeCreate((users, _ ) => {
      return users.id = uuid();
    });
    return User;
  };
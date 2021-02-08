// 'use strict';
// const {
//   Model
// } = require('sequelize');
// const { user } = require('.');
// const role = require('./role');

// module.exports = (sequelize, DataTypes) => {
//   class profiles extends Model {
//     static associate(models) {
     
//     }
//   };
//   profiles.init({
//     name: DataTypes.STRING,
//     dob: DataTypes.DATE,
//     accountNo: DataTypes.INTEGER,
//     bank: DataTypes.STRING,
//     phoneNo: DataTypes.INTEGER,
//     stateOfResidence: DataTypes.STRING,
//     nextOfKin: DataTypes.STRING,
//     nextOfKinPhoneNo: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'profiles',
//     timestamps: true,
//   });
//   return profiles;
// };

module.exports = (sequelize, Sequelize) => {
  const Profile = sequelize.define("profiles", {
    username: {
      type: Sequelize.STRING
    },
    email:{
      type: Sequelize.STRING
    },
    dob: {
      type: Sequelize.STRING
    },
    accountNo: {
      type: Sequelize.STRING
    },
    bank: {
      type: Sequelize.STRING
    },
    phoneNo: {
      type: Sequelize.STRING
    },
    stateOfResidence: {
      type: Sequelize.STRING
    },
    counrty:{
      type: Sequelize.STRING

    },
    nextOfKin: {
      type: Sequelize.STRING
    },
    nextOfKinPhoneNo: {
      type: Sequelize.STRING
    }
  });

  return Profile;
};
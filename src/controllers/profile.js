const { Sequelize } = require('sequelize');
const models = require("../models");
const Profile = models.profiles;
const { Op } = Sequelize;

// Create and Save a new profile
exports.create = (req, res) => {
  console.log('>>> ', req.body)
   // Validate request
   if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Profile
  const profile = {
    username: req.body.username,
    email: req.body.email,
    dob: req.body.dob,
    accountNo: req.body.accountNo,
    bank: req.body.bank,
    phoneNo: req.body.phoneNo,
    stateOfResidence: req.body.stateOfResidence,
    counrty: req.body.counrty,
    nextOfKin: req.body.nextOfKin,
    nextOfKinPhoneNo: req.body.nextOfKinPhoneNo,
    userId: req.body.userId
  };

  // Save Profile in the database
  Profile.create(profile)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Profile."
      });
    });
};

// Retrieve all Profile from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Profile.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Profiles."
        });
      });
};

// Find a single Profile with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Profile.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Profile with id=" + id
        });
      });
};

// Update a Profile by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Profile.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Profile was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Profile with id=${id}. Maybe Profile was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Profile with id=" + id
        });
      });
};

// Delete a Profile with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Profile.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Profile was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Profile with id=${id}. Maybe Profile was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Profile with id=" + id
        });
      });
};

// Delete all Profiles from the database.
exports.deleteAll = (req, res) => {
  Profile.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Profiles were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Profiles."
          });
        });
};

// Find all published Profiles
exports.findByUserId = (req, res) => {
  Profile.findOne({ where: { userId: req.params.userId } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Profiles."
      });
    });
};

//join table
// exports.joinUserProfile=(req, res)=> {
//   const id = req.params.userId;
//   // find the user & project
//   const user = await User.findOne({ where: { id: userId } });
//   const profile = await Profile.findOne({ where: { userId: userId } });
//   // add project and user to the join table with the custom method:
//   profile.addUser(user);
// }
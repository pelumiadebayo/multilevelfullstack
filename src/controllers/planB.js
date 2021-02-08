const { Sequelize } = require('sequelize');
const models = require("../models");
const PlanB = models.planBs;
const { Op } = Sequelize;

// Create and Save a new profile
exports.create = (req, res) => {
  console.log('>>> ', req.body)
   // Validate request
   if (!req.body.PaymentEvidence) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Profile
  const planB = {
    amountPaid: req.body.amountPaid,
    uplineId: req.body.uplineId,
    userId: req.body.userId,
    PaymentEvidence: req.body.PaymentEvidence,
    Verified: false,
    isDisapproved: false
  };

  // Save Profile in the database
  PlanB.create(planB)
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
  
    PlanB.findAll({ where: condition })
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

    planB.findByPk(id)
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

    planB.update(req.body, {
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

    planB.destroy({
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
    planB.destroy({
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

// Find by upline
exports.findByUplineId = (req, res) => {
    PlanB.findOne({ where: { userId: req.params.uplineId, isDisapproved: false } })
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

//find by userId
exports.findByUserId = (req, res) => {
  PlanB.findOne({ where: { userId: req.params.userId, isDisapproved: false } })
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

//find by userId
exports.findByUserId = (req, res) => {
  PlanB.findOne({ where: { userId: req.params.userId, isDisapproved: false } })
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
module.exports = (sequelize, Sequelize) => {
    const PlanA = sequelize.define("planAs", {
      amountPaid: {
        type: Sequelize.STRING
      },
      payerName: {
        type: Sequelize.STRING
      },
      accountDetailOfPayer: {
        type: Sequelize.STRING
      },
      dateOfPayment: {
        type: Sequelize.STRING
      },
      PaymentEvidence: {
        type: Sequelize.STRING
      },
      verified: {
        type: Sequelize.BOOLEAN
      },
      verifiedBy: {
        type: Sequelize.STRING
      },
      verificationDate: {
        type: Sequelize.STRING
      },
      isDisapproved: {
        type: Sequelize.BOOLEAN
      },
      Level: {
        type: Sequelize.INTEGER
      },
      downlineCount: {
        type: Sequelize.INTEGER
      },
      uplineId: {
        type: Sequelize.STRING
      },
      L2UplineId: {
        type: Sequelize.STRING
      },
      L3UplineId: {
        type: Sequelize.STRING
      },
      L4UplineId: {
        type: Sequelize.STRING
      },
      L5UplineId: {
        type: Sequelize.STRING
      },
      L6UplineId: {
        type: Sequelize.STRING
      },
    });
  
    return PlanA;
  };
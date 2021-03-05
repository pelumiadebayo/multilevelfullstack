module.exports = (sequelize, Sequelize) => {
    const PlanB = sequelize.define("planBs", {
      amountPaid: {
        type: Sequelize.STRING
      },
      PayerName: {
        type: Sequelize.STRING
      },
      AccountDetailOfPayer: {
        type: Sequelize.STRING
      },
      DateOfPayment: {
        type: Sequelize.STRING
      },
      PaymentEvidence: {
        type: Sequelize.STRING
      },
      Verified: {
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
      DownlineCount: {
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
  
    return PlanB;
  };
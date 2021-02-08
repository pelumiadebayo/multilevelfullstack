module.exports = (sequelize, Sequelize) => {
    const PlanB = sequelize.define("planBs", {
      amountPaid: {
        type: Sequelize.STRING
      },
      uplineId: {
        type: Sequelize.STRING
      },
      PaymentEvidence: {
        type: Sequelize.STRING
      },
      Verified: {
        type: Sequelize.BOOLEAN
      },
      isDisapproved: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return PlanB;
  };
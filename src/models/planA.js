module.exports = (sequelize, Sequelize) => {
    const PlanA = sequelize.define("planAs", {
      amountPaid: {
        type: Sequelize.STRING
      },
      uplineId: {
        type: Sequelize.STRING
      },
      PaymentEvidence: {
        type: Sequelize.STRING
      },
      verified: {
        type: Sequelize.BOOLEAN
      },
      isDisapproved: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return PlanA;
  };
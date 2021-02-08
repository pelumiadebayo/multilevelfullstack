const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/v1/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post(
    "/v1/auth/signupModerator",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signupModerator
  );

  app.post(
    "/v1/auth/signupAdmin",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signupAdmin
  );

  app.get(
    "/v1/auth/getAllAdmins",
    
    controller.GetAllAdmins
  );

  app.post("/v1/auth/signin", controller.signin);
};
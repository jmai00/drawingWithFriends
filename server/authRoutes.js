var controller = require('./authController');

module.exports = function (auth) {
  auth
    .post('/', function (req, res, next) {
      debugger
      if (req.body.createNewAccount) {
        controller.signup(req, res, next);
      } else {
        controller.signin(req, res, next);
      }
    })
}

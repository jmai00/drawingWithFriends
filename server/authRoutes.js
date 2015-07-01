var controller = require('./authController');

module.exports = function (auth) {
  auth
    .post('/', function (req, res, next) {
      if (req.body.createNewAccount) {
        controller.signup(req, res, next);
      } else {
        controller.signin(req, res, next);
      }
    })
    .get('/signout', controller.signout)
}

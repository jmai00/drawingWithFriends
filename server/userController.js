var recentUsers = require('./recentUsers');

module.exports = {
  getRecentUsers: function(req, res, next) {
    res.send(recentUsers);
  }
}

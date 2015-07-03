var recentUsers = {};

var cleanRecentUsers = function () {
  var time = new Date();
  var recency;

  for(var user in recentUsers) {
    recency = recentUsers[user];
    if(time - recency > 300000) {
      delete recentUsers[user];
    }
  }
};

setInterval(cleanRecentUsers, 300000);

module.exports = recentUsers;

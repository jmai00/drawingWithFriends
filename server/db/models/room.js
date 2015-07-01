var db = require('../config');
require('./user');
require('./picture');

var Room = db.Model.extend({
  tableName: 'Room',
  hasTimestamps: true,
  
  user: function() {
    return this.hasMany('User');
  }

  picture: function() {
    return this.hasMany('Picture');
  }
});

module.exports = db.model('Room', Room);

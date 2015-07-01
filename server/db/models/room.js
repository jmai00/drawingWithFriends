var db = require('../config');

var room = db.Model.extend({
  tableName: 'Room',
  hasTimestamps: true,
  
});

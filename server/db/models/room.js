var db = require('../config');

var room = db.Model.extend({
  tableName: 'Room',
  hasTimestamps: true,
  
  picture: function() {
    return this.belongsTo('Picture', 'picture_id');
  }
});

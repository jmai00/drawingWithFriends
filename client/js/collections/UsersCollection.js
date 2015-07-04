// PicturesCollection.js
// This collection will contain Picture Models

var app = app || {};

app.UsersCollection = Backbone.Collection.extend({
  initialize : function(){
    var collection = this;
    this.requestUsers();
    setInterval(function() {
      collection.requestUsers(); 
    }, 1000);
  },
  requestUsers: function () {
    socket.emit('users needed');
    socket.on('users served', function(data){
      this.processUsers(data);
    }.bind(this));
  },
  processUsers : function(users){
    var models = app.Users.models = [];
    var model;

    var list = Object.keys(users);
    

    for(var i = 0; i < list.length; i++) {
      model = new app.UserModel({ name : list[i] })
      app.Users.add(model)
    }

    this.trigger('users updated');
  }
});


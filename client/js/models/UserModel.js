var app = app || {};

app.UserModel = Backbone.Model.extend({
  initialize: function(options) {
    this.set('name', options.name);
  }
});



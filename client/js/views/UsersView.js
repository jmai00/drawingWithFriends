var app = app || {};

app.UsersView = Backbone.View.extend({
  initialize: function() {
  },
  'tagName': 'ul',
  'className': 'users',
  render: function () {
    var el = this.$el;

    var models = this.collection.models;
    var model, view, element;

    debugger

    for(var i = 0; i < models.length; i++) {
      model = models[i];
      view = new app.UserView({ model: model});
      element = view.render()
      el.append(element); 
      // el.append('<li>user: ' + model.get('name') + '</li>'); 
    }

    return el;

  }
});

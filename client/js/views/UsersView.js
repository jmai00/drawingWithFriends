var app = app || {};

app.UsersView = Backbone.View.extend({
  initialize: function() {
  },
  'tagName': 'div',
  'className': 'users',
  render: function () {
    var el = this.$el;
    var models = app.Users.models;
    var model, view, element;

    for(var i = 0; i < models.length; i++) {
      model = models[i];
      view = new app.UserView({ model: model });
      element = view.render();
      el.append(element);
    }
    return el;
  }
});

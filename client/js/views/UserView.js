var app = app || {};

app.UserView = Backbone.View.extend({
  initialize: function() {
    // this.render();
  },
  'tagName': 'li',
  'className': 'user',
  render: function () {
    var name = this.model.get('name');
    var el = this.$el;
    el.append(name); 
    return el[0];
  }
});

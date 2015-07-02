// views/LineView.js
// TODO refactor

var app = app || {};

app.RoomView = Backbone.View.extend({
  tagName: 'div',
  className: 'roomView',
  initialize: function() {
    this.render();
  },
  template: _.template('    \
    <div class="draw">draw</div>    \
    <div class="users">users</div>    \
    <div class="chat">chat</div>    \
  '),
  render: function() {
    var el = this.$el;
    el.html(this.template()); 
    $('.container').html(this.el);
  
    var draw = el.find('.draw');
    var users = el.find('.users');
    var chat = el.find('.chat');

    var pictureView = new app.PictureView({
      model: new app.PictureModel(),
      container: d3.select('.draw'),
      element: '.draw' //TODO this is a little different compared to below rendering for now cuz d3
    });

    var timerView = new app.TimerView({
      model: new app.TimerModel()
    });

    $('.draw').append(pictureView).append(timerView.render());

    // draw.html(drawView);
  }
});


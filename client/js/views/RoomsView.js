var app = app || {};

app.RoomsView = Backbone.View.extend({
  initialize : function() {
    this.render();
  },
  render : function () {
    $('.container').append('<p>Join or Create a Room Below</p><div class="createNewRoom"><a href="#room">+</a></div><input class="newRoomName" type="text"></input><table style="width:100%"><tr><td>Example Room</td><td>Users: 1/6</td></tr></table>');
  }
});

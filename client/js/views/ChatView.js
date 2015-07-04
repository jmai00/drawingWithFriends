var app = app || {};

app.ChatView = Backbone.View.extend({
  tagName: 'div',
  className: 'chat',
  initialize: function() {
    this.render();
    socket.on('user message', function(data){
      console.log("Got Message");
      this.addMessage(data);
    }.bind(this));

  },

  template: _.template('<li><span class="username"/><%- user -></span><span class="message"><%- message -></span></li>'),
  
  events: {
    'click .clearButton': function(event) {
      this.clearMessage();
    },

    'keypress .inputMessage': function(event) {
      if (event.keyCode === 13) {
        this.sendMessage();
      }

    }
  },

  render: function() { 
    this.$el.append(
      '<input class="inputMessage" placeholder="Type here..."/> \
      <input type="button" value="Clear" class="clearButton"> \
      <div class="chatArea"><ul class="messages"></ul></div>');
  },

  sendMessage: function() {
    var message = _.escape($('.inputMessage').val());
    $('.inputMessage').val('');

    var data = { username: app.username, message: message };
    socket.emit('user message', data);
    this.addMessage(data);
    
  },

  addMessage: function(data) {
    $('.messages').append(
      '<li><span class="username">' + data.username + '</span>: <span class="message">' + data.message + '</span></li>');
  },

  clearMessage: function() {
    $('.messages').empty();
  }
});

var app = app || {};

app.ChatView = Backbone.View.extend({
  tagName: 'div',
  className: 'chat',
  initialize: function() {
    this.render();
    socket.on('user message', function(data){});
  },

  template: _.template('<span class="username"/><%- user -></span><span class="message"><%- message -></span>'),
  
  events: {
    'onclick': function(event) {
    }
  },

  render: function() { 
    this.$el.append('<div class="chatArea"> \
        <ul class="messages"></ul> \
      </div> \
      <input class="inputMessage" placeholder="Type here..."/>');
      
  },

  addMessage: function(data) {
    this.$el.append(this.template(data));
  },

  clearMessage: function() {
    this.$el.empty();
  }
});

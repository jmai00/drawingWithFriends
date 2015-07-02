var app = app || {};

app.AuthView = Backbone.View.extend({
  initialize: function(options) {
    this.render();
  },
  template: _.template('  \
    <form class="auth" onsubmit="return false;">     \
      <label><input type="checkbox" name="createNewAccount"> Create new account </label> \
      <input type="text" name="username" placeholder="username">     \
      <input type="password" name="password" placeholder="password">     \
      <span class="error"></span> \
      <input type="submit" value="Submit">     \
    </form>     \
  '),
  render: function () {
    var el = this.$el;
    el.html(this.template); 
    $('.container').append(el);

    el.find('.auth').on('submit', function() {

      // generate body from form
      var body = {}, name, value;
      var arr = $(this).serializeArray(); 
      for (var i = 0; i < arr.length; i++) {
        name = arr[i].name;
        value = arr[i].value;
        body[name] = value;
      }
      
      // make post request
      $.ajax({
        method: 'POST',
        url: '/auth',
        data: body
      }).success(function (response) {
        app.loggedIn = true;
        app.username = response.username;
        app.router.prototype.navigate('/logout', { trigger : true });
      }).error(function(error) {
        var responseTextObject = JSON.parse(error.responseText);
        var responseText = responseTextObject.error;
        el.find('.error').text(responseText).show();
      });

    }); // end auth on submit

  }
});

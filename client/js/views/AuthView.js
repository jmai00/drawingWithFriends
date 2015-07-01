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
      <button>Go</button>     \
      <span class="error"></span> \
    </form>     \
    <span class="success" onsubmit="return false;" style="display: none;">   \
      <h1>Success!</h1>   \
      <form class="signout">   \
          <button>Log Out</button>   \
      </form>   \
    </span>   \
  '),
  // template_logout: _.template(' \

  // '),
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
        el.find('.auth').hide();
        el.find('.success').show();
      }).error(function(error) {
        el.find('.error').text(error.statusText).show();
      });

    }); // end auth on submit

    el.find('.signout').on('submit', function () {
      $.ajax({
        method: 'GET',
        url: 'auth/signout'
      }).success(function () {
        el.find('.auth').show();
        el.find('.success').hide();
        app.router.prototype.navigate('/', { trigger : true });
      }).error(function (error) {
        throw error;
      });
    }); // end signout on submit
  }
});

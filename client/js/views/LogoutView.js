var app = app || {};

app.LogoutView = Backbone.View.extend({
  initialize: function(options) {
    this.render();
  },
  template: _.template('  \
    <span class="success" onsubmit="return false;">   \
      <h1>You are logged in</h1>   \
      <form class="signout">   \
          <button>Log Out</button>   \
      </form>   \
    </span>   \
  '),
  render: function () {
    var el = this.$el;
    el.html(this.template); 
    $('.container').append(el);

    el.find('.signout').on('submit', function () {
      $.ajax({
        method: 'GET',
        url: 'auth/signout'
      }).success(function () {
        app.loggedIn = false;
        app.router.prototype.navigate('/auth', { trigger : true });
      }).error(function (error) {
        throw error;
      });
    }); // end signout on submit
  }
});

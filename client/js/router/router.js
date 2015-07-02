var app = app || {};

app.router = Backbone.Router.extend({
  routes : {
    '' : 'home',
    'draw' : 'draw',
    'rooms' : 'rooms',
    'gallery' : 'gallery',
    // 'gallery/:page' : 'gallery', //TODO ????
    'auth' : 'auth',
    'logout' : 'logout',
    'room/:id' : 'room'
  },
  initialize: function(){
    this.appModel = new app.AppModel(); //the 'app' is the drawing portion of the app
  },
  home : function(){
    //TODO refactor all these container emptys
    $('.container').empty();
    // $('.toolbar').empty();
    //$('.color-picker').empty();
    var homeView = new app.HomeView();
  },
  draw : function () {
    //console.log('running main');
    $('.container').empty();
    // $('.toolbar').empty();
    //$('.color-picker').empty();
    //if (this.appView) {
      //this.appView.remove();
      //debugger;
    //}
    this.appView = new app.AppView({model: this.appModel});
    //render the view when user goes to draw tab
    //var picture = new app.PictureView({
        //model: data,
        //container: container,
        //width: '500px',
        //height: '500px'
      //});
    },
  rooms : function(page){
    $('.container').empty();
    this.roomsView = new app.RoomsView();
  },
  gallery : function(page){
    $('.container').empty();
    // $('.toolbar').empty();
    this.picturesCollection = new app.PicturesCollection();
    this.picturesView = new app.PicturesView({collection: this.picturesCollection});
  },
  auth: function () {
    if(app.loggedIn) { 
      app.router.prototype.navigate('/logout', { trigger : true });
      return;
    }
    
    $('.container').empty();
    new app.AuthView({model: app.AuthModel });
  },
  logout: function () {
    if(!app.loggedIn) { 
      app.router.prototype.navigate('/auth', { trigger : true });
      return;
    }
    $('.container').empty();
    new app.LogoutView({model: app.LogoutModel });
  },
  room: function (id) {
    new app.RoomView();
  }
});


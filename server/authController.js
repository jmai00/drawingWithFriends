var User = require('./db/models/user')

var controller = {
  signin: function (req, res, next) {
    var username = req.body.username,
        password = req.body.password;

    new User({username: username}).fetch().then(function(user){
     if( !user ){  
       res.status(401).send({error: "Unknown user"});
     }
     else {
       user.comparePassword(password, function(match){
         if( match) {
           req.session.regenerate(function (err) {
             req.session.userId = user.id;
             res.send(user);
           });
         } else {
           res.status(401).send({error: "Incorrect username or password"});
         }
       });
     }
    });
  },
  signout: function (req, res, next) {
    console.log('signout')
    req.session.destroy(function() {
      console.log('destroy callback and redirect')
      res.send();
    });
  },
  signup: function (req, res, next) {
    var body = req.body;
    new User({ username: body.username }).fetch().then(function(user) {
      if (!user) {
        var newUser = new User({
          username: body.username,
          password: body.password
        }).save().then(function(savedUser){
          req.session.regenerate(function (err) {
            req.session.userId = savedUser.id;
            res.send();
          });
        });
      } 
      else {
        console.log('Account already exists');
        res.status(401).send({error: 'Account already exists'});
      }
    });    
  }
}

module.exports = controller;

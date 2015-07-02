var session = require('express-session');
var sessionOptions = {
  path: '/',
  // httpOnly: true,
  secure: false,
  secret: 'drawing',
  cookie: { maxAge: 60000, secure: false },
  maxAge: 60000,
  resave: false,
  saveUninitialized: false
};

var bodyParser = require('body-parser');
var multer = require('multer');

module.exports = function (app, express) { 

  var authRoutes = express.Router();

  app.use(express.static(__dirname + '/../client'));
  app.use(session(sessionOptions));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended : true }));
  app.use(multer());


  app.use('/auth', authRoutes);

  require('./authRoutes')(authRoutes);  
};

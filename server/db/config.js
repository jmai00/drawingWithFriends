var knex = require('knex')({
  client : 'mysql',
  connection : { //TODO edit this to depend on ENV variable 'production' or not
    host : '127.0.0.1',
    user : 'root',
    //password : 'brian',
    database : 'drawly', //for now, or making a schema to make a custom local db/open sql to make
    charset : 'utf8',
  }
});

var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

bookshelf.knex.schema.hasTable('User').then(function(exists) {
  if (!exists) {
    bookshelf.knex.schema.createTable('User', function (user) {
      user.increments('id').unsigned().primary();
      user.string('username', 40).unique();
      user.string('email', 40);
      user.string('password', 100);
      user.timestamps();
    }).then(function (table) {
      console.log('Created table User');
    });
  } 
});

bookshelf.knex.schema.hasTable('Room').then(function(exists) {
  if (!exists) {
    bookshelf.knex.schema.createTable('Room', function (room) {
      room.increments('id').unsigned().primary();
      room.string('title', 40);
      room.string('description', 40);
      room.string('password', 100);
      room.timestamps();
    }).then(function (table) {
      console.log('Created table Room');
    });
  } 
});

bookshelf.knex.schema.hasTable('Picture').then(function (exists) {
  if (!exists) {
    bookshelf.knex.schema.createTable('Picture', function (picture) {
      picture.increments('id').unsigned().primary();
      picture.integer('user_id').unsigned().references('User.id');
      picture.string('title', 40);
      picture.string('description', 40);
      picture.timestamps();
    }).then(function (table) {
      console.log('Created table Picture');
    });
  }
});

bookshelf.knex.schema.hasTable('Join_Room').then(function(exists) {
  if (!exists) {
    bookshelf.knex.schema.createTable('Join_Room', function (room) {
      room.increments('id').unsigned().primary();
      room.integer('user_id').unsigned().references('User.id');
      room.integer('room_id').unsigned().references('Room.id');
    }).then(function (table) {
      console.log('Created table Join_Room');
    });
  } 
});

bookshelf.knex.schema.hasTable('Line').then(function (exists) {
  if (!exists) {
    bookshelf.knex.schema.createTable('Line', function (line) {
      line.integer('id').unsigned().primary();
      line.integer('picture_id').unsigned().references('Picture.id');
      line.text('coordinates'); //json
      line.string('fill', 7);
      line.string('stroke_width', 7);
      line.string('stroke', 7);
      line.timestamps();
    }).then(function (table) {
      console.log('Created table Line');
    });
  }
});

module.exports = bookshelf;

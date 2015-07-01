CREATE DATABASE IF NOT EXISTS drawly;

USE drawly;

CREATE TABLE IF NOT EXISTS User (
  id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(40) UNIQUE,
  email varchar(40) UNIQUE,
  password varchar(100),
  picture varchar(255),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)

) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS Line (
  id int(11) NOT NULL AUTO_INCREMENT,
  picture_id int(11),
  fill varchar(6),
  width varchar(7),
  stroke varchar(6),
  coordinates TEXT,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS Picture (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(40),
  description varchar(255),
  user_id int(11),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY fk_uid(user_id) REFERENCES User(id),
  FOREIGN KEY fk_lid(line_id) REFERENCES Line(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS Room(
  id int(11) NOT NULL AUTO_INCREMENT,
  description varchar(255),
  type varchar(20),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS Join_Room(
  id int(11) NOT NULL AUTO_INCREMENT;
  user_id int(11),
  room_id int(11),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY fk_uid(user_id) REFERENCES user(id),
  FOREIGN KEY fk_rid(room_id) REFERENCES room(id)
) ENGINE=InnoDB;

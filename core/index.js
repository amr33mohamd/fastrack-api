
   express = require('express');
   app = express();
  var mysql = require('mysql');
   port = process.env.PORT || 80;
     addSubtractDate = require("add-subtract-date");
    moment = require('moment');
moment().format('L');
  app.set('view engine', 'ejs');
  app.use('/public', express.static('public'));
  app.use('/images', express.static('images'));
  app.use('/books', express.static('books'));
  app.use('/books-images', express.static('books-images'));
  app.use('/videos', express.static('videos'));

   fileUpload = require('express-fileupload');
   var bodyParser=  require("body-parser");
   app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
fs = require('fs');

app.use(fileUpload());
  con = mysql.createConnection({
  host: "159.89.95.28",
  user: "amr",
  password: "a33304454",
  database:'fastrack'
  });

  /*
   con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"snap",
  charset: 'utf8'
  });
*/
//session ----->
var NodeSession = require('node-session');

// init
session = new NodeSession({secret: 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD'});

;


  app.listen(port,function(){
    console.log('listenning on port '+port);

  });

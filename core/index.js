
   express = require('express');
   app = express();
  var mysql = require('mysql');
   port = process.env.PORT || 5050;
Jimp = require("jimp");
     addSubtractDate = require("add-subtract-date");
    moment = require('moment');
moment().format('L');
  app.set('view engine', 'ejs');
  app.use('/public', express.static('public'));
  app.use('/images', express.static('images'));
  app.use('/books', express.static('books'));
   fileUpload = require('express-fileupload');
   var bodyParser=  require("body-parser");
   app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
fs = require('fs');

app.use(fileUpload());
  con = mysql.createConnection({
  host: "y2w3wxldca8enczv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  user: "embk731hbbqjmw0a",
  password: "htte52bi0rj3ozi0",
  database:"djs0qrbodmf32r4i",

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

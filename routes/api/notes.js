app.get('/api/notes',function(req,res){
  var subject_id = req.query.id;
    con.query('SELECT id, name,descc AS `description`,image,price FROM notes where subject_id= ? and price > 0 ORDER BY name ',[subject_id], function(err,data) {
        if(!err) {
            res.send(data);
        }
        else{
          res.send(err);
        }
    })
});

app.get('/api/mynotes',function(req,res){
  var id = req.query.id;
  var mynotes = [];
  con.query('SELECT note_id FROM 	ownedNotes where deviceId= ?',[id],function(err,notes){
    for(let i in notes){
      con.query('SELECT id, name,descc AS `description`,image,price FROM notes where id= ? ',[notes[i].note_id], function(errr,data) {
        mynotes.push(data[0]);
        if(i == notes.length-1){
          res.send(mynotes);
        }
      })

    }
  })

});

app.get('/try',function(req,res){
  var pdftohtml = require('pdftohtmljs');
var converter = new pdftohtml('books/0.60416769657951571.pdf', "sample.html");

// See presets (ipad, default)
// Feel free to create custom presets
// see https://github.com/fagbokforlaget/pdftohtmljs/blob/master/lib/presets/ipad.js
// convert() returns promise
converter.convert('ipad').then(function() {
  console.log("Success");
}).catch(function(err) {
  console.error("Conversion error: " + err);
});

// If you would like to tap into progress then create
// progress handler
converter.progress(function(ret) {
  console.log ((ret.current*100.0)/ret.total + " %");
});
})

app.get('/api/freenotes',function(req,res){
  var subject_id = req.query.id;
    con.query('SELECT id, name,descc AS `description`,image,price FROM notes where subject_id= ? and price= ? ORDER BY name ',[subject_id,0], function(err,data) {
        if(!err) {
            res.send(data);
        }
        else{
          res.send(err);
        }
    })
});

app.get('/api/searchnotes',function(req,res){
  var subject_id = req.query.id;
    con.query("SELECT id, name,descc AS `description`,image,price FROM notes where name  LIKE ? ORDER BY name ",['%'+subject_id+'%'], function(err,data) {
        if(!err) {
            res.send(data);
        }
        else{
          res.send(err);
        }
    })
});

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

app.get('/api/verifynumber',function(req,res){
  var phone = req.query.phone;
  con.query('SELECT * FROM users where number= ? and status = ?',[phone,1], function(err,data) {
    if(data.length == 0){
      con.query('insert into users(number,status) values(?,?)',[phone,1],function(err,response){
        if(err){
          res.json({response:err})
        }
        else{
          res.json({response:1});
        }
      })
    }
    else {
      res.json({response:0});
    }
  });
});

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

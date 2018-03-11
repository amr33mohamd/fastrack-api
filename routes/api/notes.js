app.get('/api/notes',function(req,res){
  var subject_id = req.query.id;
    con.query('SELECT id, name,descc AS `description`,image,price FROM notes where subject_id= ? ORDER BY name ',[subject_id], function(err,data) {
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

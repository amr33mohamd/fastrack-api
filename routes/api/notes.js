app.get('/api/notes',function(req,res){
  var subject_id = req.query.id;
    con.query('SELECT id, nameوdescription FROM notes where subject_id= ? ORDER BY id ASC ',[subject_id], function(err,data) {
        if(!err) {
            res.send(data);
        }
        else{
          res.send(err);
        }
    })
});

app.get('/api/subjects',function(req,res){
  var university_id = req.query.id;
    con.query('SELECT id, name,description FROM subjects where university_id= ? ORDER BY id ASC ',[university_id], function(err,data) {
        if(!err) {
            res.send(data);
        }
        else{
          res.send(err);
        }
    })
});

app.get('/api/subjects',function(req,res){
  var university_id = req.query.id;
    con.query('SELECT id, name FROM subjects where sector_id= ? ORDER BY name ',[university_id], function(err,data) {
        if(!err) {
            res.send(data);
        }
        else{
          res.send(err);
        }
    })
});


app.get('/api/sectors',function(req,res){
  var university_id = req.query.id;
    con.query('SELECT id, name FROM sectors where university_id= ? ORDER BY name ',[university_id], function(err,data) {
        if(!err) {
            res.send(data);
        }
        else{
          res.send(err);
        }
    })
});

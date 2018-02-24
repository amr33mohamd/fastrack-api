app.get('/api/images',function(req,res){
  var note_id = req.query.id;
    con.query('SELECT id, image FROM images where note_id= ? ORDER BY id ASC ',[note_id], function(err,data) {
        if(!err) {
            res.send(data);
        }
        else{
          res.send(err);
        }
    })
});

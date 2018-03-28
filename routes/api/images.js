app.get('/api/images',function(req,res){
  var note_id = req.query.id;
    con.query('SELECT id, image FROM images where note_id= ? ORDER BY id ASC ',[note_id], function(err,data) {
        if(!err) {
          var images = [];
          for(let i in data){
            images.push({ source: { uri: data[i].image } });
            if(i == data.length-1){
              res.send(images);
            }
          }
        }
        else{
          res.send(err);
        }
    })
});

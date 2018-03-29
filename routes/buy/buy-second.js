app.get('/buy-second',function(req,res){
  var id = req.param('note_id').split("?")[0];
  var id = id.split(",")[0];
  var deviceId = req.param('note_id').split("?")[0].split(",")[1];


  sql.select('notes','id',id,function(book) {
      con.query("UPDATE notes SET downloads = downloads + 1 WHERE id = ?",[id],function(err,ress){
        if(err){
          res.send(err);
        }
        else{

          con.query("insert into ownedNotes(note_id,deviceId) values(?,?)",[id,deviceId],function(err,resss){
          res.redirect('http://example.com');
          });
        }
      })
  })
})

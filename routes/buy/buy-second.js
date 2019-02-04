app.get('/buy-second',function(req,res){
  var id = req.param('note_id')

  var deviceId = req.param('deviceId');
  var type = req.param('type');

  if(type == 1){
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
  }
  else if (type == 2) {
    sql.select('videos','id',id,function(book) {
        con.query("UPDATE videos SET downloads = downloads + 1 WHERE id = ?",[id],function(err,ress){
          if(err){
            res.send(err);
          }
          else{

            con.query("insert into ownedVideos(video_id,deviceId) values(?,?)",[id,deviceId],function(err,resss){
            res.redirect('http://example.com');
            });
          }
        })
    })
  }
  else if (type == 3) {
    sql.select('videos','id',id,function(book) {
      con.query("UPDATE notes SET downloads = downloads + 1 WHERE id = ?",[book[0].note_id],function(err,resss){
        sql.select('videos','id',id,function(book) {
          con.query("insert into ownedNotes(note_id,deviceId) values(?,?)",[book[0].note_id,deviceId],function(err,resss){
          });
        });
      });
    });
        con.query("UPDATE videos SET downloads = downloads + 1 WHERE id = ?",[id],function(err,ress){

          if(err){
            res.send(err);
          }
          else{

            con.query("insert into ownedVideos(video_id,deviceId) values(?,?)",[id,deviceId],function(err,resss){
            res.redirect('http://example.com');
            });
          }
        })

  }

})

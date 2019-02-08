app.get('/api/notes',function(req,res){
  var subject_id = req.query.id;
  mynotes = [];
    con.query('SELECT id, name,descc AS `description`,image,price FROM notes where subject_id= ? and price > 0 ORDER BY name ',[subject_id], function(err,notes) {
      if(notes.length != 0){
      for(let i in notes){
        con.query('SELECT * FROM videos where note_id= ? ',[notes[i].id], function(errr,video) {
          if(video.length == 0){
            mynotes.push({
              id:notes[i].id,
              name:notes[i].name,
              description:notes[i].description,
              image:notes[i].image,
              price:notes[i].price,
              video:0
            });

          }
          else {
            mynotes.push({
              id:notes[i].id,
              name:notes[i].name,
              description:notes[i].description,
              image:notes[i].image,
              price:notes[i].price,
              video:1,
              video_price:video[0].price,
              both:video[0].bothh
            });
          }
          if(i == notes.length-1){

            if(mynotes.length == 0){
              res.json([])
            }
            else {
              res.json(mynotes);
            }
          }
        })

      }
    }
    else {
      res.json([])
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
          if(mynotes.length == 0){
            res.json({});
          }
          else {
            res.json(mynotes);

          }
        }
      })

    }
  })

});

app.get('/api/myvideos',function(req,res){
  var id = req.query.id;
  var mynotes = [];
  con.query('SELECT video_id FROM ownedVideos where deviceId= ?',[id],function(err,notes){
    if(notes.length == 0 ){
      res.json([]);
    }
    else {
      for(let i in notes){
        con.query('SELECT * FROM videos where id= ?',[notes[i].video_id],function(err,video){
        con.query('SELECT id, name,descc AS `description`,image,price FROM notes where id= ? ',[video[0].note_id], function(errr,data) {
          mynotes.push({
            id:video[0].id,
            name:video[0].name,
            video:video[0].video,
            image:data[0].image,
            description:data[0].description
          });
          if(i == notes.length-1){
            res.send(mynotes);
          }
        })
      })
      }


    }
  });


});

app.get('/api/couponvideo',function(req,res){
  var deviceId = req.query.deviceId;
  var coupon = req.query.coupon;
  var note_id = req.query.note_id;
  con.query("select * from coupons where deviceId = ? and coupon = ? and note_id = ? and status = 0",[deviceId,coupon,note_id],function(err,data){
    if(data.length != 0){
      // buy note ->
      con.query("UPDATE notes SET downloads = downloads + 1 WHERE id = ?",[note_id],function(err,ress){
        if(err){
          res.send(err);
        }
        else{

          con.query("insert into ownedNotes(note_id,deviceId) values(?,?)",[note_id,deviceId],function(err,resss){
            //buy video -->
            sql.select('videos','note_id',note_id,function(book) {
                con.query("UPDATE videos SET downloads = downloads + 1 WHERE id = ?",[book[0].id],function(err,ress){
                  if(err){
                    res.send(err);
                  }
                  else{

                    con.query("insert into ownedVideos(video_id,deviceId) values(?,?)",[book[0].id,deviceId],function(err,resss){
                      res.json({response:1})
                    });
                  }
                })
            })
          });
        }
      })
    }
    else {
      res.json({response:0})
    }
  })
})

app.get('/api/verifynumber',function(req,res){
  var phone = req.query.phone;
  con.query('SELECT * FROM users where number= ? ',[phone], function(err,data) {
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
      res.json({response:1});
    }
  });
});

app.get('/api/freenotes',function(req,res){
  var subject_id = req.query.id;
  mynotes = [];

    con.query('SELECT id, name,descc AS `description`,image,price FROM notes where subject_id= ? and price= ? ORDER BY name ',[subject_id,0], function(err,notes) {
      for(let i in notes){
        con.query('SELECT * FROM videos where note_id= ? ',[notes[i].id], function(errr,video) {
          if(video.length == 0){
            mynotes.push({
              id:notes[i].id,
              name:notes[i].name,
              description:notes[i].description,
              image:notes[i].image,
              price:notes[i].price,
              video:0
            });

          }
          else {
            mynotes.push({
              id:notes[i].id,
              description:notes[i].description,
              image:notes[i].image,
              price:notes[i].price,
              video:1,
              video_price:video[0].price,
              both:video[0].bothh
            });
          }
          if(i == notes.length-1){
            if(mynotes.length == 0){
              res.json([{}]);

            }
            else {
              res.json(mynotes);

            }
          }
        })

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

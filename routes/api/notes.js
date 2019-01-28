app.get('/api/notes',function(req,res){
  var subject_id = req.query.id;
  mynotes = [];
    con.query('SELECT id, name,descc AS `description`,image,price FROM notes where subject_id= ? and price > 0 ORDER BY name ',[subject_id], function(err,notes) {
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
            res.send(mynotes);
          }
        })

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

app.get('/api/myvideos',function(req,res){
  var id = req.query.id;
  var mynotes = [];
  con.query('SELECT video_id FROM ownedVideos where deviceId= ?',[id],function(err,notes){
    con.query('SELECT * FROM videos where id= ?',[notes[0].video_id],function(err,video){
    for(let i in notes){
      con.query('SELECT id, name,descc AS `description`,image,price FROM notes where id= ? ',[video[i].note_id], function(errr,data) {
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

    }
  })
});

});
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
              res.Json([{}]);

            }
            else {
              res.Json(mynotes);

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

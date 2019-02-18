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
  else if (type == 4) { // midterm pack
    sql.select('midterm','id',id,function(book) {
      var mohafza = req.param('mohafza');
      var mntqa = req.param('mntqa');
      var qt3a = req.param('qt3a');
      var street = req.param('street');
      var home = req.param('home');
//email here ------>
const fetch = require('node-fetch');
var message = '-------- Student midterm backage ----- \n backage data -> name : '+book[0].name+' description :'+book[0].descc
+'\n student data -> \n Address : '+mohafza+'mantqa : '+mntqa +'qeta3  :'+qt3a+' street : '+street+' home number : '+home+
'phone number : '+deviceId
fetch('https://asl.000webhostapp.com/index.php?message='+message).then(()=>{
  res.redirect('http://example.com');

})
    })
  }
  else if (type == 6) { // note
    sql.select('notes','id',id,function(book) {
      var mohafza = req.param('mohafza');
      var mntqa = req.param('mntqa');
      var qt3a = req.param('qt3a');
      var street = req.param('street');
      var home = req.param('home');
//email here ------>
const fetch = require('node-fetch');
var message = '-------- Student note ----- \n note data -> name : '+book[0].name+' description :'+book[0].descc
+'\n student data -> \n Address : '+mohafza+'mantqa : '+mntqa +'qeta3  :'+qt3a+' street : '+street+' home number : '+home+
'phone number : '+deviceId
fetch('https://asl.000webhostapp.com/index.php?message='+message).then(()=>{
  res.redirect('http://example.com');

})
    })
  }
  else if (type == 5) {
    sql.select('videos','id',id,function(book) {
        con.query("UPDATE videos SET downloads = downloads + 1 WHERE id = ?",[id],function(err,ress){
          if(err){
            res.send(err);
          }
          else{

            con.query("insert into ownedVideos(video_id,deviceId) values(?,?)",[id,deviceId],function(err,resss){
            });
          }
        })
        sql.select('notes','id',book[0].note_id,function(book) {
          var mohafza = req.param('mohafza');
          var mntqa = req.param('mntqa');
          var qt3a = req.param('qt3a');
          var street = req.param('street');
          var home = req.param('home');
      //email here ------>

      const fetch = require('node-fetch');
      var message = '-------- Student note ----- \n note data -> name : '+book[0].name+' description :'+book[0].descc
      +'\n student data -> \n Address : '+mohafza+'mantqa : '+mntqa +'qeta3  :'+qt3a+' street : '+street+' home number : '+home+
      'phone number : '+deviceId
      fetch('https://asl.000webhostapp.com/index.php?message='+message).then(()=>{
        res.redirect('http://example.com');

      })

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

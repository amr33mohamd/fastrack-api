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
      var gada = req.param('gada');
      var floor = req.param('floor');

//email here ------>
const fetch = require('node-fetch');
var message = '-------- مجموعه الميترم----- \n معلومات المجموعه ---> \n الاسم  : '+book[0].name+' \n الوصف :'+book[0].descc
+'\n بيانات الطالب-> \n المحافظه : '+mohafza+' \n المنطقه : '+mntqa +'\n القطعه  :'+qt3a+'\n الشارع : '+street+'\n العماره / المنزل : '+home+
'\n رقم الهاتف : '+deviceId+'\n الجاده : '+gada+'\n الطالبق'+floor
fetch('https://asl.000webhostapp.com/index.php?message='+encodeURI(message)).then(()=>{
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
      var gada = req.param('gada');
      var floor = req.param('floor');

//email here ------>
const fetch = require('node-fetch');
var message = '-------- طلب نوت----- \n بيانات النوت ->  \n الاسم : '+book[0].name+' \n الوصف :'+book[0].descc
+'\n بيانات الطالب -> \n المحافظه : '+mohafza+' \n المنطقه : '+mntqa +' \n القطعه  :'+qt3a+' \n الشارع : '+street+' \n المنزل / العماره : '+home+
' \n رقم الهاتف: '+deviceId+' \n جاده : '+gada+' \n الطابق'+floor
fetch('https://asl.000webhostapp.com/index.php?message='+encodeURI(message)).then(()=>{
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
          var gada = req.param('gada');
          var floor = req.param('floor');

      //email here ------>

      const fetch = require('node-fetch');
      var message = '-------- طلب نوت----- \n بيانات النوت ->  \n الاسم : '+book[0].name+' \n الوصف :'+book[0].descc
      +'\n بيانات الطالب -> \n المحافظه : '+mohafza+' \n المنطقه : '+mntqa +' \n القطعه  :'+qt3a+' \n الشارع : '+street+' \n المنزل / العماره : '+home+
      ' \n رقم الهاتف: '+deviceId+' \n جاده : '+gada+' \n الطابق'+floor
            fetch('https://asl.000webhostapp.com/index.php?message='+encodeURI(message)).then(()=>{
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

app.get('/buy-first',function(req,res){
  var note_id = req.param('id');
  var type = req.param('type')
  /*
   note -> 1
   video -> 2
   note + video -> 3
  */
  if(type == 1){
    sql.select('notes','id',note_id,function(note){
      const fetch = require('node-fetch');
      if(note[0].price == 0){
        var deviceId = req.param('deviceId')

        new_url = 'http://'+req.headers.host+'/buy-second?note_id='+note[0].id+','+deviceId+',1';
        res.redirect(new_url);
      }
      else{
        var deviceId = req.param('deviceId')

            var url = 'https://php-helper.herokuapp.com/try.php?price='+note[0].price+'&url=http://'+req.headers.host+'/buy-second?note_id='+note[0].id+','+deviceId+',1';
            console.log(url);
            fetch(url)
      .then(res => res.json())
      .then((json) =>{

             var new_url =   "https://www.myfatoorah.com/pg/payment_invoice.aspx?id="+json.id
            res.redirect(new_url)
              // res.render('buy-first',{
              //   book:note[0],
              //   url: new_url
              // });
          })
        }
    })
  }
  else if(type == 2) {
    sql.select('videos','note_id',note_id,function(video){
      const fetch = require('node-fetch');
      var deviceId = req.param('deviceId')

      if(video[0].price == 0){
        new_url = 'http://'+req.headers.host+'/buy-second?note_id='+video[0].id+','+deviceId+',2';
        res.redirect(new_url);
      }
      else{

            var url = 'https://php-helper.herokuapp.com/try.php?price='+video[0].price+'&url=http://'+req.headers.host+'/buy-second?note_id='+video[0].id+','+deviceId+',2';
            console.log(url);
            fetch(url)
      .then(res => res.json())
      .then((json) =>{

             var new_url =   "https://www.myfatoorah.com/pg/payment_invoice.aspx?id="+json.id
            res.redirect(new_url)
              // res.render('buy-first',{
              //   book:note[0],
              //   url: new_url
              // });
          })
        }
    })
  }
  else if(type == 3){
    sql.select('videos','id',note_id,function(video){
      const fetch = require('node-fetch');
      if(note[0].price == 0){
        var deviceId = req.param('deviceId')

        new_url = 'http://'+req.headers.host+'/buy-second?note_id='+video[0].id+','+deviceId+',3';
        res.redirect(new_url);
      }
      else{
        var deviceId = req.param('deviceId')

            var url = 'https://php-helper.herokuapp.com/try.php?price='+note[0].price+'&url=http://'+req.headers.host+'/buy-second?note_id='+video[0].id+','+deviceId+',3';
            console.log(url);
            fetch(url)
      .then(res => res.json())
      .then((json) =>{

             var new_url =   "https://www.myfatoorah.com/pg/payment_invoice.aspx?id="+json.id
            res.redirect(new_url)
              // res.render('buy-first',{
              //   book:note[0],
              //   url: new_url
              // });
          })
        }
    })
  }


})

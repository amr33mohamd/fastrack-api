app.get('/buy-first',function(req,res){
  var note_id = req.param('id');
  sql.select('notes','id',note_id,function(note){
    const fetch = require('node-fetch');
    if(note[0].price == 0){
      new_url = 'http://'+req.headers.host+'/buy-second?note_id='+note[0].id;
      res.redirect(new_url);
    }
    else{
      var deviceId = req.param('deviceId')

          var url = 'https://php-helper.herokuapp.com/try.php?price='+note[0].price+'&url=http://'+req.headers.host+'/buy-second?note_id='+note[0].id+','+deviceId;
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
})

app.get('/buy-first',function(req,res){
  var note_id = req.param('id');

  sql.select('notes','id',note_id,function(note){
    const fetch = require('node-fetch');
          var url = 'https://familytreee.000webhostapp.com/try.php?price='+note[0].price+'&url=http://'+req.headers.host+'/buy-second?note_id='+note[0].id;
          console.log(url);
          fetch(url)
    .then(res => res.json())
    .then((json) =>{

           var new_url =   "https://test.myfatoorah.com/pg/payment_invoice.aspx?id="+json.id
            res.render('buy-first',{
              book:note[0],
              url: new_url
            });



        })


})
})

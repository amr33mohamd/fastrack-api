app.get('/buy-second',function(req,res){
  var id = req.param('id');


  sql.select('notes','id',id,function(book) {
      con.query("INSERT INTO `orders`(`note_id`) VALUES (?)",[id],function(err,ress){
        if(err){
          res.send(err);
        }
        else{
          console.log(book);
          res.redirect(book[0].link);
        }
      })
  })
})

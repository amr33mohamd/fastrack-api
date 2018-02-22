app.get('/buy-second',function(req,res){
  var book_id = req.param('book_id');
  var user_id = req.param('user_id');
  var method = req.param('method');

  sql.select('books','id',book_id,function(book) {
      con.query('insert into orders(user_id,book_id,method,status) values(?,?,?,0)',[user_id,book_id,method],function(err,ress){
        if(err){
          res.send(err);
        }
        else{
          res.send('Done please click on X up there.');
        }
      })
  })
})

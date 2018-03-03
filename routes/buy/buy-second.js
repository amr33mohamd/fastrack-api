app.get('/buy-second',function(req,res){
  var id = req.param('note_id').split("?")[0];;


  sql.select('notes','id',id,function(book) {
      con.query("UPDATE notes SET downloads = downloads + 1 WHERE id = ?",[id],function(err,ress){
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

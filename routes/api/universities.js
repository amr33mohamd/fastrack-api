app.get('/api/universities',function(req,res){
    con.query('SELECT id, name,image FROM universities ORDER BY id ASC', function(err,data) {
        if(!err) {
          console.log('visted univeristies')

            res.json({data});
        }
        else{
          res.send(err);
        }
    })
});

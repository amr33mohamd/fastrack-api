app.get('/api/universities',function(req,res){
    con.query('SELECT id, name,image FROM universities ORDER BY name', function(err,data) {
        if(!err) {

            res.json({data});
        }
        else{
          res.send(err);
        }
    })
});

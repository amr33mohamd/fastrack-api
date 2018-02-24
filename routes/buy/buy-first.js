app.get('/buy-first',function(req,res){
  var note_id = req.param('id');

  sql.select('notes','id',note_id,function(note){
    const converter = require('google-currency');
          converter({
              from: "KWD",
              to: "USD",
              amount: note[0].price
          }).then(value => {
            console.log(value);
              res.render('buy-first',{
                book:note[0],
                domain: req.headers.host,
                admin_email :'amr2010mohamd2010@gmail.com',
                price:value.converted
              });
          })
        })


})

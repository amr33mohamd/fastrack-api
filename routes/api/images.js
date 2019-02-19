app.get('/api/images',function(req,res){
  var note_id = req.query.id;
    con.query('SELECT id, image FROM images where note_id= ? ORDER BY id ASC ',[note_id], function(err,data) {
        if(!err) {
          var images = [];
          for(let i in data){
            images.push({ source: { uri: data[i].image } });
            if(i == data.length-1){
              res.send(images);
            }
          }
        }
        else{
          res.send(err);
        }
    })
});
app.get('/send_mail',function(req,res){
  const fetch = require('node-fetch');
  var message = '-------- Request note ----- \n note data -> name : 2. IE 530 L 02  description : 2. IE 530 L 02  \n student data -> \n address : بلبلبل mantqa : 4 qtaa  :15 street : 3 home number : 5 phone number: 51271277 gada :4 floor 9'
        fetch('https://asl.000webhostapp.com/index.php?message='+message).then(()=>{
    res.redirect('http://example.com');

  })
})

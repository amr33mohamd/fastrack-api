app.get('/buy-first',function(req,res){
  var note_id = req.param('id');
  var type = req.param('type')
  const request = require('request');

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
        new_url = 'http://'+req.headers.host+'/buy-second?note_id='+note[0].id+'&deviceId='+deviceId+'&type=1';
        console.log(new_url)

        res.redirect(new_url);
      }
      else{
        var deviceId = req.param('deviceId')
        redirect_url = 'http://'+req.headers.host+'/buy-second?note_id='+note[0].id+'&deviceId='+deviceId+'&type=1';
        console.log(redirect_url)
            // var url = 'https://php-helper.herokuapp.com/try.php?price='+note[0].price+'&url=http://'+req.headers.host+'/buy-second?note_id='+note[0].id+','+deviceId+',1';
            const options = {
              url: 'https://apikw.myfatoorah.com/ApiInvoices/Create',
              method:'post',
              headers: {
                'Content-Type': 'application/json',
                'authorization': 'bearer xtlWfnbSVODqHyCIEfMQtvBDV8aQmTYsX9TzQL_8gmejVJvSX_qzbi3MAcGatULBbMU-EjO1PbzSURSVGzWyz8ulLi9L4si4dnoXMrDv-5DuhUvNw4oQeYLng3dBQOv24guJpSilZ9XWK8j9EG3w74KjOXXQ0CzHMXM1gzpOdD1N_8WQPJUlDDVgikHOuhsGNhkCxVhmBYbt2QWtoYVmbFIteVLf5NuV4TFa0Yjh7alC5o1ZMf-YEfVoS-yBIn-tMjg4e2-J4grQVV3PNbHFZsfPFzfTjLNdtkUyPL-F28U9zyijkBLGnLu6J6utOuql6b0lgC4OVqWQfbsgznvMV_gfIhBzJUNW2At-UtSv7L8eyTGnc-0jtw4wIyZhnEDypwEHSDGwqJcY62--pezCtmGsDiQ8Ne-fHzVYXBptgMeZY3XgMw4m4nS2UqFMXH2m-uixbFwbUAwXCS_n7W6WI_TgXgGfuKHzTSL7bZLC9aB4y2aitbl0vQCFrzcCeLsoL1tRS2rmeZL__YM4KBFcyZR7Ye5hbEAABMmzh6JPVSGwAkr71ZYRGmcXo3jvkX2tFQGadu4gUgpaMRil_Q66qyimCvFeCEnOA6KvyYASVwhN3pdbZuEsUBIn8xCu1LziXZm2T8pGxv_4T9Ne3-zKGMxajo8'
              },
              form: {

             "InvoiceValue": note[0].price,
             "CustomerName": "Customer01",
             "CustomerBlock": "",
             "CustomerStreet": "",
             "CustomerHouseBuildingNo": "",
             "CustomerCivilId": "string",
             "CustomerAddress": "string",
             "CustomerReference": "string",
             "CountryCodeId": 1,
             "CustomerMobile": "99999999",
             "CustomerEmail": "test@test.com",
             "DisplayCurrencyId": 3,
             "SendInvoiceOption": 1,
             "InvoiceItemsCreate": [
             {
             "ProductId": null,
             "ProductName": "Product01",
             "Quantity": 1,
             "UnitPrice": note[0].price
             }
             ],
             "CallBackUrl": redirect_url,
             "Language": 1
            }
            };

             callback = (error, response, body) =>{
              if (!error && response.statusCode == 200) {
                const info = JSON.parse(body);
                res.redirect(info.RedirectUrl)
              }
              else {
                res.json(response)
              }
            }

            request(options, callback);



              // res.render('buy-first',{
              //   book:note[0],
              //   url: new_url
              // });

        }
    })
  }
  else if(type == 2) {
    sql.select('videos','note_id',note_id,function(video){
      const fetch = require('node-fetch');
      var deviceId = req.param('deviceId')

      if(video[0].price == 0){
        new_url = 'http://'+req.headers.host+'/buy-second?note_id='+video[0].id+'&deviceId='+deviceId+'&type=2';
        res.redirect(new_url);
      }
      else{
        var redirect_url = 'http://'+req.headers.host+'/buy-second?note_id='+video[0].id+'&deviceId='+deviceId+'&type=2';
            // var url = 'https://php-helper.herokuapp.com/try.php?price='+video[0].price+'&url=http://'+req.headers.host+'/buy-second?note_id='+video[0].id+','+deviceId+',2';

            const options = {
              url: 'https://apikw.myfatoorah.com/ApiInvoices/Create',
              method:'post',
              headers: {
                'Content-Type': 'application/json',
                'authorization': 'bearer xtlWfnbSVODqHyCIEfMQtvBDV8aQmTYsX9TzQL_8gmejVJvSX_qzbi3MAcGatULBbMU-EjO1PbzSURSVGzWyz8ulLi9L4si4dnoXMrDv-5DuhUvNw4oQeYLng3dBQOv24guJpSilZ9XWK8j9EG3w74KjOXXQ0CzHMXM1gzpOdD1N_8WQPJUlDDVgikHOuhsGNhkCxVhmBYbt2QWtoYVmbFIteVLf5NuV4TFa0Yjh7alC5o1ZMf-YEfVoS-yBIn-tMjg4e2-J4grQVV3PNbHFZsfPFzfTjLNdtkUyPL-F28U9zyijkBLGnLu6J6utOuql6b0lgC4OVqWQfbsgznvMV_gfIhBzJUNW2At-UtSv7L8eyTGnc-0jtw4wIyZhnEDypwEHSDGwqJcY62--pezCtmGsDiQ8Ne-fHzVYXBptgMeZY3XgMw4m4nS2UqFMXH2m-uixbFwbUAwXCS_n7W6WI_TgXgGfuKHzTSL7bZLC9aB4y2aitbl0vQCFrzcCeLsoL1tRS2rmeZL__YM4KBFcyZR7Ye5hbEAABMmzh6JPVSGwAkr71ZYRGmcXo3jvkX2tFQGadu4gUgpaMRil_Q66qyimCvFeCEnOA6KvyYASVwhN3pdbZuEsUBIn8xCu1LziXZm2T8pGxv_4T9Ne3-zKGMxajo8'
              },
              form: {

             "InvoiceValue": video[0].price,
             "CustomerName": "Customer01",
             "CustomerBlock": "",
             "CustomerStreet": "",
             "CustomerHouseBuildingNo": "",
             "CustomerCivilId": "string",
             "CustomerAddress": "string",
             "CustomerReference": "string",
             "CountryCodeId": 1,
             "CustomerMobile": "99999999",
             "CustomerEmail": "test@test.com",
             "DisplayCurrencyId": 3,
             "SendInvoiceOption": 1,
             "InvoiceItemsCreate": [
             {
             "ProductId": null,
             "ProductName": "Product01",
             "Quantity": 1,
             "UnitPrice": video[0].price
             }
             ],
             "CallBackUrl": redirect_url,
             "Language": 1
            }
            };

             callback = (error, response, body) =>{
              if (!error && response.statusCode == 200) {
                const info = JSON.parse(body);
                res.redirect(info.RedirectUrl)
              }
              else {
                res.json(response)
              }
            }

            request(options, callback);


              // res.render('buy-first',{
              //   book:note[0],
              //   url: new_url
              // });

}
    })
  }
  else if(type == 3){
    sql.select('videos','note_id',note_id,function(video){
      const fetch = require('node-fetch');
      if(video[0].bothh == 0){
        var deviceId = req.param('deviceId')

        new_url = 'http://'+req.headers.host+'/buy-second?note_id='+video[0].id+'&deviceId='+deviceId+'&type=3';
        res.redirect(new_url);
      }
      else{
        var deviceId = req.param('deviceId')
        var redirect_url = 'http://'+req.headers.host+'/buy-second?note_id='+video[0].id+'&deviceId='+deviceId+'&type=3'

        const options = {
          url: 'https://apikw.myfatoorah.com/ApiInvoices/Create',
          method:'post',
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'bearer xtlWfnbSVODqHyCIEfMQtvBDV8aQmTYsX9TzQL_8gmejVJvSX_qzbi3MAcGatULBbMU-EjO1PbzSURSVGzWyz8ulLi9L4si4dnoXMrDv-5DuhUvNw4oQeYLng3dBQOv24guJpSilZ9XWK8j9EG3w74KjOXXQ0CzHMXM1gzpOdD1N_8WQPJUlDDVgikHOuhsGNhkCxVhmBYbt2QWtoYVmbFIteVLf5NuV4TFa0Yjh7alC5o1ZMf-YEfVoS-yBIn-tMjg4e2-J4grQVV3PNbHFZsfPFzfTjLNdtkUyPL-F28U9zyijkBLGnLu6J6utOuql6b0lgC4OVqWQfbsgznvMV_gfIhBzJUNW2At-UtSv7L8eyTGnc-0jtw4wIyZhnEDypwEHSDGwqJcY62--pezCtmGsDiQ8Ne-fHzVYXBptgMeZY3XgMw4m4nS2UqFMXH2m-uixbFwbUAwXCS_n7W6WI_TgXgGfuKHzTSL7bZLC9aB4y2aitbl0vQCFrzcCeLsoL1tRS2rmeZL__YM4KBFcyZR7Ye5hbEAABMmzh6JPVSGwAkr71ZYRGmcXo3jvkX2tFQGadu4gUgpaMRil_Q66qyimCvFeCEnOA6KvyYASVwhN3pdbZuEsUBIn8xCu1LziXZm2T8pGxv_4T9Ne3-zKGMxajo8'
          },
          form: {

         "InvoiceValue": video[0].bothh,
         "CustomerName": "Customer01",
         "CustomerBlock": "",
         "CustomerStreet": "",
         "CustomerHouseBuildingNo": "",
         "CustomerCivilId": "string",
         "CustomerAddress": "string",
         "CustomerReference": "string",
         "CountryCodeId": 1,
         "CustomerMobile": "99999999",
         "CustomerEmail": "test@test.com",
         "DisplayCurrencyId": 3,
         "SendInvoiceOption": 1,
         "InvoiceItemsCreate": [
         {
         "ProductId": null,
         "ProductName": "Product01",
         "Quantity": 1,
         "UnitPrice": video[0].bothh
         }
         ],
         "CallBackUrl": redirect_url,
         "Language": 1
        }
        };

         callback = (error, response, body) =>{
          if (!error && response.statusCode == 200) {
            const info = JSON.parse(body);
            res.redirect(info.RedirectUrl)
          }
          else {
            res.json(response)
          }
        }

        request(options, callback);

            // var url = 'https://php-helper.herokuapp.com/try.php?price='+note[0].price+'&url=http://'+req.headers.host+'/buy-second?note_id='+video[0].id+','+deviceId+',3';



              // res.render('buy-first',{
              //   book:note[0],
              //   url: new_url
              // });
        }
    })
  }


})
app.get('/test2',function(req,res){
  const fetch = require('node-fetch');
  const request = require('request');

//   fetch('https://apidemo.myfatoorah.com/ApiInvoices/Create', {
//         method: 'post',
//         body:   {
//  "InvoiceValue": 200,
//  "CustomerName": "Customer01",
//  "CustomerBlock": "",
//  "CustomerStreet": "",
//  "CustomerHouseBuildingNo": "",
//  "CustomerCivilId": "string",
//  "CustomerAddress": "string",
//  "CustomerReference": "string",
//  "CountryCodeId": 1,
//  "CustomerMobile": "99999999",
//  "CustomerEmail": "test@test.com",
//  "DisplayCurrencyId": 3,
//  "SendInvoiceOption": 1,
//  "InvoiceItemsCreate": [
//  {
//  "ProductId": null,
//  "ProductName": "Product01",
//  "Quantity": 20,
//  "UnitPrice": 10
//  }
//  ],
//  "CallBackUrl": "https://myfatoorah.com/index?id=10",
//  "Language": 1
// },
//         headers: { 'Content-Type': 'application/json','authorization':'bearer F9YFUHUamf8ht8NtX2ALCsEr-dQUvNpnwlJow33haf7XnnEoD7Todj9Wys33StExdGn4A-2mnDKiwdwuk73rpK5hCEwzchlVYGIrMvDNHKwsc2X_qV3-KljiJMDshWVcb8nkhKRtQjXhOkfIE8tO8N3p7CNFZ2smGT8cnYYHMup3KX7tiTuV0a44A1THlMoU_x9Lc29hAM_RttoMSfukEULkn0Dxy3IiIxX6ASBGRAolKWM0uPkuWePtKckRuGO4cJKxxzyLdQmYZuGkyG3SMU9mmNO3-uZYtF-uQul2Z5znjzVZLyWBc5JS3-Q5OKE7tpnExfblAMxJm8uqwI4lo6ABfZCZPeJQPSynJJfVwlHbyo4R6bjrWpAPm-nkKoovUX8n3VbKH8MH7bz-b7qB8FmGdGuAGU6sYS2CSFnoJUURJThyBut9WqAi_sPxqFaGs75bp4wU0f5Kx62qbLYdt1ZGLficHOsUK-tdG94rfq6OvqF9APbDGUH0rXx2iJ6Qq5DyWROO5FpPUW6hfgBsDJaURAfru6Ko7Oaknarb1JhRi0D6mpc_3YO_i_KFFl0j8hTvNYSZQBh9__rM66V3dMGEI3RSexE6cyDrXKhrwPumbc06mrBGIXqV1EcRXOGGApumjw'}
//       }).then(res => res.json())
//     .then(json => res.json(json));

//   var body = '{"InvoiceValue": 200,"CustomerName": "Customer01","CustomerBlock": "","CustomerStreet": "","CustomerHouseBuildingNo": "","CustomerCivilId": "string","CustomerAddress": "string","CustomerReference": "string","CountryCodeId": 1,"CustomerMobile": "99999999","CustomerEmail": "test@test.com","DisplayCurrencyId": 3,"SendInvoiceOption": 1,"InvoiceItemsCreate": [{"ProductId": null,"ProductName": "Product01","Quantity": 20,"UnitPrice": 10}],"CallBackUrl": "https://myfatoorah.com/index?id=10","Language": 1}'
//   fetch('https://apidemo.myfatoorah.com/ApiInvoices/Create', {
//           method: 'POST',
//           body:    {
//
//  "InvoiceValue": 200,
//  "CustomerName": "Customer01",
//  "CustomerBlock": "",
//  "CustomerStreet": "",
//  "CustomerHouseBuildingNo": "",
//  "CustomerCivilId": "string",
//  "CustomerAddress": "string",
//  "CustomerReference": "string",
//  "CountryCodeId": 1,
//  "CustomerMobile": "99999999",
//  "CustomerEmail": "test@test.com",
//  "DisplayCurrencyId": 3,
//  "SendInvoiceOption": 1,
//  "InvoiceItemsCreate": [
//  {
//  "ProductId": null,
//  "ProductName": "Product01",
//  "Quantity": 20,
//  "UnitPrice": 10
//  }
//  ],
//  "CallBackUrl": "https://myfatoorah.com/index?id=10",
//  "Language": 1
// },
//           headers: { 'Content-Type': 'application/json','authorization':'bearer F9YFUHUamf8ht8NtX2ALCsEr-dQUvNpnwlJow33haf7XnnEoD7Todj9Wys33StExdGn4A-2mnDKiwdwuk73rpK5hCEwzchlVYGIrMvDNHKwsc2X_qV3-KljiJMDshWVcb8nkhKRtQjXhOkfIE8tO8N3p7CNFZ2smGT8cnYYHMup3KX7tiTuV0a44A1THlMoU_x9Lc29hAM_RttoMSfukEULkn0Dxy3IiIxX6ASBGRAolKWM0uPkuWePtKckRuGO4cJKxxzyLdQmYZuGkyG3SMU9mmNO3-uZYtF-uQul2Z5znjzVZLyWBc5JS3-Q5OKE7tpnExfblAMxJm8uqwI4lo6ABfZCZPeJQPSynJJfVwlHbyo4R6bjrWpAPm-nkKoovUX8n3VbKH8MH7bz-b7qB8FmGdGuAGU6sYS2CSFnoJUURJThyBut9WqAi_sPxqFaGs75bp4wU0f5Kx62qbLYdt1ZGLficHOsUK-tdG94rfq6OvqF9APbDGUH0rXx2iJ6Qq5DyWROO5FpPUW6hfgBsDJaURAfru6Ko7Oaknarb1JhRi0D6mpc_3YO_i_KFFl0j8hTvNYSZQBh9__rM66V3dMGEI3RSexE6cyDrXKhrwPumbc06mrBGIXqV1EcRXOGGApumjw' },
//       }).then(res => res.json())
//     .then((json) =>{
//       res.send(json)
//     });
})

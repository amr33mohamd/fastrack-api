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
                'authorization': 'bearer LMjn59SqhP1RcAo_QZExCSyM_SV7sxnBBwiNhwXr12emGo_QehOhNdhEUMqaFJlHU7dybbdU4Cuq7ZT8VYTJJMxWtNceZKLkq-vEUSIO9lewO4pYLulm32boPyH59m4LJhFZ5031QuDG8LhiYIf69IJ1v5T8Su3Oy-jdsHLh6h3BvMVnNMxpNJgo1D5mLOYTFjL-UVlq07XD9AdIKAjOZy-Z_HM77lHHHScYM_urJaTGfn91rr4Dm5cPhoi-1AxH1p-wFMXgpCltn_JThen-_I7d6eWLSX71eZea8TyIDWnLiwxjgeWv6g-X80N27N8r2v7pDUrQZ707e6In7EF4tYALmYtyEYWqFnnVKQhNSZ70CifL0vypB2w_8fZ1zTJsVYDMdDUQkSeSS5Zhwypaje8BuoWORowZelNWuWk3q1Y2Vi3RGJd0GkoFkglQnDL0xH9sFZliOQad-vTb7HI79GOxjV0oW65-KJ7tIUQ7f6z2tsLCtshYf5CrA-5WVKiyeMOwJAR6dghzazAhi46b0k6rp9cYybbrus6MLcWMcy5sLPIDcYlh4Jno0inTDIvClPdk0y796qHK1llc7BURj1heCI8jFDveC9ZfSBje1nd3mXCMPP7GaD2Gay812vcQ3wDKl6lYIuMlCpP45GZ9HIX4sBs'
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
                'authorization': 'bearer LMjn59SqhP1RcAo_QZExCSyM_SV7sxnBBwiNhwXr12emGo_QehOhNdhEUMqaFJlHU7dybbdU4Cuq7ZT8VYTJJMxWtNceZKLkq-vEUSIO9lewO4pYLulm32boPyH59m4LJhFZ5031QuDG8LhiYIf69IJ1v5T8Su3Oy-jdsHLh6h3BvMVnNMxpNJgo1D5mLOYTFjL-UVlq07XD9AdIKAjOZy-Z_HM77lHHHScYM_urJaTGfn91rr4Dm5cPhoi-1AxH1p-wFMXgpCltn_JThen-_I7d6eWLSX71eZea8TyIDWnLiwxjgeWv6g-X80N27N8r2v7pDUrQZ707e6In7EF4tYALmYtyEYWqFnnVKQhNSZ70CifL0vypB2w_8fZ1zTJsVYDMdDUQkSeSS5Zhwypaje8BuoWORowZelNWuWk3q1Y2Vi3RGJd0GkoFkglQnDL0xH9sFZliOQad-vTb7HI79GOxjV0oW65-KJ7tIUQ7f6z2tsLCtshYf5CrA-5WVKiyeMOwJAR6dghzazAhi46b0k6rp9cYybbrus6MLcWMcy5sLPIDcYlh4Jno0inTDIvClPdk0y796qHK1llc7BURj1heCI8jFDveC9ZfSBje1nd3mXCMPP7GaD2Gay812vcQ3wDKl6lYIuMlCpP45GZ9HIX4sBs'
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
            'authorization': 'bearer LMjn59SqhP1RcAo_QZExCSyM_SV7sxnBBwiNhwXr12emGo_QehOhNdhEUMqaFJlHU7dybbdU4Cuq7ZT8VYTJJMxWtNceZKLkq-vEUSIO9lewO4pYLulm32boPyH59m4LJhFZ5031QuDG8LhiYIf69IJ1v5T8Su3Oy-jdsHLh6h3BvMVnNMxpNJgo1D5mLOYTFjL-UVlq07XD9AdIKAjOZy-Z_HM77lHHHScYM_urJaTGfn91rr4Dm5cPhoi-1AxH1p-wFMXgpCltn_JThen-_I7d6eWLSX71eZea8TyIDWnLiwxjgeWv6g-X80N27N8r2v7pDUrQZ707e6In7EF4tYALmYtyEYWqFnnVKQhNSZ70CifL0vypB2w_8fZ1zTJsVYDMdDUQkSeSS5Zhwypaje8BuoWORowZelNWuWk3q1Y2Vi3RGJd0GkoFkglQnDL0xH9sFZliOQad-vTb7HI79GOxjV0oW65-KJ7tIUQ7f6z2tsLCtshYf5CrA-5WVKiyeMOwJAR6dghzazAhi46b0k6rp9cYybbrus6MLcWMcy5sLPIDcYlh4Jno0inTDIvClPdk0y796qHK1llc7BURj1heCI8jFDveC9ZfSBje1nd3mXCMPP7GaD2Gay812vcQ3wDKl6lYIuMlCpP45GZ9HIX4sBs'
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

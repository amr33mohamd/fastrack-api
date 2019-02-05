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
                'authorization': 'bearer m3fewXeaWvaVjVqbGCiHTLqOha0e8wK3wxvk1foN7D0iDW-zfCUvAgTfyo-pg2k_bPNdklhlYjK0PkSxhDnDTB9rBocSCygivoejz3RWMgbQfWBzkC4g0HxLRE92QwRmP0Yy2vUBzwZiLxuvojmwRuAA1pfiA27Pblk1Vgq6fP67qakK_i7B176yPSCslyWVMTUvNU8DGKZZxunDXBoHaUbwsY1d7GF2iY1du59gFSGjj08oebRA9v-mlBVJrm281YiWZLDU8V1y1j_oAk4ngKqMzxkqqw2EsskcH34zm1okmn45UWMDkEVJFqj1A28qn47-TYzH4CRGnmQxERDyV5XZ5-MxIc2OPGWnd5nnPw46Ghy5H5wH991H--Xcekjtyd9uOBGHcbFeNTAjDECaQW_KB0kWPW8_LO6YfQCEBMDDbAVQ_Vl0wQd6i5pIXkmFd3tIyepFoS3HcGO0ZgMO3qFDHAzxqn75ZGVHUiLJYmboMULjPYHGPuGuSHu_G-uafogrFlIww3iARIAaykQRY99KiATfqfmkXRaF0nOlhC7o4UQyN9ra-CO9U4MW05fwFnQ0O9pyXM9co3mcWIOvCfWKrbYaMP_tD9La5PjnVEhB67FwSD-BrgE2R2cAD52WQe0ygbs7caB_IGYAOd9QPPfG1eAK1Erl1zsV6l87VMrNPvS0QJYJMP8QXx17F99kaJMbPqrNHJRGPSA_iig0Qg4Uuy4R2EL0YX7GxsRXGieOI625nyumGOE5o6jfaNVezp0doWJFhumnR2gsPkkdUgM0qmY2OoO6F2LS2_uAPItuu-l1Wc9XgG6Yjn9roIydS1-bK31_odLQJBqG6U6CFwYxh7z23MQQW1piDlEYoTTgZ2PEK8kkBfbGyMMLLiDRlQ_bH1lIphJSXKermus7lKDDKfqF-WZ7lelZBIr4DKekqAG7bcWywtHfP2SvgEzo5YMgSmxuAEi4NVKndSBKNqRAYJ14QnPZNsHTtxVWJFZ2RaS9Y7A8s4bZqR5LXfcZPfZNLXKMiKf3KCzSZfoYVK1zIj8nGUH48oVwq1o66m9iUKMG9Gv6dZO-I5PWFUJbYGhTwp_HmRHEstyVmwDKg9DlKz-VwwKNSGz0LCfY0S4TLtbNX1A2dREXLTK2RQCxv6xyE318wKTpU7SdKWy9JWfygmIJOvUuQeqJ8GRtK2cf_SJEU4h9ZjXqqyCQCrbYawgKj8INYwSC9BLjTyB_wqma6hk8xw3dZMpntTlIIG-I0axbRFl3hIJ5vQALwg0VhSl5IowmuTNNJIqjjNqIZgZfUA6e5XgU0Q2Ihp0BRhRrHk26pOU_Tc'
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
                'authorization': 'bearer m3fewXeaWvaVjVqbGCiHTLqOha0e8wK3wxvk1foN7D0iDW-zfCUvAgTfyo-pg2k_bPNdklhlYjK0PkSxhDnDTB9rBocSCygivoejz3RWMgbQfWBzkC4g0HxLRE92QwRmP0Yy2vUBzwZiLxuvojmwRuAA1pfiA27Pblk1Vgq6fP67qakK_i7B176yPSCslyWVMTUvNU8DGKZZxunDXBoHaUbwsY1d7GF2iY1du59gFSGjj08oebRA9v-mlBVJrm281YiWZLDU8V1y1j_oAk4ngKqMzxkqqw2EsskcH34zm1okmn45UWMDkEVJFqj1A28qn47-TYzH4CRGnmQxERDyV5XZ5-MxIc2OPGWnd5nnPw46Ghy5H5wH991H--Xcekjtyd9uOBGHcbFeNTAjDECaQW_KB0kWPW8_LO6YfQCEBMDDbAVQ_Vl0wQd6i5pIXkmFd3tIyepFoS3HcGO0ZgMO3qFDHAzxqn75ZGVHUiLJYmboMULjPYHGPuGuSHu_G-uafogrFlIww3iARIAaykQRY99KiATfqfmkXRaF0nOlhC7o4UQyN9ra-CO9U4MW05fwFnQ0O9pyXM9co3mcWIOvCfWKrbYaMP_tD9La5PjnVEhB67FwSD-BrgE2R2cAD52WQe0ygbs7caB_IGYAOd9QPPfG1eAK1Erl1zsV6l87VMrNPvS0QJYJMP8QXx17F99kaJMbPqrNHJRGPSA_iig0Qg4Uuy4R2EL0YX7GxsRXGieOI625nyumGOE5o6jfaNVezp0doWJFhumnR2gsPkkdUgM0qmY2OoO6F2LS2_uAPItuu-l1Wc9XgG6Yjn9roIydS1-bK31_odLQJBqG6U6CFwYxh7z23MQQW1piDlEYoTTgZ2PEK8kkBfbGyMMLLiDRlQ_bH1lIphJSXKermus7lKDDKfqF-WZ7lelZBIr4DKekqAG7bcWywtHfP2SvgEzo5YMgSmxuAEi4NVKndSBKNqRAYJ14QnPZNsHTtxVWJFZ2RaS9Y7A8s4bZqR5LXfcZPfZNLXKMiKf3KCzSZfoYVK1zIj8nGUH48oVwq1o66m9iUKMG9Gv6dZO-I5PWFUJbYGhTwp_HmRHEstyVmwDKg9DlKz-VwwKNSGz0LCfY0S4TLtbNX1A2dREXLTK2RQCxv6xyE318wKTpU7SdKWy9JWfygmIJOvUuQeqJ8GRtK2cf_SJEU4h9ZjXqqyCQCrbYawgKj8INYwSC9BLjTyB_wqma6hk8xw3dZMpntTlIIG-I0axbRFl3hIJ5vQALwg0VhSl5IowmuTNNJIqjjNqIZgZfUA6e5XgU0Q2Ihp0BRhRrHk26pOU_Tc'
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
            'authorization': 'bearer m3fewXeaWvaVjVqbGCiHTLqOha0e8wK3wxvk1foN7D0iDW-zfCUvAgTfyo-pg2k_bPNdklhlYjK0PkSxhDnDTB9rBocSCygivoejz3RWMgbQfWBzkC4g0HxLRE92QwRmP0Yy2vUBzwZiLxuvojmwRuAA1pfiA27Pblk1Vgq6fP67qakK_i7B176yPSCslyWVMTUvNU8DGKZZxunDXBoHaUbwsY1d7GF2iY1du59gFSGjj08oebRA9v-mlBVJrm281YiWZLDU8V1y1j_oAk4ngKqMzxkqqw2EsskcH34zm1okmn45UWMDkEVJFqj1A28qn47-TYzH4CRGnmQxERDyV5XZ5-MxIc2OPGWnd5nnPw46Ghy5H5wH991H--Xcekjtyd9uOBGHcbFeNTAjDECaQW_KB0kWPW8_LO6YfQCEBMDDbAVQ_Vl0wQd6i5pIXkmFd3tIyepFoS3HcGO0ZgMO3qFDHAzxqn75ZGVHUiLJYmboMULjPYHGPuGuSHu_G-uafogrFlIww3iARIAaykQRY99KiATfqfmkXRaF0nOlhC7o4UQyN9ra-CO9U4MW05fwFnQ0O9pyXM9co3mcWIOvCfWKrbYaMP_tD9La5PjnVEhB67FwSD-BrgE2R2cAD52WQe0ygbs7caB_IGYAOd9QPPfG1eAK1Erl1zsV6l87VMrNPvS0QJYJMP8QXx17F99kaJMbPqrNHJRGPSA_iig0Qg4Uuy4R2EL0YX7GxsRXGieOI625nyumGOE5o6jfaNVezp0doWJFhumnR2gsPkkdUgM0qmY2OoO6F2LS2_uAPItuu-l1Wc9XgG6Yjn9roIydS1-bK31_odLQJBqG6U6CFwYxh7z23MQQW1piDlEYoTTgZ2PEK8kkBfbGyMMLLiDRlQ_bH1lIphJSXKermus7lKDDKfqF-WZ7lelZBIr4DKekqAG7bcWywtHfP2SvgEzo5YMgSmxuAEi4NVKndSBKNqRAYJ14QnPZNsHTtxVWJFZ2RaS9Y7A8s4bZqR5LXfcZPfZNLXKMiKf3KCzSZfoYVK1zIj8nGUH48oVwq1o66m9iUKMG9Gv6dZO-I5PWFUJbYGhTwp_HmRHEstyVmwDKg9DlKz-VwwKNSGz0LCfY0S4TLtbNX1A2dREXLTK2RQCxv6xyE318wKTpU7SdKWy9JWfygmIJOvUuQeqJ8GRtK2cf_SJEU4h9ZjXqqyCQCrbYawgKj8INYwSC9BLjTyB_wqma6hk8xw3dZMpntTlIIG-I0axbRFl3hIJ5vQALwg0VhSl5IowmuTNNJIqjjNqIZgZfUA6e5XgU0Q2Ihp0BRhRrHk26pOU_Tc'
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

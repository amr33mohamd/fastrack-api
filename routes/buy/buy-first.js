app.get('/buy-first',function(req,res){
  var note_id = req.param('id');
  var video_id = req.param('video_id')
  var type = req.param('type')
  const request = require('request');
    var shortUrl = require('node-url-shortener');

  /*
   note -> 1
   video -> 2
   note + video -> 3
   miderm back -> 4
   video + delivery -> 5
   note with delivery ->6
   alone video -> 7
  */
  if(type == 1){
    sql.select('notes','id',note_id,function(note){
      const fetch = require('node-fetch');
        var shortUrl = require('node-url-shortener');

        if(note[0].price == 0){
        var deviceId = req.param('deviceId')
        new_url = 'http://'+req.headers.host+'/buy-second?note_id='+note[0].id+'&deviceId='+deviceId+'&type=1';
        console.log('llll')

        res.redirect(new_url);
      }
      else {
          var deviceId = req.param('deviceId')
          redirect_url = 'http://www.fastrack.xyz/buy-second?note_id=' + note[0].id + '&deviceId=' + deviceId + '&type=1';

          console.log(redirect_url)

          sql.short(redirect_url, function( redirect_url2){
              console.log(redirect_url2)
              // var url = 'https://php-helper.herokuapp.com/try.php?price='+note[0].price+'&url=http://'+req.headers.host+'/buy-second?note_id='+note[0].id+','+deviceId+',1';
          const options = {
              url: 'https://apikw.myfatoorah.com/ApiInvoices/Create',
              method: 'post',
              headers: {
                  'Content-Type': 'application/json',
                  'authorization': 'bearer b06Ci4ElTqnTFLYdKLsHBF7RIROXz1UKSMq2if38Ui3Qh6q7h2bcjr3zVauZW63Q-f98c5L_eu2Jc0uoLlxbcxqi7J5ByK-xuIBu3x2xo8x03CS9Ovw6dCRkWLSEd1WTwOeBo764Y8SdY7ACMr8xT71HtXB3RoVj-KPa_hg9ek3gNsYwSlUwSwapwmmekZKNPu7AwC8ZNlFVESp_bSQNaDYBFQTuqsy3q3nosGn8rQtCqgWSMk3iGKTVMu5hZnQaxd77k7WKRh2BWiEyFqsQSfR-u58mkitunj6JIloxIBGdaEv8cHE3LkH7led91Uvsm5XJdc9n06-b8HPOLVvS2u4soOSIw5P1M9jSOIAPLcNrV9KemwEmX_sSJ_jOTV-3djlasdN1GXDNthPN_hC5vNAUv2o1w7fEsHJ9WZptyUAjWQKF2K89zlTDo8y2N4EFAGw3Gy5uB0jdU9lpOuZii-K6ot-wQCPPROumOTGDKWuTu747PSf6jEmgVgu9i6Qit68XCkocTKd48sBb9055QS84mrLy_xJz-da0E7JI8Ij5pc4oDz5qDAmboWsjMsnQTNi6usdamsFOj4DPueOe4G-ydG78qWwBGxah0ic56cr-t4UpEilFth-95iEGNhgcsvZrJm2u836TT3e3mdG7P6dQx-4'
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
                  "CountryCodeId": "+965",
                  "CustomerMobile": deviceId,
                  "CustomerEmail": "tracksuccess@gmail.com",
                  "DisplayCurrencyId": 1,
                  "SendInvoiceOption": 1,
                  "InvoiceItemsCreate": [
                      {
                          "ProductId": null,
                          "ProductName": "Product01",
                          "Quantity": 1,
                          "UnitPrice": note[0].price
                      }
                  ],
                  "CallBackUrl": redirect_url2,
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
      });
        }
    })
  }
  else if(type == 6){
    sql.select('notes','id',note_id,function(note) {
        const fetch = require('node-fetch');

        var deviceId = req.param('deviceId')
        var mohafza = req.param('mohafza');
        var mntqa = req.param('mntqa');
        var qt3a = req.param('qt3a');
        var street = req.param('street');
        var home = req.param('home');
        var gada = req.param('gada');
        var floor = req.param('floor');

        redirect_url = 'http://www.fastrack.xyz/buy-second?note_id=' + note[0].id + '&deviceId=' + deviceId + '&type=6' + '&mohafza=' + mohafza + '&mntqa=' + mntqa + '&qt3a=' + qt3a + '&street=' + street + '&home=' + home + '&gada=' + gada + '&floor=' + floor;
        ;
        console.log(redirect_url)
        sql.short(encodeURI(redirect_url), function ( redirect_url2) {
            console.log(redirect_url2)

            // var url = 'https://php-helper.herokuapp.com/try.php?price='+note[0].price+'&url=http://'+req.headers.host+'/buy-second?note_id='+note[0].id+','+deviceId+',1';
            const options = {
                url: 'https://apikw.myfatoorah.com/ApiInvoices/Create',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'bearer b06Ci4ElTqnTFLYdKLsHBF7RIROXz1UKSMq2if38Ui3Qh6q7h2bcjr3zVauZW63Q-f98c5L_eu2Jc0uoLlxbcxqi7J5ByK-xuIBu3x2xo8x03CS9Ovw6dCRkWLSEd1WTwOeBo764Y8SdY7ACMr8xT71HtXB3RoVj-KPa_hg9ek3gNsYwSlUwSwapwmmekZKNPu7AwC8ZNlFVESp_bSQNaDYBFQTuqsy3q3nosGn8rQtCqgWSMk3iGKTVMu5hZnQaxd77k7WKRh2BWiEyFqsQSfR-u58mkitunj6JIloxIBGdaEv8cHE3LkH7led91Uvsm5XJdc9n06-b8HPOLVvS2u4soOSIw5P1M9jSOIAPLcNrV9KemwEmX_sSJ_jOTV-3djlasdN1GXDNthPN_hC5vNAUv2o1w7fEsHJ9WZptyUAjWQKF2K89zlTDo8y2N4EFAGw3Gy5uB0jdU9lpOuZii-K6ot-wQCPPROumOTGDKWuTu747PSf6jEmgVgu9i6Qit68XCkocTKd48sBb9055QS84mrLy_xJz-da0E7JI8Ij5pc4oDz5qDAmboWsjMsnQTNi6usdamsFOj4DPueOe4G-ydG78qWwBGxah0ic56cr-t4UpEilFth-95iEGNhgcsvZrJm2u836TT3e3mdG7P6dQx-4'
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
                    "CountryCodeId": "+965",
                    "CustomerMobile": deviceId,
                    "CustomerEmail": "tracksuccess@gmail.com",
                    "DisplayCurrencyId": 1,
                    "SendInvoiceOption": 1,
                    "InvoiceItemsCreate": [
                        {
                            "ProductId": null,
                            "ProductName": "Product01",
                            "Quantity": 1,
                            "UnitPrice": note[0].deliver
                        }
                    ],
                    "CallBackUrl": encodeURI(redirect_url2),
                    "Language": 1
                }
            };

            callback = (error, response, body) =>
            {
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


        })
    });
  }
  else if(type == 2) {
    sql.select('videos','note_id',note_id,function(video){
      const fetch = require('node-fetch');
      var deviceId = req.param('deviceId')

      if(video[0].price == 0){
        new_url = 'http://'+req.headers.host+'/buy-second?note_id='+video[0].id+'&deviceId='+deviceId+'&type=2';
        res.redirect(new_url);
      }
      else {
          var redirect_url = 'http://www.fastrack.xyz/buy-second?note_id=' + video[0].id + '&deviceId=' + deviceId + '&type=2';
          // var url = 'https://php-helper.herokuapp.com/try.php?price='+video[0].price+'&url=http://'+req.headers.host+'/buy-second?note_id='+video[0].id+','+deviceId+',2';
          sql.short(encodeURI(redirect_url), function ( redirect_url2) {
              console.log(redirect_url2)

          const options = {
              url: 'https://apikw.myfatoorah.com/ApiInvoices/Create',
              method: 'post',
              headers: {
                  'Content-Type': 'application/json',
                  'authorization': 'bearer b06Ci4ElTqnTFLYdKLsHBF7RIROXz1UKSMq2if38Ui3Qh6q7h2bcjr3zVauZW63Q-f98c5L_eu2Jc0uoLlxbcxqi7J5ByK-xuIBu3x2xo8x03CS9Ovw6dCRkWLSEd1WTwOeBo764Y8SdY7ACMr8xT71HtXB3RoVj-KPa_hg9ek3gNsYwSlUwSwapwmmekZKNPu7AwC8ZNlFVESp_bSQNaDYBFQTuqsy3q3nosGn8rQtCqgWSMk3iGKTVMu5hZnQaxd77k7WKRh2BWiEyFqsQSfR-u58mkitunj6JIloxIBGdaEv8cHE3LkH7led91Uvsm5XJdc9n06-b8HPOLVvS2u4soOSIw5P1M9jSOIAPLcNrV9KemwEmX_sSJ_jOTV-3djlasdN1GXDNthPN_hC5vNAUv2o1w7fEsHJ9WZptyUAjWQKF2K89zlTDo8y2N4EFAGw3Gy5uB0jdU9lpOuZii-K6ot-wQCPPROumOTGDKWuTu747PSf6jEmgVgu9i6Qit68XCkocTKd48sBb9055QS84mrLy_xJz-da0E7JI8Ij5pc4oDz5qDAmboWsjMsnQTNi6usdamsFOj4DPueOe4G-ydG78qWwBGxah0ic56cr-t4UpEilFth-95iEGNhgcsvZrJm2u836TT3e3mdG7P6dQx-4'
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
                  "CountryCodeId": "+965",
                  "CustomerMobile": deviceId,
                  "CustomerEmail": "tracksuccess@gmail.com",
                  "DisplayCurrencyId": 1,
                  "SendInvoiceOption": 1,
                  "InvoiceItemsCreate": [
                      {
                          "ProductId": null,
                          "ProductName": "Product01",
                          "Quantity": 1,
                          "UnitPrice": video[0].price
                      }
                  ],
                  "CallBackUrl": redirect_url2,
                  "Language": 1
              }
          };

          callback = (error, response, body) =>
          {
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
      });

}
    })
  }
  else if(type == 7) {
    sql.select('videos','id',video_id,function(video){
      const fetch = require('node-fetch');
      var deviceId = req.param('deviceId')

      if(video[0].price == 0){
        new_url = 'http://'+req.headers.host+'/buy-second?note_id='+video[0].id+'&deviceId='+deviceId+'&type=2';
        res.redirect(new_url);
      }
      else {
          var redirect_url = 'http://www.fastrack.xyz/buy-second?note_id=' + video[0].id + '&deviceId=' + deviceId + '&type=2';
          // var url = 'https://php-helper.herokuapp.com/try.php?price='+video[0].price+'&url=http://'+req.headers.host+'/buy-second?note_id='+video[0].id+','+deviceId+',2';
          sql.short(encodeURI(redirect_url), function ( redirect_url2) {
              console.log(redirect_url2)

          const options = {
              url: 'https://apikw.myfatoorah.com/ApiInvoices/Create',
              method: 'post',
              headers: {
                  'Content-Type': 'application/json',
                  'authorization': 'bearer b06Ci4ElTqnTFLYdKLsHBF7RIROXz1UKSMq2if38Ui3Qh6q7h2bcjr3zVauZW63Q-f98c5L_eu2Jc0uoLlxbcxqi7J5ByK-xuIBu3x2xo8x03CS9Ovw6dCRkWLSEd1WTwOeBo764Y8SdY7ACMr8xT71HtXB3RoVj-KPa_hg9ek3gNsYwSlUwSwapwmmekZKNPu7AwC8ZNlFVESp_bSQNaDYBFQTuqsy3q3nosGn8rQtCqgWSMk3iGKTVMu5hZnQaxd77k7WKRh2BWiEyFqsQSfR-u58mkitunj6JIloxIBGdaEv8cHE3LkH7led91Uvsm5XJdc9n06-b8HPOLVvS2u4soOSIw5P1M9jSOIAPLcNrV9KemwEmX_sSJ_jOTV-3djlasdN1GXDNthPN_hC5vNAUv2o1w7fEsHJ9WZptyUAjWQKF2K89zlTDo8y2N4EFAGw3Gy5uB0jdU9lpOuZii-K6ot-wQCPPROumOTGDKWuTu747PSf6jEmgVgu9i6Qit68XCkocTKd48sBb9055QS84mrLy_xJz-da0E7JI8Ij5pc4oDz5qDAmboWsjMsnQTNi6usdamsFOj4DPueOe4G-ydG78qWwBGxah0ic56cr-t4UpEilFth-95iEGNhgcsvZrJm2u836TT3e3mdG7P6dQx-4'
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
                  "CountryCodeId": "+965",
                  "CustomerMobile": deviceId,
                  "CustomerEmail": "tracksuccess@gmail.com",
                  "DisplayCurrencyId": 1,
                  "SendInvoiceOption": 1,
                  "InvoiceItemsCreate": [
                      {
                          "ProductId": null,
                          "ProductName": "Product01",
                          "Quantity": 1,
                          "UnitPrice": video[0].price
                      }
                  ],
                  "CallBackUrl": redirect_url2,
                  "Language": 1
              }
          };

          callback = (error, response, body) =>
          {
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
      });

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
      else {
          var deviceId = req.param('deviceId')
          var redirect_url = 'http://www.fastrack.xyz/buy-second?note_id=' + video[0].id + '&deviceId=' + deviceId + '&type=3'
          sql.short(encodeURI(redirect_url), function (redirect_url2) {
              console.log(redirect_url2)

          const options = {
              url: 'https://apikw.myfatoorah.com/ApiInvoices/Create',
              method: 'post',
              headers: {
                  'Content-Type': 'application/json',
                  'authorization': 'bearer b06Ci4ElTqnTFLYdKLsHBF7RIROXz1UKSMq2if38Ui3Qh6q7h2bcjr3zVauZW63Q-f98c5L_eu2Jc0uoLlxbcxqi7J5ByK-xuIBu3x2xo8x03CS9Ovw6dCRkWLSEd1WTwOeBo764Y8SdY7ACMr8xT71HtXB3RoVj-KPa_hg9ek3gNsYwSlUwSwapwmmekZKNPu7AwC8ZNlFVESp_bSQNaDYBFQTuqsy3q3nosGn8rQtCqgWSMk3iGKTVMu5hZnQaxd77k7WKRh2BWiEyFqsQSfR-u58mkitunj6JIloxIBGdaEv8cHE3LkH7led91Uvsm5XJdc9n06-b8HPOLVvS2u4soOSIw5P1M9jSOIAPLcNrV9KemwEmX_sSJ_jOTV-3djlasdN1GXDNthPN_hC5vNAUv2o1w7fEsHJ9WZptyUAjWQKF2K89zlTDo8y2N4EFAGw3Gy5uB0jdU9lpOuZii-K6ot-wQCPPROumOTGDKWuTu747PSf6jEmgVgu9i6Qit68XCkocTKd48sBb9055QS84mrLy_xJz-da0E7JI8Ij5pc4oDz5qDAmboWsjMsnQTNi6usdamsFOj4DPueOe4G-ydG78qWwBGxah0ic56cr-t4UpEilFth-95iEGNhgcsvZrJm2u836TT3e3mdG7P6dQx-4'
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
                  "CountryCodeId": "+965",
                  "CustomerMobile": deviceId,
                  "CustomerEmail": "tracksuccess@gmail.com",
                  "DisplayCurrencyId": 1,
                  "SendInvoiceOption": 1,
                  "InvoiceItemsCreate": [
                      {
                          "ProductId": null,
                          "ProductName": "Product01",
                          "Quantity": 1,
                          "UnitPrice": video[0].bothh
                      }
                  ],
                  "CallBackUrl": redirect_url2,
                  "Language": 1
              }
          };

          callback = (error, response, body) =>
          {
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
      });
        }
    })
  }
  else if(type == 4) { //midterm backage
    sql.select('midterm','id',note_id,function(video) {
        const fetch = require('node-fetch');
        var deviceId = req.param('deviceId');
        var mohafza = req.param('mohafza');
        var mntqa = req.param('mntqa');
        var qt3a = req.param('qt3a');
        var street = req.param('street');
        var home = req.param('home');
        var gada = req.param('gada');
        var floor = req.param('floor');

        var redirect_url = 'http://www.fastrack.xyz/buy-second?note_id=' + video[0].id + '&deviceId=' + deviceId + '&type=4' + '&mohafza=' + mohafza + '&mntqa=' + mntqa + '&qt3a=' + qt3a + '&street=' + street + '&home=' + home + '&gada=' + gada + '&floor=' + floor;
        // var url = 'https://php-helper.herokuapp.com/try.php?price='+video[0].price+'&url=http://'+req.headers.host+'/buy-second?note_id='+video[0].id+','+deviceId+',2';
        sql.short(encodeURI(redirect_url), function ( redirect_url2) {
            console.log(redirect_url2)

        const options = {
            url: 'https://apikw.myfatoorah.com/ApiInvoices/Create',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'bearer b06Ci4ElTqnTFLYdKLsHBF7RIROXz1UKSMq2if38Ui3Qh6q7h2bcjr3zVauZW63Q-f98c5L_eu2Jc0uoLlxbcxqi7J5ByK-xuIBu3x2xo8x03CS9Ovw6dCRkWLSEd1WTwOeBo764Y8SdY7ACMr8xT71HtXB3RoVj-KPa_hg9ek3gNsYwSlUwSwapwmmekZKNPu7AwC8ZNlFVESp_bSQNaDYBFQTuqsy3q3nosGn8rQtCqgWSMk3iGKTVMu5hZnQaxd77k7WKRh2BWiEyFqsQSfR-u58mkitunj6JIloxIBGdaEv8cHE3LkH7led91Uvsm5XJdc9n06-b8HPOLVvS2u4soOSIw5P1M9jSOIAPLcNrV9KemwEmX_sSJ_jOTV-3djlasdN1GXDNthPN_hC5vNAUv2o1w7fEsHJ9WZptyUAjWQKF2K89zlTDo8y2N4EFAGw3Gy5uB0jdU9lpOuZii-K6ot-wQCPPROumOTGDKWuTu747PSf6jEmgVgu9i6Qit68XCkocTKd48sBb9055QS84mrLy_xJz-da0E7JI8Ij5pc4oDz5qDAmboWsjMsnQTNi6usdamsFOj4DPueOe4G-ydG78qWwBGxah0ic56cr-t4UpEilFth-95iEGNhgcsvZrJm2u836TT3e3mdG7P6dQx-4'
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
                "CountryCodeId": "+965",
                "CustomerMobile": deviceId,
                "CustomerEmail": "tracksuccess@gmail.com",
                "DisplayCurrencyId": 1,
                "SendInvoiceOption": 1,
                "InvoiceItemsCreate": [
                    {
                        "ProductId": null,
                        "ProductName": "Product01",
                        "Quantity": 1,
                        "UnitPrice": video[0].price
                    }
                ],
                "CallBackUrl": encodeURI(redirect_url2),
                "Language": 1
            }
        };

        callback = (error, response, body) =>
        {
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

    });
    })
  }
  else if(type == 5) { // video + delivery
    sql.select('videos','note_id',note_id,function(video){
      const fetch = require('node-fetch');
      var deviceId = req.param('deviceId');
      var mohafza = req.param('mohafza');
      var mntqa = req.param('mntqa');
      var qt3a = req.param('qt3a');
      var street = req.param('street');
      var home = req.param('home');
      var gada = req.param('gada');
      var floor = req.param('floor');

        var redirect_url = 'http://www.fastrack.xyz/buy-second?note_id='+video[0].id+'&deviceId='+deviceId+'&type=5'+'&mohafza='+mohafza+'&mntqa='+mntqa+'&qt3a='+qt3a+'&street='+street+'&home='+home+'&gada='+gada+'&floor='+floor;
            // var url = 'https://php-helper.herokuapp.com/try.php?price='+video[0].price+'&url=http://'+req.headers.host+'/buy-second?note_id='+video[0].id+','+deviceId+',2';
console.log(redirect_url)
        sql.short(redirect_url, function (redirect_url2) {
            console.log(redirect_url2)

            const options = {
                url: 'https://apikw.myfatoorah.com/ApiInvoices/Create',
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'bearer b06Ci4ElTqnTFLYdKLsHBF7RIROXz1UKSMq2if38Ui3Qh6q7h2bcjr3zVauZW63Q-f98c5L_eu2Jc0uoLlxbcxqi7J5ByK-xuIBu3x2xo8x03CS9Ovw6dCRkWLSEd1WTwOeBo764Y8SdY7ACMr8xT71HtXB3RoVj-KPa_hg9ek3gNsYwSlUwSwapwmmekZKNPu7AwC8ZNlFVESp_bSQNaDYBFQTuqsy3q3nosGn8rQtCqgWSMk3iGKTVMu5hZnQaxd77k7WKRh2BWiEyFqsQSfR-u58mkitunj6JIloxIBGdaEv8cHE3LkH7led91Uvsm5XJdc9n06-b8HPOLVvS2u4soOSIw5P1M9jSOIAPLcNrV9KemwEmX_sSJ_jOTV-3djlasdN1GXDNthPN_hC5vNAUv2o1w7fEsHJ9WZptyUAjWQKF2K89zlTDo8y2N4EFAGw3Gy5uB0jdU9lpOuZii-K6ot-wQCPPROumOTGDKWuTu747PSf6jEmgVgu9i6Qit68XCkocTKd48sBb9055QS84mrLy_xJz-da0E7JI8Ij5pc4oDz5qDAmboWsjMsnQTNi6usdamsFOj4DPueOe4G-ydG78qWwBGxah0ic56cr-t4UpEilFth-95iEGNhgcsvZrJm2u836TT3e3mdG7P6dQx-4'
                },
                form: {

                    "InvoiceValue": video[0].with_deliver,
                    "CustomerName": "Customer01",
                    "CustomerBlock": "",
                    "CustomerStreet": "",
                    "CustomerHouseBuildingNo": "",
                    "CustomerCivilId": "string",
                    "CustomerAddress": "string",
                    "CustomerReference": "string",
                    "CountryCodeId": "+965",
                    "CustomerMobile": deviceId,
                    "CustomerEmail": "tracksuccess@gmail.com",
                    "DisplayCurrencyId": 1,
                    "SendInvoiceOption": 1,
                    "InvoiceItemsCreate": [
                        {
                            "ProductId": null,
                            "ProductName": "Product01",
                            "Quantity": 1,
                            "UnitPrice": video[0].with_deliver
                        }
                    ],
                    "CallBackUrl": encodeURI(redirect_url2),
                    "Language": 1
                }
            };

            callback = (error, response, body) =>
            {
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

        });
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

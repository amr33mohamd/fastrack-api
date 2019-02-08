app.get('/', function(req, res) {
	res.render('login');
});
app.get('/login', function(req, response) {
	var email = req.param('email');
	var password = req.param('password');



	if(email == 'fastrack@admin.com' && password=='ghfgh#256789'){
			response.redirect('/universities');
	}
	else{
		response.redirect('/');
	}
});



app.get('/sdsa', function(req, res) {});
app.get('/config',function(req,res){
	con.query("CREATE USER 'amr'@'%' IDENTIFIED BY 'a33304454'",function(err,ress){
		if(!err){
			res.send('done sir amr')
		}
		else {
			res.send(err);
		}
	})
})
//full admin control -------------->
app.get('/users', function(req, res) {
	session.startSession(req, res, function() {
		sql.select('users', '1', '1', function(data) {
			var today = new Date();
			var users = [];
			var dd = today.getDate();
			var mm = today.getMonth(); //January is 0!
			var yyyy = today.getFullYear();
			var day = yyyy + '-' + mm + '-' + dd;
			sql.select('users', '1', '1', function(data1) {
				for (let i in data1) {
					//if the user still has paid time ----->
					if (moment(data1[i].pay).isAfter(day)) {
						users.push(data1[i]);
					} else {
					}
				}

				res.render('users', { data: data, users });
			});
		});
	});
});

app.get('/feedbacks', function(req, res) {
	session.startSession(req, res, function() {
		sql.select('feedbacks', '1', '1', function(users) {
			res.render('feedback', { data: users });
		});
	});
});

app.get('/add-categories', function(req, res) {
	session.startSession(req, res, function() {
		sql.select('categories', '1', '1', function(categories) {
			res.render('add-categories', { categories });
		});
	});
});

app.post('/add_category', function(req, res) {
	var name = req.body.name;

	con.query('insert into categories(name) values(?)', [name], function(
		err,
		ress
	) {
		if (err) {
			res.send(err);
		} else {
			res.send('done .....');
		}
	});
});

app.get('/universities', function(req, res) {
	session.startSession(req, res, function() {
		sql.select('universities', '1', '1', function(categories) {
			res.render('categories', { categories });
		});
	});
});

app.get('/delete-category', function(req, res) {
	var cat_id = req.param('id');
	sql.delete('categories', 'id', cat_id, function(data) {
		if (data) {
			sql.delete('sub_categories', 'parent_category_id', cat_id, function(
				data
			) {
				if (data) {
					res.redirect('/categories');
				} else {
					res.send('please contact programmer if you got that error again 2');
				}
			});
		} else {
			res.send('please contact programmer if you got that error again');
		}
	});
});


app.get('/delete-university', function(req, res) {
	var cat_id = req.param('id');
	sql.delete('universities', 'id', cat_id, function(data) {
		if (data) {
			res.redirect('/universities');
		} else {
			res.send('please contact programmer if you got that error again');
		}
	});
});

app.get('/change-subject', function(req, res) {
	var id = req.param('id');
	var what = req.param('what');
	var new_name = req.param('new_name');
	sql.update('subjects', what, new_name, 'id', id, function(data) {
		res.redirect(data);
	});
});

app.get('/change-coupon', function(req, res) {
	var id = req.param('id');
	var what = req.param('what');
	var new_name = req.param('new_name');
	sql.update('coupons', what, new_name, 'id', id, function(data) {
		res.redirect(data);
	});
});

app.get('/edit-sector', function(req, res) {
	var id = req.param('id');
	var what = req.param('what');
	var new_name = req.param('new_name');
	sql.update('sectors', what, new_name, 'id', id, function(data) {
		res.redirect(data);
	});
});

app.get('/edit-coupon', function(req, res) {
	var id = req.param('id');
	var what = req.param('what');
	var new_name = req.param('new_name');
	sql.update('coupons', what, new_name, 'id', id, function(data) {
		res.redirect(data);
	});
});


app.get('/edit-video', function(req, res) {
	var id = req.param('id');
	var what = req.param('what');
	var new_name = req.param('new_name');
	sql.update('videos', what, new_name, 'id', id, function(data) {
		res.redirect(data);
	});
});

app.get('/subjects', function(req, res) {
		sql.select('subjects', '1', '1', function(sub_categories) {
			sql.select('sectors', '1', '1', function(categories) {
				sql.selectno('universities', '1', '1', function(universities) {
				res.render('subcategories', { categories, sub_categories,universities });
				});
			});
		});
});



app.get('/sectors', function(req, res) {
	session.startSession(req, res, function() {
		sql.select('sectors', '1', '1', function(sub_categories) {
				sql.select('universities', '1', '1', function(universities) {
				res.render('sectors', {  sub_categories,universities });

			});
		});
	});
});

app.get('/coupons', function(req, res) {
	session.startSession(req, res, function() {
		sql.selectno('coupons', '1', '1', function(sub_categories) {
				sql.select('videos', '1', '1', function(universities) {
						res.render('coupons', {  sub_categories,universities });
			});
		});
	});
});


app.get('/videos', function(req, res) {
	session.startSession(req, res, function() {
		sql.select('videos', '1', '1', function(videos) {
				sql.select('notes', '1', '1', function(notes) {
				res.render('videos', {  videos,notes });

			});
		});
	});
});


app.get('/add-subject', function(req, res) {
	session.startSession(req, res, function() {
		sql.select('sectors', '1', '1', function(categories) {
			sql.selectno('universities', '1', '1', function(universities) {
				res.render('add-subcategories', { categories, universities });
			});
		});
	});
});

app.post('/add_subcategory', function(req, res) {
	var name = req.body.name;
	var category = req.body.category;

	con.query(
		'insert into subjects(name,sector_id) values(?,?)',
		[name, category],
		function(err, ress) {
			if (err) {
				res.send(err);
			} else {
				res.redirect('/add-subject');
			}
		}
	);
});


app.get('/add-sector', function(req, res) {
	session.startSession(req, res, function() {
			sql.select('universities', '1', '1', function(universities) {
				res.render('add-sector', {  universities });
			});
	});
});
app.get('/add-coupon', function(req, res) {
	session.startSession(req, res, function() {
			sql.select('videos', '1', '1', function(universities) {
				res.render('add-coupon', {  universities });
			});
	});
});
app.post('/add_coupon', function(req, res) {
	var coupon = req.body.coupon;
	var video = req.body.video;
	var deviceId = req.body.deviceid;
	con.query(
		'insert into coupons(coupon,deviceId,note_id,status) values(?,?,?,0)',
		[coupon, deviceId,video],
		function(err, ress) {
			if (err) {
				res.send(err);
			} else {
				res.redirect('/add-coupon');
			}
		}
	);
});


app.get('/change-parent-category', function(req, res) {
	var id = req.param('id');
	var new_parent_cat = req.param('new_parent_cat');

	con.query(
		'update subjects set sector_id=? where id=?',
		[new_parent_cat, id],
		function(err, res) {
			if (err) {
				res.send(err);
			}
		}
	);
});



app.get('/change-sector', function(req, res) {
	var id = req.param('id');
	var new_parent_cat = req.param('new_parent_cat');

	con.query(
		'update sectors set university_id=? where id=?',
		[new_parent_cat, id],
		function(err, ress) {
			if (err) {
				res.send(err);
			}
		}
	);
});

app.get('/change-video', function(req, res) {
	var id = req.param('id');
	var new_parent_cat = req.param('new_parent_cat');

	con.query(
		'update videos set note_id=? where id=?',
		[new_parent_cat, id],
		function(err, ress) {
			if (err) {
				res.send(err);
			}
		}
	);
});

app.get('/delete-subcategory', function(req, res) {
	var cat_id = req.param('id');
	sql.delete('subjects', 'id', cat_id, function(data) {
		if (data) {
			res.redirect('/subjects');
		} else {
			res.send('please contact programmer if you got that error again');
		}
	});
});
app.get('/delete-sector', function(req, res) {
	var cat_id = req.param('id');
	sql.delete('sectors', 'id', cat_id, function(data) {
		if (data) {
			res.redirect('/sectors');
		} else {
			res.send('please contact programmer if you got that error again');
		}
	});
});
app.get('/test', function(req, res) {
	var mysqll = require('mysql');

	var conn = mysqll.createConnection({
		host: '127.0.0.1',
		user: 'root',
		password: 'BeRichToGetABitch'
	});

	conn.connect(function(err) {
		if (err) {
			res.send('the error is' + err);
		} else {
			res.send('connected');
			conn.query('FLUSH PRIVILEGES', function(err, ress) {
				if (ress) {
					res.send('done');
				} else {
					res.send(err);
				}
			});
		}
	});
});

function FormatOrders(unformatted_orders, callback) {
	var orders = [];
	unformatted_orders.forEach(function(order, index, array) {
		con.query(
			'SELECT name,price,link FROM books where id=? LIMIT 1',
			[order['book_id']],
			function(err, books) {
				if (!err) {
					con.query(
						'SELECT name,email,country,address,currency FROM users where id=? LIMIT 1',
						[order['user_id']],
						function(err, users) {
							if (!err) {
								var bookObj = {
									name: books[0].name,
									link: books[0].link,
									price: books[0].price
								};
								var userObj = {
									name: users[0].name,
									email: users[0].email,
									country: users[0].country,
									address: users[0].address,
									currency: users[0].currency
								};
								var formatted_order = {
									id: order['id'],
									user: userObj,
									book: bookObj,
									method: order['method'],
									status: order['status']
								};
								orders.push(formatted_order);

								if (index === array.length - 1) callback(orders);
							}
						}
					);
				}
			}
		);
	});
}

app.get('/orders', function(req, res) {
	session.startSession(req, res, function() {
		sql.select('orders', '1', '1', function(unformatted_orders) {
			if (unformatted_orders.length == 0) {
				res.send('we checked your orders and there are still no orders');
			} else {
				FormatOrders(unformatted_orders, function(orders) {
					res.render('orders', { orders });
				});
			}
		});
	});
});

app.get('/change-order-status', function(req, res) {
	var id = req.param('id');
	var status = req.param('status');

	con.query('update orders set status=? where id=?', [status, id], function(
		err,
		ress
	) {
		if (err) res.send(err);
		else res.redirect('/orders');
	});
});

app.get('/books', function(req, res) {
	session.startSession(req, res, function() {
		sql.select('notes', '1', '1', function(data) {
			sql.select('subjects','1','1',function(categories){
				sql.select('sectors', '1', '1', function(sectors) {
				sql.selectno('universities','1','1',function(universities){
					res.render('books', { users: data,universities,categories,sectors });
				})
			});
			})
		});
	});
});

app.get('/add-books', function(req, res) {
	session.startSession(req, res, function() {
		sql.selectno('universities', '1', '1', function(categories) {
			sql.select('subjects', '1', '1', function(sub_categories) {
				sql.select('sectors', '1', '1', function(sectors) {
				sql.select('notes', '1', '1', function(data) {
					res.render('add-books', { categories, sub_categories, data,sectors });
				});
				});
			});
		});
	});
});

app.get('/add-video', function(req, res) {
	session.startSession(req, res, function() {
				sql.select('notes', '1', '1', function(notes) {
					res.render('add-video', { notes });
				});
				});
});



app.get('/tree', function(req, res) {
	session.startSession(req, res, function() {
		sql.select('universities', '1', '1', function(universities) {
			sql.select('subjects', '1', '1', function(subjects) {
				sql.select('sectors', '1', '1', function(sectors) {
				sql.select('notes', '1', '1', function(notes) {
					res.render('tree', { universities, subjects, sectors,notes });
				});
				});
			});
		});
	});
});

app.get('/add-university', function(req, res) {
	sql.select('universities', '1', '1', function(data) {

					res.render('add-university',{data});
})
});


app.get('/free-view-note',function(req,res){

	var id = req.param('id');
	var deviceid = req.param('deviceid');

sql.select('notes','id',id,function(book) {

	con.query("insert into ownedNotes(note_id,deviceId) values(?,?)",[id,deviceid],function(err,resss){
	res.json({response:1})
	});
});


});
app.get('/free-view-video',function(req,res){

	var id = req.param('id'); // note_id
	var deviceid = req.param('deviceid');

sql.select('videos','note_id',id,function(book) {

	con.query("insert into ownedVideos(video_id,deviceId) values(?,?)",[book[0].id,deviceid],function(err,resss){
	res.json({response:1})
	});
});


});

app.get('/a',function(req,res){
	var ip = req.connection.remoteAddress;
	res.send(ip);
})
app.get('/api/sharevideo',function(req,res){
	var deviceId = req.param('deviceId');
	var ip = require('ip');

	var video_id = req.param('id');
	var ip = req.connection.remoteAddress;
	con.query("select * from video_ip where video_id = ? and deviceId = ? ",[video_id,deviceId],function(err,video_ip_data){
		if(video_ip_data.length == 0){
			con.query("insert into video_ip(deviceId,video_id,ip) values(?,?,?)",[deviceId,video_id,ip],function(err,final){
				sql.select('videos','id',video_id,function(video){
					res.render('video',{video:video[0]})
				})
			})
		}
		else {
			if(video_ip_data[0].ip == ip){
				sql.select('videos','id',video_id,function(video){
					res.render('video',{video:video[0]})
				})
			}
			else {
				res.send('you are not allowed to view this');
			}
		}
	})
})


app.get('/view-note',function(req,res){
  var id = req.param('id');
	fs = require('fs'),

  sql.select('notes','id',id,function(book) {
		var filePath = book[0].link;
		var filePath = filePath.replace('http://159.89.95.28/books','');
		var domain = 'http://' + req.get('host');
		var filePath = filePath.replace('.pdf','');
		var note_name = filePath;
		var dir = __dirname;
		var dir = dir.replace('/routes','/');
		var images = [];
		console.log(dir+'books-images'+filePath);
		fs.readdir(dir+'books-images'+filePath, (err, files) => {
			files_count = files.length+1;
			console.log(files_count)
			for(let i = 1;i <files_count;i++){
				if(book[0].jpg == 1){
					images.push({ source: { uri: domain + '/books-images'+note_name+ ''+ note_name+'-'+i+'.jpg' } });
				}
				else {
					images.push({ source: { uri: domain + '/books-images'+note_name+ ''+ note_name+'-'+i+'.png' } });
				}
				if(files_count-1 == i){
					res.send(images);
				}
			}
		});



	 // fs.readFile(dir + filePath, function (err,data){
		// 	 res.contentType("application/pdf");
		// 	 res.send(data);
	 // });


      })
})
app.get('/zip',function(req,res){
	var zipFolder = require('zip-folder');

	zipFolder('/home/fastrack-api/books', '/home/fastrack-api/archive.zip', function(err) {
	    if(err) {
	        console.log('oh no!', err);
	    } else {
	        console.log('EXCELLENT');
	    }
	});
})

app.post('/add_university', function(req, res) {
	var image = req.files.image;

	var name = req.body.name;

	var domain = 'http://' + req.get('host');
	var random_num = Math.random();

	image.mv('images/' + random_num + '.jpg', function(err) {


	});

	var image_link = 'images/' + random_num + '.jpg';


	con.query(
		'insert into universities(name,image) values(?,?)',
		[
			name,

			domain + '/images/' + random_num + '.jpg',

		],
		function(err, ress) {
			if (err) {
				res.send(err);
			} else {

				res.redirect('/add-university');
			}
		}
	);
});

app.post('/add_video',function(req,res){
	var name = req.body.name;
	var price = req.body.price;
	var bothh = req.body.bothh;
	var note_id = req.body.note_id;
	var video = req.files.video;
	var domain = 'http://' + req.get('host');
	var random_num = Math.random();

	video.mv('videos/' + random_num + 1 +'.mp4', function(err) {
		con.query(
			'insert into videos(name,video,note_id,price,bothh,downloads) values(?,?,?,?,?,0)',
			[
				name,
				domain + '/videos/' + random_num + 1 +'.mp4',
				note_id,
				price,
				bothh,
			],
			function(err, ress) {
				res.redirect('/add-video')
			})
		});

})

app.post('/add_book', function(req, res) {
	var image = req.files.image;
	var subject_id = req.body.subject_id;
	var name = req.body.name;
	var descc = req.body.descc;

	var pdf = req.files.pdf || null;
	var domain = 'http://' + req.get('host');
	var price = req.body.price || null;
	var shot1 = req.files.shot1 || null;
	var shot2 = req.files.shot2 || null;
	var shot3 = req.files.shot3 || null;
	var shot4 = req.files.shot4 || null;
	var random_num = Math.random();


		if (pdf != null) {
			var dir = './books-images/'+random_num+1;

			if (!fs.existsSync(dir)){
					fs.mkdirSync(dir)
			}
			pdf.mv('books-images/' + random_num + 1 +'/'+ random_num + 1 +'.pdf', function(err) {

				var PDFImage = require("pdf-image").PDFImage;
				const getPageCount = require('docx-pdf-pagecount');

			var pdfImage = new PDFImage('books-images/' + random_num + 1 +'/'+ random_num + 1 +'.pdf');
			var fs = require('fs');

			if (!fs.existsSync(dir)){
			    fs.mkdirSync(dir)
			}
			getPageCount('books-images/' + random_num + 1 +'/'+ random_num + 1 +'.pdf').then(pages_num => {
						for(i = pages_num-1;i>=0;i--){
							if (!fs.existsSync(dir)){
									fs.mkdirSync(dir)
							}
							pdfImage.convertPage(i).then(function (imagePath) {

								fs.existsSync("books-images/"+random_num+1+"/slide-i.jpg") // => true
							});
						}
			 })

			});

		}


	var image_link = 'images/' + random_num + '.jpg';

	if (pdf == null) {
		var pdf_link = '';
	} else {
		var pdf_link = domain + '/books/' + random_num + 1 + '.pdf';
	}

	con.query(
		'insert into notes(name,image,descc,link,price,subject_id,jpg) values(?,?,?,?,?,?,?)',
		[
			name,
			domain + '/books-images/' + random_num + 1 +'/'+ random_num + 1 +'-0.png',
			descc,
			pdf_link,
			price,
			subject_id,
			0
		],
		function(err, ress) {
			if (err) {
				res.send(err);
			} else {
				var inserted_id = ress.insertId;
				//first shot ---->
						con.query(
							'insert into images(image,note_id) values(?,?)',
							[domain + '/books-images/' + random_num + 1 +'/'+ random_num + 1 +'-1.png', inserted_id],
							function(aerr, resss) {
								if(aerr){
									res.send(aerr);
								}
							}
						);



//second shot ---->
						con.query(
							'insert into images(image,note_id) values(?,?)',
							[domain + '/books-images/' + random_num + 1 +'/'+ random_num + 1 +'-2.png', inserted_id],
							function(err, aresss) {}
						);



//third shot ---->
						con.query(
							'insert into images(image,note_id) values(?,?)',
							[domain + '/books-images/' + random_num + 1 +'/'+ random_num + 1 +'-3.png', inserted_id],
							function(err, bresss) {}
						);



//forth shot ---->
						con.query(
							'insert into images(image,note_id) values(?,?)',
							[domain + '/books-images/' + random_num + 1 +'/'+ random_num + 1 +'-4.png', inserted_id],
							function(err, dbresss) {}
						);


				res.redirect('/add-books');
			}
		}
	);
});

app.get('/reduce', function(req, res) {
	sql.select('books', '1', '1', function(books) {
		for (let i in books) {
			Jimp.read(books[i].image, function(err, lenna) {
				lenna
					.resize(300, 300) // resize
					.quality(60) // set JPEG quality
					.write(books[i].image); // save
			});
			if (i == books.length - 1) {
				res.send('done sir amr ......');
			}
		}
	});
});

app.get('/garash-pay', function(req, res) {
	res.render('garash-pay');
});
app.get('/terms-and-condition-and-policy', function(req, res) {
	res.render('index');
});
app.get('/make-admin', function(req, res) {
	var user_id = req.param('user_id');
	full_admin.makeAdmin(user_id, function(data) {
		if (data) {
			res.redirect('/users');
		} else {
			res.send('please contact the programmer there is error in database');
		}
	});
});

app.get('/add_user', function(req, res) {
	var name = req.param('name');
	var email = req.param('email');
	var password = req.param('password');
	full_admin.addUser(name, email, password, function(data) {
		if (data) {
			res.redirect('/users');
		} else {
			res.send('please contact the programmer there is error in database');
		}
	});
});

app.get('/block', function(req, res) {
	var user_id = req.param('user_id');
	full_admin.block(user_id, function(data) {
		if (data) {
			res.redirect('/users');
		} else {
			res.send('please contact the programmer there is error in database');
		}
	});
});

app.get('/edit-book-images', function(req, res) {
	var id = req.param('id');
	sql.select('notes', 'id', id, function(book) {
		sql.select('images', 'note_id', id, function(screenshots) {
			res.render('edit-book-images', { book, screenshots });
		});
	});
});

app.get('/edit-university-images', function(req, res) {
	var id = req.param('id');
	sql.select('universities', 'id', id, function(book) {
			res.render('edit-university-images', { book });

	});
});

app.get('/delete-screen', function(req, res) {
	var id = req.param('id');
	var book_id = req.param('book_id');
	sql.select('images', 'id', id, function(screen) {
		let full_dir = screen[0].image;
		let name_array = full_dir.split('/');
		let new_dir = name_array[3] + '/' + name_array[4];
		fs.unlinkSync(new_dir);
		sql.delete('images', 'id', id, function(ress) {
			if (ress) {
				res.redirect('/edit-book-images?id=' + book_id);
			} else {
				res.send('some thing wrong plaese contact programmer -Amr Mohamed');
			}
		});
	});
});

app.post('/add_screen', function(req, res) {
	var random_num = Math.random();
	var note_id = req.body.note_id;
	var shot4 = req.files.image;
	var domain = 'http://' + req.get('host');
	shot4.mv('images/' + random_num + 6 + '.jpg', function(err) {

		con.query(
			'insert into images(image,note_id) values(?,?)',
			[domain + '/images/' + random_num + 6 + '.jpg', note_id],
			function(err, dbresss) {
				if (err) {
					res.send(err);
				} else {
					res.redirect('/edit-book-images?id=' + note_id);
				}
			}
		);
	});
});
app.get('/try-pdf',function(req,res){

	var PDFImage = require("pdf-image").PDFImage;

var pdfImage = new PDFImage("books/0.118774637914701441.pdf");
pdfImage.convertPage(0).then(function (imagePath) {
  // 0-th page (first page) of the slide.pdf is available as slide-0.png
  fs.existsSync("books/slide-0.png") // => true
});

})
app.post('/change-pdf', function(req, res) {
	var random_num = Math.random();
	var book_id = req.body.book_id;
	var shot4 = req.files.pdf;
	var domain = 'http://' + req.get('host');

	sql.select('notes', 'id', book_id, function(book) {
		let full_dir = book[0].link;
		let name_array = full_dir.split('/');
		let new_dir = name_array[3] + '/' + name_array[4];
		console.log(new_dir);
		if (fs.unlinkSync(new_dir) == null) {
			shot4.mv('books/' + random_num + 7 + '.jpg', function(err) {

			});
			sql.update(
				'notes',
				'link',
				domain + '/books/' + random_num + 7 + '.jpg',
				'id',
				book_id,
				function(ress) {
					if (ress) {
						res.redirect('/edit-book-images?id=' + book_id);
					} else {
						res.send('some thing wrong plaese contact programmer');
					}
				}
			);
		}
	});
});



app.post('/change-university-image', function(req, res) {
	var random_num = Math.random();
	var book_id = req.body.book_id;
	var shot4 = req.files.image;
	var domain = 'http://' + req.get('host');

	sql.select('universities', 'id', book_id, function(book) {
		let full_dir = book[0].image;
		let name_array = full_dir.split('/');
		let new_dir = name_array[3] + '/' + name_array[4];
		if (fs.unlinkSync(new_dir) == null) {
			shot4.mv('images/' + random_num + 7 + '.jpg', function(err) {

			});
			sql.update(
				'universities',
				'image',
				domain + '/images/' + random_num + 7 + '.jpg',
				'id',
				book_id,
				function(ress) {
					if (ress) {
						res.redirect('/edit-university-images?id=' + book_id);
					} else {
						res.send('some thing wrong plaese contact programmer');
					}
				}
			);
		}
	});
});

app.post('/change-image', function(req, res) {
	var random_num = Math.random();
	var book_id = req.body.book_id;
	var shot4 = req.files.image;
	var domain = 'http://' + req.get('host');

	sql.select('notes', 'id', book_id, function(book) {
		let full_dir = book[0].image;
		let name_array = full_dir.split('/');
		let new_dir = name_array[3] + '/' + name_array[4];
		if (fs.unlinkSync(new_dir) == null) {
			shot4.mv('images/' + random_num + 7 + '.jpg', function(err) {

			});
			sql.update(
				'notes',
				'image',
				domain + '/images/' + random_num + 7 + '.jpg',
				'id',
				book_id,
				function(ress) {
					if (ress) {
						res.redirect('/edit-book-images?id=' + book_id);
					} else {
						res.send('some thing wrong plaese contact programmer');
					}
				}
			);
		}
	});
});








app.get('/delete-user', function(req, res) {
	var user_id = req.param('id');
	sql.delete('users', 'id', user_id, function(data) {
		if (data) {
			res.redirect('/users');
		} else {
			res.send('please contact programmer if you got that error again');
		}
	});
});

app.get('/delete-video', function(req, res) {
	var user_id = req.param('id');
	sql.delete('videos', 'id', user_id, function(data) {
		if (data) {
			res.redirect('/videos');
		} else {
			res.send('please contact programmer if you got that error again');
		}
	});
});
app.get('/delete-book', function(req, res) {
	var book_id = req.param('id');
	sql.delete('notes', 'id', book_id, function(data) {
		if (data) {
			res.redirect('/books');
		} else {
			res.send('please contact programmer if you got that error again');
		}
	});
});

app.get('/pay-per-month', function(req, res) {
	var user_id = req.param('user_id');
	var months = req.param('months');
	full_admin.pay_per_month(user_id, months, function(data) {
		if (data) {
			res.redirect('/users');
		} else {
			res.send(
				'please contact programmer the error may be in database or package called moment.js or add-substract-date'
			);
		}
	});
});

app.get('/change', function(req, res) {
	var id = req.param('id');
	var what = req.param('what');
	var new_name = req.param('new_name');
	sql.update('users', what, new_name, 'id', id, function(data) {
		res.send(data);
	});
});

app.get('/change-book', function(req, res) {
	var id = req.param('id');
	var what = req.param('what');
	var new_name = req.param('new_name');
	sql.update('notes', what, new_name, 'id', id, function(data) {
		res.send(data);
	});
});

app.get('/change-university', function(req, res) {
	var id = req.param('id');
	var what = req.param('what');
	var new_name = req.param('new_name');
	sql.update('universities', what, new_name, 'id', id, function(data) {
		res.send(data);
	});
});




/* -------------------------------------- API ----------------------------------------- */
app.get('/api/users', function(req, res) {
	sql.select('users', 'work', '1', function(data) {
		if (data.length != 0) {
			var single = [];
			var result = [];
			for (let i in data) {
				var today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth(); //January is 0!
				var yyyy = today.getFullYear();
				var day = yyyy + '-' + mm + '-' + dd;
				if (moment(data[i].pay).isAfter(day)) {
					if (single.length == 1) {
						if (
							single.push({
								name: data[i].name,
								avatar_url: data[i].image,
								id: data[i].id,
								special: true
							})
						) {
							if (result.push(single)) {
								single = [];
							}
						}
					} else {
						single.push({
							name: data[i].name,
							avatar_url: data[i].image,
							id: data[i].id,
							special: true
						});
						if (i == data.length - 1) {
							result.push(single);
						}
					}
					if (i == data.length - 1) {
						//second loop

						var single1 = [];

						for (let m in data) {
							var today = new Date();
							var dd = today.getDate();
							var mm = today.getMonth(); //January is 0!
							var yyyy = today.getFullYear();
							var day = yyyy + '-' + mm + '-' + dd;
							if (moment(data[m].pay).isAfter(day) == false) {
								if (single1.length == 1) {
									if (
										single1.push({
											name: data[i].name,
											avatar_url: data[m].image,
											id: data[m].id,
											special: false
										})
									) {
										if (result.push(single1)) {
											single1 = [];
										}
									}
								} else {
									single1.push({
										name: data[m].name,
										avatar_url: data[m].image,
										id: data[m].id,
										special: false
									});

									if (m == data.length - 1) {
										result.push(single1);
									}
								}
							} // end if special
							if (m == data.length - 1) {
								res.send(result);
								console.log(result.length);
							}
						} // end for looop
					}
				} // end if special
			} // end for looop
		} else {
			//there is  data
			//there is no data
			res.send([[{ name: false }]]);
		}
	});
});

app.get('/api/fav', function(req, res) {
	var user_id = req.param('user_id');
	sql.select('likes', 'someone_id', user_id, function(data1) {
		if (data1.length != 0) {
			var single = [];
			var result = [];

			for (let i in data1) {
				console.log(i);
				sql.select('users', 'id', data1[i].liked_id, function(data) {
					if (single.length == 1) {
						if (
							single.push({
								name: data[0].name,
								avatar_url: data[0].image,
								id: data[0].id
							})
						) {
							if (result.push(single)) {
								single = [];
							}
						}
					} else {
						single.push({
							name: data[0].name,
							avatar_url: data[0].image,
							id: data[0].id
						});
						if (i == data1.length - 1) {
							result.push(single);
						}
					}
					if (i == data1.length - 1) {
						res.send(result);
					}
				});
			}
		} else {
			res.send([[{ name: false }]]);
		}
	});
});

//all people  have the same interest -------------->
app.get('/api/interest', function(req, res) {
	var group_id = req.param('group_id');
	sql.select('related_groups', 'group_id', group_id, function(data1) {
		if (data1.length != 0) {
			var single = [];
			var result = [];

			for (let i in data1) {
				console.log(i);
				sql.select('users', 'id', data1[i].user_id, function(data) {
					if (single.length == 1) {
						if (
							single.push({
								name: data[0].name,
								avatar_url: data[0].image,
								id: data[0].id
							})
						) {
							if (result.push(single)) {
								single = [];
							}
						}
					} else {
						single.push({
							name: data[0].name,
							avatar_url: data[0].image,
							id: data[0].id
						});
						if (i == data1.length - 1) {
							result.push(single);
						}
					}
					if (i == data1.length - 1) {
						res.send(result);
					}
				});
			}
		} else {
			res.send([[{ name: false }]]);
		}
	});
});

//all groups -------------->
app.get('/api/interestsscreen', function(req, res) {
	sql.select('groups', '1', '1', function(data1) {
		if (data1.length != 0) {
			var single = [];
			var result = [];

			for (let i in data1) {
				if (single.length == 1) {
					if (
						single.push({
							name: data1[i].name,
							avatar_url: data1[i].image,
							id: data1[i].id
						})
					) {
						if (result.push(single)) {
							single = [];
						}
					}
				} else {
					single.push({
						name: data1[i].name,
						avatar_url: data1[i].image,
						id: data1[i].id
					});
					if (i == data1.length - 1) {
						result.push(single);
					}
				}
				if (i == data1.length - 1) {
					res.send(result);
				}
			}
		} else {
			res.send([[{ name: false }]]);
		}
	});
});

//search screen -------------->
app.get('/api/search', function(req, res) {
	var name = req.param('name');
	sql.lselect('users', 'name', name, function(data1) {
		if (data1.length != 0) {
			var single = [];
			var result = [];

			for (let i in data1) {
				var today = new Date();

				var dd = today.getDate();
				var mm = today.getMonth(); //January is 0!
				var yyyy = today.getFullYear();
				var day = yyyy + '-' + mm + '-' + dd;
				if (moment(data1[i].pay).isAfter(day)) {
					var special = true;
				} else {
					var special = false;
				}
				if (single.length == 1) {
					if (
						single.push({
							name: data1[i].name,
							avatar_url: data1[i].image,
							id: data1[i].id,
							special: special
						})
					) {
						if (result.push(single)) {
							single = [];
						}
					}
				} else {
					single.push({
						name: data1[i].name,
						avatar_url: data1[i].image,
						id: data1[i].id,
						special: special
					});
					if (i == data1.length - 1) {
						result.push(single);
					}
				}
				if (i == data1.length - 1) {
					res.send(result);
				}
			}
		} else {
			res.send([[{ name: false }]]);
		}
	});
});

app.get('/api/unlike', function(req, res) {
	var someone_id = req.param('someone_id');
	var liked_id = req.param('liked_id');
	sql.ddelete('likes', 'someone_id', someone_id, 'liked_id', liked_id, function(
		data
	) {
		res.send({ status: data });
	});
});

app.get('/api/like', function(req, res) {
	var someone_id = req.param('someone_id');
	var liked_id = req.param('liked_id');
	con.query(
		'insert into likes(someone_id,liked_id) values(?,?)',
		[someone_id, liked_id],
		function(err, ress) {
			if (err) {
				res.send({ status: false });
			} else {
				res.send({ status: true });
			}
		}
	);
});

app.get('/api/user', function(req, res) {
	var user_id = req.param('user_id');
	sql.select('users', 'id', user_id, function(user) {
		sql.select('related_groups', 'user_id', user_id, function(groups) {
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth(); //January is 0!
			var yyyy = today.getFullYear();
			var day = yyyy + '-' + mm + '-' + dd;
			if (moment(user[0].pay).isAfter(day)) {
				var special = true;
			} else {
				var special = false;
			}
			group = [];
			for (let g in groups) {
				sql.select('groups', 'id', groups[g].group_id, function(group_data) {
					group.push(group_data[0]);
					if (g == groups.length - 1) {
						let data = {
							id: user[0].id,
							name: user[0].name,

							groups: group,
							special: special,
							avatar_url: user[0].image,
							age: user[0].age,
							country: user[0].country,
							bio: user[0].bio
						};
						res.send(data);
					}
				});
			}
		});
	});
});

app.get('/api/trend', function(req, res) {
	var user_id = req.param('someone_id');
	sql.select('users', '1', '1', function(user) {
		var data = [];
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth(); //January is 0!
		var yyyy = today.getFullYear();
		var day = yyyy + '-' + mm + '-' + dd;
		for (let c in user) {
			if (moment(user[c].pay).isAfter(day)) {
				var special = true;
				data.push({
					id: user[c].id,
					name: user[c].name,
					avatar_url: user[c].image,
					special: special
				});
			} else {
				var special = false;
			}
			if (c == user.length - 1) {
				res.send(data);
			}
		}
	});
});

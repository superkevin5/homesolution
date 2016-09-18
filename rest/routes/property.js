var express = require('express');
var router = express.Router();
var Property = require('../model/property');


router.use(function(req, res, next) {
  console.log('I am contacting property',req.method, req.url);
  next();
});


///* GET home page. */
//router.get('/', function(req, res, next) {
//  //res.render('edevice', { title: 'Express' });
//  var edevicerepairers = [];
//
//
//
//  for(var i=0;i<10;i++) {
//    edevicerepairers.push(new edevice({'name': 'a'+i, 'address': 'ssssssssss'}));
//  }
//
//
//  //res.json(400, {
//  //  error: 1,
//  //  msg: "some error"
//  //});
//
//  res.json(edevicerepairers);
//
//  //res.send(h.toJSON());
//});



//var propertySchema = new Schema({
//  propertyId: { type: String, default: '' },
//  DetailUrl: { type: String, default: '' },
//  streetAddress: { type: String, default: '' },
//  addressLocation: { type: String, default: '' },
//  addressionRegion: { type: String, default: '' },
//  postalCode: { type: String, default: '' },
//  pageVisit: { type: Number, default: '' }
//});

router.post('/save', function(req, res) {

  var property = Property({
    propertyId: '1',
    DetailUrl: '2',
    streetAddress: '3',
    addressLocation: '3',
    addressionRegion:'5',
    postalCode:'1',
    pageVisit:11
  });

  property.save(function(err) {
    if (err) throw err;

    console.log('User created!');
  });

  var user_id = req.body.id;
  console.log(req.body.id);
  var token = req.body.token;
  var geo = req.body.geo;

  res.send(user_id + ' ' + token + ' ' + geo);
});



module.exports = router;

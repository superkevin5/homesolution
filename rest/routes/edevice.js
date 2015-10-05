var express = require('express');
var router = express.Router();
var edevice = require('../model/edevice');


router.use(function(req, res, next) {
  console.log('I am contacting edevices',req.method, req.url);
  next();
});


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('edevice', { title: 'Express' });
  var edevicerepairers = [];



  for(var i=0;i<10;i++) {
    edevicerepairers.push(new edevice({'name': 'a'+i, 'address': 'ssssssssss'}));
  }


  //res.json(400, {
  //  error: 1,
  //  msg: "some error"
  //});

  res.json(edevicerepairers);

  //res.send(h.toJSON());
});

module.exports = router;

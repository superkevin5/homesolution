/** edevices.js **/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/**
 * edevice Schema
 */

var edeviceSchema = new Schema({
  name: { type: String, default: '' },
  address: { type: String, default: '' },
  suburb: { type: String, default: '' },
  postcode: { type: String, default: '' },
  email: { type: String, default: '' },
  phonenumber: { type: String, default: '' },
  imgurl: { type: String, default: '' },
  comments:[{ body: String, date: Date }]
});


edeviceSchema.set('toJSON', { getters: true, virtuals: false });

edeviceSchema.methods.findAllManufacturers = function(){
  console.log('find all manufacturers ... ... ...');
};


edeviceSchema.virtual('nameAddress').get(function(){
  return this.name +' ' + this.address;
});

edeviceSchema.virtual('nameandaddress').set(function(){
  return this.name +'+++' + this.address;
});

var edevice = mongoose.model('edevice', edeviceSchema);

module.exports = edevice;
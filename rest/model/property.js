/** edevices.js **/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * property Schema
 *
 * String
 Number
 Date
 Buffer
 Boolean
 Mixed
 ObjectId
 Array

 */

var propertySchema = new Schema({
  propertyId: { type: String, default: '' },
  DetailUrl: { type: String, default: '' },
  streetAddress: { type: String, default: '' },
  addressLocation: { type: String, default: '' },
  addressionRegion: { type: String, default: '' },
  postalCode: { type: String, default: '' },
  pageVisit: { type: Number, default: 0 },
  newProperty: { type: Boolean, default: false },
  lastUpdate: {type: Date}
});



var property = mongoose.model('property', propertySchema);

module.exports = property;
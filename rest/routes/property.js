var express = require('express');
var router = express.Router();
var util = require('util');
var Property = require('../model/property');

router.use(function (req, res, next) {
    console.log('I am contacting property', req.method, req.url);
    next();
});

//
//this.propertyId = propertyId,
//    this.DetailUrl = DetailUrl,
//    this.streetAddress = streetAddress,
//    this.addressLocation = addressLocation,
//    this.addressionRegion = addressionRegion,
//    this.postalCode = postalCode,
//    this.pageVisit = pageVisit,
//    this.isNew = isNew;


router.get('/:propertyId', function(req, res) {
    var pId = req.params.propertyId;

    Property.find({propertyId: pId}, function (err, existingProperty) {
        if (err) throw err;


        if(!existingProperty || existingProperty.length===0) {
            res.statusCode = 400;
            res.send({ error: 'not found' });
        } else {
            res.statusCode = 200;
            res.json(existingProperty);
        }

    });
});


router.post('/save', function (req, res) {
    var propertyId = '', DetailUrl = '', streetAddress = '', addressLocation = '', addressionRegion = '', postalCode = '', pageVisit = 0, newProperty = false;
    if (req.body.propertyId) {
        propertyId = req.body.propertyId;
    }
    if (req.body.DetailUrl) {
        DetailUrl = req.body.DetailUrl;
    }
    if (req.body.streetAddress) {
        streetAddress = req.body.streetAddress;
    }
    if (req.body.addressLocation) {
        addressLocation = req.body.addressLocation;
    }
    if (req.body.addressionRegion) {
        addressionRegion = req.body.addressionRegion;
    }
    if (req.body.postalCode) {
        postalCode = req.body.postalCode;
    }
    if (req.body.pageVisit) {
        pageVisit = req.body.pageVisit;
    }

    if (req.body.newProperty) {
        newProperty = req.body.newProperty;
    }




    Property.find({propertyId: req.body.propertyId}, function (err, existingProperty) {
        if (err) throw err;

        if (existingProperty.length === 0) {

            var propertyToSave = Property({
                propertyId: new String(propertyId),
                DetailUrl: new String(DetailUrl),
                streetAddress: new String(streetAddress),
                addressLocation: new String(addressLocation),
                addressionRegion: new String(addressionRegion),
                postalCode: new String(postalCode),
                pageVisit: parseInt(new String(pageVisit)),
                newProperty: new Boolean(newProperty),
                lastUpdate : new Date()
            });

            //console.log(util.inspect(propertyToSave));

            propertyToSave.save(function (err) {
                if (err) {
                    console.log(err);
                    throw err
                };
                console.log('Property ' + propertyToSave.propertyId + ' created!');
            });

        } else if(existingProperty.length === 1) {
            existingProperty[0].propertyId = req.body.propertyId;
            existingProperty[0].DetailUrl = req.body.DetailUrl;
            existingProperty[0].streetAddress = req.body.streetAddress;
            existingProperty[0].addressLocation = req.body.addressLocation;
            existingProperty[0].addressionRegion = req.body.addressionRegion;
            existingProperty[0].postalCode = req.body.postalCode;
            existingProperty[0].pageVisit = req.body.pageVisit;
            existingProperty[0].new = req.body.isNew;
            existingProperty[0].lastUpdate = new Date();

            existingProperty[0].save(function (err) {
                if (err) throw err;

                console.log('Property ' + existingProperty[0].propertyId + ' successfully updated!');
            });


        } else {
            throw new Error("More than one property with id " + req.body.propertyId);
        }
    });


    res.send({});
});


module.exports = router;

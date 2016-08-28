var links = [];
var util = require('util');
var casper = require('casper').create({
    verbose: false,
    logLevel: "debug",
    pageSettings: {
        loadImages: false,
// The WebPage instance used by Casper will
        loadPlugins: false
    }
});

////
//casper.start('https://www.google.com.au/#gfe_rd=cr');
////
//casper.thenOpen('https://www.google.com.au');
////
////
////casper.thenOpen('http://foo.bar/3');
//
//
////casper.back();
//
//casper.run(function(){
//    console.log('ssss');
//    console.log(this.getCurrentUrl());
//});

casper.start();
casper.then(function() {
// This step will be executed
});
casper.then(function() {
    this.bypass(2);
});
casper.then(function() {
// This test won't be executed
});
casper.then(function() {
// Nor this one
});
casper.run();
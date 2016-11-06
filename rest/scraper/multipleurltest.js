/**
 * Created by kevinhu on 16/08/16.
 */
var casper = require('casper').create();








casper.start();


casper.then(function(){
    var urlArray = [];

    for(var i = 0;i<1000;i++) {

        if( i %2 ===0){
            urlArray.push('http://www.realestate.com.au/property-apartment-nsw-waterloo-123769986');
        } else {
            urlArray.push('http://www.realestate.com.au/property-apartment-nsw-waterloo-123185322');
        }
    }

    queryPropertyDetail(urlArray);
});

function queryPropertyDetail(propertyDetailsLinks) {
    propertyDetailsLinks.forEach(function(d){
        casper.thenOpen(d).then(function () {
            casper.echo('clicked ok, new location is '+'---' + this.getCurrentUrl(), 'INFO');
        });
    });
}


casper.run();
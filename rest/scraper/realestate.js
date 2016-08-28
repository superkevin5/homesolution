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


casper.start('https://www.realestate.com.au/buy', function () {
    //document.querySelector('#where').value = "2017";

    //document.getElementById('where').value = '2017';
    //console.log('522');
    //console.log(document.querySelector('#where'));
    this.echo('Page title is: ' + this.evaluate(function () {
            return document.title;
        }), 'INFO');

    ////this.fillSelectors('.search-form', {
    ////    'input[name="where"]': '2017',
    ////    'input[name="propertyType"]': 'unit apartment',
    ////    'input[name="numBeds"]': '2',
    ////    'input[name="maxBeds"]': '2',
    ////    'input[name="maxPrice"]': '1000000'
    ////}, true);
    //console.log('522');
    //
    //this.echo('Page title is: ' + this.evaluate(function () {
    //        console.log('1');
    //    }), 'INFO');
    //
    //
    //this.evaluate(function() {
    //    console.log('1');
    //    //console.log(document.querySelector('input[name="where"]'));
    //    console.log('5');
    //});

    //http://www.realestate.com.au/pdpvisits.ds?id=123417170&theme=rea.buy
});


casper.thenEvaluate(function (term) {
    document.getElementById("where").value = '2017';
    document.getElementById("rui-property-type-select-id").value = "unit apartment";
    document.getElementById("rui-min-beds-select-id").value = 2;
    document.getElementById("rui-max-beds-select-id").value = 2;


    document.querySelector(".rui-search-button").click();
}, 'Caspser');


casper.waitForUrl(/.*2017.*/, function () {
    this.echo('clicked ok, new location is ' + this.getCurrentUrl(), 'INFO');



    var links = this.evaluate(function(){
        return getLinks();
    });

    console.log(links);
});

casper.on('url.changed', function (url) {
    casper.echo('url change');
});

casper.run(function () {
    this.echo('Done.').exit();
});


function getLinks(className) {
    var links = document.querySelectorAll('.detailsButton');
    console.log('a');
    console.log(links);
    console.log(links.length);
    return Array.prototype.map.call(links, function (e) {
        return e.getAttribute('href')
    });
}

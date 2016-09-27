var propertyDetailsLinks = [];
var propertyMap = {};
var currentPage = 0;
var localServer_address = 'http://localhost:9001/homesolution/';
var util = require('util');

var Property = (function () {
    function Property(propertyId, DetailUrl, streetAddress, addressLocation, addressionRegion, postalCode, pageVisit, isNew) {
        this.propertyId = propertyId,
            this.DetailUrl = DetailUrl,
            this.streetAddress = streetAddress,
            this.addressLocation = addressLocation,
            this.addressionRegion = addressionRegion,
            this.postalCode = postalCode,
            this.pageVisit = pageVisit,
            this.isNew = isNew;
    }

    return Property;
})();


function getLinks(item) {
    var links = document.querySelectorAll(item);
    return Array.prototype.map.call(links, function (e) {
        return e.getAttribute('href')
    });
};


function printLinks(detailsLinks, IDlinks) {
    for (var i = 0; i < detailsLinks.length; i++) {
        console.log(detailsLinks[i], '  ', IDlinks[i], '\n');
    }
};

function getInnerHtmlBySelector(selector) {
    return document.querySelector(selector).innerHTML.trim();
};

function clearPropertyDetailsLinks(propertyDetailsLinks) {
    propertyDetailsLinks = [];
};

function goToPage(currentPage) {
    return casper.thenOpen('http://www.realestate.com.au/buy/in-2017/list-' + (currentPage));
};

function init() {
    return require('casper').create({
        verbose: false,
        logLevel: "debug",
        pageSettings: {
            loadImages: false,
// The WebPage instance used by Casper will
            loadPlugins: false
        }
    }).userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');

};


function saveIntoDB(property) {
    casper.echo('Send property ' + property.propertyId + ' into Data into DB', 'INFO');
    casper.open(localServer_address + 'property/save', {
        method: 'post',
        data: property,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    });
}

function run() {
    casper.echo('Current page is ' + casper.getCurrentUrl(), 'INFO');

    var isNoMatchExist = casper.evaluate(getInnerHtmlBySelector, '.noMatch');

    if (isNoMatchExist) {
        casper.echo('No more to crawl Done.').exit();
    }

    propertyDetailsLinks = casper.evaluate(getLinks, '.detailsButton');
    var IDlinks = Array.prototype.map.call(propertyDetailsLinks, function (e) {
        return e.trim().replace(/\?.*/g, '').match(/\d+$/g);
    });
    //printLinks(propertyDetailsLinks, IDlinks);
    queryPropertyDetail(propertyDetailsLinks);
    clearPropertyDetailsLinks(propertyDetailsLinks);
    goToPage(++currentPage).then(function (data) {
        run();
    });
};

function queryPropertyDetail(propertyDetailsLinks) {
    var i = -1;
    casper.each(propertyDetailsLinks, function () {
        i++; // change the link being opened (has to be here specifically)
        var pId = propertyDetailsLinks[i].trim().replace(/\?.*/g, '').match(/\d+$/g);
        console.log(propertyDetailsLinks[i]);
        casper.thenOpen('http://www.realestate.com.au' + propertyDetailsLinks[i]).then(function () {

            var detailUrl = propertyDetailsLinks[i];
            var streetAddress = this.evaluate(getInnerHtmlBySelector, 'span[itemprop="streetAddress"]');
            var addressLocality = this.evaluate(getInnerHtmlBySelector, 'span[itemprop="addressLocality"]');
            var addressRegion = this.evaluate(getInnerHtmlBySelector, 'span[itemprop="addressRegion"]');
            var postalCode = this.evaluate(getInnerHtmlBySelector, 'span[itemprop="postalCode"]');
            var newIcon = this.evaluate(function (selector) {
                return document.querySelector(selector);
            }, '.newIcon');

            var isNew = false;
            if (newIcon != null && newIcon != undefined) {
                isNew = true;
            }
            var p = new Property(pId, detailUrl, streetAddress, addressLocality, addressRegion, postalCode, 0, isNew);
            propertyMap[pId] = p;


            console.log(detailUrl);
            console.log(streetAddress);
            console.log(addressLocality);
            console.log(addressRegion);
            console.log(postalCode);
            console.log(newIcon);

        }).thenOpen('http://www.realestate.com.au/pdpvisits.ds?id=' + pId).then(function () {
            var pageVisitsCount = this.evaluate(getInnerHtmlBySelector, '.page-visits-count');
            propertyMap[pId].pageVisit = pageVisitsCount;
            console.log(util.inspect(propertyMap[pId]));
            saveIntoDB(propertyMap[pId]);
            casper.echo('property ' + pId + ' stored into map', 'INFO');
        });
    });
};

var casper = init();

casper.start('https://www.realestate.com.au/buy', function () {
    casper.echo('Page title is: ' + this.evaluate(function () {
            return document.title;
        }), 'INFO');
}).thenEvaluate(function (term) {
    document.getElementById("where").value = '2017';
    document.getElementById("rui-property-type-select-id").value = "unit apartment";
    document.getElementById("rui-min-beds-select-id").value = 2;
    document.getElementById("rui-max-beds-select-id").value = 2;
    document.querySelector(".rui-search-button").click();
}, 'Caspser').waitForUrl(/.*2017.*/, function () {
    casper.echo('clicked ok, new location is ' + this.getCurrentUrl(), 'INFO');
    var currentUrl = this.getCurrentUrl();
    var match = currentUrl.match(/.*list-(\d+).*/);
    currentPage = match[1];
    //currentPage = 1000;
});


casper.then(function () {
    run();
});


//http://www.realestate.com.au/property-apartment-nsw-waterloo-123369930

//http://www.realestate.com.au/buy/in-2017/list-1?activeSort=price-asc
//page visit example
//http://www.realestate.com.au/pdpvisits.ds?id=121801722
//http://www.realestate.com.au/buy/in-2017/list-1

casper.on('remote.message', function (msg) {
    //this.echo('remote message caught: ' + msg);
});

casper.on('url.changed', function (url) {
    casper.echo('url change');
});

casper.run(function () {
    this.echo('Done.').exit();
});


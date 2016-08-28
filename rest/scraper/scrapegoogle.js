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


function getLinks() {
    var links = document.querySelectorAll('h3.r a');
    return Array.prototype.map.call(links, function (e) {
        return e.getAttribute('href');
    });
}

casper.start('http://www.google.com.au/', function () {
// search for 'casperjs' from google form
    if (this.exists('h1.page-title')) {
        this.echo('the heading exists');
    }
    this.fill('form[action="/search"]', {q: 'casperjs'}, true);
});


casper.then(function (d) {
    //console.log(util.inspect(d, {showHidden: true, depth: 10}));
    links = this.evaluate(getLinks);
    this.fill('form[action="/search"]', {q: 'phantomjs'}, true);
});

casper.then(function () {
    links = links.concat(this.evaluate(getLinks));
});

casper.run(function () {
     this.echo(links.length + ' links found:');
    //this.echo('-' + links.join('\n - ')).exit();
});

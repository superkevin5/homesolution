/**
 * Created by kevinhu on 16/08/16.
 */
var casper = require('casper').create();
casper.start('http://www.domain.com.au/sale/zetland-nsw-2017/?bedrooms=2&bathrooms=2', function () {
    this.echo(this.getTitle());
});


casper.run();
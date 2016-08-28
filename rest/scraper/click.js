var casper = require('casper').create({
    verbose: false,
    logLevel: "debug",
    pageSettings: {
        loadImages: false,
// The WebPage instance used by Casper will
        loadPlugins: false
    }
});


//casper.start('http://www.google.fr/', function() {
//    this.clear(); // javascript execution in this page has been stopped
//});

//casper.start('http://www.google.fr/', function() {
//    this.debugPage();
//});
//casper.run();

//Exits phantom with a logged error message and an optional exit status code:
//casper.start('http://www.google.fr/', function() {
//    this.die("Fail.", 1);
//});
//casper.run();

////});
//
//casper.run(function () {
//    this.echo('---------');
//});
//
//casper.start('http://google.com', function() {
//// selector capture
//    console.log(this.captureBase64('png', '#lga'));
//// clipRect capture
//    console.log(this.captureBase64('png', {
//        top: 0,
//        left: 0,
//        width: 320,
//        height: 200
//    }));
//// whole page capture
//    console.log(this.captureBase64('png'));
//});
//casper.run();



//casper.start('http://www.google.fr/', function() {
//    this.capture('google.png', {
//        top: 100,
//        left: 100,
//        width: 500,
//        height: 400
//    });
//});
//
//casper.thenOpen('https://www.google.com.au');
//casper.then(function() {
//    this.capture('foo', undefined, {
//        format: 'jpg',
//        quality: 75
//    });
//});
//casper.run();

//
//casper.start('http://www.google.com.au/', function () {
//// search for 'casperjs' from google form
//    if (this.exists('h1.page-title')) {
//        this.echo('the heading exists');
//    }
//    console.log('ss');
//    this.fill('form[action="/search"]', {q: 'casperjs'}, true);
//});
//
//casper.then(function() {
//    console.log('1');
//// Click on 1st result link
//    this.click('h3.r a',10,10);
//});
//
//casper.then(function() {
//    console.log('clicked ok, new location is ' + this.getCurrentUrl());
//});
//
////// <a href="...">My link is beautiful</a>
////casper.then(function() {
////    this.clickLabel('My link is beautiful', 'a');
////});
////// <button type="submit">But my button is sexier</button>
////casper.then(function() {
////    this.clickLabel('But my button is sexier', 'button');
////});
//c
//casper.run(function () {
//    this.echo('---------');
//});

//downlaod
//casper.start('http://www.google.fr/', function() {
//    var url = 'http://www.google.fr/intl/fr/about/corporate/company/';
//    this.download(url, 'google_company.html');
//});
//casper.run(function() {
//    this.echo('Done.').exit();
//});

//var links = [
//    'http://google.com/',
//    'http://yahoo.com/',
//    'http://bing.com/'
//];
//casper.start().each(links, function(self, link) {
//    self.thenOpen(link, function() {
//        this.echo(this.getTitle());
//    });
//});
//casper.run();

//var casper = require('casper').create();
//var urls = ['http://google.com/', 'http://yahoo.com/'];
//casper.start().eachThen(urls, function(response) {
//    this.thenOpen(response.data, function(response) {
//        console.log('Opened', response.url);
//    });
//});
//casper.run();

//casper.start('http://www.google.fr/', function() {
//    this.echo('Page title is: ' + this.evaluate(function() {
//            return document.title;
//        }), 'INFO'); // Will be printed in green on the console
//});
//
//casper.run();

//evaluate()
//casper.evaluate(function(username, password) {
//    document.querySelector('#username').value = username;
//    document.querySelector('#password').value = password;
//    document.querySelector('#submit').click();
//}, 'sheldon.cooper', 'b4z1ng4');


//casper.start('http://www.google.fr/', function() {
//    this.evaluateOrDie(function() {
//        return /logged in222/.match(document.title);
//    }, 'not authenticated');
//});
//casper.run();
//casper.start('http://foo.bar/home', function() {
//    if (this.exists('#my_super_id')) {
//        this.echo('found #my_super_id', 'INFO');
//    } else {
//        this.echo('#my_super_id not found', 'ERROR');
//    }
//});
//casper.run();
//
//casper.start('http://www.google.fr/', function() {
//    this.echo('Page title is: ' + this.evaluate(function() {
//            return document.title;
//        }), 'INFO'); // Will be printed in green on the console
//});
//
////casper.run();
//
//casper.start('http://google.com/search?q=foo', function() {
//    this.echo(this.fetchText('h3'));
//}).run();
//
//casper.start('http://www.google.fr/', function() {
//    this.log("I'm logging an error", "error");
//});
//casper.run();
//
//casper.start('http://some.tld/contact.form', function() {
//    this.fill('form#contact-form', {
//        'subject':
//            'I am watching you',
//        'content':
//            'So be careful.',
//        'civility':
//            'Mr',
//        'name':
//            'Chuck Norris',
//        'email':
//            'chuck@norris.com',
//        'cc':
//            true,
//        'attachment': '/Users/chuck/roundhousekick.doc'
//    }, true);

//casper.start('http://google.fr/', function() {
//    require('utils').dump(this.getElementInfo('#hplogo'));
//});

//casper.start('http://www.google.fr/', function() {
//    this.echo(this.getHTML());
//});
//casper.run();

//var casper = require('casper').create();
//casper.start().then(function() {
//    this.open('http://search.twitter.com/search.json?q=casperjs', {
//        method: 'get',
//        headers: {
//            'Accept': 'application/json'
//        }
//    });

//casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');

//casper.start('http://google.com/', function() {
//    if (this.visible('#hplogo')) {
//        this.echo("I can see the logo");
//    } else {
//        this.echo("I can't see the logo");
//    }
//});

//casper.start('http://yoursite.tld/', function() {
//    this.wait(1000, function() {
//        this.echo("I've waited for a second.");
//    });
//});
//casper.run();


//casper.start('http://google.fr/');
//casper.wait(1000, function() {
//    this.echo("I've waited for a second.");
//});
//casper.run();
//
//
//casper.start('http://google.fr/');
//casper.waitFor(function check() {
//    return this.evaluate(function() {
//        return document.querySelectorAll('ul.your-list li').length > 2;
//    });
//}, function then() {
//    this.captureSelector('yoursitelist.png', 'ul.your-list');
//});
//
//casper.run();


//casper.start('http://yoursite.tld/');
//casper.waitFor(function check() {
//    return this.evaluate(function() {
//        return document.querySelectorAll('ul.your-list li').length > 2;
//    });
//}, function then() {
//// step to execute when check() is ok
//    this.captureSelector('yoursitelist.png', 'ul.your-list');
//}, function timeout() { // step to execute if check has failed
//    this.echo("I can't haz my screenshot.").exit();
//});
//casper.run();

//casper.start('http://foo.bar/').then(function() {
//    this.test.assertTitle('Main page title');
//    this.clickLabel('Open me a popup');
//});
//// this will wait for the popup to be opened and loaded
//casper.waitForPopup(/popup\.html$/, function() {
//    this.test.assertEquals(this.popups.length, 1);
//});、

//casper.warn("I'm a warning message.");
//
//casper.start('http://why.univer.se/').waitForText("42", function() {
//    this.echo('Found the answer.');
//});
//casper.run();

//casper.start().repeat(3, function() {
//    this.echo("Badger");
//});
//casper.run();
//casper.run(function() {
//    this.echo('So the whole suite ended.');
//    this.exit(); // <--- don't forget me!
//});
//
//casper.then(function() {
//    this.sendKeys('form.contact input#name', 'Duke');
//    this.sendKeys('form.contact textarea#message', "Damn, I'm looking good.");
//    this.click('form.contact input[type="submit"]');
//});

//casper.start('http://foo.bar/');
//casper.thenBypassIf(function() {
//    return universe && universe.answer === 42;
//}, 2);
//casper.start('http://why.univer.se/').waitForText("42", function() {
//    this.echo('Found the answer.');
//});
//
//casper.start('http://www.google.com');
//casper.wait(10000, function() {
//    this.echo("I've waited for a second.");
//});
//casper.run();

//casper.start('http://yoursite.tld/');
//casper.waitFor(function check() {
//    return this.evaluate(function() {
//        return document.querySelectorAll('ul.your-list li').length > 2;
//    });
//}, function then() {
//// step to execute when check() is ok
//    this.captureSelector('yoursitelist.png', 'ul.your-list');
//}, function timeout() { // step to execute if check has failed
//    this.echo("I can't haz my screenshot.").exit();
//});
//casper.run();

////
casper.start('http://www.baidu.com/', function() {
    console.log(this.getTitle());
    //this.evaluate(function() {
    //    console.log('w');
    //    document.querySelector('#lst-ib').value = '2017';
    //    console.log('a');
    //});
    //
    //console.log( document.getElementById('lst-ib'));
    //console.log('222');
    //__utils__.setFieldValue('#lst-ib','11');
    //


});

//casper.evaluate(function() {
//    console.log('222');
//    __utils__.findOne('#lst-ib').setFieldValue('11');
//    console.log(__utils__.findOne('#lst-ib').getFieldValue());
//});

//casper.evaluate(function(username, password) {
//    console.log('222');
//        document.querySelector('#lst-ib').value = username;
//    }, 'sheldon.cooper', 'b4z1ng4');

//

//casper.waitFor(function check() {
//    return this.evaluate(function() {
//        return document.querySelectorAll('#lst-ib').length > 0;
//    });
//}, function then() {
//    this.sendKeys('input[id="lst-ib"]', 'ssss');
//    console.log(document.querySelector('#lst-ib').value);
//});
////
//casper.run();
//casper.then(function() {
//    console.log('sss');
//    //this.sendKeys('input[id="lst-ib"]', 'ssss');
//
//    console.log(document.querySelector('#lst-ib').value);
//});




casper.on('url.changed',function(url) {
    casper.echo('url change');
});



casper.thenEvaluate(function(term){

    document.getElementById("kw").value='KEVIN';
    document.getElementById("su").click();

},'Caspser');



//
//casper.wait(2000,function(){
//    console.log('aaaaaaa');
//    this.sendKeys('input[id="kw"]', 'ssss');
//
//    var r = this.evaluate(function() {
//        document.getElementById("kw").value='KEVIN';
//        return document.getElementById("kw").value;
//    });
//
//    this.evaluate(function() {
//        document.getElementById("su").click();
//    });
//    console.log('clicked ok, new location is ' + this.getCurrentUrl());
//});


casper.wait(2000,function() {
    console.log('clicked ok, new location is ' + this.getCurrentUrl());


});




//
//casper
//
//casper.then(function() {
//    this.sendKeys('input[id="kw"]', 'ssss');
//
//    this.evaluate(function() {
//        this.echo('Title is: ' + document.querySelector('#kw').value);
//
//    });
//});



casper.run();

function getLinks() {
    var links = document.querySelectorAll('.detailsButton');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href')
    });
}
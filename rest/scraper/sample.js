/**
 * Created by kevinhu on 16/08/16.
 */
var util = require('util');

var localServer_address = 'http://localhost:9001/homesolution/';

var casper = require('casper').create({

});


casper.start('http://localhost:9001/',function() {
    var data, wsurl = 'http://localhost:9001/homesolution/property/123247874';

    data = this.evaluate(function(wsurl) {
        return JSON.parse(__utils__.sendAJAX(wsurl, 'GET', null, false));
    }, {wsurl: wsurl});

    console.log(data[0].streetAddress);
});
casper.then(function() {



});




//casper.start();
//
//casper.thenOpen('http://localhost:9001/homesolution/property/123247874', {
//    method: 'get',
//    headers: {
//        'Content-Type': 'application/json',
//        'Accept': 'application/json'
//    }
//},function(response){
//
//
//    console.log(util.inspect(response));
//    console.log(this.status(false)['currentHTTPStatus']);
//
//});


casper.run();





//
//casper.then(function(){
//    console.log('s');
//
//
//    //$.get( 'http://localhost:9001/homesolution/property/123247874?propertyId=123247874', function( data ) {
//    //    alert( "Load was performed." );
//    //});
//
//
//
//    var fridgeCount = this.evaluate(function(){
//        // In here, the context of execution (global) is the same
//        // as if you were at the console for the loaded page
//        $.ajax({url:'http://localhost:9001/homesolution/property/123247874?propertyId=123247874',
//            async: false, //blocks window close
//
//            success: function(result){
//            //$("#div1").html(result);
//            return result;
//        }});
//
//return 'dd';
//    });
//
//
//
//    console.log(fridgeCount);
//
//
//});




//
//casper.open(localServer_address + 'property/'+123247874).then(function(a){
//
//    console.log(a.data);
//    console.log(util.inspect(a));
//
//});
//


//
//casper.then(function(){
//
//    //
//    //
//    //console.log('---------');
//    //$.ajax({
//    //    async: false,
//    //    url: localServer_address+'/property/123247874',
//    //    success:function(data){
//    //        console.log(data);
//    //        console.log('~~~~~~~~~~~~~~');
//    //
//    //    },
//    //    error:function(data){
//    //        console.log('It doesn’t work that way :');
//    //    }
//    //});
//
//    console.log('111111111111');
//    this.page.injectJs('./jquery.js');
//
//    var response = this.evaluate(function() {
//
//        var params = {"propertyId": "123247874"};
//        var foo = $.ajax({
//            type: "GET",
//            data: params,
//            url: localServer_address + '/property/123247874',
//            success: function (data) {
//                console.log(data);
//                return data;
//            },
//            error: function (xhr, status, error) {
//                return error;
//            }
//        });
//    });
//
//});
//
////
//
//
//casper.then(function(){
//
//
//    casper.waitForResource('http://localhost:9001/homesolution/property/123247874?propertyId=123247874', function(){
//        console.log("AJAX request returned: ");
//    }, function(){
//        console.log("AJAX request didn't return after wait period: ")
//    }, 100);
//
//
//
//});

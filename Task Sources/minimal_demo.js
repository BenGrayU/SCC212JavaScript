"use strict";

const testlib = require( './testlib.js' );

testlib.on( 'ready', function( patterns ) {
	console.log( "Patterns:", patterns );
	stuff = patterns;// make this array with 
	testlib.runTests();
} );

testlib.on( 'data', function( data ) {
	buffer.push(data);
} );

testlib.on('end', function(){
	console.log('reset:', buffer);
	buffer = [];
	console.log(stuff);
	testlib.frequencyTable(stuff);
});

testlib.on('reset', function(){ 
	buffer = [];
	
});

let stuff;
let buffer = [];
testlib.setup( 1 , 10); // Runs test 1 (task1.data and task1.seq)



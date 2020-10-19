const fs = require('fs');


// var access = fs.createWriteStream('/home/prateek/trial/myFileLog' + '/node.access.log', { flags: 'a' })
//     , error = fs.createWriteStream('/home/prateek/trial/myFileLog' + '/node.error.log', { flags: 'a' });
// process.stdout.pipe(access);
// process.stderr.pipe(error);


// var fs = require('fs');
// var util = require('util');
// var log_file = fs.createWriteStream('/home/prateek/trial/myFileLog' + '/debug.log', {flags : 'w'});
// var log_stdout = process.stdout;

// console.log = function(d) { //
//   log_file.write(util.format(d) + '\n');
//   log_stdout.write(util.format(d) + '\n');
// };

// setInterval(() => {
//     console.log('Prateek');
//     console.log('Gumasta');
//     console.log('MoreYeahs');
//     console.error('This is error log');
// }, 800)


// var os = require('os');
// var log = console.log;
// console.log = function () {
//     log.apply(console, arguments);
//     // Print the stack trace
//     console.trace();
//     var stack = new Error().stack;
//     // var str = stack.split(os.EOL);
//     console.log(stack)

// };


// // Somewhere else...
// function foo() {
//     console.log('Foobar');
// }
// foo();









// Object.defineProperty(global, '__stack', {
//     get: function () {
//         var orig = Error.prepareStackTrace;
//         Error.prepareStackTrace = function (_, stack) {
//             return stack;
//         };
//         var err = new Error;
//         Error.captureStackTrace(err, arguments.callee);
//         var stack = err.stack;
//         Error.prepareStackTrace = orig;
//         return stack;
//     }
// });

// Object.defineProperty(global, '__line', {
//     get: function () {
//         return __stack[1].getLineNumber();
//     }
// });

// Object.defineProperty(global, '__function', {
//     get: function () {
//         return __stack[1].getFunctionName();
//     }
// });

// function foo() {
//     console.log(__line);
//     console.log(__function);
// }

// foo()


// BEST ONE
var fs = require('fs');
var util = require('util');
var logFile = fs.createWriteStream('log.txt', { flags: 'a' });
  // Or 'w' to truncate the file every time the process starts.
var logStdout = process.stdout;

console.log = function () {
  logFile.write(util.format.apply(null, arguments) + '\n');
  logStdout.write(util.format.apply(null, arguments) + '\n');
}
console.error = console.log;
let count = 0;
setInterval(() => {
    count = count + 1;
    console.log(count);
    console.log('Prateek');
    console.log('Gumasta');
    console.log('MoreYeahs');
    console.error('This is error log');
    console.log();
}, 800)








// var fs = require('fs');

// var trueLog = console.log;
// console.log = function(msg) {
//     fs.appendFile("prateek.log", msg + '', function(err) {
//         if(err) {
//             return trueLog(err);
//         }
//     });
//     //trueLog(msg); //uncomment if you want logs
// }
// let count = 0;
// setInterval(() => {
//     count = count + 1;
//     console.log(count);
//     console.log('Prateek');
//     console.log('Gumasta');
//     console.log('MoreYeahs');
//     console.error('This is error log');
//     console.log();
// }, 800)



// const obj = {kraken, markets}

// const fs = require('fs');
// fs.writeFile("test1.txt", JSON.stringify(obj), function(err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// }); 


// fs.readFile('test2.txt', 'utf8', function(err, data) {
// 	const obj = JSON.parse(data)

// 	console.log("The data from the file is: " + obj)
// })



// var access = fs.createWriteStream('api.access.log');
// process.stdout.write = process.stderr.write = access.write.bind(access);

// let count = 0;
// setInterval(() => {
//     count = count + 1;
//     console.log(count);
//     console.log('Prateek');
//     console.log('Gumasta');
//     console.log('MoreYeahs');
//     console.error('This is error log');
//     console.log();
// }, 800)
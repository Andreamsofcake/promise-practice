var q = require('q');
var defer = q.defer();

setTimeout(function() {
  defer.resolve("RESOLVED!");
}, 300);

defer.promise.then(function(result) {
  console.log('IT FINALLY RESOLVED WITH %s', result.length);
});
  //defer.promise is the actual promise itself
  //defer.promise.then is the "Q" way of attaching a then handler
  //your solution here

// setTimeout(defer.resolve, 300, "ANDREA!");
// defer.promise.then(console.log);

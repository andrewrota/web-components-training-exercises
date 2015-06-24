console.log('hello world');
var arr = ['a', 'b', 'c'];
var logVal = function(letter) {
  document.querySelector('.navbar-header').innerHTML = letter;
};
setTimeout(function() {
  for(var i = 0; i < arr.length; i++) {
    logVal(arr[i]);
    console.log(i);
  }
}, 15000);
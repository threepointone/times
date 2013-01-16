
# times

  functional times

## Installation

    $ component install threepointone/times

## API
```js

var times = require('times');

// run a function n times
times(5, function(i){
	console.log('iteration', i+1)
});

// generate an array
var arr = times(10, function(i){
	return i*2;
});
console.log(arr);
// [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] 

// use as a .map replacement
var newArr = times(arr, function(i, el){
	console.log('arr[', i, '] =', el);
	return el*2;
});
console.log(newArr);
// [0, 4, 8, 12, 16, 20, 24, 28, 32, 36] 

// notbad.jpg

```

## Tests
install dependencies - 
```
npm install mocha -g
npm install should
```
then
```
npm test
```

## License

  MIT

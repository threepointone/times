
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

// use as a .map replacement
var newArr = times(arr, function(i, el){
	console.log('arr[', i, '] =', el);
	return el*2;
});
console.log(newArr);

// not bad.jpg
   
```

## License

  MIT

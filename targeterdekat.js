function targetTerdekat(arr) {
  // you can only write your code here!
  if (arr.indexOf('x') === -1) return 0;
  var indexO = arr.indexOf('o');
  var jarak = arr.length;

  for (var i = 0; i< jarak; i++ ){
  	if (arr[i] === 'x'){
  		var j = Math.abs(i-indexO);
  		if (j < jarak) {
  			jarak = j;
  		}
  	}
  }
  

  	
  return jarak;
  
}

// TEST CASES
console.log(targetTerdekat(['', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat(['', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
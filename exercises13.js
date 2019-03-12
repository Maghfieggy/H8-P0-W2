function xo(str) {
  // you can only write your code here!

var o = 0;
var x = 0;
  
for (var i = 0; i < str.length; i++) {
	if (str[i] == 'x') {
	x += 1;
     }
     if (str[i] == 'o') {
       o +=1 ;
     }
   }
if (o==x){
  return  'true';
} 
else {
  return  'false';
}
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
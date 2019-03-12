function balikKata(kata) {
  // you can only write your code here!

var a = '';
  for (var i = kata.length-1; i >= 0; i--) {
    a = a + kata[i];
  }
  
  return a;
}




// TEST CASES
console.log(balikKata('hello world'));
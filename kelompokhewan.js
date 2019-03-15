function groupAnimals(animals) {
  // you can only write your code here!
  
var urut = animals.sort();
var hasil = animals[0][0];
var a = [];
var b = [];

for (var i = 0; i < urut.length; i++ ){
	if (hasil === animals[i][0]){
		a.push(animals[i]);
	} else {
		b.push(a);
		a = [];
		hasil = animals[i][0];
		a.push(animals[i]);
	}
	if (i === animals.length-1) {
		b.push(a);
	}
}

return b;

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
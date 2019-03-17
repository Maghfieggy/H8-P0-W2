function groupAnimals(animals) {
  // you can only write your code here!
  

   var arr1 = [];
   var output1 = [];
   var output2 = [];
   var output3 = [];
   var output4 = [];
   var result1 = [];
   var j = animals.length;
   
   for (var i = 0; i<j ;i++) {

       if (output1.length == arr1.length || output1[0][0] == animals[i][0]){
           output1.push(animals[i]);
       }
       else if (output2.length == arr1.length || animals[i][0] == output2[0][0]){
           output2.push(animals[i]);
       }
       else if (output3.length == arr1.length || animals[i][0] == output3[0][0]){
           output3.push(animals[i]);
       }
       else if (output4.length == arr1.length || animals[i][0] == output4[0][0]){
           output4.push(animals[i]);
       }
 
   }
   result1.push(output2);
   result1.push(output1);
   result1.push(output3);
   if (output4.length >= 1){
   result1.push(output4);
   }
   return result1;
 }

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
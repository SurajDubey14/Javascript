let marvel=["Ironman","Thor","Spiderman","Black-Panther"];
let dc=["Bat-Man","Wonder-Woman"];

// marvel.push("Ant-Man");  -> Change occur in original Array  add element in last 

// marvel.pop();  -> change occur in original Array delete last element

// console.log(marvel.concat(dc)); -> return a new Array

// marvel.unshift("Ant-Man"); -> Change occur in original Array add element to start

// marvel.shift(); -> delete from start & return new array

// let a=marvel.slice(1,3);  -> return a new array(peice of array) slicing of an array from starting index to just one before the ending index;
// console.log(a);

// SPLICE
// change in original array add,remove delete replace

// marvel.splice(1,1,"Suraj"); replace thor and put suraj over there

// marvel.splice(1,2); start from thor and delete two element (thor and spiderman)

//  marvel.splice(1,0,"Suraj"); -> add element at location 1

// let a = marvel.splice(1);
// console.log(a);

// marvel.splice(1)
// console.log(marvel);
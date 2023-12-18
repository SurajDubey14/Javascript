// Before EJ6 we uses only var but in var we can update it or redeclared it again and again at the same time(with aspect of global variable);

// let we can update it but not redeclared it again and again; it work as local variable

// const we can neither update it or redeclared it again and again. It also work as a local variable.



// understanding let and const
let a = 10;
const pi = 3.14;

// updation
// a=20; we can update it in this sequence
// let a=20; it will create an error
// const pi=2.14; it will create an error

// Recdeclaration in a block
// {
//     let a=20 , const pi=32.1;it will not create an error similar to const
// }

var b = 20;
// var b=400; it will not create an error

// how to create an object as a variable

const product ={
    ProductName: "Pen" ,
    Price: 200,
    Rating : 5,
    offer : 5,
};
console.log(product);
console.log(product["ProductName"]); // console.log(product.ProductName)

product.ProductName = "Bread";
console.log(product["ProductName"]); 
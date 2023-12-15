// Alert --> used for pop up in window while your page is loading

// alert("Hello");

// Prompt   4way Question
let a=[];
for( var i=0;i<=2;i++){
    a[i]=prompt("Enter a number");
}
console.log(a.sort());


let b=[];
for( var i=0;i<=2;i++){
    b[i]=prompt("Enter a number");
}
console.log(b.sort());

let c=[];
for(let i=0;i<a.length;i++){
    c.push(a[i]);
}
for(let i=0;i<b.length;i++){
    c.push(b[i]);
}
c.sort();
console.log(c);
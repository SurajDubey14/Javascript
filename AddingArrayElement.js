function totalarr(arr=[]){
    let total=0;
    for(let i = 0; i< arr.length ; i++){
        total+=arr[i];
    }
    console.log(total);
};

let a= [10,30,10,50];
totalarr(a);
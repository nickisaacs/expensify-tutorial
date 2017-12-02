const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
        //reject('error man');
    },5000);
    

}); 

promise.then((data) => {
    console.log(data);
}).catch((error)=>{
    console.log(error);
});
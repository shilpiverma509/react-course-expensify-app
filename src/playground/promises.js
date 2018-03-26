const promise = new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve({name:"Shilpi"});
        reject('something went wrong');
     },5000);
    }); 


console.log('before');
//not a very good way
// promise.then((data)=>{
//         console.log('1',data);

// },(error)=>{
//     console.log("error: ",error);
// });

//explicit catch method
promise.then((data)=>{
        console.log('1',data);
        return 'some data';
}).then((str)=>{
    console.log("Does this run?",str);
}).catch((err)=>{
    console.log("error:",err);
});
 console.log('after');

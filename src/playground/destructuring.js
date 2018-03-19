//

//Object Destructuring

//

const person ={
    name:"Ahilpi",  
    age:29,
    location:{
        city:'Austin',
        temp:92
    }
}
const {name:firstName ="Anonymous",age,location:{city,temp:temperature}} = person;
console.log(`${firstName} is ${age}.She lives in ${city} and its ${temperature}`);

const book = {
    title:'Ego is a holiday',
    author:'Ryan Holiday',
    publisher:{
    }
};
const {publisher:{name:publisherName="self-publish"}} = book;
console.log(`${publisherName}`);



//

//Array Destructuring

//



//matching u by position in array
const address = ["12100 metric","Austin","texas","US"];
const [street="12100 metric",,state="NYC",]=address;
//taking up defaults value
console.log(`You are in ${street}.you are in ${state}`);

 const item = [,'$2.00','$2.50','$2.75'];

 const [itemName="hotCoffee",small,medium,large] = item
console.log(`A medium ${itemName} costs ${medium}`)
// const [hotCoffee, ,cost]=item;
// console.log(`A medium  ${hotCoffee} costs ${cost}`);












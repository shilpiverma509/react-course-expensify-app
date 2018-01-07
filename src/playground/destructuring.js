//

//Object Destructuring

//




// console.log('destructuring');

// const person = {
//      name:"Shilpi",
//      age:28,
//     location:{
//         city:"Austin",
//         temp:34
//     }
// }
// //ES6 destructuring with same variable names as property names
// const {name,age} = person;
// const {city,temp} = person.location;
// if(city && temp){
//     console.log(`${name} is ${age} and live in ${city} and its ${temp}`);
// }


// //to use your own variable names instead of same property names
// const {city:Location,temp:weather} = person.location;
// if(Location && weather){
//     console.log(`${name} is ${age} and live in ${Location} and its ${weather}`);
// }


// //set up default values
// if(city && temp){
//         console.log(`${name} is ${age} and live in ${city} and its ${temp}`);
//     }
    
// const{name:firstName='anonymous',age='anonymous'}=person;
// console.log(`${firstName}is around ${age} years old`);

// const book = {
//     title:'Ego is a holiday',
//     author:'Ryan Holiday',
//     publisher:{
//         name:'Penguin'
//     }
// };
// const {name:publisherName = anonymous} = book.publisher;
// console.log(`${publisherName}`);


//

//Array Destructuring

//
//matching u by position in array
//const address = ['12100 Metric Blvd','Austin','Texas','78758'];
//const [street,city,state,zip] = address;
//in case you don't want to destructure the first item
// const [, , state] = address;

// console.log(`You are in ${state}`);

//set up defaults
const address = [];

const [, , state="Phily"] = address;

console.log(`You are in ${state}`);

const item = ['coffee(hot)','$2.00','$2.50','$2.75'];
const [hotCoffee, ,cost]=item;
console.log(`A medium  ${hotCoffee} costs ${cost}`);












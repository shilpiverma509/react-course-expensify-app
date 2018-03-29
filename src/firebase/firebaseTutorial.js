import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDxHut_iY373x_6Z6Z4GroWGUa6oF2CLyQ",
    authDomain: "expensify-2-83529.firebaseapp.com",
    databaseURL: "https://expensify-2-83529.firebaseio.com",
    projectId: "expensify-2-83529",
    storageBucket: "",
    messagingSenderId: "73239760249"
  };
  firebase.initializeApp(config);
  const database = firebase.database();

  //child_removed
  database.ref('expenses').on('child_removed',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
  })

  //child_changed
  database.ref('expenses').on('child_changed',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
  })

  //child_added
  database.ref('expenses').on('child_added',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
  })


//key  
/* Subscribe to data changes from fireabase
  database.ref('expenses').on('value',(snapshot)=>{
    const expenses = [];
    snapshot.forEach(childSnapshot => {
      expenses.push({
        id:childSnapshot.key,
        ...childSnapshot.val()
      })
    });
    console.log(expenses);
  });
 
  */
    
  database.ref('expenses').push(
  {
    description:'Rent',
    note:'paid',
    amount:'12133',
    createdAt:0
  });
  

//when we work with arrays we use push to generate our object
//because it will automatically genertate a unique id for us
/* set a value 
  database.ref('notes').push({
  title:'todo',
  body:"go for a run"
});
*/
/* update a value  
  database.ref('notes/-L8h8IGv-jAeIXUbBI3L').update({
  body:'Buy Drink'
})
*/
/* remove anote  
  database.ref('notes/-L8h8IGv-jAeIXUbBI3L').remove();
*/

// const note = [{
//   id:'12',
//   body:'this is my note',
//   title:'First note'
// },
// {id:'12',
//   body:'this is my note',
//   title:'First note'}
// ];

// database.ref('notes').set(note);
//firebase doesn't support an array. This will be stored as an object
//at its indexes

//in firebase world the keys on this object will be the id's
/*const firebaseNotes = {
  notes:{
    //this id will be generated for us
    aswsdhsd:{
      body:'this is my note',
      title:'First note'
    },
    sdhsded:{
      body:'this is my note',
      title:'First note'
    }
  }
}
*/

//  database.ref('notes/-L8OhLKbemcXuOav8JIg').remove();

/* Working with lists in firebase 

  database.ref('notes').push({
    title:'Course Topics',
    body:'react.js'
  })

*/

//   const notes = [{
//     id:'12',
//     title:'First note',
//     body:'This is my note'
//   },
//   {
//     id:'238jd',
//     title:'Another note',
//     body:'This is my note'
// }];

// database.ref('notes').set(notes);
// database.ref('notes/12')




 /*
  const onValueChange = database.ref().on('value',(snapshot)=>{
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.location.city}`);
  })

  setTimeout(()=>{
    database.ref('location/city').set('Austin');
  },3500)
  
*/


  /*
  //fetching data from database to JS
  ///subscribe to changes made in database
  const onValueChange = database.ref().on('value',(snapshot)=>{
    console.log(snapshot.val());
  },(e)=>{
    console.log("error with data fetching",e);
  });

  /*
  we want to rerun the function on every database change.
  thus we are not using promises like below because promise
  can only be ever resolved or rejected for a single value
  thus we switched to call back pattern
  */

  //changing data

  /*

  setTimeout(()=>{
    database.ref('age').set(31);
  },3500)

  setTimeout(()=>{
    database.ref().off('value',onValueChange);
  },7000)
  
  setTimeout(()=>{
    database.ref('age').set(35);
  },10500)

  */

  //If you want to remove a particular subscription
 /*
 
 const onValueChange = (snapshot)=>{
    console.log(snapshot.val());
  };
  database.ref().on('value',onValueChange);
  setTimeout(()=>{
    database.ref().off(onValueChange)
  },7000);

  */

  //once() will not notify of any changes made to the database.

  /*read all of a data at a specific reference use value
  //once returns a promise
    database.ref('location/city').once('value')
      .then((snapshot)=>{
        const val=snapshot.val();
        console.log(val);
        //return the data we requested
      }).catch((err)=>{
        console.log("ftching error",err);
      })
*/


  // database.ref().set({
  //     name:"Shilpi Verma",
  //     stressLevel:6,
  //     age:26,
  //     job:{
  //       "title":"Software developer",
  //       "company":"Google"
  //     },
  //     isSingle: false,
  //     location:{
  //       city:"Austin",
  //       country:"us"
  //     } 
  // }).then(()=>{
  //   console.log('Data is saved');
  // }).catch((err)=>{
  //   console.log("This failed",err);
  // });

  // //database.ref().set('this is my data');
  // // database.ref().set({
  // //   age:29
  // // });
  // database.ref('age').set(29);
  // database.ref('location/city').set('NYC')
  // database.ref('attributes').set({
  //   height:5.4,
  //   weight:68
  // })
  // // database.ref('attributes/weight').set(57);
  // // console.log('I made a request to change the data');

  // database.ref('name').set('shilpi')
  // .then(()=>{
  //   console.log("name is set to Shilpi")
  // }).catch((err)=>{
  //   console.log("Failed ",err);
  // })

  // // database.ref('location/city').remove()
  // // .then(()=>{
  // //   console.log("remove succeeded")
  // // }).catch((err)=>{
  // //   console.log("remove failed",err);
  // // })

  // //database.ref('isSingle').set(null);

  // // database.ref().update({
  // //   job:"Manager",
  // //   'location/city':'Boston'
  // // })

  // database.ref().update({
  //   stressLevel:9,
  //   'job/company':'Amazon',
  //   'location/city':'Seattle'
  // }).then(()=>{
  //   console.log("Update complete")
  // }).catch((err)=>{
  //   console.log("err",err);
  // })


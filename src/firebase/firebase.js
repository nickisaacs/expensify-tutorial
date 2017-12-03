import * as firebase from 'firebase';

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);


const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {firebase,database as default,googleAuthProvider};

//   database.ref().set({
//     name: 'Nick Isaacs',
//     age:26,
//     isSingle: true,
//     location: {
//         city:'Bangalore',
//         country:'India'
//     }
//   }).then(()=>{
//     console.log('data is saved');
//   }).catch((e) => {
//     console.log('this failed',e);
//   });

//to remove

// database.ref('isSingle').remove().then(()=>{
//     console.log('removed');
// }).catch((e) =>{
//     console.log('error',e);
// });

//deleting using set, passing null in set is same as removing.

//updating

// database.ref().update({
//     name: 'Nick George Isaacs',
//     age: 24,
//     job:'software dev',
//     isSingle: null
// }).then(()=>{
//     console.log('update success');
// }).catch((e)=>{
//     console.log('update error');
// });

//to update location or a nested object

// database.ref().update({
//     name: 'Nick George Isaacs',
//    'location/city': 'boston'
// }).then(()=>{
//     console.log('update success');
// }).catch((e)=>{
//     console.log('update error');
// });


//fetching data once

// database.ref()
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e)=>{
//         console.log('error fetching data',e);
//     });

//fetching data whenever its updated

// const onValueChanged = database.ref()
//     .on('value',(snapshot)=>{
//         console.log(snapshot.val());
//     },(e)=>{
//         console.log('error fetching',e);
//     });

//to turn off the auto udpates    
//database.ref().off(onValueChanged);


//to use arrays 

// database.ref('notes').push({
//     title:'firt one',
//     body:'go for a run'
// });

// database.ref('notes/-L-HvZZ7jK4mHgX4bIs8').update({
//     body:'buy food'
// });


// database.ref('expenses').push({
//     description:'rent',
//     note:'this month rent',
//     amount:2500,
//     createdAt: 12
// });

// database.ref('expenses').push({
//     description:'internet',
//     note:'this month internet',
//     amount:1100,
//     createdAt: 90
// });


//retrieving array data

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value',(snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('child_removed',(snapshot) => {
//         console.log(snapshot.key,snapshot.val());
//     });

// database.ref('expenses')
//     .on('child_changed',(snapshot) => {
//         console.log(snapshot.key,snapshot.val());
//     });

// database.ref('expenses')
//     .on('child_added',(snapshot) => {
//         console.log(snapshot.key,snapshot.val());
//     });
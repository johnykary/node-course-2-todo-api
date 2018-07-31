// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{  
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

   db.collection('Todos').findOneAndUpdate({
       _id : new ObjectID('5b5db74a994a3ba22dbfca3b')
   },{
       $set:{
           complete: false
       }
   },{
       returnOriginal: false
   }).then((result)=>{
       console.log(result);
   })



    db.close();
});
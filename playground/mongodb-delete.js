// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{  
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });


    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // })


    //findOneAndDelete is best
    // db.collection('Todos').findOneAndDelete({complete: false}).then((result)=>{
    //     console.log(result);
    // })

    db.collection('Users').deleteMany({name: 'John'}).then((result)=>{
        console.log(result);
    })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b560b0683a33712b897952a')}).then((result)=>{
        console.log(result);
    })



    db.close();
});
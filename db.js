const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://piyush:Piyush$1234@cluster0.zetht5b.mongodb.net/carrental?retryWrites=true&w=majority' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose
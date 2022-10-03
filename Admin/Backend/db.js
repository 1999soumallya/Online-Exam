const mongoose = require('mongoose');

const connnectDB = () => {
    connnectionstring = "mongodb+srv://Soumallya:C6kaIYOW2aJvhJPP@cluster0.ai6xx.mongodb.net/onlineexam?retryWrites=true&w=majority"
    mongoose.connect(connnectionstring,{ useNewUrlParser: true})
    const db = mongoose.connection;
    db.on('error',(error) => console.error(`Error : ${error}`));
    db.once('open',() => console.log("MongoDb Connected.."));
}

module.exports = connnectDB

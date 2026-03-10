const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook"

// const connectToMongo = async() => {
//    mongoose.connect(mongoURI, () => {
//       console.log("Connected to  Mongo Successfully")
//    } )
// }

const connectToMongo = async() => {
    try{
        await mongoose.connect(mongoURI);
        console.log("Connected to  Mongo Successfully")
    }catch(error){
        console.error("Cloud not connect to Mongo: ", error);
    }
    
}

module.exports = connectToMongo
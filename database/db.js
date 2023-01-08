import mongoose from "mongoose";

export const Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-aprbd4g-shard-00-00.jngwhfk.mongodb.net:27017,ac-aprbd4g-shard-00-01.jngwhfk.mongodb.net:27017,ac-aprbd4g-shard-00-02.jngwhfk.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-nilbcv-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
            await mongoose.connect(URL,{useunifiedTopology:true,useNewUrlParser:true})
            console.log('Database connected successfully');
        }
    catch(error){
            console.log('Error while connecting with the database',error.message);
    }
}

export default Connection;
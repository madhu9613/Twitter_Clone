
import mongoose,{connect} from "mongoose";
import {DB_NAME} from "../constant.js"

const connectMongoDB=async ()=>{
    try{
        const connectioninstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
       console.log(`\n database connected !! DB_host:${connectioninstance.connection.host}`);

       
    }catch(error)

    {
        console.log("MONGODB connection error:",error);
        process.exit(1)
    }
}

export default connectMongoDB
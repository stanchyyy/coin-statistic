import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config({path: './config.env'})
const uri = process.env.ATLAS_URI || "";


const connectToDb = async ()=>{
    const client = new MongoClient(uri,{
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

try {
    await client.connect();
  return client.db("coinStatisticDB");
} catch(err){
    console.error(err);
}};

export default connectToDb;
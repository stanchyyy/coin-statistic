import  Express  from "express";
import connectToDb from "../db/connection.js";

const menuItems = Express.Router();

menuItems.get("/",async(req,res)=>{

    const db = await connectToDb();
    if (!db) {
        res.status(500).send('Failed to connect to database');
        return;
      }
    try {
        const collection = db.collection('menuItems');
        let result = await collection.find({}).toArray();
        res.send(result).status(200);
    } catch (err) {
        console.error('Error querying the collection', err);
        res.status(500).send('Error querying the collection');
      }
    });

export default menuItems;
import express from "express";
import cors from "cors";
import menuItems from "./routes/menuItems.js";
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
console.log("the port is : " + process.env.PORT);
const PORT = process.env.PORT || 3003;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/menuItems", menuItems);
app.listen(PORT, () => {
    console.log(`Listening to port ${[PORT]}`);
});

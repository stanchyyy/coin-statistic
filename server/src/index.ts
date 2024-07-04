import dotenv from 'dotenv';
import express, { Express, Request, Response } from "express";

dotenv.config();

const app:Express = express();
const port = process.env.PORT;
console.log(port);

app.get("/", (req: Request, res:Response)=>{
    res.send("baba gicka");
});

app.listen(port, ()=>{
    console.log(`[server]: Server is running at http://localhost:${port}`);
})

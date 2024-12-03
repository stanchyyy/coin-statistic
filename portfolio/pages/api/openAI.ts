import { timeStamp } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
import { APIPromise } from 'openai/core.mjs';

const openai = new OpenAI();

async function completion(userContent:string)  {
    return (
    await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: userContent,
            },
        ],
    })
)}




export default async function compleitonHandler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try{
    const data = req.body
    const gptResponse = await completion(data);
    
    res.status(200).json({ 
        sender:"Portfolio Chat",
        avatar:"PFC",
        message : gptResponse.choices[0].message.content,
        timestamp: new Date().toLocaleTimeString()
     });
} catch (err) {
    res.status(500).json({ error: 'failed to load data' })

}
  }
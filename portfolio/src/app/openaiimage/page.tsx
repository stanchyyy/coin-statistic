'use client'
import SingleFileUploader from "../components/singleFileUploader";
import {  Box, IconButton,  InputAdornment,  Paper,  TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useFormState } from "react-dom";
import ChatWindow from "../components/chatWindow";
import {  useState } from "react";


async function updateReceivedMessages(formDataMessage:string):Promise<IOpenAiMessage>{
  const response = await fetch('/api/openAI',{
    method:'POST',
    body:formDataMessage,
})
const data = await response.json();
const newReceiveMessage : IOpenAiMessage = data;
return newReceiveMessage;
}



export default function Page(){
  const [messagesSend, setMessagesSend]=useState<IOpenAiMessage[]>([]);
  const [messagesReceived, setMessagesReceived]=useState<IOpenAiMessage[]>([]);
  const [messageInput, setMessageInput] = useState<string>("");

  
  async function ChatCompletion(previousState : unknown, formData:FormData) {
  
    const formDataMessage = formData.get("message") as string;
      if(formDataMessage.trim()===""){
        return;
      }
      const newSendMessage:IOpenAiMessage = {
        sender:"",
        avatar:"U",
        message:formDataMessage,
        timestamp : new Date().toLocaleTimeString()
      };
  
      setMessagesSend((prevMessages)=>[...prevMessages,newSendMessage]);

      updateReceivedMessages(formDataMessage).then((value)=>{
          setMessagesReceived((prevMessages)=>[...prevMessages, value]);
        });
        setMessageInput("");
        
    };



  const [data, action, isPending] = useFormState (ChatCompletion, null)





    return( 
        <Box sx={{
            paddingBottom: '1vh'
        }} >
        <h1>Hello from openai image analyzer page. Please upload image or as a question.</h1>
        <ChatWindow send={messagesSend} received = {messagesReceived}/>
        <Paper
        action={action}
        component="form"
        elevation={2}
        sx={{
          marginTop:'3vh',
          marginBottom:'auto',

        }}
        style={{ display: 'flex', alignContent: 'flex-end',  width: '100%' }}
        >  
          <TextField
            name="message"
            placeholder="Type your message..."
            multiline
            fullWidth
            variant="outlined"
            value={messageInput} // Control the TextField value with state
            onChange={(e) => setMessageInput(e.target.value)}
            InputProps={{
              startAdornment:(
                <InputAdornment position="start">
                  <SingleFileUploader/>
              </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" >
                  <IconButton
                  disabled={isPending}
                  component='button'
                   type="submit"
                   >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            >
          </TextField>
        </Paper>
        </Box>
  )
}
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { spacing } from '@mui/system';


export default function ChatWindow( {received,send}:IChatWindowProps){

  function  combineMessages(sent:IOpenAiMessage[],received:IOpenAiMessage[]): OpenAiMessage[]{
    const result:OpenAiMessage[] = [];
    for( let i =0;i<send.length;i++){
        result.push(send[i]);
        if(received.length>i){
          result.push(received[i]);
        }
    }
    return result;
  }

  const combinedMessages=combineMessages(send,received);

    const ListItems = [];
    for(let i=0;i<combinedMessages.length;i++){
    ListItems.push(
        <>
        <ListItem  alignItems="flex-start" sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          textAlign: i%2===0 ? "end" : "start"
        }}>
        {i%2===0 ? (
                  <></>
                  )
                  :(
                    <ListItemAvatar>
                        <Avatar alt={combinedMessages[0].avatar} src={combinedMessages[0].sender}>
                      <HelpOutlineIcon/>
                    </Avatar>

                    </ListItemAvatar>

                  )}


        <ListItemText
          sx={{
            paddingRight: i%2===0 ? "2%" : "0"
          }}
          primary={combinedMessages[i].message}
          secondary={
            <React.Fragment>

              {combinedMessages[i].timestamp}
            </React.Fragment>
          }
        />

{i%2===0 ? (
                    <ListItemAvatar>
                    <Avatar alt={combinedMessages[0].avatar} src={combinedMessages[0].sender} />
                    </ListItemAvatar>
                  )
                  :(
                  <></>
                  )}



      </ListItem>
        <Divider variant="inset" component="li" />
        </>
    )
}
    return (
        <Box
        style={{
        overflow: 'hidden',
        display: 'flex',
        width: '100%',
        margin: 'auto', 
        marginTop:'1vh',
        border: '1px solid lightgray', 
        borderRadius: '8px', 
        padding: '16px', 
        flexDirection: 'column', 
        justifyContent: 'flex-end',
        height: '60vh'
     }}>
         <List sx={{ width: '100%', bgcolor: 'background.paper', flexGrow: 1 }}>
            {ListItems}
        </List>
        </Box>
    )

}


interface IOpenAiMessage{
    avatar : string;
    message:string;
    sender:string;
    timestamp:string;
}

class OpenAiMessage implements IOpenAiMessage{
    avatar : string;
    message:string;
    sender:string;
    timestamp:string;

    constructor(avatar:string,message:string,sender:string,timestamp:string){
        this.avatar=avatar;
        this.message=message;
        this.sender = sender;
        this.timestamp = timestamp;
    }
}

interface IChatWindowProps {
    received: IOpenAiMessage[];
    send:IOpenAiMessage[];
}
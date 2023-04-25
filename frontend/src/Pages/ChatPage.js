import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
                        const { data } = await axios.get("/api/chat");   // here we fech data from bacend and link in packeges in "proxy": "http://127.0.0.1:5000"
    // console.log(data);
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (<div>
          {chats.map((chat) => (
      <div key ={chat._id}>{chat.chatName}</div>
  ))}
      </div>
      )
};

export default ChatPage;

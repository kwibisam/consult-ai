"use client";
import React, { useState } from "react";
import Markdown from "react-markdown";

const ChatComponent = ({baseUrl}) => {
  const [chat, setChat] = useState("");
  const [history, setHistory] = useState([]);
  history: [
    {
      role: "user",
      parts: [{ text: "hello" }],
    },
    {
      role: "model",
      parts: [{ text: "Hello! 👋 How can I help you today?" }],
    },
  ];

  const handleChange = (e) => {
    setChat(e.target.value);
  };

  const handleSubmit = async () => {
    setChat("");
    setHistory((prev) => [
      ...prev,
      {
        role: "user",
        parts: [
          {
            text: chat,
          },
        ],
      },
    ]);

    const query = {
      message: chat,
      history: history,
    };
    try {
      console.log("the url",baseUrl)
      const response = await fetch(`${baseUrl}/api/chat`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const result = await response.json();
      setHistory((prev) => [
        ...prev,
        result,
      ]);
    } catch (error) {
      alert(error);
    }
  };

  const handleEnter = async (e) => {
    if(e.code === 'Enter') {
        handleSubmit()
    }
  }
  return (
    <div className="px-24 flex justify-center min-h-screen">
      <div className="flex flex-col justify-end w-[70%] mb-24 h-full">
        <div className="h-full p-6 bg-gray-50">
          {history.map((chat, indx) => (
            <div key={indx} className="mb-4">
              <div className="font-bold text-gray-500">{chat.role === "user" ? "You" : "Consult AI"}</div>

              <div>
                {chat.parts.map((part, i) => (
                  <div key={i}>
                    <Markdown>{part.text}</Markdown>
                  </div>
                ))}
              </div>
            </div>
          ))}


          {history.length === 0 && (
             <div className="flex flex-col items-center justify-end gap-4">
             <h2 className="text-2xl font-bold">Consult AI</h2>
             <p className="text-green-600 text-xl">Your daily AI business consultant!</p>
             {console.log("the base url",baseUrl)}
             <div className="flex justify-between gap-4 flex-wrap">
               {/* <div className="w-max bg-orange-400 p-4 rounded-md hover:cursor-pointer">
                 <p>How do I write an effective Executive summary</p>
               </div>
 
               <div className="w-max bg-orange-400 p-4 rounded-md hover:cursor-pointer">
                 <p>What are the key features of a business plan</p>
               </div>
 
               <div className="w-max bg-orange-400 p-4 rounded-md hover:cursor-pointer">
                 <p>What is a business Plan</p>
               </div> */}
             </div>
           </div>
          )}
         
        </div>
      </div>

      <div className="flex justify-center items-center py-4 px-24 fixed bottom-0 left-0 w-[100%]">
          <input
          placeholder="Ask anything about business"
            value={chat}
            onChange={handleChange}
            onKeyDown={(e) => handleEnter(e)}
            type="text"
            className="p-4 rounded-3xl border border-gray-600 w-[700px]"
          />
          <button onClick={handleSubmit} className="px-4 py-1 m-2 bg-green-400 rounded-full">
            send
          </button>
        </div>
    </div>
  );
};

export default ChatComponent;

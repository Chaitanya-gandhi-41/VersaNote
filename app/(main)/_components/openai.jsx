import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendMessage = async () => {
    setMessages([...messages, { type: "user", text: input }]);
    setInput("");

    try {
      const response = await axios.post("/api/openai", { input });
      const botResponse =
        response.data.choices[0]?.text || "No response from OpenAI.";
      setMessages([...messages, { type: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Error calling OpenAI API:", error.message);
      setMessages([
        ...messages,
        { type: "bot", text: "Sorry, something went wrong. Please try again." },
      ]);
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index} className={message.type}>
            {message.text}
          </div>
        ))}
      </div>
      <div>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;

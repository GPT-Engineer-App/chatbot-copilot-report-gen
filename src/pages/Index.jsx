import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: "user" };
      setMessages([...messages, newMessage]);
      setInput("");
      // Simulate chatbot response
      setTimeout(() => {
        const botMessage = { text: "This is a response from the chatbot.", sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 h-[80vh]">
      <div className="flex-1 h-full">
        <iframe
          src="https://example.com/report"
          className="w-full h-full border rounded-md"
          title="Report"
        ></iframe>
      </div>
      <div className="flex-1 h-full">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Chatbot Copilot</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col-reverse gap-2 overflow-auto">
            {messages.map((message, index) => (
              <div key={index} className={`p-2 rounded-md ${message.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 self-start"}`}>
                {message.text}
              </div>
            ))}
          </CardContent>
          <div className="p-4 border-t flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
              className="flex-1"
            />
            <Button onClick={handleSendMessage}>Send</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
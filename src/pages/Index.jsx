import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPlus, HelpCircle, Edit, Download, Share } from "lucide-react"; // Import icons
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Import Tooltip components

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
    <TooltipProvider>
      <div className="flex flex-col md:flex-row gap-4 h-[80vh] md:gap-8">
        <div className="flex-[2] h-full">
          <iframe
            src="https://example.com/report"
            className="w-full h-full border rounded-md"
            title="Report"
          ></iframe>
          <div className="flex justify-center gap-4 mt-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Edit className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Edit Report</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Download className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Download Report</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Share className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Share Report</TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="flex-[1] h-full">
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
            <div className="p-4 border-t flex flex-col gap-2">
              <div className="flex gap-2 mb-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  Start New Client Interview
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Ask General Questions
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message"
                  className="flex-1"
                />
                <Button onClick={handleSendMessage}>Send</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Index;
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Home = () => {
  const [file, setFile] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;
    setChatMessages([...chatMessages, { sender: "user", text: message }]);
    event.target.reset();
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 space-y-4 lg:space-y-0 lg:space-x-4">
      <Card className="w-full lg:w-1/2">
        <CardHeader>
          <CardTitle>File Upload</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="file-upload">Upload your file</Label>
          <Input id="file-upload" type="file" onChange={handleFileChange} />
          {file && <p className="mt-2">Selected file: {file.name}</p>}
        </CardContent>
      </Card>
      <Card className="w-full lg:w-1/2">
        <CardHeader>
          <CardTitle>Chatbot Copilot</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-64 overflow-y-auto border p-2">
              {chatMessages.map((message, index) => (
                <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`p-2 rounded ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Textarea id="message" placeholder="Type your message..." className="flex-grow" />
              <Button type="submit">Send</Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
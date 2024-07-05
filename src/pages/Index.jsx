import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPlus, HelpCircle, Edit, Download, Share, Loader2 } from "lucide-react"; // Import icons
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Import Tooltip components

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef(null);

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

  const handleFileDrop = (event) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    setFile(uploadedFile);
    displayDocument(uploadedFile);
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    displayDocument(uploadedFile);
  };

  const displayDocument = (file) => {
    const docFrame = document.getElementById("docFrame");
    docFrame.src = URL.createObjectURL(file);
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      // Display the document in the frame (simulated)
      const docFrame = document.getElementById("docFrame");
      docFrame.src = URL.createObjectURL(file);
    }, 2000);
  };

  return (
    <TooltipProvider>
      <div className="flex flex-col md:flex-row gap-4 h-[80vh] md:gap-8">
        <div className="flex-[2] h-full">
          {!file ? (
            <div
              onDrop={handleFileDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => fileInputRef.current.click()}
              className="w-full h-full border-dashed border-2 border-gray-300 rounded-md flex items-center justify-center cursor-pointer"
            >
              <p>Drag and drop a PDF/DOCX file here or click to upload</p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
          ) : (
            <div className="w-full h-full border rounded-md relative">
              <iframe
                id="docFrame"
                className="w-full h-full"
                title="Uploaded Document"
              ></iframe>
              <div className="absolute top-2 right-2 flex gap-2">
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
          )}
          {file && (
            <div className="flex justify-center gap-4 mt-4">
              <Button onClick={handleAnalyze} disabled={isAnalyzing}>
                {isAnalyzing ? <Loader2 className="animate-spin h-5 w-5" /> : "Analyze"}
              </Button>
            </div>
          )}
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
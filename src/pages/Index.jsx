import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPlus, HelpCircle, Edit, Download, Share } from "lucide-react"; // Import icons
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Import Tooltip components
import { Separator } from "@/components/ui/separator"; // Import Separator component

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
      <Separator className="my-8" />
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg leading-relaxed">
            Welcome to the ReportGen application. This tool is designed to help you generate comprehensive reports with ease. In this document, we will walk you through the various features and functionalities of the application.
          </p>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <h3 className="text-xl font-semibold mb-2">1. Report Generation</h3>
          <p className="text-lg leading-relaxed">
            The core feature of ReportGen is its ability to generate detailed reports based on user input. You can customize the content, format, and layout of your reports to suit your specific needs.
          </p>
          <h3 className="text-xl font-semibold mb-2">2. Chatbot Assistance</h3>
          <p className="text-lg leading-relaxed">
            Our integrated chatbot, Copilot, is here to assist you with any questions or tasks you may have. Whether you need help with generating a report or have general inquiries, Copilot is ready to assist.
          </p>
          <h3 className="text-xl font-semibold mb-2">3. Editing and Customization</h3>
          <p className="text-lg leading-relaxed">
            You can easily edit and customize your reports using the built-in editor. Add sections, modify content, and adjust the layout to create a report that meets your requirements.
          </p>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-lg leading-relaxed">
            To get started with ReportGen, simply navigate to the home page and follow the on-screen instructions. You can start a new report, edit an existing one, or ask Copilot for assistance.
          </p>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p className="text-lg leading-relaxed">
            We hope you find ReportGen to be a valuable tool in your report generation process. If you have any feedback or need further assistance, please do not hesitate to reach out to our support team.
          </p>
        </section>
      </div>
    </TooltipProvider>
  );
};

export default Index;
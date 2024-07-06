import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Rocket } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Home Page</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Welcome to the Home Page!</p>
          <p>Here you can upload files and interact with the chatbot copilot.</p>
          <div className="mt-4">
            <Label htmlFor="file-upload">Upload File</Label>
            <Input id="file-upload" type="file" />
          </div>
          <div className="mt-4">
            <Label htmlFor="chatbot">Chatbot Copilot</Label>
            <Input id="chatbot" placeholder="Type your message here..." />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
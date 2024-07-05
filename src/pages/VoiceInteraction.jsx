import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

const VoiceInteraction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Voice Interaction</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <Button variant="outline" size="icon" className="btn-primary">
            <Mic className="h-6 w-6" />
          </Button>
          <p>Click the button to start voice interaction.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoiceInteraction;
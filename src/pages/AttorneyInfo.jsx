import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

const AttorneyInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Attorney Info</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Info className="h-6 w-6 text-bright-blue" />
            <p>Attorney Name: John Doe</p>
          </div>
          <div className="flex items-center gap-2">
            <Info className="h-6 w-6 text-bright-blue" />
            <p>Contact: johndoe@example.com</p>
          </div>
          <div className="flex items-center gap-2">
            <Info className="h-6 w-6 text-bright-blue" />
            <p>Phone: (123) 456-7890</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttorneyInfo;
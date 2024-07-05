import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const HelpfulTips = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Helpful Tips</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-bright-blue" />
            <p>Tip 1: Always keep your documents organized.</p>
          </div>
          <div className="flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-bright-blue" />
            <p>Tip 2: Regularly backup your data.</p>
          </div>
          <div className="flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-bright-blue" />
            <p>Tip 3: Use strong passwords for your accounts.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpfulTips;
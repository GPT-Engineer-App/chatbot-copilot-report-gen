import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Rocket } from "lucide-react";

const Index = () => {
  const [hasAttorney, setHasAttorney] = useState("no");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login / Signup</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="First Name" />
            </div>
            <div>
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Last Name" />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="Email Address" />
            </div>
            <div>
              <Label>Do you have an attorney?</Label>
              <RadioGroup
                defaultValue="no"
                onValueChange={(value) => setHasAttorney(value)}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>
            </div>
            {hasAttorney === "yes" && (
              <div>
                <Label htmlFor="law-firm-name">Law Firm Name</Label>
                <Input id="law-firm-name" placeholder="Law Firm Name" />
                <Label htmlFor="law-firm-address" className="mt-2">Law Firm Address</Label>
                <Input id="law-firm-address" placeholder="Law Firm Address" />
              </div>
            )}
            <Button type="submit" className="w-full flex items-center justify-center space-x-2">
              <span>Get Started</span>
              <Rocket className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
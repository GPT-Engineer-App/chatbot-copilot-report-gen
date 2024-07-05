import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home as HomeIcon } from "lucide-react";
import Home from "./pages/Home.jsx"; // Import the Home page
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SidebarLayout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home", // Feel free to change this to your liking
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<SidebarLayout />}>
              <Route index element={<Index />} />
              <Route path="home" element={<Home />} /> {/* Add the Home route */}
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

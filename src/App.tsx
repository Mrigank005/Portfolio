import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ChatProvider } from "./context/ChatContext";
import ChatSidebar from "./components/ChatSidebar";
import { API_URL } from "./config/api";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Health check ping to backend to wake up the Render server
    fetch(`${API_URL}/`)
      .catch((err) => console.log("Wake up ping failed/ignored", err));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ChatProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ChatSidebar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ChatProvider>
    </QueryClientProvider>
  );
};

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Etablissements from "./pages/Etablissements";
import Utilisateurs from "./pages/Utilisateurs";
import Paiements from "./pages/Paiements";
import Analytics from "./pages/Analytics";
import Parametres from "./pages/Parametres";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/etablissements" element={<Etablissements />} />
          <Route path="/utilisateurs" element={<Utilisateurs />} />
          <Route path="/paiements" element={<Paiements />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/parametres" element={<Parametres />} />
          <Route path="/onboarding" element={<Onboarding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

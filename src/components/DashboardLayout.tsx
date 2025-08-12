import { useState } from "react";
import { 
  Home, 
  School, 
  Users, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Bell,
  Search,
  Menu,
  X
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

const navigation = [
  { name: "Tableau de bord", href: "/", icon: Home },
  { name: "Établissements", href: "/etablissements", icon: School },
  { name: "Utilisateurs", href: "/utilisateurs", icon: Users },
  { name: "Paiements", href: "/paiements", icon: CreditCard },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Paramètres", href: "/parametres", icon: Settings },
];

export default function DashboardLayout({ children, currentPage }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-gradient-card border-r border-border shadow-elegant">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              LUNION Admin
            </h1>
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="mt-6 px-3 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
                  item.name === currentPage 
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow' 
                    : 'text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-1 flex-col bg-gradient-card border-r border-border shadow-card">
          <div className="flex items-center h-16 px-6 border-b border-border">
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              LUNION Admin
            </h1>
          </div>
          <nav className="flex-1 mt-6 px-3 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
                  item.name === currentPage 
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow' 
                    : 'text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top navbar */}
        <header className="flex h-16 items-center justify-between px-4 border-b border-border bg-card/50 backdrop-blur-sm lg:px-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-4 ml-auto">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Rechercher..." 
                className="pl-10 w-full lg:w-64"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-gradient-primary" />
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
import { 
  School, 
  Users, 
  CreditCard, 
  TrendingUp,
  MapPin,
  Phone,
  Calendar,
  DollarSign
} from "lucide-react";
import StatsCard from "./StatsCard";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import CreateEstablishmentModal from "./CreateEstablishmentModal";
import heroImage from "@/assets/hero-banner.jpg";

// Mock data
const stats = [
  {
    title: "Établissements Actifs",
    value: "247",
    change: "+12% ce mois",
    changeType: "positive" as const,
    icon: School,
    description: "Écoles utilisant la plateforme"
  },
  {
    title: "Élèves Inscrits",
    value: "45,892",
    change: "+8% ce mois",
    changeType: "positive" as const,
    icon: Users,
    description: "Total d'élèves sur la plateforme"
  },
  {
    title: "Paiements ce mois",
    value: "1,247",
    change: "+23% vs mois dernier",
    changeType: "positive" as const,
    icon: CreditCard,
    description: "Transactions réussies"
  },
  {
    title: "Commission Totale",
    value: "₣ 89,450",
    change: "+15% ce mois",
    changeType: "positive" as const,
    icon: DollarSign,
    description: "Revenus générés (1%)"
  }
];

const recentActivities = [
  {
    id: 1,
    school: "École Primaire de Yaoundé",
    action: "Nouveau paiement",
    amount: "₣ 25,000",
    time: "Il y a 5 min",
    type: "payment"
  },
  {
    id: 2,
    school: "Lycée Bilingue de Douala",
    action: "Nouvel établissement",
    amount: "",
    time: "Il y a 2h",
    type: "signup"
  },
  {
    id: 3,
    school: "Collège Moderne Bamenda",
    action: "Mise à jour profil",
    amount: "",
    time: "Il y a 4h",
    type: "update"
  }
];

const topSchools = [
  {
    name: "Lycée Général Leclerc",
    location: "Yaoundé",
    students: 1847,
    commission: "₣ 12,450",
    growth: "+18%"
  },
  {
    name: "École Internationale",
    location: "Douala",
    students: 1203,
    commission: "₣ 8,930",
    growth: "+12%"
  },
  {
    name: "Collège Bilingue Central",
    location: "Bafoussam",
    students: 892,
    commission: "₣ 6,240",
    growth: "+9%"
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-primary p-8 shadow-glow">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
              Bienvenue sur LUNION Admin
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-md">
              Gérez efficacement vos établissements scolaires et suivez vos performances en temps réel.
            </p>
            <CreateEstablishmentModal />
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Étudiants utilisant la technologie" 
              className="w-80 h-48 object-cover rounded-lg shadow-card opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Activités Récentes</h2>
              <Button variant="outline" size="sm">
                Voir tout
              </Button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-smooth">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === 'payment' ? 'bg-success/20' : 
                      activity.type === 'signup' ? 'bg-primary/20' : 'bg-warning/20'
                    }`}>
                      {activity.type === 'payment' ? <CreditCard className="h-5 w-5 text-success" /> :
                       activity.type === 'signup' ? <School className="h-5 w-5 text-primary" /> :
                       <TrendingUp className="h-5 w-5 text-warning" />}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{activity.school}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {activity.amount && (
                      <p className="font-bold text-success">{activity.amount}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Top Performing Schools */}
        <div>
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Top Établissements</h2>
              <Button variant="outline" size="sm">
                <MapPin className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {topSchools.map((school, index) => (
                <div key={index} className="p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-smooth">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-foreground text-sm">{school.name}</h3>
                      <div className="flex items-center gap-1 text-muted-foreground text-xs">
                        <MapPin className="h-3 w-3" />
                        {school.location}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-success bg-success/20 px-2 py-1 rounded">
                      {school.growth}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{school.students.toLocaleString()} élèves</span>
                    <span className="font-bold text-primary">{school.commission}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="p-6 bg-gradient-card border-border shadow-card">
        <h2 className="text-xl font-bold text-foreground mb-4">Actions Rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-20 flex-col gap-2">
            <School className="h-6 w-6" />
            Ajouter un Établissement
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-2">
            <Phone className="h-6 w-6" />
            Contacter Support
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-2">
            <Calendar className="h-6 w-6" />
            Planifier Onboarding
          </Button>
        </div>
      </Card>
    </div>
  );
}
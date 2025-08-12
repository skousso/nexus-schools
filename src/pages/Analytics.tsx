import { useState } from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign,
  School,
  Calendar,
  Download,
  Filter,
  RefreshCw
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";

// Mock data for charts
const monthlyRevenue = [
  { month: 'Jan', revenue: 45000, commissions: 450 },
  { month: 'Fév', revenue: 52000, commissions: 520 },
  { month: 'Mar', revenue: 48000, commissions: 480 },
  { month: 'Avr', revenue: 61000, commissions: 610 },
  { month: 'Mai', revenue: 55000, commissions: 550 },
  { month: 'Jun', revenue: 67000, commissions: 670 },
  { month: 'Jul', revenue: 72000, commissions: 720 },
  { month: 'Aoû', revenue: 69000, commissions: 690 },
  { month: 'Sep', revenue: 78000, commissions: 780 },
  { month: 'Oct', revenue: 82000, commissions: 820 },
  { month: 'Nov', revenue: 89000, commissions: 890 },
  { month: 'Déc', revenue: 94000, commissions: 940 }
];

const userGrowth = [
  { month: 'Jan', students: 15420, teachers: 892, establishments: 45 },
  { month: 'Fév', students: 17230, teachers: 965, establishments: 52 },
  { month: 'Mar', students: 19850, teachers: 1120, establishments: 61 },
  { month: 'Avr', students: 22450, teachers: 1287, establishments: 73 },
  { month: 'Mai', students: 25680, teachers: 1445, establishments: 89 },
  { month: 'Jun', students: 28920, teachers: 1623, establishments: 105 },
  { month: 'Jul', students: 32150, teachers: 1798, establishments: 124 },
  { month: 'Aoû', students: 35680, teachers: 1987, establishments: 145 },
  { month: 'Sep', students: 38945, teachers: 2156, establishments: 167 },
  { month: 'Oct', students: 41250, teachers: 2324, establishments: 189 },
  { month: 'Nov', students: 43890, teachers: 2487, establishments: 214 },
  { month: 'Déc', students: 45892, teachers: 2635, establishments: 247 }
];

const paymentMethods = [
  { name: 'Mobile Money', value: 62, color: '#22c55e' },
  { name: 'Virement', value: 24, color: '#3b82f6' },
  { name: 'Espèces', value: 10, color: '#f59e0b' },
  { name: 'Carte', value: 4, color: '#ef4444' }
];

const regionData = [
  { region: 'Centre', establishments: 89, students: 15420, revenue: 234500 },
  { region: 'Littoral', establishments: 67, students: 12890, revenue: 198200 },
  { region: 'Ouest', establishments: 45, students: 8950, revenue: 145600 },
  { region: 'Nord-Ouest', establishments: 23, students: 4820, revenue: 87300 },
  { region: 'Sud-Ouest', establishments: 18, students: 2890, revenue: 62400 },
  { region: 'Autres', establishments: 5, students: 922, revenue: 18900 }
];

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("12months");
  const [selectedMetric, setSelectedMetric] = useState("revenue");

  return (
    <DashboardLayout currentPage="Analytics">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics & Rapports</h1>
            <p className="text-muted-foreground mt-1">
              Analyse détaillée des performances de la plateforme
            </p>
          </div>
          <div className="flex gap-3">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">7 derniers jours</SelectItem>
                <SelectItem value="30days">30 derniers jours</SelectItem>
                <SelectItem value="3months">3 derniers mois</SelectItem>
                <SelectItem value="12months">12 derniers mois</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Actualiser
            </Button>
            <Button variant="default">
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Revenus Totaux</p>
                <p className="text-3xl font-bold text-foreground mt-2">₣ 789,450</p>
                <p className="text-sm text-success mt-1">+23.5% vs mois précédent</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Commissions</p>
                <p className="text-3xl font-bold text-accent mt-2">₣ 7,895</p>
                <p className="text-sm text-success mt-1">+18.2% ce mois</p>
              </div>
              <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Utilisateurs Actifs</p>
                <p className="text-3xl font-bold text-foreground mt-2">51,527</p>
                <p className="text-sm text-success mt-1">+12.8% ce mois</p>
              </div>
              <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-success" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Taux de Réussite</p>
                <p className="text-3xl font-bold text-foreground mt-2">94.2%</p>
                <p className="text-sm text-success mt-1">+2.1% ce mois</p>
              </div>
              <div className="h-12 w-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-warning" />
              </div>
            </div>
          </Card>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">Évolution des Revenus</h3>
              <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="revenue">Revenus</SelectItem>
                  <SelectItem value="commissions">Commissions</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar 
                  dataKey={selectedMetric === "revenue" ? "revenue" : "commissions"} 
                  fill="hsl(var(--primary))" 
                  name={selectedMetric === "revenue" ? "Revenus (FCFA)" : "Commissions (FCFA)"}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* User Growth Chart */}
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">Croissance des Utilisateurs</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="students" stroke="hsl(var(--primary))" name="Élèves" strokeWidth={2} />
                <Line type="monotone" dataKey="teachers" stroke="hsl(var(--success))" name="Enseignants" strokeWidth={2} />
                <Line type="monotone" dataKey="establishments" stroke="hsl(var(--accent))" name="Établissements" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Payment Methods Pie Chart */}
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">Méthodes de Paiement</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={paymentMethods}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {paymentMethods.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Regional Performance */}
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">Performance par Région</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={regionData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                <YAxis dataKey="region" type="category" stroke="hsl(var(--muted-foreground))" width={80} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="revenue" fill="hsl(var(--primary))" name="Revenus (FCFA)" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Performance Table */}
        <Card className="p-6 bg-gradient-card border-border shadow-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Performance Détaillée par Région</h3>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exporter tableau
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Région</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Établissements</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Élèves</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Revenus</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Commission</th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Croissance</th>
                </tr>
              </thead>
              <tbody>
                {regionData.map((region, index) => (
                  <tr key={index} className="border-b border-border hover:bg-secondary/30 transition-colors">
                    <td className="py-3 px-4 font-medium text-foreground">{region.region}</td>
                    <td className="py-3 px-4 text-muted-foreground">{region.establishments}</td>
                    <td className="py-3 px-4 text-muted-foreground">{region.students.toLocaleString()}</td>
                    <td className="py-3 px-4 font-medium text-foreground">₣ {region.revenue.toLocaleString()}</td>
                    <td className="py-3 px-4 text-accent font-medium">₣ {Math.round(region.revenue * 0.01).toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className="text-success text-sm font-medium">+{Math.floor(Math.random() * 20 + 5)}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
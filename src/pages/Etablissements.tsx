import { useState } from "react";
import { Plus, Search, Filter, Download } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import EstablishmentCard from "@/components/EstablishmentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data
const establishments = [
  {
    id: "1",
    name: "Lycée Général Leclerc",
    location: "Yaoundé, Centre",
    type: "Lycée Public",
    students: 1847,
    teachers: 89,
    phoneNumber: "+237 677 123 456",
    email: "contact@lycee-leclerc.cm",
    status: "active" as const,
    monthlyRevenue: "₣ 12,450",
    growth: "+18%",
    joinedDate: "15 Janv 2024",
    lastActivity: "il y a 2h"
  },
  {
    id: "2", 
    name: "École Internationale de Douala",
    location: "Douala, Littoral",
    type: "École Privée",
    students: 1203,
    teachers: 67,
    phoneNumber: "+237 699 987 654",
    email: "admin@ecoledouala.cm",
    status: "active" as const,
    monthlyRevenue: "₣ 8,930",
    growth: "+12%",
    joinedDate: "03 Févr 2024",
    lastActivity: "il y a 1h"
  },
  {
    id: "3",
    name: "Collège Bilingue Central",
    location: "Bafoussam, Ouest",
    type: "Collège Privé",
    students: 892,
    teachers: 45,
    phoneNumber: "+237 681 555 777",
    email: "info@college-central.cm",
    status: "pending" as const,
    monthlyRevenue: "₣ 6,240",
    growth: "+9%",
    joinedDate: "20 Mars 2024",
    lastActivity: "il y a 1 jour"
  },
  {
    id: "4",
    name: "École Maternelle Les Bambins",
    location: "Bamenda, Nord-Ouest",
    type: "Maternelle",
    students: 267,
    teachers: 18,
    phoneNumber: "+237 673 444 888",
    email: "bambins@education.cm",
    status: "inactive" as const,
    monthlyRevenue: "₣ 1,890",
    growth: "-3%",
    joinedDate: "10 Avril 2024",
    lastActivity: "il y a 5 jours"
  }
];

export default function Etablissements() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const filteredEstablishments = establishments.filter((establishment) => {
    const matchesSearch = establishment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         establishment.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || establishment.status === filterStatus;
    const matchesType = filterType === "all" || establishment.type.toLowerCase().includes(filterType.toLowerCase());
    
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <DashboardLayout currentPage="Établissements">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Gestion des Établissements</h1>
            <p className="text-muted-foreground mt-1">
              Gérez et suivez tous vos établissements partenaires
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
            <Button variant="default">
              <Plus className="h-4 w-4 mr-2" />
              Nouvel Établissement
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Rechercher un établissement..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="active">Actif</SelectItem>
                <SelectItem value="pending">En attente</SelectItem>
                <SelectItem value="inactive">Inactif</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les types</SelectItem>
                <SelectItem value="lycée">Lycée</SelectItem>
                <SelectItem value="collège">Collège</SelectItem>
                <SelectItem value="école">École</SelectItem>
                <SelectItem value="maternelle">Maternelle</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              Plus de filtres
            </Button>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-card border border-border rounded-lg p-4 shadow-card">
            <p className="text-sm text-muted-foreground">Total</p>
            <p className="text-2xl font-bold text-foreground">{establishments.length}</p>
          </div>
          <div className="bg-gradient-card border border-border rounded-lg p-4 shadow-card">
            <p className="text-sm text-muted-foreground">Actifs</p>
            <p className="text-2xl font-bold text-success">
              {establishments.filter(e => e.status === 'active').length}
            </p>
          </div>
          <div className="bg-gradient-card border border-border rounded-lg p-4 shadow-card">
            <p className="text-sm text-muted-foreground">En attente</p>
            <p className="text-2xl font-bold text-warning">
              {establishments.filter(e => e.status === 'pending').length}
            </p>
          </div>
          <div className="bg-gradient-card border border-border rounded-lg p-4 shadow-card">
            <p className="text-sm text-muted-foreground">Total Élèves</p>
            <p className="text-2xl font-bold text-primary">
              {establishments.reduce((sum, e) => sum + e.students, 0).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Establishments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredEstablishments.map((establishment) => (
            <EstablishmentCard key={establishment.id} establishment={establishment} />
          ))}
        </div>

        {filteredEstablishments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Aucun établissement trouvé</p>
            <p className="text-muted-foreground text-sm mt-2">
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
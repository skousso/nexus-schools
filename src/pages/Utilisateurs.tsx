import { useState } from "react";
import { 
  User, 
  Users, 
  GraduationCap, 
  Search, 
  Filter, 
  Download,
  Plus,
  MoreVertical,
  Edit,
  Eye,
  Trash,
  UserCheck,
  UserX,
  Mail,
  Phone,
  Calendar,
  School,
  MapPin
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "student" | "teacher" | "admin" | "parent";
  establishment: string;
  status: "active" | "inactive" | "suspended";
  joinDate: string;
  lastActivity: string;
  avatar?: string;
  class?: string;
  subjects?: string[];
  children?: number;
}

// Mock data
const users: User[] = [
  {
    id: "1",
    name: "Jean Dupont",
    email: "jean.dupont@email.com",
    phone: "+237 677 123 456",
    role: "student",
    establishment: "Lycée Général Leclerc",
    status: "active",
    joinDate: "15 Sept 2024",
    lastActivity: "il y a 2h",
    class: "Terminale C"
  },
  {
    id: "2", 
    name: "Marie Martin",
    email: "marie.martin@education.cm",
    phone: "+237 699 987 654",
    role: "teacher",
    establishment: "École Internationale Douala",
    status: "active",
    joinDate: "03 Janv 2024",
    lastActivity: "il y a 30min",
    subjects: ["Mathématiques", "Physique"]
  },
  {
    id: "3",
    name: "Paul Mbarga",
    email: "paul.mbarga@admin.cm",
    phone: "+237 681 555 777",
    role: "admin",
    establishment: "Collège Bilingue Central",
    status: "active",
    joinDate: "20 Nov 2023",
    lastActivity: "il y a 1h"
  },
  {
    id: "4",
    name: "Sophie Nguyen",
    email: "sophie.nguyen@parent.cm",
    phone: "+237 673 444 888",
    role: "parent",
    establishment: "École Maternelle Les Bambins",
    status: "inactive",
    joinDate: "10 Mars 2024",
    lastActivity: "il y a 3 jours",
    children: 2
  }
];

const roleColors = {
  student: "bg-primary/20 text-primary",
  teacher: "bg-success/20 text-success",
  admin: "bg-warning/20 text-warning",
  parent: "bg-accent/20 text-accent"
};

const statusColors = {
  active: "bg-success/20 text-success",
  inactive: "bg-muted text-muted-foreground",
  suspended: "bg-destructive/20 text-destructive"
};

const roleLabels = {
  student: "Élève",
  teacher: "Enseignant",
  admin: "Administrateur",
  parent: "Parent"
};

export default function Utilisateurs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterEstablishment, setFilterEstablishment] = useState("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || user.role === filterRole;
    const matchesStatus = filterStatus === "all" || user.status === filterStatus;
    const matchesEstablishment = filterEstablishment === "all" || 
                                user.establishment.toLowerCase().includes(filterEstablishment.toLowerCase());
    
    return matchesSearch && matchesRole && matchesStatus && matchesEstablishment;
  });

  const UserCard = ({ user }: { user: User }) => (
    <Card className="p-6 bg-gradient-card border-border shadow-card hover:shadow-glow transition-smooth">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-foreground">{user.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <Badge className={roleColors[user.role]} variant="outline">
                {roleLabels[user.role]}
              </Badge>
              <Badge className={statusColors[user.status]} variant="outline">
                {user.status === "active" ? "Actif" : 
                 user.status === "inactive" ? "Inactif" : "Suspendu"}
              </Badge>
            </div>
          </div>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-card border-border">
            <DropdownMenuItem className="hover:bg-secondary">
              <Eye className="h-4 w-4 mr-2" />
              Voir profil
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-secondary">
              <Edit className="h-4 w-4 mr-2" />
              Modifier
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-secondary">
              <Mail className="h-4 w-4 mr-2" />
              Contacter
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-destructive/20 text-destructive">
              <Trash className="h-4 w-4 mr-2" />
              Supprimer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="h-3 w-3" />
          {user.email}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="h-3 w-3" />
          {user.phone}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <School className="h-3 w-3" />
          {user.establishment}
        </div>
        {user.class && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="h-3 w-3" />
            Classe: {user.class}
          </div>
        )}
        {user.subjects && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="h-3 w-3" />
            Matières: {user.subjects.join(", ")}
          </div>
        )}
        {user.children && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-3 w-3" />
            {user.children} enfant{user.children > 1 ? "s" : ""}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="text-xs text-muted-foreground">
          <div>Inscrit le {user.joinDate}</div>
          <div>Dernière activité: {user.lastActivity}</div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Contacter
          </Button>
          <Button variant="default" size="sm">
            Profil
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <DashboardLayout currentPage="Utilisateurs">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Gestion des Utilisateurs</h1>
            <p className="text-muted-foreground mt-1">
              Gérez tous les utilisateurs de la plateforme
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">
                  <Plus className="h-4 w-4 mr-2" />
                  Nouvel Utilisateur
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card border-border">
                <DialogHeader>
                  <DialogTitle>Ajouter un Utilisateur</DialogTitle>
                  <DialogDescription>
                    Créer un nouveau compte utilisateur sur la plateforme.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Input placeholder="Nom complet" />
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Téléphone" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Rôle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Élève</SelectItem>
                      <SelectItem value="teacher">Enseignant</SelectItem>
                      <SelectItem value="admin">Administrateur</SelectItem>
                      <SelectItem value="parent">Parent</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1">Créer</Button>
                    <Button variant="outline" className="flex-1">Annuler</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Rechercher un utilisateur..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={filterRole} onValueChange={setFilterRole}>
              <SelectTrigger>
                <SelectValue placeholder="Rôle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les rôles</SelectItem>
                <SelectItem value="student">Élèves</SelectItem>
                <SelectItem value="teacher">Enseignants</SelectItem>
                <SelectItem value="admin">Administrateurs</SelectItem>
                <SelectItem value="parent">Parents</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="active">Actif</SelectItem>
                <SelectItem value="inactive">Inactif</SelectItem>
                <SelectItem value="suspended">Suspendu</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterEstablishment} onValueChange={setFilterEstablishment}>
              <SelectTrigger>
                <SelectValue placeholder="Établissement" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="lycee">Lycée Général Leclerc</SelectItem>
                <SelectItem value="ecole">École Internationale Douala</SelectItem>
                <SelectItem value="college">Collège Bilingue Central</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              Plus de filtres
            </Button>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 bg-gradient-card border-border shadow-card">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-2xl font-bold text-foreground">{users.length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-card border-border shadow-card">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Élèves</p>
                <p className="text-2xl font-bold text-primary">
                  {users.filter(u => u.role === 'student').length}
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-card border-border shadow-card">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-success/20 rounded-lg flex items-center justify-center">
                <UserCheck className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Enseignants</p>
                <p className="text-2xl font-bold text-success">
                  {users.filter(u => u.role === 'teacher').length}
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-card border-border shadow-card">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-success/20 rounded-lg flex items-center justify-center">
                <UserCheck className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Actifs</p>
                <p className="text-2xl font-bold text-success">
                  {users.filter(u => u.status === 'active').length}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Aucun utilisateur trouvé</p>
            <p className="text-muted-foreground text-sm mt-2">
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
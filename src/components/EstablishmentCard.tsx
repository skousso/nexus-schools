import { 
  School, 
  Users, 
  MapPin, 
  Phone, 
  Calendar,
  TrendingUp,
  DollarSign,
  MoreVertical,
  Edit,
  Eye
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface EstablishmentCardProps {
  establishment: {
    id: string;
    name: string;
    location: string;
    type: string;
    students: number;
    teachers: number;
    phoneNumber: string;
    email: string;
    status: "active" | "pending" | "inactive";
    monthlyRevenue: string;
    growth: string;
    joinedDate: string;
    lastActivity: string;
  };
}

const statusColors = {
  active: "text-success bg-success/20",
  pending: "text-warning bg-warning/20", 
  inactive: "text-muted-foreground bg-muted"
};

const statusLabels = {
  active: "Actif",
  pending: "En attente",
  inactive: "Inactif"
};

export default function EstablishmentCard({ establishment }: EstablishmentCardProps) {
  return (
    <Card className="p-6 bg-gradient-card border-border shadow-card hover:shadow-glow transition-smooth">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <School className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-foreground text-lg">{establishment.name}</h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <MapPin className="h-3 w-3" />
              {establishment.location}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[establishment.status]}`}>
            {statusLabels[establishment.status]}
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Eye className="h-4 w-4 mr-2" />
                Voir détails
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className="h-4 w-4 mr-2" />
                Modifier
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Type & Contact Info */}
      <div className="mb-4 space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium">
            {establishment.type}
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Phone className="h-3 w-3" />
            {establishment.phoneNumber}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Rejoint le {establishment.joinedDate}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-secondary/30 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Élèves</span>
          </div>
          <p className="text-xl font-bold text-foreground">{establishment.students.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground">{establishment.teachers} enseignants</p>
        </div>
        <div className="bg-secondary/30 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="h-4 w-4 text-success" />
            <span className="text-sm font-medium text-foreground">Commission</span>
          </div>
          <p className="text-xl font-bold text-success">{establishment.monthlyRevenue}</p>
          <div className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3 text-success" />
            <span className="text-xs text-success">{establishment.growth}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs text-muted-foreground">
          Dernière activité: {establishment.lastActivity}
        </span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Contacter
          </Button>
          <Button variant="default" size="sm">
            Gérer
          </Button>
        </div>
      </div>
    </Card>
  );
}
import { useState } from "react";
import { 
  CreditCard, 
  TrendingUp, 
  DollarSign, 
  AlertCircle,
  Search, 
  Filter, 
  Download,
  Eye,
  MoreVertical,
  CheckCircle,
  XCircle,
  Clock,
  Smartphone,
  Building,
  User
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
import { Badge } from "@/components/ui/badge";

interface Payment {
  id: string;
  studentName: string;
  establishment: string;
  amount: number;
  commission: number;
  netAmount: number;
  status: "completed" | "pending" | "failed" | "cancelled";
  paymentMethod: "mobile_money" | "bank_transfer" | "cash" | "card";
  transactionId: string;
  date: string;
  time: string;
  description: string;
}

// Mock data
const payments: Payment[] = [
  {
    id: "1",
    studentName: "Jean Dupont",
    establishment: "Lycée Général Leclerc",
    amount: 25000,
    commission: 250,
    netAmount: 24750,
    status: "completed",
    paymentMethod: "mobile_money",
    transactionId: "MTN_TXN_001234567",
    date: "2024-12-15",
    time: "14:30",
    description: "Frais de scolarité - Trimestre 1"
  },
  {
    id: "2",
    studentName: "Marie Martin",
    establishment: "École Internationale Douala",
    amount: 15000,
    commission: 150,
    netAmount: 14850,
    status: "pending",
    paymentMethod: "bank_transfer",
    transactionId: "BANK_TXN_987654321",
    date: "2024-12-15",
    time: "13:15",
    description: "Frais d'inscription"
  },
  {
    id: "3",
    studentName: "Paul Mbarga",
    establishment: "Collège Bilingue Central",
    amount: 35000,
    commission: 350,
    netAmount: 34650,
    status: "completed",
    paymentMethod: "mobile_money",
    transactionId: "OM_TXN_112233445",
    date: "2024-12-15",
    time: "12:45",
    description: "Frais d'examen + matériel scolaire"
  },
  {
    id: "4",
    studentName: "Sophie Nguyen",
    establishment: "École Maternelle Les Bambins",
    amount: 8000,
    commission: 80,
    netAmount: 7920,
    status: "failed",
    paymentMethod: "card",
    transactionId: "CARD_TXN_556677889",
    date: "2024-12-15",
    time: "11:20",
    description: "Frais de cantine"
  },
  {
    id: "5",
    studentName: "André Kom",
    establishment: "Lycée Général Leclerc",
    amount: 42000,
    commission: 420,
    netAmount: 41580,
    status: "completed",
    paymentMethod: "mobile_money",
    transactionId: "MTN_TXN_334455667",
    date: "2024-12-14",
    time: "16:10",
    description: "Frais de scolarité + transport"
  }
];

const statusColors = {
  completed: "bg-success/20 text-success",
  pending: "bg-warning/20 text-warning",
  failed: "bg-destructive/20 text-destructive",
  cancelled: "bg-muted text-muted-foreground"
};

const statusLabels = {
  completed: "Complété",
  pending: "En attente",
  failed: "Échoué",
  cancelled: "Annulé"
};

const statusIcons = {
  completed: CheckCircle,
  pending: Clock,
  failed: XCircle,
  cancelled: AlertCircle
};

const methodColors = {
  mobile_money: "bg-accent/20 text-accent",
  bank_transfer: "bg-primary/20 text-primary",
  cash: "bg-success/20 text-success",
  card: "bg-warning/20 text-warning"
};

const methodLabels = {
  mobile_money: "Mobile Money",
  bank_transfer: "Virement",
  cash: "Espèces",
  card: "Carte"
};

export default function Paiements() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterMethod, setFilterMethod] = useState("all");
  const [filterEstablishment, setFilterEstablishment] = useState("all");

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch = payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.establishment.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || payment.status === filterStatus;
    const matchesMethod = filterMethod === "all" || payment.paymentMethod === filterMethod;
    const matchesEstablishment = filterEstablishment === "all" || 
                                payment.establishment.toLowerCase().includes(filterEstablishment.toLowerCase());
    
    return matchesSearch && matchesStatus && matchesMethod && matchesEstablishment;
  });

  // Stats calculations
  const totalAmount = payments.reduce((sum, p) => sum + p.amount, 0);
  const totalCommission = payments.reduce((sum, p) => sum + p.commission, 0);
  const completedPayments = payments.filter(p => p.status === 'completed').length;
  const pendingPayments = payments.filter(p => p.status === 'pending').length;

  const PaymentCard = ({ payment }: { payment: Payment }) => {
    const StatusIcon = statusIcons[payment.status];
    
    return (
      <Card className="p-6 bg-gradient-card border-border shadow-card hover:shadow-glow transition-smooth">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">{payment.studentName}</h3>
              <p className="text-sm text-muted-foreground">{payment.establishment}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge className={statusColors[payment.status]} variant="outline">
                  <StatusIcon className="h-3 w-3 mr-1" />
                  {statusLabels[payment.status]}
                </Badge>
                <Badge className={methodColors[payment.paymentMethod]} variant="outline">
                  {methodLabels[payment.paymentMethod]}
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
                Voir détails
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-secondary">
                <Download className="h-4 w-4 mr-2" />
                Télécharger reçu
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Montant total</span>
            <span className="font-bold text-foreground">₣ {payment.amount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Commission LUNION (1%)</span>
            <span className="font-medium text-accent">₣ {payment.commission.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-border">
            <span className="text-sm font-medium text-foreground">Montant net</span>
            <span className="font-bold text-success text-lg">₣ {payment.netAmount.toLocaleString()}</span>
          </div>
        </div>

        <div className="space-y-2 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <User className="h-3 w-3" />
            {payment.description}
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="h-3 w-3" />
            ID: {payment.transactionId}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="text-xs text-muted-foreground">
            {payment.date} à {payment.time}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Détails
            </Button>
            <Button variant="default" size="sm">
              Reçu
            </Button>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <DashboardLayout currentPage="Paiements">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Gestion des Paiements</h1>
            <p className="text-muted-foreground mt-1">
              Suivi des transactions et commissions
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exporter rapport
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Volume Total</p>
                <p className="text-3xl font-bold text-foreground mt-2">
                  ₣ {totalAmount.toLocaleString()}
                </p>
                <p className="text-sm text-success mt-1">+23% ce mois</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Commission Totale</p>
                <p className="text-3xl font-bold text-accent mt-2">
                  ₣ {totalCommission.toLocaleString()}
                </p>
                <p className="text-sm text-success mt-1">+18% ce mois</p>
              </div>
              <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Paiements Complétés</p>
                <p className="text-3xl font-bold text-success mt-2">{completedPayments}</p>
                <p className="text-sm text-muted-foreground mt-1">Sur {payments.length} transactions</p>
              </div>
              <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">En Attente</p>
                <p className="text-3xl font-bold text-warning mt-2">{pendingPayments}</p>
                <p className="text-sm text-muted-foreground mt-1">Nécessitent suivi</p>
              </div>
              <div className="h-12 w-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-warning" />
              </div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Rechercher..." 
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
                <SelectItem value="completed">Complété</SelectItem>
                <SelectItem value="pending">En attente</SelectItem>
                <SelectItem value="failed">Échoué</SelectItem>
                <SelectItem value="cancelled">Annulé</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterMethod} onValueChange={setFilterMethod}>
              <SelectTrigger>
                <SelectValue placeholder="Méthode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les méthodes</SelectItem>
                <SelectItem value="mobile_money">Mobile Money</SelectItem>
                <SelectItem value="bank_transfer">Virement bancaire</SelectItem>
                <SelectItem value="cash">Espèces</SelectItem>
                <SelectItem value="card">Carte</SelectItem>
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

        {/* Payments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPayments.map((payment) => (
            <PaymentCard key={payment.id} payment={payment} />
          ))}
        </div>

        {filteredPayments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Aucun paiement trouvé</p>
            <p className="text-muted-foreground text-sm mt-2">
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
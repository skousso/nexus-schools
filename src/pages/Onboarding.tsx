import { useState } from "react";
import { 
  CheckCircle, 
  Circle, 
  School, 
  Users, 
  CreditCard, 
  Settings,
  ArrowLeft,
  ArrowRight,
  Upload,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const steps = [
  {
    id: 1,
    title: "Informations de base",
    description: "Nom et localisation de l'établissement",
    icon: School,
    completed: false
  },
  {
    id: 2,
    title: "Contact & Administration",
    description: "Coordonnées et responsables",
    icon: Users,
    completed: false
  },
  {
    id: 3,
    title: "Configuration des classes",
    description: "Structure pédagogique",
    icon: Settings,
    completed: false
  },
  {
    id: 4,
    title: "Paramètres de paiement",
    description: "Frais et modalités",
    icon: CreditCard,
    completed: false
  }
];

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    establishmentName: "",
    establishmentType: "",
    region: "",
    city: "",
    address: "",
    
    // Step 2
    principalName: "",
    principalPhone: "",
    principalEmail: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    
    // Step 3
    totalStudents: "",
    totalTeachers: "",
    classrooms: "",
    levels: [],
    
    // Step 4
    registrationFee: "",
    monthlyFee: "",
    paymentMethods: []
  });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <School className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground">Informations de l'établissement</h2>
              <p className="text-muted-foreground">Commençons par les informations de base</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="establishmentName">Nom de l'établissement *</Label>
                <Input 
                  id="establishmentName"
                  placeholder="Ex: Lycée Général Leclerc"
                  value={formData.establishmentName}
                  onChange={(e) => handleInputChange("establishmentName", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="establishmentType">Type d'établissement *</Label>
                <Select value={formData.establishmentType} onValueChange={(value) => handleInputChange("establishmentType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner le type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maternelle">École Maternelle</SelectItem>
                    <SelectItem value="primaire">École Primaire</SelectItem>
                    <SelectItem value="college">Collège</SelectItem>
                    <SelectItem value="lycee">Lycée</SelectItem>
                    <SelectItem value="universite">Université</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="region">Région *</Label>
                <Select value={formData.region} onValueChange={(value) => handleInputChange("region", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner la région" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="centre">Centre</SelectItem>
                    <SelectItem value="littoral">Littoral</SelectItem>
                    <SelectItem value="ouest">Ouest</SelectItem>
                    <SelectItem value="nord-ouest">Nord-Ouest</SelectItem>
                    <SelectItem value="sud-ouest">Sud-Ouest</SelectItem>
                    <SelectItem value="nord">Nord</SelectItem>
                    <SelectItem value="extreme-nord">Extrême-Nord</SelectItem>
                    <SelectItem value="adamaoua">Adamaoua</SelectItem>
                    <SelectItem value="est">Est</SelectItem>
                    <SelectItem value="sud">Sud</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="city">Ville *</Label>
                <Input 
                  id="city"
                  placeholder="Ex: Yaoundé"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Adresse complète *</Label>
                <Textarea 
                  id="address"
                  placeholder="Adresse détaillée de l'établissement"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                />
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Users className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground">Contact & Administration</h2>
              <p className="text-muted-foreground">Informations des responsables</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-gradient-card border-border shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-4">Directeur/Principal</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="principalName">Nom complet *</Label>
                    <Input 
                      id="principalName"
                      placeholder="Ex: Dr. Jean Dupont"
                      value={formData.principalName}
                      onChange={(e) => handleInputChange("principalName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="principalPhone">Téléphone *</Label>
                    <Input 
                      id="principalPhone"
                      placeholder="+237 6XX XXX XXX"
                      value={formData.principalPhone}
                      onChange={(e) => handleInputChange("principalPhone", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="principalEmail">Email *</Label>
                    <Input 
                      id="principalEmail"
                      type="email"
                      placeholder="directeur@etablissement.cm"
                      value={formData.principalEmail}
                      onChange={(e) => handleInputChange("principalEmail", e.target.value)}
                    />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-card border-border shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-4">Personne Contact</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Nom complet *</Label>
                    <Input 
                      id="contactName"
                      placeholder="Ex: Marie Martin"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange("contactName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Téléphone *</Label>
                    <Input 
                      id="contactPhone"
                      placeholder="+237 6XX XXX XXX"
                      value={formData.contactPhone}
                      onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email *</Label>
                    <Input 
                      id="contactEmail"
                      type="email"
                      placeholder="contact@etablissement.cm"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Settings className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground">Configuration des classes</h2>
              <p className="text-muted-foreground">Structure pédagogique de votre établissement</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-4 bg-gradient-card border-border shadow-card text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <Label htmlFor="totalStudents">Nombre d'élèves</Label>
                <Input 
                  id="totalStudents"
                  type="number"
                  placeholder="Ex: 500"
                  className="text-center mt-2"
                  value={formData.totalStudents}
                  onChange={(e) => handleInputChange("totalStudents", e.target.value)}
                />
              </Card>
              
              <Card className="p-4 bg-gradient-card border-border shadow-card text-center">
                <Users className="h-8 w-8 text-success mx-auto mb-2" />
                <Label htmlFor="totalTeachers">Nombre d'enseignants</Label>
                <Input 
                  id="totalTeachers"
                  type="number"
                  placeholder="Ex: 25"
                  className="text-center mt-2"
                  value={formData.totalTeachers}
                  onChange={(e) => handleInputChange("totalTeachers", e.target.value)}
                />
              </Card>
              
              <Card className="p-4 bg-gradient-card border-border shadow-card text-center">
                <School className="h-8 w-8 text-warning mx-auto mb-2" />
                <Label htmlFor="classrooms">Nombre de classes</Label>
                <Input 
                  id="classrooms"
                  type="number"
                  placeholder="Ex: 15"
                  className="text-center mt-2"
                  value={formData.classrooms}
                  onChange={(e) => handleInputChange("classrooms", e.target.value)}
                />
              </Card>
            </div>
            
            <Card className="p-6 bg-gradient-card border-border shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Niveaux d'enseignement</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {["SIL", "CP", "CE1", "CE2", "CM1", "CM2", "6ème", "5ème", "4ème", "3ème", "2nde", "1ère", "Tle"].map((level) => (
                  <div key={level} className="flex items-center space-x-2">
                    <input type="checkbox" id={level} className="rounded" />
                    <Label htmlFor={level} className="text-sm">{level}</Label>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <CreditCard className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground">Paramètres de paiement</h2>
              <p className="text-muted-foreground">Configuration des frais scolaires</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-card border-border shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-4">Frais scolaires</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="registrationFee">Frais d'inscription (FCFA)</Label>
                    <Input 
                      id="registrationFee"
                      type="number"
                      placeholder="Ex: 25000"
                      value={formData.registrationFee}
                      onChange={(e) => handleInputChange("registrationFee", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthlyFee">Frais mensuels (FCFA)</Label>
                    <Input 
                      id="monthlyFee"
                      type="number"
                      placeholder="Ex: 15000"
                      value={formData.monthlyFee}
                      onChange={(e) => handleInputChange("monthlyFee", e.target.value)}
                    />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-card border-border shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-4">Modes de paiement acceptés</h3>
                <div className="space-y-3">
                  {[
                    { id: "mobile", label: "Mobile Money (MTN, Orange)" },
                    { id: "bank", label: "Virement bancaire" },
                    { id: "cash", label: "Espèces" },
                    { id: "check", label: "Chèque" }
                  ].map((method) => (
                    <div key={method.id} className="flex items-center space-x-3">
                      <input type="checkbox" id={method.id} className="rounded" />
                      <Label htmlFor={method.id}>{method.label}</Label>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            
            <Card className="p-6 bg-gradient-accent/10 border-accent/20 shadow-card">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Commission LUNION</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    LUNION prélève une commission de <strong>1%</strong> sur chaque paiement traité via la plateforme.
                    Cette commission est automatiquement déduite lors des transactions.
                  </p>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                    <p className="text-sm text-foreground">
                      <strong>Exemple:</strong> Pour un paiement de 25,000 FCFA, l'établissement recevra 24,750 FCFA
                      (25,000 - 250 FCFA de commission)
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <DashboardLayout currentPage="Onboarding">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Progress Steps */}
        <div className="bg-gradient-card border border-border rounded-lg p-6 shadow-card">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                  currentStep >= step.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-muted-foreground'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <step.icon className="h-6 w-6" />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 lg:w-24 h-1 mx-2 ${
                    currentStep > step.id ? 'bg-primary' : 'bg-border'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <h2 className="font-semibold text-foreground">{steps[currentStep - 1].title}</h2>
            <p className="text-sm text-muted-foreground">{steps[currentStep - 1].description}</p>
          </div>
        </div>

        {/* Step Content */}
        <Card className="p-8 bg-gradient-card border-border shadow-card">
          {renderStepContent()}
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Précédent
          </Button>
          
          {currentStep < steps.length ? (
            <Button
              variant="default"
              onClick={handleNext}
            >
              Suivant
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button variant="success">
              Créer l'établissement
              <CheckCircle className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
import { useState } from "react";
import { 
  Plus, 
  School, 
  Users, 
  MapPin, 
  Mail,
  Phone,
  X
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useToast } from "@/hooks/use-toast";

export default function CreateEstablishmentModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    region: "",
    city: "",
    address: "",
    principalName: "",
    principalEmail: "",
    principalPhone: "",
    students: "",
    teachers: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.type || !formData.region) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your API
    toast({
      title: "Établissement créé",
      description: `${formData.name} a été ajouté avec succès.`,
    });

    // Reset form and close modal
    setFormData({
      name: "",
      type: "",
      region: "",
      city: "",
      address: "",
      principalName: "",
      principalEmail: "",
      principalPhone: "",
      students: "",
      teachers: ""
    });
    setOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="gap-2">
          <Plus className="h-4 w-4" />
          Nouvel Établissement
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-card border-border max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <School className="h-5 w-5 text-primary" />
            Créer un Nouvel Établissement
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Ajoutez un nouvel établissement scolaire à la plateforme LUNION.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
              Informations Générales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom de l'établissement *</Label>
                <Input
                  id="name"
                  placeholder="Ex: Lycée Général Leclerc"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Type d'établissement *</Label>
                <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
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
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
              Localisation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <Label htmlFor="city">Ville</Label>
                <Input
                  id="city"
                  placeholder="Ex: Yaoundé"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Adresse complète</Label>
              <Textarea
                id="address"
                placeholder="Adresse détaillée de l'établissement"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
              Contact Principal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="principalName">Nom du directeur</Label>
                <Input
                  id="principalName"
                  placeholder="Ex: Dr. Jean Dupont"
                  value={formData.principalName}
                  onChange={(e) => handleInputChange("principalName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="principalEmail">Email</Label>
                <Input
                  id="principalEmail"
                  type="email"
                  placeholder="directeur@etablissement.cm"
                  value={formData.principalEmail}
                  onChange={(e) => handleInputChange("principalEmail", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="principalPhone">Téléphone</Label>
                <Input
                  id="principalPhone"
                  placeholder="+237 6XX XXX XXX"
                  value={formData.principalPhone}
                  onChange={(e) => handleInputChange("principalPhone", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
              Statistiques
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="students">Nombre d'élèves</Label>
                <Input
                  id="students"
                  type="number"
                  placeholder="Ex: 500"
                  value={formData.students}
                  onChange={(e) => handleInputChange("students", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="teachers">Nombre d'enseignants</Label>
                <Input
                  id="teachers"
                  type="number"
                  placeholder="Ex: 25"
                  value={formData.teachers}
                  onChange={(e) => handleInputChange("teachers", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-6 border-t border-border">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button type="submit" variant="default">
              Créer l'Établissement
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
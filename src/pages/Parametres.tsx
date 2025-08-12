import { useState } from "react";
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Database,
  Palette,
  Globe,
  CreditCard,
  Mail,
  Phone,
  Save,
  Edit,
  Key,
  Eye,
  EyeOff
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export default function Parametres() {
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    // Profile settings
    firstName: "Admin",
    lastName: "LUNION",
    email: "admin@lunion.education",
    phone: "+237 677 123 456",
    bio: "Administrateur système de la plateforme LUNION",
    
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    paymentAlerts: true,
    systemAlerts: false,
    
    // System settings
    maintenanceMode: false,
    autoBackup: true,
    dataRetention: "12months",
    defaultLanguage: "fr",
    timezone: "Africa/Douala",
    
    // Commission settings
    commissionRate: 1.0,
    minimumAmount: 1000,
    maxDailyTransactions: 10000,
    
    // Security
    twoFactorAuth: false,
    sessionTimeout: 30,
    passwordExpiry: 90
  });

  const { toast } = useToast();

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    toast({
      title: "Paramètres sauvegardés",
      description: "Vos modifications ont été enregistrées avec succès.",
    });
  };

  return (
    <DashboardLayout currentPage="Paramètres">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Paramètres</h1>
            <p className="text-muted-foreground mt-1">
              Configuration de la plateforme et de votre compte
            </p>
          </div>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Sauvegarder
          </Button>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="profile">Profil</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="system">Système</TabsTrigger>
            <TabsTrigger value="payments">Paiements</TabsTrigger>
            <TabsTrigger value="security">Sécurité</TabsTrigger>
            <TabsTrigger value="appearance">Apparence</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Informations Personnelles</h3>
                  <p className="text-muted-foreground">Gérez vos informations de profil</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input 
                    id="firstName"
                    value={settings.firstName}
                    onChange={(e) => handleSettingChange("firstName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input 
                    id="lastName"
                    value={settings.lastName}
                    onChange={(e) => handleSettingChange("lastName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="email"
                      type="email"
                      className="pl-10"
                      value={settings.email}
                      onChange={(e) => handleSettingChange("email", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="phone"
                      className="pl-10"
                      value={settings.phone}
                      onChange={(e) => handleSettingChange("phone", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio"
                    placeholder="Décrivez votre rôle..."
                    value={settings.bio}
                    onChange={(e) => handleSettingChange("bio", e.target.value)}
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 bg-warning/10 rounded-full flex items-center justify-center">
                  <Bell className="h-8 w-8 text-warning" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Préférences de Notifications</h3>
                  <p className="text-muted-foreground">Configurez vos alertes et notifications</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Notifications Email</Label>
                    <p className="text-sm text-muted-foreground">Recevoir les notifications par email</p>
                  </div>
                  <Switch 
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => handleSettingChange("emailNotifications", checked)}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Notifications Push</Label>
                    <p className="text-sm text-muted-foreground">Notifications en temps réel dans le navigateur</p>
                  </div>
                  <Switch 
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked) => handleSettingChange("pushNotifications", checked)}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Alertes de Paiements</Label>
                    <p className="text-sm text-muted-foreground">Notifications pour les transactions importantes</p>
                  </div>
                  <Switch 
                    checked={settings.paymentAlerts}
                    onCheckedChange={(checked) => handleSettingChange("paymentAlerts", checked)}
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Alertes Système</Label>
                    <p className="text-sm text-muted-foreground">Notifications de maintenance et mises à jour</p>
                  </div>
                  <Switch 
                    checked={settings.systemAlerts}
                    onCheckedChange={(checked) => handleSettingChange("systemAlerts", checked)}
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* System Tab */}
          <TabsContent value="system" className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 bg-destructive/10 rounded-full flex items-center justify-center">
                  <Database className="h-8 w-8 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Configuration Système</h3>
                  <p className="text-muted-foreground">Paramètres généraux de la plateforme</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="language">Langue par Défaut</Label>
                  <Select value={settings.defaultLanguage} onValueChange={(value) => handleSettingChange("defaultLanguage", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timezone">Fuseau Horaire</Label>
                  <Select value={settings.timezone} onValueChange={(value) => handleSettingChange("timezone", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Africa/Douala">Afrique/Douala</SelectItem>
                      <SelectItem value="Africa/Yaounde">Afrique/Yaoundé</SelectItem>
                      <SelectItem value="UTC">UTC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="retention">Rétention des Données</Label>
                  <Select value={settings.dataRetention} onValueChange={(value) => handleSettingChange("dataRetention", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3months">3 mois</SelectItem>
                      <SelectItem value="6months">6 mois</SelectItem>
                      <SelectItem value="12months">12 mois</SelectItem>
                      <SelectItem value="24months">24 mois</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout">Timeout de Session (min)</Label>
                  <Input 
                    id="sessionTimeout"
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => handleSettingChange("sessionTimeout", parseInt(e.target.value))}
                  />
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Mode Maintenance</Label>
                    <p className="text-sm text-muted-foreground">Désactiver temporairement la plateforme</p>
                  </div>
                  <Switch 
                    checked={settings.maintenanceMode}
                    onCheckedChange={(checked) => handleSettingChange("maintenanceMode", checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Sauvegarde Automatique</Label>
                    <p className="text-sm text-muted-foreground">Sauvegarde quotidienne des données</p>
                  </div>
                  <Switch 
                    checked={settings.autoBackup}
                    onCheckedChange={(checked) => handleSettingChange("autoBackup", checked)}
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments" className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <CreditCard className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Configuration des Paiements</h3>
                  <p className="text-muted-foreground">Paramètres de commission et limites</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="commission">Taux de Commission (%)</Label>
                  <Input 
                    id="commission"
                    type="number"
                    step="0.1"
                    value={settings.commissionRate}
                    onChange={(e) => handleSettingChange("commissionRate", parseFloat(e.target.value))}
                  />
                  <p className="text-xs text-muted-foreground">Actuellement: 1% sur chaque transaction</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="minimum">Montant Minimum (FCFA)</Label>
                  <Input 
                    id="minimum"
                    type="number"
                    value={settings.minimumAmount}
                    onChange={(e) => handleSettingChange("minimumAmount", parseInt(e.target.value))}
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="maxDaily">Limite Transactions Quotidiennes</Label>
                  <Input 
                    id="maxDaily"
                    type="number"
                    value={settings.maxDailyTransactions}
                    onChange={(e) => handleSettingChange("maxDailyTransactions", parseInt(e.target.value))}
                  />
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Modèle de Commission LUNION</h4>
                <p className="text-sm text-muted-foreground">
                  LUNION prélève <strong>{settings.commissionRate}%</strong> sur chaque paiement réussi. 
                  Cette commission est automatiquement déduite et permet de maintenir la plateforme gratuite pour les établissements.
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Sécurité du Compte</h3>
                  <p className="text-muted-foreground">Protection et authentification</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Changer le Mot de Passe</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Mot de passe actuel</Label>
                      <div className="relative">
                        <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="currentPassword"
                          type={showPassword ? "text" : "password"}
                          className="pl-10 pr-10"
                          placeholder="Mot de passe actuel"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                      <div className="relative">
                        <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                          id="newPassword"
                          type="password"
                          className="pl-10"
                          placeholder="Nouveau mot de passe"
                        />
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4">
                    <Key className="h-4 w-4 mr-2" />
                    Changer le mot de passe
                  </Button>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Authentification à Deux Facteurs</Label>
                      <p className="text-sm text-muted-foreground">Protection supplémentaire pour votre compte</p>
                    </div>
                    <Switch 
                      checked={settings.twoFactorAuth}
                      onCheckedChange={(checked) => handleSettingChange("twoFactorAuth", checked)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="passwordExpiry">Expiration mot de passe (jours)</Label>
                    <Input 
                      id="passwordExpiry"
                      type="number"
                      value={settings.passwordExpiry}
                      onChange={(e) => handleSettingChange("passwordExpiry", parseInt(e.target.value))}
                    />
                    <p className="text-xs text-muted-foreground">Le mot de passe devra être changé tous les {settings.passwordExpiry} jours</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Appearance Tab */}
          <TabsContent value="appearance" className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 bg-success/10 rounded-full flex items-center justify-center">
                  <Palette className="h-8 w-8 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Apparence</h3>
                  <p className="text-muted-foreground">Personnalisation de l'interface</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Thème de Couleur</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 border border-border rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors">
                      <div className="w-full h-20 bg-gradient-primary rounded mb-2"></div>
                      <p className="text-sm font-medium text-center">Défaut</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors">
                      <div className="w-full h-20 bg-gradient-accent rounded mb-2"></div>
                      <p className="text-sm font-medium text-center">Vert</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors">
                      <div className="w-full h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded mb-2"></div>
                      <p className="text-sm font-medium text-center">Violet</p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Logo de la Plateforme</h4>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">L</span>
                    </div>
                    <div>
                      <Button variant="outline">
                        <Edit className="h-4 w-4 mr-2" />
                        Changer le logo
                      </Button>
                      <p className="text-xs text-muted-foreground mt-1">
                        Format recommandé: PNG, 256x256px
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
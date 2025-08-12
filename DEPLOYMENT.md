# Guide de Déploiement - LUNION Education

## 🚀 Options de Déploiement

### 1. Vercel (Recommandé)

#### Étapes :
1. **Installer Vercel CLI** :
   ```bash
   npm install -g vercel
   ```

2. **Se connecter à Vercel** :
   ```bash
   vercel login
   ```

3. **Déployer** :
   ```bash
   vercel
   ```

4. **Ou déployer en production** :
   ```bash
   vercel --prod
   ```

#### Avantages :
- ✅ Déploiement automatique depuis GitHub
- ✅ CDN global
- ✅ Domaine personnalisé gratuit
- ✅ Optimisé pour React/Vite
- ✅ SSL automatique

---

### 2. Netlify

#### Étapes :
1. **Installer Netlify CLI** :
   ```bash
   npm install -g netlify-cli
   ```

2. **Se connecter** :
   ```bash
   netlify login
   ```

3. **Déployer** :
   ```bash
   netlify deploy --prod --dir=dist
   ```

#### Avantages :
- ✅ Interface web intuitive
- ✅ Formulaires intégrés
- ✅ CDN global
- ✅ Domaine personnalisé gratuit

---

### 3. GitHub Pages

#### Étapes :
1. **Ajouter dans package.json** :
   ```json
   "homepage": "https://votre-username.github.io/votre-repo",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

2. **Installer gh-pages** :
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Déployer** :
   ```bash
   npm run deploy
   ```

---

### 4. Firebase Hosting

#### Étapes :
1. **Installer Firebase CLI** :
   ```bash
   npm install -g firebase-tools
   ```

2. **Se connecter** :
   ```bash
   firebase login
   ```

3. **Initialiser** :
   ```bash
   firebase init hosting
   ```

4. **Déployer** :
   ```bash
   firebase deploy
   ```

---

## 🔧 Configuration Avancée

### Variables d'Environnement
Créer un fichier `.env.production` :
```env
VITE_API_URL=https://votre-api.com
VITE_APP_NAME=LUNION Education
```

### Optimisations
- ✅ Code splitting automatique avec Vite
- ✅ Compression gzip
- ✅ Cache des assets statiques
- ✅ Routing SPA configuré

### Domaine Personnalisé
1. Acheter un domaine (OVH, Namecheap, etc.)
2. Configurer les DNS vers votre plateforme
3. Ajouter le domaine dans les paramètres de déploiement

---

## 📊 Monitoring

### Vercel Analytics
```bash
npm install @vercel/analytics
```

### Google Analytics
Ajouter dans `index.html` :
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

---

## 🚨 Sécurité

### Headers de Sécurité
Le fichier `vercel.json` inclut déjà :
- Cache-Control pour les assets
- Rewrites pour le routing SPA

### Recommandations :
- ✅ Utiliser HTTPS
- ✅ Configurer CSP (Content Security Policy)
- ✅ Valider les entrées utilisateur
- ✅ Mettre à jour les dépendances régulièrement

---

## 📞 Support

En cas de problème :
1. Vérifier les logs de build
2. Tester en local : `npm run build && npm run preview`
3. Consulter la documentation de la plateforme choisie

---

## 🎯 Prochaines Étapes

1. **Choisir une plateforme** (Vercel recommandé)
2. **Créer un compte** sur la plateforme
3. **Connecter votre repository GitHub**
4. **Configurer le déploiement automatique**
5. **Ajouter un domaine personnalisé**
6. **Configurer les analytics**
7. **Mettre en place le monitoring**

Votre application LUNION Education sera alors accessible en ligne ! 🎉

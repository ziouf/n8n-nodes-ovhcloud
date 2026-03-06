# n8n-nodes-ovhcloud

Ce projet est un nœud communautaire n8n qui permet d'intégrer les services OVH Cloud dans vos workflows n8n.

[n8n](https://n8n.io/) est une plateforme d'automatisation de workflows sous [licence fair-code](https://docs.n8n.io/sustainable-use-license/).

## Table des matières

- [Installation](#installation)
- [Opérations](#opérations)
- [Identifiants](#identifiants)
- [Compatibilité](#compatibilité)
- [Développement](#développement)
- [License](#license)
- [Ressources](#ressources)

## Installation

Suivez le [guide d'installation](https://docs.n8n.io/integrations/community-nodes/installation/) dans la documentation des nœuds communautaires n8n.

### Installation via l'interface n8n

1. Allez dans **Settings** > **Community Nodes**
2. Sélectionnez **Install**
3. Entrez `n8n-nodes-ovhcloud` dans le champ de recherche
4. Cliquez sur **Install**

### Installation manuelle

```bash
npm install n8n-nodes-ovhcloud
```

## Opérations

### Services

- **List Services** - Liste tous les services disponibles
  - Filtrage par nom de service
  - Filtrage par route
  - Tri par Service ID (ascendant/descendant)
  
- **Get Service** - Récupère un service spécifique par son ID
  - Supporte plusieurs types de services : Dedicated Server, Domain, Email, Hosting, etc.

### Domaines (en développement)

- **List Domains** - Liste tous les domaines
- **Get Domain** - Récupère un domaine spécifique par son ID

## Identifiants

Ce nœud utilise l'authentification par clés API OVH. Vous devez créer une application et obtenir vos clés d'accès.

### Configuration des identifiants

1. Rendez-vous sur le portail de création d'applications OVH selon votre région :
   - Europe : https://eu.api.ovh.com/createApp/
   - Canada : https://ca.api.ovh.com/createApp/
   - USA : https://api.us.ovhcloud.com/createApp/

2. Remplissez les informations requises :
   - **Application name** : Nom descriptif (ex: "n8n integration")
   - **Application description** : Description de votre application

3. Récupérez vos clés :
   - **Application Key** : Votre clé d'application
   - **Application Secret** : Votre secret d'application

4. Générez un **Consumer Key** :
   - Utilisez le script de génération ou créez une requête vers `/auth/credential`
   - Définissez les droits d'accès nécessaires pour vos workflows

5. Dans n8n, créez un nouveau credential "OVH API" et renseignez :
   - **Endpoint** : Sélectionnez votre région (OVH Europe, Canada, USA, etc.)
   - **Application Key**
   - **Application Secret**
   - **Consumer Key**

### Droits d'accès recommandés

Pour utiliser toutes les fonctionnalités du nœud, les droits suivants sont recommandés :

```
GET /services
GET /services/*
GET /domain
GET /hosting/web
```

Référez-vous à la [documentation API OVH](https://api.ovh.com/console/) pour plus d'informations sur les endpoints et les droits d'accès.

## Compatibilité

Compatible avec n8n@1.60.0 ou ultérieur

## Développement

### Prérequis

- Node.js (version recommandée dans le dev container)
- npm

### Installation des dépendances

```bash
npm install
```

### Scripts disponibles

```bash
# Compilation du projet
npm run build

# Compilation en mode watch
npm run build:watch

# Démarrage en mode développement
npm run dev

# Vérification du code (linting)
npm run lint

# Correction automatique du linting
npm run lint:fix

# Publication d'une nouvelle version
npm run release
```

### Structure du projet

```
.
├── credentials/          # Configuration des identifiants
│   └── OvhCloudApi.credentials.ts
├── nodes/               # Nœuds n8n
│   └── OvhCloud/
│       ├── OvhCloud.node.ts
│       ├── listSearch/  # Fonctions de recherche
│       └── resources/   # Ressources (services, domaines, etc.)
├── icons/              # Icônes du nœud
└── dist/               # Fichiers compilés
```

### Ajout d'une nouvelle ressource

1. Créez un nouveau dossier dans `nodes/OvhCloud/resources/`
2. Implémentez les opérations dans des fichiers séparés (list.ts, get.ts, etc.)
3. Créez un fichier index.ts pour exporter les descriptions et méthodes
4. Ajoutez la ressource dans `nodes/OvhCloud/OvhCloud.node.ts`

### Tests

Pour tester votre nœud localement :

1. Lancez n8n en mode développement :
   ```bash
   npm run dev
   ```

2. n8n sera accessible à l'adresse indiquée dans la console

3. Créez un nouveau workflow et ajoutez le nœud "OVH Cloud"

## License

[MIT License](LICENSE)

Copyright (c) 2026 Cyril MARIN

## Ressources

- [Documentation des nœuds communautaires n8n](https://docs.n8n.io/integrations/#community-nodes)
- [Documentation API OVH](https://api.ovh.com/)
- [Console API OVH](https://api.ovh.com/console/)
- [Guide de création d'application OVH](https://help.ovhcloud.com/csm/en-manage-ovhcloud-api-tokens?id=kb_article_view&sysparm_article=KB0042784)

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## Support

Pour toute question ou problème :

- Ouvrez une [issue](https://github.com/ziouf/n8n-nodes-ovhcloud/issues) sur GitHub
- Contactez l'auteur : marin.cyril@gmail.com

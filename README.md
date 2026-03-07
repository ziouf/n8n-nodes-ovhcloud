# n8n-nodes-ovhcloud

Nœud communautaire n8n pour interagir avec les APIs OVHcloud.

[n8n](https://n8n.io/) est une plateforme d’automatisation de workflows sous [licence fair-code](https://docs.n8n.io/sustainable-use-license/).

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Configuration des credentials OVH](#configuration-des-credentials-ovh)
- [Opérations disponibles](#opérations-disponibles)
- [Compatibilité](#compatibilité)
- [Développement](#développement)
- [Contribution](#contribution)
- [Licence](#licence)
- [Ressources](#ressources)

## Fonctionnalités

- Ressource **Services** : lister les services et récupérer un service par ID
- Ressource **Me** : informations du compte, factures, dette, commandes
- Authentification OVH via signature (`Application Key`, `Application Secret`, `Consumer Key`)
- Support multi-endpoints : OVH Europe/Canada/USA, SoYouStart, Kimsufi

## Installation

Suivez le [guide d'installation des community nodes n8n](https://docs.n8n.io/integrations/community-nodes/installation/).

### Depuis l’interface n8n

1. Ouvrez **Settings** > **Community Nodes**
2. Cliquez sur **Install**
3. Recherchez `n8n-nodes-ovhcloud`
4. Installez le package

### Installation manuelle

```bash
npm install n8n-nodes-ovhcloud
```

## Configuration des credentials OVH

Le nœud utilise le credential **OVH API** avec :

- `Endpoint`
- `Application Key`
- `Application Secret`
- `Consumer Key`

Portails de création d’application OVHcloud :

- Europe : https://eu.api.ovh.com/createApp/
- Canada : https://ca.api.ovh.com/createApp/
- USA : https://api.us.ovhcloud.com/createApp/

### Permissions API recommandées

```text
GET /me
GET /me/bill
GET /me/bill/*
GET /me/debtAccount
GET /me/order
GET /me/order/*
GET /services
GET /services/*
```

## Opérations disponibles

### Resource: Services

- **List Services**
   - Tri par `serviceId` (asc/desc)
   - Filtre par nom de service (`resourceName`)
   - Filtre par route (`routes`, liste séparée par virgules)
- **Get Service**
   - Sélection du type de service (Dedicated Server, Domain, Email, Hosting, ...)
   - Sélection du service depuis une liste dynamique

### Resource: Me

- **Sub-resource Me**
   - **Get My Info** (`GET /me`)
- **Sub-resource Bills**
   - **List Bills** (`GET /me/bill` puis détails)
   - Filtres disponibles : catégorie, `date.from`, `date.to`, `orderId`
- **Sub-resource Debt Account**
   - **Get Debt Account** (`GET /me/debtAccount`)
- **Sub-resource Orders**
   - **Get Order** (liste + détails via `GET /me/order` et `GET /me/order/{id}`)
   - Filtres disponibles : `date.from`, `date.to`

### Resource: Domain

- **List Domains**
- **Get Domain**

Statut actuel : ces opérations sont déclarées mais pas encore implémentées.

## Compatibilité

- n8n `>= 1.60.0`

## Développement

### Prérequis

- Node.js
- npm

### Installation des dépendances

```bash
npm install
```

### Scripts

```bash
npm run build
npm run build:watch
npm run dev
npm run lint
npm run lint:fix
npm run release
```

### Structure du projet

```text
.
├── credentials/
│   └── OvhCloudApi.credentials.ts
├── nodes/
│   └── OvhCloud/
│       ├── OvhCloud.node.ts
│       ├── listSearch/
│       └── resources/
│           ├── services/
│           ├── domain/
│           └── me/
├── icons/
└── dist/
```

## Contribution

Les contributions sont bienvenues.

1. Fork du dépôt
2. Création d’une branche (`git checkout -b feature/ma-feature`)
3. Commit (`git commit -m "feat: ..."`)
4. Push
5. Ouverture d’une Pull Request

## Licence

[MIT](LICENSE)

Copyright (c) 2026 Cyril MARIN

## Ressources

- [Documentation n8n community nodes](https://docs.n8n.io/integrations/#community-nodes)
- [Documentation API OVHcloud](https://api.ovh.com/)
- [API Console OVHcloud](https://api.ovh.com/console/)
- [Guide OVHcloud - API tokens](https://help.ovhcloud.com/csm/en-manage-ovhcloud-api-tokens?id=kb_article_view&sysparm_article=KB0042784)

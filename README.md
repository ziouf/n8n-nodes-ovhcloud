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

- Ressource **Services** : lister les services, récupérer un service par ID, obtenir les formulaires, options et upgrades disponibles
- Ressource **Me** : informations du compte, factures, dette, commandes
- Ressource **Email** : lister les domaines email, obtenir les détails d'un domaine email
- Ressource **VPS** : lister les VPS, obtenir les détails d'un VPS, lister les datacenters, créer des snapshots, gérer les disques
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
GET /email/domain
GET /email/domain/*
GET /vps
GET /vps/*
GET /vps/*/snapshot
POST /vps/*/snapshot
GET /vps/*/disks
GET /vps/*/disks/*
GET /dedicated/ceph/*
GET /dedicated/cluster/*
GET /dedicated/housing/*
GET /dedicated/server/*
GET /domain/*
GET /email/pro/*
GET /hosting/web/*
```

## Opérations disponibles

### Resource: Services

- **List Services**
   - Tri par `serviceId` (asc/desc)
   - Filtre par nom de service (`resourceName`)
   - Filtre par route (`routes`, liste séparée par virgules)
- **Get Service**
   - Sélection du type de service (Dedicated Ceph, Dedicated Cluster, Dedicated Housing, Dedicated Server, Domain, Email, Email Pro, Hosting)
   - Sélection du service depuis une liste dynamique
- **Get Service Forms**
   - Récupère les formulaires disponibles pour un service spécifique
- **Get Service Options**
   - Récupère les options disponibles pour un service spécifique
- **Get Service Upgrades**
   - Liste les offres vers lesquelles un service peut être converti

### Resource: Me

- **Sub-resource Me**
   - **Get My Info** (`GET /me`) : informations du compte authentifié
- **Sub-resource Bills**
   - **List Bills** : liste toutes les factures avec détails
   - **Get Bill** : récupère une facture spécifique par ID
   - Filtres disponibles : catégorie (autorenew, earlyrenewal, purchase, purchase-cloud, purchase-servers, purchase-telecom, purchase-web), `orderId`
- **Sub-resource Debt Account**
   - **Get Debt Account** (`GET /me/debtAccount`) : informations sur le compte de dette
- **Sub-resource Orders**
   - **List Orders** : liste toutes les commandes
   - **Get Order** : récupère une commande spécifique par ID
   - Filtres disponibles : `date.from`, `date.to`

### Resource: Email

- **List Domains**
   - Liste tous les domaines email disponibles
- **Get Domain**
   - Récupère les détails d'un domaine email spécifique
   - Sélection du domaine depuis une liste dynamique ou saisie manuelle

### Resource: VPS

- **List VPS**
   - Liste tous les VPS disponibles
- **List Datacenters**
   - Liste tous les datacenters disponibles pour l'utilisateur authentifié
- **Get VPS Details**
   - Récupère les détails d'un VPS spécifique
   - Sous-ressources disponibles : Automated Backup, Available Upgrade, Backup FTP, Datacenter, Disks, Distribution, IP Country Available, IPs, Models, Option, Secondary DNS Domains, Service Infos, Snapshot, Status, VPS
   - **Disks Operations** :
     - List Disks : liste tous les disques d'un VPS
     - Get Disk : récupère les détails d'un disque spécifique
- **Create VPS Snapshot**
   - Crée un snapshot d'un VPS
   - Description personnalisable du snapshot

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
│   ├── OvhCloudApi.credentials.ts
│   └── OvhCloudApi.credentials.js
├── nodes/
│   └── OvhCloud/
│       ├── OvhCloud.node.ts
│       ├── resources/
│       │   ├── email.ts
│       │   ├── me.ts
│       │   ├── services.ts
│       │   └── vps.ts
│       └── shared/
│           └── OvhCloudApiClient.ts
├── icons/
│   ├── ovh.svg
│   └── ovh_vertical.svg
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

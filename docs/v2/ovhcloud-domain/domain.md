# OVH Cloud Domain Node — Documentation Technique

**Node Name**: `ovhCloudDomain`  
**API Version**: v1 (GET scope only)  
**Base Path**: `/domain`

Ce nœud n8n permet de gérer les ressources de domaine OVHcloud via l'API REST v1, en implémentant toutes les opérations GET disponibles.

## Table des Matières

- [Installation](#installation)
- [Configuration des Identifiants](#configuration-des-identifiants)
- [Opérations Disponibles](#opérations-disponibles)
  - [Domaines (Root)](#domaines-root)
  - [Extensions de Domaines](#extensions-de-domaines)
  - [Contacts](#contacts)
  - [Sous-Ressources Domain](#sous-ressources-domain)
  - [Zones DNS](#zones-dns)
- [Exemples d'Utilisation](#exemples-d-utilisation)
- [Gestion des Erreurs](#gestion-des-erreurs)
- [Tests Non-Régression](#tests-non-régression)

---

## Installation

Le node `OvhCloudDomain` fait partie du package principal `n8n-nodes-ovhcloud`. Il est installé automatiquement lors de l'installation du package.

```bash
npm install n8n-nodes-ovhcloud
```

Une fois installé, le node apparaît dans la liste des nodes OVH Cloud dans n8n sous le nom **OVH Cloud Domain**.

---

## Configuration des Identifiants

Le node nécessite un credential de type `OvhCloudApi` configuré avec :

| Champ                   | Description                          | Exemple             |
| ----------------------- | ------------------------------------ | ------------------- |
| Application Key (AK)    | Clé d'application OVHcloud           | `your-app-key`      |
| Application Secret (AS) | Secret d'application OVHcloud        | `your-app-secret`   |
| Consumer Key (CK)       | Clé consommateur pour l'autorisation | `your-consumer-key` |

Consultez [la documentation de référence](../_shared/authentication.md) pour obtenir ces identifiants.

---

## Opérations Disponibles

Le node propose un paramètre unique **Operation** (`domainOperation`) qui permet de sélectionner parmi toutes les opérations GET disponibles. Chaque opération a sa propre configuration via des paramètres conditionnels affichés uniquement quand l'opération correspondante est sélectionnée.

### Domaines (Root)

| Operation        | Endpoint API  | Description                                                                                                                            |
| ---------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **List Domains** | `GET /domain` | Liste tous les domaines gérés dans le compte OVHcloud. Les résultats sont auto-paginé et mappés en objets complets via `/domain/{id}`. |

### Extensions de Domaines

| Operation                          | Endpoint API                        | Description                                                                                                           |
| ---------------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **List Domains** (extensions)      | `GET /domain/extensions`            | Liste toutes les extensions de domaine disponibles (ex: `.com`, `.eu.org`). Auto-paginé et mappé en objets complets.  |
| **Get Domain Details** (extension) | `GET /domain/extensions/{name}`     | Récupère les détails d'une extension spécifique via son nom (resourceLocator).                                        |
| **Extension By Category**          | `GET /domain/extensions/byCategory` | Liste les extensions groupées par catégorie (thematique, geolocalization, etc.). Paramètre optionnel: `categoryType`. |

### Contacts

| Operation         | Endpoint API          | Description                                                                                               |
| ----------------- | --------------------- | --------------------------------------------------------------------------------------------------------- |
| **List Contacts** | `GET /domain/contact` | Liste tous les contacts associés au compte OVHcloud. Retourne un tableau d'objets complets (`Contact[]`). |

### Sous-Ressources Domain

Ces opérations nécessitent un paramètre **Domain Service Name** (resourceLocator) qui identifie le domaine cible via son nom de service (ex: `example.eu.org`). Les modes disponibles sont :

- **From List**: sélectionne depuis une liste déroulante auto-paginée
- **By Name**: saisit manuellement le nom du service

| Operation                     | Endpoint API                                        | Description                                                                                                                                                                              |
| ----------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Get Domain Details** (root) | `GET /domain/{serviceName}`                         | Récupère les informations complètes d'un domaine via son ID de service. Retourne un objet `DomainServiceWithIAM`.                                                                        |
| **Auth Info Get**             | `GET /domain/{serviceName}/authInfo`                | Retourne le code authInfo (password) si le domaine est déverrouillé. Paramètres query optionnels: `flags`, `status`.                                                                     |
| **DS Record List**            | `GET /domain/{serviceName}/dsRecord?flags=&status=` | Liste les enregistrements DS du domaine via pagination + fetch individuel par ID pour mapper en objets complets (`Key[]`). Paramètres query optionnels: `flags` (enum), `status` (enum). |
| **Name Server List**          | `GET /domain/{serviceName}/nameServer`              | Liste tous les name servers du domaine via pagination + fetch individuel par ID pour mapper en objets complets (`FullNameserver[]`).                                                     |

### Zones DNS

Ces opérations nécessitent un paramètre **Zone Name** (resourceLocator) qui identifie la zone DNS cible. Les modes disponibles sont :

- **From List**: sélectionne depuis une liste déroulante auto-paginée des zones DNS du compte
- **By Name**: saisit manuellement le nom de la zone (ex: `example.com`)

| Operation                   | Endpoint API                                         | Description                                                                                                                                                                                       |
| --------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Zone List**               | `GET /domain/zone`                                   | Liste toutes les zones DNS disponibles. Auto-paginé et mappé en objets complets via `/domain/zone/{id}`.                                                                                          |
| **Service Info Get** (zone) | `GET /domain/zone/{zoneName}/serviceInfos`           | Récupère les informations de service d'une zone DNS spécifique. Retourne un objet `services.Service`.                                                                                             |
| **SOA Get**                 | `GET /domain/zone/{zoneName}/soa`                    | Récupère le record SOA (Start of Authority) de la zone. Retourne un objet `Soa`.                                                                                                                  |
| **Status Get**              | `GET /domain/zone/{zoneName}/status`                 | Récupère le statut actuel de la zone DNS. Retourne un objet `Status`.                                                                                                                             |
| **Task List Get** (zone)    | `GET /domain/zone/{zoneName}/task?function=&status=` | Liste toutes les tâches associées à une zone via pagination + fetch individuel par ID pour mapper en objets complets (`Task[]`). Paramètres query optionnels: `function` (enum), `status` (enum). |
| **Task Get** (zone)         | `GET /domain/zone/{zoneName}/task/{id}`              | Récupère les détails d'une tâche spécifique via son ID. Retourne un objet `Task`. Paramètres path: zoneName + taskId.                                                                             |

---

## Exemples d'Utilisation

### Lister tous les domaines gérés

1. Ajouter le node **OVH Cloud Domain** dans votre workflow n8n
2. Sélectionner l'opération **List Domains** depuis le dropdown Operation
3. Cliquer sur "Execute Node" — la liste des domaines sera disponible en sortie du node

### Récupérer les détails d'un domaine spécifique

1. Ajouter le node **OVH Cloud Domain** dans votre workflow n8n
2. Sélectionner l'opération **Get Domain Details (root)** depuis le dropdown Operation
3. Dans le paramètre **Domain Service Name**, sélectionner un nom de service via :
   - Le mode **From List** pour choisir parmi une liste déroulante auto-paginée, ou
   - Le mode **By Name** en saisissant manuellement l'identifiant du domaine (ex: `example.eu.org`)
4. Cliquer sur "Execute Node" — les détails complets du domaine seront disponibles en sortie

### Lister les contacts associés au compte

1. Ajouter le node **OVH Cloud Domain** dans votre workflow n8n
2. Sélectionner l'opération **List Contacts** depuis le dropdown Operation
3. Aucun paramètre supplémentaire requis (l'endpoint retourne directement un tableau d'objets `Contact[]`)
4. Cliquer sur "Execute Node" — la liste des contacts sera disponible en sortie

### Récupérer les informations de service d'une zone DNS

1. Ajouter le node **OVH Cloud Domain** dans votre workflow n8n
2. Sélectionner l'opération **Service Info Get (zone)** depuis le dropdown Operation
3. Dans le paramètre **Zone Name**, sélectionner une zone via :
   - Le mode **From List** pour choisir parmi les zones DNS disponibles, ou
   - Le mode **By Name** en saisissant manuellement le nom de la zone (ex: `example.com`)
4. Cliquer sur "Execute Node" — les informations complètes du service de zone seront disponibles en sortie

---

## Gestion des Erreurs

Le node utilise l'erreur standard `NodeApiError` pour signaler toutes les erreurs renvoyées par l'API OVHcloud. Les codes d'erreur HTTP retournés incluent :

| Code | Description                                                                                |
| ---- | ------------------------------------------------------------------------------------------ |
| 401  | Authentification invalide ou expirée (vérifiez vos identifiants)                           |
| 403  | Accès refusé — vérifiez les permissions IAM associées à votre Consumer Key                 |
| 404  | Ressource introuvable (nom de service ou zone incorrect)                                   |
| 429  | Limitation du débit API — le node gère automatiquement la réessai avec backoff exponentiel |

Consultez [la documentation complète sur les erreurs](../_shared/error-handling.md) pour plus d'informations.

---

## Tests Non-Régression

Le nœud est couvert par des tests de non-régression qui vérifient que chaque opération `.operation.ts` appelle l'endpoint API correct (méthode + chemin URL) tel que défini dans `docs/api-specs/v1/domain.json`, sans tester les internals de n8n.

### Exécution des Tests

```bash
npm test -- tests/domain-lot1.test.ts
```

Ces tests couvrent :

- Les appels API pour toutes les opérations GET implémentées (20 au total)
- La validation que les paramètres query requis sont bien passés dans la requête
- Le respect des patterns d'URL définis par l'API spec OVHcloud v1

---

## Notes Techniques

### Pagination Automatique

Les opérations retournant un tableau d'IDs (`string[]` ou `long[]`) utilisent automatiquement la pagination via `client.paginateResources()` :

- Récupère tous les IDs via `/domain/...?offset=&limit=` jusqu'à épuisement (max 1000 items par défaut)
- Fetch chaque ID individuellement sur son endpoint correspondant pour obtenir l'objet complet

### Type Safety

Toutes les fonctions d'exécution sont typées avec TypeScript strict mode. Les réponses API sont castées en `IDataObject[]` via `this.helpers.returnJsonArray()` pour garantir la compatibilité avec le framework n8n tout en préservant la sécurité des types au niveau de l'API client.

---

## Voir Aussi

- [Documentation complète du projet](../README.md)
- [Spécifications API v1 (JSON)](../../api-specs/v1/domain.json)
- [Types communs partagés](../_shared/common-models.md)
- [Sécurité & gestion des identifiants](../_shared/security.md)

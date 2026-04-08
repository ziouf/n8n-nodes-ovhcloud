# API OVHcloud CDN - Documentation Technique

## Vue d'ensemble

Cette API permet de gérer le service CDN ANYCAST d'OVHcloud. Elle offre des fonctionnalités complètes pour la configuration, la surveillance et l'administration des services CDN.

**Version de l'API**: 1.0  
**Base Path**: `https://eu.api.ovh.com/v1`  
**Resource Path**: `/cdn/dedicated`

---

## Authentification

La plupart des endpoints nécessitent une authentification via les clés API OVHcloud. Certains endpoints sont accessibles sans authentification (`noAuthentication: true`).

- **applicationKey**: Clé d'application
- **applicationSecret**: Secret d'application
- **consumerKey**: Clé de consommateur

---

## Modèles de Données (Models)

### Anycast

L'objet principal représentant un service CDN ANYCAST.

| Propriété                 | Type     | Description                              | Lecture seule |
| ------------------------- | -------- | ---------------------------------------- | ------------- |
| `anycast`                 | ipv4     | Adresse IP ANYCAST du CDN                | ✅            |
| `backendLimit`            | long     | Limite de backends autorisés             | ✅            |
| `backendUse`              | long     | Nombre de backends utilisés              | ✅            |
| `cacheRuleLimitPerDomain` | long     | Limite de règles de cache par domaine    | ✅            |
| `lastQuotaOrder`          | datetime | Dernière commande de quota               | ✅            |
| `logUrl`                  | string   | URL pour télécharger les logs quotidiens | ✅            |
| `offer`                   | string   | Nom interne de l'offre CDN               | ✅            |
| `quota`                   | long     | Quota actuel                             | ✅            |
| `service`                 | string   | Nom interne de l'offre CDN               | ✅            |

### AnycastWithIAM

Version enrichie d'Anycast avec métadonnées IAM.

| Propriété                 | Type             | Description                              | Lecture seule |
| ------------------------- | ---------------- | ---------------------------------------- | ------------- |
| `anycast`                 | ipv4             | Adresse IP ANYCAST du CDN                | ✅            |
| `backendLimit`            | long             | Limite de backends autorisés             | ✅            |
| `backendUse`              | long             | Nombre de backends utilisés              | ✅            |
| `cacheRuleLimitPerDomain` | long             | Limite de règles de cache par domaine    | ✅            |
| `iam`                     | ResourceMetadata | Métadonnées IAM du ressource             | ✅            |
| `lastQuotaOrder`          | datetime         | Dernière commande de quota               | ✅            |
| `logUrl`                  | string           | URL pour télécharger les logs quotidiens | ✅            |
| `offer`                   | string           | Nom interne de l'offre CDN               | ✅            |
| `quota`                   | long             | Quota actuel                             | ✅            |
| `service`                 | string           | Nom interne de l'offre CDN               | ✅            |

### Backend

Représente un backend configuré pour un domaine.

| Propriété | Type | Description           | Lecture seule |
| --------- | ---- | --------------------- | ------------- |
| `ip`      | ipv4 | Adresse IP du backend | ✅            |

### CacheRule

Règle de cache associée à un domaine.

| Propriété     | Type                   | Description                                         | Lecture seule |
| ------------- | ---------------------- | --------------------------------------------------- | ------------- |
| `cacheRuleId` | long                   | Identifiant de la règle de cache                    | ✅            |
| `cacheType`   | CacheRuleCacheTypeEnum | Type de cache (forceCache, noCache)                 | ✅            |
| `domain`      | string                 | Domaine associé                                     | ✅            |
| `fileMatch`   | string                 | Correspondance de fichier                           | ✅            |
| `fileType`    | CacheRuleFileTypeEnum  | Type de fichier (extension, file, folder)           | ✅            |
| `status`      | CacheRuleStatusEnum    | État (creating, deleting, error, off, on, updating) | ❌            |
| `ttl`         | long                   | Durée de vie du cache (TTL)                         | ❌            |

### Domain

Domaine configuré sur le CDN.

| Propriété      | Type             | Description                     | Lecture seule |
| -------------- | ---------------- | ------------------------------- | ------------- |
| `cacheRuleUse` | long             | Utilisation des règles de cache | ✅            |
| `cname`        | string           | Enregistrement CNAME            | ✅            |
| `domain`       | string           | Nom de domaine                  | ✅            |
| `status`       | DomainStatusEnum | État (error, off, on, removing) | ❌            |
| `type`         | DomainTypeEnum   | Type (plain, ssl)               | ✅            |

### LogsURL

URL générée pour l'accès aux logs en temps réel.

| Propriété        | Type     | Description                | Lecture seule |
| ---------------- | -------- | -------------------------- | ------------- |
| `expirationDate` | datetime | Date d'expiration de l'URL | ❌            |
| `url`            | string   | URL des logs               | ❌            |

### Pop

Point de présence (POP) CDN.

| Propriété | Type          | Description                        | Lecture seule |
| --------- | ------------- | ---------------------------------- | ------------- |
| `city`    | string        | Ville du POP                       | ✅            |
| `comment` | string        | Commentaire                        | ✅            |
| `name`    | string        | Nom du POP                         | ✅            |
| `status`  | PopStatusEnum | État (down, ok, rerouted, unknown) | ✅            |

### Ssl

Certificat SSL configuré sur le CDN.

| Propriété              | Type         | Description                                                              | Lecture seule |
| ---------------------- | ------------ | ------------------------------------------------------------------------ | ------------- |
| `certificateProvider`  | string       | Fournisseur du certificat                                                | ✅            |
| `certificateValidFrom` | datetime     | Date de début de validité                                                | ✅            |
| `certificateValidTo`   | datetime     | Date de fin de validité                                                  | ✅            |
| `cn`                   | string       | Common Name du certificat                                                | ✅            |
| `name`                 | string       | Nom du certificat SSL                                                    | ✅            |
| `status`               | SslStateEnum | État (checking, creating, error, off, on, removing, updating, uploading) | ✅            |

### Task

Tâche asynchrone associée à une opération CDN.

| Propriété  | Type             | Description                                                                                                    | Lecture seule |
| ---------- | ---------------- | -------------------------------------------------------------------------------------------------------------- | ------------- |
| `comment`  | string           | Commentaire de la tâche                                                                                        | ✅            |
| `function` | TaskFunctionEnum | Fonction (flush, flushAll, generateSsl, installSsl, reinstallSsl, removeDomain, uninstallSsl, updateCacheRule) | ✅            |
| `status`   | TaskStateEnum    | État (cancelled, doing, done, error, todo)                                                                     | ✅            |
| `taskId`   | long             | Identifiant de la tâche                                                                                        | ✅            |

### Service

Informations détaillées sur un service.

| Propriété               | Type            | Description                                                              | Lecture seule |
| ----------------------- | --------------- | ------------------------------------------------------------------------ | ------------- |
| `canDeleteAtExpiration` | boolean         | Suppression possible à l'expiration                                      | ✅            |
| `contactAdmin`          | string          | Contact administrateur                                                   | ✅            |
| `contactBilling`        | string          | Contact facturation                                                      | ✅            |
| `contactTech`           | string          | Contact technique                                                        | ✅            |
| `creation`              | date            | Date de création                                                         | ✅            |
| `domain`                | string          | Domaine du service                                                       | ✅            |
| `engagedUpTo`           | date            | Date d'engagement                                                        | ✅            |
| `expiration`            | date            | Date d'expiration                                                        | ✅            |
| `possibleRenewPeriod`   | long[]          | Périodes de renouvellement possibles                                     | ✅            |
| `renew`                 | RenewType       | Mode de renouvellement                                                   | ❌            |
| `renewalType`           | RenewalTypeEnum | Type de renouvellement                                                   | ✅            |
| `serviceId`             | long            | Identifiant du service                                                   | ✅            |
| `status`                | StateEnum       | État (autorenewInProgress, expired, inCreation, ok, pendingDebt, unPaid) | ✅            |

---

## Endpoints API

### 1. Liste des services disponibles

| Méthode                               | Endpoint         | Description                            | Authentification |
| ------------------------------------- | ---------------- | -------------------------------------- | ---------------- |
| GET                                   | `/cdn/dedicated` | Liste les services ANYCAST disponibles | Requise          |
| **Paramètres**: `iamTags` (optionnel) |
| **Réponse**: `string[]`               |

#### Paramètres

- **iamTags** (query, map[string][]iam.resource.TagFilter) - Filtre les ressources par tags IAM

#### IAM Actions

- `cdn:apiovh:get` (Requis)

---

### 2. Liste des types de logs disponibles

| Méthode                 | Endpoint                  | Description                         | Authentification |
| ----------------------- | ------------------------- | ----------------------------------- | ---------------- |
| GET                     | `/cdn/dedicated/log/kind` | Liste les types de logs disponibles | Requise          |
| **Réponse**: `string[]` |

#### IAM Actions

- `cdn:apiovh:get` (Requis)

---

### 3. Détails d'un type de log

| Méthode                           | Endpoint                         | Description                           | Authentification |
| --------------------------------- | -------------------------------- | ------------------------------------- | ---------------- |
| GET                               | `/cdn/dedicated/log/kind/{name}` | Récupère les détails d'un type de log | Requise          |
| **Paramètres**: `name` (path)     |
| **Réponse**: `dbaas.logs.LogKind` |

#### Paramètres

- **name** (path, string, Requis) - Nom du type de log

#### IAM Actions

- `cdn:apiovh:get` (Requis)

---

### 4. Liste des POPs CDN

| Méthode                 | Endpoint              | Description             | Authentification |
| ----------------------- | --------------------- | ----------------------- | ---------------- |
| GET                     | `/cdn/dedicated/pops` | Liste tous les POPs CDN | Non requise      |
| **Réponse**: `string[]` |

#### IAM Actions

- Aucun

---

### 5. Détails d'un POP CDN

| Méthode                       | Endpoint                     | Description                   | Authentification |
| ----------------------------- | ---------------------------- | ----------------------------- | ---------------- |
| GET                           | `/cdn/dedicated/pops/{name}` | Récupère les détails d'un POP | Non requise      |
| **Paramètres**: `name` (path) |
| **Réponse**: `cdnanycast.Pop` |

#### Paramètres

- **name** (path, string, Requis) - Nom du POP

#### IAM Actions

- Aucun

---

### 6. Détails d'un service CDN

| Méthode                                  | Endpoint                       | Description                                | Authentification |
| ---------------------------------------- | ------------------------------ | ------------------------------------------ | ---------------- |
| GET                                      | `/cdn/dedicated/{serviceName}` | Récupère l'adresse IP ANYCAST d'un service | Requise          |
| **Paramètres**: `serviceName` (path)     |
| **Réponse**: `cdnanycast.AnycastWithIAM` |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN

#### IAM Actions

- `cdn:apiovh:get` (Requis)

---

### 7. Changement des contacts du service

| Méthode                              | Endpoint                                     | Description                                  | Authentification |
| ------------------------------------ | -------------------------------------------- | -------------------------------------------- | ---------------- |
| POST                                 | `/cdn/dedicated/{serviceName}/changeContact` | Lance la procédure de changement de contacts | Requise          |
| **Paramètres**: `serviceName` (path) |
| **Réponse**: `long[]`                |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **contactAdmin** (body, string, optionnel) - Contact administrateur (format: coreTypes.AccountId:string)
- **contactBilling** (body, string, optionnel) - Contact facturation (format: coreTypes.AccountId:string)
- **contactTech** (body, string, optionnel) - Contact technique (format: coreTypes.AccountId:string)

#### IAM Actions

- `cdn:apiovh:changeContact` (Requis)

---

### 8. Liste des domaines associés à un service

| Méthode                              | Endpoint                               | Description                            | Authentification |
| ------------------------------------ | -------------------------------------- | -------------------------------------- | ---------------- |
| GET                                  | `/cdn/dedicated/{serviceName}/domains` | Liste les domaines associés au service | Requise          |
| **Paramètres**: `serviceName` (path) |
| **Réponse**: `string[]`              |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN

#### IAM Actions

- `cdn:apiovh:domains/get` (Requis)

---

### 9. Ajout d'un domaine au CDN

| Méthode                              | Endpoint                               | Description                      | Authentification |
| ------------------------------------ | -------------------------------------- | -------------------------------- | ---------------- |
| POST                                 | `/cdn/dedicated/{serviceName}/domains` | Ajoute un domaine au service CDN | Requise          |
| **Paramètres**: `serviceName` (path) |
| **Réponse**: `cdnanycast.Domain`     |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (body, string, Requis) - Nom de domaine à ajouter

#### IAM Actions

- `cdn:apiovh:domains/create` (Requis)

---

### 10. Suppression d'un domaine du CDN

| Méthode                                        | Endpoint                                        | Description                | Authentification |
| ---------------------------------------------- | ----------------------------------------------- | -------------------------- | ---------------- |
| DELETE                                         | `/cdn/dedicated/{serviceName}/domains/{domain}` | Supprime un domaine du CDN | Requise          |
| **Paramètres**: `serviceName`, `domain` (path) |
| **Réponse**: `cdnanycast.Task`                 |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine

#### IAM Actions

- `cdn:apiovh:domains/delete` (Requis)

---

### 11. Récupération des détails d'un domaine

| Méthode                                        | Endpoint                                        | Description                       | Authentification |
| ---------------------------------------------- | ----------------------------------------------- | --------------------------------- | ---------------- |
| GET                                            | `/cdn/dedicated/{serviceName}/domains/{domain}` | Récupère les détails d'un domaine | Requise          |
| **Paramètres**: `serviceName`, `domain` (path) |
| **Réponse**: `cdnanycast.Domain`               |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine

#### IAM Actions

- `cdn:apiovh:domains/get` (Requis)

---

### 12. Modification des propriétés d'un domaine

| Méthode                                        | Endpoint                                        | Description                         | Authentification |
| ---------------------------------------------- | ----------------------------------------------- | ----------------------------------- | ---------------- |
| PUT                                            | `/cdn/dedicated/{serviceName}/domains/{domain}` | Modifie les propriétés d'un domaine | Requise          |
| **Paramètres**: `serviceName`, `domain` (path) |
| **Réponse**: `void`                            |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine
- **Body** (cdnanycast.Domain) - Nouvelles propriétés du domaine

#### IAM Actions

- `cdn:apiovh:domains/edit` (Requis)

---

### 13. Liste des backends d'un domaine

| Méthode                                        | Endpoint                                                 | Description                     | Authentification |
| ---------------------------------------------- | -------------------------------------------------------- | ------------------------------- | ---------------- |
| GET                                            | `/cdn/dedicated/{serviceName}/domains/{domain}/backends` | Liste les backends d'un domaine | Requise          |
| **Paramètres**: `serviceName`, `domain` (path) |
| **Réponse**: `ipv4[]`                          |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine

#### IAM Actions

- `cdn:apiovh:domains/backends/get` (Requis)

---

### 14. Ajout d'un backend IP

| Méthode                                        | Endpoint                                                 | Description                   | Authentification |
| ---------------------------------------------- | -------------------------------------------------------- | ----------------------------- | ---------------- |
| POST                                           | `/cdn/dedicated/{serviceName}/domains/{domain}/backends` | Ajoute une adresse IP backend | Requise          |
| **Paramètres**: `serviceName`, `domain` (path) |
| **Réponse**: `cdnanycast.Backend`              |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine
- **ip** (body, string, Requis) - Adresse IP à ajouter

#### IAM Actions

- `cdn:apiovh:domains/backends/create` (Requis)

---

### 15. Suppression d'un backend IP

| Méthode                                              | Endpoint                                                      | Description            | Authentification |
| ---------------------------------------------------- | ------------------------------------------------------------- | ---------------------- | ---------------- |
| DELETE                                               | `/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}` | Supprime un backend IP | Requise          |
| **Paramètres**: `serviceName`, `domain`, `ip` (path) |
| **Réponse**: `ipv4`                                  |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine
- **ip** (path, ipv4, Requis) - Adresse IP du backend

#### IAM Actions

- `cdn:apiovh:domains/backends/delete` (Requis)

---

### 16. Récupération des détails d'un backend

| Méthode                                              | Endpoint                                                      | Description                       | Authentification |
| ---------------------------------------------------- | ------------------------------------------------------------- | --------------------------------- | ---------------- |
| GET                                                  | `/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}` | Récupère les détails d'un backend | Requise          |
| **Paramètres**: `serviceName`, `domain`, `ip` (path) |
| **Réponse**: `cdnanycast.Backend`                    |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine
- **ip** (path, ipv4, Requis) - Adresse IP du backend

#### IAM Actions

- `cdn:apiovh:domains/backends/get` (Requis)

---

### 17. Liste des règles de cache d'un domaine

| Méthode                                        | Endpoint                                                   | Description                            | Authentification |
| ---------------------------------------------- | ---------------------------------------------------------- | -------------------------------------- | ---------------- |
| GET                                            | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules` | Liste les règles de cache d'un domaine | Requise          |
| **Paramètres**: `serviceName`, `domain` (path) |
| **Réponse**: `long[]`                          |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine
- **fileMatch** (query, string, optionnel) - Filtre par correspondance de fichier

#### IAM Actions

- `cdn:apiovh:domains/cacheRules/get` (Requis)

---

### 18. Ajout d'une règle de cache

| Méthode                                        | Endpoint                                                   | Description                            | Authentification |
| ---------------------------------------------- | ---------------------------------------------------------- | -------------------------------------- | ---------------- |
| POST                                           | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules` | Ajoute une règle de cache à un domaine | Requise          |
| **Paramètres**: `serviceName`, `domain` (path) |
| **Réponse**: `cdnanycast.CacheRule`            |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine
- **cacheType** (body, cdnanycast.CacheRuleCacheTypeEnum, Requis) - Type de cache (forceCache, noCache)
- **fileMatch** (body, string, Requis) - Correspondance de fichier
- **fileType** (body, cdnanycast.CacheRuleFileTypeEnum, Requis) - Type de fichier (extension, file, folder)
- **ttl** (body, long, Requis) - Durée de vie du cache

#### IAM Actions

- `cdn:apiovh:domains/cacheRules/create` (Requis)

---

### 19. Suppression d'une règle de cache

| Méthode                                                       | Endpoint                                                                 | Description                 | Authentification |
| ------------------------------------------------------------- | ------------------------------------------------------------------------ | --------------------------- | ---------------- |
| DELETE                                                        | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}` | Supprime une règle de cache | Requise          |
| **Paramètres**: `serviceName`, `domain`, `cacheRuleId` (path) |
| **Réponse**: `cdnanycast.Task`                                |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine
- **cacheRuleId** (path, long, Requis) - Identifiant de la règle de cache

#### IAM Actions

- `cdn:apiovh:domains/cacheRules/delete` (Requis)

---

### 20. Récupération des détails d'une règle de cache

| Méthode                                                       | Endpoint                                                                 | Description                               | Authentification |
| ------------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------- | ---------------- |
| GET                                                           | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}` | Récupère les détails d'une règle de cache | Requise          |
| **Paramètres**: `serviceName`, `domain`, `cacheRuleId` (path) |
| **Réponse**: `cdnanycast.CacheRule`                           |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine
- **cacheRuleId** (path, long, Requis) - Identifiant de la règle de cache

#### IAM Actions

- `cdn:apiovh:domains/cacheRules/get` (Requis)

---

### 21. Modification des propriétés d'une règle de cache

| Méthode                                                       | Endpoint                                                                 | Description                                 | Authentification |
| ------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------- | ---------------- |
| PUT                                                           | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}` | Modifie les propriétés d'une règle de cache | Requise          |
| **Paramètres**: `serviceName`, `domain`, `cacheRuleId` (path) |
| **Réponse**: `void`                                           |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine
- **cacheRuleId** (path, long, Requis) - Identifiant de la règle de cache
- **Body** (cdnanycast.CacheRule) - Nouvelles propriétés

#### IAM Actions

- `cdn:apiovh:domains/cacheRules/edit` (Requis)

---

### 22. Flush de la cache d'une règle de cache

| Méthode                                                       | Endpoint                                                                       | Description               | Authentification |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------- | ---------------- |
| POST                                                          | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/flush` | Vide la cache d'une règle | Requise          |
| **Paramètres**: `serviceName`, `domain`, `cacheRuleId` (path) |
| **Réponse**: `cdnanycast.Task`                                |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine
- **cacheRuleId** (path, long, Requis) - Identifiant de la règle de cache

#### IAM Actions

- `cdn:apiovh:domains/cacheRules/flush` (Requis)

---

### 23. Liste des tâches associées à une règle de cache

| Méthode                                                       | Endpoint                                                                       | Description                           | Authentification |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------- | ---------------- |
| GET                                                           | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks` | Liste les tâches d'une règle de cache | Requise          |
| **Paramètres**: `serviceName`, `domain`, `cacheRuleId` (path) |
| **Réponse**: `long[]`                                         |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine
- **cacheRuleId** (path, long, Requis) - Identifiant de la règle de cache

#### IAM Actions

- `cdn:apiovh:domains/cacheRules/tasks/get` (Requis)

---

### 24. Détails d'une tâche de cache

| Méthode                                                                 | Endpoint                                                                                | Description                      | Authentification |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------- | ---------------- |
| GET                                                                     | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks/{taskId}` | Récupère les détails d'une tâche | Requise          |
| **Paramètres**: `serviceName`, `domain`, `cacheRuleId`, `taskId` (path) |
| **Réponse**: `cdnanycast.Task`                                          |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine
- **cacheRuleId** (path, long, Requis) - Identifiant de la règle de cache
- **taskId** (path, long, Requis) - Identifiant de la tâche

#### IAM Actions

- `cdn:apiovh:domains/cacheRules/tasks/get` (Requis)

---

### 25. Flush de toute la cache d'un domaine

| Méthode                                        | Endpoint                                              | Description                      | Authentification |
| ---------------------------------------------- | ----------------------------------------------------- | -------------------------------- | ---------------- |
| POST                                           | `/cdn/dedicated/{serviceName}/domains/{domain}/flush` | Vide toute la cache d'un domaine | Requise          |
| **Paramètres**: `serviceName`, `domain` (path) |
| **Réponse**: `cdnanycast.Task`                 |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine

#### IAM Actions

- `cdn:apiovh:domains/flush` (Requis)

---

### 26. Génération d'URL pour les logs en temps réel

| Méthode                                        | Endpoint                                             | Description                                | Statut API |
| ---------------------------------------------- | ---------------------------------------------------- | ------------------------------------------ | ---------- |
| POST                                           | `/cdn/dedicated/{serviceName}/domains/{domain}/logs` | Génère une URL pour les logs en temps réel | BETA       |
| **Paramètres**: `serviceName`, `domain` (path) |
| **Réponse**: `cdnanycast.LogsURL`              |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine

#### IAM Actions

- `cdn:apiovh:domains/logs/create` (Requis)

---

### 27. Récupération des statistiques d'un domaine

| Méthode                                        | Endpoint                                                   | Description                            | Authentification |
| ---------------------------------------------- | ---------------------------------------------------------- | -------------------------------------- | ---------------- |
| GET                                            | `/cdn/dedicated/{serviceName}/domains/{domain}/statistics` | Récupère les statistiques d'un domaine | Requise          |
| **Paramètres**: `serviceName`, `domain` (path) |
| **Réponse**: `cdnanycast.StatsDataType[]`      |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine
- **period** (query, cdnanycast.StatsPeriodEnum, Requis) - Période (day, month, week)
- **type** (query, cdnanycast.StatsTypeEnum, Requis) - Type (backend, cdn, threat)
- **value** (query, cdnanycast.StatsValueEnum, Requis) - Valeur (bandwidth, request)

#### IAM Actions

- `cdn:apiovh:domains/statistics/get` (Requis)

---

### 28. Liste des tâches associées à un domaine

| Méthode                                        | Endpoint                                              | Description                   | Authentification |
| ---------------------------------------------- | ----------------------------------------------------- | ----------------------------- | ---------------- |
| GET                                            | `/cdn/dedicated/{serviceName}/domains/{domain}/tasks` | Liste les tâches d'un domaine | Requise          |
| **Paramètres**: `serviceName`, `domain` (path) |
| **Réponse**: `long[]`                          |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine

#### IAM Actions

- `cdn:apiovh:domains/tasks/get` (Requis)

---

### 29. Détails d'une tâche d'un domaine

| Méthode                                                  | Endpoint                                                       | Description                      | Authentification |
| -------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------- | ---------------- |
| GET                                                      | `/cdn/dedicated/{serviceName}/domains/{domain}/tasks/{taskId}` | Récupère les détails d'une tâche | Requise          |
| **Paramètres**: `serviceName`, `domain`, `taskId` (path) |
| **Réponse**: `cdnanycast.Task`                           |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **domain** (path, string, Requis) - Nom du domaine
- **taskId** (path, long, Requis) - Identifiant de la tâche

#### IAM Actions

- `cdn:apiovh:domains/tasks/get` (Requis)

---

### 30. Liste des abonnements de logs d'un service

| Méthode                              | Endpoint                                        | Description                                | Authentification |
| ------------------------------------ | ----------------------------------------------- | ------------------------------------------ | ---------------- |
| GET                                  | `/cdn/dedicated/{serviceName}/log/subscription` | Liste les IDs d'abonnement pour un cluster | Requise          |
| **Paramètres**: `serviceName` (path) |
| **Réponse**: `uuid[]`                |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **kind** (query, string, optionnel) - Filtre par type de log (ex: audit)

#### IAM Actions

- `cdn:apiovh:log/subscription/get` (Requis)

---

### 31. Création d'un abonnement de logs

| Méthode                                           | Endpoint                                        | Description                                  | Authentification |
| ------------------------------------------------- | ----------------------------------------------- | -------------------------------------------- | ---------------- |
| POST                                              | `/cdn/dedicated/{serviceName}/log/subscription` | Crée un abonnement vers un flux LDP existant | Requise          |
| **Paramètres**: `serviceName` (path)              |
| **Réponse**: `dbaas.logs.LogSubscriptionResponse` |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **Body** (dbaas.logs.LogSubscriptionCreation)
  - **kind** (string, Requis) - Nom du type de log
  - **streamId** (uuid, Requis) - ID du flux de logs client

#### IAM Actions

- `cdn:apiovh:log/subscription/create` (Requis)
- `ldp:apiovh:output/graylog/stream/forwardTo` (Requis - sur le service LDP cible)

---

### 32. Suppression d'un abonnement de logs

| Méthode                                                | Endpoint                                                         | Description            | Authentification |
| ------------------------------------------------------ | ---------------------------------------------------------------- | ---------------------- | ---------------- |
| DELETE                                                 | `/cdn/dedicated/{serviceName}/log/subscription/{subscriptionId}` | Supprime un abonnement | Requise          |
| **Paramètres**: `serviceName`, `subscriptionId` (path) |
| **Réponse**: `dbaas.logs.LogSubscriptionResponse`      |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **subscriptionId** (path, uuid, Requis) - ID d'abonnement

#### IAM Actions

- `cdn:apiovh:log/subscription/delete` (Requis)

---

### 33. Détails d'un abonnement de logs

| Méthode                                                | Endpoint                                                         | Description                          | Authentification |
| ------------------------------------------------------ | ---------------------------------------------------------------- | ------------------------------------ | ---------------- |
| GET                                                    | `/cdn/dedicated/{serviceName}/log/subscription/{subscriptionId}` | Récupère les détails d'un abonnement | Requise          |
| **Paramètres**: `serviceName`, `subscriptionId` (path) |
| **Réponse**: `dbaas.logs.LogSubscription`              |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **subscriptionId** (path, uuid, Requis) - ID d'abonnement

#### IAM Actions

- `cdn:apiovh:log/subscription/get` (Requis)

---

### 34. Génération d'une URL temporaire pour les logs

| Méthode                                     | Endpoint                               | Description                                       | Authentification |
| ------------------------------------------- | -------------------------------------- | ------------------------------------------------- | ---------------- |
| POST                                        | `/cdn/dedicated/{serviceName}/log/url` | Génère une URL temporaire pour récupérer les logs | Requise          |
| **Paramètres**: `serviceName` (path)        |
| **Réponse**: `dbaas.logs.TemporaryLogsLink` |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **Body** (dbaas.logs.LogUrlCreation)
  - **kind** (string, Requis) - Nom du type de log

#### IAM Actions

- `cdn:apiovh:log/url/create` (Requis)

---

### 35. Génération d'URL pour les logs en temps réel (service-level)

| Méthode                              | Endpoint                            | Description                                | Statut API |
| ------------------------------------ | ----------------------------------- | ------------------------------------------ | ---------- |
| POST                                 | `/cdn/dedicated/{serviceName}/logs` | Génère une URL pour les logs en temps réel | BETA       |
| **Paramètres**: `serviceName` (path) |
| **Réponse**: `cdnanycast.LogsURL`    |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN

#### IAM Actions

- `cdn:apiovh:logs/create` (Requis)

---

### 36. Récupération de l'historique des quotas

| Méthode                                   | Endpoint                             | Description                      | Authentification |
| ----------------------------------------- | ------------------------------------ | -------------------------------- | ---------------- |
| GET                                       | `/cdn/dedicated/{serviceName}/quota` | Récupère l'historique des quotas | Requise          |
| **Paramètres**: `serviceName` (path)      |
| **Réponse**: `cdnanycast.StatsDataType[]` |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **period** (query, cdnanycast.StatsPeriodEnum, Requis) - Période (day, month, week)

#### IAM Actions

- `cdn:apiovh:quota/get` (Requis)

---

### 37. Récupération des informations d'un service

| Méthode                              | Endpoint                                    | Description                          | Authentification |
| ------------------------------------ | ------------------------------------------- | ------------------------------------ | ---------------- |
| GET                                  | `/cdn/dedicated/{serviceName}/serviceInfos` | Récupère les informations du service | Requise          |
| **Paramètres**: `serviceName` (path) |
| **Réponse**: `services.Service`      |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN

#### IAM Actions

- `cdn:apiovh:serviceInfos/get` (Requis)

---

### 38. Mise à jour des informations d'un service

| Méthode                              | Endpoint                                    | Description                            | Authentification |
| ------------------------------------ | ------------------------------------------- | -------------------------------------- | ---------------- |
| PUT                                  | `/cdn/dedicated/{serviceName}/serviceInfos` | Met à jour les informations du service | Requise          |
| **Paramètres**: `serviceName` (path) |
| **Réponse**: `void`                  |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **Body** (services.Service) - Nouvelles propriétés du service

#### IAM Actions

- `cdn:apiovh:serviceInfos/edit` (Requis)

---

### 39. Récupération des informations SSL d'un service

| Méthode                              | Endpoint                           | Description                          | Authentification |
| ------------------------------------ | ---------------------------------- | ------------------------------------ | ---------------- |
| GET                                  | `/cdn/dedicated/{serviceName}/ssl` | Récupère les informations SSL du CDN | Requise          |
| **Paramètres**: `serviceName` (path) |
| **Réponse**: `cdnanycast.Ssl`        |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN

#### IAM Actions

- `cdn:apiovh:ssl/get` (Requis)

---

### 40. Suppression du certificat SSL

| Méthode                              | Endpoint                           | Description                       | Authentification |
| ------------------------------------ | ---------------------------------- | --------------------------------- | ---------------- |
| DELETE                               | `/cdn/dedicated/{serviceName}/ssl` | Supprime le certificat SSL du CDN | Requise          |
| **Paramètres**: `serviceName` (path) |
| **Réponse**: `cdnanycast.Task`       |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN

#### IAM Actions

- `cdn:apiovh:ssl/delete` (Requis)

---

### 41. Ajout d'un certificat SSL

| Méthode                              | Endpoint                           | Description                                                    | Authentification |
| ------------------------------------ | ---------------------------------- | -------------------------------------------------------------- | ---------------- |
| POST                                 | `/cdn/dedicated/{serviceName}/ssl` | Ajoute un certificat SSL ou génère un certificat Let's Encrypt | Requise          |
| **Paramètres**: `serviceName` (path) |
| **Réponse**: `cdnanycast.Ssl`        |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **name** (body, string, Requis) - Nom du certificat SSL
- **certificate** (body, text, optionnel) - Certificat (vide pour Let's Encrypt)
- **chain** (body, text, optionnel) - Chaîne de certificat (vide pour Let's Encrypt)
- **key** (body, text, optionnel) - Clé du certificat (vide pour Let's Encrypt)

#### IAM Actions

- `cdn:apiovh:ssl/create` (Requis)

---

### 42. Liste des tâches SSL d'un service

| Méthode                              | Endpoint                                 | Description                     | Authentification |
| ------------------------------------ | ---------------------------------------- | ------------------------------- | ---------------- |
| GET                                  | `/cdn/dedicated/{serviceName}/ssl/tasks` | Liste les tâches SSL du service | Requise          |
| **Paramètres**: `serviceName` (path) |
| **Réponse**: `long[]`                |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **function** (query, cdnanycast.TaskFunctionEnum, optionnel) - Filtre par fonction
- **status** (query, cdnanycast.TaskStateEnum, optionnel) - Filtre par statut

#### IAM Actions

- `cdn:apiovh:ssl/tasks/get` (Requis)

---

### 43. Détails d'une tâche SSL

| Méthode                                        | Endpoint                                          | Description                          | Authentification |
| ---------------------------------------------- | ------------------------------------------------- | ------------------------------------ | ---------------- |
| GET                                            | `/cdn/dedicated/{serviceName}/ssl/tasks/{taskId}` | Récupère les détails d'une tâche SSL | Requise          |
| **Paramètres**: `serviceName`, `taskId` (path) |
| **Réponse**: `cdnanycast.Task`                 |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **taskId** (path, long, Requis) - Identifiant de la tâche

#### IAM Actions

- `cdn:apiovh:ssl/tasks/get` (Requis)

---

### 44. Mise à jour d'un certificat SSL existant

| Méthode                              | Endpoint                                  | Description                                                           | Authentification |
| ------------------------------------ | ----------------------------------------- | --------------------------------------------------------------------- | ---------------- |
| POST                                 | `/cdn/dedicated/{serviceName}/ssl/update` | Met à jour un certificat SSL existant avec un certificat personnalisé | Requise          |
| **Paramètres**: `serviceName` (path) |
| **Réponse**: `cdnanycast.Task`       |

#### Paramètres

- **serviceName** (path, string, Requis) - Nom interne de l'offre CDN
- **certificate** (body, text, Requis) - Certificat
- **key** (body, text, Requis) - Clé du certificat
- **chain** (body, text, optionnel) - Chaîne de certificat

#### IAM Actions

- `cdn:apiovh:ssl/update` (Requis)

---

## Énumérations

### CacheRuleCacheTypeEnum

Tous les types de cache possibles.

| Valeur       | Description        |
| ------------ | ------------------ |
| `forceCache` | Force le cache     |
| `noCache`    | Désactive le cache |

### CacheRuleFileTypeEnum

Tous les types de fichiers possibles.

| Valeur      | Description   |
| ----------- | ------------- |
| `extension` | Par extension |
| `file`      | Par fichier   |
| `folder`    | Par dossier   |

### CacheRuleStatusEnum

Tous les états possibles d'une règle de cache.

| Valeur     | Description    |
| ---------- | -------------- |
| `creating` | En création    |
| `deleting` | En suppression |
| `error`    | Erreur         |
| `off`      | Désactivé      |
| `on`       | Actif          |
| `updating` | En mise à jour |

### DomainStatusEnum

Tous les états possibles d'un domaine.

| Valeur     | Description    |
| ---------- | -------------- |
| `error`    | Erreur         |
| `off`      | Désactivé      |
| `on`       | Actif          |
| `removing` | En suppression |

### DomainTypeEnum

Tous les types de domaine possibles.

| Valeur  | Description    |
| ------- | -------------- |
| `plain` | Domaine simple |
| `ssl`   | Domaine SSL    |

### PopStatusEnum

Tous les états possibles d'un POP.

| Valeur     | Description |
| ---------- | ----------- |
| `down`     | En panne    |
| `ok`       | Actif       |
| `rerouted` | Redirigé    |
| `unknown`  | Inconnu     |

### SslStateEnum

Tous les états possibles d'un certificat SSL.

| Valeur      | Description    |
| ----------- | -------------- |
| `checking`  | Vérification   |
| `creating`  | Création       |
| `error`     | Erreur         |
| `off`       | Désactivé      |
| `on`        | Actif          |
| `removing`  | En suppression |
| `updating`  | En mise à jour |
| `uploading` | Upload         |

### TaskFunctionEnum

Toutes les fonctions possibles pour les tâches CDN.

| Valeur            | Description                   |
| ----------------- | ----------------------------- |
| `flush`           | Flush de cache                |
| `flushAll`        | Flush de tout le cache        |
| `generateSsl`     | Génération de SSL             |
| `installSsl`      | Installation de SSL           |
| `reinstallSsl`    | Réinstallation de SSL         |
| `removeDomain`    | Suppression de domaine        |
| `uninstallSsl`    | Désinstallation de SSL        |
| `updateCacheRule` | Mise à jour de règle de cache |

### TaskStateEnum

Tous les états possibles d'une tâche CDN.

| Valeur      | Description |
| ----------- | ----------- |
| `cancelled` | Annulé      |
| `doing`     | En cours    |
| `done`      | Terminé     |
| `error`     | Erreur      |
| `todo`      | À faire     |

### StatsPeriodEnum

Périodes possibles pour les statistiques.

| Valeur  | Description |
| ------- | ----------- |
| `day`   | Jour        |
| `month` | Mois        |
| `week`  | Semaine     |

### StatsTypeEnum

Types de statistiques possibles.

| Valeur    | Description |
| --------- | ----------- |
| `backend` | Backend     |
| `cdn`     | CDN         |
| `threat`  | Menace      |

### StatsValueEnum

Valeurs possibles pour les statistiques.

| Valeur      | Description        |
| ----------- | ------------------ |
| `bandwidth` | Bande passante     |
| `request`   | Nombre de requêtes |

### RenewType

Modes de renouvellement possibles.

| Valeur               | Description                |
| -------------------- | -------------------------- |
| `automatic`          | Renouvellement automatique |
| `deleteAtExpiration` | Suppression à l'expiration |
| `forced`             | Renouvellement forcé       |
| `manualPayment`      | Paiement manuel            |
| `period`             | Période en mois            |

### RenewalTypeEnum

Types détaillés de renouvellement.

| Valeur                   | Description               |
| ------------------------ | ------------------------- |
| `automaticForcedProduct` | Automatique forcé produit |
| `automaticV2012`         | Automatique V2012         |
| `automaticV2014`         | Automatique V2014         |
| `automaticV2016`         | Automatique V2016         |
| `automaticV2024`         | Automatique V2024         |
| `manual`                 | Manuel                    |
| `oneShot`                | Unique                    |
| `option`                 | Option                    |

### StateEnum

États possibles d'un service.

| Valeur                | Description                         |
| --------------------- | ----------------------------------- |
| `autorenewInProgress` | Renouvellement automatique en cours |
| `expired`             | Expiré                              |
| `inCreation`          | En création                         |
| `ok`                  | Actif                               |
| `pendingDebt`         | En attente de paiement              |
| `unPaid`              | Non payé                            |

### ResourceMetadata.StateEnum

États possibles pour les métadonnées IAM.

| Valeur        | Description |
| ------------- | ----------- |
| `EXPIRED`     | Expiré      |
| `IN_CREATION` | En création |
| `OK`          | Actif       |
| `SUSPENDED`   | Suspendu    |

### TagFilter.OperatorEnum

Opérateurs de filtrage de tags.

| Valeur    | Description                |
| --------- | -------------------------- |
| `EQ`      | Égal                       |
| `EXISTS`  | Existe                     |
| `ILIKE`   | Like insensible à la casse |
| `LIKE`    | Like                       |
| `NEQ`     | Inégal                     |
| `NEXISTS` | N'existe pas               |

---

## Exemples d'utilisation

### Récupération de l'adresse IP ANYCAST d'un service

```bash
curl -X GET "https://eu.api.ovh.com/v1/cdn/dedicated/{serviceName}" \
  -H "X-Ovh-Key: {applicationKey}" \
  -H "X-Ovh-Tenant: {consumerKey}" \
  -H "X-Ovh-AppliedTo: {applicationSecret}"
```

### Ajout d'un domaine au CDN

```bash
curl -X POST "https://eu.api.ovh.com/v1/cdn/dedicated/{serviceName}/domains" \
  -H "X-Ovh-Key: {applicationKey}" \
  -H "X-Ovh-Tenant: {consumerKey}" \
  -H "X-Ovh-AppliedTo: {applicationSecret}" \
  -d "domain=example.com"
```

### Flush de la cache d'un domaine

```bash
curl -X POST "https://eu.api.ovh.com/v1/cdn/dedicated/{serviceName}/domains/{domain}/flush" \
  -H "X-Ovh-Key: {applicationKey}" \
  -H "X-Ovh-Tenant: {consumerKey}" \
  -H "X-Ovh-AppliedTo: {applicationSecret}"
```

### Récupération des statistiques

```bash
curl -X GET "https://eu.api.ovh.com/v1/cdn/dedicated/{serviceName}/domains/{domain}/statistics?period=day&type=cdn&value=request" \
  -H "X-Ovh-Key: {applicationKey}" \
  -H "X-Ovh-Tenant: {consumerKey}" \
  -H "X-Ovh-AppliedTo: {applicationSecret}"
```

---

## Notes importantes

1. **Authentification**: La plupart des endpoints nécessitent une authentification via les en-têtes X-Ovh-\*.
2. **Tâches asynchrones**: Certaines opérations retournent un objet Task indiquant qu'elles sont asynchrones. Vérifiez le statut via les endpoints appropriés.
3. **Quotas**: Certains endpoints sont limités par quota. Consultez l'historique via `/quota`.
4. **Logs**: Les logs en temps réel sont en statut BETA.
5. **SSL**: Pour générer un certificat Let's Encrypt, laissez les paramètres `certificate`, `chain` et `key` vides.

---

## Version de l'API

**API Version**: 1.0  
**Date de publication**: 2026

---

_Documentation générée à partir de l'API definition JSON._

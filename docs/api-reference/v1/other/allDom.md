# API allDom - OVHcloud

## Vue d'ensemble

L'API **allDom** permet de gérer les services de noms de domaine chez OVHcloud. Elle offre des opérations pour lister, récupérer et mettre à jour les informations des services, ainsi que pour gérer les domaines associés.

**Base Path**: `https://eu.api.ovh.com/v1`  
**Version API**: `1.0`

---

## Authentification

Toutes les opérations de cette API nécessitent une authentification via les **clés OVH** (Application Key, Application Secret et Consumer Key).

---

## Ressources

### 1. Liste des services allDom

Récupère la liste des services allDom disponibles.

**Endpoint**: `GET /allDom`

**Description**: Liste les services allDom disponibles.

**Méthode HTTP**: `GET`  
**Statut API**: `PRODUCTION` (Version stable de production)

#### Paramètres

| Nom       | Type                                  | Paramètre | Requis | Description                               |
| --------- | ------------------------------------- | --------- | ------ | ----------------------------------------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | query     | Non    | Filtre les ressources selon les tags IAM. |

#### IAM Actions requises

- `alldom:apiovh:get` (Requis)

#### Type de réponse

`string[]` - Liste des identifiants des services allDom.

---

### 2. Récupérer les propriétés d'un service allDom

Récupère les informations détaillées d'un service allDom spécifique.

**Endpoint**: `GET /allDom/{serviceName}`

**Description**: Récupère les propriétés de ce service allDom.

**Méthode HTTP**: `GET`  
**Statut API**: `PRODUCTION` (Version stable de production)

#### Paramètres

| Nom           | Type     | Paramètre | Requis  | Description     |
| ------------- | -------- | --------- | ------- | --------------- |
| `serviceName` | `string` | path      | **Oui** | Nom du service. |

#### IAM Actions requises

- `alldom:apiovh:get` (Requis)

#### Type de réponse

`allDom.AllDomServiceWithIAM`

---

### 3. Lister les domaines d'un service allDom

Récupère la liste des domaines attachés à un service allDom.

**Endpoint**: `GET /allDom/{serviceName}/domain`

**Description**: Liste tous les domaines attachés à ce service allDom.

**Méthode HTTP**: `GET`  
**Statut API**: `PRODUCTION` (Version stable de production)

#### Paramètres

| Nom           | Type     | Paramètre | Requis  | Description                                                  |
| ------------- | -------- | --------- | ------- | ------------------------------------------------------------ |
| `domain`      | `string` | query     | Non     | Filtre la valeur de la propriété `domain` (comme un filtre). |
| `serviceName` | `string` | path      | **Oui** | Nom du service.                                              |

#### IAM Actions requises

- `alldom:apiovh:domain/get` (Requis)

#### Type de réponse

`string[]` - Liste des noms de domaine.

---

### 4. Récupérer les propriétés d'un domaine

Récupère les informations détaillées d'un domaine spécifique.

**Endpoint**: `GET /allDom/{serviceName}/domain/{domain}`

**Description**: Récupère les propriétés de ce domaine allDom.

**Méthode HTTP**: `GET`  
**Statut API**: `PRODUCTION` (Version stable de production)

#### Paramètres

| Nom           | Type     | Paramètre | Requis  | Description     |
| ------------- | -------- | --------- | ------- | --------------- |
| `domain`      | `string` | path      | **Oui** | Nom du domaine. |
| `serviceName` | `string` | path      | **Oui** | Nom du service. |

#### IAM Actions requises

- `alldom:apiovh:domain/get` (Requis)

#### Type de réponse

`allDom.Domain`

---

### 5. Récupérer les informations d'un service

Récupère les informations détaillées d'un service allDom.

**Endpoint**: `GET /allDom/{serviceName}/serviceInfos`

**Description**: Récupère les informations du service.

**Méthode HTTP**: `GET`  
**Statut API**: `PRODUCTION` (Version stable de production)

#### Paramètres

| Nom           | Type     | Paramètre | Requis  | Description     |
| ------------- | -------- | --------- | ------- | --------------- |
| `serviceName` | `string` | path      | **Oui** | Nom du service. |

#### IAM Actions requises

- `alldom:apiovh:serviceInfos/get` (Requis)

#### Type de réponse

`services.Service`

---

### 6. Mettre à jour les informations d'un service

Mise à jour des informations d'un service allDom.

**Endpoint**: `PUT /allDom/{serviceName}/serviceInfos`

**Description**: Met à jour les informations du service.

**Méthode HTTP**: `PUT`  
**Statut API**: `PRODUCTION` (Version stable de production)

#### Paramètres

| Nom           | Type               | Paramètre | Requis  | Description                                               |
| ------------- | ------------------ | --------- | ------- | --------------------------------------------------------- |
| `serviceName` | `string`           | path      | **Oui** | Nom du service.                                           |
| `body`        | `services.Service` | body      | **Oui** | Corps de la requête contenant les nouvelles informations. |

#### IAM Actions requises

- `alldom:apiovh:serviceInfos/edit` (Requis)

#### Type de réponse

`void` - Pas de réponse.

---

## Modèles de données (Models)

### allDom.AllDomService

**ID**: `AllDomService`  
**Description**: Informations générales sur un service allDom.

#### Propriétés

| Propriété | Type               | Requis | Lecture seule | Description              |
| --------- | ------------------ | ------ | ------------- | ------------------------ |
| `name`    | `string`           | Non    | Oui           | Nom du service allDom.   |
| `offer`   | `allDom.OfferEnum` | Non    | Oui           | Offre du service allDom. |
| `type`    | `allDom.TypeEnum`  | Non    | Oui           | Type du service allDom.  |

---

### allDom.AllDomServiceWithIAM

**ID**: `AllDomService`  
**Description**: Informations générales sur un service allDom (avec métadonnées IAM).

#### Propriétés

| Propriété | Type                   | Requis | Lecture seule | Description                      |
| --------- | ---------------------- | ------ | ------------- | -------------------------------- |
| `iam`     | `iam.ResourceMetadata` | Non    | Oui           | Métadonnées IAM de la ressource. |
| `name`    | `string`               | Non    | Oui           | Nom du service allDom.           |
| `offer`   | `allDom.OfferEnum`     | Non    | Oui           | Offre du service allDom.         |
| `type`    | `allDom.TypeEnum`      | Non    | Oui           | Type du service allDom.          |

---

### allDom.Domain

**ID**: `Domain`  
**Description**: Nom de domaine d'un service allDom.

#### Propriétés

| Propriété | Type     | Requis | Lecture seule | Description     |
| --------- | -------- | ------ | ------------- | --------------- |
| `domain`  | `string` | Non    | Oui           | Nom de domaine. |

---

### allDom.OfferEnum

**ID**: `OfferEnum`  
**Description**: Offre du service allDom.

#### Valeurs possibles

| Valeur     | Description    |
| ---------- | -------------- |
| `diamond`  | Offre Diamond  |
| `gold`     | Offre Gold     |
| `platinum` | Offre Platinum |

---

### allDom.TypeEnum

**ID**: `TypeEnum`  
**Description**: Type du service allDom.

#### Valeurs possibles

| Valeur                 | Description                       |
| ---------------------- | --------------------------------- |
| `french`               | Service français                  |
| `french+international` | Service français et international |
| `international`        | Service international             |

---

### iam.ResourceMetadata

**ID**: `ResourceMetadata`  
**Description**: Métadonnées IAM intégrées aux modèles de services.

#### Propriétés

| Propriété     | Type                             | Requis | Lecture seule | Description                                                                   |
| ------------- | -------------------------------- | ------ | ------------- | ----------------------------------------------------------------------------- |
| `displayName` | `string`                         | Non    | Oui           | Nom d'affichage de la ressource.                                              |
| `id`          | `uuid`                           | Non    | Oui           | Identifiant unique de la ressource.                                           |
| `state`       | `iam.ResourceMetadata.StateEnum` | Non    | Oui           | État de la ressource.                                                         |
| `tags`        | `map[string]string`              | Non    | Oui           | Tags de la ressource. Les tags calculés en interne sont préfixés avec `ovh:`. |
| `urn`         | `string`                         | Non    | Oui           | Nom unique de la ressource utilisé dans les politiques.                       |

---

### iam.ResourceMetadata.StateEnum

**ID**: `StateEnum`  
**Description**: État de la ressource.

#### Valeurs possibles

| Valeur        | Description          |
| ------------- | -------------------- |
| `EXPIRED`     | Expiré               |
| `IN_CREATION` | En cours de création |
| `OK`          | Actif                |
| `SUSPENDED`   | Suspendu             |

---

### iam.resource.TagFilter

**ID**: `TagFilter`  
**Description**: Filtre de tags de ressource.

#### Propriétés

| Propriété  | Type                                  | Requis | Lecture seule | Description                                                      |
| ---------- | ------------------------------------- | ------ | ------------- | ---------------------------------------------------------------- |
| `operator` | `iam.resource.TagFilter.OperatorEnum` | Non    | Oui           | Opérateur à utiliser pour filtrer la valeur (par défaut `'EQ'`). |
| `value`    | `string`                              | Non    | Oui           | Valeur à utiliser pour filtrer les tags.                         |

---

### iam.resource.TagFilter.OperatorEnum

**ID**: `OperatorEnum`  
**Description**: Opérateur pouvant être utilisé pour filtrer les tags des ressources.

#### Valeurs possibles

| Valeur    | Description                      |
| --------- | -------------------------------- |
| `EQ`      | Égal                             |
| `EXISTS`  | Existe                           |
| `ILIKE`   | Contient (insensible à la casse) |
| `LIKE`    | Contient                         |
| `NEQ`     | Inégal                           |
| `NEXISTS` | N'existe pas                     |

---

### service.RenewType

**ID**: `RenewType`  
**Description**: Mappe un renouvellement possible pour un service spécifique.

#### Propriétés

| Propriété            | Type      | Requis | Lecture seule | Description                                          |
| -------------------- | --------- | ------ | ------------- | ---------------------------------------------------- |
| `automatic`          | `boolean` | Non    | Non           | Le service est renouvelé automatiquement.            |
| `deleteAtExpiration` | `boolean` | Non    | Non           | Le service sera supprimé à l'expiration.             |
| `forced`             | `boolean` | Non    | Non           | Le service est forcé d'être renouvelé.               |
| `manualPayment`      | `boolean` | Non    | Non           | Le service doit être renouvelé et payé manuellement. |
| `period`             | `long`    | Non    | Non           | Période de renouvellement en mois.                   |

---

### service.RenewalTypeEnum

**ID**: `RenewalTypeEnum`  
**Description**: Type de renouvellement détaillé d'un service.

#### Valeurs possibles

| Valeur                   | Description                              |
| ------------------------ | ---------------------------------------- |
| `automaticForcedProduct` | Renouvellement automatique forcé produit |
| `automaticV2012`         | Renouvellement automatique V2012         |
| `automaticV2014`         | Renouvellement automatique V2014         |
| `automaticV2016`         | Renouvellement automatique V2016         |
| `manual`                 | Renouvellement manuel                    |
| `oneShot`                | Renouvellement unique                    |
| `option`                 | Renouvellement optionnel                 |

---

### service.StateEnum

**ID**: `StateEnum`  
**Description**: État d'un service.

#### Valeurs possibles

| Valeur                | Description                         |
| --------------------- | ----------------------------------- |
| `autorenewInProgress` | Renouvellement automatique en cours |
| `expired`             | Expiré                              |
| `inCreation`          | En cours de création                |
| `ok`                  | Actif                               |
| `pendingDebt`         | En attente de paiement (dettes)     |
| `unPaid`              | Non payé                            |

---

### services.Service

**ID**: `Service`  
**Description**: Détails sur un service.

#### Propriétés

| Propriété               | Type                      | Requis | Lecture seule | Description                                                                   |
| ----------------------- | ------------------------- | ------ | ------------- | ----------------------------------------------------------------------------- |
| `canDeleteAtExpiration` | `boolean`                 | Non    | Oui           | Indique que le service peut être configuré pour être supprimé à l'expiration. |
| `contactAdmin`          | `string`                  | Non    | Oui           | Contact administrateur.                                                       |
| `contactBilling`        | `string`                  | Non    | Oui           | Contact facturation.                                                          |
| `contactTech`           | `string`                  | Non    | Oui           | Contact technique.                                                            |
| `creation`              | `date`                    | Non    | Oui           | Date de création.                                                             |
| `domain`                | `string`                  | Non    | Oui           | Nom de domaine.                                                               |
| `engagedUpTo`           | `date`                    | Non    | Oui           | Date jusqu'à laquelle le service est engagé.                                  |
| `expiration`            | `date`                    | Non    | Oui           | Date d'expiration.                                                            |
| `possibleRenewPeriod`   | `long[]`                  | Non    | Oui           | Toutes les périodes de renouvellement possibles de votre service en mois.     |
| `renew`                 | `service.RenewType`       | Non    | Non           | Mode de gestion du renouvellement.                                            |
| `renewalType`           | `service.RenewalTypeEnum` | Non    | Oui           | Type de renouvellement du service.                                            |
| `serviceId`             | `long`                    | Non    | Oui           | Identifiant du service.                                                       |
| `status`                | `service.StateEnum`       | Non    | Oui           | État du service.                                                              |

---

## Exemples d'utilisation

### Exemple 1 : Lister tous les services allDom

```bash
curl -X GET "https://eu.api.ovh.com/v1/allDom" \
  -H "Authorization: Basic YOUR_APP_KEY:YOUR_APP_SECRET" \
  -H "X-ConsumerKey: YOUR_CONSUMER_KEY"
```

### Exemple 2 : Récupérer les propriétés d'un service

```bash
curl -X GET "https://eu.api.ovh.com/v1/allDom/{serviceName}" \
  -H "Authorization: Basic YOUR_APP_KEY:YOUR_APP_SECRET" \
  -H "X-ConsumerKey: YOUR_CONSUMER_KEY"
```

### Exemple 3 : Lister les domaines d'un service

```bash
curl -X GET "https://eu.api.ovh.com/v1/allDom/{serviceName}/domain" \
  -H "Authorization: Basic YOUR_APP_KEY:YOUR_APP_SECRET" \
  -H "X-ConsumerKey: YOUR_CONSUMER_KEY" \
  -G --data "domain=example.com"
```

### Exemple 4 : Mettre à jour les informations d'un service

```bash
curl -X PUT "https://eu.api.ovh.com/v1/allDom/{serviceName}/serviceInfos" \
  -H "Authorization: Basic YOUR_APP_KEY:YOUR_APP_SECRET" \
  -H "X-ConsumerKey: YOUR_CONSUMER_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "domain": "example.com",
    "contactAdmin": "admin@example.com",
    "contactBilling": "billing@example.com",
    "contactTech": "tech@example.com"
  }'
```

---

## Notes importantes

1. **Authentification obligatoire** : Toutes les requêtes nécessitent une authentification via les clés OVH.

2. **Filtrage par tags IAM** : La méthode `GET /allDom` supporte le filtrage des ressources par tags IAM via le paramètre `iamTags`.

3. **Métadonnées IAM** : Les réponses incluent les métadonnées IAM lorsque disponibles, fournissant des informations sur l'état, les tags et les identifiants uniques des ressources.

4. **Dates** : Les champs de type `date` sont retournés au format ISO 8601 (ex: `2024-01-15T10:30:00Z`).

5. **UUID** : Les identifiants de ressource sont retournés au format UUID.

---

## Erreurs courantes

| Code HTTP | Description                                             |
| --------- | ------------------------------------------------------- |
| `401`     | Non authentifié - Vérifiez vos clés OVH.                |
| `403`     | Accès interdit - Vérifiez vos permissions IAM.          |
| `404`     | Ressource non trouvée - Vérifiez le nom du service.     |
| `400`     | Paramètre invalide - Vérifiez le format des paramètres. |

---

_Documentation générée automatiquement à partir de l'API Specification v1.0_

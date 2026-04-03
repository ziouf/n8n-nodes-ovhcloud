# OVHcloud Stack Operations Documentation (v1.0)

Ce document décrit les opérations disponibles pour interagir avec les services **Stack** (MIS, MDS, MOS) via l'API OVHcloud. Les opérations sont organisées par endpoints et méthodes HTTP, avec des détails sur les paramètres, les types de réponse, et les actions IAM associées.

## Base Path

```
https://eu.api.ovh.com/v1
```

## Resource Path

```
/stack/mis
```

---

## Opérations Disponibles

### 1. Lister les services Stack disponibles

**Endpoint** : `/stack/mis`

**Méthode HTTP** : `GET`

**Description** : Retourne la liste des services Stack disponibles pour l'utilisateur.

**Statut API** : Stable (version de production)

**Paramètres** :

| Paramètre | Type                                  | Description                                     | Obligatoire | Exemple                                     |
| --------- | ------------------------------------- | ----------------------------------------------- | ----------- | ------------------------------------------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | Filtre les ressources en fonction des tags IAM. | ❌          | `{"operator": "EQ", "value": "production"}` |

**Réponse** :

Type : `string[]`

Description : Liste des noms de services Stack disponibles.

---

### 2. Récupérer les propriétés d'un service Stack (MIS)

**Endpoint** : `/stack/mis/{serviceName}`

**Méthode HTTP** : `GET`

**Description** : Retourne les propriétés d'un service Stack spécifique identifié par son nom interne.

**Statut API** : Stable (version de production)

**Paramètres** :

| Paramètre     | Type     | Description                       | Obligatoire | Exemple          |
| ------------- | -------- | --------------------------------- | ----------- | ---------------- |
| `serviceName` | `string` | Nom interne du service Stack MIS. | ✅          | `"myMisService"` |

**Réponse** :

Type : `stack.mis.productWithIAM`

Description : Objet contenant les propriétés du service Stack et les métadonnées IAM associées.

---

### 3. Récupérer les informations d'un service Stack

**Endpoint** : `/stack/mis/{serviceName}/serviceInfos`

**Méthode HTTP** : `GET`

**Description** : Retourne les informations détaillées d'un service Stack spécifique.

**Statut API** : Stable (version de production)

**Paramètres** :

| Paramètre     | Type     | Description                       | Obligatoire | Exemple       |
| ------------- | -------- | --------------------------------- | ----------- | ------------- |
| `serviceName` | `string` | Nom interne du service Stack MIS. | ✅          | `"myService"` |

**Réponse** :

Type : `services.Service`

Description : Objet contenant les informations du service Stack.

---

### 4. Mettre à jour les informations d'un service Stack

**Endpoint** : `/stack/mis/{serviceName}/serviceInfos`

**Méthode HTTP** : `PUT`

**Description** : Met à jour les propriétés d'un service Stack spécifique.

**Statut API** : Stable (version de production)

**Paramètres** :

| Paramètre     | Type               | Description                                       | Obligatoire | Exemple                                        |
| ------------- | ------------------ | ------------------------------------------------- | ----------- | ---------------------------------------------- |
| `serviceName` | `string`           | Nom interne du service Stack MIS.                 | ✅          | `"myService"`                                  |
| `body`        | `services.Service` | Nouvelle configuration des propriétés du service. | ✅          | [Voir structure ci-dessous](#services.Service) |

**Réponse** :

Type : `void`

Description : Aucune réponse n'est retournée après une mise à jour réussie.

---

## Structures de Données

### `services.Service`

**Description** : Détails complets d'un service Stack OVHcloud.

**Propriétés** :

| Propriété               | Type                      | Description                                                                    | Lecture seule | Obligatoire |
| ----------------------- | ------------------------- | ------------------------------------------------------------------------------ | ------------- | ----------- |
| `canDeleteAtExpiration` | `boolean`                 | Indique si le service peut être configuré pour être supprimé à expiration.     | ✅            | ❌          |
| `contactAdmin`          | `string`                  | Identifiant du contact administratif (format : `coreTypes.AccountId:string`).  | ✅            | ❌          |
| `contactBilling`        | `string`                  | Identifiant du contact de facturation (format : `coreTypes.AccountId:string`). | ✅            | ❌          |
| `contactTech`           | `string`                  | Identifiant du contact technique (format : `coreTypes.AccountId:string`).      | ✅            | ❌          |
| `creation`              | `date`                    | Date de création du service.                                                   | ✅            | ❌          |
| `domain`                | `string`                  | Domaine du service.                                                            | ✅            | ❌          |
| `engagedUpTo`           | `date`                    | Date jusqu'à laquelle le service est engagé.                                   | ✅            | ❌          |
| `expiration`            | `date`                    | Date d'expiration du service.                                                  | ✅            | ❌          |
| `possibleRenewPeriod`   | `long[]`                  | Liste des périodes de renouvellement possibles (en mois).                      | ✅            | ❌          |
| `renew`                 | `service.RenewType`       | Configuration du renouvellement du service.                                    | ❌            | ❌          |
| `renewalType`           | `service.RenewalTypeEnum` | Type de renouvellement du service.                                             | ✅            | ❌          |
| `serviceId`             | `long`                    | Identifiant unique du service.                                                 | ✅            | ❌          |
| `status`                | `service.StateEnum`       | Statut du service (ex: `ok`, `expired`, `inCreation`, etc.).                   | ✅            | ❌          |

---

### `service.RenewType`

**Description** : Configuration du renouvellement pour un service spécifique.

**Propriétés** :

| Propriété            | Type      | Description                                                  |
| -------------------- | --------- | ------------------------------------------------------------ |
| `automatic`          | `boolean` | Le service est automatiquement renouvelé.                    |
| `deleteAtExpiration` | `boolean` | Le service sera supprimé à expiration.                       |
| `forced`             | `boolean` | Le service est forcé au renouvellement.                      |
| `manualPayment`      | `boolean` | Le service nécessite un paiement manuel pour être renouvelé. |
| `period`             | `long`    | Période de renouvellement en mois.                           |

---

### `service.RenewalTypeEnum`

**Description** : Types de renouvellement disponibles.

**Valeurs Enum** :

- `automaticForcedProduct`
- `automaticV2012`
- `automaticV2014`
- `automaticV2016`
- `automaticV2024`
- `manual`
- `oneShot`
- `option`

---

### `service.StateEnum`

**Description** : Statuts possibles d'un service.

**Valeurs Enum** :

- `autorenewInProgress`
- `expired`
- `inCreation`
- `ok`
- `pendingDebt`
- `unPaid`

---

### `stack.mis.productWithIAM`

**Description** : Objet Stack MIS avec métadonnées IAM.

**Propriétés** :

| Propriété | Type                   | Description                                  | Lecture seule |
| --------- | ---------------------- | -------------------------------------------- | ------------- |
| `domain`  | `string`               | Domaine du service.                          | ✅            |
| `iam`     | `iam.ResourceMetadata` | Métadonnées IAM associées au service.        | ✅            |
| `type`    | `stack.StackTypeEnum`  | Type d'infrastructure (`MDS`, `MIS`, `MOS`). | ✅            |

---

### `stack.StackTypeEnum`

**Description** : Types d'infrastructure Stack.

**Valeurs Enum** :

- `MDS`
- `MIS`
- `MOS`

---

### `iam.ResourceMetadata`

**Description** : Métadonnées IAM d'une ressource.

**Propriétés** :

| Propriété     | Type                             | Description                                                               | Lecture seule |
| ------------- | -------------------------------- | ------------------------------------------------------------------------- | ------------- |
| `displayName` | `string`                         | Nom d'affichage de la ressource.                                          | ✅            |
| `id`          | `uuid`                           | Identifiant unique de la ressource.                                       | ✅            |
| `state`       | `iam.ResourceMetadata.StateEnum` | État de la ressource.                                                     | ✅            |
| `tags`        | `map[string]string`              | Tags associés à la ressource. Les tags calculés sont préfixés par `ovh:`. | ✅            |
| `urn`         | `string`                         | Nom unique de la ressource utilisé dans les politiques IAM.               | ✅            |

---

### `iam.ResourceMetadata.StateEnum`

**Description** : États possibles d'une ressource.

**Valeurs Enum** :

- `EXPIRED`
- `IN_CREATION`
- `OK`
- `SUSPENDED`

---

### `iam.resource.TagFilter`

**Description** : Filtre pour les tags IAM.

**Propriétés** :

| Propriété  | Type                                  | Description                                                     | Lecture seule |
| ---------- | ------------------------------------- | --------------------------------------------------------------- | ------------- |
| `operator` | `iam.resource.TagFilter.OperatorEnum` | Opérateur à utiliser pour filtrer les tags (par défaut : `EQ`). | ✅            |
| `value`    | `string`                              | Valeur à utiliser pour filtrer les tags.                        | ✅            |

---

### `iam.resource.TagFilter.OperatorEnum`

**Description** : Opérateurs disponibles pour filtrer les tags.

**Valeurs Enum** :

- `EQ` (égal)
- `EXISTS` (existe)
- `ILIKE` (insensible à la casse)
- `LIKE` (contient)
- `NEQ` (différent de)
- `NEXISTS` (n'existe pas)

---

## Actions IAM Requises

| Endpoint                                | Action IAM                          | Description                                                        |
| --------------------------------------- | ----------------------------------- | ------------------------------------------------------------------ |
| `/stack/mis`                            | `stackMis:apiovh:get`               | Nécessaire pour lister les services Stack.                         |
| `/stack/mis/{serviceName}`              | `stackMis:apiovh:get`               | Nécessaire pour récupérer les propriétés d'un service Stack.       |
| `/stack/mis/{serviceName}/serviceInfos` | `stackMis:apiovh:serviceInfos/get`  | Nécessaire pour récupérer les informations d'un service Stack.     |
| `/stack/mis/{serviceName}/serviceInfos` | `stackMis:apiovh:serviceInfos/edit` | Nécessaire pour mettre à jour les informations d'un service Stack. |

---

## Exemples d'Utilisation

### Exemple 1 : Lister les services Stack avec un filtre IAM

```json
{
    "iamTags": {
        "operator": "EQ",
        "value": "production"
    }
}
```

**Requête** :

```bash
curl -X GET "https://eu.api.ovh.com/v1/stack/mis" \
  -H "X-Ovh-Application: your_app_key" \
  -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  -H "X-Ovh-Signature: $signature" \
  -H "X-Ovh-Consumer: your_consumer_key"
```

**Explication** :

- L'endpoint `/stack/mis` est utilisé pour lister les services.
- Le paramètre `iamTags` permet de filtrer les services en fonction des tags IAM.
- L'opérateur `EQ` filtre les services ayant un tag `production` exactement égal à la chaîne fournie.

---

### Exemple 2 : Récupérer les propriétés d'un service Stack MIS

**Requête** :

```bash
curl -X GET "https://eu.api.ovh.com/v1/stack/mis/myMisService" \
  -H "X-Ovh-Application: your_app_key" \
  -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  -H "X-Ovh-Signature: $signature" \
  -H "X-Ovh-Consumer: your_consumer_key"
```

**Explication** :

- L'endpoint `/stack/mis/{serviceName}` est utilisé pour récupérer les propriétés d'un service Stack MIS.
- Remplacez `myMisService` par le nom interne de votre service Stack.

---

### Exemple 3 : Mettre à jour les informations d'un service Stack

**Requête** :

```bash
curl -X PUT "https://eu.api.ovh.com/v1/stack/mis/myService/serviceInfos" \
  -H "X-Ovh-Application: your_app_key" \
  -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  -H "X-Ovh-Signature: $signature" \
  -H "X-Ovh-Consumer: your_consumer_key" \
  -H "Content-Type: application/json" \
  -d '{
    "domain": "example.com",
    "expiration": "2026-12-31T00:00:00Z",
    "renewalType": "manual",
    "status": "ok"
  }'
```

**Explication** :

- L'endpoint `/stack/mis/{serviceName}/serviceInfos` est utilisé pour mettre à jour les informations d'un service Stack.
- Remplacez `myService` par le nom interne de votre service Stack.
- Le corps de la requête doit être un objet `services.Service` valide.

---

## Erreurs et Gestion des Erreurs

Les erreurs courantes incluent :

- **401 Unauthorized** : Si l'utilisateur n'a pas les droits IAM nécessaires pour l'opération demandée.
- **404 Not Found** : Si le service Stack spécifié n'existe pas ou n'est pas accessible.
- **422 Unprocessable Entity** : Si les paramètres fournis sont invalides ou manquants.

**Exemple d'erreur** :

```json
{
    "error": "Invalid service name",
    "message": "The service name provided does not match any existing service.",
    "status": 422
}
```

---

## Notes Importantes

- **Authentification** : Toutes les opérations nécessitent une authentification via les clés d'API OVHcloud (sauf indication contraire).
- **Types de Services** : Les services Stack peuvent être de type `MDS`, `MIS`, ou `MOS`.
- **Renouvellement** : Les services peuvent être automatiquement renouvelés, nécessiter un paiement manuel, ou être configurés pour être supprimés à expiration.
- **Tags IAM** : Les tags IAM permettent de filtrer les services en fonction des politiques d'accès.

---

## Historique des Modifications

| Version | Date       | Description                                                                      |
| ------- | ---------- | -------------------------------------------------------------------------------- |
| 1.0     | 2026-03-31 | Documentation initiale des opérations Stack (MIS, MDS, MOS) pour l'API OVHcloud. |

---

## Références

- [Documentation Officielle OVHcloud Stack](https://api.ovh.com/console/#/stack/mis)
- [OVHcloud API v1 - Authentification](https://api.ovh.com/authentication)
- [IAM Tags et Filtres](https://docs.ovh.com/fr/public-cloud/iam/tags/)

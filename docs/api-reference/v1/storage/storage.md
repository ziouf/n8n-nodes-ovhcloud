# OVHcloud Storage API v1.0 - Documentation Technique

Cette documentation décrit les endpoints et opérations disponibles dans l'API OVHcloud Storage v1.0 pour la gestion des services NetApp, des partages, des réplications et des politiques de snapshots.

## Table des Matières

- [Aperçu](#aperçu)
- [Version de l'API](#version-de-lapi)
- [Endpoints et Opérations](#endpoints-et-opérations)
  - [Services NetApp](#services-netapp)
  - [Partages (Shares)](#partages-shares)
  - [ACLs (Access Control Lists)](#acls-access-control-lists)
  - [Snapshots](#snapshots)
  - [Politiques de Snapshots](#politiques-de-snapshots)
  - [Réplications de Partages](#réplications-de-partages)
  - [Compatibilité des Services](#compatibilité-des-services)
- [Types de Données](#types-de-données)
- [Authentification et Autorisations IAM](#authentification-et-autorisations-iam)
- [Exemples d'Utilisation](#exemples-dutilisation)
- [Gestion des Erreurs](#gestion-des-erreurs)
- [Historique des Versions](#historique-des-versions)

---

## Aperçu

L'API OVHcloud Storage permet de gérer les services de stockage NetApp, y compris les partages, les ACLs, les snapshots et les réplications. Elle suit les conventions RESTful et utilise des identifiants de type UUID pour les ressources.

**Base URL**: `https://api.ovh.com/1.0`

**Format des Réponses**: JSON

**Langue par Défaut**: Français (les réponses sont généralement en français, sauf indication contraire)

---

## Version de l'API

- **Version**: `1.0`
- **Statut**: Production stable

---

## Endpoints et Opérations

### Services NetApp

#### Liste des services disponibles

**Endpoint**: `GET /storage/netapp`

**Description**: Récupère la liste des services NetApp disponibles.

**Paramètres**:

| Nom       | Type                                  | Description                              | Obligatoire |
| --------- | ------------------------------------- | ---------------------------------------- | ----------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | Filtre les ressources selon les tags IAM | Non         |

**Réponse**: `storage.NetAppServiceWithIAM[]`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:get` (Obligatoire)

---

#### Détails d'un service

**Endpoint**: `GET /storage/netapp/{serviceName}`

**Description**: Récupère les détails d'un service NetApp spécifique.

**Paramètres**:

| Nom           | Type   | Description    | Obligatoire |
| ------------- | ------ | -------------- | ----------- |
| `serviceName` | `uuid` | Nom du service | Oui         |

**Réponse**: `storage.NetAppServiceWithIAM`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:get` (Obligatoire)

---

#### Mise à jour d'un service

**Endpoint**: `PUT /storage/netapp/{serviceName}`

**Description**: Met à jour les informations d'un service NetApp.

**Paramètres**:

| Nom                 | Type                          | Description            | Obligatoire |
| ------------------- | ----------------------------- | ---------------------- | ----------- |
| `serviceName`       | `uuid`                        | Nom du service         | Oui         |
| Corps de la requête | `storage.NetAppServiceUpdate` | Données de mise à jour | Oui         |

**Réponse**: `storage.NetAppService`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:edit` (Obligatoire)

---

#### Confirmation de terminaison d'un service

**Endpoint**: `POST /storage/netapp/{serviceName}/confirmTermination`

**Description**: Confirme la terminaison d'un service NetApp.

**Paramètres**:

| Nom                 | Type                          | Description             | Obligatoire |
| ------------------- | ----------------------------- | ----------------------- | ----------- |
| `serviceName`       | `uuid`                        | Nom du service          | Oui         |
| Corps de la requête | `services.confirmTermination` | Données de confirmation | Oui         |

**Réponse**: `string`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:confirmTermination` (Obligatoire)

---

#### Lancer une procédure de changement de contact

**Endpoint**: `POST /storage/netapp/{serviceName}/changeContact`

**Description**: Lance une procédure de changement de contact pour un service NetApp.

**Paramètres**:

| Nom                 | Type                     | Description                      | Obligatoire |
| ------------------- | ------------------------ | -------------------------------- | ----------- |
| `serviceName`       | `uuid`                   | Nom du service                   | Oui         |
| Corps de la requête | `services.changeContact` | Données de changement de contact | Oui         |

**Réponse**: `long[]`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:changeContact` (Obligatoire)

---

### Partages (Shares)

#### Liste des partages disponibles

**Endpoint**: `GET /storage/netapp/{serviceName}/network/{networkId}`

**Description**: Récupère les détails d'un partage spécifique.

**Paramètres**:

| Nom           | Type   | Description    | Obligatoire |
| ------------- | ------ | -------------- | ----------- |
| `serviceName` | `uuid` | Nom du service | Oui         |
| `networkId`   | `uuid` | ID du réseau   | Oui         |

**Réponse**: `storage.NetAppShare[]`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/get` (Obligatoire)

---

#### Détails d'un partage

**Endpoint**: `GET /storage/netapp/{serviceName}/share/{shareId}`

**Description**: Récupère les détails d'un partage spécifique.

**Paramètres**:

| Nom           | Type   | Description    | Obligatoire |
| ------------- | ------ | -------------- | ----------- |
| `serviceName` | `uuid` | Nom du service | Oui         |
| `shareId`     | `uuid` | ID du partage  | Oui         |

**Réponse**: `storage.NetAppShare`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/get` (Obligatoire)

---

#### Création d'un partage

**Endpoint**: `POST /storage/netapp/{serviceName}/share/{shareId}`

**Description**: Crée un nouveau partage.

**Paramètres**:

| Nom                 | Type                  | Description                | Obligatoire |
| ------------------- | --------------------- | -------------------------- | ----------- |
| `serviceName`       | `uuid`                | Nom du service             | Oui         |
| `shareId`           | `uuid`                | ID du partage              | Oui         |
| Corps de la requête | `storage.NetAppShare` | Données du partage à créer | Oui         |

**Réponse**: `storage.NetAppShare`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/create` (Obligatoire)

---

#### Mise à jour d'un partage

**Endpoint**: `PUT /storage/netapp/{serviceName}/share/{shareId}`

**Description**: Met à jour les propriétés d'un partage existant.

**Paramètres**:

| Nom                 | Type                        | Description            | Obligatoire |
| ------------------- | --------------------------- | ---------------------- | ----------- |
| `serviceName`       | `uuid`                      | Nom du service         | Oui         |
| `shareId`           | `uuid`                      | ID du partage          | Oui         |
| Corps de la requête | `storage.NetAppShareUpdate` | Données de mise à jour | Oui         |

**Réponse**: `storage.NetAppShare`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/edit` (Obligatoire)

---

#### Suppression d'un partage

**Endpoint**: `DELETE /storage/netapp/{serviceName}/share/{shareId}`

**Description**: Supprime un partage existant.

**Paramètres**:

| Nom           | Type   | Description    | Obligatoire |
| ------------- | ------ | -------------- | ----------- |
| `serviceName` | `uuid` | Nom du service | Oui         |
| `shareId`     | `uuid` | ID du partage  | Oui         |

**Réponse**: `void`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/delete` (Obligatoire)

---

#### Extension de la taille d'un partage

**Endpoint**: `POST /storage/netapp/{serviceName}/share/{shareId}/extend`

**Description**: Étend la taille d'un partage existant.

**Paramètres**:

| Nom                 | Type                                | Description         | Obligatoire |
| ------------------- | ----------------------------------- | ------------------- | ----------- |
| `serviceName`       | `uuid`                              | Nom du service      | Oui         |
| `shareId`           | `uuid`                              | ID du partage       | Oui         |
| Corps de la requête | `storage.NetAppShareExtendOrShrink` | Données d'extension | Oui         |

**Réponse**: `void`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/extend` (Obligatoire)

---

#### Réduction de la taille d'un partage

**Endpoint**: `POST /storage/netapp/{serviceName}/share/{shareId}/shrink`

**Description**: Réduit la taille d'un partage existant.

**Paramètres**:

| Nom                 | Type                                | Description          | Obligatoire |
| ------------------- | ----------------------------------- | -------------------- | ----------- |
| `serviceName`       | `uuid`                              | Nom du service       | Oui         |
| `shareId`           | `uuid`                              | ID du partage        | Oui         |
| Corps de la requête | `storage.NetAppShareExtendOrShrink` | Données de réduction | Oui         |

**Réponse**: `void`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/shrink` (Obligatoire)

---

### ACLs (Access Control Lists)

#### Liste des ACLs d'un partage

**Endpoint**: `GET /storage/netapp/{serviceName}/share/{shareId}/acl`

**Description**: Récupère la liste des ACLs (règles de contrôle d'accès) pour un partage spécifique.

**Paramètres**:

| Nom           | Type   | Description    | Obligatoire |
| ------------- | ------ | -------------- | ----------- |
| `serviceName` | `uuid` | Nom du service | Oui         |
| `shareId`     | `uuid` | ID du partage  | Oui         |

**Réponse**: `storage.NetAppShareACLRule[]`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/acl/get` (Obligatoire)

---

#### Création d'une ACL

**Endpoint**: `POST /storage/netapp/{serviceName}/share/{shareId}/acl`

**Description**: Crée une nouvelle règle ACL pour un partage.

**Paramètres**:

| Nom                 | Type                         | Description                     | Obligatoire |
| ------------------- | ---------------------------- | ------------------------------- | ----------- |
| `serviceName`       | `uuid`                       | Nom du service                  | Oui         |
| `shareId`           | `uuid`                       | ID du partage                   | Oui         |
| Corps de la requête | `storage.NetAppShareACLRule` | Données de la règle ACL à créer | Oui         |

**Réponse**: `storage.NetAppShareACLRule`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/acl/create` (Obligatoire)

---

#### Suppression d'une ACL

**Endpoint**: `DELETE /storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}`

**Description**: Supprime une règle ACL spécifique d'un partage.

**Paramètres**:

| Nom           | Type   | Description                    | Obligatoire |
| ------------- | ------ | ------------------------------ | ----------- |
| `serviceName` | `uuid` | Nom du service                 | Oui         |
| `shareId`     | `uuid` | ID du partage                  | Oui         |
| `aclRuleId`   | `uuid` | ID de la règle ACL à supprimer | Oui         |

**Réponse**: `void`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/acl/delete` (Obligatoire)

---

### Snapshots

#### Liste des snapshots d'un partage

**Endpoint**: `GET /storage/netapp/{serviceName}/share/{shareId}/snapshot`

**Description**: Récupère la liste des snapshots disponibles pour un partage.

**Paramètres**:

| Nom           | Type      | Description                                               | Obligatoire |
| ------------- | --------- | --------------------------------------------------------- | ----------- |
| `serviceName` | `uuid`    | Nom du service                                            | Oui         |
| `shareId`     | `uuid`    | ID du partage                                             | Oui         |
| `detail`      | `boolean` | Récupère les informations détaillées pour chaque snapshot | Non         |

**Réponse**: `storage.NetAppShareSnapshot[]`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/snapshot/get` (Obligatoire)

---

#### Détails d'un snapshot

**Endpoint**: `GET /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}`

**Description**: Récupère les détails d'un snapshot spécifique.

**Paramètres**:

| Nom           | Type   | Description    | Obligatoire |
| ------------- | ------ | -------------- | ----------- |
| `serviceName` | `uuid` | Nom du service | Oui         |
| `shareId`     | `uuid` | ID du partage  | Oui         |
| `snapshotId`  | `uuid` | ID du snapshot | Oui         |

**Réponse**: `storage.NetAppShareSnapshot`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/snapshot/get` (Obligatoire)

---

#### Suppression d'un snapshot

**Endpoint**: `DELETE /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}`

**Description**: Supprime un snapshot spécifique d'un partage.

**Paramètres**:

| Nom           | Type   | Description                | Obligatoire |
| ------------- | ------ | -------------------------- | ----------- |
| `serviceName` | `uuid` | Nom du service             | Oui         |
| `shareId`     | `uuid` | ID du partage              | Oui         |
| `snapshotId`  | `uuid` | ID du snapshot à supprimer | Oui         |

**Réponse**: `void`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/snapshot/delete` (Obligatoire)

---

#### Mise à jour d'un snapshot

**Endpoint**: `PUT /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}`

**Description**: Met à jour les propriétés d'un snapshot existant.

**Paramètres**:

| Nom                 | Type                                | Description                    | Obligatoire |
| ------------------- | ----------------------------------- | ------------------------------ | ----------- |
| `serviceName`       | `uuid`                              | Nom du service                 | Oui         |
| `shareId`           | `uuid`                              | ID du partage                  | Oui         |
| `snapshotId`        | `uuid`                              | ID du snapshot à mettre à jour | Oui         |
| Corps de la requête | `storage.NetAppShareSnapshotUpdate` | Données de mise à jour         | Oui         |

**Réponse**: `storage.NetAppShareSnapshot`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/snapshot/edit` (Obligatoire)

---

#### Réversion d'un partage vers un snapshot

**Endpoint**: `POST /storage/netapp/{serviceName}/share/{shareId}/revert`

**Description**: Révert un partage vers son dernier snapshot disponible.

**Paramètres**:

| Nom                 | Type                                  | Description          | Obligatoire |
| ------------------- | ------------------------------------- | -------------------- | ----------- |
| `serviceName`       | `uuid`                                | Nom du service       | Oui         |
| `shareId`           | `uuid`                                | ID du partage        | Oui         |
| Corps de la requête | `storage.NetAppShareRevertToSnapshot` | Données de réversion | Oui         |

**Réponse**: `storage.NetAppShareSnapshot`

**Statut de l'API**: Beta

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/revertToSnapshot` (Obligatoire)

---

#### Mise à jour de la politique de snapshot d'un partage

**Endpoint**: `PUT /storage/netapp/{serviceName}/share/{shareId}/snapshotPolicy`

**Description**: Met à jour la politique de snapshot d'un partage.

**Paramètres**:

| Nom                 | Type                                      | Description            | Obligatoire |
| ------------------- | ----------------------------------------- | ---------------------- | ----------- |
| `serviceName`       | `uuid`                                    | Nom du service         | Oui         |
| `shareId`           | `uuid`                                    | ID du partage          | Oui         |
| Corps de la requête | `storage.NetAppShareSnapshotPolicyUpdate` | Données de mise à jour | Oui         |

**Réponse**: `void`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/snapshotPolicy/edit` (Obligatoire)

---

#### Récupération des propriétés de réserve de snapshot

**Endpoint**: `GET /storage/netapp/{serviceName}/share/{shareId}/snapshotReserve`

**Description**: Récupère les propriétés de réserve de snapshot pour un partage.

**Paramètres**:

| Nom           | Type   | Description    | Obligatoire |
| ------------- | ------ | -------------- | ----------- |
| `serviceName` | `uuid` | Nom du service | Oui         |
| `shareId`     | `uuid` | ID du partage  | Oui         |

**Réponse**: `storage.NetAppShareSnapshotReserve`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:snapshotReserve/get` (Obligatoire)

---

#### Mise à jour des propriétés de réserve de snapshot

**Endpoint**: `PUT /storage/netapp/{serviceName}/share/{shareId}/snapshotReserve`

**Description**: Met à jour les propriétés de réserve de snapshot pour un partage.

**Paramètres**:

| Nom                 | Type                                       | Description            | Obligatoire |
| ------------------- | ------------------------------------------ | ---------------------- | ----------- |
| `serviceName`       | `uuid`                                     | Nom du service         | Oui         |
| `shareId`           | `uuid`                                     | ID du partage          | Oui         |
| Corps de la requête | `storage.NetAppShareSnapshotReserveUpdate` | Données de mise à jour | Oui         |

**Réponse**: `void`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:share/snapshotReserve/edit` (Obligatoire)

---

### Réplications de Partages

#### Liste des réplications de partages

**Endpoint**: `GET /storage/netapp/{serviceName}/shareReplication`

**Description**: Récupère la liste des réplications de partages disponibles.

**Paramètres**:

| Nom           | Type   | Description    | Obligatoire |
| ------------- | ------ | -------------- | ----------- |
| `serviceName` | `uuid` | Nom du service | Oui         |

**Réponse**: `storage.NetAppShareReplication[]`

**Statut de l'API**: Beta

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:shareReplication/get` (Obligatoire)

---

#### Détails d'une réplication

**Endpoint**: `GET /storage/netapp/{serviceName}/shareReplication/{shareReplicationId}`

**Description**: Récupère les détails d'une réplication de partage.

**Paramètres**:

| Nom                  | Type   | Description          | Obligatoire |
| -------------------- | ------ | -------------------- | ----------- |
| `serviceName`        | `uuid` | Nom du service       | Oui         |
| `shareReplicationId` | `uuid` | ID de la réplication | Oui         |

**Réponse**: `storage.NetAppShareReplication`

**Statut de l'API**: Beta

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:shareReplication/get` (Obligatoire)

---

#### Suppression d'une réplication

**Endpoint**: `DELETE /storage/netapp/{serviceName}/shareReplication/{shareReplicationId}`

**Description**: Supprime une réplication de partage.

**Paramètres**:

| Nom                  | Type   | Description          | Obligatoire |
| -------------------- | ------ | -------------------- | ----------- |
| `serviceName`        | `uuid` | Nom du service       | Oui         |
| `shareReplicationId` | `uuid` | ID de la réplication | Oui         |

**Réponse**: `void`

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:shareReplication/delete` (Obligatoire)

---

#### Acceptation d'une réplication

**Endpoint**: `POST /storage/netapp/{serviceName}/shareReplication/{shareReplicationId}/accept`

**Description**: Accepte une réplication de partage.

**Paramètres**:

| Nom                  | Type                                   | Description           | Obligatoire |
| -------------------- | -------------------------------------- | --------------------- | ----------- |
| `serviceName`        | `uuid`                                 | Nom du service        | Oui         |
| `shareReplicationId` | `uuid`                                 | ID de la réplication  | Oui         |
| Corps de la requête  | `storage.NetAppShareReplicationAccept` | Données d'acceptation | Oui         |

**Réponse**: `storage.NetAppShareReplication`

**Statut de l'API**: Beta

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:shareReplication/accept` (Obligatoire)

---

#### Cutover d'une réplication

**Endpoint**: `POST /storage/netapp/{serviceName}/shareReplication/{shareReplicationId}/cutover`

**Description**: Effectue un cutover sur une réplication de partage acceptée.

**Paramètres**:

| Nom                  | Type   | Description          | Obligatoire |
| -------------------- | ------ | -------------------- | ----------- |
| `serviceName`        | `uuid` | Nom du service       | Oui         |
| `shareReplicationId` | `uuid` | ID de la réplication | Oui         |

**Réponse**: `storage.NetAppShareReplication`

**Statut de l'API**: Beta

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:shareReplication/cutover` (Obligatoire)

---

### Compatibilité des Services

#### Vérification de la compatibilité des services

**Endpoint**: `GET /storage/netapp/{serviceName}/shareReplicationServicesCompatibility`

**Description**: Vérifie la compatibilité des services pour une réplication de partage.

**Paramètres**:

| Nom              | Type      | Description                                                            | Obligatoire |
| ---------------- | --------- | ---------------------------------------------------------------------- | ----------- |
| `serviceName`    | `uuid`    | Nom du service source                                                  | Oui         |
| `compatibleOnly` | `boolean` | Si `true`, ne retourne que les services compatibles comme destinations | Non         |

**Réponse**: `storage.NetAppShareReplicationServicesCompatibility[]`

**Statut de l'API**: Beta

**Autorisations IAM Requises**:

- `storageNetApp:apiovh:shareReplication/get` (Obligatoire)

---

## Types de Données

### Principaux Types Utilisés

- **`uuid`**: Identifiant unique universel (ex: `123e4567-e89b-12d3-a456-426614174000`)
- **`boolean`**: Booléen (`true` ou `false`)
- **`string`**: Chaîne de caractères
- **`long[]`**: Tableau de valeurs numériques longues
- **`void`**: Pas de réponse (opération sans retour)

### Types Spécifiques aux Services NetApp

#### `storage.NetAppServiceWithIAM`

```json
{
    "serviceName": "uuid",
    "status": "string",
    "size": "long",
    "snapshotPolicies": ["storage.NetAppSnapshotPolicy"],
    "iam": { "tags": ["string"], "policies": ["string"] }
}
```

#### `storage.NetAppServiceUpdate`

```json
{
    "status": "string",
    "size": "long",
    "description": "string"
}
```

#### `storage.NetAppService`

```json
{
    "serviceName": "uuid",
    "status": "string",
    "size": "long",
    "description": "string"
}
```

### Types Spécifiques aux Partages

#### `storage.NetAppShare`

```json
{
    "shareId": "uuid",
    "name": "string",
    "size": "long",
    "path": "string",
    "status": "string",
    "acls": ["storage.NetAppShareACLRule"]
}
```

#### `storage.NetAppShareUpdate`

```json
{
    "name": "string",
    "size": "long",
    "path": "string",
    "status": "string"
}
```

#### `storage.NetAppShareExtendOrShrink`

```json
{
    "size": "long"
}
```

### Types Spécifiques aux ACLs

#### `storage.NetAppShareACLRule`

```json
{
    "aclRuleId": "uuid",
    "access": "string",
    "type": "string",
    "user": "string",
    "group": "string"
}
```

### Types Spécifiques aux Snapshots

#### `storage.NetAppShareSnapshot`

```json
{
    "snapshotId": "uuid",
    "name": "string",
    "date": "string",
    "status": "string",
    "shareId": "uuid"
}
```

#### `storage.NetAppShareSnapshotUpdate`

```json
{
    "name": "string",
    "description": "string"
}
```

#### `storage.NetAppShareSnapshotReserve`

```json
{
    "reserveSize": "long",
    "usedSize": "long"
}
```

#### `storage.NetAppShareSnapshotReserveUpdate`

```json
{
    "reserveSize": "long"
}
```

#### `storage.NetAppSnapshotPolicy`

```json
{
    "policyId": "uuid",
    "name": "string",
    "schedule": "string",
    "retention": "long"
}
```

### Types Spécifiques aux Réplications

#### `storage.NetAppShareReplication`

```json
{
    "shareReplicationId": "uuid",
    "sourceShareId": "uuid",
    "destinationShareId": "uuid",
    "status": "string",
    "date": "string"
}
```

#### `storage.NetAppShareReplicationCreate`

```json
{
    "destinationShareId": "uuid",
    "description": "string"
}
```

#### `storage.NetAppShareReplicationAccept`

```json
{
    "destinationShareId": "uuid"
}
```

#### `storage.NetAppShareReplicationServicesCompatibility`

```json
{
    "serviceName": "uuid",
    "compatible": "boolean"
}
```

---

## Authentification et Autorisations IAM

### Authentification

L'API Storage utilise le système d'authentification OVHcloud avec les clés suivantes :

- **`host`**: URL de l'API OVHcloud (ex: `https://api.ovh.com/1.0`)
- **`applicationKey`**: Clé d'application fournie lors de l'enregistrement de l'application
- **`applicationSecret`**: Secret d'application pour signer les requêtes
- **`consumerKey`**: Clé de consommateur pour l'authentification utilisateur

### Autorisations IAM Requises

Chaque endpoint nécessite une ou plusieurs autorisations IAM spécifiques. Voici les autorisations courantes :

- **`storageNetApp:apiovh:get`**: Lecture des services NetApp
- **`storageNetApp:apiovh:edit`**: Mise à jour des services NetApp
- **`storageNetApp:apiovh:share/create`**: Création de partages
- **`storageNetApp:apiovh:share/get`**: Lecture des partages
- **`storageNetApp:apiovh:share/delete`**: Suppression de partages
- **`storageNetApp:apiovh:share/acl/create`**: Création d'ACLs
- **`storageNetApp:apiovh:share/acl/get`**: Lecture des ACLs
- **`storageNetApp:apiovh:share/acl/delete`**: Suppression d'ACLs
- **`storageNetApp:apiovh:share/snapshot/get`**: Lecture des snapshots
- **`storageNetApp:apiovh:share/snapshot/delete`**: Suppression des snapshots
- **`storageNetApp:apiovh:share/snapshot/create`**: Création de snapshots
- **`storageNetApp:apiovh:share/snapshot/edit`**: Mise à jour des snapshots
- **`storageNetApp:apiovh:share/revertToSnapshot`**: Réversion d'un partage vers un snapshot
- **`storageNetApp:apiovh:share/extend`**: Extension de la taille d'un partage
- **`storageNetApp:apiovh:share/shrink`**: Réduction de la taille d'un partage
- **`storageNetApp:apiovh:share/snapshotPolicy/get`**: Lecture des politiques de snapshot
- **`storageNetApp:apiovh:share/snapshotPolicy/edit`**: Mise à jour des politiques de snapshot
- **`storageNetApp:apiovh:share/snapshotReserve/get`**: Lecture des réserves de snapshot
- **`storageNetApp:apiovh:share/snapshotReserve/edit`**: Mise à jour des réserves de snapshot
- **`storageNetApp:apiovh:shareReplication/get`**: Lecture des réplications de partages
- **`storageNetApp:apiovh:shareReplication/create`**: Création de réplications
- **`storageNetApp:apiovh:shareReplication/accept`**: Acceptation de réplications
- **`storageNetApp:apiovh:shareReplication/delete`**: Suppression de réplications
- **`storageNetApp:apiovh:shareReplication/cutover`**: Cutover de réplications

### Obtention des Autorisations

Pour obtenir les autorisations nécessaires, consultez la documentation OVHcloud sur [l'authentification IAM](https://docs.ovh.com/fr/public-cloud/iam/).

---

## Exemples d'Utilisation

### Liste des services NetApp

```bash
curl -X GET "https://api.ovh.com/1.0/storage/netapp" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey"
```

**Explication** :

- Remplacez `$applicationKey`, `$signature` et `$consumerKey` par vos valeurs réelles.
- La signature est générée en utilisant votre `applicationSecret` et les paramètres de la requête.

---

### Détails d'un service NetApp

```bash
curl -X GET "https://api.ovh.com/1.0/storage/netapp/{serviceName}" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey"
```

**Explication** :

- Remplacez `{serviceName}` par l'identifiant UUID du service.
- Remplacez les variables d'en-tête par vos valeurs réelles.

---

### Mise à jour d'un service NetApp

```bash
curl -X PUT "https://api.ovh.com/1.0/storage/netapp/{serviceName}" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey" \
     -H "Content-Type: application/json" \
     -d '{
           "status": "active",
           "size": 1000,
           "description": "Mise à jour du service"
         }'
```

**Explication** :

- Le corps de la requête doit être un objet `storage.NetAppServiceUpdate`.
- Remplacez les valeurs par celles que vous souhaitez mettre à jour.

---

### Création d'un partage

```bash
curl -X POST "https://api.ovh.com/1.0/storage/netapp/{serviceName}/share/{shareId}" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey" \
     -H "Content-Type: application/json" \
     -d '{
           "name": "mon-partage",
           "size": 500,
           "path": "/mon/chemin"
         }'
```

**Explication** :

- Le corps de la requête doit être un objet `storage.NetAppShare`.
- Remplacez `{serviceName}` et `{shareId}` par les identifiants UUID réels.

---

### Mise à jour d'un partage

```bash
curl -X PUT "https://api.ovh.com/1.0/storage/netapp/{serviceName}/share/{shareId}" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey" \
     -H "Content-Type: application/json" \
     -d '{
           "name": "mon-partage-mis-a-jour",
           "size": 1000,
           "path": "/mon/chemin/mis-a-jour",
           "status": "active"
         }'
```

**Explication** :

- Le corps de la requête doit être un objet `storage.NetAppShareUpdate`.
- Remplacez les valeurs par celles que vous souhaitez mettre à jour.

---

### Suppression d'un partage

```bash
curl -X DELETE "https://api.ovh.com/1.0/storage/netapp/{serviceName}/share/{shareId}" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey"
```

**Explication** :

- Aucun corps de requête n'est nécessaire pour cette opération.
- Remplacez `{serviceName}` et `{shareId}` par les identifiants UUID réels.

---

### Extension de la taille d'un partage

```bash
curl -X POST "https://api.ovh.com/1.0/storage/netapp/{serviceName}/share/{shareId}/extend" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey" \
     -H "Content-Type: application/json" \
     -d '{
           "size": 2000
         }'
```

**Explication** :

- Le corps de la requête doit être un objet `storage.NetAppShareExtendOrShrink`.
- Remplacez `{serviceName}` et `{shareId}` par les identifiants UUID réels.
- La nouvelle taille doit être supérieure à la taille actuelle du partage.

---

### Réduction de la taille d'un partage

```bash
curl -X POST "https://api.ovh.com/1.0/storage/netapp/{serviceName}/share/{shareId}/shrink" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%S:%MZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey" \
     -H "Content-Type: application/json" \
     -d '{
           "size": 300
         }'
```

**Explication** :

- Le corps de la requête doit être un objet `storage.NetAppShareExtendOrShrink`.
- Remplacez `{serviceName}` et `{shareId}` par les identifiants UUID réels.
- La nouvelle taille doit être inférieure à la taille actuelle du partage.

---

### Liste des ACLs d'un partage

```bash
curl -X GET "https://api.ovh.com/1.0/storage/netapp/{serviceName}/share/{shareId}/acl" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey"
```

**Explication** :

- Remplacez `{serviceName}` et `{shareId}` par les identifiants UUID réels.

---

### Création d'une ACL

```bash
curl -X POST "https://api.ovh.com/1.0/storage/netapp/{serviceName}/share/{shareId}/acl" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey" \
     -H "Content-Type: application/json" \
     -d '{
           "access": "read",
           "type": "user",
           "user": "john.doe"
         }'
```

**Explication** :

- Le corps de la requête doit être un objet `storage.NetAppShareACLRule`.
- Remplacez `{serviceName}` et `{shareId}` par les identifiants UUID réels.
- Les valeurs `access` et `type` doivent être valides selon les politiques de votre organisation.

---

### Suppression d'une ACL

```bash
curl -X DELETE "https://api.ovh.com/1.0/storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey"
```

**Explication** :

- Remplacez `{serviceName}`, `{shareId}` et `{aclRuleId}` par les identifiants UUID réels.

---

### Liste des Snapshots d'un Partage

```bash
curl -X GET "https://api.ovh.com/1.0/storage/netapp/{serviceName}/share/{shareId}/snapshot" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey"
```

**Explication** :

- Remplacez `{serviceName}` et `{shareId}` par les identifiants UUID réels.

---

### Réversion d'un Partage vers un Snapshot

```bash
curl -X POST "https://api.ovh.com/1.0/storage/netapp/{serviceName}/share/{shareId}/revert" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey" \
     -H "Content-Type: application/json" \
     -d '{
           "snapshotId": "{snapshotId}"
         }'
```

**Explication** :

- Remplacez `{serviceName}, `{shareId}`et`{snapshotId}` par les identifiants UUID réels.
- Le snapshot doit être associé au partage spécifié.

---

### Liste des Réplications de Partages

```bash
curl -X GET "https://api.ovh.com/1.0/storage/netapp/{serviceName}/shareReplication" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey"
```

**Explication** :

- Remplacez `{serviceName}` par l'identifiant UUID réel du service source.

---

### Acceptation d'une Réplication de Partage

```bash
curl -X POST "https://api.ovh.com/1.0/storage/netapp/{serviceName}/shareReplication/{shareReplicationId}/accept" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey" \
     -H "Content-Type: application/json" \
     -d '{
           "destinationShareId": "{destinationShareId}"
         }'
```

**Explication** :

- Remplacez `{serviceName}, `{shareReplicationId}`et`{destinationShareId}` par les identifiants UUID réels.
- Le partage de destination doit être compatible avec la réplication.

---

### Cutover d'une Réplication de Partage

```bash
curl -X POST "https://api.ovh.com/1.0/storage/netapp/{serviceName}/shareReplication/{shareReplicationId}/cutover" \
     -H "X-Ovh-Application: $applicationKey" \
     -H "X-Ovh-Timestamp: $(date -u +%Y-%m-%dT%H:%M:%SZ)" \
     -H "X-Ovh-Signature: $signature" \
     -H "X-Ovh-Consumer: $consumerKey"
```

**Explication** :

- Remplacez `{serviceName}` et `{shareReplicationId}` par les identifiants UUID réels.
- Cette opération finalise la réplication et bascule le partage source vers la destination.

---

## Gestion des Erreurs

### Codes d'Erreur Courants

| Code HTTP | Description                                    | Solution                                                                                           |
| --------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `400`     | Mauvaise requête (paramètres invalides)        | Vérifiez les paramètres et le corps de la requête                                                  |
| `401`     | Non autorisé (clé d'authentification invalide) | Vérifiez les clés `applicationKey`, `applicationSecret` et `consumerKey`                           |
| `403`     | Accès refusé (autorisations IAM manquantes)    | Vérifiez que l'autorisation requise est présente dans votre token IAM                              |
| `404`     | Ressource non trouvée                          | Vérifiez que l'identifiant UUID est correct                                                        |
| `429`     | Trop de requêtes                               | Attendez avant de faire une nouvelle requête ou utilisez un token IAM avec des limites appropriées |
| `500`     | Erreur interne du serveur                      | Contactez le support OVHcloud                                                                      |

---

### Messages d'Erreur Typiques

- **`400 Bad Request`** :

  ```json
  {
      "error": "Invalid share size",
      "message": "La taille du partage doit être un nombre positif et supérieure à la taille actuelle."
  }
  ```

- **`403 Forbidden`** :

  ```json
  {
      "error": "Missing IAM permission",
      "message": "L'autorisation 'storageNetApp:apiovh:share/get' est requise pour lire les partages."
  }
  ```

- **`404 Not Found`** :

  ```json
  {
      "error": "Share not found",
      "message": "Le partage avec l'ID '{shareId}' n'existe pas ou a été supprimé."
  }
  ```

---

### Erreurs Spécifiques aux Endpoints

- **Extension/réduction d'un partage** :
  - Si la nouvelle taille est inférieure à la taille utilisée :

    ```json
    {
        "error": "Insufficient space",
        "message": "La taille du partage ne peut pas être réduite en dessous de la taille utilisée."
    }
    ```

  - Si le partage est déjà en cours d'extension/réduction :

    ```json
    {
        "error": "Operation in progress",
        "message": "Une opération de '{operationType}' est déjà en cours pour ce partage."
    }
    ```

---

## Historique des Versions

| Version | Date       | Statut     | Changements Principaux            |
| ------- | ---------- | ---------- | --------------------------------- |
| `1.0`   | 2026-03-31 | Production | Version initiale de l'API Storage |

---

## Notes Supplémentaires

- **Beta** : Les endpoints marqués comme Beta peuvent changer sans préavis.
- **UUID** : Toujours utiliser des identifiants UUID valides pour les opérations.
- **Taille des Partages** : Les opérations d'extension et de réduction nécessitent une validation des tailles.
- **ACLs** : Les règles ACL doivent respecter les politiques de sécurité de votre organisation.
- **Snapshots** : La réversion d'un partage vers un snapshot est une opération destructive (les données actuelles seront perdues).

---

## Support et Ressources

- **Documentation OVHcloud** : [https://docs.ovh.com/fr/public-cloud/](https://docs.ovh.com/fr/public-cloud/)
- **Support OVHcloud** : [https://www.ovhcloud.com/fr/support/](https://www.ovhcloud.com/fr/support/)
- **API Status** : [https://status.ovhcloud.com/](https://status.ovhcloud.com/)

---

*Documentation générée automatiquement à partir des spécifications de l'API OVHcloud Storage v1.0.*

# OVHcloud Dedicated Server API v1

Ce document décrit les endpoints et opérations disponibles pour interagir avec les **API OVHcloud dédiées aux serveurs dédiés** via n8n. Ces API permettent de gérer les serveurs dédiés, leurs fonctionnalités (comme les backups, le firewall, ou les IPMI), et leurs propriétés associées.

---

## Prérequis

### 1. Authentification OVHcloud

Pour utiliser les API OVHcloud, vous devez configurer une **credential OVH API** dans n8n. Les informations nécessaires sont :

- **Endpoint** : `ovh-eu`
- **Application Key** : Votre clé d'application OVHcloud.
- **Application Secret** : Votre secret d'application OVHcloud.
- **Consumer Key** : Votre clé de consommateur OVHcloud.

> **Note** : Si un endpoint est marqué `noAuthentication: true`, il n'est pas nécessaire de fournir ces informations.

### 2. Permissions IAM

Certaines opérations nécessitent des **permissions IAM** spécifiques. Voici les actions IAM couramment requises :

- `dedicatedServer:apiovh:get` : Lire les propriétés d'un serveur dédié.
- `dedicatedServer:apiovh:put` : Modifier les propriétés d'un serveur dédié.
- `dedicatedServer:apiovh:boot/get` : Lister les netboots compatibles.
- `dedicatedServer:apiovh:features/backupFTP/create` : Créer un backup FTP.
- `dedicatedServer:apiovh:features/backupFTP/delete` : Supprimer un backup FTP.

> **Attention** : Les actions IAM marquées comme `required: true` doivent être configurées dans votre credential OVHcloud pour que l'opération fonctionne.

### 3. Accès aux API OVHcloud

- **URL de base** : `https://api.ovh.com/1.0`
- **Documentation officielle** : [OVHcloud API Dedicated Server](https://api.ovh.com/1.0-dedicated-server)

---

## Endpoints et Opérations

### 1. `/dedicated/server`

**Description** : Opérations liées aux serveurs dédiés.

#### **Opérations disponibles**

| Méthode HTTP | Description                           | Statut API | Authentification | Actions IAM requises                  |
| ------------ | ------------------------------------- | ---------- | ---------------- | ------------------------------------- |
| `GET`        | Lister les serveurs disponibles       | PRODUCTION | Oui              | `dedicatedServer:apiovh:get` (requis) |
| `GET`        | Récupérer les propriétés d'un serveur | PRODUCTION | Oui              | `dedicatedServer:apiovh:get` (requis) |
| `PUT`        | Modifier les propriétés d'un serveur  | PRODUCTION | Oui              | `dedicatedServer:apiovh:put` (requis) |

##### **Paramètres**

- **Pour `GET /dedicated/server`** :
  - `iamTags` (query, type : `map[string][]iam.resource.TagFilter`) :
    - **Description** : Filtrer les ressources en fonction des tags IAM.
    - **Exemple** :

      ```json
      {
          "admin": ["dedicatedServer:apiovh:get"],
          "tags": {
              "environment": ["production"]
          }
      }
      ```

- **Pour `GET /dedicated/server/{serviceName}`** :
  - `serviceName` (path, type : `string`) :
    - **Description** : Le nom interne de votre serveur dédié.
    - **Exemple** : `ns123456.ip-123-45-678.eu`

- **Pour `PUT /dedicated/server/{serviceName}`** :
  - `serviceName` (path, type : `string`) :
    - **Description** : Le nom interne de votre serveur dédié.
  - `body` (type : `dedicated.server.Dedicated`) :
    - **Description** : Les nouvelles propriétés du serveur dédié.
    - **Exemple** :

      ```json
      {
          "status": "ok",
          "comment": "Modification des propriétés du serveur"
      }
      ```

---

### 2. `/dedicated/server/availabilities`

**Description** : Lister les disponibilités des serveurs dédiés.

#### **Opérations disponibles**

| Méthode HTTP | Description                        | Statut API | Authentification | Actions IAM requises |
| ------------ | ---------------------------------- | ---------- | ---------------- | -------------------- |
| `GET`        | Lister les disponibilités par pays | DEPRECATED | Non              | Aucune               |

> **⚠️ Attention** : Cette API est **dépréciée** et sera supprimée le **21 avril 2026**. Utilisez plutôt `/1.0/dedicated/server/datacenter/availabilities`.

##### **Paramètres**

- `country` (query, type : `nichandle.OvhSubsidiaryEnum`, **requis**) :
  - **Description** : Le pays où la disponibilité est demandée.
  - **Exemple** : `fr`
- `hardware` (query, type : `string`, **optionnel**) :
  - **Description** : Le type de matériel demandé.
  - **Exemple** : `gpu`

---

### 3. `/dedicated/server/availabilities/raw`

**Description** : Lister les disponibilités brutes des serveurs dédiés.

#### **Opérations disponibles**

| Méthode HTTP | Description                      | Statut API | Authentification | Actions IAM requises |
| ------------ | -------------------------------- | ---------- | ---------------- | -------------------- |
| `GET`        | Lister les disponibilités brutes | PRODUCTION | Non              | Aucune               |

##### **Paramètres**

Aucun paramètre requis.

---

### 4. `/dedicated/server/datacenter/availabilities`

**Description** : Lister les disponibilités des serveurs dédiés par datacenter.

#### **Opérations disponibles**

| Méthode HTTP | Description                              | Statut API | Authentification | Actions IAM requises |
| ------------ | ---------------------------------------- | ---------- | ---------------- | -------------------- |
| `GET`        | Lister les disponibilités par datacenter | PRODUCTION | Non              | Aucune               |

##### **Paramètres**

- `datacenters` (query, type : `string`, **optionnel**) :
  - **Description** : Les noms des datacenters séparés par des virgules.
  - **Exemple** : `gra1,par2`
- `excludeDatacenters` (query, type : `boolean`, **optionnel**) :
  - **Description** : Si `true`, tous les datacenters sont retournés sauf ceux listés dans `datacenters`.
- `gpu` (query, type : `string`, **optionnel**) :
  - **Description** : Le nom du matériel GPU.
- `memory` (query, type : `string`, **optionnel**) :
  - **Description** : Le nom du matériel mémoire.
- `planCode` (query, type : `string`, **optionnel**) :
  - **Description** : Le code du plan où le matériel est impliqué.
- `server` (query, type : `string`, **optionnel**) :
  - **Description** : Le nom du matériel de base.
- `storage` (query, type : `string`, **optionnel**) :
  - **Description** : Le nom du matériel de stockage.
- `systemStorage` (query, type : `string`, **optionnel**) :
  - **Description** : Le nom du matériel de stockage système.

---

### 5. `/dedicated/server/{serviceName}/biosSettings`

**Description** : Gérer les paramètres BIOS d'un serveur dédié.

#### **Opérations disponibles**

| Méthode HTTP | Description                   | Statut API | Authentification | Actions IAM requises                               |
| ------------ | ----------------------------- | ---------- | ---------------- | -------------------------------------------------- |
| `GET`        | Récupérer les paramètres BIOS | BETA       | Non              | `dedicatedServer:apiovh:biosSettings/get` (requis) |

##### **Paramètres**

- `serviceName` (path, type : `string`, **requis**) :
  - **Description** : Le nom interne de votre serveur dédié.
  - **Exemple** : `ns123456.ip-123-45-678.eu`

---

### 6. `/dedicated/server/{serviceName}/biosSettings/sgx`

**Description** : Gérer les paramètres BIOS pour la fonctionnalité **SGX** d'un serveur dédié.

#### **Opérations disponibles**

| Méthode HTTP | Description                       | Statut API | Authentification | Actions IAM requises                                   |
| ------------ | --------------------------------- | ---------- | ---------------- | ------------------------------------------------------ |
| `GET`        | Récupérer les paramètres BIOS SGX | BETA       | Non              | `dedicatedServer:apiovh:biosSettings/sgx/get` (requis) |

##### **Paramètres**

- `serviceName` (path, type : `string`, **requis**) :
  - **Description** : Le nom interne de votre serveur dédié.
  - **Exemple** : `ns123456.ip-123-45-678.eu`

---

### 7. `/dedicated/server/{serviceName}/biosSettings/sgx/configure`

**Description** : Configurer les paramètres SGX (activation/désactivation et taille du PRMRR) sur un serveur dédié. **Cette opération peut entraîner un ou plusieurs redémarrages du serveur.**

#### **Opérations disponibles**

| Méthode HTTP | Description                   | Statut API | Authentification | Actions IAM requises                                         |
| ------------ | ----------------------------- | ---------- | ---------------- | ------------------------------------------------------------ |
| `POST`       | Configurer les paramètres SGX | BETA       | Non              | `dedicatedServer:apiovh:biosSettings/sgx/configure` (requis) |

##### **Paramètres**

- `serviceName` (path, type : `string`, **requis**) :
  - **Description** : Le nom interne de votre serveur dédié.
  - **Exemple** : `ns123456.ip-123-45-678.eu`
- `prmrr` (body, type : `dedicated.server.BiosSettingsSgxPrmrrEnum`, **optionnel**) :
  - **Description** : La taille de la **mémoire réservée au processeur (PRMRR)**.
  - **Valeurs possibles** : `0`, `1`, `2`, `4`, `8`
- `status` (body, type : `dedicated.server.BiosSettingsSgxStatusEnum`, **optionnel**) :
  - **Description** : Le statut souhaité pour SGX.
  - **Valeurs possibles** : `enabled`, `disabled`

> **⚠️ Attention** : Cette opération peut entraîner un ou plusieurs redémarrages du serveur. Assurez-vous que le serveur est accessible et que vous avez les permissions nécessaires avant de l'exécuter.

---

### 8. `/dedicated/server/{serviceName}/boot`

**Description** : Gérer les netboots compatibles avec un serveur dédié.

#### **Opérations disponibles**

| Méthode HTTP | Description                     | Statut API | Authentification | Actions IAM requises                       |
| ------------ | ------------------------------- | ---------- | ---------------- | ------------------------------------------ |
| `GET`        | Lister les netboots compatibles | PRODUCTION | Non              | `dedicatedServer:apiovh:boot/get` (requis) |

##### **Paramètres**

- `serviceName` (path, type : `string`, **requis**) :
  - **Description** : Le nom interne de votre serveur dédié.
  - **Exemple** : `ns123456.ip-123-45-678.eu`
- `bootType` (query, type : `dedicated.server.BootTypeEnum`, **optionnel**) :
  - **Description** : Filtrer les netboots en fonction du type de boot.
  - **Valeurs possibles** : `hardware`, `netboot`, `rescue`

---

### 9. `/dedicated/server/{serviceName}/features/backupCloud`

**Description** : Gérer les backups cloud associés à un serveur dédié.

#### **Opérations disponibles**

| Méthode HTTP | Description                        | Statut API | Authentification | Actions IAM requises                                          |
| ------------ | ---------------------------------- | ---------- | ---------------- | ------------------------------------------------------------- |
| `DELETE`     | Désactiver le backup cloud         | BETA       | Non              | `dedicatedServer:apiovh:features/backupCloud/delete` (requis) |
| `GET`        | Récupérer les propriétés du backup | BETA       | Non              | `dedicatedServer:apiovh:features/backupCloud/get` (requis)    |
| `POST`       | Créer un nouveau backup cloud      | BETA       | Non              | `dedicatedServer:apiovh:features/backupCloud/create` (requis) |

##### **Paramètres**

- **Pour `POST /dedicated/server/{serviceName}/features/backupCloud`** :
  - `serviceName` (path, type : `string`, **requis**) :
    - **Description** : Le nom interne de votre serveur dédié.
    - **Exemple** : `ns123456.ip-123-45-678.eu`
  - `cloudProjectId` (body, type : `string`, **optionnel**) :
    - **Description** : L'ID du projet cloud OVHcloud où le backup sera stocké.
  - `projectDescription` (body, type : `string`, **optionnel**) :
    - **Description** : La description du projet cloud (ignoré si `cloudProjectId` est déjà spécifié).

> **⚠️ Attention** : Si vous utilisez `POST`, un **backup FTP** sera créé. **Toutes les données associées seront supprimées** si vous utilisez `DELETE`.

---

### 10. `/dedicated/server/{serviceName}/features/backupFTP`

**Description** : Gérer les backups FTP associés à un serveur dédié.

#### **Opérations disponibles**

| Méthode HTTP | Description                        | Statut API | Authentification | Actions IAM requises                                        |
| ------------ | ---------------------------------- | ---------- | ---------------- | ----------------------------------------------------------- |
| `DELETE`     | Terminer le service Backup FTP     | PRODUCTION | Non              | `dedicatedServer:apiovh:features/backupFTP/delete` (requis) |
| `GET`        | Récupérer les propriétés du backup | PRODUCTION | Non              | `dedicatedServer:apiovh:features/backupFTP/get` (requis)    |
| `POST`       | Créer un nouveau backup FTP        | PRODUCTION | Non              | `dedicatedServer:apiovh:features/backupFTP/create` (requis) |

##### **Paramètres**

- **Pour `POST /dedicated/server/{serviceName}/features/backupFTP`** :
  - `serviceName` (path, type : `string`, **requis**) :
    - **Description** : Le nom interne de votre serveur dédié.
    - **Exemple** : `ns123456.ip-123-45-678.eu`

> **⚠️ Attention** : Si vous utilisez `DELETE`, **TOUTES LES DONNÉES SERONT PERMANEMENT SUPPRIMÉES**.

---

### 11. `/dedicated/server/{serviceName}/features/backupFTP/access`

**Description** : Gérer les **ACL (Access Control Lists)** pour le backup FTP d'un serveur dédié.

#### **Opérations disponibles**

| Méthode HTTP | Description                    | Statut API | Authentification | Actions IAM requises                                               |
| ------------ | ------------------------------ | ---------- | ---------------- | ------------------------------------------------------------------ |
| `GET`        | Lister les IP blocks autorisés | PRODUCTION | Non              | `dedicatedServer:apiovh:features/backupFTP/access/get` (requis)    |
| `POST`       | Créer un nouvel ACL            | PRODUCTION | Non              | `dedicatedServer:apiovh:features/backupFTP/access/create` (requis) |
| `DELETE`     | Supprimer un ACL spécifique    | PRODUCTION | Non              | `dedicatedServer:apiovh:features/backupFTP/access/delete` (requis) |
| `PUT`        | Modifier un ACL spécifique     | PRODUCTION | Non              | `dedicatedServer:apiovh:features/backupFTP/access/edit` (requis)   |

##### **Paramètres**

- **Pour `POST /dedicated/server/{serviceName}/features/backupFTP/access`** :
  - `serviceName` (path, type : `string`, **requis**) :
    - **Description** : Le nom interne de votre serveur dédié.
    - **Exemple** : `ns123456.ip-123-45-678.eu`
  - `ipBlock` (body, type : `ipBlock`, **requis**) :
    - **Description** : L'IP block spécifique à ajouter dans l'ACL.
    - **Exemple** :

      ```json
      {
          "ip": "123.45.678.0/24",
          "protocols": ["ftp", "cifs"]
      }
      ```

  - `ftp` (body, type : `boolean`, **optionnel**) :
    - **Description** : Autoriser le protocole FTP.
  - `cifs` (body, type : `boolean`, **requis**) :
    - **Description** : Autoriser le protocole CIFS (SMB).
  - `nfs` (body, type : `boolean`, **optionnel**) :
    - **Description** : Autoriser le protocole NFS.

---

### 12. `/dedicated/server/{serviceName}/features/firewall`

**Description** : Gérer le firewall d'un serveur dédié.

#### **Opérations disponibles**

| Méthode HTTP | Description                          | Statut API | Authentification | Actions IAM requises                                     |
| ------------ | ------------------------------------ | ---------- | ---------------- | -------------------------------------------------------- |
| `GET`        | Récupérer les propriétés du firewall | PRODUCTION | Non              | `dedicatedServer:apiovh:features/firewall/get` (requis)  |
| `PUT`        | Modifier les propriétés du firewall  | PRODUCTION | Non              | `dedicatedServer:apiovh:features/firewall/edit` (requis) |

##### **Paramètres**

- **Pour `PUT /dedicated/server/{serviceName}/features/firewall`** :
  - `serviceName` (path, type : `string`, **requis**) :
    - **Description** : Le nom interne de votre serveur dédié.
  - `body` (type : `dedicated.server.Firewall`) :
    - **Description** : Les nouvelles règles du firewall.
    - **Exemple** :

      ```json
      {
          "rules": [
              {
                  "ipBlock": "123.45.678.0/24",
                  "protocol": "tcp",
                  "port": 80,
                  "action": "allow"
              }
          ]
      }
      ```

---

### 13. `/dedicated/server/{serviceName}/features/ipmi`

**Description** : Gérer les fonctionnalités IPMI (Intelligent Platform Management Interface) d'un serveur dédié.

#### **Opérations disponibles**

| Méthode HTTP | Description                   | Statut API | Authentification | Actions IAM requises                                |
| ------------ | ----------------------------- | ---------- | ---------------- | --------------------------------------------------- |
| `GET`        | Récupérer les propriétés IPMI | PRODUCTION | Non              | `dedicatedServer:apiovh:features/ipmi/get` (requis) |

##### **Paramètres**

- `serviceName` (path, type : `string`, **requis**) :
  - **Description** : Le nom interne de votre serveur dédié.
  - **Exemple** : `ns123456.ip-123-45-678.eu`

---

## Exemples d'utilisation

### 1. Lister les serveurs dédiés disponibles

**Endpoint** : `GET /dedicated/server`
**Permissions IAM requises** : `dedicatedServer:apiovh:get`

**Exemple de requête** :

```json
{
    "host": "api.ovh.com",
    "url": "/1.0/dedicated/server",
    "method": "GET",
    "headers": {
        "X-Ovh-Application": "votre_application_key",
        "X-Ovh-Timestamp": "timestamp",
        "X-Ovh-Signature": "signature"
    }
}
```

**Exemple de réponse** :

```json
["ns123456.ip-123-45-678.eu", "ns789012.ip-123-45-678.fr", "ns345678.ip-123-45-678.de"]
```

---

### 2. Récupérer les propriétés d'un serveur dédié

**Endpoint** : `GET /dedicated/server/{serviceName}`
**Permissions IAM requises** : `dedicatedServer:apiovh:get`

**Exemple de requête** :

```json
{
    "host": "api.ovh.com",
    "url": "/1.0/dedicated/server/ns123456.ip-123-45-678.eu",
    "method": "GET",
    "headers": {
        "X-Ovh-Application": "votre_application_key",
        "X-Ovh-Timestamp": "timestamp",
        "X-Ovh-Signature": "signature"
    }
}
```

**Exemple de réponse** :

```json
{
    "serviceName": "ns123456.ip-123-45-678.eu",
    "status": "ok",
    "hardware": {
        "type": "gpu",
        "model": "RTX 3090"
    },
    "network": {
        "ip": "123.45.678.90",
        "bandwidth": {
            "current": "1 Gbps",
            "burst": "10 Gbps"
        }
    }
}
```

---

### 3. Modifier les propriétés d'un serveur dédié

**Endpoint** : `PUT /dedicated/server/{serviceName}`
**Permissions IAM requises** : `dedicatedServer:apiovh:put`

**Exemple de requête** :

```json
{
    "host": "api.ovh.com",
    "url": "/1.0/dedicated/server/ns123456.ip-123-45-678.eu",
    "method": "PUT",
    "headers": {
        "X-Ovh-Application": "votre_application_key",
        "X-Ovh-Timestamp": "timestamp",
        "X-Ovh-Signature": "signature"
    },
    "body": {
        "status": "maintenance",
        "comment": "Mise en maintenance pour mise à jour"
    }
}
```

**Exemple de réponse** :

```json
{
    "status": "ok",
    "message": "Les propriétés ont été modifiées avec succès"
}
```

---

### 4. Configurer les paramètres SGX sur un serveur dédié

**Endpoint** : `POST /dedicated/server/{serviceName}/biosSettings/sgx/configure`
**Permissions IAM requises** : `dedicatedServer:apiovh:biosSettings/sgx/configure`

**Exemple de requête** :

```json
{
    "host": "api.ovh.com",
    "url": "/1.0/dedicated/server/ns123456.ip-123-45-678.eu/biosSettings/sgx/configure",
    "method": "POST",
    "headers": {
        "X-Ovh-Application": "votre_application_key",
        "X-Ovh-Timestamp": "timestamp",
        "X-Ovh-Signature": "signature"
    },
    "body": {
        "prmrr": 4,
        "status": "enabled"
    }
}
```

**Exemple de réponse** :

```json
{
    "status": "ok",
    "message": "SGX a été configuré avec succès. Le serveur redémarrera."
}
```

---

### 5. Gérer un backup FTP

**Endpoint** : `POST /dedicated/server/{serviceName}/features/backupFTP`
**Permissions IAM requises** : `dedicatedServer:apiovh:features/backupFTP/create`

**Exemple de requête** :

```json
{
    "host": "api.ovh.com",
    "url": "/1.0/dedicated/server/ns123456.ip-123-45-678.eu/features/backupFTP",
    "method": "POST",
    "headers": {
        "X-Ovh-Application": "votre_application_key",
        "X-Ovh-Timestamp": "timestamp",
        "X-Ovh-Signature": "signature"
    }
}
```

**Exemple de réponse** :

```json
{
    "status": "ok",
    "taskId": 123456,
    "message": "Backup FTP créé. ID de tâche : 123456"
}
```

---

### 6. Supprimer un backup FTP

**Endpoint** : `DELETE /dedicated/server/{serviceName}/features/backupFTP`
**Permissions IAM requises** : `dedicatedServer:apiovh:features/backupFTP/delete`

**Exemple de requête** :

```json
{
    "host": "api.ovh.com",
    "url": "/1.0/dedicated/server/ns123456.ip-123-45-678.eu/features/backupFTP",
    "method": "DELETE",
    "headers": {
        "X-Ovh-Application": "votre_application_key",
        "X-Ovh-Timestamp": "timestamp",
        "X-Ovh-Signature": "signature"
    }
}
```

**Exemple de réponse** :

```json
{
    "status": "ok",
    "taskId": 123457,
    "message": "Backup FTP supprimé. ID de tâche : 123457"
}
```

---

## Bonnes pratiques

### 1. Gestion des erreurs

- **Code d'erreur** : `403` (Forbidden) si les permissions IAM sont insuffisantes.
- **Message d'erreur** : OVHcloud retourne des messages détaillés en cas d'échec.
  **Exemple** :

  ```json
  {
      "error": "invalid_prmrr_size",
      "message": "La taille PRMRR spécifiée n'est pas valide pour ce serveur."
  }
  ```

---

### 2. Sécurité

- **Ne jamais exposer** :
  - Votre `applicationSecret` ou `consumerKey` dans des logs ou des réponses.
  - Des `ipBlock` sensibles dans des ACLs non sécurisées.
- **Utiliser des requêtes HTTPS** : Toujours préférer les requêtes sécurisées (HTTPS) pour éviter les fuites de données.

---

### 3. Optimisation des requêtes

- **Filtrer les résultats** : Utilisez les paramètres `bootType`, `country`, ou `excludeDatacenters` pour réduire la taille des réponses et optimiser les performances.
- **Batch les opérations** : Si vous devez configurer plusieurs serveurs, utilisez des boucles ou des appels parallèles pour réduire le temps total.

---

## Annexes

### 1. Glossaire des types

| Type                                         | Description                                                                            |
| -------------------------------------------- | -------------------------------------------------------------------------------------- |
| `nichandle.OvhSubsidiaryEnum`                | Enumération des pays (ex : `fr`, `uk`, `de`).                                          |
| `dedicated.server.BootTypeEnum`              | Types de boot : `hardware`, `netboot`, `rescue`.                                       |
| `dedicated.server.Firewall`                  | Objet contenant les règles du firewall (ex : `ipBlock`, `protocol`, `port`, `action`). |
| `dedicated.server.BiosSettingsSgxPrmrrEnum`  | Taille de la mémoire réservée : `0`, `1`, `2`, `4`, `8`.                               |
| `dedicated.server.BiosSettingsSgxStatusEnum` | Statut SGX : `enabled`, `disabled`.                                                    |
| `ipBlock`                                    | Objet contenant une IP block et les protocoles autorisés (ex : `ftp`, `cifs`, `nfs`).  |

---

### 2. Documentation officielle OVHcloud

- [API OVHcloud - Serveurs Dédiés](https://api.ovh.com/1.0-dedicated-server)
- [Guide IAM OVHcloud](https://docs.ovh.com/fr/public-cloud/iam/)
- [Documentation SGX](https://docs.ovh.com/fr/dedicated/bios-sgx/)

---

### 3. Historique des versions

- **Version actuelle** : `1.0` (API stable).
- **API dépréciées** :
  - `/dedicated/server/availabilities` : Dépréciée le **20 février 2023**, supprimée le **21 avril 2026**.

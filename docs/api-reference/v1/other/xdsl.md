# OVHcloud xDSL API - Documentation Technique

Cette documentation décrit les endpoints et opérations disponibles pour l'API **xDSL** d'OVHcloud, basée sur les spécifications fournies dans le fichier JSON.

> **⚠️ Note** : Cette documentation est générée automatiquement à partir des spécifications techniques de l'API. Elle est destinée aux **développeurs**, **opérateurs** et **utilisateurs techniques** qui souhaitent intégrer ou utiliser les fonctionnalités xDSL d'OVHcloud.

---

## 📌 Aperçu

L'API **xDSL** permet de gérer les services xDSL (ADSL, VDSL, etc.) et leurs fonctionnalités associées (modem, logs, diagnostics, etc.) sur la plateforme OVHcloud. Elle est conçue pour offrir un contrôle programmatique sur les services xDSL, notamment pour les opérations administratives, techniques et de configuration.

### Caractéristiques principales

- **Version de l'API** : `1.0`
- **Statut** : Stable (PRODUCTION)
- **Authentification** : Obligatoire pour la plupart des endpoints (sauf exceptions)
- **Type d'API** : RESTful
- **Format des réponses** : JSON

---

## 🔐 Authentification

L'API xDSL utilise l'authentification **OVHcloud API** avec des **clés d'application** (`applicationKey`), **secrets d'application** (`applicationSecret`) et **clés de consommateur** (`consumerKey`).

### Endpoints nécessitant une authentification

Tous les endpoints listés ci-dessous nécessitent une authentification **sauf mention contraire** (`noAuthentication: true`).

### Actions IAM requises

Chaque endpoint spécifie une ou plusieurs actions IAM nécessaires pour y accéder. Ces actions doivent être configurées dans votre compte OVHcloud via le [gestionnaire d'accès OVHcloud](https://eu.api.ovh.com/console/#/cloud/project/iam/policy).

Exemple d'actions IAM courantes :

- `xdsl:apiovh:get` : Nécessaire pour les opérations de **lecture** (GET).
- `xdsl:apiovh:put` : Nécessaire pour les opérations de **mise à jour** (PUT).
- `xdsl:apiovh:create` : Nécessaire pour les opérations de **création** (POST).
- `xdsl:apiovh:delete` : Nécessaire pour les opérations de **suppression** (DELETE).

---

## 📡 Endpoints Disponibles

### **1. Liste des services xDSL disponibles**

**Endpoint** : `/xdsl`

**Méthode** : `GET`

**Description** : Liste les services xDSL disponibles pour l'utilisateur.

**Paramètres** :

| Paramètre | Type                                  | Description                                     | Obligatoire |
| --------- | ------------------------------------- | ----------------------------------------------- | ----------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | Filtre les ressources en fonction des tags IAM. | ❌ Non      |

**Réponse** : `string[]` (Liste des noms de services xDSL disponibles)

**Actions IAM requises** :

- `xdsl:apiovh:get` (Obligatoire)

**Exemple de réponse** :

```json
["service1", "service2", "service3"]
```

---

### **2. Récupération des propriétés d'un service xDSL**

**Endpoint** : `/xdsl/{serviceName}`

**Méthode** : `GET`

**Description** : Récupère les propriétés d'un service xDSL spécifique.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |

**Réponse** : `xdsl.AccessWithIAM` (Objet contenant les propriétés du service xDSL)

**Actions IAM requises** :

- `xdsl:apiovh:get` (Obligatoire)

**Exemple de réponse** :

```json
{
    "id": "123456",
    "name": "service1",
    "status": "active",
    "type": "adsl",
    "tags": {}
}
```

---

### **3. Mise à jour des propriétés d'un service xDSL**

**Endpoint** : `/xdsl/{serviceName}`

**Méthode** : `PUT`

**Description** : Modifie les propriétés d'un service xDSL spécifique.

**Paramètres** :

| Paramètre      | Type          | Description                                | Obligatoire |
| -------------- | ------------- | ------------------------------------------ | ----------- |
| `serviceName`  | `string`      | Nom du service xDSL.                       | ✅ Oui      |
| `Request Body` | `xdsl.Access` | Objet contenant les propriétés à modifier. | ✅ Oui      |

**Réponse** : `void` (Aucune réponse explicite, confirmation via code HTTP)

**Actions IAM requises** :

- `xdsl:apiovh:put` (Obligatoire)

---

### **4. Informations sur l'IPv4 supplémentaire lors d'un déplacement d'adresse**

**Endpoint** : `/xdsl/{serviceName}/addressMove/extraIpRange`

**Méthode** : `GET`

**Description** : Récupère les informations sur l'IPv4 supplémentaire lors d'un déplacement d'adresse.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |

**Réponse** : `xdsl.ExtraIpRangeMove` (Objet contenant les informations sur l'IPv4 supplémentaire)

**Actions IAM requises** :

- `xdsl:apiovh:addressMove/extraIpRange/get` (Obligatoire)

---

### **5. Initiation du déplacement de l'IPv4 supplémentaire**

**Endpoint** : `/xdsl/{serviceName}/addressMove/extraIpRangeMove`

**Méthode** : `POST`

**Description** : Lance le processus de déplacement de l'IPv4 supplémentaire.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |

**Réponse** : `xdsl.Task` (Objet contenant l'ID de la tâche en cours)

**Actions IAM requises** :

- `xdsl:apiovh:addressMove/extraIpRangeMove` (Obligatoire)

---

### **6. Liste des anti-spams pour un service xDSL**

**Endpoint** : `/xdsl/{serviceName}/antiSpams`

**Méthode** : `GET`

**Description** : Liste les anti-spams configurés pour un service xDSL.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |

**Réponse** : `ip[]` (Liste des adresses IP configurées comme anti-spams)

**Actions IAM requises** :

- `xdsl:apiovh:antiSpams/get` (Obligatoire)

---

### **7. Récupération des propriétés d'un anti-spam spécifique**

**Endpoint** : `/xdsl/{serviceName}/antiSpams/{ip}`

**Méthode** : `GET`

**Description** : Récupère les propriétés d'un anti-spam spécifique pour un service xDSL.

**Paramètres** :

| Paramètre     | Type     | Description                | Obligatoire |
| ------------- | -------- | -------------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL.       | ✅ Oui      |
| `ip`          | `ip`     | Adresse IP de l'anti-spam. | ✅ Oui      |

**Réponse** : `xdsl.AntiSpam` (Objet contenant les propriétés de l'anti-spam)

**Actions IAM requises** :

- `xdsl:apiovh:antiSpams/get` (Obligatoire)

---

### **8. Liste des preuves (evidences) pour un anti-spam spécifique**

**Endpoint** : `/xdsl/{serviceName}/antiSpams/{ip}/evidences`

**Méthode** : `GET`

**Description** : Liste les preuves stockées sur le PCS pour une adresse IP spécifique.

**Paramètres** :

| Paramètre     | Type     | Description                | Obligatoire |
| ------------- | -------- | -------------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL.       | ✅ Oui      |
| `ip`          | `ip`     | Adresse IP de l'anti-spam. | ✅ Oui      |

**Réponse** : `xdsl.antiSpam.EvidencesInfo` (Liste des preuves d'anti-spam)

**Actions IAM requises** :

- `xdsl:apiovh:antiSpams/evidences/get` (Obligatoire)

---

### **9. Vérification de la possibilité d'annuler une résiliation**

**Endpoint** : `/xdsl/{serviceName}/canCancelResiliation`

**Méthode** : `GET`

**Description** : Vérifie si une résiliation en cours peut être annulée.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |

**Réponse** : `boolean` (Indique si l'annulation est possible)

**Actions IAM requises** :

- `xdsl:apiovh:canCancelResiliation/get` (Obligatoire)

---

### **10. Annulation d'une résiliation en cours**

**Endpoint** : `/xdsl/{serviceName}/cancelResiliation`

**Méthode** : `POST`

**Description** : Annule une résiliation en cours pour un service xDSL.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |

**Réponse** : `void` (Aucune réponse explicite, confirmation via code HTTP)

**Actions IAM requises** :

- `xdsl:apiovh:cancelResiliation` (Obligatoire)

---

### **11. Changement de contact pour un service xDSL**

**Endpoint** : `/xdsl/{serviceName}/changeContact`

**Méthode** : `POST`

**Description** : Lance une procédure de changement de contact pour un service xDSL.

**Paramètres** :

| Paramètre      | Type                      | Description                                                  | Obligatoire |
| -------------- | ------------------------- | ------------------------------------------------------------ | ----------- |
| `serviceName`  | `string`                  | Nom du service xDSL.                                         | ✅ Oui      |
| `Request Body` | `xdsl.changeContact.post` | Objet contenant les informations de contact à mettre à jour. | ✅ Oui      |

**Réponse** : `long[]` (Liste des IDs des tâches lancées)

**Actions IAM requises** :

- `xdsl:apiovh:changeContact` (Obligatoire)

---

### **12. Diagnostic d'un service xDSL**

**Endpoint** : `/xdsl/{serviceName}/diagnostic`

**Méthode** : `GET`

**Description** : Récupère les propriétés du diagnostic d'un service xDSL.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |

**Réponse** : `xdsl.AccessDiagnostic` (Objet contenant les propriétés du diagnostic)

**Actions IAM requises** :

- `xdsl:apiovh:diagnostic/get` (Obligatoire)

---

### **13. Exécution d'un diagnostic sur un service xDSL**

**Endpoint** : `/xdsl/{serviceName}/diagnostic`

**Méthode** : `POST`

**Description** : Lance un diagnostic sur le service xDSL.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |

**Réponse** : `xdsl.Task` (Objet contenant l'ID de la tâche en cours)

**Actions IAM requises** :

- `xdsl:apiovh:diagnostic/create` (Obligatoire)

---

### **14. Liste des éligibilités fibre pour un service xDSL**

**Endpoint** : `/xdsl/{serviceName}/fiberEligibilities`

**Méthode** : `GET`

**Description** : Liste les éligibilités fibre pour un service xDSL.

**Paramètres** :

| Paramètre     | Type                              | Description                                    | Obligatoire |
| ------------- | --------------------------------- | ---------------------------------------------- | ----------- |
| `serviceName` | `string`                          | Nom du service xDSL.                           | ✅ Oui      |
| `status`      | `xdsl.FiberEligibilityStatusEnum` | Filtre les éligibilités en fonction du statut. | ❌ Non      |

**Réponse** : `long[]` (Liste des IDs des éligibilités fibre)

**Actions IAM requises** :

- `xdsl:apiovh:fiberEligibilities/get` (Obligatoire)

---

### **15. Récupération des propriétés d'une éligibilité fibre spécifique**

**Endpoint** : `/xdsl/{serviceName}/fiberEligibilities/{id}`

**Méthode** : `GET`

**Description** : Récupère les propriétés d'une éligibilité fibre spécifique.

**Paramètres** :

| Paramètre     | Type     | Description                | Obligatoire |
| ------------- | -------- | -------------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL.       | ✅ Oui      |
| `id`          | `long`   | ID de l'éligibilité fibre. | ✅ Oui      |

**Réponse** : `xdsl.FiberEligibility` (Objet contenant les propriétés de l'éligibilité fibre)

**Actions IAM requises** :

- `xdsl:apiovh:fiberEligibilities/get` (Obligatoire)

---

### **16. Liste des incidents pour un service xDSL**

**Endpoint** : `/xdsl/{serviceName}/incident`

**Méthode** : `GET`

**Description** : Récupère les propriétés d'un incident spécifique pour un service xDSL.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |

**Réponse** : `xdsl.Incident` (Objet contenant les propriétés de l'incident)

**Actions IAM requises** :

- `xdsl:apiovh:incident/get` (Obligatoire)

---

### **17. Liste des incidents globaux**

**Endpoint** : `/xdsl/incidents`

**Méthode** : `GET`

**Description** : Liste les incidents globaux (sans authentification requise).

**Paramètres** :

| Paramètre      | Type       | Description                                              | Obligatoire |
| -------------- | ---------- | -------------------------------------------------------- | ----------- |
| `creationDate` | `datetime` | Filtre les incidents par date de création (supérieur à). | ❌ Non      |
| `endDate`      | `datetime` | Filtre les incidents par date de fin (inférieur à).      | ❌ Non      |

**Réponse** : `long[]` (Liste des IDs des incidents)

**Note** : Cet endpoint ne nécessite pas d'authentification.

---

### **18. Récupération des propriétés d'un incident spécifique**

**Endpoint** : `/xdsl/incidents/{id}`

**Méthode** : `GET`

**Description** : Récupère les propriétés d'un incident global spécifique.

**Paramètres** :

| Paramètre | Type   | Description              | Obligatoire |
| --------- | ------ | ------------------------ | ----------- |
| `id`      | `long` | ID de l'incident global. | ✅ Oui      |

**Réponse** : `xdsl.Incident` (Objet contenant les propriétés de l'incident)

**Actions IAM requises** :

- `xdsl:apiovh:incident/get` (Obligatoire)

---

### **19. Liste des adresses IPv4 pour un service xDSL**

**Endpoint** : `/xdsl/{serviceName}/ips`

**Méthode** : `GET`

**Description** : Liste les adresses IPv4 disponibles pour un service xDSL.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |

**Réponse** : `ip[]` (Liste des adresses IPv4)

**Actions IAM requises** :

- `xdsl:apiovh:ips/get` (Obligatoire)

---

### **20. Commande d'une plage IPv4 supplémentaire**

**Endpoint** : `/xdsl/{serviceName}/ips`

**Méthode** : `POST`

**Description** : Commande une plage IPv4 supplémentaire (/29) pour un service xDSL.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |

**Réponse** : `xdsl.Task` (Objet contenant l'ID de la tâche en cours)

**Actions IAM requises** :

- `xdsl:apiovh:ips/create` (Obligatoire)

---

### **21. Suppression d'une plage IPv4 supplémentaire**

**Endpoint** : `/xdsl/{serviceName}/ips/{ip}`

**Méthode** : `DELETE`

**Description** : Arrête le renouvellement d'une plage IPv4 supplémentaire.

**Paramètres** :

| Paramètre     | Type     | Description             | Obligatoire |
| ------------- | -------- | ----------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL.    | ✅ Oui      |
| `ip`          | `ip`     | Adresse IP à supprimer. | ✅ Oui      |

**Réponse** : `void` (Aucune réponse explicite, confirmation via code HTTP)

**Actions IAM requises** :

- `xdsl:apiovh:ips/delete` (Obligatoire)

---

### **22. Liste des logs disponibles**

**Endpoint** : `/xdsl/{serviceName}/log/kind`

**Méthode** : `GET`

**Description** : Liste les types de logs disponibles pour un service xDSL.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |

**Réponse** : `string[]` (Liste des types de logs disponibles)

**Actions IAM requises** :

- `xdsl:apiovh:log/kind/get` (Obligatoire)

---

### **23. Récupération des propriétés d'un type de log spécifique**

**Endpoint** : `/xdsl/{serviceName}/log/kind/{name}`

**Méthode** : `GET`

**Description** : Récupère les propriétés d'un type de log spécifique.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |
| `name`        | `string` | Nom du type de log.  | ✅ Oui      |

**Réponse** : `dbaas.logs.LogKind` (Objet contenant les propriétés du type de log)

**Actions IAM requises** :

- `xdsl:apiovh:log/kind/get` (Obligatoire)

---

### **24. Liste des abonnements de logs pour un service xDSL**

**Endpoint** : `/xdsl/{serviceName}/log/subscription`

**Méthode** : `GET`

**Description** : Liste les abonnements de logs disponibles pour un service xDSL.

**Paramètres** :

| Paramètre     | Type     | Description                                           | Obligatoire |
| ------------- | -------- | ----------------------------------------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL.                                  | ✅ Oui      |
| `kind`        | `string` | Filtre les abonnements par type de log (e.g., audit). | ❌ Non      |

**Réponse** : `uuid[]` (Liste des IDs des abonnements de logs)

**Actions IAM requises** :

- `xdsl:apiovh:log/subscription/get` (Obligatoire)

---

### **25. Création d'un abonnement de logs**

**Endpoint** : `/xdsl/{serviceName}/log/subscription`

**Méthode** : `POST`

**Description** : Crée un nouvel abonnement de logs pour un service xDSL.

**Paramètres** :

| Paramètre      | Type                                 | Description                                                   | Obligatoire |
| -------------- | ------------------------------------ | ------------------------------------------------------------- | ----------- |
| `serviceName`  | `string`                             | Nom du service xDSL.                                          | ✅ Oui      |
| `Request Body` | `dbaas.logs.LogSubscriptionCreation` | Objet contenant les informations de création de l'abonnement. | ✅ Oui      |

**Réponse** : `dbaas.logs.LogSubscriptionResponse` (Objet contenant les détails de l'abonnement créé)

**Actions IAM requises** :

- `xdsl:apiovh:log/subscription/create` (Obligatoire)
- `ldp:apiovh:output/graylog/stream/forwardTo` (Obligatoire)

---

### **26. Suppression d'un abonnement de logs**

**Endpoint** : `/xdsl/{serviceName}/log/subscription/{subscriptionId}`

**Méthode** : `DELETE`

**Description** : Supprime un abonnement de logs spécifique.

**Paramètres** :

| Paramètre        | Type     | Description                             | Obligatoire |
| ---------------- | -------- | --------------------------------------- | ----------- |
| `serviceName`    | `string` | Nom du service xDSL.                    | ✅ Oui      |
| `subscriptionId` | `uuid`   | ID de l'abonnement de logs à supprimer. | ✅ Oui      |

**Réponse** : `dbaas.logs.LogSubscriptionResponse` (Objet contenant les détails de l'abonnement supprimé)

**Actions IAM requises** :

- `xdsl:apiovh:log/subscription/delete` (Obligatoire)

---

### **27. Récupération des détails d'un abonnement de logs**

**Endpoint** : `/xdsl/{serviceName}/log/subscription/{subscriptionId}`

**Méthode** : `GET`

**Description** : Récupère les détails d'un abonnement de logs spécifique.

**Paramètres** :

| Paramètre        | Type     | Description                 | Obligatoire |
| ---------------- | -------- | --------------------------- | ----------- |
| `serviceName`    | `string` | Nom du service xDSL.        | ✅ Oui      |
| `subscriptionId` | `uuid`   | ID de l'abonnement de logs. | ✅ Oui      |

**Réponse** : `dbaas.logs.LogSubscription` (Objet contenant les propriétés de l'abonnement)

**Actions IAM requises** :

- `xdsl:apiovh:log/subscription/get` (Obligatoire)

---

### **28. Génération d'une URL temporaire pour récupérer des logs**

**Endpoint** : `/xdsl/{serviceName}/log/url`

**Méthode** : `POST`

**Description** : Génère une URL temporaire pour récupérer les logs d'un service xDSL.

**Paramètres** :

| Paramètre      | Type                        | Description                                                       | Obligatoire |
| -------------- | --------------------------- | ----------------------------------------------------------------- | ----------- |
| `serviceName`  | `string`                    | Nom du service xDSL.                                              | ✅ Oui      |
| `Request Body` | `dbaas.logs.LogUrlCreation` | Objet contenant les informations de création de l'URL temporaire. | ✅ Oui      |

**Réponse** : `dbaas.logs.TemporaryLogsLink` (Objet contenant l'URL temporaire et son expiration)

**Actions IAM requises** :

- `xdsl:apiovh:log/url/create` (Obligatoire)

---

### **29. Activation ou désactivation de l'envoi d'emails**

**Endpoint** : `/xdsl/{serviceName}/mailSending`

**Méthode** : `POST`

**Description** : Active ou désactive la capacité d'envoi d'emails pour un service xDSL.

**Paramètres** :

| Paramètre      | Type                    | Description                                                  | Obligatoire |
| -------------- | ----------------------- | ------------------------------------------------------------ | ----------- |
| `serviceName`  | `string`                | Nom du service xDSL.                                         | ✅ Oui      |
| `Request Body` | `xdsl.mailSending.post` | Objet contenant les informations d'activation/désactivation. | ✅ Oui      |

**Réponse** : `xdsl.Task` (Objet contenant l'ID de la tâche en cours)

**Actions IAM requises** :

- `xdsl:apiovh:mailSending/update` (Obligatoire)

---

### **30. Récupération des propriétés du modem**

**Endpoint** : `/xdsl/{serviceName}/modem`

**Méthode** : `GET`

**Description** : Récupère les propriétés du modem associé à un service xDSL.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |

**Réponse** : `xdsl.Modem` (Objet contenant les propriétés du modem)

**Actions IAM requises** :

- `xdsl:apiovh:modem/get` (Obligatoire)

---

### **31. Mise à jour des propriétés du modem**

**Endpoint** : `/xdsl/{serviceName}/modem`

**Méthode** : `PUT`

**Description** : Modifie les propriétés du modem associé à un service xDSL.

**Paramètres** :

| Paramètre      | Type         | Description                                | Obligatoire |
| -------------- | ------------ | ------------------------------------------ | ----------- |
| `serviceName`  | `string`     | Nom du service xDSL.                       | ✅ Oui      |
| `Request Body` | `xdsl.Modem` | Objet contenant les propriétés à modifier. | ✅ Oui      |

**Réponse** : `void` (Aucune réponse explicite, confirmation via code HTTP)

**Actions IAM requises** :

- `xdsl:apiovh:modem/edit` (Obligatoire)

---

### **32. Liste des profils disponibles pour un DSLAM**

**Endpoint** : `/xdsl/{serviceName}/lines/{number}/dslamPort/availableProfiles`

**Méthode** : `GET`

**Description** : Liste tous les profils disponibles pour un port DSLAM spécifique.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |
| `number`      | `string` | Numéro de ligne.     | ✅ Oui      |

**Réponse** : `xdsl.DslamLineProfile[]` (Liste des profils disponibles)

**Actions IAM requises** :

- `xdsl:apiovh:lines/dslamPort/availableProfiles/get` (Obligatoire)

---

### **33. Changement de profil pour un port DSLAM**

**Endpoint** : `/xdsl/{serviceName}/lines/{number}/dslamPort/changeProfile`

**Méthode** : `POST`

**Description** : Change le profil d'un port DSLAM spécifique.

**Paramètres** :

| Paramètre      | Type                                      | Description                                               | Obligatoire |
| -------------- | ----------------------------------------- | --------------------------------------------------------- | ----------- |
| `serviceName`  | `string`                                  | Nom du service xDSL.                                      | ✅ Oui      |
| `number`       | `string`                                  | Numéro de ligne.                                          | ✅ Oui      |
| `Request Body` | `xdsl.lines.dslamPort.changeProfile.post` | Objet contenant les informations de changement de profil. | ✅ Oui      |

**Réponse** : `xdsl.Task` (Objet contenant l'ID de la tâche en cours)

**Actions IAM requises** :

- `xdsl:apiovh:lines/dslamPort/changeProfile` (Obligatoire)

---

### **34. Récupération des logs d'un port DSLAM**

**Endpoint** : `/xdsl/{serviceName}/lines/{number}/dslamPort/logs`

**Méthode** : `GET`

**Description** : Récupère les logs émis par le DSLAM pour un port spécifique.

**Paramètres** :

| Paramètre     | Type     | Description                         | Obligatoire |
| ------------- | -------- | ----------------------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL.                | ✅ Oui      |
| `number`      | `string` | Numéro de ligne.                    | ✅ Oui      |
| `limit`       | `long`   | Nombre maximal de logs à récupérer. | ✅ Oui      |

**Réponse** : `xdsl.DslamPortLog[]` (Liste des logs du port DSLAM)

**Actions IAM requises** :

- `xdsl:apiovh:lines/dslamPort/logs/get` (Obligatoire)

---

### **35. Réinitialisation d'un port DSLAM**

**Endpoint** : `/xdsl/{serviceName}/lines/{number}/dslamPort/reset`

**Méthode** : `POST`

**Description** : Réinitialise un port DSLAM spécifique.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |
| `number`      | `string` | Numéro de ligne.     | ✅ Oui      |

**Réponse** : `xdsl.Task` (Objet contenant l'ID de la tâche en cours)

**Actions IAM requises** :

- `xdsl:apiovh:lines/dslamPort/reset` (Obligatoire)

---

### **36. Récupération des statistiques d'une ligne DSLAM**

**Endpoint** : `/xdsl/{serviceName}/lines/{number}/statistics`

**Méthode** : `GET`

**Description** : Récupère les statistiques d'une ligne DSLAM spécifique.

**Paramètres** :

| Paramètre     | Type                          | Description                             | Obligatoire |
| ------------- | ----------------------------- | --------------------------------------- | ----------- |
| `serviceName` | `string`                      | Nom du service xDSL.                    | ✅ Oui      |
| `number`      | `string`                      | Numéro de ligne.                        | ✅ Oui      |
| `period`      | `xdsl.StatisticsPeriodEnum`   | Période de temps pour les statistiques. | ✅ Oui      |
| `type`        | `xdsl.LineStatisticsTypeEnum` | Type de statistiques à récupérer.       | ✅ Oui      |

**Réponse** : `complexType.UnitAndValues_xdsl.TimestampAndValue` (Objet contenant les statistiques et leurs valeurs)

**Actions IAM requises** :

- `xdsl:apiovh:lines/statistics/get` (Obligatoire)

---

### **37. Annulation d'un diagnostic de ligne**

**Endpoint** : `/xdsl/{serviceName}/lines/{number}/diagnostic/cancel`

**Méthode** : `POST`

**Description** : Annule un diagnostic de ligne en cours si possible.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |
| `number`      | `string` | Numéro de ligne.     | ✅ Oui      |

**Réponse** : `void` (Aucune réponse explicite, confirmation via code HTTP)

**Actions IAM requises** :

- `xdsl:apiovh:lines/diagnostic/cancel` (Obligatoire)

---

### **38. Exécution et récupération d'un diagnostic avancé de ligne**

**Endpoint** : `/xdsl/{serviceName}/lines/{number}/diagnostic/run`

**Méthode** : `POST`

**Description** : Met à jour et récupère le diagnostic avancé d'une ligne DSLAM.

**Paramètres** :

| Paramètre      | Type                             | Description                                          | Obligatoire |
| -------------- | -------------------------------- | ---------------------------------------------------- | ----------- |
| `serviceName`  | `string`                         | Nom du service xDSL.                                 | ✅ Oui      |
| `number`       | `string`                         | Numéro de ligne.                                     | ✅ Oui      |
| `Request Body` | `xdsl.lines.diagnostic.run.post` | Objet contenant les informations pour le diagnostic. | ✅ Oui      |

**Réponse** : `xdsl.lineDiagnostic.Diagnostic` (Objet contenant les résultats du diagnostic)

**Actions IAM requises** :

- `xdsl:apiovh:lines/diagnostic/run` (Obligatoire)

---

### **39. Récupération des propriétés d'un port DSLAM**

**Endpoint** : `/xdsl/{serviceName}/lines/{number}/dslamPort`

**Méthode** : `GET`

**Description** : Récupère les propriétés d'un port DSLAM spécifique.

**Paramètres** :

| Paramètre     | Type     | Description          | Obligatoire |
| ------------- | -------- | -------------------- | ----------- |
| `serviceName` | `string` | Nom du service xDSL. | ✅ Oui      |
| `number`      | `string` | Numéro de ligne.     | ✅ Oui      |

**Réponse** : `xdsl.DslamPort` (Objet contenant les propriétés du port DSLAM)

**Actions IAM requises** :

- `xdsl:apiovh:lines/dslamPort/get` (Obligatoire)

---

## 📚 Types Complexes et Réponses

### **Types de réponses courants**

- **`string[]`** : Liste de chaînes de caractères (e.g., noms de services, adresses IP).
- **`xdsl.AccessWithIAM`** : Objet représentant un service xDSL avec ses propriétés et tags IAM.
- **`xdsl.Access`** : Objet représentant un service xDSL (utilisé pour les mises à jour).
- **`xdsl.Task`** : Objet représentant une tâche asynchrone (e.g., diagnostic, changement de profil).
- **`xdsl.Modem`** : Objet représentant un modem xDSL.
- **`xdsl.Incident`** : Objet représentant un incident spécifique.
- **`ip[]`** : Liste d'adresses IPv4.
- **`xdsl.IP`** : Objet représentant une adresse IPv4.
- **`dbaas.logs.LogKind`** : Objet représentant un type de log.
- **`dbaas.logs.LogSubscription`** : Objet représentant un abonnement de logs.
- **`xdsl.DslamPortLog[]`** : Liste de logs émis par un port DSLAM.
- **`xdsl.lineDiagnostic.Diagnostic`** : Objet contenant les résultats d'un diagnostic de ligne.

### **Types de paramètres**

- **`path`** : Paramètre inclus dans l'URL (e.g., `{serviceName}`, `{ip}`).
- **`query`** : Paramètre passé dans l'URL (e.g., `?status=active`).
- **`body`** : Paramètre passé dans le corps de la requête (e.g., JSON).

---

## 🚀 Exemples d'Intégration

### **Exemple 1 : Liste des services xDSL disponibles**

```bash
curl -X GET \
  "https://api.ovh.com/1.0/xdsl" \
  -H "Content-Type: application/json" \
  -H "X-OVH-API-Key: $APPLICATION_KEY" \
  -H "X-OVH-Application: $APPLICATION_SECRET" \
  -H "X-OVH-Timestamp: $(date +%s)" \
  -H "X-OVH-Signature: $SIGNATURE"
```

**Description** :
Cet exemple montre comment récupérer la liste des services xDSL disponibles pour un utilisateur donné. Vous devez remplacer `$APPLICATION_KEY`, `$APPLICATION_SECRET`, et `$SIGNATURE` par vos propres clés et signature.

---

### **Exemple 2 : Récupération des propriétés d'un service xDSL**

```bash
curl -X GET \
  "https://api.ovh.com/1.0/xdsl/service1" \
  -H "Content-Type: application/json" \
  -H "X-OVH-API-Key: $APPLICATION_KEY" \
  -H "X-OVH-Application: $APPLICATION_SECRET" \
  -H "X-OVH-Timestamp: $(date +%s)" \
  -H "X-OVH-Signature: $SIGNATURE"
```

**Description** :
Récupère les propriétés du service xDSL nommé `service1`. Vous devez remplacer les variables par vos propres clés et signature.

---

### **Exemple 3 : Mise à jour des propriétés d'un service xDSL**

```bash
curl -X PUT \
  "https://api.ovh.com/1.0/xdsl/service1" \
  -H "Content-Type: application/json" \
  -H "X-OVH-API-Key: $APPLICATION_KEY" \
  -H "X-OVH-Application: $APPLICATION_SECRET" \
  -H "X-OVH-Timestamp: $(date +%s)" \
  -H "X-OVH-Signature: $SIGNATURE" \
  -d '{
    "id": "123456",
    "name": "service1",
    "status": "active",
    "type": "adsl",
    "tags": {}
  }'
```

**Description** :
Met à jour les propriétés du service xDSL `service1` avec les informations fournies dans le corps de la requête. Vous devez remplacer les variables et le corps JSON par vos propres données.

---

### **Exemple 4 : Diagnostic d'une ligne DSLAM**

```bash
curl -X POST \
  "https://api.ovh.com/1.0/xdsl/service1/lines/12345/diagnostic/run" \
  -H "Content-Type: application/json" \
  -H "X-OVH-API-Key: $APPLICATION_KEY" \
  -H "X-OVH-Application: $APPLICATION_SECRET" \
  -H "X-OVH-Timestamp: $(date +%s)" \
  -H "X-OVH-Signature: $SIGNATURE" \
  -d '{
    "lineNumber": "12345",
    "serviceName": "service1",
    "period": "day",
    "type": "signal"
  }'
```

**Description** :
Lance un diagnostic avancé sur la ligne `12345` du service `service1` et récupère les résultats. Vous devez remplacer les variables et le corps JSON par vos propres données.

---

## ⚠️ Erreurs Courantes et Solutions

### **Erreur 401 : Non autorisé**

**Cause** : Clé d'application (`applicationKey`) ou signature invalide.

**Solution** :

- Vérifiez que votre clé d'application est correcte.
- Assurez-vous que la signature est générée avec la bonne clé secrète (`applicationSecret`) et la bonne méthode (e.g., HMAC-SHA1).
- Vérifiez que l'URL et les paramètres sont corrects.

---

### **Erreur 404 : Service non trouvé**

**Cause** : Le service xDSL spécifié n'existe pas ou n'est pas accessible.

**Solution** :

- Vérifiez le nom du service (`serviceName`) dans l'URL.
- Assurez-vous que le service est bien associé à votre compte.
- Utilisez l'endpoint `/xdsl` pour lister les services disponibles.

---

### **Erreur 409 : Conflit de ressources**

**Cause** : Une opération est déjà en cours sur la ressource (e.g., diagnostic en cours).

**Solution** :

- Attendez que l'opération en cours se termine avant de relancer une nouvelle opération.
- Vérifiez l'état de la ressource via un endpoint GET avant de faire une opération PUT ou POST.

---

### **Erreur 422 : Paramètres invalides**

**Cause** : Les paramètres fournis dans le corps de la requête sont invalides ou manquants.

**Solution** :

- Vérifiez la structure du corps JSON en fonction du type de données attendu (e.g., `xdsl.Access`, `xdsl.Modem`).
- Assurez-vous que tous les champs obligatoires sont inclus.

---

## 📖 Documentation Complémentaire

Pour plus d'informations sur l'API OVHcloud et son authentification, consultez la [documentation officielle d'OVHcloud](https://api.ovh.com/).

### **Ressources utiles**

- [Gestionnaire d'Accès OVHcloud](https://eu.api.ovh.com/console/#/cloud/project/iam/policy) : Configurer les permissions IAM.
- [Console API OVHcloud](https://eu.api.ovh.com/console) : Tester les endpoints en direct.
- [Documentation n8n OVHcloud](https://docs.n8n.io/integrations/builtin/cloud/ovhcloud/) : Intégration avec n8n.

---

## 🔄 Versioning et Historique des Changements

| Version | Date      | Description                     |
| ------- | --------- | ------------------------------- |
| `1.0`   | `2026-03` | Documentation initiale générée. |

> **Note** : Cette documentation est basée sur les spécifications techniques fournies dans le fichier JSON. Elle peut être mise à jour manuellement pour ajouter des exemples, des solutions d'erreurs ou des détails supplémentaires.

---

## 📝 Licence et Droits d'Usage

Cette documentation est fournie sous licence **MIT** pour une utilisation libre et ouverte. Les endpoints et opérations décrits sont spécifiques à l'API **xDSL** d'OVHcloud et peuvent être soumis à des conditions d'utilisation supplémentaires.

Pour plus d'informations, consultez les [conditions générales d'OVHcloud](https://www.ovhcloud.com/fr/legal/).

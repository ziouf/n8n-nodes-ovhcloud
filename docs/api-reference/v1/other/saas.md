# OVHcloud SaaS API - Documentation Technique

Ce document décrit les endpoints et opérations disponibles pour l'API SaaS OVHcloud dans sa version 1.0.

## Table des Matières

- [Aperçu](#aperçu)
- [Endpoints et Opérations](#endpoints-et-opérations)
  - [GET /saas/csp2](#get-saascsp2)
  - [GET /saas/csp2/{serviceName}](#get-saascsp2servicename)
  - [GET /saas/csp2/{serviceName}/billingPeriodPeaks](#get-saascsp2servicenamebillingperiodpeaks)
  - [GET /saas/csp2/{serviceName}/orderableLicenses](#get-saascsp2servicenameorderablelicenses)
  - [GET /saas/csp2/{serviceName}/orderableLicenses/{id}](#get-saascsp2servicenameorderablelicensesid)
  - [GET /saas/csp2/{serviceName}/serviceInfos](#get-saascsp2servicenameserviceinfos)
  - [PUT /saas/csp2/{serviceName}/serviceInfos](#put-saascsp2servicenameserviceinfos)
  - [GET /saas/csp2/{serviceName}/subscription](#get-saascsp2servicenamesubscription)
  - [POST /saas/csp2/{serviceName}/subscription](#post-saascsp2servicenamesubscription)
  - [GET /saas/csp2/{serviceName}/subscription/{id}](#get-saascsp2servicenamesubscriptionid)
  - [DELETE /saas/csp2/{serviceName}/subscription/{id}](#delete-saascsp2servicenamesubscriptionid)
  - [GET /saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds](#get-saascsp2servicenameaddonssubscriptionidaddonssubscriptionids)
  - [GET /saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses](#get-saascsp2servicenameaddonsidavailableaddonlicenses)
  - [POST /saas/csp2/{serviceName}/subscription/{id}/changeQuantity](#post-saascsp2servicenameaddonsidchangequantity)
  - [POST /saas/csp2/{serviceName}/subscription/{id}/orderAddon](#post-saascsp2servicenameaddonsidor
- [Types et Modèles](#types-et-modèles)
  - [iam.ResourceMetadata](#iamresourcemetadata)
  - [iam.ResourceMetadata.StateEnum](#iamresourcemetadatastateenum)
  - [iam.resource.TagFilter](#iamresourcetagfilter)
  - [iam.resource.TagFilter.OperatorEnum](#iamresourcetagfilteroperatorenum)
  - [msServices.LicensePeriodEnum](#msserviceslicenseperiodenum)
  - [saas.csp2.BillingStatistics](#saascsp2billingstatistics)
  - [saas.csp2.BillingStatisticsLine](#saascsp2billingstatisticsline)
  - [saas.csp2.LicenseTypeEnum](#saascsp2licensetypeenum)
  - [saas.csp2.OfficeLicence](#saascsp2officelicence)
  - [saas.csp2.OfficeSubscription](#saascsp2officesubscription)
  - [saas.csp2.OfficeTask](#saascsp2officetask)
  - [saas.csp2.ServiceStateEnum](#saascsp2servicestateenum)
  - [saas.csp2.Statistics](#saascsp2statistics)
  - [saas.csp2.StatisticsLine](#saascsp2statisticsline)
  - [saas.csp2.SubscriptionChangeQuantityCreation](#saascsp2subscriptionchangequantitycreation)
  - [saas.csp2.SubscriptionCreation](#saascsp2subscriptioncreation)
  - [saas.csp2.SubscriptionOrderAddonCreation](#saascsp2subscriptionorderaddoncreation)
  - [saas.csp2.TaskStatusEnum](#saascsp2taskstatusenum)
  - [services.Service](#services-service)
  - [service.RenewType](#servicerenewtype)
  - [service.RenewalTypeEnum](#servicerenewaltypeenum)
  - [service.StateEnum](#servicestateenum)

## Aperçu

L'API SaaS OVHcloud permet de gérer les services Office 365 via l'API CSP2. Elle est principalement utilisée pour les opérations liées aux licences Office, aux abonnements et aux statistiques d'utilisation.

**Base URL**: `https://eu.api.ovh.com/v1`

**Version API**: `1.0`

**Authentification**: Obligatoire (sauf indication contraire)

**Format des réponses**: JSON

## Endpoints et Opérations

### GET /saas/csp2

**Description**: Liste les services Office disponibles.

**Statut API**: ALPHA

**Méthode HTTP**: GET

**Paramètres**:

| Nom     | Type                                | Description                            | Requis |
| ------- | ----------------------------------- | -------------------------------------- | ------ |
| iamTags | map[string][]iam.resource.TagFilter | Filtre les ressources sur les tags IAM | Non    |

**Réponse**: `string[]`

**Actions IAM**:

- `cspReseller:apiovh:get` (requis)

---

### GET /saas/csp2/{serviceName}

**Description**: Récupère les propriétés d'un tenant Office.

**Statut API**: ALPHA

**Méthode HTTP**: GET

**Paramètres**:

| Nom         | Type   | Description           | Requis |
| ----------- | ------ | --------------------- | ------ |
| serviceName | string | Nom du service Office | Oui    |

**Réponse**: `saas.csp2.OfficeTenantWithIAM`

**Actions IAM**:

- `cspReseller:apiovh:get` (requis)

---

### PUT /saas/csp2/{serviceName}

**Description**: Modifie les propriétés d'un tenant Office.

**Statut API**: BETA

**Méthode HTTP**: PUT

**Paramètres**:

| Nom         | Type             | Description                     | Requis |
| ----------- | ---------------- | ------------------------------- | ------ |
| serviceName | string           | Nom du service Office           | Oui    |
| body        | services.Service | Nouvelles propriétés du service | Oui    |

**Réponse**: `void`

**Actions IAM**:

- `cspReseller:apiovh:serviceInfos/edit` (requis)

---

### GET /saas/csp2/{serviceName}/billingPeriodPeaks

**Description**: Récupère les pics d'utilisation pour chaque période de facturation d'un tenant Office.

**Statut API**: ALPHA

**Méthode HTTP**: GET

**Paramètres**:

| Nom         | Type   | Description           | Requis |
| ----------- | ------ | --------------------- | ------ |
| serviceName | string | Nom du service Office | Oui    |

**Réponse**: `saas.csp2.BillingStatistics`

**Actions IAM**:

- `cspReseller:apiovh:billingPeriodPeaks/get` (requis)

---

### GET /saas/csp2/{serviceName}/orderableLicenses

**Description**: Liste les licences Office disponibles pour commande.

**Statut API**: ALPHA

**Méthode HTTP**: GET

**Paramètres**:

| Nom         | Type   | Description           | Requis |
| ----------- | ------ | --------------------- | ------ |
| serviceName | string | Nom du service Office | Oui    |

**Réponse**: `long[]`

**Actions IAM**:

- `cspReseller:apiovh:orderableLicenses/get` (requis)

---

### GET /saas/csp2/{serviceName}/orderableLicenses/{id}

**Description**: Récupère les propriétés d'une licence Office disponible pour commande.

**Statut API**: ALPHA

**Méthode HTTP**: GET

**Paramètres**:

| Nom         | Type   | Description               | Requis |
| ----------- | ------ | ------------------------- | ------ |
| serviceName | string | Nom du service Office     | Oui    |
| id          | long   | Identifiant de la licence | Oui    |

**Réponse**: `saas.csp2.OfficeLicence`

**Actions IAM**:

- `cspReseller:apiovh:orderableLicenses/get` (requis)

---

### GET /saas/csp2/{serviceName}/serviceInfos

**Description**: Récupère les informations d'un service Office.

**Statut API**: BETA

**Méthode HTTP**: GET

**Paramètres**:

| Nom         | Type   | Description           | Requis |
| ----------- | ------ | --------------------- | ------ |
| serviceName | string | Nom du service Office | Oui    |

**Réponse**: `services.Service`

**Actions IAM**:

- `cspReseller:apiovh:serviceInfos/get` (requis)

---

### PUT /saas/csp2/{serviceName}/serviceInfos

**Description**: Met à jour les informations d'un service Office.

**Statut API**: BETA

**Méthode HTTP**: PUT

**Paramètres**:

| Nom         | Type             | Description                     | Requis |
| ----------- | ---------------- | ------------------------------- | ------ |
| serviceName | string           | Nom du service Office           | Oui    |
| body        | services.Service | Nouvelles propriétés du service | Oui    |

**Réponse**: `void`

**Actions IAM**:

- `cspReseller:apiovh:serviceInfos/edit` (requis)

---

### GET /saas/csp2/{serviceName}/subscription

**Description**: Liste les abonnements associés à un tenant Office.

**Statut API**: ALPHA

**Méthode HTTP**: GET

**Paramètres**:

| Nom         | Type   | Description           | Requis |
| ----------- | ------ | --------------------- | ------ |
| serviceName | string | Nom du service Office | Oui    |

**Réponse**: `long[]`

**Actions IAM**:

- `cspReseller:apiovh:subscription/get` (requis)

---

### POST /saas/csp2/{serviceName}/subscription

**Description**: Ajoute un abonnement à un tenant Office.

**Statut API**: ALPHA

**Méthode HTTP**: POST

**Paramètres**:

| Nom         | Type                           | Description                         | Requis |
| ----------- | ------------------------------ | ----------------------------------- | ------ |
| serviceName | string                         | Nom du service Office               | Oui    |
| body        | saas.csp2.SubscriptionCreation | Propriétés de création d'abonnement | Oui    |

**Réponse**: `saas.csp2.OfficeTask`

**Actions IAM**:

- `cspReseller:apiovh:subscription/create` (requis)

---

### GET /saas/csp2/{serviceName}/subscription/{id}

**Description**: Récupère les propriétés d'un abonnement Office.

**Statut API**: ALPHA

**Méthode HTTP**: GET

**Paramètres**:

| Nom         | Type   | Description                 | Requis |
| ----------- | ------ | --------------------------- | ------ |
| serviceName | string | Nom du service Office       | Oui    |
| id          | long   | Identifiant de l'abonnement | Oui    |

**Réponse**: `saas.csp2.OfficeSubscription`

**Actions IAM**:

- `cspReseller:apiovh:subscription/get` (requis)

---

### DELETE /saas/csp2/{serviceName}/subscription/{id}

**Description**: Supprime un abonnement Office.

**Statut API**: ALPHA

**Méthode HTTP**: DELETE

**Paramètres**:

| Nom         | Type   | Description                 | Requis |
| ----------- | ------ | --------------------------- | ------ |
| serviceName | string | Nom du service Office       | Oui    |
| id          | long   | Identifiant de l'abonnement | Oui    |

**Réponse**: `saas.csp2.OfficeTask`

**Actions IAM**:

- `cspReseller:apiovh:subscription/delete` (requis)

---

### GET /saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds

**Description**: Liste les identifiants des abonnements add-ons associés à un abonnement Office.

**Statut API**: ALPHA

**Méthode HTTP**: GET

**Paramètres**:

| Nom         | Type   | Description                 | Requis |
| ----------- | ------ | --------------------------- | ------ |
| serviceName | string | Nom du service Office       | Oui    |
| id          | long   | Identifiant de l'abonnement | Oui    |

**Réponse**: `long[]`

**Actions IAM**:

- `cspReseller:apiovh:subscription/addonsSubscriptionIds/get` (requis)

---

### GET /saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses

**Description**: Liste les licences add-ons disponibles pour commande.

**Statut API**: ALPHA

**Méthode HTTP**: GET

**Paramètres**:

| Nom         | Type   | Description                 | Requis |
| ----------- | ------ | --------------------------- | ------ |
| serviceName | string | Nom du service Office       | Oui    |
| id          | long   | Identifiant de l'abonnement | Oui    |

**Réponse**: `long[]`

**Actions IAM**:

- `cspReseller:apiovh:subscription/availableAddonLicenses/get` (requis)

---

### POST /saas/csp2/{serviceName}/subscription/{id}/changeQuantity

**Description**: Change la quantité de licences dans un abonnement.

**Statut API**: ALPHA

**Méthode HTTP**: POST

**Paramètres**:

| Nom         | Type                                         | Description                   | Requis |
| ----------- | -------------------------------------------- | ----------------------------- | ------ |
| serviceName | string                                       | Nom du service Office         | Oui    |
| id          | long                                         | Identifiant de l'abonnement   | Oui    |
| body        | saas.csp2.SubscriptionChangeQuantityCreation | Nouvelle quantité de licences | Oui    |

**Réponse**: `saas.csp2.OfficeTask`

**Actions IAM**:

- `cspReseller:apiovh:subscription/changeQuantity` (requis)

---

### POST /saas/csp2/{serviceName}/subscription/{id}/orderAddon

**Description**: Crée un nouvel abonnement add-on pour un abonnement existant.

**Statut API**: ALPHA

**Méthode HTTP**: POST

**Paramètres**:

| Nom         | Type                                     | Description                               | Requis |
| ----------- | ---------------------------------------- | ----------------------------------------- | ------ |
| serviceName | string                                   | Nom du service Office                     | Oui    |
| id          | long                                     | Identifiant de l'abonnement               | Oui    |
| body        | saas.csp2.SubscriptionOrderAddonCreation | Propriétés de l'abonnement add-on à créer | Oui    |

**Réponse**: `saas.csp2.OfficeTask`

**Actions IAM**:

- `cspReseller:apiovh:subscription/orderAddon` (requis)

---

### GET /saas/csp2/{serviceName}/task

**Description**: Liste les tâches en cours pour un tenant Office.

**Statut API**: ALPHA

**Méthode HTTP**: GET

**Paramètres**:

| Nom         | Type   | Description           | Requis |
| ----------- | ------ | --------------------- | ------ |
| serviceName | string | Nom du service Office | Oui    |

**Réponse**: `long[]`

**Actions IAM**:

- `cspReseller:apiovh:task/get` (requis)

---

### GET /saas/csp2/{serviceName}/task/{id}

**Description**: Récupère les propriétés d'une tâche spécifique pour un tenant Office.

**Statut API**: ALPHA

**Méthode HTTP**: GET

**Paramètres**:

| Nom         | Type   | Description             | Requis |
| ----------- | ------ | ----------------------- | ------ |
| serviceName | string | Nom du service Office   | Oui    |
| id          | long   | Identifiant de la tâche | Oui    |

**Réponse**: `saas.csp2.OfficeTask`

**Actions IAM**:

- `cspReseller:apiovh:task/get` (requis)

---

### GET /saas/csp2/{serviceName}/usageStatistics

**Description**: Récupère les statistiques d'utilisation pour une période donnée.

**Statut API**: ALPHA

**Méthode HTTP**: GET

**Paramètres**:

| Nom         | Type                         | Description                                                                | Requis |
| ----------- | ---------------------------- | -------------------------------------------------------------------------- | ------ |
| serviceName | string                       | Nom du service Office                                                      | Oui    |
| timePeriod  | msServices.LicensePeriodEnum | Période de temps à interroger (lastWeek, lastMonth, lastQuarter, lastYear) | Oui    |

**Réponse**: `saas.csp2.Statistics[]`

**Actions IAM**:

- `cspReseller:apiovh:usageStatistics/get` (requis)

---

## Types et Modèles

### iam.ResourceMetadata

**Description**: Métadonnées IAM intégrées aux modèles de services.

**Propriétés**:

| Propriété   | Type                           | Description                                                      | Nullable | ReadOnly |
| ----------- | ------------------------------ | ---------------------------------------------------------------- | -------- | -------- |
| displayName | string                         | Nom d'affichage de la ressource                                  | Oui      | Oui      |
| id          | uuid                           | Identifiant unique de la ressource                               | Non      | Oui      |
| state       | iam.ResourceMetadata.StateEnum | État de la ressource                                             | Oui      | Oui      |
| tags        | map[string]string              | Tags de la ressource. Les tags calculés sont préfixés par `ovh:` | Oui      | Oui      |
| urn         | string                         | Nom unique de la ressource utilisé dans les politiques           | Non      | Oui      |

---

### iam.ResourceMetadata.StateEnum

**Description**: État d'une ressource.

**Valeurs**:

- `EXPIRED`
- `IN_CREATION`
- `OK`
- `SUSPENDED`

---

### iam.resource.TagFilter

**Description**: Filtre pour les tags de ressource.

**Propriétés**:

| Propriété | Type                                | Description                                                       | Nullable | ReadOnly |
| --------- | ----------------------------------- | ----------------------------------------------------------------- | -------- | -------- |
| operator  | iam.resource.TagFilter.OperatorEnum | Opérateur à utiliser pour filtrer sur la valeur (par défaut `EQ`) | Oui      | Oui      |
| value     | string                              | Valeur à utiliser pour filtrer les tags                           | Non      | Oui      |

---

### iam.resource.TagFilter.OperatorEnum

**Description**: Opérateurs disponibles pour filtrer les tags de ressource.

**Valeurs**:

- `EQ` (égalité)
- `EXISTS` (existe)
- `ILIKE` (inclusif, insensible à la casse)
- `LIKE` (inclusif)
- `NEQ` (inégalité)
- `NEXISTS` (n'existe pas)

---

### msServices.LicensePeriodEnum

**Description**: Période de temps utilisée pour déterminer les statistiques de licences.

**Valeurs**:

- `lastWeek`
- `lastMonth`
- `lastQuarter`
- `lastYear`

---

### saas.csp2.BillingStatistics

**Description**: Statistiques de facturation pour la période en cours.

**Propriétés**:

| Propriété | Type                              | Description                                   |
| --------- | --------------------------------- | --------------------------------------------- | --- | --- |
| endDate   | date                              | Date de fin de la période de facturation      | Non | Oui |
| lines     | saas.csp2.BillingStatisticsLine[] | Liste des lignes associées à ces statistiques | Non | Oui |
| startDate | date                              | Date de début de la période de facturation    | Non | Oui |

---

### saas.csp2.BillingStatisticsLine

**Description**: Ligne des statistiques de facturation.

**Propriétés**:

| Propriété   | Type   | Description                                       |
| ----------- | ------ | ------------------------------------------------- | --- | --- |
| licenceId   | long   | Identifiant de la licence Office                  | Non | Oui |
| licenceName | string | Nom de la licence Office                          | Non | Oui |
| peakCount   | long   | Nombre maximal de licences activées simultanément | Non | Oui |

---

### saas.csp2.LicenseTypeEnum

**Description**: Type de licence Office.

**Valeurs**:

- `ADDON`
- `NON-SPECIFIC`

---

### saas.csp2.OfficeLicence

**Description**: Licence Office.

**Propriétés**:

| Propriété               | Type                      | Description                                                 | Nullable | ReadOnly |
| ----------------------- | ------------------------- | ----------------------------------------------------------- | -------- | -------- |
| id                      | long                      | Identifiant unique de la licence                            | Non      | Oui      |
| licenceType             | saas.csp2.LicenseTypeEnum | Type de la licence (standalone ou addon)                    | Non      | Oui      |
| limit                   | long                      | Quantité maximale de licences achetables                    | Oui      | Oui      |
| name                    | string                    | Nom de la licence                                           | Non      | Oui      |
| newSeatsAllowed         | boolean                   | Indique si l'ajout de nouveaux sièges est possible          | Non      | Oui      |
| newSubscriptionsAllowed | boolean                   | Indique si la création de nouveaux abonnements est possible | Non      | Oui      |

---

### saas.csp2.OfficeSubscription

**Description**: Abonnement Office.

**Propriétés**:

| Propriété     | Type     | Description                        | Nullable | ReadOnly |
| ------------- | -------- | ---------------------------------- | -------- | -------- |
| creationDate  | datetime | Date de création                   | Non      | Oui      |
| id            | long     | Identifiant unique de l'abonnement | Non      | Oui      |
| lastUpdate    | datetime | Date de dernière mise à jour       | Oui      | Oui      |
| licenseId     | long     | Identifiant du type de licence     | Non      | Oui      |
| quantity      | long     | Nombre de licences disponibles     | Non      | Oui      |
| status        | string   | Statut de l'abonnement             | Non      | Oui      |
| taskPendingId | long     | Identifiant de la tâche en cours   | Non      | Oui      |

---

### saas.csp2.OfficeTask

**Description**: Tâche Office.

**Propriétés**:

| Propriété  | Type                     | Description                    | Nullable | ReadOnly |
| ---------- | ------------------------ | ------------------------------ | -------- | -------- |
| finishDate | datetime                 | Date de fin de la tâche        | Oui      | Oui      |
| function   | string                   | Nom de la fonction             | Non      | Oui      |
| id         | long                     | Identifiant unique de la tâche | Non      | Oui      |
| status     | saas.csp2.TaskStatusEnum | Statut de la tâche             | Non      | Oui      |
| todoDate   | datetime                 | Date de création de la tâche   | Non      | Oui      |

---

### saas.csp2.ServiceStateEnum

**Description**: État d'un tenant Office.

**Valeurs**:

- `creating`
- `inMaintenance`
- `ok`
- `reopening`
- `suspended`
- `suspending`

---

### saas.csp2.Statistics

**Description**: Statistiques d'utilisation de licences.

**Propriétés**:

| Propriété | Type                       | Description                                    | Nullable | ReadOnly |
| --------- | -------------------------- | ---------------------------------------------- | -------- | -------- |
| date      | date                       | Date des statistiques                          | Non      | Oui      |
| lines     | saas.csp2.StatisticsLine[] | Liste des lignes associées à cette statistique | Non      | Oui      |

---

### saas.csp2.StatisticsLine

**Description**: Ligne des statistiques d'utilisation.

**Propriétés**:

| Propriété     | Type   | Description                                       | Nullable | ReadOnly |
| ------------- | ------ | ------------------------------------------------- | -------- | -------- |
| endOfDayCount | long   | Nombre de licences activées en fin de journée     | Non      | Oui      |
| licenceId     | long   | Identifiant de la licence Office                  | Non      | Oui      |
| licenceName   | string | Nom de la licence Office                          | Non      | Oui      |
| peakCount     | long   | Nombre maximal de licences activées simultanément | Non      | Oui      |

---

### saas.csp2.SubscriptionChangeQuantityCreation

**Description**: Modification de la quantité d'un abonnement.

**Propriétés**:

| Propriété | Type | Description                   | Nullable | ReadOnly |
| --------- | ---- | ----------------------------- | -------- | -------- |
| quantity  | long | Nouvelle quantité de licences | Non      | Non      |

---

### saas.csp2.SubscriptionCreation

**Description**: Création d'un abonnement.

**Propriétés**:

| Propriété | Type | Description                           | Nullable | ReadOnly |
| --------- | ---- | ------------------------------------- | -------- | -------- |
| licenseId | long | Identifiant unique du type de licence | Non      | Non      |
| quantity  | long | Quantité de licences à commander      | Non      | Non      |

---

### saas.csp2.SubscriptionOrderAddonCreation

**Description**: Création d'un abonnement add-on.

**Propriétés**:

| Propriété | Type | Description                                                                         | Nullable | ReadOnly |
| --------- | ---- | ----------------------------------------------------------------------------------- | -------- | -------- |
| licenseId | long | Identifiant de la licence add-on (voir `/subscription/{id}/availableAddonLicenses`) | Non      | Non      |
| quantity  | long | Quantité de licences pour le nouvel abonnement                                      | Non      | Non      |

---

### saas.csp2.TaskStatusEnum

**Description**: Statut d'une tâche Office.

**Valeurs**:

- `cancelled`
- `doing`
- `done`
- `error`
- `todo`

---

### services.Service

**Description**: Détails sur un service.

**Propriétés**:

| Propriété             | Type                    | Description                                                               | Nullable | ReadOnly |
| --------------------- | ----------------------- | ------------------------------------------------------------------------- | -------- | -------- |
| canDeleteAtExpiration | boolean                 | Indique si le service peut être configuré pour être supprimé à expiration | Non      | Oui      |
| contactAdmin          | string                  | Contact administrateur du service                                         | Non      | Oui      |
| contactBilling        | string                  | Contact facturation du service                                            | Non      | Oui      |
| contactTech           | string                  | Contact technique du service                                              | Non      | Oui      |
| creation              | date                    | Date de création du service                                               | Non      | Oui      |
| domain                | string                  | Domaine du service                                                        | Non      | Oui      |
| engagedUpTo           | date                    | Date d'engagement jusqu'à                                                 | Oui      | Oui      |
| expiration            | date                    | Date d'expiration du service                                              | Non      | Oui      |
| possibleRenewPeriod   | long[]                  | Liste des périodes de renouvel possible (en mois)                         | Oui      | Oui      |
| renew                 | service.RenewType       | Méthode de renouvel du service                                            | Oui      | Non      |
| renewalType           | service.RenewalTypeEnum | Type de renouvel du service                                               | Non      | Oui      |
| serviceId             | long                    | Identifiant unique du service                                             | Non      | Oui      |
| status                | service.StateEnum       | Statut du service                                                         | Non      | Oui      |

---

### service.RenewType

**Description**: Méthode de renouvel d'un service.

**Propriétés**:

| Propriété          | Type    | Description                                              | Nullable | ReadOnly |
| ------------------ | ------- | -------------------------------------------------------- | -------- | -------- |
| automatic          | boolean | Le service est renouvelé automatiquement                 | Non      | Non      |
| deleteAtExpiration | boolean | Le service sera supprimé à expiration                    | Non      | Non      |
| forced             | boolean | Le service est forcé de renouveler                       | Non      | Non      |
| manualPayment      | boolean | Le service nécessite un paiement manuel pour le renouvel | Oui      | Non      |
| period             | long    | Période de renouvel en mois                              | Oui      | Non      |

---

### service.RenewalTypeEnum

**Description**: Types de renouvel détaillés.

**Valeurs**:

- `automaticForcedProduct`
- `automaticV2012`
- `automaticV2014`
- `automaticV2016`
- `automaticV2024`
- `manual`
- `oneShot`
- `option`

---

### service.StateEnum

**Description**: État d'un service.

**Valeurs**:

- `autorenewInProgress`
- `expired`
- `inCreation`
- `ok`
- `pendingDebt`
- `unPaid`

---

### service.StateEnum

**Description**: État d'un service.

**Valeurs**:

- `autorenewInProgress`
- `expired`
- `inCreation`
- `ok`
- `pendingDebt`
- `unPaid`

---

## Exemples d'Utilisation

### Liste des services Office disponibles

```bash
curl -X GET "https://eu.api.ovh.com/v1/saas/csp2" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Timestamp: $(date +%s)" \
     -H "X-OVH-Signature: $SIGNATURE"
```

---

### Récupère un tenant Office spécifique

```bash
curl -X GET "https://eu.api.ovh.com/v1/saas/csp2/{serviceName}" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Timestamp: $(date +%s)" \
     -H "X-OVH-Signature: $SIGNATURE"
```

Remplacez `{serviceName}` par le nom du tenant Office souhaité.

---

### Crée un nouvel abonnement

```bash
curl -X POST "https://eu.api.ovh.com/v1/saas/csp2/{serviceName}/subscription" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Timestamp: $(date +%s)" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "Content-Type: application/json" \
     -d '{
           "licenseId": 123456,
           "quantity": 10
         }'
```

Remplacez `{serviceName}` par le nom du tenant Office et `123456` par l'identifiant de la licence.

---

### Change la quantité d'un abonnement existant

```bash
curl -X POST "https://eu.api.ovh.com/v1/saas/csp2/{serviceName}/subscription/{id}/changeQuantity" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Timestamp: $(date +%s)" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "Content-Type: application/json" \
     -d '{
           "quantity": 20
         }'
```

Remplacez `{serviceName}` par le nom du tenant Office et `{id}` par l'identifiant de l'abonnement.

---

### Crée un abonnement add-on

```bash
curl -X POST "https://eu.api.ovh.com/v1/saas/csp2/{serviceName}/subscription/{id}/orderAddon" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Timestamp: $(date +%s)" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "Content-Type: application

```

Remplacez `{serviceName}` par le nom du tenant Office, `{id}` par l'identifiant de l'abonnement existant, et `123456` par l'identifiant de la licence add-on.

---

## Considérations d'Erreur

- **Authentification manquante ou invalide**: Les endpoints nécessitent une authentification via les clés API OVH. Une erreur `401 Unauthorized` sera retournée si les clés ne sont pas fournies ou sont incorrectes.
- **Service non trouvé**: Si le `{serviceName}` ou `{id}` n'existe pas, une erreur `404 Not Found` sera retournée.
- **Période de temps invalide**: Si `timePeriod` n'est pas l'une des valeurs valides (`lastWeek`, `lastMonth`, `lastQuarter`, `lastYear`), une erreur `400 Bad Request` sera retournée.
- **Permissions IAM**: Les actions IAM requises doivent être autorisées pour l'utilisateur. Si ce n'est pas le cas, une erreur `403 Forbidden` sera retournée.

---

## Notes de Sécurité

- **Signature des requêtes**: Les requêtes doivent être signées avec l'algorithme OVH (SHA1) pour garantir leur intégrité.
- **Gestion des clés**: Les clés API (`X-OVH-API-Key`, `X-OVH-Application`, `X-OVH-Consumer-Key`) doivent être traitées comme des secrets et ne pas être exposées publiquement.
- **Permissions IAM**: Les actions IAM requises doivent être configurées avec soin pour éviter les abus ou les accès non autorisés.

---

## Historique des Versions

| Version | Date       | Description                                                                  |
| ------- | ---------- | ---------------------------------------------------------------------------- |
| 1.0     | 2026-03-31 | Version initiale de la documentation technique pour l'API SaaS OVHcloud CSP2 |

---

## Références

- [Documentation OVHcloud SaaS API](https://api.ovh.com/)
- [OVHcloud IAM Documentation](https://docs.ovh.com/en/public-cloud/iam/)
- [Convention de Nommage OVHcloud](https://docs.ovh.com/en/public-cloud/naming-conventions/)

---

*Documentation générée automatiquement à partir du fichier JSON fourni.*

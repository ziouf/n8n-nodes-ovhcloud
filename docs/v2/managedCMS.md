# Managed CMS API v2 - Documentation Technique

Cette documentation décrit les endpoints et les opérations disponibles dans l'API v2 Managed CMS d'OVHcloud. Les opérations sont actuellement en version **Alpha**, ce qui signifie qu'elles peuvent évoluer ou être modifiées sans préavis.

## Table des Matières

- [Base URL](#base-url)
- [Endpoints Disponibles](#endpoints-disponibles)
- [Opérations Générales](#opérations-générales)
  - [List des CMS Disponibles](#list-des-cms-disponibles)
  - [List des Langues Disponibles](#list-des-langues-disponibles)
  - [List des Versions PHP Supportées](#list-des-versions-php-supportées)
  - [List des Services avec IAM](#list-des-services-avec-iam)
- [Opérations sur les Services](#opérations-sur-les-services)
  - [Get un Service](#get-un-service)
  - [Edit un Service](#edit-un-service)
  - [Flush CDN d'un Service](#flush-cdn-dun-service)
  - [List des Tâches d'un Service](#list-des-tâches-dun-service)
  - [Edit une Tâche d'un Service](#edit-une-tâche-dun-service)
- [Opérations sur les Sites Web](#opérations-sur-les-sites-web)
  - [List des Sites Web d'un Service](#list-des-sites-web-dun-service)
  - [Delete un Site Web](#delete-un-site-web)
  - [Get un Site Web](#get-un-site-web)
  - [Edit un Site Web](#edit-un-site-web)
  - [Flush CDN d'un Site Web](#flush-cdn-dun-site-web)
  - [Reset le Mot de Passe de la Base de Données d'un Site Web](#reset-le-mot-de-passe-de-la-base-de-données-dun-site-web)

---

## Base URL

```
https://eu.api.ovh.com/v2
```

---

## Endpoints Disponibles

### `/managedCMS/reference/availableCMS`

**Description** : Liste les systèmes de gestion de contenu (CMS) disponibles.

**Méthode HTTP** : `GET`

**Paramètres** :

| Nom                   | Type     | Description           | Requis |
| --------------------- | -------- | --------------------- | ------ |
| `X-Pagination-Cursor` | `string` | Curseur de pagination | Non    |
| `X-Pagination-Size`   | `long`   | Taille de pagination  | Non    |

**Type de Réponse** : `managedCMS.CMSEnum[]`

**Statut API** : Alpha (`ALPHA`)

**Authentification** : Oui (non désactivable)

---

### `/managedCMS/reference/availableLanguages`

**Description** : Liste les langues disponibles pour la création d'un nouveau site web.

**Méthode HTTP** : `GET`

**Paramètres** :

| Nom                   | Type                 | Description           | Requis |
| --------------------- | -------------------- | --------------------- | ------ |
| `X-Pagination-Cursor` | `string`             | Curseur de pagination | Non    |
| `X-Pagination-Size`   | `long`               | Taille de pagination  | Non    |
| `cms`                 | `managedCMS.CMSEnum` | Pour quel CMS         | Oui    |

**Type de Réponse** : `managedCMS.Language[]`

**Statut API** : Alpha (`ALPHA`)

**Authentification** : Oui (non désactivable)

---

### `/managedCMS/reference/supportedPHPVersions`

**Description** : Liste les versions PHP supportées par le service.

**Méthode HTTP** : `GET`

**Paramètres** :

| Nom                   | Type                 | Description           | Requis |
| --------------------- | -------------------- | --------------------- | ------ |
| `X-Pagination-Cursor` | `string`             | Curseur de pagination | Non    |
| `X-Pagination-Size`   | `long`               | Taille de pagination  | Non    |
| `cms`                 | `managedCMS.CMSEnum` | Pour quel CMS         | Oui    |

**Type de Réponse** : `managedCMS.PHPVersionEnum[]`

**Statut API** : Alpha (`ALPHA`)

**Authentification** : Oui (non désactivable)

---

### `/managedCMS/resource/{serviceId}`

**Description** : Récupère un service spécifique.

**Méthode HTTP** : `GET`

**Paramètres** :

| Nom         | Type   | Description   | Requis |
| ----------- | ------ | ------------- | ------ |
| `serviceId` | `uuid` | ID du service | Oui    |

**Type de Réponse** : `managedCMS.ServiceWithIAM`

**Statut API** : Alpha (`ALPHA`)

**Authentification** : Oui (non désactivable)

**Actions IAM Requises** :

- `managedCMS:apiovh:get`

---

### `/managedCMS/resource/{serviceId}/flushCDN`

**Description** : Vide le cache CDN pour tous les sites web attachés au service.

**Méthode HTTP** : `POST`

**Paramètres** :

| Nom         | Type   | Description   | Requis |
| ----------- | ------ | ------------- | ------ |
| `serviceId` | `uuid` | ID du service | Oui    |

**Type de Réponse** : `common.CurrentTask`

**Statut API** : Alpha (`ALPHA`)

**Authentification** : Oui (non désactivable)

**Erreurs Possibles** :

- `Client::BadRequest::WrongServiceStatus`
- `Client::Conflict::CurrentTaskAlreadyExists`

**Actions IAM Requises** :

- `managedCMS:apiovh:cdn/flush`

---

### `/managedCMS/resource/{serviceId}/task`

**Description** : Récupère les tâches en cours et récentes pour un service.

**Méthode HTTP** : `GET`

**Paramètres** :

| Nom                   | Type     | Description           | Requis |
| --------------------- | -------- | --------------------- | ------ |
| `X-Pagination-Cursor` | `string` | Curseur de pagination | Non    |
| `X-Pagination-Size`   | `long`   | Taille de pagination  | Non    |
| `serviceId`           | `uuid`   | ID du service         | Oui    |

**Type de Réponse** : `common.Task[]`

**Statut API** : Alpha (`ALPHA`)

**Authentification** : Oui (non désactivable)

**Actions IAM Requises** :

- `managedCMS:apiovh:task/get`

---

### `/managedCMS/resource/{serviceId}/task/{taskId}`

**Description** : Récupère une tâche spécifique ou édite une tâche pour fournir des entrées utilisateur.

**Méthode HTTP** : `GET`, `PUT`

**Paramètres** :

| Nom         | Type   | Description    | Requis |
| ----------- | ------ | -------------- | ------ |
| `serviceId` | `uuid` | ID du service  | Oui    |
| `taskId`    | `uuid` | ID de la tâche | Oui    |

**Type de Réponse** : `common.Task`, `common.TaskWithInputs<map[managedCMS.TaskInputsEnum]any>`

**Statut API** : Alpha (`ALPHA`)

**Authentification** : Oui (non désactivable)

**Erreurs Possibles** :

- `Client::BadRequest::IncompatibleArguments`
- `Client::BadRequest::NoActiveThemeSelected`
- `Client::BadRequest::WrongServiceStatus`
- `Client::BadRequest::WrongWebsiteStatus`
- `Client::NotFound::WebsiteNotFound`

**Actions IAM Requises** :

- `managedCMS:apiovh:task/edit`

---

### `/managedCMS/resource/{serviceId}/website`

**Description** : Récupère la liste des sites web attachés à un service.

**Méthode HTTP** : `GET`

**Paramètres** :

| Nom                   | Type     | Description           | Requis |
| --------------------- | -------- | --------------------- | ------ |
| `X-Pagination-Cursor` | `string` | Curseur de pagination | Non    |
| `X-Pagination-Size`   | `long`   | Taille de pagination  | Non    |
| `serviceId`           | `uuid`   | ID du service         | Oui    |

**Type de Réponse** : `managedCMS.Website[]`

**Statut API** : Alpha (`ALPHA`)

**Authentification** : Oui (non désactivable)

**Actions IAM Requises** :

- `managedCMS:apiovh:website/get`

---

### `/managedCMS/resource/{serviceId}/website/{websiteId}`

**Description** : Crée ou importe un site web pour un service.

**Méthode HTTP** : `POST`

**Paramètres** :

| Nom         | Type   | Description    | Requis |
| ----------- | ------ | -------------- | ------ |
| `serviceId` | `uuid` | ID du service  | Oui    |
| `websiteId` | `uuid` | ID du site web | Oui    |

**Type de Réponse** : `managedCMS.Website`

**Statut API** : Alpha (`ALPHA`)

**Authentification** : Oui (non désactivable)

**Erreurs Possibles** :

- `Client::BadRequest::CreationAdminLoginMustBeEmail`
- `Client::BadRequest::IncompatibleArguments`
- `Client::BadRequest::InvalidImportAdminURL`
- `Client::BadRequest::WebsitesQuotaReached`
- `Client::BadRequest::WrongServiceStatus`

**Actions IAM Requises** :

- `managedCMS:apiovh:website/create`

---

### `/managedCMS/resource/{serviceId}/website/{websiteId}/flushCDN`

**Description** : Vide le cache CDN pour un site web spécifique.

**Méthode HTTP** : `POST`

**Paramètres** :

| Nom         | Type   | Description    | Requis |
| ----------- | ------ | -------------- | ------ |
| `serviceId` | `uuid` | ID du service  | Oui    |
| `websiteId` | `uuid` | ID du site web | Oui    |

**Type de Réponse** : `common.CurrentTask`

**Statut API** : Alpha (`ALPHA`)

**Authentification** : Oui (non désactivable)

**Erreurs Possibles** :

- `Client::BadRequest::WrongServiceStatus`
- `Client::BadRequest::WrongWebsiteStatus`
- `Client::NotFound::WebsiteNotFound`
- `Client::Conflict::CurrentTaskAlreadyExists`

**Actions IAM Requises** :

- `managedCMS:apiovh:website/cdn/flush`

---

### `/managedCMS/resource/{serviceId}/website/{websiteId}/resetDatabasePassword`

**Description** : Réinitialise le mot de passe de la base de données d'un site web.

**Méthode HTTP** : `POST`

**Paramètres** :

| Nom         | Type   | Description    | Requis |
| ----------- | ------ | -------------- | ------ |
| `serviceId` | `uuid` | ID du service  | Oui    |
| `websiteId` | `uuid` | ID du site web | Oui    |

**Type de Réponse** : `common.CurrentTask`

**Statut API** : Alpha (`ALPHA`)

**Authentification** : Oui (non désactivable)

**Erreurs Possibles** :

- `Client::BadRequest::WrongServiceStatus`
- `Client::BadRequest::WrongWebsiteStatus`
- `Client::NotFound::WebsiteNotFound`

**Actions IAM Requises** :

- `managedCMS:apiovh:website/database/resetPassword`

---

## Types et Modèles

### `managedCMS.CMSEnum`

**Description** : Enumération des CMS disponibles.

**Valeurs** :

- `WORDPRESS`

---

### `managedCMS.Language`

**Description** : Modèle représentant une langue supportée par un CMS.

**Propriétés** :

| Nom    | Type                      | Description       | Requis | Lecture Seule |
| ------ | ------------------------- | ----------------- | ------ | ------------- |
| `code` | `managedCMS.LanguageEnum` | Code de la langue | Non    | Oui           |
| `name` | `string`                  | Nom de la langue  | Non    | Oui           |

**Valeurs de `managedCMS.LanguageEnum`** :

- `de_DE`
- `en_GB`
- `en_US`
- `es_ES`
- `fr_CA`
- `fr_FR`
- `it_IT`
- `pl_PL`
- `pt_PT`

---

### `managedCMS.PHPVersionEnum`

**Description** : Enumération des versions PHP supportées par le service.

**Valeurs** :

- `7.4`
- `8.1`
- `8.2`
- `8.3`
- `8.4`
- `8.5`

---

### `managedCMS.ServiceWithIAM`

**Description** : Modèle représentant un service Managed CMS avec des métadonnées IAM.

**Propriétés** :

| Nom              | Type                                  | Description                                                | Requis | Lecture Seule |
| ---------------- | ------------------------------------- | ---------------------------------------------------------- | ------ | ------------- |
| `id`             | `uuid`                                | Identifiant unique du service                              | Non    | Oui           |
| `resourceStatus` | `common.ResourceStatusEnum`           | Statut de préparation du service                           | Non    | Oui           |
| `checksum`       | `string`                              | Hash utilisé pour contrôler les modifications concurrentes | Non    | Oui           |
| `currentState`   | `managedCMS.ServiceCurrentState`      | État actuel du service                                     | Non    | Oui           |
| `currentTasks`   | `common.CurrentTask[]`                | Tâches asynchrones en cours                                | Non    | Oui           |
| `iamTags`        | `map[string][]iam.resource.TagFilter` | Filtres de tags IAM                                        | Non    | Oui           |

**Valeurs de `common.ResourceStatusEnum`** :

- `CREATING`
- `DELETING`
- `ERROR`
- `OUT_OF_SYNC`
- `READY`
- `SUSPENDED`
- `UPDATING`

---

### `managedCMS.ServiceCurrentState`

**Description** : État actuel d'un service Managed CMS.

**Propriétés** :

| Nom          | Type                           | Description                           | Requis | Lecture Seule |
| ------------ | ------------------------------ | ------------------------------------- | ------ | ------------- |
| `createdAt`  | `datetime`                     | Date de création du service           | Non    | Oui           |
| `plan`       | `string`                       | Plan de l'abonnement                  | Non    | Oui           |
| `quotas`     | `managedCMS.ServiceQuotas`     | Information sur les quotas du service | Non    | Oui           |
| `dashboards` | `managedCMS.ServiceDashboards` | URLs des tableaux de bord du service  | Non    | Oui           |

---

### `managedCMS.ServiceDashboards`

**Description** : URLs des tableaux de bord d'un service.

**Propriétés** :

| Nom         | Type     | Description                                           | Requis | Lecture Seule |
| ----------- | -------- | ----------------------------------------------------- | ------ | ------------- |
| `wordpress` | `string` | URL du tableau de bord pour gérer les sites WordPress | Non    | Oui           |

---

### `managedCMS.ServiceQuotas`

**Description** : Information sur les quotas d'un service.

**Propriétés** :

| Nom         | Type                          | Description                | Requis | Lecture Seule |
| ----------- | ----------------------------- | -------------------------- | ------ | ------------- |
| `diskQuota` | `managedCMS.ServiceDiskQuota` | Quota de disque du service | Non    | Oui           |

---

### `managedCMS.ServiceDiskQuota`

**Description** : Information sur le quota de disque d'un service.

**Propriétés** :

| Nom                    | Type   | Description                                                      | Requis | Lecture Seule |
| ---------------------- | ------ | ---------------------------------------------------------------- | ------ | ------------- |
| `planQuotaBytes`       | `long` | Quota de disque en octets offert par le plan de l'abonnement     | Non    | Oui           |
| `additionalQuotaBytes` | `long` | Quota de disque en octets offert par l'add-on de quota de disque | Non    | Oui           |
| `totalQuotaBytes`      | `long` | Quota total en octets du service                                 | Non    | Oui           |
| `totalUsageBytes`      | `long` | Usage total actuel en octets des sites web du service            | Non    | Oui           |

---

### `managedCMS.Website`

**Description** : Modèle représentant un site web.

**Propriétés** :

| Nom              | Type                           | Description                                                | Requis | Lecture Seule |
| ---------------- | ------------------------------ | ---------------------------------------------------------- | ------ | ------------- |
| `id`             | `uuid`                         | Identifiant unique du site web                             | Non    | Oui           |
| `resourceStatus` | `common.ResourceStatusEnum`    | Statut de préparation du site web                          | Non    | Oui           |
| `checksum`       | `string`                       | Hash utilisé pour contrôler les modifications concurrentes | Non    | Oui           |
| `targetSpec`     | `managedCMS.WebsiteTargetSpec` | Spécification de la cible pour le site web                 | Non    | Oui           |

---

### `managedCMS.WebsiteTargetSpec`

**Description** : Spécification de la cible pour un site web.

**Propriétés** :

| Nom         | Type                                    | Description                        | Requis | Lecture Seule |
| ----------- | --------------------------------------- | ---------------------------------- | ------ | ------------- |
| `wordpress` | `managedCMS.WebsiteTargetSpecWordPress` | Spécification cible pour WordPress | Non    | Oui           |

---

### `managedCMS.WebsiteTargetSpecWordPress`

**Description** : Spécification cible pour WordPress.

**Propriétés** :

| Nom        | Type                      | Description                         | Requis | Lecture Seule |
| ---------- | ------------------------- | ----------------------------------- | ------ | ------------- |
| `language` | `managedCMS.LanguageEnum` | Langue à configurer sur le site web | Non    | Oui           |

---

### `managedCMS.WebsiteEditionBody`

**Description** : Corps de la requête pour éditer un site web.

**Propriétés** :

| Nom          | Type                                  | Description                                    | Requis |
| ------------ | ------------------------------------- | ---------------------------------------------- | ------ |
| `targetSpec` | `managedCMS.WebsiteEditionTargetSpec` | Spécification cible pour l'édition du site web | Oui    |

---

### `managedCMS.WebsiteEditionTargetSpec`

**Description** : Spécification cible pour l'édition d'un site web.

**Propriétés** :

| Nom            | Type       | Description                           | Requis |
| -------------- | ---------- | ------------------------------------- | ------ |
| `flushCDNDate` | `datetime` | Date pour déclencher le vidage du CDN | Non    |

---

### `managedCMS.WebsiteCreationBody`

**Description** : Corps de la requête pour créer ou importer un site web.

**Propriétés** :

| Nom          | Type                                   | Description                                      | Requis |
| ------------ | -------------------------------------- | ------------------------------------------------ | ------ |
| `targetSpec` | `managedCMS.WebsiteCreationTargetSpec` | Spécification cible pour la création du site web | Oui    |

---

### `managedCMS.WebsiteCreationTargetSpec`

**Description** : Spécification cible pour la création d'un site web.

**Propriétés** :

| Nom         | Type                                            | Description                        | Requis |
| ----------- | ----------------------------------------------- | ---------------------------------- | ------ |
| `wordpress` | `managedCMS.WebsiteCreationTargetSpecWordPress` | Spécification cible pour WordPress | Non    |

---

### `managedCMS.WebsiteCreationTargetSpecWordPress`

**Description** : Spécification cible pour la création d'un site WordPress.

**Propriétés** :

| Nom        | Type                      | Description                         | Requis |
| ---------- | ------------------------- | ----------------------------------- | ------ |
| `language` | `managedCMS.LanguageEnum` | Langue à configurer sur le site web | Oui    |

---

### `managedCMS.WebsiteImportCheckResult`

**Description** : Modèle représentant les données spécifiques à WordPress pour la vérification de l'import d'un site web.

**Propriétés** :

| Nom       | Type                               | Description                          | Requis | Lecture Seule |
| --------- | ---------------------------------- | ------------------------------------ | ------ | ------------- |
| `plugins` | `managedCMS.WebsiteImportPlugin[]` | Plugins installés sur le site source | Non    | Oui           |
| `themes`  | `managedCMS.WebsiteImportTheme[]`  | Thèmes installés sur le site source  | Non    | Oui           |

---

### `managedCMS.WebsiteImportPlugin`

**Description** : Information sur un plugin WordPress.

**Propriétés** :

| Nom       | Type      | Description          | Requis | Lecture Seule |
| --------- | --------- | -------------------- | ------ | ------------- |
| `name`    | `string`  | Nom du plugin        | Non    | Oui           |
| `version` | `string`  | Version du plugin    | Non    | Oui           |
| `enabled` | `boolean` | Plugin activé ou non | Non    | Oui           |

---

### `managedCMS.WebsiteImportTheme`

**Description** : Information sur un thème WordPress.

**Propriétés** :

| Nom       | Type      | Description        | Requis | Lecture Seule |
| --------- | --------- | ------------------ | ------ | ------------- |
| `name`    | `string`  | Nom du thème       | Non    | Oui           |
| `version` | `string`  | Version du thème   | Non    | Oui           |
| `active`  | `boolean` | Thème actif ou non | Non    | Oui           |

---

### `managedCMS.WebsiteImportSelection`

**Description** : Sélection des éléments à importer depuis un site WordPress source.

**Propriétés** :

| Nom             | Type                               | Description                          | Requis | Lecture Seule |
| --------------- | ---------------------------------- | ------------------------------------ | ------ | ------------- |
| `wholeDatabase` | `boolean`                          | Importer la base de données complète | Non    | Oui           |
| `users`         | `boolean`                          | Importer les utilisateurs            | Non    | Oui           |
| `posts`         | `boolean`                          | Importer les articles                | Non    | Oui           |
| `pages`         | `boolean`                          | Importer les pages                   | Non    | Oui           |
| `media`         | `boolean`                          | Importer les médias                  | Non    | Oui           |
| `comments`      | `boolean`                          | Importer les commentaires            | Non    | Oui           |
| `themes`        | `managedCMS.WebsiteImportTheme[]`  | Thèmes à importer                    | Non    | Oui           |
| `plugins`       | `managedCMS.WebsiteImportPlugin[]` | Plugins à importer                   | Non    | Oui           |
| `tags`          | `boolean`                          | Importer les tags et catégories      | Non    | Oui           |

---

### `common.CurrentTask`

**Description** : Tâche asynchrone en cours d'exécution.

**Propriétés** :

| Nom          | Type                           | Description                           | Requis | Lecture Seule |
| ------------ | ------------------------------ | ------------------------------------- | ------ | ------------- |
| `id`         | `uuid`                         | Identifiant de la tâche               | Non    | Oui           |
| `type`       | `string`                       | Type de la tâche                      | Non    | Oui           |
| `status`     | `common.CurrentTaskStatusEnum` | Statut global de la tâche             | Non    | Oui           |
| `link`       | `string`                       | Lien vers les détails de la tâche     | Non    | Oui           |
| `message`    | `string`                       | Description de la tâche               | Non    | Oui           |
| `startedAt`  | `datetime`                     | Date de début de la tâche             | Non    | Oui           |
| `finishedAt` | `datetime`                     | Date de fin de la tâche               | Non    | Oui           |
| `errors`     | `common.TaskError[]`           | Erreurs survenues pendant l'exécution | Non    | Oui           |
| `progress`   | `common.TaskProgress[]`        | Étapes de progression de la tâche     | Non    | Oui           |

**Valeurs de `common.CurrentTaskStatusEnum`** :

- `ERROR`
- `PENDING`
- `RUNNING`
- `SCHEDULED`
- `WAITING_USER_INPUT`

---

### `common.TaskError`

**Description** : Erreurs survenues pendant l'exécution d'une tâche.

**Propriétés** :

| Nom       | Type     | Description             | Requis | Lecture Seule |
| --------- | -------- | ----------------------- | ------ | ------------- |
| `message` | `string` | Description de l'erreur | Non    | Oui           |

---

### `common.TaskProgress`

**Description** : Étapes de progression d'une tâche asynchrone.

**Propriétés** :

| Nom      | Type                    | Description                   | Requis | Lecture Seule |
| -------- | ----------------------- | ----------------------------- | ------ | ------------- |
| `name`   | `string`                | Nom de l'étape de progression | Non    | Oui           |
| `status` | `common.TaskStatusEnum` | Statut actuel de l'étape      | Non    | Oui           |

**Valeurs de `common.TaskStatusEnum`** :

- `DONE`
- `ERROR`
- `PENDING`
- `RUNNING`
- `SCHEDULED`
- `WAITING_USER_INPUT`

---

### `common.TaskWithInputs<T>`

**Description** : Tâche asynchrone nécessitant des entrées utilisateur pour être débloquée.

**Propriétés** :

| Nom      | Type | Description                                             | Requis |
| -------- | ---- | ------------------------------------------------------- | ------ |
| `inputs` | `T`  | Entrées utilisateur nécessaires pour débloquer la tâche | Oui    |

---

### `iam.ResourceMetadata`

**Description** : Métadonnées IAM intégrées dans les modèles de service.

**Propriétés** :

| Nom     | Type                             | Description                                            | Requis | Lecture Seule |
| ------- | -------------------------------- | ------------------------------------------------------ | ------ | ------------- |
| `id`    | `uuid`                           | Identifiant unique de la ressource                     | Non    | Oui           |
| `urn`   | `string`                         | Nom unique de la ressource utilisé dans les politiques | Non    | Oui           |
| `state` | `iam.ResourceMetadata.StateEnum` | État de la ressource                                   | Non    | Oui           |
| `tags`  | `map[string]string`              | Tags de la ressource                                   | Non    | Oui           |

**Valeurs de `iam.ResourceMetadata.StateEnum`** :

- `EXPIRED`
- `IN_CREATION`
- `OK`
- `SUSPENDED`

---

## Erreurs Générales

Les erreurs suivantes peuvent survenir sur plusieurs endpoints :

- `Client::BadRequest::WrongServiceStatus` : Le service n'est pas dans un état compatible avec l'opération demandée.
- `Client::Conflict::CurrentTaskAlreadyExists` : Une tâche asynchrone est déjà en cours pour cette ressource.
- `Client::NotFound::WebsiteNotFound` : Le site web spécifié n'existe pas ou n'est pas accessible.
- `Client::BadRequest::IncompatibleArguments` : Les arguments fournis ne sont pas compatibles avec l'opération demandée.

---

## Authentification

L'API v2 Managed CMS utilise l'authentification via les clés d'application OVHcloud :

- **`applicationKey`** : Clé d'application fournie par OVHcloud.
- **`applicationSecret`** : Secret d'application fourni par OVHcloud.
- **`consumerKey`** : Clé de consommateur générée via l'API OVHcloud.

Les clés d'authentification doivent être fournies dans les en-têtes de la requête :

```
X-Ovh-Application: <applicationKey>
X-Ovh-Timestamp: <timestamp>
X-Ovh-Signature: <signature>
X-Ovh-Consumer: <consumerKey>
```

---

## Pagination

Les endpoints supportant la pagination utilisent les en-têtes suivants :

- **`X-Pagination-Cursor`** : Curseur pour la pagination (optionnel).
- **`X-Pagination-Size`** : Taille de la page (optionnel, par défaut : `10`).

---

## Actions IAM

Certaines opérations nécessitent des actions IAM spécifiques pour être autorisées. Ces actions sont vérifiées via les tags IAM.

**Exemple** :

```
{
  "iamTags": {
    "managedCMS:apiovh:task/get": [
      {
        "operator": "EQ",
        "value": "true"
      }
    ]
  }
}
```

---

## Notes Importantes

- **Statut Alpha** : Les opérations sont en version Alpha, ce qui signifie qu'elles peuvent être modifiées ou supprimées sans préavis.
- **Quotas** : Les quotas de disque peuvent être étendus via des add-ons spécifiques.
- **Tâches Asynchrones** : Les tâches comme le vidage du CDN ou la réinitialisation du mot de passe de la base de données sont asynchrones et peuvent prendre du temps.
- **État des Ressources** : Les ressources peuvent être dans différents états (`CREATING`, `DELETING`, `ERROR`, etc.), ce qui influence les opérations possibles.

---

## Exemples d'Utilisation

### Exemple 1 : Lister les CMS Disponibles

```bash
curl -X GET "https://eu.api.ovh.com/v2/managedCMS/reference/availableCMS" \
     -H "X-Ovh-Application: $APPLICATION_KEY" \
     -H "X-Ovh-Timestamp: $(date +%s)" \
     -H "X-Ovh-Signature: $SIGNATURE" \
     -H "X-Ovh-Consumer: $CONSUMER_KEY"
```

---

### Exemple 2 : Flush CDN d'un Service

```bash
curl -X POST "https://eu.api.ovh.com/v2/managedCMS/resource/$SERVICE_ID/flushCDN" \
     -H "X-Ovh-Application: $APPLICATION_KEY" \
     -H "X-Ovh-Timestamp: $(date +%s)" \
     -H "X-Ovh-Signature: $SIGNATURE" \
     -H "X-Ovh-Consumer: $CONSUMER_KEY"
```

---

### Exemple 3 : Réinitialiser le Mot de Passe de la Base de Données d'un Site Web

```bash
curl -X POST "https://eu.api.ovh.com/v2/managedCMS/resource/$SERVICE_ID/website/$WEBSITE_ID/resetDatabasePassword" \
     -H "X-Ovh-Application: $APPLICATION_KEY" \
     -H "X-Ovh-Timestamp: $(date +%s)" \
     -H "X-Ovh-Signature: $SIGNATURE" \
     -H "X-Ovh-Consumer: $CONSUMER_KEY"
```

---

## Documentation Complémentaire

- [Documentation Officielle OVHcloud Managed CMS](https://docs.ovh.com/fr/public-cloud/webcloud-platform/managed-cms/)
- [Guide des Bonnes Pratiques IAM](https://docs.ovh.com/fr/iam/)
- [Documentation des Erreurs API OVHcloud](https://api.ovh.com/)

---

## Historique des Modifications

- **2026-04-01** : Documentation initiale pour l'API v2 Managed CMS.

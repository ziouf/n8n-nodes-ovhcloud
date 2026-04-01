# OVHcloud Public Cloud API Documentation

## Aperçu

Cette documentation décrit l'API OVHcloud Public Cloud qui permet de gérer les projets cloud, les services AI, les bases de données, les registries de conteneurs et d'autres ressources cloud.

**Version de l'API:** 1.0  
**Version de la documentation:** v1

---

## Table des matières

- [Généralités](#généralités)
- [Gestion des projets](#gestion-des-projets)
- [Services AI](#services-ai)
- [Alertes de facturation](#alertes-de-facturation)
- [Facturation](#facturation)
- [Bases de données](#bases-de-données)
- [Registries de conteneurs](#registries-de-conteneurs)
- [Crédits](#crédits)
- [API Status](#api-status)

---

## Généralités

### Points d'extrémité globaux

| Méthode | Endpoint                                          | Description                                      |
| ------- | ------------------------------------------------- | ------------------------------------------------ |
| `GET`   | `/cloud/project`                                  | Liste les projets cloud publics disponibles      |
| `GET`   | `/cloud/project/{serviceName}`                    | Récupère les propriétés d'un projet cloud public |
| `PUT`   | `/cloud/project/{serviceName}`                    | Modifie les propriétés d'un objet                |
| `POST`  | `/cloud/project/{serviceName}/cancel`             | Annule la création d'un projet                   |
| `POST`  | `/cloud/project/{serviceName}/confirmTermination` | Confirme la terminaison d'un service             |
| `POST`  | `/cloud/project/{serviceName}/changeContact`      | Modifie les contacts du service                  |

---

## Gestion des projets

### Liste des projets

- **Endpoint:** `GET /cloud/project`
- **Description:** Liste les projets cloud publics disponibles
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:get`

**Paramètres de requête:**

| Paramètre | Type | Requis | Description                              |
| --------- | ---- | ------ | ---------------------------------------- |
| `iamTags` | map  | Non    | Filtre les ressources selon les tags IAM |

**Réponse:** `string[]`

---

### Détails d'un projet

- **Endpoint:** `GET /cloud/project/{serviceName}`
- **Description:** Récupère les propriétés d'un projet cloud public
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description                 |
| ------------- | ------ | ------ | --------------------------- |
| `serviceName` | string | Oui    | Nom du service (project id) |

**Réponse:** `cloud.ProjectWithIAM`

---

### Modifier un projet

- **Endpoint:** `PUT /cloud/project/{serviceName}`
- **Description:** Modifie les propriétés d'un objet
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:edit`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description                 |
| ------------- | ------ | ------ | --------------------------- |
| `serviceName` | string | Oui    | Nom du service (project id) |

**Corps de la requête:**

| Paramètre       | Type | Requis | Description                   |
| --------------- | ---- | ------ | ----------------------------- |
| `cloud.Project` | body | Oui    | Objet Project à mettre à jour |

**Réponse:** `void`

---

## Services AI

La section AI Solutions offre une gestion complète des applications, jobs, notebooks, registries et autres services d'intelligence artificielle.

### Gestion des applications AI

#### Liste des applications

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/app`
- **Description:** Liste les applications AI
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/app/get`

**Paramètres de requête:**

| Paramètre       | Type           | Requis | Description                                                   |
| --------------- | -------------- | ------ | ------------------------------------------------------------- |
| `serviceName`   | string         | Oui    | Nom du service                                                |
| `labelSelector` | string         | Non    | Filtre par label d'application (ex: 'app_name=kind_of_magic') |
| `order`         | OrderEnum      | Non    | Trie l'ensemble des résultats                                 |
| `page`          | long           | Non    | Page de l'ensemble des résultats                              |
| `size`          | long           | Non    | Taille de l'ensemble des résultats                            |
| `sort`          | string         | Non    | Trie par ce champ                                             |
| `statusState`   | AppStateEnum[] | Non    | Filtre par état                                               |
| `updatedAfter`  | datetime       | Non    | Filtre updatedAt (>)                                          |
| `updatedBefore` | datetime       | Non    | Filtre updatedAt (<)                                          |
| `userName`      | string         | Non    | Utilisateur qui a soumis le job                               |

**Réponse:** `cloud.project.ai.app.App[]`

#### Créer une application

- **Endpoint:** `POST /cloud/project/{serviceName}/ai/app`
- **Description:** Crée une nouvelle application AI
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/app/create`

**Corps de la requête:**

| Paramètre                           | Type | Requis | Description                    |
| ----------------------------------- | ---- | ------ | ------------------------------ |
| `cloud.project.ai.app.AppSpecInput` | body | Oui    | Spécification de l'application |

**Réponse:** `cloud.project.ai.app.App`

#### Détails d'une application

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/app/{appId}`
- **Description:** Récupère les informations d'une application
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/app/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description         |
| ------------- | ------ | ------ | ------------------- |
| `serviceName` | string | Oui    | Nom du service      |
| `appId`       | uuid   | Oui    | ID de l'application |

#### Mettre à jour une application

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/app/{appId}`
- **Description:** Met à jour plusieurs parties de la spécification d'une application
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/app/edit`

**Corps de la requête:**

| Paramètre                          | Type | Requis | Description            |
| ---------------------------------- | ---- | ------ | ---------------------- |
| `cloud.project.ai.app.UpdateInput` | body | Oui    | Données de mise à jour |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description         |
| ------------- | ------ | ------ | ------------------- |
| `serviceName` | string | Oui    | Nom du service      |
| `appId`       | uuid   | Oui    | ID de l'application |

**Réponse:** `cloud.project.ai.app.App`

#### Supprimer une application

- **Endpoint:** `DELETE /cloud/project/{serviceName}/ai/app/{appId}`
- **Description:** Supprime une application
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/app/delete`

**Paramètres de requête:**

| Paramètre     | Type    | Requis | Description                                                                  |
| ------------- | ------- | ------ | ---------------------------------------------------------------------------- |
| `serviceName` | string  | Oui    | Nom du service                                                               |
| `appId`       | uuid    | Oui    | ID de l'application                                                          |
| `force`       | boolean | Non    | Force la suppression en tuant l'application si elle est en cours d'exécution |

#### Démarrer une application

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/app/{appId}/start`
- **Description:** Démarre une application AI Solutions existante
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/app/start`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description         |
| ------------- | ------ | ------ | ------------------- |
| `serviceName` | string | Oui    | Nom du service      |
| `appId`       | uuid   | Oui    | ID de l'application |

#### Arrêter une application

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/app/{appId}/stop`
- **Description:** Arrête une application AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/app/stop`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description         |
| ------------- | ------ | ------ | ------------------- |
| `serviceName` | string | Oui    | Nom du service      |
| `appId`       | uuid   | Oui    | ID de l'application |

#### Supprimer une application (force)

- **Endpoint:** `DELETE /cloud/project/{serviceName}/ai/app/{appId}`
- **Description:** Supprime une application avec force
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/app/delete`

**Paramètres de requête:**

| Paramètre     | Type    | Requis | Description                                                                |
| ------------- | ------- | ------ | -------------------------------------------------------------------------- |
| `serviceName` | string  | Oui    | Nom du service                                                             |
| `appId`       | uuid    | Oui    | ID de l'application                                                        |
| `force`       | boolean | Non    | Force la suppression par suppression de l'application en cours d'exécution |

#### Logs d'une application

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/app/{appId}/log`
- **Description:** Récupère les logs d'une application
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/app/log/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description                               |
| ------------- | ------ | ------ | ----------------------------------------- |
| `serviceName` | string | Oui    | Nom du service                            |
| `appId`       | uuid   | Oui    | ID de l'application                       |
| `page`        | long   | Non    | Page de l'ensemble des résultats          |
| `size`        | long   | Non    | Taille de l'ensemble des résultats        |
| `replica`     | string | Non    | Affiche uniquement les logs de ce replica |

**Réponse:** `cloud.project.ai.Logs`

#### Labels d'une application

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/app/{appId}/label`
- **Description:** Met à jour/ajoute un label d'application AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/app/label/edit`

**Corps de la requête:**

| Paramètre                | Type | Requis | Description           |
| ------------------------ | ---- | ------ | --------------------- |
| `cloud.project.ai.Label` | body | Oui    | Label à mettre à jour |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description         |
| ------------- | ------ | ------ | ------------------- |
| `serviceName` | string | Oui    | Nom du service      |
| `appId`       | uuid   | Oui    | ID de l'application |

#### Échelonner une application

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/app/{appId}/scalingstrategy`
- **Description:** Échelonne une application
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/app/scalingstrategy/edit`

**Corps de la requête:**

| Paramètre                                   | Type | Requis | Description              |
| ------------------------------------------- | ---- | ------ | ------------------------ |
| `cloud.project.ai.app.ScalingStrategyInput` | body | Oui    | Stratégie d'échelonement |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description         |
| ------------- | ------ | ------ | ------------------- |
| `serviceName` | string | Oui    | Nom du service      |
| `appId`       | uuid   | Oui    | ID de l'application |

#### Image Docker d'une application

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/app/{appId}/image`
- **Description:** Définit l'image Docker d'une application AI
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/app/image/edit`

**Corps de la requête:**

| Paramètre                            | Type | Requis | Description           |
| ------------------------------------ | ---- | ------ | --------------------- |
| `cloud.project.ai.app.AppImageInput` | body | Oui    | Entrée d'image Docker |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description         |
| ------------- | ------ | ------ | ------------------- |
| `serviceName` | string | Oui    | Nom du service      |
| `appId`       | uuid   | Oui    | ID de l'application |

**Réponse:** `cloud.project.ai.GenericResponse`

#### Commande CLI d'une application

- **Endpoint:** `POST /cloud/project/{serviceName}/ai/app/command`
- **Description:** Génère une commande CLI correspondant à une spécification d'application
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/app/command/get`

**Corps de la requête:**

| Paramètre                           | Type | Requis | Description                    |
| ----------------------------------- | ---- | ------ | ------------------------------ |
| `cloud.project.ai.app.AppSpecInput` | body | Oui    | Spécification de l'application |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.project.ai.Command`

#### Synchronisation de données

- **Endpoint:** `POST /cloud/project/{serviceName}/ai/app/{appId}/datasync`
- **Description:** Démarre une synchronisation de données manuelle sur une application
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/datasync/create`

**Corps de la requête:**

| Paramètre                              | Type | Requis | Description                      |
| -------------------------------------- | ---- | ------ | -------------------------------- |
| `cloud.project.ai.volume.DataSyncSpec` | body | Oui    | Spécification de synchronisation |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description         |
| ------------- | ------ | ------ | ------------------- |
| `serviceName` | string | Oui    | Nom du service      |
| `appId`       | uuid   | Oui    | ID de l'application |

**Réponse:** `cloud.project.ai.volume.DataSync`

#### Autorisation AI

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/authorization`
- **Description:** Récupère l'état d'autorisation
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/authorization/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.project.ai.AuthorizationStatus`

#### Créer une autorisation

- **Endpoint:** `POST /cloud/project/{serviceName}/ai/authorization`
- **Description:** Autorise le service AI Solutions en permettant l'accès aux conteneurs d'objet de stockage
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/authorization/create`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

#### Capacités AI

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/feature`
- **Description:** Liste les fonctionnalités AI Solutions disponibles
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/feature/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.project.ai.capabilities.Features`

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/quota`
- **Description:** Liste les quotas AI Solutions disponibles
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/quota/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.project.ai.capabilities.ProjectQuotas`

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/region`
- **Description:** Liste les régions AI Solutions disponibles
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.project.ai.capabilities.Region[]`

#### Détails d'une région

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/region/{region}`
- **Description:** Récupère les informations d'une région
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |

**Réponse:** `cloud.project.ai.capabilities.Region`

#### Images d'applications

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/app/image`
- **Description:** Liste les images d'applications AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/app/image/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |

**Réponse:** `cloud.project.ai.capabilities.app.Image[]`

#### Regions de données

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/data/region`
- **Description:** Liste les régions de données AI Solutions disponibles
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/data/region/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |

**Réponse:** `string[]`

#### Flavors

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/flavor`
- **Description:** Liste les flavors AI Solutions disponibles
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/flavor/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |

**Réponse:** `cloud.project.ai.capabilities.Flavor[]`

#### Détails d'un flavor

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/flavor/{flavorId}`
- **Description:** Récupère les informations d'un flavor
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/flavor/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |
| `flavorId`    | string | Oui    | Flavor ID      |

**Réponse:** `cloud.project.ai.capabilities.Flavor`

#### Images de jobs

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/job/image`
- **Description:** Liste les images de jobs AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/job/image/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |

**Réponse:** `cloud.project.ai.capabilities.job.Image[]`

#### Éditeurs de notebook

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/editor`
- **Description:** Liste les éditeurs de notebook AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/notebook/editor/get`

**Paramètres de requête:**

| Paramètre                 | Type   | Requis | Description                                                 |
| ------------------------- | ------ | ------ | ----------------------------------------------------------- |
| `serviceName`             | string | Oui    | Nom du service                                              |
| `region`                  | string | Oui    | Région                                                      |
| `compatibleWithFramework` | string | Non    | Liste uniquement les éditeurs compatibles avec ce framework |

**Réponse:** `cloud.project.ai.capabilities.notebook.Editor[]`

#### Détails d'un éditeur

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/editor/{editorId}`
- **Description:** Récupère un éditeur de notebook AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/notebook/editor/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |
| `editorId`    | string | Oui    | Editor ID      |

**Réponse:** `cloud.project.ai.capabilities.notebook.Editor`

#### Frameworks de notebook

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/framework`
- **Description:** Liste les frameworks de notebook AI Solutions disponibles
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/notebook/framework/get`

**Paramètres de requête:**

| Paramètre              | Type   | Requis | Description                                                  |
| ---------------------- | ------ | ------ | ------------------------------------------------------------ |
| `serviceName`          | string | Oui    | Nom du service                                               |
| `region`               | string | Oui    | Région                                                       |
| `type`                 | string | Non    | Liste uniquement les frameworks de ce type                   |
| `compatibleWithEditor` | string | Non    | Liste uniquement les frameworks compatibles avec cet éditeur |

**Réponse:** `cloud.project.ai.capabilities.notebook.Framework[]`

#### Détails d'un framework

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/framework/{frameworkId}`
- **Description:** Récupère un framework de notebook AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/notebook/framework/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |
| `frameworkId` | string | Oui    | Framework ID   |

**Réponse:** `cloud.project.ai.capabilities.notebook.Framework`

#### Politique de rétention de sauvegarde

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/workspacebackupretentionpolicy`
- **Description:** Récupère la politique de rétention de sauvegarde de workspace appliquée
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/notebook/workspaceBackupRetentionPolicy/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |

**Réponse:** `cloud.project.ai.notebook.NotebookWorkspaceBackupRetentionPolicy`

#### Mettre à jour la politique de rétention

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/workspacebackupretentionpolicy`
- **Description:** Remplace la politique de rétention de sauvegarde de workspace
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/notebook/workspaceBackupRetentionPolicy/edit`

**Corps de la requête:**

| Paramètre                                                               | Type | Requis | Description                      |
| ----------------------------------------------------------------------- | ---- | ------ | -------------------------------- |
| `cloud.project.ai.notebook.NotebookWorkspaceBackupRetentionPolicyInput` | body | Oui    | Entrée de politique de rétention |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |

**Réponse:** `cloud.project.ai.notebook.NotebookWorkspaceBackupRetentionPolicy`

#### Presets

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/preset`
- **Description:** Liste les presets AI Solutions disponibles
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/preset/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description                    |
| ------------- | ------ | ------ | ------------------------------ |
| `serviceName` | string | Oui    | Nom du service                 |
| `region`      | string | Oui    | Région                         |
| `type`        | string | Non    | Filtre par type d'image preset |

**Réponse:** `cloud.project.ai.capabilities.Preset[]`

#### Détails d'un preset

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/preset/{presetId}`
- **Description:** Récupère les informations d'un preset
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/preset/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |
| `presetId`    | string | Oui    | Preset ID      |

**Réponse:** `cloud.project.ai.capabilities.Preset`

---

### Gestion des jobs AI

#### Liste des jobs

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/job`
- **Description:** Liste les jobs AI
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/job/get`

**Paramètres de requête:**

| Paramètre       | Type           | Requis | Description                                              |
| --------------- | -------------- | ------ | -------------------------------------------------------- |
| `serviceName`   | string         | Oui    | Nom du service                                           |
| `labelSelector` | string         | Non    | Filtre par label de job (ex: 'job_name=potions_cooking') |
| `order`         | OrderEnum      | Non    | Trie l'ensemble des résultats                            |
| `page`          | long           | Non    | Page de l'ensemble des résultats                         |
| `size`          | long           | Non    | Taille de l'ensemble des résultats                       |
| `sort`          | string         | Non    | Trie par ce champ                                        |
| `statusState`   | JobStateEnum[] | Non    | Filtre par état                                          |
| `updatedAfter`  | datetime       | Non    | Filtre updatedAt (>)                                     |
| `updatedBefore` | datetime       | Non    | Filtre updatedAt (<)                                     |
| `userName`      | string         | Non    | Utilisateur qui a soumis le job                          |

**Réponse:** `cloud.project.ai.job.Job[]`

#### Créer un job

- **Endpoint:** `POST /cloud/project/{serviceName}/ai/job`
- **Description:** Crée un nouveau job AI
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/job/create`

**Corps de la requête:**

| Paramètre                           | Type | Requis | Description          |
| ----------------------------------- | ---- | ------ | -------------------- |
| `cloud.project.ai.job.JobSpecInput` | body | Oui    | Spécification du job |

**Réponse:** `cloud.project.ai.job.Job`

#### Détails d'un job

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/job/{jobId}`
- **Description:** Récupère les informations d'un job
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/job/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `jobId`       | uuid   | Oui    | ID du job      |

#### Supprimer un job

- **Endpoint:** `DELETE /cloud/project/{serviceName}/ai/job/{jobId}`
- **Description:** Supprime définitivement un job
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/job/delete`

**Paramètres de requête:**

| Paramètre     | Type    | Requis | Description                                                        |
| ------------- | ------- | ------ | ------------------------------------------------------------------ |
| `serviceName` | string  | Oui    | Nom du service                                                     |
| `jobId`       | uuid    | Oui    | ID du job                                                          |
| `force`       | boolean | Non    | Force la suppression en tuant le job s'il est en cours d'exécution |

#### Logs d'un job

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/job/{jobId}/log`
- **Description:** Récupère les logs d'un job
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/job/log/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description                        |
| ------------- | ------ | ------ | ---------------------------------- |
| `serviceName` | string | Oui    | Nom du service                     |
| `jobId`       | uuid   | Oui    | ID du job                          |
| `page`        | long   | Non    | Page de l'ensemble des résultats   |
| `size`        | long   | Non    | Taille de l'ensemble des résultats |

**Réponse:** `cloud.project.ai.Logs`

#### Labels d'un job

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/job/{jobId}/label`
- **Description:** Met à jour/ajoute un label de job AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/job/label/edit`

**Corps de la requête:**

| Paramètre                | Type | Requis | Description           |
| ------------------------ | ---- | ------ | --------------------- |
| `cloud.project.ai.Label` | body | Oui    | Label à mettre à jour |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `jobId`       | uuid   | Oui    | ID du job      |

#### Arrêter un job

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/job/{jobId}/kill`
- **Description:** Tue un job AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/job/kill`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `jobId`       | uuid   | Oui    | ID du job      |

#### Synchronisation de données d'un job

- **Endpoint:** `POST /cloud/project/{serviceName}/ai/job/{jobId}/datasync`
- **Description:** Démarre une synchronisation de données manuelle sur un job AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/job/datasync/create`

**Corps de la requête:**

| Paramètre                              | Type | Requis | Description                      |
| -------------------------------------- | ---- | ------ | -------------------------------- |
| `cloud.project.ai.volume.DataSyncSpec` | body | Oui    | Spécification de synchronisation |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `jobId`       | uuid   | Oui    | ID du job      |

**Réponse:** `cloud.project.ai.volume.DataSync`

#### Commande CLI d'un job

- **Endpoint:** `POST /cloud/project/{serviceName}/ai/job/command`
- **Description:** Génère une commande CLI correspondant à une spécification de job
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/job/command/get`

**Corps de la requête:**

| Paramètre                           | Type | Requis | Description          |
| ----------------------------------- | ---- | ------ | -------------------- |
| `cloud.project.ai.job.JobSpecInput` | body | Oui    | Spécification du job |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.project.ai.Command`

---

### Gestion des notebooks AI

#### Liste des notebooks

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/notebook`
- **Description:** Liste les notebooks AI
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/get`

**Paramètres de requête:**

| Paramètre       | Type                | Requis | Description                                                   |
| --------------- | ------------------- | ------ | ------------------------------------------------------------- |
| `serviceName`   | string              | Oui    | Nom du service                                                |
| `labelSelector` | string              | Non    | Filtre par label de notebook (ex: 'notebook_name=spell_book') |
| `order`         | OrderEnum           | Non    | Trie l'ensemble des résultats                                 |
| `page`          | long                | Non    | Page de l'ensemble des résultats                              |
| `size`          | long                | Non    | Taille de l'ensemble des résultats                            |
| `sort`          | string              | Non    | Trie par ce champ                                             |
| `statusState`   | NotebookStateEnum[] | Non    | Filtre par état                                               |
| `updatedAfter`  | datetime            | Non    | Filtre updatedAt (>)                                          |
| `updatedBefore` | datetime            | Non    | Filtre updatedAt (<)                                          |
| `userName`      | string              | Non    | Utilisateur qui a soumis le job                               |
| `withSpark`     | boolean             | Non    | Inclure ou non les notebooks spark dans les résultats         |

**Réponse:** `cloud.project.ai.notebook.Notebook[]`

#### Créer un notebook

- **Endpoint:** `POST /cloud/project/{serviceName}/ai/notebook`
- **Description:** Crée un nouveau notebook AI
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/create`

**Corps de la requête:**

| Paramètre                                     | Type | Requis | Description               |
| --------------------------------------------- | ---- | ------ | ------------------------- |
| `cloud.project.ai.notebook.NotebookSpecInput` | body | Oui    | Spécification du notebook |

**Réponse:** `cloud.project.ai.notebook.Notebook`

#### Détails d'un notebook

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/notebook/{notebookId}`
- **Description:** Récupère les informations d'un notebook
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `notebookId`  | string | Oui    | ID du notebook |

#### Supprimer un notebook

- **Endpoint:** `DELETE /cloud/project/{serviceName}/ai/notebook/{notebookId}`
- **Description:** Supprime un notebook
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/delete`

**Paramètres de requête:**

| Paramètre     | Type    | Requis | Description                                                             |
| ------------- | ------- | ------ | ----------------------------------------------------------------------- |
| `serviceName` | string  | Oui    | Nom du service                                                          |
| `notebookId`  | string  | Oui    | ID du notebook                                                          |
| `force`       | boolean | Non    | Force la suppression en tuant le notebook s'il est en cours d'exécution |

#### Mettre à jour un notebook

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}`
- **Description:** Met à jour un notebook existant. Seuls les labels peuvent être mis à jour pendant l'exécution.
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/edit`

**Corps de la requête:**

| Paramètre                                  | Type | Requis | Description            |
| ------------------------------------------ | ---- | ------ | ---------------------- |
| `cloud.project.ai.notebook.NotebookUpdate` | body | Oui    | Données de mise à jour |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `notebookId`  | string | Oui    | ID du notebook |

#### Logs d'un notebook

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/notebook/{notebookId}/log`
- **Description:** Récupère les logs d'un notebook
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/log/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `notebookId`  | string | Oui    | ID du notebook |

**Réponse:** `cloud.project.ai.Logs`

#### Démarrer un notebook

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}/start`
- **Description:** Démarre un notebook AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/start`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `notebookId`  | string | Oui    | ID du notebook |

#### Arrêter un notebook

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}/stop`
- **Description:** Arrête un notebook AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/stop`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `notebookId`  | string | Oui    | ID du notebook |

#### Recharger un notebook

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}/restart`
- **Description:** Recharge un notebook AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/restart`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `notebookId`  | string | Oui    | ID du notebook |

#### Labels d'un notebook

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}/label`
- **Description:** Met à jour/ajoute un label de notebook AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/label/edit`

**Corps de la requête:**

| Paramètre                | Type | Requis | Description           |
| ------------------------ | ---- | ------ | --------------------- |
| `cloud.project.ai.Label` | body | Oui    | Label à mettre à jour |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `notebookId`  | string | Oui    | ID du notebook |

#### Sauvegardes d'un notebook

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/notebook/{notebookId}/backup`
- **Description:** Liste toutes les sauvegardes d'un notebook AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/backup/get`

**Paramètres de requête:**

| Paramètre       | Type      | Requis | Description                        |
| --------------- | --------- | ------ | ---------------------------------- |
| `serviceName`   | string    | Oui    | Nom du service                     |
| `notebookId`    | string    | Oui    | ID du notebook                     |
| `order`         | OrderEnum | Non    | Trie l'ensemble des résultats      |
| `page`          | long      | Non    | Page de l'ensemble des résultats   |
| `size`          | long      | Non    | Taille de l'ensemble des résultats |
| `sort`          | string    | Non    | Trie par ce champ                  |
| `updatedAfter`  | datetime  | Non    | Filtre updatedAt (>)               |
| `updatedBefore` | datetime  | Non    | Filtre updatedAt (<)               |

**Réponse:** `cloud.project.ai.notebook.Backup[]`

#### Détails d'une sauvegarde

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/notebook/{notebookId}/backup/{backupId}`
- **Description:** Récupère les détails d'une sauvegarde de notebook AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/backup/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description         |
| ------------- | ------ | ------ | ------------------- |
| `serviceName` | string | Oui    | Nom du service      |
| `notebookId`  | string | Oui    | ID du notebook      |
| `backupId`    | string | Oui    | ID de la sauvegarde |

**Réponse:** `cloud.project.ai.notebook.Backup`

#### Forker une sauvegarde

- **Endpoint:** `POST /cloud/project/{serviceName}/ai/notebook/{notebookId}/backup/{backupId}/fork`
- **Description:** Démarre un nouveau notebook AI Solutions à partir d'une sauvegarde
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/backup/fork`

**Corps de la requête:**

| Paramètre                                    | Type | Requis | Description          |
| -------------------------------------------- | ---- | ------ | -------------------- |
| `cloud.project.ai.notebook.NotebookForkInfo` | body | Oui    | Informations de fork |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description         |
| ------------- | ------ | ------ | ------------------- |
| `serviceName` | string | Oui    | Nom du service      |
| `notebookId`  | string | Oui    | ID du notebook      |
| `backupId`    | string | Oui    | ID de la sauvegarde |

**Réponse:** `cloud.project.ai.notebook.Notebook`

#### Politique de rétention de sauvegarde

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/notebook/{notebookId}/workspacebackupretentionpolicy`
- **Description:** Récupère la politique de rétention de sauvegarde de workspace appliquée au notebook
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/workspaceBackupRetentionPolicy/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `notebookId`  | string | Oui    | ID du notebook |

**Réponse:** `cloud.project.ai.notebook.NotebookWorkspaceBackupRetentionPolicy`

#### Mettre à jour la politique de rétention

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}/workspacebackupretentionpolicy`
- **Description:** Remplace la politique de rétention de sauvegarde de workspace pour un notebook spécifique
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/workspaceBackupRetentionPolicy/edit`

**Corps de la requête:**

| Paramètre                                                               | Type | Requis | Description                      |
| ----------------------------------------------------------------------- | ---- | ------ | -------------------------------- |
| `cloud.project.ai.notebook.NotebookWorkspaceBackupRetentionPolicyInput` | body | Oui    | Entrée de politique de rétention |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `notebookId`  | string | Oui    | ID du notebook |

**Réponse:** `cloud.project.ai.notebook.NotebookWorkspaceBackupRetentionPolicy`

#### Éditeurs de notebook

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/notebook/capabilities/editor`
- **Description:** Liste les éditeurs de code disponibles pour les notebooks AI Solutions
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/capabilities/editor/get`

**Paramètres de requête:**

| Paramètre                 | Type   | Requis | Description                                                 |
| ------------------------- | ------ | ------ | ----------------------------------------------------------- |
| `serviceName`             | string | Oui    | Nom du service                                              |
| `compatibleWithFramework` | string | Non    | Liste uniquement les éditeurs compatibles avec ce framework |

**Réponse:** `cloud.project.ai.notebook.Editor[]`

#### Frameworks de notebook

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/notebook/capabilities/framework`
- **Description:** Liste les frameworks de notebook AI Solutions disponibles
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/capabilities/framework/get`

**Paramètres de requête:**

| Paramètre              | Type   | Requis | Description                                                  |
| ---------------------- | ------ | ------ | ------------------------------------------------------------ |
| `serviceName`          | string | Oui    | Nom du service                                               |
| `type`                 | string | Non    | Liste uniquement les frameworks de ce type                   |
| `compatibleWithEditor` | string | Non    | Liste uniquement les frameworks compatibles avec cet éditeur |

**Réponse:** `cloud.project.ai.notebook.Framework[]`

#### Commande CLI d'un notebook

- **Endpoint:** `POST /cloud/project/{serviceName}/ai/notebook/command`
- **Description:** Génère une commande CLI correspondant à une spécification de notebook
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/notebook/command/get`

**Corps de la requête:**

| Paramètre                                     | Type | Requis | Description               |
| --------------------------------------------- | ---- | ------ | ------------------------- |
| `cloud.project.ai.notebook.NotebookSpecInput` | body | Oui    | Spécification du notebook |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.project.ai.Command`

---

### Gestion des registries Docker

#### Liste des registries

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/registry`
- **Description:** Liste les registries Docker
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/registry/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.project.ai.registry.Registry[]`

#### Créer une registry

- **Endpoint:** `POST /cloud/project/{serviceName}/ai/registry`
- **Description:** Crée une registry Docker
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/registry/create`

**Corps de la requête:**

| Paramètre                            | Type | Requis | Description            |
| ------------------------------------ | ---- | ------ | ---------------------- |
| `cloud.project.ai.registry.Registry` | body | Oui    | Objet Registry à créer |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.project.ai.registry.Registry`

#### Détails d'une registry

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/registry/{registryId}`
- **Description:** Récupère les informations d'une registry Docker
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/registry/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryId`  | string | Oui    | Registry ID    |

**Réponse:** `cloud.project.ai.registry.Registry`

#### Supprimer une registry

- **Endpoint:** `DELETE /cloud/project/{serviceName}/ai/registry/{registryId}`
- **Description:** Supprime une registry Docker
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/registry/delete`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryId`  | string | Oui    | Registry ID    |

#### Mettre à jour une registry

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/registry/{registryId}`
- **Description:** Met à jour une registry Docker
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/registry/edit`

**Corps de la requête:**

| Paramètre                                       | Type | Requis | Description            |
| ----------------------------------------------- | ---- | ------ | ---------------------- |
| `cloud.project.ai.registry.RegistryUpdateInput` | body | Oui    | Données de mise à jour |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryId`  | string | Oui    | Registry ID    |

#### Tokens d'application

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/token`
- **Description:** Liste les tokens d'application
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/token/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.project.ai.token.Token[]`

#### Créer un token

- **Endpoint:** `POST /cloud/project/{serviceName}/ai/token`
- **Description:** Crée un nouveau token d'application
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/token/create`

**Corps de la requête:**

| Paramètre                          | Type | Requis | Description            |
| ---------------------------------- | ---- | ------ | ---------------------- |
| `cloud.project.ai.token.TokenSpec` | body | Oui    | Spécification du token |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.project.ai.token.Token`

#### Détails d'un token

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/token/{id}`
- **Description:** Récupère les informations d'un token d'application
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/token/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `id`          | uuid   | Oui    | ID du token    |

**Réponse:** `cloud.project.ai.token.Token`

#### Supprimer un token

- **Endpoint:** `DELETE /cloud/project/{serviceName}/ai/token/{id}`
- **Description:** Supprime ce token d'application
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/token/delete`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `id`          | uuid   | Oui    | ID du token    |

#### Renouveler un token

- **Endpoint:** `POST /cloud/project/{serviceName}/ai/token/{id}/renew`
- **Description:** Renouvelle un token d'application
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/token/renew`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `id`          | uuid   | Oui    | ID du token    |

**Réponse:** `cloud.project.ai.token.Token`

---

### Gestion des partenaires AI

#### Liste des régions

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/partners/region`
- **Description:** Liste les régions AI Solutions disponibles
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/partners/region/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.project.ai.capabilities.Region[]`

#### Détails d'une région

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/partners/region/{region}`
- **Description:** Récupère les informations d'une région
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/partners/region/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |

**Réponse:** `cloud.project.ai.capabilities.Region`

#### Liste des partenaires

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/partners/region/{region}/partner`
- **Description:** Liste les partenaires et contrats
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/partners/region/partner/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |

**Réponse:** `cloud.project.ai.partner.Partner[]`

#### Détails d'un partenaire

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/partners/region/{region}/partner/{partnerId}`
- **Description:** Récupère un partenaire et contrat
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/partners/region/partner/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |
| `partnerId`   | string | Oui    | Partner ID     |

**Réponse:** `cloud.project.ai.partner.Partner`

---

### Gestion des données AI

#### Liste des régions

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/data/region`
- **Description:** Liste les régions AI Solutions disponibles
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/data/region/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.project.ai.capabilities.Region[]`

#### Détails d'une région

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/data/region/{region}`
- **Description:** Récupère les informations d'une région
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/data/region/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |

**Réponse:** `cloud.project.ai.capabilities.Region`

#### Liste des datastores

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/data/region/{region}/alias`
- **Description:** Liste les datastores
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/data/region/alias/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |

**Réponse:** `cloud.project.ai.DataStore[]`

#### Créer un datastore

- **Endpoint:** `POST /cloud/project/{serviceName}/ai/data/region/{region}/alias`
- **Description:** Crée un nouveau datastore
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/data/region/alias/create`

**Corps de la requête:**

| Paramètre                         | Type | Requis | Description         |
| --------------------------------- | ---- | ------ | ------------------- |
| `cloud.project.ai.DataStoreInput` | body | Oui    | Entrée de datastore |

**Paramètres de requête:**

| Paramètre                      | Type    | Requis | Description                                                     |
| ------------------------------ | ------- | ------ | --------------------------------------------------------------- |
| `serviceName`                  | string  | Oui    | Nom du service                                                  |
| `region`                       | string  | Oui    | Région                                                          |
| `skipDataStoreConnectionCheck` | boolean | Non    | Si set à true, ignore la vérification de connexion du datastore |

**Réponse:** `cloud.project.ai.DataStore`

#### Supprimer un datastore

- **Endpoint:** `DELETE /cloud/project/{serviceName}/ai/data/region/{region}/alias/{alias}`
- **Description:** Supprime définitivement un datastore
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/data/region/alias/delete`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |
| `alias`       | string | Oui    | Alias          |

#### Détails d'un datastore

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/data/region/{region}/alias/{alias}`
- **Description:** Récupère les informations d'un datastore
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/data/region/alias/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |
| `alias`       | string | Oui    | Alias          |

**Réponse:** `cloud.project.ai.DataStore`

#### Mettre à jour un datastore

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/data/region/{region}/alias/{alias}`
- **Description:** Met à jour un datastore
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/data/region/alias/edit`

**Corps de la requête:**

| Paramètre                         | Type | Requis | Description         |
| --------------------------------- | ---- | ------ | ------------------- |
| `cloud.project.ai.DataStoreInput` | body | Oui    | Entrée de datastore |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |
| `alias`       | string | Oui    | Alias          |

#### Authentification d'un datastore

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/data/region/{region}/alias/{alias}/auth`
- **Description:** Récupère l'authentification d'un datastore AI dans une région donnée par son alias
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/data/region/alias/auth/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |
| `alias`       | string | Oui    | Alias          |

**Réponse:** `cloud.project.ai.DataStoreAuth`

---

### Gestion des capacités AI

#### Région

- **Endpoint:** `GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/workspacebackupretentionpolicy`
- **Description:** Récupère la politique de rétention de sauvegarde de workspace appliquée au projet cloud parent et région
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/notebook/workspaceBackupRetentionPolicy/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |

**Réponse:** `cloud.project.ai.notebook.NotebookWorkspaceBackupRetentionPolicy`

#### Mettre à jour la politique de rétention

- **Endpoint:** `PUT /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/workspacebackupretentionpolicy`
- **Description:** Remplace la politique de rétention de sauvegarde de workspace pour le projet cloud parent et région
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:ai/capabilities/region/notebook/workspaceBackupRetentionPolicy/edit`

**Corps de la requête:**

| Paramètre                                                               | Type | Requis | Description                      |
| ----------------------------------------------------------------------- | ---- | ------ | -------------------------------- |
| `cloud.project.ai.notebook.NotebookWorkspaceBackupRetentionPolicyInput` | body | Oui    | Entrée de politique de rétention |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `region`      | string | Oui    | Région         |

**Réponse:** `cloud.project.ai.notebook.NotebookWorkspaceBackupRetentionPolicy`

---

## Alertes de facturation

### Liste des alertes

- **Endpoint:** `GET /cloud/project/{serviceName}/alerting`
- **Description:** Liste toutes les configurations d'alertes de facturation pour un projet cloud public
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:alerting/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `uuid[]`

#### Créer une alerte

- **Endpoint:** `POST /cloud/project/{serviceName}/alerting`
- **Description:** Crée une nouvelle alerte
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:alerting/create`

**Corps de la requête:**

| Paramètre                 | Type | Requis | Description               |
| ------------------------- | ---- | ------ | ------------------------- |
| `cloud.alerting.Alerting` | body | Oui    | Configuration de l'alerte |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.alerting.Alerting`

### Détails d'une alerte

- **Endpoint:** `GET /cloud/project/{serviceName}/alerting/{id}`
- **Description:** Récupère une configuration d'alerte de facturation spécifique pour un projet cloud public
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:alerting/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `id`          | uuid   | Oui    | ID de l'alerte |

**Réponse:** `cloud.alerting.Alerting`

#### Supprimer une alerte

- **Endpoint:** `DELETE /cloud/project/{serviceName}/alerting/{id}`
- **Description:** Supprime une alerte
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:alerting/delete`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `id`          | uuid   | Oui    | ID de l'alerte |

#### Mettre à jour une alerte

- **Endpoint:** `PUT /cloud/project/{serviceName}/alerting/{id}`
- **Description:** Met à jour une alerte existante
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:alerting/edit`

**Corps de la requête:**

| Paramètre                       | Type | Requis | Description            |
| ------------------------------- | ---- | ------ | ---------------------- |
| `cloud.alerting.AlertingUpdate` | body | Oui    | Données de mise à jour |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `id`          | uuid   | Oui    | ID de l'alerte |

#### Liste des alertes envoyées

- **Endpoint:** `GET /cloud/project/{serviceName}/alerting/{id}/alert`
- **Description:** Liste toutes les configurations d'alertes de facturation pour un projet cloud public
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:alerting/alert/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `id`          | uuid   | Oui    | ID de l'alerte |

**Réponse:** `long[]`

#### Détails d'une alerte envoyée

- **Endpoint:** `GET /cloud/project/{serviceName}/alerting/{id}/alert/{alertId}`
- **Description:** Récupère une configuration d'alerte de facturation spécifique pour un projet cloud public
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:alerting/alert/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `id`          | uuid   | Oui    | ID de l'alerte |
| `alertId`     | long   | Oui    | ID de l'alerte |

**Réponse:** `cloud.alerting.Alert`

---

## Facturation

### Liste des factures

- **Endpoint:** `GET /cloud/project/{serviceName}/bill`
- **Description:** Récupère les factures de votre projet
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:bill/get`

**Paramètres de requête:**

| Paramètre     | Type     | Requis | Description                       |
| ------------- | -------- | ------ | --------------------------------- |
| `serviceName` | string   | Oui    | ID du projet                      |
| `from`        | datetime | Oui    | Récupère les factures à partir de |
| `to`          | datetime | Oui    | Récupère les factures jusqu'à     |

**Réponse:** `cloud.project.Bill[]`

### Crédits du projet

- **Endpoint:** `GET /cloud/project/{serviceName}/credit`
- **Description:** Récupère vos crédits
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:credit/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description  |
| ------------- | ------ | ------ | ------------ |
| `serviceName` | string | Oui    | ID du projet |

**Réponse:** `long[]`

#### Ajouter des crédits

- **Endpoint:** `POST /cloud/project/{serviceName}/credit`
- **Description:** Ajoute des crédits à votre projet
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:credit/create`

**Corps de la requête:**

| Paramètre | Type   | Requis | Description     |
| --------- | ------ | ------ | --------------- |
| `code`    | string | Oui    | Code du voucher |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description  |
| ------------- | ------ | ------ | ------------ |
| `serviceName` | string | Oui    | ID du projet |

#### Détails d'un crédit

- **Endpoint:** `GET /cloud/project/{serviceName}/credit/{id}`
- **Description:** Récupère les propriétés de cet objet
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:credit/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description  |
| ------------- | ------ | ------ | ------------ |
| `serviceName` | string | Oui    | ID du projet |
| `id`          | long   | Oui    | ID du crédit |

**Réponse:** `cloud.Credit`

---

## Bases de données

### Disponibilité des moteurs de base de données

- **Endpoint:** `GET /cloud/project/{serviceName}/database/availability`
- **Description:** Récupère la disponibilité des moteurs de base de données
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:database/availability/get`

**Paramètres de requête:**

| Paramètre     | Type       | Requis | Description                                               |
| ------------- | ---------- | ------ | --------------------------------------------------------- |
| `serviceName` | string     | Oui    | Nom du service                                            |
| `action`      | ActionEnum | Non    | Type d'action sur laquelle restreindre les disponibilités |
| `clusterId`   | uuid       | Non    | Cluster ID sur lequel restreindre les disponibilités      |
| `target`      | TargetEnum | Non    | Type de cible sur laquelle restreindre les disponibilités |

**Réponse:** `cloud.project.database.Availability[]`

### Capacités des bases de données

- **Endpoint:** `GET /cloud/project/{serviceName}/database/capabilities`
- **Description:** Récupère les capacités des moteurs de base de données
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:database/capabilities/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.project.database.Capabilities`

### Cluster Cassandra

#### Liste des clusters

- **Endpoint:** `GET /cloud/project/{serviceName}/database/cassandra`
- **Description:** Liste tous les clusters Cassandra du projet
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:database/cassandra/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `uuid[]`

#### Créer un cluster

- **Endpoint:** `POST /cloud/project/{serviceName}/database/cassandra`
- **Description:** Crée un nouveau cluster Cassandra
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:database/cassandra/create`

**Corps de la requête:**

| Paramètre                                | Type | Requis | Description         |
| ---------------------------------------- | ---- | ------ | ------------------- |
| `cloud.project.database.ServiceCreation` | body | Oui    | Création du service |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.project.database.Service`

#### Supprimer un cluster

- **Endpoint:** `DELETE /cloud/project/{serviceName}/database/cassandra/{clusterId}`
- **Description:** Supprime un cluster Cassandra
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:database/cassandra/delete`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `clusterId`   | uuid   | Oui    | Cluster ID     |

#### Détails d'un cluster

- **Endpoint:** `GET /cloud/project/{serviceName}/database/cassandra/{clusterId}`
- **Description:** Récupère les propriétés d'un cluster Cassandra
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:database/cassandra/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `clusterId`   | uuid   | Oui    | Cluster ID     |

**Réponse:** `cloud.project.database.Service`

#### Mettre à jour un cluster

- **Endpoint:** `PUT /cloud/project/{serviceName}/database/cassandra/{clusterId}`
- **Description:** Met à jour un cluster Cassandra
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:database/cassandra/edit`

**Corps de la requête:**

| Paramètre                        | Type | Requis | Description        |
| -------------------------------- | ---- | ------ | ------------------ |
| `cloud.project.database.Service` | body | Oui    | Données du service |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `clusterId`   | uuid   | Oui    | Cluster ID     |

**Réponse:** `void`

---

## Registries de conteneurs

### Liste des registries

- **Endpoint:** `GET /cloud/project/{serviceName}/containerRegistry`
- **Description:** Liste les registries du projet
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.containerRegistry.Registry[]`

#### Créer une registry

- **Endpoint:** `POST /cloud/project/{serviceName}/containerRegistry`
- **Description:** Crée une nouvelle registry
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/create`

**Corps de la requête:**

| Paramètre                                | Type | Requis | Description             |
| ---------------------------------------- | ---- | ------ | ----------------------- |
| `cloud.ProjectContainerRegistryCreation` | body | Oui    | Création de la registry |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.containerRegistry.Registry`

### Détails d'une registry

- **Endpoint:** `GET /cloud/project/{serviceName}/containerRegistry/{registryID}`
- **Description:** Récupère les informations de la registry
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

**Réponse:** `cloud.containerRegistry.Registry`

#### Supprimer une registry

- **Endpoint:** `DELETE /cloud/project/{serviceName}/containerRegistry/{registryID}`
- **Description:** Supprime une registry
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/delete`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

#### Mettre à jour une registry

- **Endpoint:** `PUT /cloud/project/{serviceName}/containerRegistry/{registryID}`
- **Description:** Met à jour une registry
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/edit`

**Corps de la requête:**

| Paramètre                              | Type | Requis | Description            |
| -------------------------------------- | ---- | ------ | ---------------------- |
| `cloud.ProjectContainerRegistryUpdate` | body | Oui    | Données de mise à jour |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

#### Plans d'une registry

- **Endpoint:** `GET /cloud/project/{serviceName}/containerRegistry/{registryID}/capabilities/plan`
- **Description:** Liste les capacités disponibles par région pour la registry actuelle
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:capabilities/containerRegistry/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

**Réponse:** `cloud.containerRegistry.Capability[]`

#### Plan d'une registry

- **Endpoint:** `GET /cloud/project/{serviceName}/containerRegistry/{registryID}/plan`
- **Description:** Affiche le plan actuel de la registry
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/plan/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

**Réponse:** `cloud.containerRegistry.Plan`

#### Mettre à jour le plan

- **Endpoint:** `PUT /cloud/project/{serviceName}/containerRegistry/{registryID}/plan`
- **Description:** Met à jour le plan d'une registry
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/plan/edit`

**Corps de la requête:**

| Paramètre                            | Type | Requis | Description            |
| ------------------------------------ | ---- | ------ | ---------------------- |
| `cloud.containerRegistry.PlanUpdate` | body | Oui    | Données de mise à jour |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

#### Gestion IAM

- **Endpoint:** `POST /cloud/project/{serviceName}/containerRegistry/{registryID}/iam`
- **Description:** Active OVHcloud IAM
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/iam/enable`

**Corps de la requête:**

| Paramètre                         | Type | Requis | Description |
| --------------------------------- | ---- | ------ | ----------- |
| `cloud.containerRegistry.iamPost` | body | Oui    | Données IAM |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

#### Désactiver IAM

- **Endpoint:** `DELETE /cloud/project/{serviceName}/containerRegistry/{registryID}/iam`
- **Description:** Désactive OVHcloud IAM
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/iam/disable`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

#### Restrictions IP

- **Endpoint:** `GET /cloud/project/{serviceName}/containerRegistry/{registryID}/ipRestrictions/management`
- **Description:** Liste vos restrictions IP appliquées sur Harbor UI et API
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/ipRestrictions/management/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

**Réponse:** `cloud.containerRegistry.IPRestrictions[]`

#### Mettre à jour les restrictions IP

- **Endpoint:** `PUT /cloud/project/{serviceName}/containerRegistry/{registryID}/ipRestrictions/management`
- **Description:** Remplace les restrictions IP appliquées sur Harbor UI et API
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/ipRestrictions/management/edit`

**Corps de la requête:**

| Paramètre                                  | Type | Requis | Description     |
| ------------------------------------------ | ---- | ------ | --------------- |
| `cloud.containerRegistry.IPRestrictions[]` | body | Oui    | Restrictions IP |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

#### Restrictions IP - Artifact Manager

- **Endpoint:** `GET /cloud/project/{serviceName}/containerRegistry/{registryID}/ipRestrictions/registry`
- **Description:** Liste vos restrictions IP appliquées sur le composant artifact manager
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/ipRestrictions/registry/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

**Réponse:** `cloud.containerRegistry.IPRestrictions[]`

#### Mettre à jour les restrictions IP - Artifact Manager

- **Endpoint:** `PUT /cloud/project/{serviceName}/containerRegistry/{registryID}/ipRestrictions/registry`
- **Description:** Remplace les restrictions IP appliquées sur le composant artifact manager (Docker, Helm, etc.)
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/ipRestrictions/registry/edit`

**Corps de la requête:**

| Paramètre                                  | Type | Requis | Description     |
| ------------------------------------------ | ---- | ------ | --------------- |
| `cloud.containerRegistry.IPRestrictions[]` | body | Oui    | Restrictions IP |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

#### Configuration OIDC

- **Endpoint:** `GET /cloud/project/{serviceName}/containerRegistry/{registryID}/openIdConnect`
- **Description:** Récupère la configuration OIDC de la registry
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/openIdConnect/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

**Réponse:** `cloud.containerRegistry.OIDCConfiguration`

#### Créer/Remplacer la configuration OIDC

- **Endpoint:** `POST /cloud/project/{serviceName}/containerRegistry/{registryID}/openIdConnect`
- **Description:** Ajoute ou remplace la configuration OIDC de la registry
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/openIdConnect/upsert`

**Corps de la requête:**

| Paramètre                          | Type | Requis | Description  |
| ---------------------------------- | ---- | ------ | ------------ |
| `cloud.containerRegistry.OIDCPost` | body | Oui    | Données OIDC |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

#### Modifier la configuration OIDC

- **Endpoint:** `PUT /cloud/project/{serviceName}/containerRegistry/{registryID}/openIdConnect`
- **Description:** Modifie la configuration OIDC de la registry
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/openIdConnect/edit`

**Corps de la requête:**

| Paramètre                         | Type | Requis | Description  |
| --------------------------------- | ---- | ------ | ------------ |
| `cloud.containerRegistry.OIDCPut` | body | Oui    | Données OIDC |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

#### Supprimer la configuration OIDC

- **Endpoint:** `DELETE /cloud/project/{serviceName}/containerRegistry/{registryID}/openIdConnect`
- **Description:** Supprime la configuration OIDC de la registry
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/openIdConnect/delete`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

### Gestion des utilisateurs

#### Liste des utilisateurs

- **Endpoint:** `GET /cloud/project/{serviceName}/containerRegistry/{registryID}/users`
- **Description:** Liste les utilisateurs de registry
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/users/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

**Réponse:** `cloud.containerRegistry.User[]`

#### Créer un utilisateur

- **Endpoint:** `POST /cloud/project/{serviceName}/containerRegistry/{registryID}/users`
- **Description:** Crée un nouveau utilisateur de registry
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/users/create`

**Corps de la requête:**

| Paramètre                                     | Type | Requis | Description               |
| --------------------------------------------- | ---- | ------ | ------------------------- |
| `cloud.ProjectContainerRegistryUsersCreation` | body | Oui    | Création de l'utilisateur |

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |

**Réponse:** `cloud.containerRegistry.User`

#### Détails d'un utilisateur

- **Endpoint:** `GET /cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}`
- **Description:** Récupère un utilisateur de registry
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/users/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |
| `userID`      | string | Oui    | User ID        |

**Réponse:** `cloud.containerRegistry.User`

#### Supprimer un utilisateur

- **Endpoint:** `DELETE /cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}`
- **Description:** Supprime un utilisateur de registry
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/users/delete`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |
| `userID`      | string | Oui    | User ID        |

#### Définir un utilisateur comme Admin

- **Endpoint:** `PUT /cloud/project/{serviceName}/containerRegistry/{registryID}/users/{userID}/setAsAdmin`
- **Description:** Définit l'utilisateur comme Admin
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:containerRegistry/users/setAsAdmin`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |
| `registryID`  | string | Oui    | Registry ID    |
| `userID`      | string | Oui    | User ID        |

---

## Capacités Kubernetes

### Admission plugins

- **Endpoint:** `GET /cloud/project/{serviceName}/capabilities/kube/admissionplugins`
- **Description:** Liste des admissionPlugins gérés par MKS product qui peuvent être activés ou désactivés
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:capabilities/kube/admissionplugins/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `cloud.ProjectKubeCustomizationAPIServerAdmissionPluginsEnum[]`

### Flavors

- **Endpoint:** `GET /cloud/project/{serviceName}/capabilities/kube/flavors`
- **Description:** Liste les flavors Kubernetes disponibles pour une région
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:capabilities/kube/flavors/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description                                                 |
| ------------- | ------ | ------ | ----------------------------------------------------------- |
| `serviceName` | string | Oui    | Nom du service                                              |
| `region`      | string | Non    | La région à lister les flavors disponibles. Exemple: GRA11. |

**Réponse:** `cloud.kube.Flavor[]`

### Logs

- **Endpoint:** `GET /cloud/project/{serviceName}/capabilities/kube/log/kind`
- **Description:** Liste les kinds de logs disponibles
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:capabilities/kube/log/kind/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `string[]`

#### Détails d'un kind de log

- **Endpoint:** `GET /cloud/project/{serviceName}/capabilities/kube/log/kind/{name}`
- **Description:** Récupère un kind de log
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:capabilities/kube/log/kind/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description        |
| ------------- | ------ | ------ | ------------------ |
| `serviceName` | string | Oui    | Nom du service     |
| `name`        | string | Oui    | Nom du kind de log |

**Réponse:** `dbaas.logs.LogKind`

### Régions

- **Endpoint:** `GET /cloud/project/{serviceName}/capabilities/kube/regions`
- **Description:** Liste les régions Kubernetes où la création de cluster est possible
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:capabilities/kube/regions/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `string[]`

---

## Load Balancer

### Disponibilité des régions

- **Endpoint:** `GET /cloud/project/{serviceName}/capabilities/loadbalancer/region`
- **Description:** Liste toutes les régions disponibles
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:capabilities/loadbalancer/region/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description    |
| ------------- | ------ | ------ | -------------- |
| `serviceName` | string | Oui    | Nom du service |

**Réponse:** `string[]`

#### Détails d'une région

- **Endpoint:** `GET /cloud/project/{serviceName}/capabilities/loadbalancer/region/{regionName}`
- **Description:** Récupère les informations spécifiques d'une région
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:capabilities/loadbalancer/region/get`

**Paramètres de requête:**

| Paramètre     | Type   | Requis | Description      |
| ------------- | ------ | ------ | ---------------- |
| `serviceName` | string | Oui    | Nom du service   |
| `regionName`  | string | Oui    | Nom de la région |

**Réponse:** `cloud.project.loadbalancer.Region``

---

## Disponibilité des produits

- **Endpoint:** `GET /cloud/project/{serviceName}/capabilities/productAvailability`
- **Description:** Liste la disponibilité des produits
- **Authentification requise:** Oui
- **IAM Action:** `publicCloudProject:apiovh:capabilities/productAvailability/get`

**Paramètres de requête:**

| Paramètre       | Type              | Requis | Description                                                            |
| --------------- | ----------------- | ------ | ---------------------------------------------------------------------- |
| `serviceName`   | string            | Oui    | Nom du service                                                         |
| `addonFamily`   | string            | Non    | Filtre par famille d'addon                                             |
| `ovhSubsidiary` | OvhSubsidiaryEnum | Oui    | Sous-société OVH                                                       |
| `planCode`      | string            | Non    | Filtre par code de plan                                                |
| `planFamily`    | string            | Non    | Filtre par famille de plan (déprécié, utilisez addonFamily à la place) |
| `product`       | string            | Non    | Filtre par produit                                                     |

**Réponse:** `cloud.capabilities.Availability`

---

## API Status

### Statut beta

| Endpoint                                                                     | Méthode | Description                                           |
| ---------------------------------------------------------------------------- | ------- | ----------------------------------------------------- |
| `/cloud/agreements`                                                          | GET     | Get agreements related to a product                   |
| `/cloud/eligibility`                                                         | GET     | Check your eligibility to create a Public Cloud order |
| `/cloud/project/{serviceName}/activateMonthlyBilling`                        | POST    | Activate monthly billing on multiple instances        |
| `/cloud/project/{serviceName}/ai/capabilities/loadbalancer/region`           | GET     | List all available regions                            |
| `/cloud/project/{serviceName}/capabilities/loadbalancer/region/{regionName}` | GET     | Get specific information of a region                  |
| `/cloud/project/{serviceName}/capabilities/productAvailability`              | GET     | List product availability                             |

### Statut production

Toutes les autres API sont en version de production stable.

---

## Erreurs possibles

Les erreurs suivantes peuvent être retournées selon le contexte:

### Client::BadRequest

- `AtLeastOneNode`
- `FlavorDiskSizeTooLow`
- `NoUpdate`
- `NodesFlavorMismatch`
- `NodesRegionMismatch`
- `NotEnoughNodes`
- `OnlyNodeListOrPattern`
- `TooManyNodes`
- `UserInvalidNameFormat`

### Client::Unauthorized

- `InvalidAuthToken`

### Client::NotFound

- `AvailabilityDoesNotExistAnymore`
- `AvailabilityNotFound`
- `BackupNotFound`
- `BillingNotFound`
- `EngineNameNotFound`
- `FlavorNameNotFound`
- `InsertIpRestrictionsMultipleServices`
- `InvalidMetricName`
- `InvalidNodeNumber`
- `IpRestrictionAlreadyExists`
- `IpRestrictionIDNotFound`
- `IpRestrictionInvalidFormat`
- `IpRestrictionNotFound`
- `NoMatchingAvailability`
- `NodeNameNotFound`
- `NodeNotFound`
- `OrganizationNotFound`
- `PlanInvalidUpgrade`
- `PlanNotFound`
- `RegionNotFound`
- `RoleNotFound`
- `ServiceNotFound`
- `SslCertificateNotFound`
- `UserNotFound`
- `VersionNotFound`

### Client::Conflict

- `ServiceLocked`
- `ServiceNotReady`
- `ServiceOnlyOneModification`

---

## Notes

- Toutes les API nécessitent une authentification OVHcloud via les credentials appropriées
- Les endpoints utilisent l'algorithme de signature SHA1 pour l'authentification
- La version de l'API est 1.0
- Les resources sont gérés via les opérations CRUD standard (GET, POST, PUT, DELETE)

# API de Connectivité OVHcloud

## Vue d'ensemble

L'API de connectivité OVHcloud permet de gérer les tests d'éligibilité, la recherche d'adresses, les informations sur les bâtiments, les lignes téléphoniques, les réunions de planification et le suivi des incidents. Cette API est destinée aux partenaires et intégrateurs qui souhaitent intégrer les services de connectivité OVHcloud dans leurs applications.

**Base URL**: `https://eu.api.ovh.com/v1`  
**Version de l'API**: `1.0`  
**Resource Path**: `/connectivity`

---

## Table des matières

1. [Eligibilité et Tests](#1-eligibilité-et-tests)
2. [Recherche d'Adresses et de Bâtiments](#2-recherche-dadresses-et-de-bâtiments)
3. [Maintenance et Travaux Planifiés](#3-maintenance-et-travaux-planifiés)
4. [Monitoring et Incidents](#4-monitoring-et-incidents)
5. [Modèles de Données](#5-modèles-de-données)
6. [Authentification](#6-authentification)

---

## 1. Eligibilité et Tests

### 1.1 Rappels d'Éligibilité

#### Lister les rappels d'éligibilité

Récupère la liste des rappels d'éligibilité créés pour un client.

- **Méthode**: `GET`
- **Endpoint**: `/connectivity/eligibility/recall`
- **Authentification**: Requise
- **Permissions**: `account:apiovh:connectivity/eligibility/recall/list`

**Réponse**: `connectivity.eligibility.EligibilityRecall[]`

---

#### Créer un rappel d'éligibilité

Crée un nouveau rappel d'éligibilité pour vérifier les options de raccordement.

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/recall`
- **Authentification**: Requise
- **Permissions**: `account:apiovh:connectivity/eligibility/recall/create`

**Paramètres**:

| Paramètre        | Type                                              | Requis | Description       |
| ---------------- | ------------------------------------------------- | ------ | ----------------- |
| **Request Body** | `connectivity.eligibility.EligibilityRecall.post` | Oui    | Détails du rappel |

**Corps de la requête**:

| Champ                   | Type                                         | Requis | Description                                 |
| ----------------------- | -------------------------------------------- | ------ | ------------------------------------------- |
| `reference`             | `string`                                     | Oui    | Référence unique pour le rappel             |
| `referenceType`         | `connectivity.eligibility.ReferenceTypeEnum` | Oui    | Type de référence (`address` ou `building`) |
| `profiberRequest`       | `boolean`                                    | Non    | Vérifier l'éligibilité FTTH Pro Fiber       |
| `dedicatedfiberRequest` | `boolean`                                    | Non    | Vérifier l'éligibilité FTTO/FTTE dédiée     |

**Réponse**: `connectivity.eligibility.EligibilityRecall`

---

#### Récupérer un rappel d'éligibilité

Récupère les détails d'un rappel d'éligibilité spécifique.

- **Méthode**: `GET`
- **Endpoint**: `/connectivity/eligibility/recall/{id}`
- **Authentification**: Requise
- **Permissions**: `account:apiovh:connectivity/eligibility/recall/get`

**Paramètres de chemin**:

| Paramètre | Type   | Requis | Description                  |
| --------- | ------ | ------ | ---------------------------- |
| `id`      | `long` | Oui    | Identifiant unique du rappel |

**Réponse**: `connectivity.eligibility.EligibilityRecall`

---

#### Modifier un rappel d'éligibilité

Modifie les détails d'un rappel d'éligibilité existant.

- **Méthode**: `PUT`
- **Endpoint**: `/connectivity/eligibility/recall/{id}`
- **Authentification**: Requise
- **Permissions**: `account:apiovh:connectivity/eligibility/recall/edit`

**Paramètres**:

| Paramètre        | Type                                              | Requis | Description           |
| ---------------- | ------------------------------------------------- | ------ | --------------------- |
| `id` (path)      | `long`                                            | Oui    | Identifiant du rappel |
| **Request Body** | `connectivity.eligibility.EligibilityRecall.post` | Oui    | Nouveaux détails      |

**Réponse**: `connectivity.eligibility.EligibilityRecall`

---

#### Supprimer un rappel d'éligibilité

Supprime un rappel d'éligibilité spécifique.

- **Méthode**: `DELETE`
- **Endpoint**: `/connectivity/eligibility/recall/{id}`
- **Authentification**: Requise
- **Permissions**: `account:apiovh:connectivity/eligibility/recall/delete`

**Paramètres de chemin**:

| Paramètre | Type   | Requis | Description                       |
| --------- | ------ | ------ | --------------------------------- |
| `id`      | `long` | Oui    | Identifiant du rappel à supprimer |

**Réponse**: `void`

---

### 1.2 Tests d'Éligibilité

#### Tester l'éligibilité par référence

Récupère les détails d'un test d'éligibilité par sa référence.

- **Méthode**: `GET`
- **Endpoint**: `/connectivity/eligibility/test`
- **Authentification**: Non requise

**Paramètres de requête**:

| Paramètre              | Type     | Requis | Description                     |
| ---------------------- | -------- | ------ | ------------------------------- |
| `eligibilityReference` | `string` | Oui    | Référence du test d'éligibilité |

**Réponse**: `connectivity.eligibility.EligibilityTest`

---

#### Tester l'éligibilité par adresse

Effectue un test d'éligibilité pour une adresse spécifique.

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/test/address`
- **Authentification**: Non requise

**Corps de la requête**:

| Champ           | Type     | Requis | Description                             |
| --------------- | -------- | ------ | --------------------------------------- |
| `hexacle`       | `string` | Non    | Identifiant unique hexacle de l'adresse |
| `streetCode`    | `string` | Non    | Code unique de la rue                   |
| `streetAltCode` | `string` | Non    | Code alternatif de la rue               |
| `streetNumber`  | `string` | Non    | Numéro du bâtiment                      |

**Réponse**: `xdsl.AsyncTask_connectivity.eligibility.EligibilityTest`

---

#### Tester l'éligibilité pour partenaires (adresse)

Test d'éligibilité par adresse - réservé aux partenaires.

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/test/address/partners`
- **Authentification**: Requise
- **Permissions**: `account:apiovh:connectivity/eligibility/test/address/partners/create`

**Corps de la requête**:

| Champ           | Type     | Requis | Description                             |
| --------------- | -------- | ------ | --------------------------------------- |
| `hexacle`       | `string` | Non    | Identifiant unique hexacle de l'adresse |
| `streetCode`    | `string` | Non    | Code unique de la rue                   |
| `streetAltCode` | `string` | Non    | Code alternatif de la rue               |
| `streetNumber`  | `string` | Non    | Numéro du bâtiment                      |

**Réponse**: `xdsl.AsyncTask_connectivity.eligibility.EligibilityTest`

---

#### Tester l'éligibilité par bâtiment

Effectue un test d'éligibilité pour un bâtiment (fibre uniquement).

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/test/building`
- **Authentification**: Non requise

**Corps de la requête**:

| Champ      | Type     | Requis | Description             |
| ---------- | -------- | ------ | ----------------------- |
| `building` | `string` | Oui    | Identifiant du bâtiment |

**Réponse**: `xdsl.AsyncTask_connectivity.eligibility.EligibilityTest`

---

#### Tester l'éligibilité par bâtiment (partenaires)

Test d'éligibilité par bâtiment - réservé aux partenaires (version BETA).

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/test/building/partners`
- **Authentification**: Requise
- **Permissions**: `account:apiovh:connectivity/eligibility/test/building/partners/create`
- **Statut**: `BETA`

**Corps de la requête**:

| Champ      | Type     | Requis | Description             |
| ---------- | -------- | ------ | ----------------------- |
| `building` | `string` | Oui    | Identifiant du bâtiment |

**Réponse**: `xdsl.AsyncTask_connectivity.eligibility.EligibilityTest`

---

#### Tester l'éligibilité par ligne

Effectue un test d'éligibilité pour un numéro de ligne (cuivre uniquement).

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/test/line`
- **Authentification**: Non requise

**Corps de la requête**:

| Champ          | Type                                      | Requis | Description                     |
| -------------- | ----------------------------------------- | ------ | ------------------------------- |
| `lineNumber`   | `string`                                  | Oui    | Numéro de ligne                 |
| `status`       | `connectivity.eligibility.LineStatusEnum` | Oui    | Statut (`active` ou `inactive`) |
| `streetCode`   | `string`                                  | Non    | Code unique de la rue           |
| `streetNumber` | `string`                                  | Non    | Numéro du bâtiment              |

**Réponse**: `xdsl.AsyncTask_connectivity.eligibility.EligibilityTest`

---

#### Tester l'éligibilité par ligne (partenaires)

Test d'éligibilité par ligne - réservé aux partenaires.

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/test/line/partners`
- **Authentification**: Requise
- **Permissions**: `account:apiovh:connectivity/eligibility/test/line/partners/create`

**Corps de la requête**:

| Champ          | Type                                      | Requis | Description                     |
| -------------- | ----------------------------------------- | ------ | ------------------------------- |
| `lineNumber`   | `string`                                  | Oui    | Numéro de ligne                 |
| `status`       | `connectivity.eligibility.LineStatusEnum` | Oui    | Statut (`active` ou `inactive`) |
| `streetCode`   | `string`                                  | Non    | Code unique de la rue           |
| `streetNumber` | `string`                                  | Non    | Numéro du bâtiment              |

**Réponse**: `xdsl.AsyncTask_connectivity.eligibility.EligibilityTest`

---

#### Tester l'éligibilité par OTP (Optical Termination Panel)

Effectue un test d'éligibilité pour un OTP (fibre uniquement).

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/test/otp`
- **Authentification**: Non requise

**Corps de la requête**:

| Champ | Type     | Requis | Description          |
| ----- | -------- | ------ | -------------------- |
| `otp` | `string` | Oui    | Identifiant de l'OTP |

**Réponse**: `xdsl.AsyncTask_connectivity.eligibility.EligibilityTest`

---

#### Tester l'éligibilité par OTP (partenaires)

Test d'éligibilité par OTP - réservé aux partenaires (version BETA).

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/test/otp/partners`
- **Authentification**: Requise
- **Permissions**: `account:apiovh:connectivity/eligibility/test/otp/partners/create`
- **Statut**: `BETA`

**Corps de la requête**:

| Champ | Type     | Requis | Description          |
| ----- | -------- | ------ | -------------------- |
| `otp` | `string` | Oui    | Identifiant de l'OTP |

**Réponse**: `xdsl.AsyncTask_connectivity.eligibility.EligibilityTest`

---

### 1.3 Recherche d'Adresses

#### Rechercher des adresses proches

Recherche des adresses à proximité d'une position géographique.

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/search/addresses`
- **Authentification**: Non requise

**Corps de la requête**:

| Champ       | Type     | Requis | Description                                   |
| ----------- | -------- | ------ | --------------------------------------------- |
| `latitude`  | `string` | Oui    | Latitude de la position                       |
| `longitude` | `string` | Oui    | Longitude de la position                      |
| `distance`  | `long`   | Non    | Distance de recherche en mètres (défaut: 10m) |

**Réponse**: `xdsl.AsyncTaskArray_connectivity.eligibility.AddressWithCoordinates`

---

### 1.4 Recherche de Bâtiments

#### Récupérer les détails d'un bâtiment

Récupère les informations détaillées sur un bâtiment spécifique.

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/search/buildingDetails`
- **Authentification**: Non requise

**Corps de la requête**:

| Champ           | Type     | Requis | Description                                                 |
| --------------- | -------- | ------ | ----------------------------------------------------------- |
| `building`      | `string` | Oui    | Identifiant du bâtiment                                     |
| `forceProvider` | `string` | Non    | Forcer l'utilisation d'un dépôt d'un fournisseur spécifique |

**Réponse**: `xdsl.AsyncTask_connectivity.eligibility.Building`

---

#### Récupérer tous les bâtiments d'une adresse

Récupère tous les bâtiments pour une adresse spécifique.

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/search/buildings`
- **Authentification**: Non requise

**Corps de la requête**:

| Champ           | Type     | Requis | Description                      |
| --------------- | -------- | ------ | -------------------------------- |
| `hexacle`       | `string` | Non    | Identifiant hexacle de l'adresse |
| `streetCode`    | `string` | Non    | Code unique de la rue            |
| `streetAltCode` | `string` | Non    | Code alternatif de la rue        |
| `streetNumber`  | `string` | Non    | Numéro du bâtiment               |

**Réponse**: `xdsl.AsyncTaskArray_connectivity.eligibility.Building`

---

#### Récupérer les bâtiments par numéro de ligne

Récupère les références de bâtiments à partir d'un numéro de ligne.

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/search/buildingsByLine`
- **Authentification**: Non requise

**Corps de la requête**:

| Champ        | Type                                      | Requis | Description        |
| ------------ | ----------------------------------------- | ------ | ------------------ |
| `lineNumber` | `string`                                  | Oui    | Numéro de ligne    |
| `status`     | `connectivity.eligibility.LineStatusEnum` | Oui    | Statut de la ligne |

**Réponse**: `xdsl.AsyncTaskArray_connectivity.eligibility.Building`

---

### 1.5 Recherche de Villes

#### Récupérer les villes d'un code postal

Récupère toutes les communes associées à un code postal.

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/search/cities`
- **Authentification**: Non requise

**Corps de la requête**:

| Champ     | Type     | Requis | Description |
| --------- | -------- | ------ | ----------- |
| `zipCode` | `string` | Oui    | Code postal |

**Réponse**: `xdsl.AsyncTaskArray_connectivity.eligibility.City`

---

### 1.6 Recherche de Lignes

#### Rechercher les lignes actives et inactives

Recherche les lignes actives et inactives à une adresse.

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/search/lines`
- **Authentification**: Non requise

**Corps de la requête**:

| Champ          | Type     | Requis | Description                                |
| -------------- | -------- | ------ | ------------------------------------------ |
| `streetCode`   | `string` | Oui    | Code de la rue                             |
| `streetNumber` | `string` | Oui    | Numéro du bâtiment                         |
| `ownerName`    | `string` | Non    | Nom du propriétaire (minimum 3 caractères) |

**Réponse**: `xdsl.AsyncTaskArray_connectivity.eligibility.Line`

---

### 1.7 Recherche de Réunions

#### Rechercher les créneaux de réunion

Recherche les créneaux disponibles pour la création de ligne cuivre ou l'installation fibre.

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/search/meetings`
- **Authentification**: Non requise

**Corps de la requête**:

| Champ                  | Type                                                      | Requis | Description                            |
| ---------------------- | --------------------------------------------------------- | ------ | -------------------------------------- |
| `eligibilityReference` | `string`                                                  | Oui    | Référence du test d'éligibilité        |
| `installationType`     | `connectivity.eligibility.InstallationTypeEnum`           | Non    | Type d'installation (fibre uniquement) |
| `otp`                  | `string`                                                  | Non    | Identifier OTP si disponible           |
| `planCode`             | `string`                                                  | Non    | Code du plan de l'offre                |
| `productCode`          | `string`                                                  | Non    | Code du produit de l'offre choisi      |
| `siteCompanyName`      | `string`                                                  | Non    | Nom de l'entreprise/site               |
| `technicalVisit`       | `connectivity.eligibility.TechnicalVisitTypeEnum`         | Non    | Demande de visite technique (fibre)    |
| `type`                 | `connectivity.eligibility.OfferProductTypeEnum`           | Non    | Type de produit d'offre                |
| `unbundlingType`       | `connectivity.eligibility.OfferProductUnbundlingTypeEnum` | Non    | Type de débundling                     |

**Réponse**: `xdsl.AsyncTask_connectivity.eligibility.Meetings`

---

### 1.8 Recherche de Numéros de Rue

#### Récupérer les numéros de rue disponibles

Récupère les numéros de rue disponibles pour un code de rue.

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/search/streetNumbers`
- **Authentification**: Non requise

**Corps de la requête**:

| Champ           | Type     | Requis | Description               |
| --------------- | -------- | ------ | ------------------------- |
| `streetCode`    | `string` | Oui    | Code unique de la rue     |
| `streetAltCode` | `string` | Non    | Code alternatif de la rue |

**Réponse**: `xdsl.AsyncTaskArray_string`

---

#### Récupérer les détails des numéros de rue

Récupère les détails des numéros de rue disponibles pour un code de rue.

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/search/streetNumbers/details`
- **Authentification**: Non requise

**Corps de la requête**:

| Champ           | Type     | Requis | Description               |
| --------------- | -------- | ------ | ------------------------- |
| `streetCode`    | `string` | Oui    | Code unique de la rue     |
| `streetAltCode` | `string` | Non    | Code alternatif de la rue |

**Réponse**: `xdsl.AsyncTaskArray_connectivity.eligibility.StreetNumberDetails`

---

### 1.9 Recherche de Rues

#### Récupérer toutes les rues d'une commune

Récupère toutes les rues associées à une localité.

- **Méthode**: `POST`
- **Endpoint**: `/connectivity/eligibility/search/streets`
- **Authentification**: Non requise

**Corps de la requête**:

| Champ       | Type     | Requis | Description              |
| ----------- | -------- | ------ | ------------------------ |
| `inseeCode` | `string` | Oui    | Code INSEE de la commune |

**Réponse**: `xdsl.AsyncTaskArray_connectivity.eligibility.Street`

---

## 2. Recherche d'Adresses et de Bâtiments

Cette section regroupe les opérations de recherche géographique et d'identification d'infrastructures.

### 2.1 Recherche Géographique

#### Requête de recherche d'adresses

Utilisez `POST /connectivity/eligibility/search/addresses` pour trouver des adresses à proximité d'une position GPS.

**Exemple de requête**:

```bash
curl -X POST "https://eu.api.ovh.com/v1/connectivity/eligibility/search/addresses" \
  -H "Content-Type: application/json" \
  -d '{
    "latitude": "48.8566",
    "longitude": "2.3522",
    "distance": 100
  }'
```

### 2.2 Identification de Bâtiments

#### Requête de détails de bâtiment

Utilisez `POST /connectivity/eligibility/search/buildingDetails` pour obtenir les informations complètes sur un bâtiment.

**Exemple de requête**:

```bash
curl -X POST "https://eu.api.ovh.com/v1/connectivity/eligibility/search/buildingDetails" \
  -H "Content-Type: application/json" \
  -d '{
    "building": "building-12345"
  }'
```

---

## 3. Maintenance et Travaux Planifiés

### 3.1 Travaux Planifiés - Public

#### Lister les travaux planifiés

Récupère la liste des travaux planifiés par les opérateurs.

- **Méthode**: `GET`
- **Endpoint**: `/connectivity/maintenance/workPlanned/public`
- **Authentification**: Non requise

**Paramètres de requête**:

| Paramètre   | Type       | Requis | Description                                             |
| ----------- | ---------- | ------ | ------------------------------------------------------- |
| `beginDate` | `datetime` | Non    | Liste uniquement les travaux commencés après cette date |
| `endDate`   | `datetime` | Non    | Liste uniquement les travaux terminés avant cette date  |

**Réponse**: `connectivity.maintenance.WorkPlanned[]`

---

### 3.2 Travaux Planifiés - Partenaires

#### Lister les travaux planifiés (partenaires)

Récupère la liste des travaux planifiés par les opérateurs. Réservé aux partenaires.

- **Méthode**: `GET`
- **Endpoint**: `/connectivity/maintenance/workPlanned/partners`
- **Authentification**: Requise
- **Permissions**: `account:apiovh:connectivity/maintenance/workPlanned/partners/get`

**Réponse**: `connectivity.maintenance.WorkPlanned[]`

---

## 4. Monitoring et Incidents

### 4.1 Incidents Génériques - Public

#### Lister les incidents génériques

Récupère la liste des incidents validés et récemment fermés.

- **Méthode**: `GET`
- **Endpoint**: `/connectivity/monitoring/genericIncident/public`
- **Authentification**: Non requise

**Paramètres de requête**:

| Paramètre      | Type                                                | Requis | Description                                            |
| -------------- | --------------------------------------------------- | ------ | ------------------------------------------------------ |
| `creationDate` | `datetime`                                          | Non    | Liste uniquement les incidents créés après cette date  |
| `endDate`      | `datetime`                                          | Non    | Liste uniquement les incidents fermés avant cette date |
| `status`       | `connectivity.monitoring.GenericIncidentStatusEnum` | Non    | Filtre par statut (`validated` ou `closed`)            |

**Réponse**: `connectivity.monitoring.GenericIncident[]`

---

### 4.2 Incidents Génériques - Partenaires

#### Lister les incidents génériques (partenaires)

Récupère la liste des incidents détectés, validés et récemment fermés. Réservé aux partenaires.

- **Méthode**: `GET`
- **Endpoint**: `/connectivity/monitoring/genericIncident/partners`
- **Authentification**: Requise
- **Permissions**: `account:apiovh:connectivity/monitoring/genericIncident/partners/get`

**Paramètres de requête**:

| Paramètre      | Type                                                | Requis | Description                                             |
| -------------- | --------------------------------------------------- | ------ | ------------------------------------------------------- |
| `creationDate` | `datetime`                                          | Non    | Liste uniquement les incidents créés après cette date   |
| `endDate`      | `datetime`                                          | Non    | Liste uniquement les incidents fermés avant cette date  |
| `status`       | `connectivity.monitoring.GenericIncidentStatusEnum` | Non    | Filtre par statut (`detected`, `validated` ou `closed`) |

**Réponse**: `connectivity.monitoring.GenericIncident[]`

---

## 5. Modèles de Données

### 5.1 Énumérations

#### OperatorEnum

Code et nom des opérateurs:

| Valeur     | Description      |
| ---------- | ---------------- |
| `AXIONE`   | Axione           |
| `BOUYGUES` | Bouygues Telecom |
| `KOSC`     | KOSC             |
| `ORANGE`   | Orange           |
| `OVH`      | OVHcloud         |
| `SFR`      | SFR              |

#### ActivationTypeEnum

Types d'activation (cuivre uniquement):

| Valeur            | Description     |
| ----------------- | --------------- |
| `activate`        | Activer         |
| `create`          | Créer           |
| `createNeighbour` | Créer un voisin |

#### InstallationTypeEnum

Types d'installation (fibre uniquement):

| Valeur               | Description               |
| -------------------- | ------------------------- |
| `activate`           | Activer                   |
| `activate_undefined` | Activer (sans définition) |
| `create`             | Créer                     |
| `multiOtp`           | Multi-OTP                 |

#### LineStatusEnum

Statuts des lignes:

| Valeur     | Description |
| ---------- | ----------- |
| `active`   | Actif       |
| `inactive` | Inactif     |

#### EndpointReferenceTypeEnum

Types de références d'endpoint:

| Valeur       | Description         |
| ------------ | ------------------- |
| `address`    | Par adresse         |
| `building`   | Par bâtiment        |
| `hexacle`    | Par hexacle         |
| `lineNumber` | Par numéro de ligne |
| `otp`        | Par OTP             |

#### ReferenceTypeEnum

Types de référence:

| Valeur     | Description |
| ---------- | ----------- |
| `address`  | Adresse     |
| `building` | Bâtiment    |

#### OfferProductTypeEnum

Types de produits d'offre:

| Valeur | Description                    |
| ------ | ------------------------------ |
| `ADSL` | ADSL                           |
| `FTTE` | FTTE (Fibre To The Enterprise) |
| `FTTH` | FTTH (Fibre To The Home)       |
| `FTTO` | FTTO (Fibre To The Office)     |
| `SDSL` | SDSL (Symmetric DSL)           |
| `VDSL` | VDSL                           |

#### OfferProductUnbundlingTypeEnum

Types de débundling:

| Valeur    | Description |
| --------- | ----------- |
| `full`    | Complet     |
| `partial` | Partiel     |

#### TechnicalVisitTypeEnum

Types de visites techniques:

| Valeur    | Description |
| --------- | ----------- |
| `complex` | Complexe    |
| `simple`  | Simple      |

#### MessageCodeEnum

Codes de message (codes d'inéligibilité):

| Valeur                           | Description                         |
| -------------------------------- | ----------------------------------- |
| `2006`                           | Code générique                      |
| `2011`                           | Code générique                      |
| `2102`                           | Code générique                      |
| `2103`                           | Code générique                      |
| `2104`                           | Code générique                      |
| `2105`                           | Code générique                      |
| `3009`                           | Code générique                      |
| `3011`                           | Code générique                      |
| `3012`                           | Code générique                      |
| `3013`                           | Code générique                      |
| `3014`                           | Code générique                      |
| `3031`                           | Code générique                      |
| `3040`                           | Code générique                      |
| `3041`                           | Code générique                      |
| `3043`                           | Code générique                      |
| `3044`                           | Code générique                      |
| `3045`                           | Code générique                      |
| `3046`                           | Code générique                      |
| `3047`                           | Code générique                      |
| `3048`                           | Code générique                      |
| `3049`                           | Code générique                      |
| `ATTENUATION_LIMIT`              | Limite d'atténuation                |
| `COMPATIBILITY_CHECK`            | Vérification de compatibilité       |
| `COPPER_NOT_AVAILABLE`           | Cuivre non disponible               |
| `COPPER_NOT_YET_AVAILABLE`       | Cuivre pas encore disponible        |
| `DELAY_30`                       | Délai de 30 jours                   |
| `DELAY_7`                        | Délai de 7 jours                    |
| `EXTERNAL_WS_UNREACHABLE`        | Service externe inaccessible        |
| `FIBER_NOT_AVAILABLE`            | Fibre non disponible                |
| `FIBER_NOT_DEPLOYED_IN_BUILDING` | Fibre non déployée dans le bâtiment |
| `FIBER_NOT_YET_AVAILABLE`        | Fibre pas encore disponible         |
| `FIBER_NOT_YET_DEPLOYED`         | Fibre pas encore déployée           |
| `INCOMPATIBLE_LOCAL_LOOP`        | Boucle locale incompatible          |
| `NETWORK_SATURATED`              | Réseau saturé                       |
| `OTP_NOT_CONNECTABLE`            | OTP non connectable                 |
| `OTP_NOT_MARKETABLE`             | OTP non commercialisable            |
| `PAIRS_SATURATION`               | Saturation des paires               |
| `PRODUCT_NOT_AVAILABLE`          | Produit non disponible              |
| `PRODUCT_NOT_YET_AVAILABLE`      | Produit pas encore disponible       |
| `TOO_MUCH_ATTENUATION`           | Trop d'atténuation                  |
| `UNCERTAIN_DATA`                 | Données incertaines                 |

#### PortabilityTypeEnum

Types de portabilité:

| Valeur            | Description                     |
| ----------------- | ------------------------------- |
| `portin`          | Portabilité entrante            |
| `portinback`      | Retour portabilité entrante     |
| `portout`         | Portabilité sortante            |
| `subsequent`      | Subséquent                      |
| `subsquentportin` | Subséquent portabilité entrante |

#### InterventionTypeEnum

Types d'intervention de maintenance:

| Valeur                                                                        | Description                                         |
| ----------------------------------------------------------------------------- | --------------------------------------------------- |
| `BACKBONE_MAINTENANCE`                                                        | Maintenance de dorsale                              |
| `CARD_SWAP_WITH_IMPACT`                                                       | Remplacement de carte avec impact                   |
| `CLUSTER_AN_ROUTER_MIGRATION`                                                 | Migration cluster AN/Routeur                        |
| `CORRECTIVE_MAINTENANCE`                                                      | Maintenance corrective                              |
| `DSLAM_LINK_UPGRADE_WITHOUT_CARD_SWAP`                                        | Mise à niveau DSLAM sans remplacement de carte      |
| `DSLAM_UPGRADE_WITH_IMPACT`                                                   | Mise à niveau DSLAM avec impact                     |
| `FIBER_CABLE_LINK_SWAP`                                                       | Remplacement de lien fibre                          |
| `FIBER_CONNECTION_WITH_IMPACT`                                                | Connexion fibre avec impact                         |
| `FIBER_MAINTENANCE`                                                           | Maintenance fibre                                   |
| `FIBER_THIRD_PARTY_WORK_WITH_IMPACT`                                          | Travaux tiers fibre avec impact                     |
| `IP_BACKBONE_LINK_MIGRATION_WITH_IMPACT`                                      | Migration dorsale IP avec impact                    |
| `IP_BACKBONE_SWITCH_UPGRADE_WITH_IMPACT`                                      | Mise à niveau switch dorsale IP avec impact         |
| `IP_MAINTENANCE`                                                              | Maintenance IP                                      |
| `LEVEL2_DSLAM_MIGRATION`                                                      | Migration DSLAM niveau 2                            |
| `LINK_MIGRATION_WITH_DSL_IMPACT`                                              | Migration de lien avec impact DSL                   |
| `LL_THIRD_PARTY_MAINTENANCE_WITH_IMPACT`                                      | Maintenance tiers LL avec impact                    |
| `LOOP_AN_ROUTER_MIGRATION`                                                    | Migration boucle AN/Routeur                         |
| `LOOP_AN_ROUTER_UPGRADE`                                                      | Mise à niveau boucle AN/Routeur                     |
| `MAINTENANCE`                                                                 | Maintenance                                         |
| `OPTIC_FIBER_WORK_WITH_OUTAGE_DURING_NON_WORKING_HOURS`                       | Travaux fibre avec coupure hors heures ouvrées      |
| `PLANNED_CORRECTIVE_MAINTENANCE`                                              | Maintenance corrective planifiée                    |
| `SENSITIVE_LOOP_LINK_UPGRADE`                                                 | Mise à niveau lien boucle sensible                  |
| `TRANSMISSION_CORRECTIVE_MAINTENANCE`                                         | Maintenance corrective transmission                 |
| `TRANSMISSION_CUSTOMER_TRANSFERT_MIGRATION_WITH_IMPACT`                       | Migration transfert client transmission avec impact |
| `TRANSMISSION_FIBRE_MAINTENANCE`                                              | Maintenance fibre transmission                      |
| `TRANSMISSION_LINK_COMMISSIONING_PRODUCTION_DECOMMISSIONING_WORK_WITH_IMPACT` | Mise en service/désactivation lien avec impact      |
| `TRANSMISSION_LINK_TRANSFERT_MIGRATION_WITH_IMPACT`                           | Migration transfert lien avec impact                |
| `TRANSMISSION_MAINTENANCE`                                                    | Maintenance transmission                            |
| `TRANSMISSION_MOVING_WITH_IMPACT`                                             | Déplacement transmission avec impact                |
| `TRANSMISSION_SWITCH_UPGRADE_WITH_IMPACT`                                     | Mise à niveau switch transmission avec impact       |
| `WITH_IMPACT`                                                                 | Avec impact                                         |

#### GenericIncidentStatusEnum

Statuts d'incident générique:

| Valeur      | Description |
| ----------- | ----------- |
| `closed`    | Fermé       |
| `detected`  | Détecté     |
| `validated` | Validé      |

#### AsyncTaskStatusEnum

Statuts des tâches asynchrones:

| Valeur    | Description |
| --------- | ----------- |
| `error`   | Erreur      |
| `ok`      | Succeeded   |
| `pending` | En attente  |

---

### 5.2 Structures de Données

#### Address

Structure d'adresse:

| Champ            | Type     | Requis | Description                               |
| ---------------- | -------- | ------ | ----------------------------------------- |
| `building`       | `string` | Non    | Nom du bâtiment, si applicable            |
| `city`           | `string` | Non    | Nom de la ville                           |
| `door`           | `string` | Non    | Identifiant de la porte, si applicable    |
| `floor`          | `string` | Non    | Identifiant de l'étage, si applicable     |
| `housingComplex` | `string` | Non    | Nom du complexe immobilier, si applicable |
| `inseeCode`      | `string` | Non    | Code INSEE                                |
| `ownerName`      | `string` | Non    | Nom du propriétaire (peut être restreint) |
| `stairs`         | `string` | Non    | Identifiant de l'escalier, si applicable  |
| `streetCode`     | `string` | Non    | Code de la rue (identifiant unique)       |
| `streetName`     | `string` | Non    | Nom de la rue                             |
| `streetNumber`   | `string` | Non    | Numéro du bâtiment                        |
| `zipCode`        | `string` | Non    | Code postal                               |

---

#### AddressWithCoordinates

Adresse avec coordonnées GPS:

| Champ               | Type     | Requis | Description                         |
| ------------------- | -------- | ------ | ----------------------------------- |
| `buildingName`      | `string` | Non    | Nom du bâtiment                     |
| `buildingReference` | `string` | Non    | Référence du bâtiment               |
| `city`              | `string` | Non    | Nom de la ville                     |
| `distance`          | `string` | Non    | Distance depuis la source originale |
| `inseeCode`         | `string` | Non    | Code INSEE                          |
| `latitude`          | `string` | Non    | Latitude                            |
| `longitude`         | `string` | Non    | Longitude                           |
| `streetCode`        | `string` | Non    | Code de la rue                      |
| `streetName`        | `string` | Non    | Nom de la rue                       |
| `streetNumber`      | `string` | Non    | Numéro du bâtiment                  |
| `zipCode`           | `string` | Non    | Code postal                         |

---

#### Building

Détails d'un bâtiment:

| Champ       | Type                                        | Requis | Description                                    |
| ----------- | ------------------------------------------- | ------ | ---------------------------------------------- |
| `name`      | `string`                                    | Non    | Nom du bâtiment                                |
| `nro`       | `string`                                    | Non    | NRO (réseau de distribution optique principal) |
| `reference` | `string`                                    | Non    | Identifiant unique du bâtiment                 |
| `stairs`    | `connectivity.eligibility.BuildingStair[]`  | Non    | Escaliers du bâtiment                          |
| `type`      | `connectivity.eligibility.BuildingTypeEnum` | Non    | Type de bâtiment                               |

---

#### BuildingStair

Détails d'un escalier:

| Champ    | Type       | Requis | Description                    |
| -------- | ---------- | ------ | ------------------------------ |
| `floors` | `string[]` | Non    | Liste des identifiants d'étage |
| `stair`  | `string`   | Non    | Identifiant de l'escalier      |

---

#### City

Représentation d'une ville:

| Champ       | Type     | Requis | Description                          |
| ----------- | -------- | ------ | ------------------------------------ |
| `city`      | `string` | Non    | Nom de la ville                      |
| `inseeCode` | `string` | Non    | Code INSEE de la ville               |
| `locality`  | `string` | Non    | Localité (sous-ensemble d'une ville) |
| `zipCode`   | `string` | Non    | Code postal de la ville              |

---

#### CopperInfo

Informations sur le cuivre:

| Champ               | Type                                       | Requis | Description                                            |
| ------------------- | ------------------------------------------ | ------ | ------------------------------------------------------ |
| `availablePairs`    | `long`                                     | Non    | Nombre de paires disponibles                           |
| `maxAvailablePairs` | `long`                                     | Non    | Nombre maximum de paires disponibles par dessaturation |
| `nra`               | `string`                                   | Non    | NRA (Nœud de raccordement abonné)                      |
| `sectionsLengths`   | `connectivity.eligibility.SectionLength[]` | Non    | Longueurs des sections de ligne cuivre                 |
| `status`            | `connectivity.eligibility.LineStatusEnum`  | Non    | Statut de la ligne                                     |
| `underConstruction` | `boolean`                                  | Non    | En construction ?                                      |
| `unlistedNumber`    | `boolean`                                  | Non    | Numéro non répertorié ("sur liste rouge")              |

---

#### EligibilityRecall

Rappel d'éligibilité:

| Champ                   | Type                                         | Requis | Description                   |
| ----------------------- | -------------------------------------------- | ------ | ----------------------------- |
| `completed`             | `boolean`                                    | Non    | Rappel terminé ?              |
| `completedDate`         | `datetime`                                   | Non    | Date de complétion            |
| `creationDate`          | `datetime`                                   | Non    | Date de création              |
| `customer`              | `string`                                     | Non    | ID client                     |
| `dedicatedfiberRequest` | `boolean`                                    | Non    | Vérification FTTO/FTTE dédiée |
| `id`                    | `long`                                       | Non    | ID                            |
| `profiberRequest`       | `boolean`                                    | Non    | Vérification FTTH Pro Fiber   |
| `reference`             | `string`                                     | Non    | Référence                     |
| `referenceType`         | `connectivity.eligibility.ReferenceTypeEnum` | Non    | Type de référence             |
| `updatedDate`           | `datetime`                                   | Non    | Date de mise à jour           |

---

#### EligibilityTest

Résultats d'un test d'éligibilité:

| Champ                  | Type                                | Requis | Description                    |
| ---------------------- | ----------------------------------- | ------ | ------------------------------ |
| `eligibilityReference` | `string`                            | Non    | Référence unique d'éligibilité |
| `endpoint`             | `connectivity.eligibility.Endpoint` | Non    | Informations sur l'endpoint    |
| `offers`               | `connectivity.eligibility.Offer[]`  | Non    | Informations sur les offres    |

---

#### Endpoint

Informations sur l'endpoint:

| Champ           | Type                                                 | Requis | Description                  |
| --------------- | ---------------------------------------------------- | ------ | ---------------------------- |
| `address`       | `connectivity.eligibility.Address`                   | Non    | Adresse                      |
| `copperInfo`    | `connectivity.eligibility.CopperInfo`                | Non    | Informations cuivre          |
| `fiberInfo`     | `connectivity.eligibility.FiberInfo`                 | Non    | Informations fibre           |
| `portability`   | `connectivity.eligibility.Portability`               | Non    | Détails de portabilité       |
| `reference`     | `string`                                             | Non    | Référence de l'endpoint      |
| `referenceType` | `connectivity.eligibility.EndpointReferenceTypeEnum` | Non    | Type de référence d'endpoint |

---

#### FiberInfo

Informations sur la fibre:

| Champ               | Type                                        | Requis | Description                              |
| ------------------- | ------------------------------------------- | ------ | ---------------------------------------- |
| `buildingName`      | `string`                                    | Non    | Nom du bâtiment                          |
| `buildingReference` | `string`                                    | Non    | Identifiant unique du bâtiment           |
| `buildingType`      | `connectivity.eligibility.BuildingTypeEnum` | Non    | Type de bâtiment                         |
| `latitude`          | `string`                                    | Non    | Latitude                                 |
| `longitude`         | `string`                                    | Non    | Longitude                                |
| `nro`               | `string`                                    | Non    | NRO (Nœud de raccordement optique)       |
| `operatorCode`      | `string`                                    | Non    | Code de l'opérateur                      |
| `operatorName`      | `string`                                    | Non    | Nom de l'opérateur                       |
| `pmReference`       | `string`                                    | Non    | Référence du point de mutualisation (PM) |

---

#### Line

Détails d'une ligne cuivre:

| Champ        | Type                                  | Requis | Description         |
| ------------ | ------------------------------------- | ------ | ------------------- |
| `address`    | `connectivity.eligibility.Address`    | Non    | Adresse             |
| `copperInfo` | `connectivity.eligibility.CopperInfo` | Non    | Informations cuivre |
| `lineNumber` | `string`                              | Non    | Numéro de ligne     |

---

#### MeetingCapacities

Options de réservation de réunion:

| Champ       | Type      | Requis | Description                      |
| ----------- | --------- | ------ | -------------------------------- |
| `eRdv`      | `boolean` | Non    | Possibilité de réserver en ligne |
| `phoneCall` | `boolean` | Non    | Possibilité d'appel téléphonique |

---

#### MeetingSlot

Créneau horaire pour une réunion:

| Champ       | Type       | Requis | Description                                         |
| ----------- | ---------- | ------ | --------------------------------------------------- |
| `endDate`   | `datetime` | Non    | Date de fin                                         |
| `slotId`    | `string`   | Non    | ID de réunion (opérateur fibre)                     |
| `startDate` | `datetime` | Non    | Date de début                                       |
| `uiCode`    | `string`   | Non    | Chaîne opaque représentant une unité d'intervention |

---

#### Meetings

Liste des créneaux disponibles:

| Champ                | Type                                         | Requis | Description                                 |
| -------------------- | -------------------------------------------- | ------ | ------------------------------------------- |
| `canBookFakeMeeting` | `boolean`                                    | Non    | Possibilité de réserver une réunion fictive |
| `capacities`         | `connectivity.eligibility.MeetingCapacities` | Non    | Options de réservation                      |
| `meetingSlots`       | `connectivity.eligibility.MeetingSlot[]`     | Non    | Créneaux horaires                           |

---

#### Message

Message:

| Champ              | Type                                       | Requis | Description                      |
| ------------------ | ------------------------------------------ | ------ | -------------------------------- |
| `availabilityDate` | `datetime`                                 | Non    | Date de disponibilité de l'offre |
| `code`             | `connectivity.eligibility.MessageCodeEnum` | Non    | Code du message                  |
| `message`          | `string`                                   | Non    | Message                          |

---

#### Offer

Offre:

| Champ         | Type                                        | Requis | Description            |
| ------------- | ------------------------------------------- | ------ | ---------------------- |
| `eligibility` | `connectivity.eligibility.OfferEligibility` | Non    | Éligibilité de l'offre |
| `product`     | `connectivity.eligibility.OfferProduct`     | Non    | Produit de l'offre     |

---

#### OfferEligibility

Éligibilité de l'offre:

| Champ                   | Type                                            | Requis | Description                                        |
| ----------------------- | ----------------------------------------------- | ------ | -------------------------------------------------- |
| `activationTypes`       | `connectivity.eligibility.ActivationTypeEnum[]` | Non    | Liste des types d'activation (cuivre)              |
| `eligible`              | `boolean`                                       | Non    | Endpoint éligible ?                                |
| `estimatedDownloadRate` | `double`                                        | Non    | Débit de téléchargement estimé (cuivre uniquement) |
| `estimatedUploadRate`   | `double`                                        | Non    | Débit d'envoi estimé (cuivre uniquement)           |
| `multiOtp`              | `boolean`                                       | Non    | Éligible à plusieurs OTP (fibre uniquement)        |
| `reasons`               | `connectivity.eligibility.Message[]`            | Non    | Raisons de non-éligibilité                         |
| `underConditions`       | `connectivity.eligibility.Message[]`            | Non    | Avertissements                                     |

---

#### OfferProduct

Produit de l'offre:

| Champ            | Type                                                      | Requis | Description                                          |
| ---------------- | --------------------------------------------------------- | ------ | ---------------------------------------------------- |
| `code`           | `string`                                                  | Non    | Code du produit (identifiant unique)                 |
| `downloadRate`   | `double`                                                  | Non    | Débit de téléchargement en Mb                        |
| `grt`            | `string[]`                                                | Non    | Liste des GRT (temps de restauration garanti)        |
| `guaranteed`     | `boolean`                                                 | Non    | Débits garantis ?                                    |
| `name`           | `string`                                                  | Non    | Nom                                                  |
| `operator`       | `string`                                                  | Non    | Fournisseur du produit                               |
| `pairs`          | `long`                                                    | Non    | Nombre de paires cuivre requises (cuivre uniquement) |
| `provider`       | `string`                                                  | Non    | Fournisseur du produit                               |
| `type`           | `connectivity.eligibility.OfferProductTypeEnum`           | Non    | Type de produit                                      |
| `unbundlingType` | `connectivity.eligibility.OfferProductUnbundlingTypeEnum` | Non    | Type de débundling                                   |
| `uploadRate`     | `double`                                                  | Non    | Débit d'envoi en Mb                                  |

---

#### Portability

Détails de portabilité:

| Champ               | Type                                              | Requis | Description                       |
| ------------------- | ------------------------------------------------- | ------ | --------------------------------- |
| `eligibility`       | `connectivity.eligibility.PortabilityEligibility` | Non    | Éligibilité de portabilité        |
| `quarantineEndDate` | `datetime`                                        | Non    | Fin de quarantaine, si applicable |
| `type`              | `connectivity.eligibility.PortabilityTypeEnum`    | Non    | Type de portabilité               |

---

#### PortabilityEligibility

Éligibilité de portabilité:

| Champ             | Type                                 | Requis | Description                |
| ----------------- | ------------------------------------ | ------ | -------------------------- |
| `eligible`        | `boolean`                            | Non    | Portabilité éligible ?     |
| `reasons`         | `connectivity.eligibility.Message[]` | Non    | Raisons de non-éligibilité |
| `underConditions` | `connectivity.eligibility.Message[]` | Non    | Avertissements             |

---

#### SectionLength

Longueur d'une section de ligne cuivre:

| Champ      | Type   | Requis | Description             |
| ---------- | ------ | ------ | ----------------------- |
| `diameter` | `long` | Non    | Diamètre en millimètres |
| `length`   | `long` | Non    | Longueur en mètres      |

---

#### Street

Détails d'une rue:

| Champ           | Type     | Requis | Description               |
| --------------- | -------- | ------ | ------------------------- |
| `streetAltCode` | `string` | Non    | Code alternatif de la rue |
| `streetCode`    | `string` | Non    | Code unique de la rue     |
| `streetName`    | `string` | Non    | Nom de la rue             |

---

#### StreetNumberDetails

Détails d'un numéro de rue:

| Champ     | Type     | Requis | Description                                        |
| --------- | -------- | ------ | -------------------------------------------------- |
| `hexacle` | `string` | Non    | Hexacle (identifiant unique français de l'adresse) |
| `number`  | `string` | Non    | Numéro de rue                                      |

---

#### StreetNumber

Numéro de rue:

| Champ    | Type     | Requis | Description   |
| -------- | -------- | ------ | ------------- |
| `number` | `string` | Non    | Numéro de rue |

---

#### WorkPlanned

Structure d'opération planifiée:

| Champ               | Type                                            | Requis | Description                    |
| ------------------- | ----------------------------------------------- | ------ | ------------------------------ |
| `dateBegin`         | `string`                                        | Non    | Date de début                  |
| `dateEnd`           | `string`                                        | Non    | Date de fin                    |
| `departments`       | `string[]`                                      | Non    | Codes de départements impactés |
| `description`       | `string`                                        | Non    | Description                    |
| `duration`          | `duration`                                      | Non    | Durée                          |
| `fallback`          | `boolean`                                       | Non    | Plan de basculement            |
| `fallbackDateBegin` | `datetime`                                      | Non    | Début du basculement           |
| `fallbackDateEnd`   | `datetime`                                      | Non    | Fin du basculement             |
| `id`                | `long`                                          | Non    | ID de l'opération              |
| `impact`            | `string`                                        | Non    | Impact                         |
| `interventionType`  | `connectivity.maintenance.InterventionTypeEnum` | Non    | Type d'intervention            |
| `nras`              | `string[]`                                      | Non    | NRA/NRO impactés               |
| `operator`          | `connectivity.OperatorEnum`                     | Non    | Opérateur                      |
| `technology`        | `string`                                        | Non    | Technologie impactée           |
| `zone`              | `string`                                        | Non    | Zone                           |

---

#### GenericIncident

Structure d'incident générique:

| Champ                     | Type                                                | Requis | Description                |
| ------------------------- | --------------------------------------------------- | ------ | -------------------------- |
| `comment`                 | `string`                                            | Non    | Commentaire optionnel      |
| `creationDate`            | `string`                                            | Non    | Date de création           |
| `default`                 | `string`                                            | Non    | Type de fault              |
| `departments`             | `string[]`                                          | Non    | Départements impactés      |
| `endDate`                 | `string`                                            | Non    | Date de fin                |
| `estimatedResolutionDate` | `string`                                            | Non    | Date estimée de résolution |
| `id`                      | `long`                                              | Non    | ID de l'incident           |
| `isNational`              | `boolean`                                           | Non    | Incident national          |
| `nature`                  | `string`                                            | Non    | Détails des conséquences   |
| `nra`                     | `string[]`                                          | Non    | NRA/NRO impactés           |
| `operators`               | `connectivity.OperatorEnum[]`                       | Non    | Opérateurs impactés        |
| `status`                  | `connectivity.monitoring.GenericIncidentStatusEnum` | Non    | Statut                     |
| `taskId`                  | `long`                                              | Non    | ID tâche                   |
| `taskReference`           | `string`                                            | Non    | Référence tâche            |
| `technologies`            | `string[]`                                          | Non    | Technologies impactées     |

---

#### AsyncTaskArray

Structure générique pour les réponses asynchrones:

| Champ    | Type                       | Requis | Description          |
| -------- | -------------------------- | ------ | -------------------- |
| `error`  | `string`                   | Non    | Erreur (si présente) |
| `result` | `any[]`                    | Non    | Résultats            |
| `status` | `xdsl.AsyncTaskStatusEnum` | Non    | Statut de la tâche   |

---

## 6. Authentification

### 6.1 Authentification Standard

La plupart des endpoints nécessitent une authentification via les credentials OVHcloud:

- **Application Key**: `applicationKey`
- **Application Secret**: `applicationSecret`
- **Consumer Key**: `consumerKey`

### 6.2 Authentification sans Credentials

Certains endpoints sont accessibles sans authentification:

- Tests d'éligibilité par adresse, bâtiment, ligne, OTP
- Recherche d'adresses et de bâtiments
- Consultation des travaux planifiés publics
- Consultation des incidents génériques publics
- Tests d'éligibilité par référence

### 6.3 Endpoints Partenaires

Certains endpoints sont réservés aux partenaires et nécessitent une authentification spécifique:

- `/connectivity/eligibility/test/address/partners`
- `/connectivity/eligibility/test/building/partners` (BETA)
- `/connectivity/eligibility/test/line/partners`
- `/connectivity/eligibility/test/otp/partners` (BETA)
- `/connectivity/maintenance/workPlanned/partners`
- `/connectivity/monitoring/genericIncident/partners`

---

## Exemples d'Utilisation

### Exemple 1: Tester l'éligibilité d'une adresse

```bash
curl -X POST "https://eu.api.ovh.com/v1/connectivity/eligibility/test/address" \
  -H "Content-Type: application/json" \
  -d '{
    "streetCode": "12345",
    "streetNumber": "10"
  }'
```

### Exemple 2: Rechercher des bâtiments par adresse

```bash
curl -X POST "https://eu.api.ovh.com/v1/connectivity/eligibility/search/buildings" \
  -H "Content-Type: application/json" \
  -d '{
    "streetCode": "12345",
    "streetNumber": "10"
  }'
```

### Exemple 3: Lister les incidents génériques

```bash
curl -X GET "https://eu.api.ovh.com/v1/connectivity/monitoring/genericIncident/public?status=validated" \
  -H "Content-Type: application/json"
```

### Exemple 4: Créer un rappel d'éligibilité

```bash
curl -X POST "https://eu.api.ovh.com/v1/connectivity/eligibility/recall" \
  -H "Content-Type: application/json" \
  -H "X-Application-Key: YOUR_APP_KEY" \
  -H "X-Application-Secret: YOUR_APP_SECRET" \
  -H "X-Consumer-Key: YOUR_CONSUMER_KEY" \
  -d '{
    "reference": "REF-12345",
    "referenceType": "address",
    "streetCode": "12345",
    "streetNumber": "10"
  }'
```

---

## Notes Importantes

1. **Réponses asynchrones**: Certains endpoints retournent des tâches asynchrones (`xdsl.AsyncTask*`). Vérifiez le statut avant de récupérer les résultats.

2. **Hexacle**: L'hexacle est un identifiant unique français des adresses. Vous pouvez le récupérer via les endpoints de recherche de numéros de rue.

3. **Codes INSEE**: Pour rechercher des rues, vous avez besoin du code INSEE de la ville. Utilisez `POST /connectivity/eligibility/search/cities` pour le récupérer.

4. **Types de produits**: Les types d'offres disponibles sont: ADSL, VDSL, SDSL, FTTH, FTTE, FTTO.

5. **Statuts des offres**: Les offres peuvent être:
   - Éligibles ou non
   - Débit garanti ou non garanti
   - Sous conditions

6. **Codes de message**: Les codes d'inéligibilité indiquent les raisons pour lesquelles un endpoint n'est pas éligible à une offre.

7. **Versions d'API**: Certains endpoints sont en version BETA. Consultez les informations de statut pour connaître le niveau de maturité.

---

## Voir aussi

- [Documentation officielle OVHcloud API](https://eu.api.ovh.com/)
- [Spécifications complètes de l'API](https://eu.api.ovh.com/developers)
- [Guide des erreurs OVHcloud](https://eu.api.ovh.com/keys)

---

_Document généré à partir de `api_docs/v1/connectivity.json` - Version API 1.0_

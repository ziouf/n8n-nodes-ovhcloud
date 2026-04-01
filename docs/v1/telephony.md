# OVHcloud Telephony API v1

> **Note:** Ce document décrit les endpoints et opérations disponibles dans l'API OVHcloud pour les services de téléphonie. Les opérations sont classées par fonctionnalité et incluent des détails sur les méthodes HTTP, les paramètres, les types de réponse, et les permissions IAM requises.

---

## Table of Contents

- [Overview](#overview)
- [Authentication](#authentication)
- [Operations](#operations)
  - [Billing Accounts](#billing-accounts)
  - [Accessories](#accessories)
  - [Aliases](#aliases)
  - [Lines](#lines)
  - [Directories](#directories)
  - [Fax Offers](#fax-offers)
  - [Line Offers](#line-offers)
  - [Number Zones](#number-zones)
  - [Detailed Zones](#detailed-zones)
  - [Special Numbers](#special-numbers)
  - [Procedures](#procedures)
  - [Reseller Panel](#reseller-panel)
  - [Softphone Applications](#softphone-applications)
  - [Sounds](#sounds)
  - [Spare Phones](#spare-phones)
  - [Trunks](#trunks)

---

## Overview

This API provides access to OVHcloud telephony services, including billing accounts, line management, number zones, and spare phone operations. It is designed for developers and operators who need to integrate telephony features into their applications or manage telephony services programmatically.

---

## Authentication

La plupart des endpoints de l'API OVHcloud Telephony nécessitent une authentification via les clés OVHcloud API. Vous devez fournir les informations d'authentification suivantes dans votre requête :

- **Application Key** (X-OVH-APP-KEY)
- **Application Secret** (X-OVH-APP-SECRET)
- **Consumer Key** (X-OVH-CONSUMER-KEY)

Ces informations sont généralement fournies via un objet de type `OVHcloudApi` dans le contexte de votre application n8n.

---

## Operations

### Billing Accounts

#### **GET `/telephony`**

**Description:** Récupère les comptes de facturation de téléphonie associés à votre `nichandle`.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type                                | Obligatoire | Description                              |
| ------- | ----------------------------------- | ----------- | ---------------------------------------- |
| iamTags | map[string][]iam.resource.TagFilter | Non         | Filtre les ressources selon les tags IAM |

**Type de réponse:** `string[]`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:get",
    "required": true
}
```

**Exemple d'utilisation:**

```bash
curl -X GET "https://api.ovh.com/1.0/telephony" \
     -H "X-OVH-APP-KEY: your_app_key" \
     -H "X-OVH-APP-SECRET: your_app_secret" \
     -H "X-OVH-CONSUMER-KEY: your_consumer_key"
```

---

### Accessories

#### **GET `/telephony/accessories`**

**Description:** Récupère tous les accessoires téléphoniques disponibles selon le pays spécifié.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type                               | Obligatoire | Description                                   |
| ------- | ---------------------------------- | ----------- | --------------------------------------------- |
| brand   | string                             | Non         | Filtre les accessoires par marque             |
| country | telephony.ServiceNumberCountryEnum | Oui         | Le pays pour lequel récupérer les accessoires |

**Type de réponse:** `telephony.AccessoryOffer[]`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:aliases/get",
    "required": true
}
```

**Exemple d'utilisation:**

```bash
curl -X GET "https://api.ovh.com/1.0/telephony/accessories?country=FR" \
     -H "X-OVH-APP-KEY: your_app_key" \
     -H "X-OVH-APP-SECRET: your_app_secret" \
     -H "X-OVH-CONSUMER-KEY: your_consumer_key"
```

---

### Aliases

#### **GET `/telephony/aliases`**

**Description:** Récupère les alias de téléphonie associés à votre compte de facturation.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type                                | Obligatoire | Description                              |
| ------- | ----------------------------------- | ----------- | ---------------------------------------- |
| iamTags | map[string][]iam.resource.TagFilter | Non         | Filtre les ressources selon les tags IAM |

**Type de réponse:** `string[]`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:aliases/get",
    "required": true
}
```

---

#### **GET `/telephony/aliases/{serviceName}`**

**Description:** Récupère les propriétés d'un alias de téléphonie spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom         | Type   | Obligatoire | Description                   |
| ----------- | ------ | ----------- | ----------------------------- |
| serviceName | string | Oui         | Le numéro de ligne de l'alias |

**Type de réponse:** `telephony.TelephonyGenericServiceWithIAM`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:aliases/get",
    "required": true
}
```

---

#### **POST `/telephony/aliases/{serviceName}/changeContact`**

**Description:** Lance une procédure de changement de contact pour un alias de téléphonie.

**Méthode HTTP:** POST

**Paramètres:**

| Nom            | Type                       | Obligatoire | Description                                       |
| -------------- | -------------------------- | ----------- | ------------------------------------------------- |
| contactAdmin   | coreTypes.AccountId:string | Non         | Le contact à définir comme contact administrateur |
| contactBilling | coreTypes.AccountId:string | Non         | Le contact à définir comme contact de facturation |
| contactTech    | coreTypes.AccountId:string | Non         | Le contact à définir comme contact technique      |
| serviceName    | string                     | Oui         | Le numéro de ligne de l'alias                     |

**Type de réponse:** `long[]`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:aliases/changeContact",
    "required": true
}
```

**Exemple d'utilisation:**

```bash
curl -X POST "https://api.ovh.com/1.0/telephony/aliases/{serviceName}/changeContact" \
     -H "X-OVH-APP-KEY: your_app_key" \
     -H "X-OVH-APP-SECRET: your_app_secret" \
     -H "X-OVH-CONSUMER-KEY: your_consumer_key" \
     -d '{"contactAdmin": "admin_id", "contactBilling": "billing_id", "contactTech": "tech_id"}'
```

---

#### **GET `/telephony/aliases/{serviceName}/serviceInfos`**

**Description:** Récupère les informations de service pour un alias de téléphonie spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom         | Type   | Obligatoire | Description                   |
| ----------- | ------ | ----------- | ----------------------------- |
| serviceName | string | Oui         | Le numéro de ligne de l'alias |

**Type de réponse:** `services.Service`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:aliases/serviceInfos/get",
    "required": true
}
```

---

#### **PUT `/telephony/aliases/{serviceName}/serviceInfos`**

**Description:** Met à jour les informations de service pour un alias de téléphonie spécifique.

**Méthode HTTP:** PUT

**Paramètres:**

| Nom         | Type             | Obligatoire | Description                         |
| ----------- | ---------------- | ----------- | ----------------------------------- |
| serviceName | string           | Oui         | Le numéro de ligne de l'alias       |
| body        | services.Service | Oui         | Les nouvelles propriétés de l'objet |

**Type de réponse:** `void`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:aliases/serviceInfos/edit",
    "required": true
}
```

---

### Lines

#### **GET `/telephony/lines`**

**Description:** Récupère les lignes téléphoniques associées à votre compte de facturation.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type                                | Obligatoire | Description                              |
| ------- | ----------------------------------- | ----------- | ---------------------------------------- |
| iamTags | map[string][]iam.resource.TagFilter | Non         | Filtre les ressources selon les tags IAM |

**Type de réponse:** `string[]`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:lines/get",
    "required": true
}
```

---

#### **GET `/telephony/lines/{serviceName}`**

**Description:** Récupère les propriétés d'une ligne téléphonique spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom         | Type   | Obligatoire | Description        |
| ----------- | ------ | ----------- | ------------------ |
| serviceName | string | Oui         | Le numéro de ligne |

**Type de réponse:** `telephony.TelephonyGenericServiceWithIAM`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:lines/get",
    "required": true
}
```

---

#### **POST `/telephony/lines/{serviceName}/changeContact`**

**Description:** Lance une procédure de changement de contact pour une ligne téléphonique.

**Méthode HTTP:** POST

**Paramètres:**

| Nom            | Type                       | Obligatoire | Description                                       |
| -------------- | -------------------------- | ----------- | ------------------------------------------------- |
| contactAdmin   | coreTypes.AccountId:string | Non         | Le contact à définir comme contact administrateur |
| contactBilling | coreTypes.AccountId:string | Non         | Le contact à définir comme contact de facturation |
| contactTech    | coreTypes.AccountId:string | Non         | Le contact à définir comme contact technique      |
| serviceName    | string                     | Oui         | Le numéro de ligne                                |

**Type de réponse:** `long[]`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:lines/changeContact",
    "required": true
}
```

---

#### **GET `/telephony/lines/{serviceName}/serviceInfos`**

**Description:** Récupère les informations de service pour une ligne téléphonique spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom         | Type   | Obligatoire | Description        |
| ----------- | ------ | ----------- | ------------------ |
| serviceName | string | Oui         | Le numéro de ligne |

**Type de réponse:** `services.Service`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:lines/serviceInfos/get",
    "required": true
}
```

---

#### **PUT `/telephony/lines/{serviceName}/serviceInfos`**

**Description:** Met à jour les informations de service pour une ligne téléphonique spécifique.

**Méthode HTTP:** PUT

**Paramètres:**

| Nom         | Type             | Obligatoire | Description                         |
| ----------- | ---------------- | ----------- | ----------------------------------- |
| serviceName | string           | Oui         | Le numéro de ligne                  |
| body        | services.Service | Oui         | Les nouvelles propriétés de l'objet |

**Type de réponse:** `void`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:lines/serviceInfos/edit",
    "required": true
}
```

---

### Directories

#### **GET `/telephony/directories/availableZipCodes`**

**Description:** Récupère les codes postaux disponibles pour un numéro de ligne dans un pays spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type                               | Obligatoire | Description                                                |
| ------- | ---------------------------------- | ----------- | ---------------------------------------------------------- |
| country | telephony.ServiceNumberCountryEnum | Oui         | Le pays pour lequel récupérer les codes postaux            |
| number  | string                             | Oui         | Le numéro de ligne (peut être une plage terminée par XXXX) |

**Type de réponse:** `string[]`

**Exemple d'utilisation:**

```bash
curl -X GET "https://api.ovh.com/1.0/telephony/directories/availableZipCodes?country=FR&number=01234567" \
     -H "X-OVH-APP-KEY: your_app_key" \
     -H "X-OVH-APP-SECRET: your_app_secret"
```

---

#### **GET `/telephony/directories/cities`**

**Description:** Récupère les informations sur les villes pour un code postal spécifique dans un pays donné.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type                               | Obligatoire | Description                |
| ------- | ---------------------------------- | ----------- | -------------------------- |
| country | telephony.ServiceNumberCountryEnum | Oui         | Le pays de la ville        |
| zipCode | string                             | Oui         | Le code postal de la ville |

**Type de réponse:** `telephony.City[]`

**Exemple d'utilisation:**

```bash
curl -X GET "https://api.ovh.com/1.0/telephony/directories/cities?country=FR&zipCode=75001" \
     -H "X-OVH-APP-KEY: your_app_key" \
     -H "X-OVH-APP-SECRET: your_app_secret"
```

---

### Fax Offers

#### **GET `/telephony/fax/offers`**

**Description:** Récupère les offres de fax disponibles pour un pays spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type                        | Obligatoire | Description                              |
| ------- | --------------------------- | ----------- | ---------------------------------------- |
| country | telephony.NumberCountryEnum | Oui         | Le pays pour lequel récupérer les offres |

**Type de réponse:** `telephony.LineOffer[]`

**Exemple d'utilisation:**

```bash
curl -X GET "https://api.ovh.com/1.0/telephony/fax/offers?country=FR" \
     -H "X-OVH-APP-KEY: your_app_key" \
     -H "X-OVH-APP-SECRET: your_app_secret"
```

---

### Line Offers

#### **GET `/telephony/line/offer/phones`**

**Description:** Récupère les marques de téléphones compatibles avec les offres de ligne pour un pays spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type                               | Obligatoire | Description                               |
| ------- | ---------------------------------- | ----------- | ----------------------------------------- |
| country | telephony.ServiceNumberCountryEnum | Oui         | Le pays pour lequel récupérer les marques |
| offer   | string                             | Oui         | L'offre de ligne sélectionnée             |

**Type de réponse:** `telephony.LinePhone[]`

**Exemple d'utilisation:**

```bash
curl -X GET "https://api.ovh.com/1.0/telephony/line/offer/phones?country=FR&offer=offer123" \
     -H "X-OVH-APP-KEY: your_app_key" \
     -H "X-OVH-APP-SECRET: your_app_secret"
```

---

#### **GET `/telephony/line/offers`**

**Description:** Récupère les offres de ligne disponibles pour un pays spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type                        | Obligatoire | Description                              |
| ------- | --------------------------- | ----------- | ---------------------------------------- |
| country | telephony.NumberCountryEnum | Oui         | Le pays pour lequel récupérer les offres |

**Type de réponse:** `telephony.LineOffer[]`

**Exemple d'utilisation:**

```bash
curl -X GET "https://api.ovh.com/1.0/telephony/line/offers?country=FR" \
     -H "X-OVH-APP-KEY: your_app_key" \
     -H "X-OVH-APP-SECRET: your_app_secret"
```

---

### Number Zones

#### **GET `/telephony/number/zones`**

**Description:** Récupère les zones géographiques disponibles pour un pays spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type                        | Obligatoire | Description                                                                |
| ------- | --------------------------- | ----------- | -------------------------------------------------------------------------- |
| country | telephony.NumberCountryEnum | Oui         | Le pays pour lequel récupérer les zones                                    |
| axiom   | string                      | Non         | Filtre les zones selon un critère spécifique (nom de ville ou code postal) |

**Type de réponse:** `string[]`

**Exemple d'utilisation:**

```bash
curl -X GET "https://api.ovh.com/1.0/telephony/number/zones?country=FR" \
     -H "X-OVH-APP-KEY: your_app_key" \
     -H "X-OVH-APP-SECRET: your_app_secret"
```

---

#### **GET `/telephony/number/detailedZones`**

**Description:** Récupère les zones géographiques détaillées pour un pays spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type                        | Obligatoire | Description                                                                |
| ------- | --------------------------- | ----------- | -------------------------------------------------------------------------- |
| country | telephony.NumberCountryEnum | Oui         | Le pays pour lequel récupérer les zones                                    |
| axiom   | string                      | Non         | Filtre les zones selon un critère spécifique (nom de ville ou code postal) |

**Type de réponse:** `telephony.NumberDetailedZone[]`

**Exemple d'utilisation:**

```bash
curl -X GET "https://api.ovh.com/1.0/telephony/number/detailedZones?country=FR" \
     -H "X-OVH-APP-KEY: your_app_key" \
     -H "X-OVH-APP-SECRET: your_app_secret"
```

---

#### **GET `/telephony/number/specificNumbers`**

**Description:** Récupère les numéros spécifiques disponibles pour un pays et un type de numéro donné.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type                        | Obligatoire | Description                                           |
| ------- | --------------------------- | ----------- | ----------------------------------------------------- |
| country | telephony.NumberCountryEnum | Oui         | Le pays pour lequel récupérer les numéros             |
| type    | telephony.NumberTypeEnum    | Oui         | Le type de numéro (ex: géographique, mobile, premium) |
| zone    | string                      | Non         | La zone spécifique (ex: code postal)                  |
| range   | string                      | Non         | La plage de numéros (ex: numéros terminant par 1234)  |

**Type de réponse:** `telephony.SpecificNumber[]`

**Exemple d'utilisation:**

```bash
curl -X GET "https://api.ovh.com/1.0/telephony/number/specificNumbers?country=FR&type=GEOGRAPHIC" \
     -H "X-OVH-APP-KEY: your_app_key" \
     -H "X-OVH-APP-SECRET: your_app_secret"
```

---

#### **GET `/telephony/number/ranges`**

**Description:** Récupère les plages de numéros spécifiques disponibles pour un pays.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type                        | Obligatoire | Description                              |
| ------- | --------------------------- | ----------- | ---------------------------------------- |
| country | telephony.NumberCountryEnum | Oui         | Le pays pour lequel récupérer les plages |

**Type de réponse:** `string[]`

**Exemple d'utilisation:**

```bash
curl -X GET "https://api.ovh.com/1.0/telephony/number/ranges?country=FR" \
     -H "X-OVH-APP-KEY: your_app_key" \
     -H "X-OVH-APP-SECRET: your_app_secret"
```

---

### Procedures

#### **GET `/telephony/procedure`**

**Description:** Liste les procédures associées à votre `nichandle`.

**Méthode HTTP:** GET

**Paramètres:** Aucun

**Type de réponse:** `long[]`

**Permissions IAM requises:**

```json
{
    "name": "account:apiovh:voip/procedure/get",
    "required": true
}
```

---

#### **POST `/telephony/procedure`**

**Description:** Crée une nouvelle procédure de téléphonie.

**Méthode HTTP:** POST

**Paramètres:**

| Nom  | Type                | Obligatoire | Description                             |
| ---- | ------------------- | ----------- | --------------------------------------- |
| body | telephony.Procedure | Oui         | Les propriétés de la nouvelle procédure |

**Type de réponse:** `telephony.Procedure`

**Permissions IAM requises:**

```json
{
    "name": "account:apiovh:voip/procedure/create",
    "required": true
}
```

**Exemple d'utilisation:**

```bash
curl -X POST "https://api.ovh.com/1.0/telephony/procedure" \
     -H "X-OVH-APP-KEY: your_app_key" \
     -H "X-OVH-APP-SECRET: your_app_secret" \
     -H "X-OVH-CONSUMER-KEY: your_consumer_key" \
     -d '{"iban": "FR7612345678901234567890123", "bic": "BNPAFRPPXXX", "ownerName": "Jean Dupont", "ownerAddress": "12 Rue de Example, 75001 Paris, France", "paymentMeanID": 12345}'
```

---

#### **GET `/telephony/procedure/required`**

**Description:** Indique si une procédure est nécessaire pour commander des produits de téléphonie.

**Méthode HTTP:** GET

**Paramètres:** Aucun

**Type de réponse:** `boolean`

**Permissions IAM requises:**

```json
{
    "name": "account:apiovh:voip/procedure/required/get",
    "required": true
}
```

---

#### **GET `/telephony/procedure/{id}`**

**Description:** Récupère les propriétés d'une procédure spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom | Type | Obligatoire | Description          |
| --- | ---- | ----------- | -------------------- |
| id  | long | Oui         | L'ID de la procédure |

**Type de réponse:** `telephony.Procedure`

**Permissions IAM requises:**

```json
{
    "name": "account:apiovh:voip/procedure/get",
    "required": true
}
```

---

#### **POST `/telephony/procedure/{id}/cancel`**

**Description:** Annule une procédure spécifique.

**Méthode HTTP:** POST

**Paramètres:**

| Nom | Type | Obligatoire | Description                    |
| --- | ---- | ----------- | ------------------------------ |
| id  | long | Oui         | L'ID de la procédure à annuler |

**Permissions IAM requises:**

```json
{
    "name": "account:apiovh:voip/procedure/cancel",
    "required": true
}
```

---

### Reseller Panel

#### **GET `/telephony/resellerPanel/status`**

**Description:** Récupère le statut du panneau revendeur pour un compte spécifique.

**Méthode HTTP:** GET

**Paramètres:** Aucun

**Type de réponse:** `telephony.ResellerPanelStatus`

**Permissions IAM requises:**

```json
{
    "name": "account:apiovh:voip/resellerPanel/status/get",
    "required": true
}
```

---

#### **POST `/telephony/resellerPanel/generatePassword`**

**Description:** Génère un nouveau mot de passe pour le panneau revendeur.

**Méthode HTTP:** POST

**Paramètres:** Aucun

**Type de réponse:** `void`

**Permissions IAM requises:**

```json
{
    "name": "account:apiovh:voip/resellerPanel/generatePassword",
    "required": true
}
```

---

### Softphone Applications

#### **GET `/telephony/softphone/storeLinks`**

**Description:** Récupère les liens vers les magasins d'applications pour les applications softphone.

**Méthode HTTP:** GET

**Paramètres:** Aucun

**Type de réponse:** `telephony.SoftphoneStoreLinks`

**Permissions IAM requises:**

```json
{
    "name": "account:apiovh:voip/softphone/storeLinks/get",
    "required": true
}
```

---

#### **GET `/telephony/softphone/themes`**

**Description:** Récupère les IDs des thèmes softphone disponibles.

**Méthode HTTP:** GET

**Paramètres:** Aucun

**Type de réponse:** `long[]`

**Permissions IAM requises:**

```json
{
    "name": "account:apiovh:voip/softphone/themes/get",
    "required": true
}
```

---

#### **GET `/telephony/softphone/themes/{themeId}`**

**Description:** Récupère les propriétés d'un thème softphone spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type | Obligatoire | Description   |
| ------- | ---- | ----------- | ------------- |
| themeId | long | Oui         | L'ID du thème |

**Type de réponse:** `telephony.SoftphoneTheme`

**Permissions IAM requises:**

```json
{
    "name": "account:apiovh:voip/softphone/themes/get",
    "required": true
}
```

---

### Sounds

#### **GET `/telephony/sounds`**

**Description:** Récupère les sons attachés à ce compte de téléphonie.

**Méthode HTTP:** GET

**Paramètres:** Aucun

**Type de réponse:** `string[]`

**Permissions IAM requises:**

```json
{
    "name": "account:apiovh:voip/sounds/get",
    "required": true
}
```

---

#### **POST `/telephony/sounds`**

**Description:** Crée un nouveau son.

**Méthode HTTP:** POST

**Paramètres:**

| Nom         | Type   | Obligatoire | Description              |
| ----------- | ------ | ----------- | ------------------------ |
| filename    | string | Oui         | Le nom du fichier du son |
| description | string | Non         | La description du son    |

**Type de réponse:** `telephony.Sound`

**Permissions IAM requises:**

```json
{
    "name": "account:apiovh:voip/sounds/create",
    "required": true
}
```

**Exemple d'utilisation:**

```bash
curl -X POST "https://api.ovh.com/1.0/telephony/sounds" \
     -H "X-OVH-APP-KEY: your_app_key" \
     -H "X-OVH-APP-SECRET: your_app_secret" \
     -H "X-OVH-CONSUMER-KEY: your_consumer_key" \
     -d '{"filename": "new_sound.wav", "description": "Sound description"}'
```

---

#### **GET `/telephony/sounds/{id}`**

**Description:** Récupère les propriétés d'un son spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom | Type | Obligatoire | Description |
| --- | ---- | ----------- | ----------- |
| id  | long | Oui         | L'ID du son |

**Type de réponse:** `telephony.Sound`

**Permissions IAM requises:**

```json
{
    "name": "account:apiovh:voip/sounds/get",
    "required": true
}
```

---

#### **PUT `/telephony/sounds/{id}`**

**Description:** Modifie les propriétés d'un son spécifique.

**Méthode HTTP:** PUT

**Paramètres:**

| Nom  | Type            | Obligatoire | Description                         |
| ---- | --------------- | ----------- | ----------------------------------- |
| id   | long            | Oui         | L'ID du son                         |
| body | telephony.Sound | Oui         | Les nouvelles propriétés de l'objet |

**Type de réponse:** `void`

**Permissions IAM requises:**

```json
{
    "name": "account:apiovh:voip/sounds/edit",
    "required": true
}
```

---

#### **DELETE `/telephony/sounds/{id}`**

**Description:** Supprime un son spécifique.

**Méthode HTTP:** DELETE

**Paramètres:**

| Nom | Type | Obligatoire | Description |
| --- | ---- | ----------- | ----------- |
| id  | long | Oui         | L'ID du son |

**Permissions IAM requises:**

```json
{
    "name": "account:apiovh:voip/sounds/delete",
    "required": true
}
```

---

### Spare Phones

#### **GET `/telephony/spare`**

**Description:** Liste les services disponibles (téléphonie, fax, lignes, etc.) pour votre compte.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type                                | Obligatoire | Description                              |
| ------- | ----------------------------------- | ----------- | ---------------------------------------- |
| iamTags | map[string][]iam.resource.TagFilter | Non         | Filtre les ressources selon les tags IAM |

**Type de réponse:** `string[]`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:spare/get",
    "required": true
}
```

---

#### **GET `/telephony/spare/brands`**

**Description:** Récupère les marques de téléphones disponibles pour les services de téléphone de rechange.

**Méthode HTTP:** GET

**Paramètres:** Aucun

**Type de réponse:** `string[]`

---

#### **GET `/telephony/spare/{spare}`**

**Description:** Récupère les propriétés d'un téléphone de rechange spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom   | Type   | Obligatoire | Description                             |
| ----- | ------ | ----------- | --------------------------------------- |
| spare | string | Oui         | Le nom interne du téléphone de rechange |

**Type de réponse:** `spare.telephony.TelephonySpareWithIAM`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:spare/get",
    "required": true
}
```

---

#### **DELETE `/telephony/spare/{spare}`**

**Description:** Supprime un téléphone de rechange spécifique comme s'il n'appartenait plus à OVH.

**Méthode HTTP:** DELETE

**Paramètres:**

| Nom   | Type   | Obligatoire | Description                             |
| ----- | ------ | ----------- | --------------------------------------- |
| spare | string | Oui         | Le nom interne du téléphone de rechange |

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:spare/delete",
    "required": true
}
```

---

#### **GET `/telephony/spare/{spare}/compatibleReplacement`**

**Description:** Retourne la liste des domaines de téléphone compatibles pour être remplacés par ce téléphone de rechange.

**Méthode HTTP:** GET

**Paramètres:**

| Nom   | Type   | Obligatoire | Description                             |
| ----- | ------ | ----------- | --------------------------------------- |
| spare | string | Oui         | Le nom interne du téléphone de rechange |

**Type de réponse:** `string[]`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:spare/compatibleReplacement/get",
    "required": true
}
```

---

#### **POST `/telephony/spare/{spare}/replace`**

**Description:** Remplace un téléphone par son téléphone de rechange.

**Méthode HTTP:** POST

**Paramètres:**

| Nom    | Type   | Obligatoire | Description                                           |
| ------ | ------ | ----------- | ----------------------------------------------------- |
| spare  | string | Oui         | Le nom interne du téléphone de rechange               |
| domain | string | Oui         | Le téléphone à remplacer par le téléphone de rechange |
| ip     | ipv4   | Oui         | L'adresse IP publique du téléphone                    |

**Long Description:** Remplace le téléphone par son téléphone de rechange. Le téléphone défectueux devient un téléphone de rechange s'il a été acheté. Une RMA est créée si le téléphone défectueux est sous garantie de dépôt.

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:spare/replace",
    "required": true
}
```

---

#### **GET `/telephony/spare/{spare}/serviceInfos`**

**Description:** Récupère les informations de service pour un téléphone de rechange spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom   | Type   | Obligatoire | Description                             |
| ----- | ------ | ----------- | --------------------------------------- |
| spare | string | Oui         | Le nom interne du téléphone de rechange |

**Type de réponse:** `services.Service`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:spare/serviceInfos/get",
    "required": true
}
```

---

#### **PUT `/telephony/spare/{spare}/serviceInfos`**

**Description:** Met à jour les informations de service pour un téléphone de rechange spécifique.

**Méthode HTTP:** PUT

**Paramètres:**

| Nom   | Type             | Obligatoire | Description                             |
| ----- | ---------------- | ----------- | --------------------------------------- |
| spare | string           | Oui         | Le nom interne du téléphone de rechange |
| body  | services.Service | Oui         | Les nouvelles propriétés de l'objet     |

**Type de réponse:** `void`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:spare/serviceInfos/edit",
    "required": true
}
```

---

### Trunks

#### **GET `/telephony/trunks`**

**Description:** Récupère les trunks de téléphonie associés à votre compte.

**Méthode HTTP:** GET

**Paramètres:**

| Nom     | Type                                | Obligatoire | Description                              |
| ------- | ----------------------------------- | ----------- | ---------------------------------------- |
| iamTags | map[string][]iam.resource.TagFilter | Non         | Filtre les ressources selon les tags IAM |

**Type de réponse:** `string[]`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:trunks/get",
    "required": true
}
```

---

#### **GET `/telephony/trunks/{serviceName}`**

**Description:** Récupère les propriétés d'un trunk spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom         | Type   | Obligatoire | Description        |
| ----------- | ------ | ----------- | ------------------ |
| serviceName | string | Oui         | Le numéro de trunk |

**Type de réponse:** `telephony.TelephonyGenericServiceWithIAM`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:trunks/get",
    "required": true
}
```

---

#### **POST `/telephony/trunks/{serviceName}/changeContact`**

**Description:** Lance une procédure de changement de contact pour un trunk spécifique.

**Méthode HTTP:** POST

**Paramètres:**

| Nom            | Type                       | Obligatoire | Description                                       |
| -------------- | -------------------------- | ----------- | ------------------------------------------------- |
| contactAdmin   | coreTypes.AccountId:string | Non         | Le contact à définir comme contact administrateur |
| contactBilling | coreTypes.AccountId:string | Non         | Le contact à définir comme contact de facturation |
| contactTech    | coreTypes.AccountId:string | Non         | Le contact à définir comme contact technique      |
| serviceName    | string                     | Oui         | Le numéro de trunk                                |

**Type de réponse:** `long[]`

**Permissions IAM requises:**

```json
{
    "name": "voip:apiovh:trunks/changeContact",
    "required": true
}
```

---

#### **GET `/telephony/trunks/{serviceName}/serviceInfos`**

**Description:** Récupère les informations de service pour un trunk spécifique.

**Méthode HTTP:** GET

**Paramètres:**

| Nom         | Type   | Obligatoire | Description        |
| ----------- | ------ | ----------- | ------------------ |
| serviceName | string | Oui         | Le numéro de trunk |

**Type de réponse:** `services.Service`

**Permissions IAM requises:**

```json
{
  "name": "voip:apiovh:trunks/serviceInfos/get",

```

# API Authentication (Auth)

Cette ressource permet de gérer l'authentification et les identités dans l'API OVHcloud.

## Informations de base

- **Path de base**: `/auth`
- **URL complète**: `https://eu.api.ovh.com/v1/auth`
- **Version API**: `1.0`

## Endpoints

### 1. Demander une nouvelle credential

**Endpoint**: `POST /auth/credential`

Demande une nouvelle credential pour votre application.

#### Description

Cette méthode permet de créer une nouvelle credential pour accéder à l'API OVHcloud.

#### Authentification

- **Requiert authentification**: Non (`noAuthentication: true`)

#### Paramètres

**Body** (obligatoire)

- **Type**: `auth.ApiCredentialRequestParams`
- **Description**: Request Body

##### Propriétés du corps de la requête

| Propriété     | Type                       | Requis | Lecture seule | Description                                                      |
| ------------- | -------------------------- | ------ | ------------- | ---------------------------------------------------------------- |
| `accessRules` | `auth.AccessRuleRequest[]` | Oui    | Non           | Routes API souhaitées                                            |
| `allowedIPs`  | `ipBlock[]`                | Non    | Non           | Si défini, liste des blocs IP qui peuvent utiliser la credential |
| `redirection` | `string`                   | Non    | Non           | Adresse où le client sera redirigé après l'authentification      |

#### Réponse

**Type**: `auth.ApiCredentialRequest`

| Propriété       | Type                       | Lecture seule | Description                                                     |
| --------------- | -------------------------- | ------------- | --------------------------------------------------------------- |
| `consumerKey`   | `password`                 | Oui           | Consumer Key à utiliser pour les appels authentifiés ultérieurs |
| `state`         | `auth.CredentialStateEnum` | Oui           | État de la credential                                           |
| `validationUrl` | `string`                   | Oui           | Adresse où rediriger le client pour valider l'accès             |

#### États possibles de la credential

- `pendingValidation` - En attente de validation
- `validated` - Validée
- `refused` - Refusée
- `expired` - Expirée

---

### 2. Récupérer les détails de la credential actuelle

**Endpoint**: `GET /auth/currentCredential`

Obtient les détails de la credential actuelle.

#### Description

Cette méthode retourne les informations de la credential actuellement utilisée pour l'authentification.

#### Authentification

- **Requiert authentification**: Oui (`noAuthentication: false`)

#### Paramètres

Aucun paramètre requis.

#### Réponse

**Type**: `auth.ApiCredential`

| Propriété       | Type                       | Lecture seule | Description                                                                   |
| --------------- | -------------------------- | ------------- | ----------------------------------------------------------------------------- |
| `credentialId`  | `long`                     | Oui           | ID de cette credential                                                        |
| `applicationId` | `long`                     | Oui           | ID de l'application API associée                                              |
| `status`        | `auth.CredentialStateEnum` | Oui           | État de cette credential                                                      |
| `ovhSupport`    | `boolean`                  | Oui           | Indique si cette credential a été créée par vous ou par l'équipe support OVH  |
| `creation`      | `datetime`                 | Oui           | Date de création de cette credential                                          |
| `expiration`    | `datetime`                 | Oui           | Date d'expiration de cette credential (null si aucune expiration)             |
| `lastUse`       | `datetime`                 | Oui           | Dernière date d'utilisation de cette credential                               |
| `allowedIPs`    | `ipBlock[]`                | Non           | Si défini, liste des blocs IP autorisés à appeler l'API avec cette credential |
| `rules`         | `auth.AccessRule[]`        | Oui           | Routes API autorisées pour cette credential                                   |

##### Détails des règles d'accès (`rules`)

| Propriété | Type                  | Lecture seule | Description            |
| --------- | --------------------- | ------------- | ---------------------- |
| `method`  | `auth.HTTPMethodEnum` | Oui           | Méthode HTTP autorisée |
| `path`    | `string`              | Oui           | Route API autorisée    |

---

### 3. Détails de l'authentification actuelle

**Endpoint**: `GET /auth/details`

Détails sur l'authentification actuelle.

#### Description

Cette méthode retourne des informations détaillées sur l'identité authentifiée et les permissions associées.

#### Authentification

- **Requiert authentification**: Oui (`noAuthentication: false`)

#### Paramètres

Aucun paramètre requis.

#### Réponse

**Type**: `auth.Details`

| Propriété       | Type                | Lecture seule | Description                                                                                                                                                              |
| --------------- | ------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `account`       | `string`            | Oui           | Identifiant du client                                                                                                                                                    |
| `method`        | `auth.MethodEnum`   | Oui           | Méthode d'authentification utilisée                                                                                                                                      |
| `user`          | `string`            | Non           | Nom d'utilisateur de l'identité authentifiée                                                                                                                             |
| `description`   | `string`            | Non           | Description de l'identité authentifiée                                                                                                                                   |
| `roles`         | `string[]`          | Non           | Rôles de l'identité authentifiée                                                                                                                                         |
| `identities`    | `string[]`          | Oui           | Identités de la session actuelle : correspond à toutes les identités des fournisseurs d'authentification qui peuvent être utilisées pour correspondre aux politiques IAM |
| `allowedRoutes` | `auth.AccessRule[]` | Non           | Routes API autorisées, null signifie tout est autorisé                                                                                                                   |

##### Méthodes d'authentification disponibles (`method`)

- `account` - Authentification par compte
- `oauth2_client_credentials` - OAuth 2.0 Client Credentials
- `provider` - Fournisseur d'identité
- `user` - Authentification utilisateur

---

### 4. Déconnexion

**Endpoint**: `POST /auth/logout`

Expire la credential actuelle.

#### Description

Cette méthode expire la credential actuellement en cours d'utilisation, déconnectant ainsi l'utilisateur.

#### Authentification

- **Requiert authentification**: Oui (`noAuthentication: false`)

#### Paramètres

Aucun paramètre requis.

#### Réponse

Aucune réponse (`void`).

---

### 5. Obtenir l'heure du serveur OVH

**Endpoint**: `GET /auth/time`

Obtient l'heure actuelle du serveur OVH, depuis l'époque UNIX.

#### Description

Cette méthode retourne l'heure actuelle du serveur OVH exprimée en timestamp UNIX (nombre de secondes depuis l'époque UNIX, le 1er janvier 1970).

#### Authentification

- **Requiert authentification**: Non (`noAuthentication: true`)

#### Paramètres

Aucun paramètre requis.

#### Réponse

**Type**: `long`

- **Valeur**: Timestamp UNIX (nombre de secondes depuis l'époque UNIX)

---

### 6. Générer un jeton unique

**Endpoint**: `POST /auth/token`

Génère un jeton unique pour s'authentifier sur les applications OVHcloud.

#### Description

Cette méthode génère un jeton unique (one-time token) utilisable pour l'authentification sur les applications OVHcloud. Actuellement, cette fonctionnalité n'est supportée que par le chatbot.

#### Authentification

- **Requiert authentification**: Oui (`noAuthentication: false`)

#### Paramètres

Aucun paramètre requis.

#### Réponse

**Type**: `auth.Token`

| Propriété | Type       | Lecture seule | Description  |
| --------- | ---------- | ------------- | ------------ |
| `token`   | `password` | Oui           | Jeton unique |

---

## Modèles de données (Models)

### auth.AccessRule

**Description**: Règle d'accès autorisant une application

| Propriété | Type                  | Lecture seule | Description            |
| --------- | --------------------- | ------------- | ---------------------- |
| `method`  | `auth.HTTPMethodEnum` | Oui           | Méthode HTTP autorisée |
| `path`    | `string`              | Oui           | Route API autorisée    |

---

### auth.AccessRuleRequest

**Description**: Règle d'accès demandée pour l'application

| Propriété | Type                  | Requis | Lecture seule | Description            |
| --------- | --------------------- | ------ | ------------- | ---------------------- |
| `method`  | `auth.HTTPMethodEnum` | Non    | Non           | Méthode HTTP autorisée |
| `path`    | `string`              | Non    | Non           | Route API autorisée    |

---

### auth.ApiApplication

**Description**: Application API

| Propriété        | Type                         | Lecture seule | Description                      |
| ---------------- | ---------------------------- | ------------- | -------------------------------- |
| `applicationId`  | `long`                       | Oui           | ID de cette application          |
| `applicationKey` | `string`                     | Oui           | Clé de cette application         |
| `name`           | `string`                     | Oui           | Nom de cette application         |
| `description`    | `string`                     | Oui           | Description de cette application |
| `status`         | `auth.ApplicationStatusEnum` | Oui           | État de cette application        |

##### États possibles d'une application (`status`)

- `active` - Actif
- `blocked` - Bloqué
- `inactive` - Inactif
- `trusted` - Fait confiance

---

### auth.ApiCredential

**Description**: Credential API

| Propriété       | Type                       | Lecture seule | Description                                                                   |
| --------------- | -------------------------- | ------------- | ----------------------------------------------------------------------------- |
| `credentialId`  | `long`                     | Oui           | ID de cette credential                                                        |
| `applicationId` | `long`                     | Oui           | ID de l'application API associée                                              |
| `status`        | `auth.CredentialStateEnum` | Oui           | État de cette credential                                                      |
| `ovhSupport`    | `boolean`                  | Oui           | Indique si cette credential a été créée par vous ou par l'équipe support OVH  |
| `creation`      | `datetime`                 | Oui           | Date de création de cette credential                                          |
| `expiration`    | `datetime`                 | Oui           | Date d'expiration de cette credential                                         |
| `lastUse`       | `datetime`                 | Oui           | Dernière date d'utilisation de cette credential                               |
| `allowedIPs`    | `ipBlock[]`                | Non           | Si défini, liste des blocs IP autorisés à appeler l'API avec cette credential |
| `rules`         | `auth.AccessRule[]`        | Oui           | Routes API autorisées pour cette credential                                   |

---

### auth.ApiCredentialRequest

**Description**: Demande de credential pour obtenir un accès à l'API

| Propriété       | Type                       | Lecture seule | Description                                                     |
| --------------- | -------------------------- | ------------- | --------------------------------------------------------------- |
| `consumerKey`   | `password`                 | Oui           | Consumer Key à utiliser pour les appels authentifiés ultérieurs |
| `state`         | `auth.CredentialStateEnum` | Oui           | État de la credential                                           |
| `validationUrl` | `string`                   | Oui           | Adresse où rediriger le client pour valider l'accès             |

---

### auth.ApiCredentialRequestParams

**Description**: Demande de credential pour obtenir un accès à l'API

| Propriété     | Type                       | Requis | Lecture seule | Description                                                      |
| ------------- | -------------------------- | ------ | ------------- | ---------------------------------------------------------------- |
| `accessRules` | `auth.AccessRuleRequest[]` | Oui    | Non           | Routes API souhaitées                                            |
| `allowedIPs`  | `ipBlock[]`                | Non    | Non           | Si défini, liste des blocs IP qui peuvent utiliser la credential |
| `redirection` | `string`                   | Non    | Non           | Adresse où le client sera redirigé après l'authentification      |

---

### auth.Certificate

**Description**: Certificat X509

| Propriété    | Type       | Lecture seule | Description                     |
| ------------ | ---------- | ------------- | ------------------------------- |
| `subject`    | `string`   | Oui           | Sujet du certificat             |
| `expiration` | `datetime` | Oui           | Date d'expiration du certificat |

---

### auth.Credential

**Description**: Demande de credential pour obtenir un accès à l'API

| Propriété       | Type                       | Lecture seule | Description           |
| --------------- | -------------------------- | ------------- | --------------------- |
| `consumerKey`   | `string`                   | Non           | Consumer Key          |
| `state`         | `auth.CredentialStateEnum` | Non           | État de la credential |
| `validationUrl` | `string`                   | Non           | Adresse de validation |

---

### auth.Details

**Description**: Détails sur l'authentification utilisée

| Propriété       | Type                | Lecture seule | Description                                            |
| --------------- | ------------------- | ------------- | ------------------------------------------------------ |
| `account`       | `string`            | Oui           | Identifiant du client                                  |
| `method`        | `auth.MethodEnum`   | Oui           | Méthode d'authentification                             |
| `user`          | `string`            | Non           | Nom d'utilisateur de l'identité authentifiée           |
| `description`   | `string`            | Non           | Description de l'identité authentifiée                 |
| `roles`         | `string[]`          | Non           | Rôles de l'identité authentifiée                       |
| `identities`    | `string[]`          | Oui           | Identités de la session actuelle                       |
| `allowedRoutes` | `auth.AccessRule[]` | Non           | Routes API autorisées, null signifie tout est autorisé |

---

### auth.Group

**Description**: Groupe IAM

| Propriété      | Type            | Lecture seule | Description                                                                                      |
| -------------- | --------------- | ------------- | ------------------------------------------------------------------------------------------------ |
| `name`         | `string`        | Oui           | Nom du groupe                                                                                    |
| `urn`          | `string`        | Oui           | URN d'identité IAM du groupe                                                                     |
| `role`         | `auth.RoleEnum` | Non           | Rôle du groupe                                                                                   |
| `defaultGroup` | `boolean`       | Oui           | Indique s'il s'agit d'un groupe par défaut. Ce type de groupe ne peut pas être édité ou supprimé |
| `description`  | `string`        | Non           | Description du groupe                                                                            |
| `creation`     | `datetime`      | Oui           | Date de création de ce groupe                                                                    |
| `lastUpdate`   | `datetime`      | Oui           | Dernière mise à jour de ce groupe                                                                |

##### Rôles disponibles (`role`)

- `ADMIN` - Administrateur
- `REGULAR` - Utilisateur régulier
- `UNPRIVILEGED` - Sans privilèges
- `NONE` - Aucun rôle

---

### auth.GroupRequest

**Description**: Nouvelle création de groupe IAM

| Propriété     | Type            | Requis | Lecture seule | Description           |
| ------------- | --------------- | ------ | ------------- | --------------------- |
| `name`        | `string`        | Oui    | Non           | Nom du groupe         |
| `role`        | `auth.RoleEnum` | Non    | Non           | Rôle du groupe        |
| `description` | `string`        | Non    | Non           | Description du groupe |

---

### auth.GroupUser

**Description**: Utilisateur d'un groupe IAM

| Propriété | Type     | Lecture seule | Description                           |
| --------- | -------- | ------------- | ------------------------------------- |
| `user`    | `string` | Non           | Nom d'utilisateur à ajouter au groupe |

---

### auth.HTTPMethodEnum

**Description**: Toutes les méthodes HTTP disponibles

| Valeur   | Description                 |
| -------- | --------------------------- |
| `DELETE` | Supprimer                   |
| `GET`    | Récupérer                   |
| `PATCH`  | Mettre à jour partiellement |
| `POST`   | Créer                       |
| `PUT`    | Mettre à jour complètement  |

---

### auth.MethodEnum

**Description**: Toutes les méthodes d'authentification disponibles

| Valeur                      | Description                  |
| --------------------------- | ---------------------------- |
| `account`                   | Authentification par compte  |
| `oauth2_client_credentials` | OAuth 2.0 Client Credentials |
| `provider`                  | Fournisseur d'identité       |
| `user`                      | Authentification utilisateur |

---

### auth.PersonalAccessToken

**Description**: Réponse d'un jeton d'accès personnel

| Propriété     | Type       | Lecture seule | Description                                  |
| ------------- | ---------- | ------------- | -------------------------------------------- |
| `name`        | `string`   | Oui           | Nom de ce jeton                              |
| `description` | `string`   | Oui           | Description du jeton d'accès personnel       |
| `creation`    | `datetime` | Oui           | Date de création de ce jeton                 |
| `lastUsed`    | `datetime` | Oui           | Dernière date d'utilisation du jeton         |
| `expiresAt`   | `datetime` | Oui           | Date d'expiration du jeton d'accès personnel |

---

### auth.PersonalAccessTokenModifyRequest

**Description**: Demande de modification de jeton d'accès personnel

| Propriété     | Type       | Requis | Lecture seule | Description                                  |
| ------------- | ---------- | ------ | ------------- | -------------------------------------------- |
| `name`        | `string`   | Non    | Non           | Nom du jeton d'accès personnel               |
| `description` | `string`   | Non    | Non           | Description du jeton d'accès personnel       |
| `expiresAt`   | `datetime` | Non    | Non           | Date d'expiration du jeton d'accès personnel |
| `expiresIn`   | `long`     | Non    | Non           | Durée (en secondes) de validité du jeton     |

---

### auth.PersonalAccessTokenRequest

**Description**: Demande de création de jeton d'accès personnel

| Propriété     | Type       | Requis | Lecture seule | Description                                  |
| ------------- | ---------- | ------ | ------------- | -------------------------------------------- |
| `name`        | `string`   | Oui    | Non           | Nom du jeton d'accès personnel               |
| `description` | `string`   | Oui    | Non           | Description du jeton d'accès personnel       |
| `expiresAt`   | `datetime` | Non    | Non           | Date d'expiration du jeton d'accès personnel |
| `expiresIn`   | `long`     | Non    | Non           | Durée (en secondes) de validité du jeton     |

---

### auth.PersonalAccessTokenResponse

**Description**: Jeton d'accès personnel utilisable sur les applications OVHcloud

| Propriété     | Type       | Lecture seule | Description                                  |
| ------------- | ---------- | ------------- | -------------------------------------------- |
| `name`        | `string`   | Oui           | Nom du jeton                                 |
| `description` | `string`   | Oui           | Description du jeton d'accès personnel       |
| `creation`    | `datetime` | Oui           | Date de création de ce jeton                 |
| `lastUsed`    | `datetime` | Oui           | Dernière date d'utilisation du jeton         |
| `expiresAt`   | `datetime` | Oui           | Date d'expiration du jeton d'accès personnel |
| `token`       | `password` | Oui           | Jeton d'accès personnel                      |

---

### auth.Provider

**Description**: Fournisseur d'identité IAM Federation

| Propriété                | Type                      | Lecture seule | Description                                                                                      |
| ------------------------ | ------------------------- | ------------- | ------------------------------------------------------------------------------------------------ |
| `name`                   | `string`                  | Non           | Nom du fournisseur                                                                               |
| `urn`                    | `string`                  | Oui           | URN d'identité IAM du fournisseur                                                                |
| `creation`               | `datetime`                | Oui           | Date de création du fournisseur d'identité                                                       |
| `lastUpdate`             | `datetime`                | Oui           | Dernière mise à jour du fournisseur d'identité                                                   |
| `disableUsers`           | `boolean`                 | Non           | Indique si les utilisateurs du compte ne doivent pas être utilisables comme méthode de connexion |
| `signRequests`           | `boolean`                 | Non           | Indique si les demandes d'authentification SAML doivent être signées                             |
| `userAttributeName`      | `string`                  | Non           | Nom de l'attribut SAML utilisateur                                                               |
| `groupAttributeName`     | `string`                  | Non           | Nom de l'attribut SAML groupe                                                                    |
| `extensions`             | `auth.ProviderExtensions` | Non           | Extensions SAML à intégrer dans les demandes SAML                                                |
| `idpSigningCertificates` | `auth.Certificate[]`      | Oui           | Certificat de signature de l'IdP                                                                 |
| `ssoServiceUrl`          | `string`                  | Oui           | URL du service Single Sign On de l'IdP                                                           |

---

### auth.ProviderExtensions

**Description**: Extension SAML 2.0 à ajouter aux demandes SAML lors de l'utilisation de ce fournisseur

| Propriété             | Type                                 | Lecture seule | Description                                                   |
| --------------------- | ------------------------------------ | ------------- | ------------------------------------------------------------- |
| `requestedAttributes` | `auth.ProviderRequestedAttributes[]` | Non           | Liste des attributs demandés SAML à ajouter aux demandes SAML |

---

### auth.ProviderRequest

**Description**: Demande de création d'un fournisseur IAM Federation

| Propriété            | Type                      | Requis | Lecture seule | Description                                                                                      |
| -------------------- | ------------------------- | ------ | ------------- | ------------------------------------------------------------------------------------------------ |
| `name`               | `string`                  | Oui    | Non           | Nom du fournisseur                                                                               |
| `metadata`           | `string`                  | Oui    | Non           | Certificat de signature de l'IdP                                                                 |
| `disableUsers`       | `boolean`                 | Non    | Non           | Indique si les utilisateurs du compte ne doivent pas être utilisables comme méthode de connexion |
| `signRequests`       | `boolean`                 | Non    | Non           | Indique si les demandes d'authentification SAML doivent être signées                             |
| `userAttributeName`  | `string`                  | Non    | Non           | Nom de l'attribut SAML utilisateur                                                               |
| `groupAttributeName` | `string`                  | Non    | Non           | Nom de l'attribut SAML groupe                                                                    |
| `extensions`         | `auth.ProviderExtensions` | Non    | Non           | Extensions SAML à intégrer dans les demandes SAML                                                |

---

### auth.ProviderRequestedAttributes

**Description**: Attribut demandé SAML 2.0 à ajouter aux demandes SAML lors de l'utilisation de ce fournisseur

| Propriété    | Type       | Requis | Lecture seule | Description                                                              |
| ------------ | ---------- | ------ | ------------- | ------------------------------------------------------------------------ |
| `name`       | `string`   | Oui    | Non           | Nom de l'attribut SAML demandé                                           |
| `isRequired` | `boolean`  | Oui    | Non           | Indique si cet attribut demandé est obligatoire (reste consultatif)      |
| `nameFormat` | `string`   | Non    | Non           | Format Name de l'attribut SAML demandé                                   |
| `values`     | `string[]` | Non    | Non           | Liste des valeurs d'AttributeValues autorisées pour cet attribut demandé |

---

### auth.RoleEnum

**Description**: Permission donnée sur le compte

| Valeur         | Description          |
| -------------- | -------------------- |
| `ADMIN`        | Administrateur       |
| `REGULAR`      | Utilisateur régulier |
| `UNPRIVILEGED` | Sans privilèges      |
| `NONE`         | Aucun rôle           |

---

### auth.ServiceProviderInfo

**Description**: Fournisseur IAM Federation

| Propriété                     | Type     | Lecture seule | Description                                                    |
| ----------------------------- | -------- | ------------- | -------------------------------------------------------------- |
| `entityId`                    | `string` | Oui           | Entity ID d'OVHcloud en tant que fournisseur de service        |
| `metadata`                    | `string` | Oui           | Métadonnées XML d'OVHcloud en tant que fournisseur de service  |
| `metadataUrl`                 | `string` | Oui           | URL des métadonnées SAMLv2 pour OVHcloud                       |
| `assertionConsumerServiceUrl` | `string` | Oui           | URL du service Assertion Consumer Service SAMLv2 pour OVHcloud |

---

### auth.Token

**Description**: Jeton unique utilisable sur les applications OVHcloud (actuellement supporté uniquement par le chatbot)

| Propriété | Type       | Lecture seule | Description  |
| --------- | ---------- | ------------- | ------------ |
| `token`   | `password` | Oui           | Jeton unique |

---

### auth.User

**Description**: Utilisateur IAM

| Propriété            | Type                  | Lecture seule | Description                                                   |
| -------------------- | --------------------- | ------------- | ------------------------------------------------------------- |
| `login`              | `string`              | Oui           | Suffixe de connexion de l'utilisateur                         |
| `urn`                | `string`              | Oui           | URN d'identité IAM de l'utilisateur                           |
| `group`              | `string`              | Non           | Groupe principal de l'utilisateur                             |
| `groups`             | `string[]`            | Oui           | Groupes de l'utilisateur                                      |
| `description`        | `string`              | Non           | Description de l'utilisateur                                  |
| `email`              | `string`              | Non           | Email de l'utilisateur                                        |
| `status`             | `auth.UserStatusEnum` | Oui           | État actuel de l'utilisateur                                  |
| `type`               | `auth.UserTypeEnum`   | Non           | Type d'utilisateur                                            |
| `creation`           | `datetime`            | Oui           | Date de création de cet utilisateur                           |
| `lastUpdate`         | `datetime`            | Oui           | Dernière date de mise à jour de l'utilisateur                 |
| `passwordLastUpdate` | `datetime`            | Oui           | Dernière date de mise à jour du mot de passe de l'utilisateur |

##### États possibles d'un utilisateur (`status`)

- `OK` - Actif
- `DISABLED` - Désactivé
- `PASSWORD_CHANGE_REQUIRED` - Changement de mot de passe requis

##### Types d'utilisateurs (`type`)

- `ROOT` - Racine
- `SERVICE` - Service
- `USER` - Utilisateur

---

### auth.UserRequest

**Description**: Demande de création d'un utilisateur IAM

| Propriété     | Type                | Requis | Lecture seule | Description                   |
| ------------- | ------------------- | ------ | ------------- | ----------------------------- |
| `login`       | `string`            | Oui    | Non           | Connexion de l'utilisateur    |
| `type`        | `auth.UserTypeEnum` | Non    | Non           | Type d'utilisateur à créer    |
| `group`       | `string`            | Non    | Non           | Groupe de l'utilisateur       |
| `email`       | `string`            | Non    | Non           | Email de l'utilisateur        |
| `description` | `string`            | Non    | Non           | Description de l'utilisateur  |
| `password`    | `password`          | Non    | Non           | Mot de passe de l'utilisateur |

---

### auth.UserStatusEnum

**Description**: État d'un utilisateur

| Valeur                     | Description                       |
| -------------------------- | --------------------------------- |
| `OK`                       | Actif                             |
| `DISABLED`                 | Désactivé                         |
| `PASSWORD_CHANGE_REQUIRED` | Changement de mot de passe requis |

---

### auth.UserTypeEnum

**Description**: Type d'utilisateur

| Valeur    | Description |
| --------- | ----------- |
| `ROOT`    | Racine      |
| `SERVICE` | Service     |
| `USER`    | Utilisateur |

---

### auth.CredentialStateEnum

**Description**: Tous les états dans lesquels une Credential peut se trouver

| Valeur              | Description              |
| ------------------- | ------------------------ |
| `pendingValidation` | En attente de validation |
| `validated`         | Validée                  |
| `refused`           | Refusée                  |
| `expired`           | Expirée                  |

---

### auth.ApplicationStatusEnum

**Description**: Tous les états dans lesquels une application API peut se trouver

| Valeur     | Description    |
| ---------- | -------------- |
| `active`   | Actif          |
| `blocked`  | Bloqué         |
| `inactive` | Inactif        |
| `trusted`  | Fait confiance |

---

### http.MethodEnum

**Description**: Toutes les méthodes HTTP disponibles

| Valeur   | Description   |
| -------- | ------------- |
| `DELETE` | Supprimer     |
| `GET`    | Récupérer     |
| `POST`   | Créer         |
| `PUT`    | Mettre à jour |

---

## Notes importantes

1. **Sécurité**: Les jetons et credentials doivent être stockés de manière sécurisée et ne jamais être exposés dans les logs ou les interfaces utilisateur.

2. **Expiration**: Les credentials ont une durée de vie limitée. Vérifiez régulièrement la date d'expiration et renouvelez si nécessaire.

3. **Permissions**: Les règles d'accès (`rules`) définissent quelles routes API une credential peut utiliser. Restreignez ces permissions au minimum nécessaire.

4. **IPs autorisées**: L'option `allowedIPs` permet de restreindre l'utilisation d'une credential à des plages IP spécifiques, renforçant ainsi la sécurité.

5. **Support OVH**: Les credentials créées par l'équipe support OVH (`ovhSupport: true`) ont des caractéristiques différentes de celles créées par les utilisateurs.

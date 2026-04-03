# API DBAAS (Database as a Service) - Documentation Technique

## Vue d'ensemble

L'API DBAAS permet la gestion complète des services de journalisation cloud. Cette API est stable et en version de production.

**Version API :** 1.0  
**Service :** DBAAS-LOGS  
**Authentification :** Requiert une authentification OVHcloud

---

## Authentification

Toutes les requêtes à cette API nécessitent une authentification via les credentials OVHcloud :

- `applicationKey`
- `applicationSecret`
- `consumerKey`

L'authentification utilise l'algorithme de signature OVH (SHA1).

---

## Ressources et Opérations

### 1. `/dbaas/logs` - Liste des services disponibles

| Méthode | Opération                      | Description                                                          |
| ------- | ------------------------------ | -------------------------------------------------------------------- |
| `GET`   | Liste des services disponibles | Retourne la liste des services disponibles avec les filtres IAM tags |

**Paramètres :**

- `iamTags` (query, optional) : `map[string][]iam.resource.TagFilter` - Filtrer les ressources par tags IAM

**Réponse :** `string[]` - Liste des noms de services disponibles

**Action IAM requise :** `ldp:apiovh:get`

---

### 2. `/dbaas/logs/{serviceName}` - Gestion des services

#### 2.1. Récupérer les détails d'un service

**Endpoint :** `GET /dbaas/logs/{serviceName}`

**Description :** Retourne l'objet du service connecté avec les informations IAM.

**Paramètres :**

- `serviceName` (path, required) : Nom du service

**Réponse :** `dbaas.logs.ServiceWithIAM`

**Erreurs possibles :**

- `Client::NotFound::ServiceNotFound` - Service non trouvé

**Action IAM requise :** `ldp:apiovh:get`

---

#### 2.2. Mettre à jour les propriétés d'un service

**Endpoint :** `PUT /dbaas/logs/{serviceName}`

**Description :** Met à jour les propriétés du service.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- **Body :** `dbaas.logs.Update` (required) - Objet de mise à jour

**Réponse :** `dbaas.logs.Operation`

**Erreurs possibles :**

- `Client::ValidationError::EmptyValue` - Valeur vide fournie
- `Client::ValidationError::RequiredField` - Champ manquant
- `Client::ValidationError::ValueNotInRange` - Valeur hors plage
- `Client::Forbidden::Busy` - Service occupé
- `Client::Forbidden::IAMNoRevert` - Reversal IAM non autorisé
- `Client::Forbidden::IAMNotAllowed` - Action IAM non autorisée
- `Client::Forbidden::ServiceEligibilityIAM` - Service éligibilité IAM
- `Client::NotFound::ServiceNotFound` - Service non trouvé
- `Client::Conflict::ServiceAlreadyMigrated` - Déjà migré

**Action IAM requise :** `ldp:apiovh:edit`

---

### 3. `/dbaas/logs/{serviceName}/changeContact` - Changement de contact

**Endpoint :** `POST /dbaas/logs/{serviceName}/changeContact`

**Description :** Lance une procédure de changement de contact.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- **Body :** `services.changeContact` (required) - Objet de changement de contact

**Réponse :** `long[]`

**Action IAM requise :** `ldp:apiovh:changeContact`

---

### 4. `/dbaas/logs/{serviceName}/cluster` - Gestion des clusters

#### 4.1. Liste des clusters autorisés

**Endpoint :** `GET /dbaas/logs/{serviceName}/cluster`

**Description :** Retourne la liste des clusters autorisés.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `namePattern` (query, optional) : Filtrer par nom (style "like")

**Réponse :** `uuid[]` - Liste des IDs de clusters

**Erreurs possibles :**

- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:cluster/get`

---

#### 4.2. Récupérer les détails d'un cluster

**Endpoint :** `GET /dbaas/logs/{serviceName}/cluster/{clusterId}`

**Description :** Retourne les détails d'un cluster autorisé.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `clusterId` (path, required) : UUID du cluster

**Réponse :** `dbaas.logs.Cluster`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::NotFound::ClusterDoesNotExists` - Cluster n'existe pas
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:cluster/get`

---

#### 4.3. Mettre à jour les détails d'un cluster

**Endpoint :** `PUT /dbaas/logs/{serviceName}/cluster/{clusterId}`

**Description :** Met à jour les détails d'un cluster autorisé.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `clusterId` (path, required) : UUID du cluster
- **Body :** `dbaas.logs.ClusterUpdate` (required) - Objet de mise à jour

**Réponse :** `dbaas.logs.Operation`

**Erreurs possibles :**

- `Client::ValidationError::InvalidIPAddress` - Adresse IP invalide
- `Client::ValidationError::InvalidIPAddressKernel` - Adresse IP kernel invalide
- `Client::ValidationError::InvalidIPAddressLocalhost` - Adresse IP localhost invalide
- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::ValidationError::NotOwner` - Pas propriétaire
- `Client::ValidationError::NothingToDo` - Rien à faire
- `Client::ValidationError::RequiredField` - Champ manquant
- `Client::Forbidden::PCIDSSSettingOnly` - Configuration PCIDSS uniquement
- `Client::Forbidden::ServiceNotMigrated` - Service non migré
- `Client::Forbidden::TooManyActive` - Trop d'actifs
- `Client::NotFound::ClusterDoesNotExists` - Cluster n'existe pas
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:cluster/edit`

---

### 5. `/dbaas/logs/{serviceName}/cluster/{clusterId}/retention` - Retentions disponibles

#### 5.1. Liste des retentions disponibles

**Endpoint :** `GET /dbaas/logs/{serviceName}/cluster/{clusterId}/retention`

**Description :** Liste tous les IDs de rétention disponibles pour un cluster donné.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `clusterId` (path, required) : UUID du cluster

**Réponse :** `uuid[]`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::Forbidden::AccessDenied` - Accès refusé
- `Client::NotFound::ClusterDoesNotExists` - Cluster n'existe pas
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:cluster/retention/get`

---

#### 5.2. Récupérer les détails d'une rétention

**Endpoint :** `GET /dbaas/logs/{serviceName}/cluster/{clusterId}/retention/{retentionId}`

**Description :** Retourne les détails d'une rétention.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `clusterId` (path, required) : UUID du cluster
- `retentionId` (path, required) : UUID de la rétention

**Réponse :** `dbaas.logs.ClusterRetention`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::Forbidden::AccessDenied` - Accès refusé
- `Client::NotFound::ClusterDoesNotExists` - Cluster n'existe pas
- `Client::NotFound::ClusterRetentionNotFound` - Rétention non trouvée
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:cluster/retention/get`

---

### 6. `/dbaas/logs/{serviceName}/encryptionKey` - Clés de chiffrement

#### 6.1. Liste des clés de chiffrement enregistrées

**Endpoint :** `GET /dbaas/logs/{serviceName}/encryptionKey`

**Description :** Retourne la liste des clés de chiffrement enregistrées.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `titlePattern` (query, optional) : Filtrer par titre (style "like")

**Réponse :** `uuid[]`

**Erreurs possibles :**

- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:encryptionKey/get`

---

#### 6.2. Ajouter une nouvelle clé de chiffrement

**Endpoint :** `POST /dbaas/logs/{serviceName}/encryptionKey`

**Description :** Ajoute une nouvelle clé de chiffrement.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- **Body :** `dbaas.logs.EncryptionKey` (required) - Objet de clé de chiffrement

**Réponse :** `dbaas.logs.Operation`

**Erreurs possibles :**

- `Client::ValidationError::EncryptionKeyFingerprintMismatch` - Empreinte ne correspond pas
- `Client::ValidationError::EncryptionKeyHasExpirationDate` - Clé avec date d'expiration
- `Client::ValidationError::InvalidEncryptionKey` - Clé invalide
- `Client::ValidationError::InvalidEncryptionKeyAlgorithm` - Algorithme invalide
- `Client::ValidationError::RequiredField` - Champ manquant
- `Client::Forbidden::Busy` - Service occupé
- `Client::Forbidden::ItemQuotaReached` - Quota d'éléments atteint
- `Client::Forbidden::ServiceUnavailable` - Service indisponible
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas
- `Client::Conflict::AlreadyExists` - Déjà existe

**Action IAM requise :** `ldp:apiovh:encryptionKey/create`

---

### 7. `/dbaas/logs/{serviceName}/encryptionKey/{encryptionKeyId}` - Gestion de la clé de chiffrement

#### 7.1. Supprimer une clé de chiffrement

**Endpoint :** `DELETE /dbaas/logs/{serviceName}/encryptionKey/{encryptionKeyId}`

**Description :** Supprime la clé de chiffrement spécifiée.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `encryptionKeyId` (path, required) : UUID de la clé de chiffrement

**Réponse :** `dbaas.logs.Operation`

**Erreurs possibles :**

- `Client::ValidationError::EncryptionKeyStillAssignedToCluster` - Clé assignée à un cluster
- `Client::ValidationError::EncryptionKeyStillAssignedToStream` - Clé assignée à un flux
- `Client::ValidationError::EncryptionKeyStillUsedByArchive` - Clé utilisée par archive
- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::Forbidden::ServiceUnavailable` - Service indisponible
- `Client::NotFound::EncryptionKeyDoesNotExists` - Clé non trouvée
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:encryptionKey/delete`

---

#### 7.2. Récupérer les détails d'une clé de chiffrement

**Endpoint :** `GET /dbaas/logs/{serviceName}/encryptionKey/{encryptionKeyId}`

**Description :** Retourne les détails d'une clé de chiffrement.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `encryptionKeyId` (path, required) : UUID de la clé de chiffrement

**Réponse :** `dbaas.logs.EncryptionKey`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::Forbidden::ServiceUnavailable` - Service indisponible
- `Client::NotFound::EncryptionKeyDoesNotExists` - Clé non trouvée
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:encryptionKey/get`

---

### 8. `/dbaas/logs/{serviceName}/input` - Entrées (Inputs)

#### 8.1. Liste des entrées enregistrées

**Endpoint :** `GET /dbaas/logs/{serviceName}/input`

**Description :** Retourne la liste des entrées enregistrées attachées à l'utilisateur connecté.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `titlePattern` (query, optional) : Filtrer par titre (style "like")

**Réponse :** `uuid[]`

**Erreurs possibles :**

- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:input/get`

---

#### 8.2. Enregistrer une nouvelle entrée

**Endpoint :** `POST /dbaas/logs/{serviceName}/input`

**Description :** Enregistre un nouvel objet d'entrée.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- **Body :** `dbaas.logs.InputCreation` (required) - Objet de création d'entrée

**Réponse :** `dbaas.logs.Operation`

**Erreurs possibles :**

- `Client::ValidationError::EmptyValue` - Valeur vide
- `Client::ValidationError::EngineIsDeprecated` - Moteur obsolète
- `Client::ValidationError::InvalidFormat` - Format invalide
- `Client::ValidationError::InvalidIPAddress` - Adresse IP invalide
- `Client::ValidationError::InvalidIPAddressKernel` - Adresse IP kernel invalide
- `Client::ValidationError::InvalidIPAddressLocalhost` - Adresse IP localhost invalide
- `Client::ValidationError::InvalidInputAutoscalingParameter` - Paramètre autoscaling invalide
- `Client::ValidationError::InvalidInstanceModeForInput` - Mode instance invalide
- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::ValidationError::MissingInputAutoscalingParameter` - Paramètre autoscaling manquant
- `Client::ValidationError::NotStreamOwner` - Pas propriétaire du flux
- `Client::ValidationError::RequiredField` - Champ manquant
- `Client::ValidationError::RestrictedPort` - Port restreint
- `Client::ValidationError::ValueNotInRange` - Valeur hors plage
- `Client::Forbidden::Busy` - Service occupé
- `Client::Forbidden::InputDenyForCluster` - Entrée refusée pour cluster
- `Client::Forbidden::ItemQuotaReached` - Quota atteint
- `Client::Forbidden::NotOnSameCluster` - Pas sur même cluster
- `Client::Forbidden::PCIDSSInputDeny` - Entrée PCIDSS refusée
- `Client::Forbidden::ServiceUnavailable` - Service indisponible
- `Client::NotFound::InputEngineDoesNotExists` - Moteur d'entrée non trouvé
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas
- `Client::NotFound::StreamDoesNotExists` - Flux non trouvé
- `Client::Conflict::TitleAlreadyUsed` - Titre déjà utilisé

**Action IAM requise :** `ldp:apiovh:input/create`

---

### 9. `/dbaas/logs/{serviceName}/input/engine` - Moteurs d'entrée

#### 9.1. Liste des moteurs d'entrée disponibles

**Endpoint :** `GET /dbaas/logs/{serviceName}/input/engine`

**Description :** Retourne la liste des moteurs d'entrée disponibles.

**Paramètres :**

- `serviceName` (path, required) : Nom du service

**Réponse :** `uuid[]`

**Action IAM requise :** `ldp:apiovh:input/engine/get`

---

#### 9.2. Récupérer les détails d'un moteur d'entrée

**Endpoint :** `GET /dbaas/logs/{serviceName}/input/engine/{engineId}`

**Description :** Retourne les détails du moteur d'entrée spécifié.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `engineId` (path, required) : UUID du moteur

**Réponse :** `dbaas.logs.Engine`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::NotFound::InputEngineDoesNotExists` - Moteur d'entrée non trouvé

**Action IAM requise :** `ldp:apiovh:input/engine/get`

---

### 10. `/dbaas/logs/{serviceName}/input/engine/{engineId}/helper` - Helpers de moteur d'entrée

#### 10.1. Liste des helpers disponibles

**Endpoint :** `GET /dbaas/logs/{serviceName}/input/engine/{engineId}/helper`

**Description :** Retourne la liste des helpers disponibles pour le moteur d'entrée donné.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `engineId` (path, required) : UUID du moteur

**Réponse :** `uuid[]`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide

**Action IAM requise :** `ldp:apiovh:input/engine/helper/get`

---

#### 10.2. Récupérer les détails d'un helper

**Endpoint :** `GET /dbaas/logs/{serviceName}/input/engine/{engineId}/helper/{helperId}`

**Description :** Retourne les détails du helper spécifié du moteur d'entrée.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `engineId` (path, required) : UUID du moteur
- `helperId` (path, required) : UUID du helper

**Réponse :** `dbaas.logs.Helper`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::NotFound::HelperDoesNotExists` - Helper non trouvé

**Action IAM requise :** `ldp:apiovh:input/engine/helper/get`

---

### 11. `/dbaas/logs/{serviceName}/input/{inputId}` - Gestion des entrées

#### 11.1. Supprimer une entrée

**Endpoint :** `DELETE /dbaas/logs/{serviceName}/input/{inputId}`

**Description :** Supprime l'objet d'entrée spécifié.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `inputId` (path, required) : UUID de l'entrée

**Réponse :** `dbaas.logs.Operation`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::Forbidden::Busy` - Service occupé
- `Client::Forbidden::IncompatibleStatusForInput` - Statut incompatible
- `Client::Forbidden::OnlyOwnerCanPerformAction` - Seul le propriétaire peut agir
- `Client::Forbidden::ServiceUnavailable` - Service indisponible
- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:input/delete`

---

#### 11.2. Récupérer les détails d'une entrée

**Endpoint :** `GET /dbaas/logs/{serviceName}/input/{inputId}`

**Description :** Retourne les détails de l'entrée spécifiée.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `inputId` (path, required) : UUID de l'entrée

**Réponse :** `dbaas.logs.Input`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:input/get`

---

#### 11.3. Mettre à jour une entrée

**Endpoint :** `PUT /dbaas/logs/{serviceName}/input/{inputId}`

**Description :** Met à jour les informations de l'objet d'entrée spécifié.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `inputId` (path, required) : UUID de l'entrée
- **Body :** `dbaas.logs.InputUpdate` (required) - Objet de mise à jour

**Réponse :** `dbaas.logs.Operation`

**Erreurs possibles :**

- `Client::ValidationError::EmptyValue` - Valeur vide
- `Client::ValidationError::EngineIsDeprecated` - Moteur obsolète
- `Client::ValidationError::InvalidFormat` - Format invalide
- `Client::ValidationError::InvalidIPAddress` - Adresse IP invalide
- `Client::ValidationError::InvalidIPAddressKernel` - Adresse IP kernel invalide
- `Client::ValidationError::InvalidIPAddressLocalhost` - Adresse IP localhost invalide
- `Client::ValidationError::InvalidInputAutoscalingParameter` - Paramètre autoscaling invalide
- `Client::ValidationError::InvalidInstanceModeForInput` - Mode instance invalide
- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::ValidationError::MissingInputAutoscalingParameter` - Paramètre autoscaling manquant
- `Client::ValidationError::NotStreamOwner` - Pas propriétaire du flux
- `Client::ValidationError::RequiredField` - Champ manquant
- `Client::ValidationError::RestrictedPort` - Port restreint
- `Client::ValidationError::ValueNotInRange` - Valeur hors plage
- `Client::Forbidden::Busy` - Service occupé
- `Client::Forbidden::NotOnSameCluster` - Pas sur même cluster
- `Client::Forbidden::OnlyOwnerCanPerformAction` - Seul le propriétaire peut agir
- `Client::Forbidden::ServiceUnavailable` - Service indisponible
- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas
- `Client::NotFound::StreamDoesNotExists` - Flux non trouvé
- `Client::Conflict::TitleAlreadyUsed` - Titre déjà utilisé
- `Server::NotImplemented::MarathonAutoscaling` - Autoscaling Marathon non implémenté

**Action IAM requise :** `ldp:apiovh:input/edit`

---

### 12. `/dbaas/logs/{serviceName}/input/{inputId}/action` - Actions d'entrée

**Endpoint :** `GET /dbaas/logs/{serviceName}/input/{inputId}/action`

**Description :** Retourne les actions disponibles pour l'entrée spécifiée.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `inputId` (path, required) : UUID de l'entrée

**Réponse :** `dbaas.logs.InputAction[]`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:input/action/get`

---

### 13. `/dbaas/logs/{serviceName}/input/{inputId}/configtest` - Test de configuration

**Endpoint :** `POST /dbaas/logs/{serviceName}/input/{inputId}/configtest`

**Description :** Valide la configuration de l'entrée spécifiée.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `inputId` (path, required) : UUID de l'entrée

**Réponse :** `dbaas.logs.Operation`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::ValidationError::LogstashOnly` - Logstash uniquement
- `Server::ConfigurationError::InputNotConfigured` - Entrée non configurée
- `Client::Forbidden::Busy` - Service occupé
- `Client::Forbidden::OnlyOwnerCanPerformAction` - Seul le propriétaire peut agir
- `Client::Forbidden::ServiceUnavailable` - Service indisponible
- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:input/configtest/validate`

---

### 14. `/dbaas/logs/{serviceName}/input/{inputId}/configtest/result` - Résultat du test de configuration

**Endpoint :** `GET /dbaas/logs/{serviceName}/input/{inputId}/configtest/result`

**Description :** Retourne le résultat de l'opération de test de configuration.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `inputId` (path, required) : UUID de l'entrée

**Réponse :** `dbaas.logs.TestResult`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:input/configtest/result/get`

---

### 15. `/dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger` - Configuration Flowgger

#### 15.1. Récupérer la configuration Flowgger

**Endpoint :** `GET /dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger`

**Description :** Retourne la configuration Flowgger.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `inputId` (path, required) : UUID de l'entrée

**Réponse :** `dbaas.logs.FlowggerConfiguration`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::InvalidInputEngine` - Moteur d'entrée invalide
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:input/configuration/flowgger/get`

---

#### 15.2. Mettre à jour la configuration Flowgger

**Endpoint :** `PUT /dbaas/logs/{serviceName}/input/{inputId}/configuration/flowgger`

**Description :** Met à jour la configuration Flowgger.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `inputId` (path, required) : UUID de l'entrée
- **Body :** `dbaas.logs.InputConfigurationFlowggerUpdate` (required) - Objet de mise à jour

**Réponse :** `dbaas.logs.Operation`

**Erreurs possibles :**

- `Client::ValidationError::FlowggerInvalidFraming` - Framing Flowgger invalide
- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::ValidationError::RequiredField` - Champ manquant
- `Client::Forbidden::OnlyOwnerCanPerformAction` - Seul le propriétaire peut agir
- `Client::Forbidden::ServiceUnavailable` - Service indisponible
- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::InvalidInputEngine` - Moteur d'entrée invalide
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:input/configuration/flowgger/edit`

---

### 16. `/dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash` - Configuration Logstash

#### 16.1. Récupérer la configuration Logstash

**Endpoint :** `GET /dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash`

**Description :** Retourne la configuration Logstash.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `inputId` (path, required) : UUID de l'entrée

**Réponse :** `dbaas.logs.LogstashConfiguration`

**Erreurs possibles :**

- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::InvalidInputEngine` - Moteur d'entrée invalide
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:input/configuration/logstash/get`

---

#### 16.2. Mettre à jour la configuration Logstash

**Endpoint :** `PUT /dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash`

**Description :** Met à jour la configuration Logstash.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `inputId` (path, required) : UUID de l'entrée
- **Body :** `dbaas.logs.InputConfigurationLogstashUpdate` (required) - Objet de mise à jour

**Réponse :** `dbaas.logs.Operation`

**Erreurs possibles :**

- `Client::ValidationError::InvalidInputConfiguration` - Configuration d'entrée invalide
- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::ValidationError::RequiredField` - Champ manquant
- `Client::Forbidden::InputNotAvailable` - Entrée non disponible
- `Client::Forbidden::OnlyOwnerCanPerformAction` - Seul le propriétaire peut agir
- `Client::Forbidden::ServiceUnavailable` - Service indisponible
- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::InvalidInputEngine` - Moteur d'entrée invalide
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:input/configuration/logstash/edit`

---

### 17. `/dbaas/logs/{serviceName}/input/{inputId}/end` - Arrêt programmé

**Endpoint :** `POST /dbaas/logs/{serviceName}/input/{inputId}/end`

**Description :** Programme la fin de l'entrée spécifiée.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `inputId` (path, required) : UUID de l'entrée

**Réponse :** `dbaas.logs.Operation`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::Forbidden::Busy` - Service occupé
- `Client::Forbidden::IncompatibleStatusForInput` - Statut incompatible
- `Client::Forbidden::InputNotAvailable` - Entrée non disponible
- `Client::Forbidden::ServiceUnavailable` - Service indisponible
- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:input/end`

---

### 18. `/dbaas/logs/{serviceName}/input/{inputId}/logs/url` - URL des logs

**Endpoint :** `POST /dbaas/logs/{serviceName}/input/{inputId}/logs/url`

**Description :** Génère une URL temporaire pour récupérer les logs de l'entrée.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `inputId` (path, required) : UUID de l'entrée

**Réponse :** `dbaas.logs.TemporaryLogsLink`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::Forbidden::Busy` - Service occupé
- `Client::Forbidden::ServiceUnavailable` - Service indisponible
- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:input/logs/url/generate`

---

### 19. `/dbaas/logs/{serviceName}/input/{inputId}/restart` - Redémarrage programmé

**Endpoint :** `POST /dbaas/logs/{serviceName}/input/{inputId}/restart`

**Description :** Programme le redémarrage de l'entrée spécifiée.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `inputId` (path, required) : UUID de l'entrée

**Réponse :** `dbaas.logs.Operation`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Server::ConfigurationError::InputNotConfigured` - Entrée non configurée
- `Client::Forbidden::Busy` - Service occupé
- `Client::Forbidden::IncompatibleStatusForInput` - Statut incompatible
- `Client::Forbidden::InputNotAvailable` - Entrée non disponible
- `Client::Forbidden::ServiceUnavailable` - Service indisponible
- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:input/restart`

---

### 20. `/dbaas/logs/{serviceName}/input/{inputId}/start` - Démarrage programmé

**Endpoint :** `POST /dbaas/logs/{serviceName}/input/{inputId}/start`

**Description :** Programme le démarrage de l'entrée spécifiée.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `inputId` (path, required) : UUID de l'entrée

**Réponse :** `dbaas.logs.Operation`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Server::ConfigurationError::InputNotConfigured` - Entrée non configurée
- `Client::Forbidden::Busy` - Service occupé
- `Client::Forbidden::IncompatibleStatusForInput` - Statut incompatible
- `Client::Forbidden::InputNotAvailable` - Entrée non disponible
- `Client::Forbidden::ServiceUnavailable` - Service indisponible
- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:input/start`

---

### 21. `/dbaas/logs/{serviceName}/input/{inputId}/url` - URLs de l'entrée

**Endpoint :** `GET /dbaas/logs/{serviceName}/input/{inputId}/url`

**Description :** Retourne la liste des URLs de l'entrée spécifiée.

**Paramètres :**

- `serviceName` (path, required) : Nom du service
- `inputId` (path, required) : UUID de l'entrée

**Réponse :** `dbaas.logs.Url[]`

**Erreurs possibles :**

- `Client::ValidationError::InvalidUUID` - UUID invalide
- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas

**Action IAM requise :** `ldp:apiovh:input/url/get`

---

### 22. `/dbaas/logs/{serviceName}/metrics` - Métriques

**Endpoint :** `GET /dbaas/logs/{serviceName}/metrics`

**Description :** Retourne les credentials de métriques.

**Paramètres :**

- `serviceName` (path, required) : Nom du service

**Réponse :** `dbaas.logs.ServiceMetric`

**Erreurs possibles :**

- `Client::NotFound::ServiceNotFound` - Service non trouvé

**Action IAM requise :** `ldp:apiovh:metrics/get`

---

## Codes d'erreur

Les erreurs retournées par l'API sont classées en deux catégories :

### Validation Errors

- `Client::ValidationError::EmptyValue` - Valeur vide fournie
- `Client::ValidationError::RequiredField` - Champ requis manquant
- `Client::ValidationError::ValueNotInRange` - Valeur hors plage acceptable
- `Client::ValidationError::InvalidUUID` - UUID format invalide
- `Client::ValidationError::InvalidIPAddress` - Adresse IP invalide
- `Client::ValidationError::InvalidIPAddressKernel` - Adresse IP kernel invalide
- `Client::ValidationError::InvalidIPAddressLocalhost` - Adresse IP localhost invalide
- `Client::ValidationError::InvalidInputAutoscalingParameter` - Paramètre autoscaling invalide
- `Client::ValidationError::InvalidInstanceModeForInput` - Mode instance invalide
- `Client::ValidationError::MissingInputAutoscalingParameter` - Paramètre autoscaling manquant
- `Client::ValidationError::NotStreamOwner` - Pas propriétaire du flux
- `Client::ValidationError::RestrictedPort` - Port restreint
- `Client::ValidationError::FlowggerInvalidFraming` - Framing Flowgger invalide
- `Client::ValidationError::InvalidInputConfiguration` - Configuration d'entrée invalide
- `Client::ValidationError::NotOwner` - Pas propriétaire
- `Client::ValidationError::NothingToDo` - Rien à faire
- `Client::ValidationError::EncryptionKeyFingerprintMismatch` - Empreinte ne correspond pas
- `Client::ValidationError::EncryptionKeyHasExpirationDate` - Clé avec date d'expiration
- `Client::ValidationError::EncryptionKeyStillAssignedToCluster` - Clé assignée à un cluster
- `Client::ValidationError::EncryptionKeyStillAssignedToStream` - Clé assignée à un flux
- `Client::ValidationError::EncryptionKeyStillUsedByArchive` - Clé utilisée par archive
- `Client::ValidationError::InvalidEncryptionKey` - Clé invalide
- `Client::ValidationError::InvalidEncryptionKeyAlgorithm` - Algorithme invalide

### Authorization Errors

- `Client::Forbidden::Busy` - Service occupé
- `Client::Forbidden::IAMNoRevert` - Reversal IAM non autorisé
- `Client::Forbidden::IAMNotAllowed` - Action IAM non autorisée
- `Client::Forbidden::ServiceEligibilityIAM` - Service éligibilité IAM
- `Client::Forbidden::InputDenyForCluster` - Entrée refusée pour cluster
- `Client::Forbidden::PCIDSSInputDeny` - Entrée PCIDSS refusée
- `Client::Forbidden::NotOnSameCluster` - Pas sur même cluster
- `Client::Forbidden::PCIDSSSettingOnly` - Configuration PCIDSS uniquement
- `Client::Forbidden::ServiceNotMigrated` - Service non migré
- `Client::Forbidden::TooManyActive` - Trop d'actifs
- `Client::Forbidden::OnlyOwnerCanPerformAction` - Seul le propriétaire peut agir
- `Client::Forbidden::InputNotAvailable` - Entrée non disponible
- `Client::Forbidden::AccessDenied` - Accès refusé
- `Client::Forbidden::IncompatibleStatusForInput` - Statut incompatible
- `Client::Forbidden::ItemQuotaReached` - Quota d'éléments atteint
- `Client::Forbidden::ServiceUnavailable` - Service indisponible

### Not Found Errors

- `Client::NotFound::ServiceNotFound` - Service non trouvé
- `Client::NotFound::ServiceDoesNotExists` - Service n'existe pas
- `Client::NotFound::ClusterDoesNotExists` - Cluster n'existe pas
- `Client::NotFound::ClusterRetentionNotFound` - Rétention non trouvée
- `Client::NotFound::EncryptionKeyDoesNotExists` - Clé non trouvée
- `Client::NotFound::InputDoesNotExists` - Entrée non trouvée
- `Client::NotFound::InputEngineDoesNotExists` - Moteur d'entrée non trouvé
- `Client::NotFound::HelperDoesNotExists` - Helper non trouvé
- `Client::NotFound::StreamDoesNotExists` - Flux non trouvé
- `Client::NotFound::InvalidInputEngine` - Moteur d'entrée invalide

### Conflict Errors

- `Client::Conflict::ServiceAlreadyMigrated` - Déjà migré
- `Client::Conflict::TitleAlreadyUsed` - Titre déjà utilisé
- `Client::Conflict::AlreadyExists` - Déjà existe

### Server Errors

- `Server::ConfigurationError::InputNotConfigured` - Entrée non configurée
- `Server::NotImplemented::MarathonAutoscaling` - Autoscaling Marathon non implémenté

---

## Types de données

### Types de réponse courants

| Type                               | Description                         |
| ---------------------------------- | ----------------------------------- |
| `string[]`                         | Liste de chaînes de caractères      |
| `uuid[]`                           | Liste d'identifiants UUID           |
| `dbaas.logs.ServiceWithIAM`        | Objet service avec informations IAM |
| `dbaas.logs.Operation`             | Objet d'opération de base           |
| `dbaas.logs.Cluster`               | Objet cluster                       |
| `dbaas.logs.ClusterRetention`      | Objet rétention de cluster          |
| `dbaas.logs.EncryptionKey`         | Objet clé de chiffrement            |
| `dbaas.logs.Input`                 | Objet entrée                        |
| `dbaas.logs.Engine`                | Objet moteur d'entrée               |
| `dbaas.logs.Helper`                | Objet helper                        |
| `dbaas.logs.InputAction[]`         | Liste d'actions d'entrée            |
| `dbaas.logs.TestResult`            | Résultat de test                    |
| `dbaas.logs.FlowggerConfiguration` | Configuration Flowgger              |
| `dbaas.logs.LogstashConfiguration` | Configuration Logstash              |
| `dbaas.logs.TemporaryLogsLink`     | Lien temporaire de logs             |
| `dbaas.logs.ServiceMetric`         | Métriques de service                |

### Types de requête courants

| Type                                          | Description                             |
| --------------------------------------------- | --------------------------------------- |
| `dbaas.logs.Update`                           | Objet de mise à jour de service         |
| `services.changeContact`                      | Objet de changement de contact          |
| `dbaas.logs.ClusterUpdate`                    | Objet de mise à jour de cluster         |
| `dbaas.logs.EncryptionKey`                    | Objet de création de clé de chiffrement |
| `dbaas.logs.InputCreation`                    | Objet de création d'entrée              |
| `dbaas.logs.InputUpdate`                      | Objet de mise à jour d'entrée           |
| `dbaas.logs.InputConfigurationFlowggerUpdate` | Objet de mise à jour config Flowgger    |
| `dbaas.logs.InputConfigurationLogstashUpdate` | Objet de mise à jour config Logstash    |

---

## Exemples d'usage

### Exemple 1 : Lister les services disponibles

```bash
GET /dbaas/logs
Authorization: Basic <credentials>
```

**Réponse :**

```json
["service-1", "service-2", "service-3"]
```

### Exemple 2 : Récupérer les détails d'un service

```bash
GET /dbaas/logs/my-service
Authorization: Basic <credentials>
```

**Réponse :**

```json
{
	"serviceName": "my-service",
	"status": "active",
	"iam": {
		"tags": ["tag1", "tag2"]
	}
}
```

### Exemple 3 : Créer une entrée

```bash
POST /dbaas/logs/my-service/input
Authorization: Basic <credentials>
Content-Type: application/json
```

**Body :**

```json
{
	"title": "my-input",
	"engineId": "engine-uuid",
	"configuration": {
		"flowgger": {
			"framing": "json"
		}
	}
}
```

### Exemple 4 : Démarrer une entrée

```bash
POST /dbaas/logs/my-service/input/uuid/start
Authorization: Basic <credentials>
```

---

## Notes importantes

1. **Toutes les opérations nécessitent une authentification OVHcloud valide**
2. **Les IDs UUID doivent être au format standard (36 caractères)**
3. **Les adresses IP doivent être valides et ne pas être localhost**
4. **Les titres (titles) doivent être uniques par service**
5. **Seul le propriétaire d'une entrée peut la modifier/supprimer**
6. **Les services doivent être migrés avant certaines opérations**
7. **Les quotas d'éléments peuvent limiter le nombre d'entrées/clés**
8. **Les PCIDSS restrictions s'appliquent aux environnements certifiés**

---

## Version

**API Version :** 1.0  
**Status :** PRODUCTION (stable)  
**Documentation Version :** 1.0  
**Dernière mise à jour :** 2026

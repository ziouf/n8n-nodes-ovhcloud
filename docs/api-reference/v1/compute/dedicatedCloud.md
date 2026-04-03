# OVHcloud VMware Dedicated Cloud API Documentation

## Vue d'ensemble

Cette documentation décrit l'API REST OVHcloud pour la gestion de VMware on OVHcloud (PCC - Private Cloud Cloud). L'API permet de gérer les infrastructures VMware, les datacenters, les machines virtuelles, et de nombreuses autres ressources.

**Version API**: 1.0  
**Base de l'API**: `/dedicatedCloud`

---

## Table des Matières

1. [Liste des Infrastructures](#liste-des-infrastructures)
2. [Emplacements d'Hébergement](#emplacements-dhébergement)
3. [Réseaux Autorisés](#réseaux-autorisés)
4. [Centres de Données](#centres-de-données)
5. [Backups](#backups)
6. [Machines Virtuelles](#machines-virtuelles)
7. [Zerto Disaster Recovery](#zerto-disaster-recovery)
8. [NSX-T](#nsx-t)
9. [Filers](#filers)
10. [Contacts et Propriétés](#contacts-et-propriétés)
11. [Terminaison de Service](#terminaison-de-service)

---

## Liste des Infrastructures

### GET /dedicatedCloud

Récupère la liste des infrastructures VMware on OVHcloud.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom     | Type                                | Requis | Description                        |
| ------- | ----------------------------------- | ------ | ---------------------------------- |
| iamTags | map[string][]iam.resource.TagFilter | Non    | Filtre les ressources par tags IAM |

**Réponse**: `string[]` - Liste des identifiants d'infrastructures

**Action IAM**: `pccVMware:apiovh:get`

**Exemple**:

```bash
curl -X GET "https://api.ovh.com/v1/123456789012:region:us:dedicatedCloud?iamTags=env:prod" \
  -H "Authorization: Basic <base64-credentials>"
```

---

## Emplacements d'Hébergement

### GET /dedicatedCloud/location

Liste tous les emplacements d'hébergement disponibles.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Réponse**: `string[]` - Liste des zones PCC disponibles

**Action IAM**: `account:apiovh:pccVMware/location/get`

### GET /dedicatedCloud/location/{pccZone}

Récupère les détails d'un emplacement d'hébergement spécifique.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom     | Type   | Requis | Description        |
| ------- | ------ | ------ | ------------------ |
| pccZone | string | Oui    | Nom de la zone PCC |

**Réponse**: `dedicatedCloud.PccZone`

**Action IAM**: `account:apiovh:pccVMware/location/get`

---

## Réseaux Autorisés

### GET /dedicatedCloud/{serviceName}/allowedNetwork

Liste les réseaux autorisés sur le pare-feu infrastructure.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom         | Type   | Requis | Description        |
| ----------- | ------ | ------ | ------------------ |
| serviceName | string | Oui    | Domaine du service |

**Réponse**: `long[]` - Liste des IDs de réseaux autorisés

**Action IAM**: `pccVMware:apiovh:allowedNetwork/get`

### POST /dedicatedCloud/{serviceName}/allowedNetwork

Ajoute un réseau autorisé sur le pare-feu infrastructure.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom         | Type             | Requis | Description                             |
| ----------- | ---------------- | ------ | --------------------------------------- |
| serviceName | string (path)    | Oui    | Domaine du service                      |
| network     | ipv4Block (body) | Oui    | Réseau à ajouter (ex: 123.100.200.0/32) |
| description | string (body)    | Non    | Description pour l'ACL                  |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:allowedNetwork/create`

### GET /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}

Récupère les détails d'un réseau autorisé.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom             | Type          | Requis | Description           |
| --------------- | ------------- | ------ | --------------------- |
| serviceName     | string (path) | Oui    | Domaine du service    |
| networkAccessId | long (path)   | Oui    | ID du réseau autorisé |

**Réponse**: `dedicatedCloud.AllowedNetwork`

**Action IAM**: `pccVMware:apiovh:allowedNetwork/get`

### PUT /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}

Mise à jour d'un réseau autorisé.

**Méthode**: `PUT`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom                           | Type          | Requis | Description                     |
| ----------------------------- | ------------- | ------ | ------------------------------- |
| serviceName                   | string (path) | Oui    | Domaine du service              |
| networkAccessId               | long (path)   | Oui    | ID du réseau autorisé           |
| dedicatedCloud.AllowedNetwork | body          | Oui    | Nouvelles propriétés de l'objet |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:allowedNetwork/edit`

### DELETE /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}

Supprime un réseau autorisé.

**Méthode**: `DELETE`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom             | Type          | Requis | Description           |
| --------------- | ------------- | ------ | --------------------- |
| serviceName     | string (path) | Oui    | Domaine du service    |
| networkAccessId | long (path)   | Oui    | ID du réseau autorisé |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:allowedNetwork/delete`

---

## Centres de Données

### GET /dedicatedCloud/{serviceName}/datacenter

Liste les centres de données virtuels.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom         | Type          | Requis | Description        |
| ----------- | ------------- | ------ | ------------------ |
| serviceName | string (path) | Oui    | Domaine du service |

**Réponse**: `long[]` - Liste des IDs de datacenters

**Action IAM**: `pccVMware:apiovh:datacenter/get`

### POST /dedicatedCloud/{serviceName}/datacenter

Crée un nouveau centre de données virtuel.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom                 | Type          | Requis | Description                               |
| ------------------- | ------------- | ------ | ----------------------------------------- |
| serviceName         | string (path) | Oui    | Domaine du service                        |
| commercialRangeName | string (body) | Oui    | Plage commerciale du nouveau datacenter   |
| vrackName           | string (body) | Non    | Nom du Vrack à lier au nouveau datacenter |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/create`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}

Récupère les détails d'un centre de données virtuel.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.Datacenter`

**Action IAM**: `pccVMware:apiovh:datacenter/get`

### PUT /dedicatedCloud/{serviceName}/datacenter/{datacenterId}

Mise à jour d'un centre de données virtuel.

**Méthode**: `PUT`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom                       | Type          | Requis | Description                     |
| ------------------------- | ------------- | ------ | ------------------------------- |
| serviceName               | string (path) | Oui    | Domaine du service              |
| datacenterId              | long (path)   | Oui    | ID du datacenter                |
| dedicatedCloud.Datacenter | body          | Oui    | Nouvelles propriétés de l'objet |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/edit`

### DELETE /dedicatedCloud/{serviceName}/datacenter/{datacenterId}

Supprime un centre de données virtuel.

**Méthode**: `DELETE`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/delete`

---

## Backups

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup

Récupère les options de backup.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.Backup`

**Action IAM**: `pccVMware:apiovh:datacenter/backup/get`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/changeProperties

Mise à jour des options de backup.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom                    | Type                                       | Requis | Description                                 |
| ---------------------- | ------------------------------------------ | ------ | ------------------------------------------- |
| serviceName            | string (path)                              | Oui    | Domaine du service                          |
| datacenterId           | long (path)                                | Oui    | ID du datacenter                            |
| backupOffer            | dedicatedCloud.backup.OfferTypeEnum (body) | Oui    | Type d'offre de backup                      |
| mailAddress            | string (body)                              | Non    | Adresse email pour le rapport quotidien     |
| scheduleHour           | time (body)                                | Non    | Heure de démarrage du backup (UTC)          |
| backupDurationInReport | boolean (body)                             | Non    | Déprécié - Durée dans le rapport email      |
| backupSizeInReport     | boolean (body)                             | Non    | Déprécié - Taille du backup dans le rapport |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/backup/changeProperties`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/enable

Active les options de backup.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: DEPRECATED (remplacé par `/order/cart/{cartId}/privateCloud`)

**Paramètres**:

| Nom          | Type                                       | Requis | Description            |
| ------------ | ------------------------------------------ | ------ | ---------------------- |
| serviceName  | string (path)                              | Oui    | Domaine du service     |
| datacenterId | long (path)                                | Oui    | ID du datacenter       |
| backupOffer  | dedicatedCloud.backup.OfferTypeEnum (body) | Non    | Type d'offre de backup |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/backup/enable`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable

Désactive les options de backup.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/backup/disable`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/generateReport

Génère un rapport email avec toutes les informations de backup.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/backup/generateReport`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/batchRestore

Restaure depuis le dernier point pour chaque job de backup.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom                  | Type          | Requis | Description                                           |
| -------------------- | ------------- | ------ | ----------------------------------------------------- |
| serviceName          | string (path) | Oui    | Domaine du service                                    |
| datacenterId         | long (path)   | Oui    | ID du datacenter                                      |
| backupRepositoryName | string (body) | Oui    | Nom du répertoire de backup (ex: bkp-XXXXX)           |
| backupJobName        | string (body) | Non    | Nom du job de backup pour restaurer une VM spécifique |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/backup/batchRestore`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/canOptimizeProxies

Génère des recommandations pour l'optimisation des proxies de backup.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.backup.OptimizeProxies`

**Action IAM**: `pccVMware:apiovh:datacenter/backup/canOptimizeProxies/get`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/optimizeProxies

Optimise le nombre de proxies de backup.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/backup/optimizeProxies`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/offerCapabilities

Liste les capacités des offres de backup.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.backup.BackupCapabilities[]`

**Action IAM**: `pccVMware:apiovh:datacenter/backup/offerCapabilities/get`

---

## Machines Virtuelles

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm

Liste les machines virtuelles dans un datacenter.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `long[]` - Liste des IDs de VMs

**Action IAM**: `pccVMware:apiovh:datacenter/vm/get`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}

Récupère les détails d'une machine virtuelle.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description                |
| ------------ | ------------- | ------ | -------------------------- |
| serviceName  | string (path) | Oui    | Domaine du service         |
| datacenterId | long (path)   | Oui    | ID du datacenter           |
| vmId         | long (path)   | Oui    | ID de la machine virtuelle |

**Réponse**: `dedicatedCloud.Vm`

**Action IAM**: `pccVMware:apiovh:datacenter/vm/get`

---

## Zerto Disaster Recovery

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/enable

Active Zerto Disaster Recovery entre deux infrastructures VMware on OVHcloud.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: DEPRECATED (remplacé par `/order/cart/{cartId}/privateCloud`)

**Paramètres**:

| Nom                   | Type          | Requis | Description                               |
| --------------------- | ------------- | ------ | ----------------------------------------- |
| serviceName           | string (path) | Oui    | Domaine du service                        |
| datacenterId          | long (path)   | Oui    | ID du datacenter                          |
| secondaryDatacenterId | long (body)   | Oui    | ID du datacenter secondaire               |
| secondaryServiceName  | string (body) | Oui    | Nom du service dédié secondaire           |
| primaryEndpointIp     | ip (body)     | Oui    | IP publique OVH pour le tunnel sécurisé   |
| secondaryEndpointIp   | ip (body)     | Oui    | IP publique OVH pour le tunnel secondaire |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/disasterRecovery/zerto/enable`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/disable

Désactive Zerto Disaster Recovery.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom                   | Type          | Requis | Description                     |
| --------------------- | ------------- | ------ | ------------------------------- |
| serviceName           | string (path) | Oui    | Domaine du service              |
| datacenterId          | long (path)   | Oui    | ID du datacenter                |
| secondaryDatacenterId | long (body)   | Oui    | ID du datacenter secondaire     |
| secondaryServiceName  | string (body) | Oui    | Nom du service dédié secondaire |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/disasterRecovery/zerto/disable`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/startMigration

Lie le datacenter cible à Zerto Disaster Recovery.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/disasterRecovery/zerto/startMigration`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/endMigration

Délie le datacenter source de Zerto Disaster Recovery.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/disasterRecovery/zerto/endMigration`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/status

Récupère le statut de l'option Zerto Disaster Recovery.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.disasterRecovery.Profile`

**Action IAM**: `pccVMware:apiovh:datacenter/disasterRecovery/zerto/status/get`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/requestHealthCheck

Lance une vérification de santé Zerto.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/disasterRecovery/zerto/requestHealthCheck`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/usageReport

Liste les machines virtuelles protégées par Zerto.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description          |
| ------------ | ------------- | ------ | -------------------- |
| serviceName  | string (path) | Oui    | Domaine du service   |
| datacenterId | long (path)   | Oui    | ID du datacenter     |
| year         | long (query)  | Oui    | Année de facturation |
| month        | long (query)  | Oui    | Mois de facturation  |

**Réponse**: `dedicatedCloud.disasterRecovery.ZertoProtectedVm[]`

**Action IAM**: `pccVMware:apiovh:datacenter/disasterRecovery/zerto/usageReport/get`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/remoteSites/create

Crée un site distant Zerto sur l'endpoint VPN.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom                    | Type             | Requis | Description                                  |
| ---------------------- | ---------------- | ------ | -------------------------------------------- |
| serviceName            | string (path)    | Oui    | Domaine du service                           |
| datacenterId           | long (path)      | Oui    | ID du datacenter                             |
| label                  | string (body)    | Oui    | Nom de la connexion                          |
| remoteEndpointPublicIp | ipv4 (body)      | Oui    | IP publique de l'endpoint distant            |
| remoteVraNetwork       | ipv4Block (body) | Oui    | Sous-réseau Zerto distant (ip/cidr)          |
| remoteZvmInternalIp    | ipv4 (body)      | Oui    | IP interne ZVM distante                      |
| preSharedKey           | password (body)  | Oui    | Clé pré-partagée pour sécuriser le transfert |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/disasterRecovery/zerto/remoteSites/create`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/remoteSites

Liste les sites distants Zerto.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.disasterRecovery.ZertoRemoteVra[]`

**Action IAM**: `pccVMware:apiovh:datacenter/disasterRecovery/zerto/remoteSites/get`

### DELETE /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/remoteSites

Supprime un site distant Zerto.

**Méthode**: `DELETE`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description              |
| ------------ | ------------- | ------ | ------------------------ |
| serviceName  | string (path) | Oui    | Domaine du service       |
| datacenterId | long (path)   | Oui    | ID du datacenter         |
| id           | long (query)  | Oui    | ID du réseau à supprimer |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/disasterRecovery/zerto/remoteSites/delete`

---

## NSX-T

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge

Liste les NSX-T Edges dans un datacenter.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `long[]` - Liste des IDs de NSX-T Edges

**Action IAM**: `pccVMware:apiovh:datacenter/nsxtEdge/get`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge

Ajoute un NSX-T Edge dans le datacenter.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/nsxtEdge/create`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}

Récupère les détails d'un NSX-T Edge.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |
| nsxtEdgeId   | long (path)   | Oui    | ID du NSX-T Edge   |

**Réponse**: `dedicatedCloud.NsxtEdge`

**Action IAM**: `pccVMware:apiovh:datacenter/nsxtEdge/get`

### DELETE /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}

Supprime un NSX-T Edge.

**Méthode**: `DELETE`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |
| nsxtEdgeId   | long (path)   | Oui    | ID du NSX-T Edge   |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/nsxtEdge/delete`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdge/{nsxtEdgeId}/relocateEdge

Déplace les ressources d'un NSX-T Edge.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description                               |
| ------------ | ------------- | ------ | ----------------------------------------- |
| serviceName  | string (path) | Oui    | Domaine du service                        |
| datacenterId | long (path)   | Oui    | ID du datacenter                          |
| nsxtEdgeId   | long (path)   | Oui    | ID du NSX-T Edge                          |
| hostId       | long (body)   | Non    | ID du host pour déplacer les ressources   |
| datastore    | string (body) | Non    | ID du datastore pour déplacer les disques |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/nsxtEdge/relocateEdge`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/resizeNsxtEdgeCluster

Redimensionne le cluster NSX-T.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type                                        | Requis | Description          |
| ------------ | ------------------------------------------- | ------ | -------------------- |
| serviceName  | string (path)                               | Oui    | Domaine du service   |
| datacenterId | long (path)                                 | Oui    | ID du datacenter     |
| size         | dedicatedCloud.nsxt.NsxtEdgeSizeEnum (body) | Oui    | Taille du NSX-T Edge |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/resizeNsxtEdgeCluster`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdgesResizingCapabilities

Récupère les capacités de redimensionnement du cluster NSX-T.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.nsxt.NsxtEdgeSizingCapability`

**Action IAM**: `pccVMware:apiovh:datacenter/nsxtEdgesResizingCapabilities/get`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/nsxtEdgesScalingCapabilities

Récupère les capacités de mise à l'échelle du cluster NSX-T.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.nsxt.NsxtEdgeScalingCapability`

**Action IAM**: `pccVMware:apiovh:datacenter/nsxtEdgesScalingCapabilities/get`

---

## Filers

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer

Liste les filers dans un datacenter.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `long[]` - Liste des IDs de filers

**Action IAM**: `pccVMware:apiovh:datacenter/filer/get`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}

Récupère les détails d'un filer.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |
| filerId      | long (path)   | Oui    | ID du filer        |

**Réponse**: `dedicatedCloud.Filer`

**Action IAM**: `pccVMware:apiovh:datacenter/filer/get`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove

Supprime un filer.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |
| filerId      | long (path)   | Oui    | ID du filer        |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/filer/remove`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/convertToGlobal

Convertit un datastore en global datastore.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |
| filerId      | long (path)   | Oui    | ID du filer        |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/filer/convertToGlobal`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/checkGlobalCompatible

Vérifie la compatibilité pour convertir en global datastore.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |
| filerId      | long (path)   | Oui    | ID du filer        |

**Réponse**: `boolean`

**Action IAM**: `pccVMware:apiovh:datacenter/filer/checkGlobalCompatible/get`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewFilerHourly

Commande un datastore hourly.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description                 |
| ------------ | ------------- | ------ | --------------------------- |
| serviceName  | string (path) | Oui    | Domaine du service          |
| datacenterId | long (path)   | Oui    | ID du datacenter            |
| name         | string (body) | Oui    | Profil de filer à commander |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/orderNewFilerHourly`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableFilerProfiles

Liste les profils de filers disponibles.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.filer.Profile[]`

**Action IAM**: `pccVMware:apiovh:datacenter/orderableFilerProfiles/get`

---

## Hosts

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host

Liste les hosts dans un datacenter.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `long[]` - Liste des IDs de hosts

**Action IAM**: `pccVMware:apiovh:datacenter/host/get`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}

Récupère les détails d'un host.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |
| hostId       | long (path)   | Oui    | ID du host         |

**Réponse**: `dedicatedCloud.Host`

**Action IAM**: `pccVMware:apiovh:datacenter/host/get`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/addHostSpare

Demande le remplacement d'un host.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description                |
| ------------ | ------------- | ------ | -------------------------- |
| serviceName  | string (path) | Oui    | Domaine du service         |
| datacenterId | long (path)   | Oui    | ID du datacenter           |
| hostId       | long (path)   | Oui    | ID du host                 |
| reason       | string (body) | Oui    | Raison de l'ajout du spare |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/host/addHostSpare`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/remove

Supprime un host.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |
| hostId       | long (path)   | Oui    | ID du host         |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/host/remove`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderNewHostHourly

Commande un host hourly.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom             | Type          | Requis | Description                        |
| --------------- | ------------- | ------ | ---------------------------------- |
| serviceName     | string (path) | Oui    | Domaine du service                 |
| datacenterId    | long (path)   | Oui    | ID du datacenter                   |
| name            | string (body) | Oui    | Profil de host à commander         |
| vmwareClusterId | string (body) | Non    | ID du cluster pour ajouter le host |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/orderNewHostHourly`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/orderableHostProfiles

Liste les profils de hosts disponibles.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.host.Profile[]`

**Action IAM**: `pccVMware:apiovh:datacenter/orderableHostProfiles/get`

---

## Private Gateways

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway

Récupère le private management gateway.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.PrivateGateway`

**Action IAM**: `pccVMware:apiovh:datacenter/privateGateway/get`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/enable

Déploie le private management gateway.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description                      |
| ------------ | ------------- | ------ | -------------------------------- |
| serviceName  | string (path) | Oui    | Domaine du service               |
| datacenterId | long (path)   | Oui    | ID du datacenter                 |
| ip           | ip (body)     | Oui    | IP à configurer sur le gateway   |
| netmask      | ip (body)     | Oui    | Netmask à configurer             |
| portgroup    | string (body) | Oui    | Portgroup VMware pour le gateway |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/privateGateway/enable`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/disable

Supprime le private management gateway.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/privateGateway/disable`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/reconfigure

Reconfigure le private management gateway.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom             | Type          | Requis | Description                               |
| --------------- | ------------- | ------ | ----------------------------------------- |
| serviceName     | string (path) | Oui    | Domaine du service                        |
| datacenterId    | long (path)   | Oui    | ID du datacenter                          |
| ip              | ip (body)     | Non    | Nouvelle IP du gateway                    |
| netmask         | ip (body)     | Non    | Nouvelle netmask                          |
| newDatacenterId | long (body)   | Non    | ID du datacenter pour déplacer le gateway |
| portgroup       | string (body) | Non    | Nouveau portgroup                         |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/privateGateway/reconfigure`

---

## Contacts et Propriétés

### POST /dedicatedCloud/{serviceName}/changeContact

Lance une procédure de changement de contact.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom            | Type          | Requis | Description                     |
| -------------- | ------------- | ------ | ------------------------------- |
| serviceName    | string (path) | Oui    | Domaine du service              |
| contactAdmin   | string (body) | Non    | Contact à définir comme admin   |
| contactBilling | string (body) | Non    | Contact à définir comme billing |
| contactTech    | string (body) | Non    | Contact à définir comme tech    |

**Réponse**: `long[]`

**Action IAM**: `pccVMware:apiovh:changeContact`

### POST /dedicatedCloud/{serviceName}/changeProperties

Mise à jour des propriétés de VMware on OVHcloud.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom                        | Type                                       | Requis | Description                         |
| -------------------------- | ------------------------------------------ | ------ | ----------------------------------- |
| serviceName                | string (path)                              | Oui    | Domaine du service                  |
| description                | string (body)                              | Non    | Description de l'infrastructure     |
| sslV3                      | boolean (body)                             | Non    | Activer SSL v3 (déconseillé)        |
| userAccessPolicy           | dedicatedCloud.UserAccessPolicyEnum (body) | Non    | Politique d'accès: ouvert ou filtré |
| userLimitConcurrentSession | long (body)                                | Non    | Limite d'utilisateurs simultanés    |
| userLogoutPolicy           | dedicatedCloud.UserLogoutPolicyEnum (body) | Non    | Politique de déconnexion            |
| userSessionTimeout         | long (body)                                | Non    | Timeout de session (0 = désactivé)  |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:changeProperties`

---

## Terminaison de Service

### POST /dedicatedCloud/{serviceName}/confirmTermination

Confirme la terminaison du service.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom         | Type                                    | Requis | Description                           |
| ----------- | --------------------------------------- | ------ | ------------------------------------- |
| serviceName | string (path)                           | Oui    | Domaine du service                    |
| token       | string (body)                           | Oui    | Token de terminaison envoyé par email |
| reason      | service.TerminationReasonEnum (body)    | Non    | Raison de la terminaison              |
| futureUse   | service.TerminationFutureUseEnum (body) | Non    | Usage futur après terminaison         |
| commentary  | string (body)                           | Non    | Commentaire sur la demande            |

**Réponse**: `string`

**Action IAM**: `pccVMware:apiovh:confirmTermination`

---

## Capabilities

### GET /dedicatedCloud/{serviceName}/capabilities

Récupère les fonctionnalités disponibles.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom         | Type          | Requis | Description        |
| ----------- | ------------- | ------ | ------------------ |
| serviceName | string (path) | Oui    | Domaine du service |

**Réponse**: `dedicatedCloud.Capabilities`

**Action IAM**: `pccVMware:apiovh:capabilities/get`

---

## Commercial Ranges

### GET /dedicatedCloud/commercialRange

Liste les plages commerciales.

**Méthode**: `GET`  
**Authentification**: Non requise  
**Statut API**: PRODUCTION

**Réponse**: `string[]`

### GET /dedicatedCloud/commercialRange/{commercialRangeName}

Récupère les détails d'une plage commerciale.

**Méthode**: `GET`  
**Authentification**: Non requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom                 | Type          | Requis | Description                 |
| ------------------- | ------------- | ------ | --------------------------- |
| commercialRangeName | string (path) | Oui    | Nom de la plage commerciale |

**Réponse**: `dedicatedCloud.CommercialRange`

---

## Stock Profiles

### GET /dedicatedCloud/location/{pccZone}/stock/host

Récupère le stock de hosts.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom     | Type          | Requis | Description                 |
| ------- | ------------- | ------ | --------------------------- |
| pccZone | string (path) | Oui    | Nom de la zone PCC          |
| minYear | long (query)  | Non    | Année minimale de référence |

**Réponse**: `dedicatedCloud.HostStockProfile[]`

**Action IAM**: `account:apiovh:pccVMware/location/stock/host/get`

### GET /dedicatedCloud/location/{pccZone}/stock/pcc

Récupère le stock de hyperviseurs PCC.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom     | Type          | Requis | Description        |
| ------- | ------------- | ------ | ------------------ |
| pccZone | string (path) | Oui    | Nom de la zone PCC |

**Réponse**: `dedicatedCloud.PccStockProfile[]`

**Action IAM**: `account:apiovh:pccVMware/location/stock/pcc/get`

### GET /dedicatedCloud/location/{pccZone}/stock/zpool

Récupère le stock de zpools.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom           | Type           | Requis | Description        |
| ------------- | -------------- | ------ | ------------------ |
| pccZone       | string (path)  | Oui    | Nom de la zone PCC |
| profileFilter | string (query) | Non    | Filtre de profil   |

**Réponse**: `dedicatedCloud.ZpoolStockProfile[]`

**Action IAM**: `account:apiovh:pccVMware/location/stock/zpool/get`

---

## Host Profiles

### GET /dedicatedCloud/location/{pccZone}/hostProfile

Liste les profils de hosts sur un emplacement.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom     | Type          | Requis | Description        |
| ------- | ------------- | ------ | ------------------ |
| pccZone | string (path) | Oui    | Nom de la zone PCC |

**Réponse**: `long[]`

**Action IAM**: `account:apiovh:pccVMware/location/hostProfile/get`

### GET /dedicatedCloud/location/{pccZone}/hostProfile/{id}

Récupère un profil de host.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom     | Type          | Requis | Description          |
| ------- | ------------- | ------ | -------------------- |
| pccZone | string (path) | Oui    | Nom de la zone PCC   |
| id      | long (path)   | Oui    | ID du profil de host |

**Réponse**: `dedicatedCloud.HostProfile`

**Action IAM**: `account:apiovh:pccVMware/location/hostProfile/get`

---

## Hypervisors

### GET /dedicatedCloud/location/{pccZone}/hypervisor

Liste les versions d'hyperviseurs.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom     | Type          | Requis | Description        |
| ------- | ------------- | ------ | ------------------ |
| pccZone | string (path) | Oui    | Nom de la zone PCC |

**Réponse**: `string[]`

**Action IAM**: `account:apiovh:pccVMware/location/hypervisor/get`

### GET /dedicatedCloud/location/{pccZone}/hypervisor/{shortName}

Récupère un hyperviseur.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom       | Type          | Requis | Description                |
| --------- | ------------- | ------ | -------------------------- |
| pccZone   | string (path) | Oui    | Nom de la zone PCC         |
| shortName | string (path) | Oui    | Nom court de l'hyperviseur |

**Réponse**: `dedicatedCloud.Os`

**Action IAM**: `account:apiovh:pccVMware/location/hypervisor/get`

---

## Backup Repositories

### GET /dedicatedCloud/{serviceName}/backupRepository

Liste les répertoires de backup.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom         | Type          | Requis | Description        |
| ----------- | ------------- | ------ | ------------------ |
| serviceName | string (path) | Oui    | Domaine du service |

**Réponse**: `long[]`

**Action IAM**: `pccVMware:apiovh:backupRepository/get`

### GET /dedicatedCloud/{serviceName}/backupRepository/{repositoryId}

Récupère un répertoire de backup.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| repositoryId | long (path)   | Oui    | ID du répertoire   |

**Réponse**: `dedicatedCloud.BackupRepository`

**Action IAM**: `pccVMware:apiovh:backupRepository/get`

---

## NSX-T Edge Deployment Check

### GET /dedicatedCloud/{serviceName}/canDeployNsxtEdgesOnGlobalDatastores

Vérifie si le global datastore a assez d'espace pour héberger des NSX-T edges.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom         | Type                                         | Requis | Description                       |
| ----------- | -------------------------------------------- | ------ | --------------------------------- |
| serviceName | string (path)                                | Oui    | Domaine du service                |
| count       | long (query)                                 | Non    | Nombre d'edges souhaités          |
| size        | dedicatedCloud.nsxt.NsxtEdgeSizeEnum (query) | Non    | Taille des edges (défaut: MEDIUM) |

**Réponse**: `boolean`

**Action IAM**: `pccVMware:apiovh:canDeployNsxtEdgesOnGlobalDatastores`

---

## Cluster Management

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster

Liste les clusters dans un datacenter.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |

**Réponse**: `long[]` - Liste des IDs de clusters

**Action IAM**: `pccVMware:apiovh:datacenter/cluster/get`

### GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster/{clusterId}

Récupère un cluster.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |
| clusterId    | long (path)   | Oui    | ID du cluster      |

**Réponse**: `dedicatedCloud.Cluster`

**Action IAM**: `pccVMware:apiovh:datacenter/cluster/get`

### POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster/{clusterId}/nsxt/create

Configure NSX-T sur un cluster.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |
| clusterId    | long (path)   | Oui    | ID du cluster      |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/cluster/nsxt/create`

### PUT /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster/{clusterId}/nsxt

Mise à jour de la configuration NSX-T.

**Méthode**: `PUT`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |
| clusterId    | long (path)   | Oui    | ID du cluster      |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/cluster/nsxt/edit`

### DELETE /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster/{clusterId}/nsxt

Déconfigure NSX-T sur un cluster.

**Méthode**: `DELETE`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom          | Type          | Requis | Description        |
| ------------ | ------------- | ------ | ------------------ |
| serviceName  | string (path) | Oui    | Domaine du service |
| datacenterId | long (path)   | Oui    | ID du datacenter   |
| clusterId    | long (path)   | Oui    | ID du cluster      |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:datacenter/cluster/nsxt/delete`

---

## Tasks

Les endpoints de tâches permettent de suivre l'état des opérations asynchrones.

### GET /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task

Liste les opérations associées à un réseau autorisé.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom             | Type                                 | Requis | Description           |
| --------------- | ------------------------------------ | ------ | --------------------- |
| serviceName     | string (path)                        | Oui    | Domaine du service    |
| networkAccessId | long (path)                          | Oui    | ID du réseau          |
| name            | string (query)                       | Non    | Filtre par nom (like) |
| state           | dedicatedCloud.TaskStateEnum (query) | Non    | Filtre par état (=)   |

**Réponse**: `long[]`

**Action IAM**: `pccVMware:apiovh:allowedNetwork/task/get`

### GET /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}

Récupère une opération.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom             | Type          | Requis | Description        |
| --------------- | ------------- | ------ | ------------------ |
| serviceName     | string (path) | Oui    | Domaine du service |
| networkAccessId | long (path)   | Oui    | ID du réseau       |
| taskId          | long (path)   | Oui    | ID de la tâche     |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:allowedNetwork/task/get`

### POST /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/changeMaintenanceExecutionDate

Change la date d'exécution d'une opération de maintenance.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom             | Type            | Requis | Description               |
| --------------- | --------------- | ------ | ------------------------- |
| serviceName     | string (path)   | Oui    | Domaine du service        |
| networkAccessId | long (path)     | Oui    | ID du réseau              |
| taskId          | long (path)     | Oui    | ID de la tâche            |
| executionDate   | datetime (body) | Oui    | Nouvelle date d'exécution |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:allowedNetwork/task/changeMaintenanceExecutionDate`

### POST /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}/task/{taskId}/resetTaskState

Relance une opération en erreur.

**Méthode**: `POST`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom             | Type          | Requis | Description           |
| --------------- | ------------- | ------ | --------------------- |
| serviceName     | string (path) | Oui    | Domaine du service    |
| networkAccessId | long (path)   | Oui    | ID du réseau          |
| taskId          | long (path)   | Oui    | ID de la tâche        |
| reason          | string (body) | Oui    | Raison du redémarrage |

**Réponse**: `dedicatedCloud.Task`

**Action IAM**: `pccVMware:apiovh:allowedNetwork/task/resetTaskState`

---

## Compliance

### GET /dedicatedCloud/{serviceName}/commercialRange/compliance

Récupère les plages commerciales conformes.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom         | Type          | Requis | Description        |
| ----------- | ------------- | ------ | ------------------ |
| serviceName | string (path) | Oui    | Domaine du service |

**Réponse**: `dedicatedCloud.compliantRanges[]`

**Action IAM**: `pccVMware:apiovh:commercialRange/compliance/get`

### GET /dedicatedCloud/{serviceName}/commercialRange/orderable

Récupère les plages commerciales commandables.

**Méthode**: `GET`  
**Authentification**: Requise  
**Statut API**: PRODUCTION

**Paramètres**:

| Nom         | Type          | Requis | Description        |
| ----------- | ------------- | ------ | ------------------ |
| serviceName | string (path) | Oui    | Domaine du service |

**Réponse**: `string[]`

**Action IAM**: `pccVMware:apiovh:commercialRange/orderable/get`

---

## API Status

| Endpoint                             | Status                                                         |
| ------------------------------------ | -------------------------------------------------------------- |
| La plupart des endpoints             | PRODUCTION                                                     |
| Certains endpoints de backup         | DEPRECATED (remplacés par `/order/cart/{cartId}/privateCloud`) |
| Endpoints de terminaison ZertoSingle | DEPRECATED (remplacés par `/remoteSites`)                      |
| Endpoints deprecated                 | Voir `deprecatedDate` et `deletionDate` dans la spécification  |

---

## Notes Importantes

1. **Authentification**: La plupart des endpoints nécessitent une authentification via les credentials OVHcloud (applicationKey et applicationSecret).

2. **Tâches asynchrones**: Les opérations POST retournent généralement un `Task` object. Vérifiez l'état via les endpoints `/task` correspondants.

3. **Paramètres de chemin**: Les paramètres entre accolades `{paramName}` sont obligatoires et doivent être remplacés par les valeurs appropriées.

4. **Dépréciation**: Certains endpoints sont marqués comme dépréciés avec une date de suppression. Utilisez les endpoints de remplacement indiqués.

5. **Zerto Single vs Multi**: Les endpoints `/disasterRecovery/zertoSingle/` sont destinés aux déploiements on-site, tandis que `/disasterRecovery/zerto/` est pour les infrastructures OVHcloud.

---

## Exemples d'Utilisation

### Lister les infrastructures

```bash
curl -X GET "https://api.ovh.com/v1/123456789012:region:us:dedicatedCloud" \
  -H "Authorization: Basic <base64-credentials>"
```

### Créer un datacenter

```bash
curl -X POST "https://api.ovh.com/v1/123456789012:region:us:dedicatedCloud/my-cloud/datacenter" \
  -H "Authorization: Basic <base64-credentials>" \
  -H "Content-Type: application/json" \
  -d '{
    "commercialRangeName": "commercial-range-1",
    "vrackName": "vrack-123"
  }'
```

### Activer le backup

```bash
curl -X POST "https://api.ovh.com/v1/123456789012:region:us:dedicatedCloud/my-cloud/datacenter/1/backup/changeProperties" \
  -H "Authorization: Basic <base64-credentials>" \
  -H "Content-Type: application/json" \
  -d '{
    "backupOffer": "STANDARD",
    "scheduleHour": "2",
    "mailAddress": "admin@example.com"
  }'
```

---

_Généré à partir de la spécification API OVHcloud v1.0_

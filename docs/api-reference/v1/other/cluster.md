# Managed Hadoop Cluster API

Cette documentation décrit l'API OVH Cloud pour la gestion des clusters Hadoop managés.

## Informations Générales

- **Ressource**: `/cluster/hadoop`
- **Base API**: `https://eu.api.ovh.com/v1`
- **Version API**: 1.0
- **Statut**: Stable production version

---

## Opérations

### 1. Lister les services disponibles

**Endpoint**: `GET /cluster/hadoop`

**Description**: List available services

**Méthode HTTP**: GET

**Paramètres**:

| Nom       | Type                                  | Paramètre | Requis | Description                  |
| --------- | ------------------------------------- | --------- | ------ | ---------------------------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | query     | false  | Filter resources on IAM tags |

**Réponse**: `string[]`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:get` (requis)

---

### 2. Obtenir les informations sur une commande de cluster

**Endpoint**: `GET /cluster/hadoop/orderInformations`

**Description**: Get informations about the order of one cluster

**Méthode HTTP**: GET

**Paramètres**: Aucun

**Réponse**: `cluster.hadoop.OrderInformations`

**Authentication**: Requise

**IAM Action**: `account:apiovh:clusterHadoop/orderInformations/get` (requis)

**Description du modèle de réponse**:

Détails sur la commande d'un cluster Hadoop

| Propriété               | Type   | Requis | Lecture seule | Description                                 |
| ----------------------- | ------ | ------ | ------------- | ------------------------------------------- |
| `maximumOrderableNodes` | `long` | true   | true          | Maximal number of Node allowed in one order |
| `minimumOrderableNodes` | `long` | true   | true          | Minimum number of Node allowed in one order |

---

### 3. Obtenir les profils de nœuds commandables

**Endpoint**: `GET /cluster/hadoop/orderableNodeProfiles`

**Description**: Get the orderable node profiles and their characteristics

**Méthode HTTP**: GET

**Paramètres**: Aucun

**Réponse**: `cluster.hadoop.NodeBillingProfile[]`

**Authentication**: Requise

**IAM Action**: `account:apiovh:clusterHadoop/orderableNodeProfiles/get` (requis)

**Description du modèle de réponse**:

Informations détaillées sur un profil de facturation de nœud

| Propriété          | Type                               | Requis | Lecture seule | Description                                           |
| ------------------ | ---------------------------------- | ------ | ------------- | ----------------------------------------------------- |
| `CPUFrequency`     | `complexType.UnitAndValue<double>` | false  | false         | Frequency of one CPU core                             |
| `diskCapacity`     | `complexType.UnitAndValue<long>`   | false  | false         | Total capacity available for HDFS                     |
| `nbCPUCores`       | `long`                             | false  | false         | Total number of the CPU cores                         |
| `nbCPUThreads`     | `long`                             | false  | false         | Total number of the CPU threads                       |
| `networkBandwidth` | `complexType.UnitAndValue<long>`   | false  | false         | Network speed of the link used for the Hadoop process |
| `nodeProfile`      | `string`                           | false  | false         | Name of the Node billing profile                      |
| `ramQuantity`      | `complexType.UnitAndValue<long>`   | false  | false         | Total amount of RAM                                   |

---

### 4. Obtenir les propriétés d'un cluster

**Endpoint**: `GET /cluster/hadoop/{serviceName}`

**Description**: Get this object properties

**Méthode HTTP**: GET

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.hadoopWithIAM`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:get` (requis)

**Description du modèle de réponse**:

Managed Hadoop Cluster

| Propriété           | Type                              | Requis | Lecture seule | Description                                                    |
| ------------------- | --------------------------------- | ------ | ------------- | -------------------------------------------------------------- |
| `clouderaVersion`   | `string`                          | true   | true          | CDH and Cloudera Manager version                               |
| `iam`               | `iam.ResourceMetadata`            | false  | true          | IAM resource metadata                                          |
| `maxOrderableNodes` | `long`                            | true   | true          | Maximum quantity of nodes allowed to be ordered in the cluster |
| `name`              | `string`                          | true   | true          | Service name of your Cluster                                   |
| `state`             | `cluster.hadoop.ClusterStateEnum` | true   | true          | State of the Hadoop Cluster                                    |

**Valeurs possibles pour `state`**:

- `created`
- `creating`
- `deleted`
- `deleting`
- `delivered`
- `delivering`
- `toDeliver`

---

### 5. Obtenir les consommations actuelles

**Endpoint**: `GET /cluster/hadoop/{serviceName}/consumptions`

**Description**: Get the current consumptions that you will billed for on the next bill

**Méthode HTTP**: GET

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.ClusterConsumption`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:consumptions/get` (requis)

**Description du modèle de réponse**:

Detailed information on a Hadoop Cluster consumption

| Propriété  | Type                             | Requis | Lecture seule | Description               |
| ---------- | -------------------------------- | ------ | ------------- | ------------------------- |
| `quantity` | `complexType.UnitAndValue<long>` | false  | false         | Number of hours consummed |

---

### 6. Obtenir les ACL réseau associées

**Endpoint**: `GET /cluster/hadoop/{serviceName}/networkAcl`

**Description**: Network ACL associated with this Hadoop Cluster

**Méthode HTTP**: GET

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `ipBlock[]`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:networkAcl/get` (requis)

---

### 7. Ajouter une ACL au cluster

**Endpoint**: `POST /cluster/hadoop/{serviceName}/networkAcl`

**Description**: Add an ACL to your cluster

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type      | Paramètre | Requis | Description                       |
| ------------- | --------- | --------- | ------ | --------------------------------- |
| `block`       | `ipBlock` | body      | false  | IP block to allow                 |
| `description` | `string`  | body      | false  | Free description                  |
| `serviceName` | `string`  | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:networkAcl/create` (requis)

**Description du modèle de réponse**:

Operation on a Hadoop Cluster component

| Propriété | Type                                | Requis | Lecture seule | Description        |
| --------- | ----------------------------------- | ------ | ------------- | ------------------ |
| `name`    | `string`                            | false  | true          | Operation name     |
| `status`  | `cluster.hadoop.OperationStateEnum` | false  | true          | Current Task state |
| `taskId`  | `long`                              | false  | true          |                    |

**Valeurs possibles pour `status`**:

- `cancelled`
- `doing`
- `done`
- `error`
- `todo`

---

### 8. Supprimer une ACL

**Endpoint**: `DELETE /cluster/hadoop/{serviceName}/networkAcl/{block}`

**Description**: Remove this ACL

**Méthode HTTP**: DELETE

**Paramètres**:

| Nom           | Type      | Paramètre | Requis | Description                       |
| ------------- | --------- | --------- | ------ | --------------------------------- |
| `block`       | `ipBlock` | path      | true   | IP Block to allow                 |
| `serviceName` | `string`  | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:networkAcl/delete` (requis)

---

### 9. Obtenir les propriétés d'une ACL

**Endpoint**: `GET /cluster/hadoop/{serviceName}/networkAcl/{block}`

**Description**: Get this object properties

**Méthode HTTP**: GET

**Paramètres**:

| Nom           | Type      | Paramètre | Requis | Description                       |
| ------------- | --------- | --------- | ------ | --------------------------------- |
| `block`       | `ipBlock` | path      | true   | IP Block to allow                 |
| `serviceName` | `string`  | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.NetworkAcl`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:networkAcl/get` (requis)

**Description du modèle de réponse**:

ACL for allowing ip blocks to access to your cluster

| Propriété     | Type                                 | Requis | Lecture seule | Description              |
| ------------- | ------------------------------------ | ------ | ------------- | ------------------------ |
| `block`       | `ipBlock`                            | false  | true          | IP Block to allow        |
| `description` | `string`                             | false  | false         | description of this ACL  |
| `state`       | `cluster.hadoop.NetworkAclStateEnum` | false  | true          | State of the NetworkAcl. |

**Valeurs possibles pour `state`**:

- `disabled`
- `enabled`
- `pending`

---

### 10. Modifier une ACL

**Endpoint**: `PUT /cluster/hadoop/{serviceName}/networkAcl/{block}`

**Description**: Alter this object properties

**Méthode HTTP**: PUT

**Paramètres**:

| Nom           | Type      | Paramètre | Requis | Description                       |
| ------------- | --------- | --------- | ------ | --------------------------------- |
| `block`       | `ipBlock` | path      | true   | IP Block to allow                 |
| `serviceName` | `string`  | path      | true   | The internal name of your cluster |

**Corps de la requête**: `cluster.hadoop.NetworkAcl`

| Propriété     | Type                                 | Requis | Lecture seule | Description              |
| ------------- | ------------------------------------ | ------ | ------------- | ------------------------ |
| `block`       | `ipBlock`                            | false  | false         | IP Block to allow        |
| `description` | `string`                             | false  | false         | description of this ACL  |
| `state`       | `cluster.hadoop.NetworkAclStateEnum` | false  | false         | State of the NetworkAcl. |

**Réponse**: `void`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:networkAcl/edit` (requis)

---

### 11. Supprimer un nœud du cluster

**Endpoint**: `DELETE /cluster/hadoop/{serviceName}/node/{hostname}`

**Description**: Remove this Node from the Cluster

**Méthode HTTP**: DELETE

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `hostname`    | `string` | path      | true   | Hostname of the node              |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:node/delete` (requis)

---

### 12. Obtenir les propriétés d'un nœud

**Endpoint**: `GET /cluster/hadoop/{serviceName}/node/{hostname}`

**Description**: Get this object properties

**Méthode HTTP**: GET

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `hostname`    | `string` | path      | true   | Hostname of the node              |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.Node`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:node/get` (requis)

**Description du modèle de réponse**:

Physical or Virtual Node

| Propriété            | Type                             | Requis | Lecture seule | Description                                      |
| -------------------- | -------------------------------- | ------ | ------------- | ------------------------------------------------ |
| `billingProfileName` | `cluster.hadoop.BillingNameEnum` | false  | true          | Name of the billing profile attached to the node |
| `hostname`           | `string`                         | false  | true          | Hostname of the node                             |
| `ip`                 | `ip`                             | false  | true          | IP of the Node                                   |
| `isRemovable`        | `boolean`                        | false  | true          | Whether or not the Node is removable             |
| `softwareProfile`    | `cluster.hadoop.NodeProfileEnum` | false  | true          | Profile of the Node                              |
| `state`              | `cluster.hadoop.NodeStateEnum`   | false  | true          | State of the Node                                |

**Valeurs possibles pour `billingProfileName`**:

- `100-small`
- `200-cpu-1`
- `220-cpu-3`
- `300-disk-1`
- `310-disk-3`
- `900-vm-1`

**Valeurs possibles pour `softwareProfile`**:

- `ApplicationServer`
- `BasicNode`
- `ClouderaManager`
- `MasterServer`
- `SecondaryServer`

**Valeurs possibles pour `state`**:

- `available`
- `delivered`
- `toDeploy`
- `unavailable`

---

### 13. Décommissionner un nœud

**Endpoint**: `POST /cluster/hadoop/{serviceName}/node/{hostname}/decommission`

**Description**: Decommission the node and all the services on it

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `hostname`    | `string` | path      | true   | Hostname of the node              |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:node/decommission` (requis)

---

### 14. Recommissionner un nœud

**Endpoint**: `POST /cluster/hadoop/{serviceName}/node/{hostname}/recommission`

**Description**: Recommission the node and all the services on it

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `hostname`    | `string` | path      | true   | Hostname of the node              |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:node/recommission` (requis)

---

### 15. Obtenir les rôles d'un nœud

**Endpoint**: `GET /cluster/hadoop/{serviceName}/node/{hostname}/role`

**Description**: Roles (ie set of Hadoop services) of the Node

**Méthode HTTP**: GET

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `hostname`    | `string` | path      | true   | Hostname of the node              |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.RoleTypeEnum[]`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:node/role/get` (requis)

**Valeurs possibles**:

- `cloudera_manager`
- `data_node`
- `elasticsearch_server`
- `hbase_master`
- `hbase_region_server`
- `hive_server2`
- `hue`
- `impala_daemon`
- `impala_server`
- `map_reduce_history_server`
- `name_node`
- `oozie_server`
- `open_tsdb`
- `secondary_name_node`
- `solr_server`
- `spark_master`
- `spark_worker`
- `sqoop_server`
- `yarn_node_manager`
- `yarn_resource_manager`
- `zoo_keeper`

---

### 16. Ajouter un rôle à un nœud

**Endpoint**: `POST /cluster/hadoop/{serviceName}/node/{hostname}/role`

**Description**: Add the Role to the Node

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `hostname`    | `string` | path      | true   | Hostname of the node              |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Corps de la requête**:

| Nom    | Type                          | Paramètre | Requis | Description |
| ------ | ----------------------------- | --------- | ------ | ----------- |
| `type` | `cluster.hadoop.RoleTypeEnum` | body      | true   | Role name   |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:node/role/create` (requis)

---

### 17. Supprimer un rôle d'un nœud

**Endpoint**: `DELETE /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}`

**Description**: Remove this Role from the Node

**Méthode HTTP**: DELETE

**Paramètres**:

| Nom           | Type                          | Paramètre | Requis | Description                       |
| ------------- | ----------------------------- | --------- | ------ | --------------------------------- |
| `hostname`    | `string`                      | path      | true   | Hostname of the node              |
| `serviceName` | `string`                      | path      | true   | The internal name of your cluster |
| `type`        | `cluster.hadoop.RoleTypeEnum` | path      | true   | Role name                         |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:node/role/delete` (requis)

---

### 18. Obtenir les propriétés d'un rôle

**Endpoint**: `GET /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}`

**Description**: Get this object properties

**Méthode HTTP**: GET

**Paramètres**:

| Nom           | Type                          | Paramètre | Requis | Description                       |
| ------------- | ----------------------------- | --------- | ------ | --------------------------------- |
| `hostname`    | `string`                      | path      | true   | Hostname of the node              |
| `serviceName` | `string`                      | path      | true   | The internal name of your cluster |
| `type`        | `cluster.hadoop.RoleTypeEnum` | path      | true   | Role name                         |

**Réponse**: `cluster.hadoop.Role`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:node/role/get` (requis)

**Description du modèle de réponse**:

Role (ie set of Hadoop services) of the Node

| Propriété | Type                          | Requis | Lecture seule | Description    |
| --------- | ----------------------------- | ------ | ------------- | -------------- |
| `id`      | `long`                        | false  | true          | ID of the Role |
| `type`    | `cluster.hadoop.RoleTypeEnum` | false  | true          | Role name      |

---

### 19. Redémarrer un rôle

**Endpoint**: `POST /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/restart`

**Description**: Restart the role on the node (THIS ACTION WILL RESTART OTHER DEPENDANT ROLES)

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type                          | Paramètre | Requis | Description                       |
| ------------- | ----------------------------- | --------- | ------ | --------------------------------- |
| `hostname`    | `string`                      | path      | true   | Hostname of the node              |
| `serviceName` | `string`                      | path      | true   | The internal name of your cluster |
| `type`        | `cluster.hadoop.RoleTypeEnum` | path      | true   | Role name                         |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:node/role/restart` (requis)

---

### 20. Démarrer un rôle

**Endpoint**: `POST /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/start`

**Description**: Start the role on the node

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type                          | Paramètre | Requis | Description                       |
| ------------- | ----------------------------- | --------- | ------ | --------------------------------- |
| `hostname`    | `string`                      | path      | true   | Hostname of the node              |
| `serviceName` | `string`                      | path      | true   | The internal name of your cluster |
| `type`        | `cluster.hadoop.RoleTypeEnum` | path      | true   | Role name                         |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:node/role/start` (requis)

---

### 21. Arrêter un rôle

**Endpoint**: `POST /cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/stop`

**Description**: Stop the role on the node (THIS ACTION WILL STOP OTHER DEPENDANT ROLES)

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type                          | Paramètre | Requis | Description                       |
| ------------- | ----------------------------- | --------- | ------ | --------------------------------- |
| `hostname`    | `string`                      | path      | true   | Hostname of the node              |
| `serviceName` | `string`                      | path      | true   | The internal name of your cluster |
| `type`        | `cluster.hadoop.RoleTypeEnum` | path      | true   | Role name                         |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:node/role/stop` (requis)

---

### 22. Obtenir les profils de facturation de nœuds

**Endpoint**: `GET /cluster/hadoop/{serviceName}/nodeBillingProfiles`

**Description**: Detailed description for each Node profile

**Méthode HTTP**: GET

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.NodeBillingProfile[]`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:nodeBillingProfiles/get` (requis)

---

### 23. Obtenir les consommations de nœuds

**Endpoint**: `GET /cluster/hadoop/{serviceName}/nodeConsumptions`

**Description**: Get the current node consumptions that you will billed for on the next bill

**Méthode HTTP**: GET

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.NodeConsumption[]`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:nodeConsumptions/get` (requis)

**Description du modèle de réponse**:

Detailed information on a node consumption of a Hadoop Cluster

| Propriété     | Type                             | Requis | Lecture seule | Description                                   |
| ------------- | -------------------------------- | ------ | ------------- | --------------------------------------------- |
| `hostname`    | `string`                         | false  | false         | Hostname of the consumed resource             |
| `nodeProfile` | `cluster.hadoop.BillingNameEnum` | false  | false         | Name of the node profile for the consumptions |
| `quantity`    | `complexType.UnitAndValue<long>` | false  | false         | Number of hours consummed                     |

---

### 24. Commander un nouveau nœud (tarification horaire)

**Endpoint**: `POST /cluster/hadoop/{serviceName}/orderNewNodeHourly`

**Description**: Order a new node in the cluster

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Corps de la requête**:

| Nom           | Type     | Paramètre | Requis | Description                    |
| ------------- | -------- | --------- | ------ | ------------------------------ |
| `nodeProfile` | `string` | body      | true   | Node profile you want to order |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:orderNewNodeHourly` (requis)

---

### 25. Lister les profils de nœuds commandables

**Endpoint**: `GET /cluster/hadoop/{serviceName}/orderableNodeProfiles`

**Description**: List of orderable Node profiles

**Méthode HTTP**: GET

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `string[]`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:orderableNodeProfiles/get` (requis)

---

### 26. Redémarrer le cluster

**Endpoint**: `POST /cluster/hadoop/{serviceName}/restart`

**Description**: Restart the Cloudera Manager Hadoop Cluster (THIS ACTION WILL RESTART EVERY SERVICE)

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:restart` (requis)

---

### 27. Redémarrer un service

**Endpoint**: `POST /cluster/hadoop/{serviceName}/service/restart`

**Description**: Restart a Cloudera Manager service (THIS ACTION WILL RESTART OTHER DEPENDANT SERVICES)

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Corps de la requête**:

| Nom       | Type                                    | Paramètre | Requis | Description                         |
| --------- | --------------------------------------- | --------- | ------ | ----------------------------------- |
| `service` | `cluster.hadoop.ClusterServiceNameEnum` | body      | true   | Name of the service to be restarted |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:service/restart` (requis)

**Valeurs possibles pour `service`**:

- `HBase`
- `HDFS`
- `HUE`
- `Hive`
- `Oozie`
- `Solr`
- `Spark`
- `Sqoop`
- `YARN`
- `ZooKeeper`

---

### 28. Démarrer un service

**Endpoint**: `POST /cluster/hadoop/{serviceName}/service/start`

**Description**: Start a Cloudera Manager service

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Corps de la requête**:

| Nom       | Type                                    | Paramètre | Requis | Description                       |
| --------- | --------------------------------------- | --------- | ------ | --------------------------------- |
| `service` | `cluster.hadoop.ClusterServiceNameEnum` | body      | true   | Name of the service to be started |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:service/start` (requis)

---

### 29. Arrêter un service

**Endpoint**: `POST /cluster/hadoop/{serviceName}/service/stop`

**Description**: Stop a Cloudera Manager service (THIS ACTION WILL STOP OTHER DEPENDANT SERVICES)

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Corps de la requête**:

| Nom       | Type                                    | Paramètre | Requis | Description                       |
| --------- | --------------------------------------- | --------- | ------ | --------------------------------- |
| `service` | `cluster.hadoop.ClusterServiceNameEnum` | body      | true   | Name of the service to be stopped |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:service/stop` (requis)

---

### 30. Obtenir les informations d'un service

**Endpoint**: `GET /cluster/hadoop/{serviceName}/serviceInfos`

**Description**: Get service information

**Méthode HTTP**: GET

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `services.Service`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:serviceInfos/get` (requis)

**Description du modèle de réponse**:

Details about a Service

| Propriété               | Type                         | Requis | Lecture seule | Description                                                          |
| ----------------------- | ---------------------------- | ------ | ------------- | -------------------------------------------------------------------- |
| `canDeleteAtExpiration` | `boolean`                    | false  | true          | Indicates that the service can be set up to be deleted at expiration |
| `contactAdmin`          | `coreTypes.AccountId:string` | false  | true          |                                                                      |
| `contactBilling`        | `coreTypes.AccountId:string` | false  | true          |                                                                      |
| `contactTech`           | `coreTypes.AccountId:string` | false  | true          |                                                                      |
| `creation`              | `date`                       | false  | true          |                                                                      |
| `domain`                | `string`                     | false  | true          |                                                                      |
| `engagedUpTo`           | `date`                       | false  | true          |                                                                      |
| `expiration`            | `date`                       | false  | true          |                                                                      |
| `possibleRenewPeriod`   | `long[]`                     | false  | true          | All the possible renew period of your service in month               |
| `renew`                 | `service.RenewType`          | false  | false         | Way of handling the renew                                            |
| `renewalType`           | `service.RenewalTypeEnum`    | false  | true          |                                                                      |
| `serviceId`             | `coreTypes.ServiceId:long`   | false  | true          |                                                                      |
| `status`                | `service.StateEnum`          | false  | true          |                                                                      |

**Valeurs possibles pour `renewalType`**:

- `automaticForcedProduct`
- `automaticV2012`
- `automaticV2014`
- `automaticV2016`
- `automaticV2024`
- `manual`
- `oneShot`
- `option`

**Valeurs possibles pour `status`**:

- `autorenewInProgress`
- `expired`
- `inCreation`
- `ok`
- `pendingDebt`
- `unPaid`

---

### 31. Mettre à jour les informations d'un service

**Endpoint**: `PUT /cluster/hadoop/{serviceName}/serviceInfos`

**Description**: Update service information

**Méthode HTTP**: PUT

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Corps de la requête**: `services.Service`

| Propriété               | Type                         | Requis | Lecture seule | Description                                                          |
| ----------------------- | ---------------------------- | ------ | ------------- | -------------------------------------------------------------------- |
| `canDeleteAtExpiration` | `boolean`                    | false  | false         | Indicates that the service can be set up to be deleted at expiration |
| `contactAdmin`          | `coreTypes.AccountId:string` | false  | false         |                                                                      |
| `contactBilling`        | `coreTypes.AccountId:string` | false  | false         |                                                                      |
| `contactTech`           | `coreTypes.AccountId:string` | false  | false         |                                                                      |
| `creation`              | `date`                       | false  | false         |                                                                      |
| `domain`                | `string`                     | false  | false         |                                                                      |
| `engagedUpTo`           | `date`                       | false  | false         |                                                                      |
| `expiration`            | `date`                       | false  | false         |                                                                      |
| `possibleRenewPeriod`   | `long[]`                     | false  | false         | All the possible renew period of your service in month               |
| `renew`                 | `service.RenewType`          | false  | false         | Way of handling the renew                                            |
| `renewalType`           | `service.RenewalTypeEnum`    | false  | false         |                                                                      |
| `serviceId`             | `coreTypes.ServiceId:long`   | false  | false         |                                                                      |
| `status`                | `service.StateEnum`          | false  | false         |                                                                      |

**Réponse**: `void`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:serviceInfos/edit` (requis)

---

### 32. Démarrer le cluster

**Endpoint**: `POST /cluster/hadoop/{serviceName}/start`

**Description**: Start the Cloudera Manager Hadoop Cluster

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:start` (requis)

---

### 33. Arrêter le cluster

**Endpoint**: `POST /cluster/hadoop/{serviceName}/stop`

**Description**: Stop a Cloudera Manager Hadoop Cluster (THIS ACTION WILL STOP EVERY SERVICE)

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:stop` (requis)

---

### 34. Lister les tâches associées au cluster

**Endpoint**: `GET /cluster/hadoop/{serviceName}/task`

**Description**: Tasks associated with this Hadoop Cluster

**Méthode HTTP**: GET

**Paramètres**:

| Nom           | Type                                | Paramètre | Requis | Description                             |
| ------------- | ----------------------------------- | --------- | ------ | --------------------------------------- |
| `serviceName` | `string`                            | path      | true   | The internal name of your cluster       |
| `status`      | `cluster.hadoop.OperationStateEnum` | query     | false  | Filter the value of status property (=) |

**Réponse**: `long[]`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:task/get` (requis)

---

### 35. Obtenir les propriétés d'une tâche

**Endpoint**: `GET /cluster/hadoop/{serviceName}/task/{taskId}`

**Description**: Get this object properties

**Méthode HTTP**: GET

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |
| `taskId`      | `long`   | path      | true   |                                   |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:task/get` (requis)

---

### 36. Terminer le service (suppression du cluster)

**Endpoint**: `POST /cluster/hadoop/{serviceName}/terminate`

**Description**: Terminate your service. THE CLUSTER WILL BE DELETED. ALL YOUR DATA WILL BE LOST

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:terminate` (requis)

---

### 37. Lister les utilisateurs associés au cluster

**Endpoint**: `GET /cluster/hadoop/{serviceName}/user`

**Description**: Users associated with this Hadoop Cluster

**Méthode HTTP**: GET

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Réponse**: `string[]`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:user/get` (requis)

---

### 38. Ajouter un utilisateur au cluster

**Endpoint**: `POST /cluster/hadoop/{serviceName}/user`

**Description**: Add an User to your cluster

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |

**Corps de la requête**:

| Nom               | Type       | Paramètre | Requis | Description                                                                    |
| ----------------- | ---------- | --------- | ------ | ------------------------------------------------------------------------------ |
| `clouderaManager` | `boolean`  | body      | true   | Whether or not the User is allowed to access to the Cloudera Manager interface |
| `httpFrontend`    | `boolean`  | body      | true   | Whether or not the User is allowed to access to the WebUI interfaces           |
| `hue`             | `boolean`  | body      | true   | Whether or not the User is allowed to access to the Hue interface              |
| `password`        | `password` | body      | true   | Password of the User                                                           |
| `username`        | `string`   | body      | true   | Username of the User                                                           |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:user/create` (requis)

---

### 39. Supprimer un utilisateur

**Endpoint**: `DELETE /cluster/hadoop/{serviceName}/user/{username}`

**Description**: Remove this User

**Méthode HTTP**: DELETE

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |
| `username`    | `string` | path      | true   | The username of the User          |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:user/delete` (requis)

---

### 40. Obtenir les propriétés d'un utilisateur

**Endpoint**: `GET /cluster/hadoop/{serviceName}/user/{username}`

**Description**: Get this object properties

**Méthode HTTP**: GET

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |
| `username`    | `string` | path      | true   | The username of the User          |

**Réponse**: `cluster.hadoop.User`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:user/get` (requis)

**Description du modèle de réponse**:

User allowed to access interfaces on your cluster

| Propriété         | Type      | Requis | Lecture seule | Description                                                                    |
| ----------------- | --------- | ------ | ------------- | ------------------------------------------------------------------------------ |
| `clouderaManager` | `boolean` | false  | false         | Whether or not the User is allowed to access to the Cloudera Manager interface |
| `httpFrontend`    | `boolean` | false  | false         | Whether or not the User is allowed to access to the WebUI interfaces           |
| `hue`             | `boolean` | false  | false         | Whether or not the User is allowed to access to the Hue interface              |
| `username`        | `string`  | false  | true          | The username of the User                                                       |

---

### 41. Modifier un utilisateur

**Endpoint**: `PUT /cluster/hadoop/{serviceName}/user/{username}`

**Description**: Alter this object properties

**Méthode HTTP**: PUT

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |
| `username`    | `string` | path      | true   | The username of the User          |

**Corps de la requête**: `cluster.hadoop.User`

| Propriété         | Type      | Requis | Lecture seule | Description                                                                    |
| ----------------- | --------- | ------ | ------------- | ------------------------------------------------------------------------------ |
| `clouderaManager` | `boolean` | false  | false         | Whether or not the User is allowed to access to the Cloudera Manager interface |
| `httpFrontend`    | `boolean` | false  | false         | Whether or not the User is allowed to access to the WebUI interfaces           |
| `hue`             | `boolean` | false  | false         | Whether or not the User is allowed to access to the Hue interface              |
| `username`        | `string`  | false  | false         | The username of the User                                                       |

**Réponse**: `void`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:user/edit` (requis)

---

### 42. Réinitialiser le mot de passe d'un utilisateur

**Endpoint**: `POST /cluster/hadoop/{serviceName}/user/{username}/resetPassword`

**Description**: Reset the password for a given Hadoop Cluster User

**Méthode HTTP**: POST

**Paramètres**:

| Nom           | Type     | Paramètre | Requis | Description                       |
| ------------- | -------- | --------- | ------ | --------------------------------- |
| `serviceName` | `string` | path      | true   | The internal name of your cluster |
| `username`    | `string` | path      | true   | The username of the User          |

**Corps de la requête**:

| Nom        | Type       | Paramètre | Requis | Description          |
| ---------- | ---------- | --------- | ------ | -------------------- |
| `password` | `password` | body      | true   | Password of the User |

**Réponse**: `cluster.hadoop.Task`

**Authentication**: Requise

**IAM Action**: `clusterHadoop:apiovh:user/resetPassword` (requis)

---

## Modèles de données

### BillingNameEnum

Description: All billing profile names

| Valeur       |
| ------------ |
| `100-small`  |
| `200-cpu-1`  |
| `220-cpu-3`  |
| `300-disk-1` |
| `310-disk-3` |
| `900-vm-1`   |

---

### ClusterConsumption

Description: Detailed information on a Hadoop Cluster consumption

| Propriété  | Type                             | Requis | Lecture seule | Description               |
| ---------- | -------------------------------- | ------ | ------------- | ------------------------- |
| `quantity` | `complexType.UnitAndValue<long>` | false  | false         | Number of hours consummed |

---

### ClusterServiceNameEnum

Description: All services names in a Hadoop Cluster

| Valeur      |
| ----------- |
| `HBase`     |
| `HDFS`      |
| `HUE`       |
| `Hive`      |
| `Oozie`     |
| `Solr`      |
| `Spark`     |
| `Sqoop`     |
| `YARN`      |
| `ZooKeeper` |

---

### ClusterStateEnum

Description: All states a Hadoop Cluster can be in

| Valeur       |
| ------------ |
| `created`    |
| `creating`   |
| `deleted`    |
| `deleting`   |
| `delivered`  |
| `delivering` |
| `toDeliver`  |

---

### NetworkAcl

Description: ACL for allowing ip blocks to access to your cluster

| Propriété     | Type                                 | Requis | Lecture seule | Description              |
| ------------- | ------------------------------------ | ------ | ------------- | ------------------------ |
| `block`       | `ipBlock`                            | false  | true          | IP Block to allow        |
| `description` | `string`                             | false  | false         | description of this ACL  |
| `state`       | `cluster.hadoop.NetworkAclStateEnum` | false  | true          | State of the NetworkAcl. |

---

### NetworkAclStateEnum

Description: All states a Hadoop Cluster NetworkAcl can be in

| Valeur     |
| ---------- |
| `disabled` |
| `enabled`  |
| `pending`  |

---

### Node

Description: Physical or Virtual Node

| Propriété            | Type                             | Requis | Lecture seule | Description                                      |
| -------------------- | -------------------------------- | ------ | ------------- | ------------------------------------------------ |
| `billingProfileName` | `cluster.hadoop.BillingNameEnum` | false  | true          | Name of the billing profile attached to the node |
| `hostname`           | `string`                         | false  | true          | Hostname of the node                             |
| `ip`                 | `ip`                             | false  | true          | IP of the Node                                   |
| `isRemovable`        | `boolean`                        | false  | true          | Whether or not the Node is removable             |
| `softwareProfile`    | `cluster.hadoop.NodeProfileEnum` | false  | true          | Profile of the Node                              |
| `state`              | `cluster.hadoop.NodeStateEnum`   | false  | true          | State of the Node                                |

---

### NodeBillingProfile

Description: Detailed information on a node billing profile

| Propriété          | Type                               | Requis | Lecture seule | Description                                           |
| ------------------ | ---------------------------------- | ------ | ------------- | ----------------------------------------------------- |
| `CPUFrequency`     | `complexType.UnitAndValue<double>` | false  | false         | Frequency of one CPU core                             |
| `diskCapacity`     | `complexType.UnitAndValue<long>`   | false  | false         | Total capacity available for HDFS                     |
| `nbCPUCores`       | `long`                             | false  | false         | Total number of the CPU cores                         |
| `nbCPUThreads`     | `long`                             | false  | false         | Total number of the CPU threads                       |
| `networkBandwidth` | `complexType.UnitAndValue<long>`   | false  | false         | Network speed of the link used for the Hadoop process |
| `nodeProfile`      | `string`                           | false  | false         | Name of the Node billing profile                      |
| `ramQuantity`      | `complexType.UnitAndValue<long>`   | false  | false         | Total amount of RAM                                   |

---

### NodeConsumption

Description: Detailed information on a node consumption of a Hadoop Cluster

| Propriété     | Type                             | Requis | Lecture seule | Description                                   |
| ------------- | -------------------------------- | ------ | ------------- | --------------------------------------------- |
| `hostname`    | `string`                         | false  | false         | Hostname of the consumed resource             |
| `nodeProfile` | `cluster.hadoop.BillingNameEnum` | false  | false         | Name of the node profile for the consumptions |
| `quantity`    | `complexType.UnitAndValue<long>` | false  | false         | Number of hours consummed                     |

---

### NodeProfileEnum

Description: All profiles a Hadoop Cluster Node can be

| Valeur              |
| ------------------- |
| `ApplicationServer` |
| `BasicNode`         |
| `ClouderaManager`   |
| `MasterServer`      |
| `SecondaryServer`   |

---

### NodeStateEnum

Description: All states a Hadoop Cluster Node can be in

| Valeur        |
| ------------- |
| `available`   |
| `delivered`   |
| `toDeploy`    |
| `unavailable` |

---

### OperationStateEnum

Description: All states a Hadoop Cluster Cloud Task can be in

| Valeur      |
| ----------- |
| `cancelled` |
| `doing`     |
| `done`      |
| `error`     |
| `todo`      |

---

### OrderInformations

Description: Detailed information on the order of one Hadoop Cluster

| Propriété               | Type   | Requis | Lecture seule | Description                                 |
| ----------------------- | ------ | ------ | ------------- | ------------------------------------------- |
| `maximumOrderableNodes` | `long` | false  | false         | Maximal number of Node allowed in one order |
| `minimumOrderableNodes` | `long` | false  | false         | Minimum number of Node allowed in one order |

---

### Role

Description: Role (ie set of Hadoop services) of the Node

| Propriété | Type                          | Requis | Lecture seule | Description    |
| --------- | ----------------------------- | ------ | ------------- | -------------- |
| `id`      | `long`                        | false  | true          | ID of the Role |
| `type`    | `cluster.hadoop.RoleTypeEnum` | false  | true          | Role name      |

---

### RoleTypeEnum

Description: All roles a Hadoop Cluster Node can be

| Valeur                      |
| --------------------------- |
| `cloudera_manager`          |
| `data_node`                 |
| `elasticsearch_server`      |
| `hbase_master`              |
| `hbase_region_server`       |
| `hive_server2`              |
| `hue`                       |
| `impala_daemon`             |
| `impala_server`             |
| `map_reduce_history_server` |
| `name_node`                 |
| `oozie_server`              |
| `open_tsdb`                 |
| `secondary_name_node`       |
| `solr_server`               |
| `spark_master`              |
| `spark_worker`              |
| `sqoop_server`              |
| `yarn_node_manager`         |
| `yarn_resource_manager`     |
| `zoo_keeper`                |

---

### Task

Description: Operation on a Hadoop Cluster component

| Propriété | Type                                | Requis | Lecture seule | Description        |
| --------- | ----------------------------------- | ------ | ------------- | ------------------ |
| `name`    | `string`                            | false  | true          | Operation name     |
| `status`  | `cluster.hadoop.OperationStateEnum` | false  | true          | Current Task state |
| `taskId`  | `long`                              | false  | true          |                    |

---

### User

Description: User allowed to access interfaces on your cluster

| Propriété         | Type      | Requis | Lecture seule | Description                                                                    |
| ----------------- | --------- | ------ | ------------- | ------------------------------------------------------------------------------ |
| `clouderaManager` | `boolean` | false  | false         | Whether or not the User is allowed to access to the Cloudera Manager interface |
| `httpFrontend`    | `boolean` | false  | false         | Whether or not the User is allowed to access to the WebUI interfaces           |
| `hue`             | `boolean` | false  | false         | Whether or not the User is allowed to access to the Hue interface              |
| `username`        | `string`  | false  | true          | The username of the User                                                       |

---

### hadoop

Description: Managed Hadoop Cluster

| Propriété           | Type                              | Requis | Lecture seule | Description                                                    |
| ------------------- | --------------------------------- | ------ | ------------- | -------------------------------------------------------------- |
| `clouderaVersion`   | `string`                          | false  | true          | CDH and Cloudera Manager version                               |
| `maxOrderableNodes` | `long`                            | false  | true          | Maximum quantity of nodes allowed to be ordered in the cluster |
| `name`              | `string`                          | false  | true          | Service name of your Cluster                                   |
| `state`             | `cluster.hadoop.ClusterStateEnum` | false  | true          | State of the Hadoop Cluster                                    |

---

### hadoopWithIAM

Description: Managed Hadoop Cluster

| Propriété           | Type                              | Requis | Lecture seule | Description                                                    |
| ------------------- | --------------------------------- | ------ | ------------- | -------------------------------------------------------------- |
| `clouderaVersion`   | `string`                          | false  | true          | CDH and Cloudera Manager version                               |
| `iam`               | `iam.ResourceMetadata`            | false  | true          | IAM resource metadata                                          |
| `maxOrderableNodes` | `long`                            | false  | true          | Maximum quantity of nodes allowed to be ordered in the cluster |
| `name`              | `string`                          | false  | true          | Service name of your Cluster                                   |
| `state`             | `cluster.hadoop.ClusterStateEnum` | false  | true          | State of the Hadoop Cluster                                    |

---

### UnitAndValue

Description: A numeric value tagged with its unit

| Propriété | Type     | Requis | Lecture seule | Description |
| --------- | -------- | ------ | ------------- | ----------- |
| `unit`    | `string` | false  | false         |             |
| `value`   | `T`      | false  | false         |             |

---

### ResourceMetadata

Description: IAM resource metadata embedded in services models

| Propriété     | Type                             | Requis | Lecture seule | Description                                                              |
| ------------- | -------------------------------- | ------ | ------------- | ------------------------------------------------------------------------ |
| `displayName` | `string`                         | false  | true          | Resource display name                                                    |
| `id`          | `uuid`                           | false  | true          | Unique identifier of the resource                                        |
| `state`       | `iam.ResourceMetadata.StateEnum` | false  | true          | Resource state                                                           |
| `tags`        | `map[string]string`              | false  | true          | Resource tags. Tags that were internally computed are prefixed with ovh: |
| `urn`         | `string`                         | false  | true          | Unique resource name used in policies                                    |

---

### StateEnum

Description: Resource state

| Valeur        |
| ------------- |
| `EXPIRED`     |
| `IN_CREATION` |
| `OK`          |
| `SUSPENDED`   |

---

### TagFilter

Description: Resource tag filter

| Propriété  | Type                                  | Requis | Lecture seule | Description                                                        |
| ---------- | ------------------------------------- | ------ | ------------- | ------------------------------------------------------------------ |
| `operator` | `iam.resource.TagFilter.OperatorEnum` | false  | true          | Operator to use in order to filter on the value (defaults to 'EQ') |
| `value`    | `string`                              | false  | true          | Value to use in order to filter tags                               |

---

### TagFilter.OperatorEnum

Description: Operator that can be used in order to filter resources tags

| Valeur    |
| --------- |
| `EQ`      |
| `EXISTS`  |
| `ILIKE`   |
| `LIKE`    |
| `NEQ`     |
| `NEXISTS` |

---

### RenewType

Description: Map a possible renew for a specific service

| Propriété            | Type      | Requis | Lecture seule | Description                                       |
| -------------------- | --------- | ------ | ------------- | ------------------------------------------------- |
| `automatic`          | `boolean` | false  | false         | The service is automatically renewed              |
| `deleteAtExpiration` | `boolean` | false  | false         | The service will be deleted at expiration         |
| `forced`             | `boolean` | false  | false         | The service forced to be renewed                  |
| `manualPayment`      | `boolean` | false  | false         | The service needs to be manually renewed and paid |
| `period`             | `long`    | false  | false         | period of renew in month                          |

---

### RenewalTypeEnum

Description: Detailed renewal type of a service

| Valeur                   |
| ------------------------ |
| `automaticForcedProduct` |
| `automaticV2012`         |
| `automaticV2014`         |
| `automaticV2016`         |
| `automaticV2024`         |
| `manual`                 |
| `oneShot`                |
| `option`                 |

---

### StateEnum

Description: Detailed renewal type of a service

| Valeur                |
| --------------------- |
| `autorenewInProgress` |
| `expired`             |
| `inCreation`          |
| `ok`                  |
| `pendingDebt`         |
| `unPaid`              |

---

### Service

Description: Details about a Service

| Propriété               | Type                         | Requis | Lecture seule | Description                                                          |
| ----------------------- | ---------------------------- | ------ | ------------- | -------------------------------------------------------------------- |
| `canDeleteAtExpiration` | `boolean`                    | false  | true          | Indicates that the service can be set up to be deleted at expiration |
| `contactAdmin`          | `coreTypes.AccountId:string` | false  | true          |                                                                      |
| `contactBilling`        | `coreTypes.AccountId:string` | false  | true          |                                                                      |
| `contactTech`           | `coreTypes.AccountId:string` | false  | true          |                                                                      |
| `creation`              | `date`                       | false  | true          |                                                                      |
| `domain`                | `string`                     | false  | true          |                                                                      |
| `engagedUpTo`           | `date`                       | false  | true          |                                                                      |
| `expiration`            | `date`                       | false  | true          |                                                                      |
| `possibleRenewPeriod`   | `long[]`                     | false  | true          | All the possible renew period of your service in month               |
| `renew`                 | `service.RenewType`          | false  | false         | Way of handling the renew                                            |
| `renewalType`           | `service.RenewalTypeEnum`    | false  | true          |                                                                      |
| `serviceId`             | `coreTypes.ServiceId:long`   | false  | true          |                                                                      |
| `status`                | `service.StateEnum`          | false  | true          |                                                                      |

---

## Notes importantes

### ⚠️ Opérations destructives

Les opérations suivantes sont destructives et doivent être utilisées avec précaution :

- **Terminer le cluster** (`/cluster/hadoop/{serviceName}/terminate`) : Supprime définitivement le cluster et toutes les données associées.
- **Supprimer un nœud** (`/cluster/hadoop/{serviceName}/node/{hostname}/delete`) : Retire le nœud du cluster.
- **Supprimer un rôle** (`/cluster/hadoop/{serviceName}/node/{hostname}/role/{type}/delete`) : Retire le rôle du nœud.
- **Supprimer un utilisateur** (`/cluster/hadoop/{serviceName}/user/{username}/delete`) : Retire l'utilisateur du cluster.

### ⚠️ Opérations affectant tous les services

Les opérations suivantes affectent tous les services du cluster :

- **Redémarrer le cluster** (`/cluster/hadoop/{serviceName}/restart`) : Redémarre le cluster (redémarre tous les services).
- **Arrêter le cluster** (`/cluster/hadoop/{serviceName}/stop`) : Arrête le cluster (arrête tous les services).
- **Redémarrer un service** (`/cluster/hadoop/{serviceName}/service/restart`) : Redémarre un service (redémarre les services dépendants).
- **Arrêter un service** (`/cluster/hadoop/{serviceName}/service/stop`) : Arrête un service (arrête les services dépendants).

### 🔐 Authentification

Toutes les opérations nécessitent une authentification via les credentials OVH Cloud. L'authentification est gérée par le type de credentials `OVH API`.

### 📝 Filtrage IAM

Certaines opérations supportent le filtrage des ressources via des tags IAM (`iamTags`), permettant de restreindre l'accès aux ressources répondant à des critères spécifiques.

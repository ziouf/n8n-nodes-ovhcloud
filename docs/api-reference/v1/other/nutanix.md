# Nutanix Cluster Node Documentation

## Overview

This document describes the Nutanix Cluster node implementation for the OVHcloud API. The Nutanix Cluster node allows users to manage Nutanix clusters, including operations like listing clusters, fetching availabilities, updating service information, and terminating nodes.

---

## Credentials

The Nutanix Cluster node uses the `OVH API` credential type for authentication. Ensure you have configured the following authentication parameters before using the node:

- **Host**: The OVHcloud API host (e.g., `https://api.ovh.com`)
- **Application Key**: Your OVHcloud application key
- **Application Secret**: Your OVHcloud application secret
- **Consumer Key**: Your OVHcloud consumer key

---

## Node Properties

### General Properties

| Property         | Type     | Required | Description                                                                                             |
| ---------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------- |
| **svcOperation** | `string` | ✅       | The operation to perform. Possible values: `get`, `list`, `create`, `update`, `delete`, or `terminate`. |
| **svcType**      | `string` | ✅       | The type of service. Possible values: `cluster`, `serviceInfos`, `nodes`, or `nodes/{server}`.          |

---

## Operations

### Get List of Owned Nutanix Clusters

- **Path**: `/nutanix`
- **Method**: `GET`
- **Authentication**: Required (`OVH API` credential type)
- **Status**: Stable production version
- **Description**: Get a list of owned Nutanix clusters.
- **IAM Actions**:
  - `nutanix:apiovh:get` (Required)

#### Query Parameters

| Parameter   | Type                                  | Required | Description                   |
| ----------- | ------------------------------------- | -------- | ----------------------------- |
| **iamTags** | `map[string][]iam.resource.TagFilter` | ❌       | Filter resources on IAM tags. |

#### Example Request

```bash
curl -X GET "https://eu.api.ovh.com/v1/nutanix" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP"
```

---

### Fetch Availabilities for a Given Cluster Configuration

- **Path**: `/nutanix/availabilities`
- **Method**: `GET`
- **Authentication**: Not required
- **Status**: Stable production version
- **Description**: Fetch availabilities for a given cluster configuration.

#### Query Parameters

| Parameter            | Type                           | Required | Description                                      |
| -------------------- | ------------------------------ | -------- | ------------------------------------------------ |
| **erasureCoding**    | `boolean`                      | ❌       | Filter on erasure coding activation.             |
| **memory**           | `string`                       | ❌       | The name of the memory hardware part.            |
| **planCode**         | `string`                       | ❌       | The plan code in which the hardware is involved. |
| **quantity**         | `long`                         | ✅       | Node quantity.                                   |
| **rackAwareness**    | `boolean`                      | ❌       | Filter on rack awareness activation.             |
| **redundancyFactor** | `nutanix.RedundancyFactorEnum` | ❌       | Filter on redundancy factor (e.g., `2`, `3`).    |
| **server**           | `string`                       | ❌       | The name of the base hardware.                   |
| **storage**          | `string`                       | ❌       | The name of the storage hardware part.           |
| **systemStorage**    | `string`                       | ❌       | The name of the system storage hardware part.    |

#### Example Request

```bash
curl -X GET "https://eu.api.ovh.com/v1/nutanix/availabilities?quantity=10" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP"
```

---

### List Raw Availabilities for Nutanix Clusters

- **Path**: `/nutanix/availabilities/raw`
- **Method**: `GET`
- **Authentication**: Not required
- **Status**: Stable production version
- **Description**: List raw availability for Nutanix clusters.

#### Query Parameters

| Parameter              | Type                           | Required | Description                                                                                 |
| ---------------------- | ------------------------------ | -------- | ------------------------------------------------------------------------------------------- |
| **datacenters**        | `string`                       | ❌       | The names of datacenters separated by commas.                                               |
| **deploymentType**     | `nutanix.DeploymentTypeEnum`   | ❌       | Filter on deployment type (e.g., `NodeAwareness`).                                          |
| **erasureCoding**      | `boolean`                      | ❌       | Filter on erasure coding activation.                                                        |
| **excludeDatacenters** | `boolean`                      | ❌       | If `true`, all datacenters are returned except those listed in the `datacenters` parameter. |
| **excludeRegions**     | `boolean`                      | ❌       | If `true`, all regions are returned except those listed in the `regions` parameter.         |
| **memory**             | `string`                       | ❌       | The name of the memory hardware part.                                                       |
| **planCode**           | `string`                       | ❌       | The plan code in which the hardware is involved.                                            |
| **quantity**           | `long`                         | ✅       | Node quantity.                                                                              |
| **redundancyFactor**   | `nutanix.RedundancyFactorEnum` | ❌       | Filter on redundancy factor (e.g., `2`, `3`).                                               |
| **regions**            | `string`                       | ❌       | The names of regions separated by commas.                                                   |
| **server**             | `string`                       | ❌       | The name of the base hardware.                                                              |
| **storage**            | `string`                       | ❌       | The name of the storage hardware part.                                                      |
| **systemStorage**      | `string`                       | ❌       | The name of the system storage hardware part.                                               |

#### Example Request

```bash
curl -X GET "https://eu.api.ovh.com/v1/nutanix/availabilities/raw?quantity=10&excludeDatacenters=true" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP"
```

---

### Fetch Available Nutanix Versions

- **Path**: `/nutanix/availableVersions`
- **Method**: `GET`
- **Authentication**: Not required
- **Status**: Stable production version
- **Description**: Fetch the available Nutanix versions to install.

#### Query Parameters

| Parameter | Type     | Required | Description                                           |
| --------- | -------- | -------- | ----------------------------------------------------- |
| **fqn**   | `string` | ❌       | Fully qualified name and unique name of the hardware. |

#### Example Request

```bash
curl -X GET "https://eu.api.ovh.com/v1/nutanix/availableVersions" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP"
```

---

### Fetch Requirements for a Given Cluster Configuration

- **Path**: `/nutanix/requirements`
- **Method**: `GET`
- **Authentication**: Not required
- **Status**: Stable production version
- **Description**: Fetch the requirements for a given cluster configuration.

#### Query Parameters

| Parameter            | Type                           | Required | Description                                   |
| -------------------- | ------------------------------ | -------- | --------------------------------------------- |
| **erasureCoding**    | `boolean`                      | ✅       | Filter on erasure coding activation.          |
| **rackAwareness**    | `boolean`                      | ✅       | Filter on rack awareness activation.          |
| **redundancyFactor** | `nutanix.RedundancyFactorEnum` | ✅       | Filter on redundancy factor (e.g., `2`, `3`). |

#### Example Request

```bash
curl -X GET "https://eu.api.ovh.com/v1/nutanix/requirements?erasureCoding=true&rackAwareness=false&redundancyFactor=2" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP"
```

---

### Get Nutanix Cluster Info

- **Path**: `/nutanix/{serviceName}`
- **Method**: `GET`
- **Authentication**: Required (`OVH API` credential type)
- **Status**: Stable production version
- **Description**: Get detailed information about a Nutanix cluster.
- **IAM Actions**:
  - `nutanix:apiovh:get` (Required)

#### Path Parameters

| Parameter       | Type     | Required | Description                      |
| --------------- | -------- | -------- | -------------------------------- |
| **serviceName** | `string` | ✅       | The name of the Nutanix cluster. |

#### Example Request

```bash
curl -X GET "https://eu.api.ovh.com/v1/nutanix/my-cluster-name" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP"
```

---

### Update Nutanix Cluster Info

- **Path**: `/nutanix/{serviceName}`
- **Method**: `PUT`
- **Authentication**: Required (`OVH API` credential type)
- **Status**: Stable production version
- **Description**: Update the configuration of a Nutanix cluster.
- **IAM Actions**:
  - `nutanix:apiovh:edit` (Required)

#### Path Parameters

| Parameter       | Type     | Required | Description                      |
| --------------- | -------- | -------- | -------------------------------- |
| **serviceName** | `string` | ✅       | The name of the Nutanix cluster. |

#### Query Parameters

| Parameter           | Type      | Required | Description                                 |
| ------------------- | --------- | -------- | ------------------------------------------- |
| **redeploycluster** | `boolean` | ❌       | If `true`, the cluster will be reinstalled. |
| **scaleOut**        | `boolean` | ❌       | If `true`, the cluster will be scaled out.  |

#### Body Parameters

| Parameter            | Type                    | Required | Description                              |
| -------------------- | ----------------------- | -------- | ---------------------------------------- |
| **controlPanelURL**  | `string`                | ✅       | The control panel URL for the cluster.   |
| **dataserviceIp**    | `ip`                    | ✅       | The dataservice IP address.              |
| **erasureCoding**    | `boolean`               | ✅       | Enable or disable erasure coding.        |
| **gatewayCidr**      | `ipBlock`               | ✅       | The internal gateway IP block with mask. |
| **infraVlanNumber**  | `long`                  | ✅       | The infra-VLAN number.                   |
| **ipfo**             | `ipBlock`               | ✅       | The external gateway IP block with mask. |
| **iplb**             | `string`                | ✅       | The IPLB ID.                             |
| **license**          | `string`                | ✅       | The cluster license.                     |
| **metadata**         | `nutanix.metadata`      | ✅       | The cluster metadata.                    |
| **name**             | `string`                | ✅       | The cluster name.                        |
| **nodes**            | `nutanix.nodeDetails[]` | ✅       | The list of nodes in the cluster.        |
| **prismCentral**     | `nutanix.prismcentral`  | ✅       | The Prism Central configuration.         |
| **prismElementVip**  | `ipv4`                  | ✅       | The Prism Element VIP address.           |
| **prismSecretId**    | `uuid`                  | ✅       | The UUID for the secret.                 |
| **rackAwareness**    | `boolean`               | ✅       | Enable or disable rack awareness.        |
| **redundancyFactor** | `long`                  | ✅       | The redundancy factor.                   |
| **version**          | `string`                | ✅       | The AOS version.                         |
| **vrack**            | `string`                | ✅       | The vRack name.                          |

#### Example Request

```bash
curl -X PUT "https://eu.api.ovh.com/v1/nutanix/my-cluster-name" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP" \
     -d '{
           "controlPanelURL": "https://control-panel.example.com",
           "dataserviceIp": "192.168.1.100",
           "erasureCoding": true,
           "gatewayCidr": "192.168.1.0/24",
           "infraVlanNumber": 100,
           "ipfo": "192.168.1.0/24",
           "iplb": "iplb-12345",
           "license": "license-key-12345",
           "metadata": {
             "initialCommitmentSize": 10
           },
           "name": "my-cluster-name",
           "nodes": [
             {
               "ahvIp": "192.168.1.1",
               "cvmIp": "192.168.1.2",
               "server": "node-1",
               "status": "DEPLOYED"
             }
           ],
           "prismCentral": {
             "ips": ["192.168.1.10"],
             "size": "small",
             "type": "alone",
             "vip": "192.168.1.10"
           },
           "prismSecretId": "123e4567-e89b-12d3-a456-426614174000",
           "rackAwareness": true,
           "redundancyFactor": 2,
           "version": "5.10.0",
           "vrack": "vrack-12345"
         }'
```

---

### Launch a Contact Change Procedure

- **Path**: `/nutanix/{serviceName}/changeContact`
- **Method**: `POST`
- **Authentication**: Required (`OVH API` credential type)
- **Status**: Stable production version
- **Description**: Launch a contact change procedure for a Nutanix cluster.
- **IAM Actions**:
  - `nutanix:apiovh:changeContact` (Required)

#### Path Parameters

| Parameter       | Type     | Required | Description                      |
| --------------- | -------- | -------- | -------------------------------- |
| **serviceName** | `string` | ✅       | The name of the Nutanix cluster. |

#### Body Parameters

| Parameter   | Type                     | Required | Description                  |
| ----------- | ------------------------ | -------- | ---------------------------- |
| **contact** | `services.changeContact` | ✅       | The new contact information. |

#### Example Request

```bash
curl -X POST "https://eu.api.ovh.com/v1/nutanix/my-cluster-name/changeContact" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP" \
     -d '{
           "contact": "new-contact@example.com"
         }'
```

---

### Confirm Service Termination

- **Path**: `/nutanix/{serviceName}/confirmTermination`
- **Method**: `POST`
- **Authentication**: Required (`OVH API` credential type)
- **Status**: Stable production version
- **Description**: Confirm the termination of a Nutanix cluster.
- **IAM Actions**:
  - `nutanix:apiovh:confirmTermination` (Required)

#### Path Parameters

| Parameter       | Type     | Required | Description                      |
| --------------- | -------- | -------- | -------------------------------- |
| **serviceName** | `string` | ✅       | The name of the Nutanix cluster. |

#### Body Parameters

| Parameter              | Type                          | Required | Description                                   |
| ---------------------- | ----------------------------- | -------- | --------------------------------------------- |
| **confirmTermination** | `services.confirmTermination` | ✅       | Confirmation payload for cluster termination. |

#### Example Request

```bash
curl -X POST "https://eu.api.ovh.com/v1/nutanix/my-cluster-name/confirmTermination" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP" \
     -d '{
           "confirmTermination": true
         }'
```

---

### Get All Nodes in a Cluster

- **Path**: `/nutanix/{serviceName}/nodes`
- **Method**: `GET`
- **Authentication**: Required (`OVH API` credential type)
- **Status**: Stable production version
- **Description**: Retrieve a list of all nodes in a specified Nutanix cluster.
- **IAM Actions**:
  - `nutanix:apiovh:nodes/get` (Required)

#### Path Parameters

| Parameter       | Type     | Required | Description                      |
| --------------- | -------- | -------- | -------------------------------- |
| **serviceName** | `string` | ✅       | The name of the Nutanix cluster. |

#### Example Request

```bash
curl -X GET "https://eu.api.ovh.com/v1/nutanix/my-cluster-name/nodes" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP"
```

---

### Get Node Details in a Cluster

- **Path**: `/nutanix/{serviceName}/nodes/{server}`
- **Method**: `GET`
- **Authentication**: Required (`OVH API` credential type)
- **Status**: Stable production version
- **Description**: Retrieve detailed information about a specific node in a Nutanix cluster.
- **IAM Actions**:
  - `nutanix:apiovh:nodes/get` (Required)

#### Path Parameters

| Parameter       | Type     | Required | Description                                      |
| --------------- | -------- | -------- | ------------------------------------------------ |
| **serviceName** | `string` | ✅       | The name of the Nutanix cluster.                 |
| **server**      | `string` | ✅       | The name of the server associated with the node. |

#### Example Request

```bash
curl -X GET "https://eu.api.ovh.com/v1/nutanix/my-cluster-name/nodes/node-1" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP"
```

---

### Reinstall a Node in a Cluster

- **Path**: `/nutanix/{serviceName}/nodes/{server}`
- **Method**: `PUT`
- **Authentication**: Required (`OVH API` credential type)
- **Status**: Stable production version
- **Description**: Reinstall a node in a Nutanix cluster.
- **IAM Actions**:
  - `nutanix:apiovh:node/edit` (Required)

#### Path Parameters

| Parameter       | Type     | Required | Description                                      |
| --------------- | -------- | -------- | ------------------------------------------------ |
| **serviceName** | `string` | ✅       | The name of the Nutanix cluster.                 |
| **server**      | `string` | ✅       | The name of the server associated with the node. |

#### Body Parameters

| Parameter   | Type     | Required | Description                   |
| ----------- | -------- | -------- | ----------------------------- |
| **version** | `string` | ✅       | The AOS version to reinstall. |

#### Example Request

```bash
curl -X PUT "https://eu.api.ovh.com/v1/nutanix/my-cluster-name/nodes/node-1" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP" \
     -d '{
           "version": "5.10.0"
         }'
```

---

### Deploy a Node in a Cluster

- **Path**: `/nutanix/{serviceName}/nodes/{server}/deploy`
- **Method**: `PUT`
- **Authentication**: Required (`OVH API` credential type)
- **Status**: Stable production version
- **Description**: Deploy a node in a Nutanix cluster.
- **IAM Actions**:
  - `nutanix:apiovh:deploy` (Required)

#### Path Parameters

| Parameter       | Type     | Required | Description                                      |
| --------------- | -------- | -------- | ------------------------------------------------ |
| **serviceName** | `string` | ✅       | The name of the Nutanix cluster.                 |
| **server**      | `string` | ✅       | The name of the server associated with the node. |

#### Body Parameters

| Parameter   | Type     | Required | Description                                       |
| ----------- | -------- | -------- | ------------------------------------------------- |
| **ahvIp**   | `ipv4`   | ❌       | The IP address of the AHV (Acropolis Hypervisor). |
| **cvmIp**   | `ipv4`   | ❌       | The IP address of the CVM (Controller VM).        |
| **version** | `string` | ✅       | The AOS version to deploy.                        |

#### Example Request

```bash
curl -X PUT "https://eu.api.ovh.com/v1/nutanix/my-cluster-name/nodes/node-1/deploy" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP" \
     -d '{
           "ahvIp": "192.168.1.1",
           "cvmIp": "192.168.1.2",
           "version": "5.10.0"
         }'
```

---

### Terminate a Node in a Cluster

- **Path**: `/nutanix/{serviceName}/nodes/{server}/terminate`
- **Method**: `POST`
- **Authentication**: Required (`OVH API` credential type)
- **Status**: Stable production version
- **Description**: Terminate a node in a Nutanix cluster.
- **IAM Actions**:
  - `nutanix:apiovh:node/terminate` (Required)

#### Path Parameters

| Parameter       | Type     | Required | Description                                      |
| --------------- | -------- | -------- | ------------------------------------------------ |
| **serviceName** | `string` | ✅       | The name of the Nutanix cluster.                 |
| **server**      | `string` | ✅       | The name of the server associated with the node. |

#### Example Request

```bash
curl -X POST "https://eu.api.ovh.com/v1/nutanix/my-cluster-name/nodes/node-1/terminate" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP"
```

---

### Get Service Information

- **Path**: `/nutanix/{serviceName}/serviceInfos`
- **Method**: `GET`
- **Authentication**: Required (`OVH API` credential type)
- **Status**: Stable production version
- **Description**: Retrieve service information for a Nutanix cluster.
- **IAM Actions**:
  - `nutanix:apiovh:serviceInfos/get` (Required)

#### Path Parameters

| Parameter       | Type     | Required | Description                      |
| --------------- | -------- | -------- | -------------------------------- |
| **serviceName** | `string` | ✅       | The name of the Nutanix cluster. |

#### Example Request

```bash
curl -X GET "https://eu.api.ovh.com/v1/nutanix/my-cluster-name/serviceInfos" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP"
```

---

### Update Service Information

- **Path**: `/nutanix/{serviceName}/serviceInfos`
- **Method**: `PUT`
- **Authentication**: Required (`OVH API` credential type)
- **Status**: Stable production version
- **Description**: Update the service information for a Nutanix cluster.
- **IAM Actions**:
  - `nutanix:apiovh:serviceInfos/edit` (Required)

#### Path Parameters

| Parameter       | Type     | Required | Description                      |
| --------------- | -------- | -------- | -------------------------------- |
| **serviceName** | `string` | ✅       | The name of the Nutanix cluster. |

#### Body Parameters

| Parameter   | Type               | Required | Description                        |
| ----------- | ------------------ | -------- | ---------------------------------- |
| **service** | `services.Service` | ✅       | The service information to update. |

#### Example Request

```bash
curl -X PUT "https://eu.api.ovh.com/v1/nutanix/my-cluster-name/serviceInfos" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP" \
     -d '{
           "service": {
             "name": "my-cluster-name",
             "description": "Updated cluster description"
           }
         }'
```

---

### Ask for Service Termination

- **Path**: `/nutanix/{serviceName}/terminate`
- **Method**: `POST`
- **Authentication**: Required (`OVH API` credential type)
- **Status**: Stable production version
- **Description**: Initiate the termination of a Nutanix cluster.
- **IAM Actions**:
  - `nutanix:apiovh:terminate` (Required)

#### Path Parameters

| Parameter       | Type     | Required | Description                      |
| --------------- | -------- | -------- | -------------------------------- |
| **serviceName** | `string` | ✅       | The name of the Nutanix cluster. |

#### Example Request

```bash
curl -X POST "https://eu.api.ovh.com/v1/nutanix/my-cluster-name/terminate" \
     -H "X-OVH-API-Key: $APP_KEY" \
     -H "X-OVH-Application: $APP_ID" \
     -H "X-OVH-Signature: $SIGNATURE" \
     -H "X-OVH-Timestamp: $TIMESTAMP"
```

---

## Models

### Nutanix Cluster

Cluster configuration details.

```typescript
{
  "controlPanelURL": "https://control-panel.example.com",
  "dataserviceIp": "192.168.1.100",
  "erasureCoding": true,
  "gatewayCidr": "192.168.1.0/24",
  "infraVlanNumber": 100,
  "ipfo": "192.168.1.0/24",
  "iplb": "iplb-12345",
  "license": "license-key-12345",
  "metadata": {
    "initialCommitmentSize": 10
  },
  "name": "my-cluster-name",
  "nodes": [
    {
      "ahvIp": "192.168.1.1",
      "cvmIp": "192.168.1.2",
      "server": "node-1",
      "status": "DEPLOYED"
    }
  ],
  "prismCentral": {
    "ips": ["192.168.1.10"],
    "size": "small",
    "type": "alone",
    "vip": "192.168.1.10"
  },
  "prismSecretId": "123e4567-e89b-12d3-a456-426614174000",
  "rackAwareness": true,
  "redundancyFactor": 2,
  "version": "5.10.0",
  "vrack": "vrack-12345"
}
```

---

### Nutanix Availability

Cluster availability details.

```typescript
{
  "availability": "1440H",
  "datacenters": [
    {
      "availability": "1440H",
      "datacenter": "dc1"
    }
  ],
  "deploymentType": "NodeAwareness",
  "erasureCoding": true,
  "fqn": "hardware-fqn-12345",
  "memory": "hardware-memory-12345",
  "planCode": "hardware-planCode-12345",
  "redundancyFactor": 2,
  "server": "hardware-server-12345",
  "storage": "hardware-storage-12345",
  "systemStorage": "hardware-systemStorage-12345"
}
```

---

### Nutanix Requirements

Cluster requirements details.

```typescript
{
  "maxNodes": 10,
  "minNodes": 2,
  "scaleFactor": 1
}
```

---

### Nutanix AvailabilitiesRaw

Raw availability details for a cluster configuration.

```typescript
{
  "datacenters": [
    {
      "availability": "1440H",
      "datacenter": "dc1",
      "lastRule": "rule-description",
      "parentAvailable": 10,
      "trueAvailable": 8
    }
  ],
  "deploymentType": "NodeAwareness",
  "erasureCoding": true,
  "fqn": "hardware-fqn-12345",
  "memory": "hardware-memory-12345",
  "planCode": "hardware-planCode-12345",
  "redundancyFactor": 2,
  "server": "hardware-server-12345",
  "storage": "hardware-storage-12345",
  "systemStorage": "hardware-systemStorage-12345"
}
```

---

### Nutanix nodeDetails

Details about a node in a Nutanix cluster.

```typescript
{
  "ahvIp": "192.168.1.1",
  "cvmIp": "192.168.1.2",
  "possibleActions": [
    {
      "action": "POWER_ON",
      "isPossible": true,
      "reason": ""
    }
  ],
  "server": "node-1",
  "status": "DEPLOYED"
}
```

---

### Nutanix nodeStatusEnum

Possible statuses for a node in a Nutanix cluster.

| Status                 | Description                         |
| ---------------------- | ----------------------------------- |
| **DEPLOYED**           | Node is deployed and operational.   |
| **DEPLOYING**          | Node is currently being deployed.   |
| **DEPLOY_CANCELLED**   | Deployment was cancelled.           |
| **DEPLOY_FAILURE**     | Deployment failed.                  |
| **UNDEPLOYED**         | Node is not deployed.               |
| **UNDEPLOYING**        | Node is currently being undeployed. |
| **UNDEPLOY_CANCELLED** | Undeployment was cancelled.         |
| **UNDEPLOY_FAILURE**   | Undeployment failed.                |
| **UNKNOWN**            | Node status is unknown.             |

---

### Nutanix PossibleActionsEnum

Possible actions for a node in a Nutanix cluster.

| Action        | Description       |
| ------------- | ----------------- |
| **INSTALL**   | Install a node.   |
| **POWER_OFF** | Power off a node. |
| **POWER_ON**  | Power on a node.  |
| **REINSTALL** | Reinstall a node. |
| **TERMINATE** | Terminate a node. |
| **UNINSTALL** | Uninstall a node. |

---

### Nutanix RedundancyFactorEnum

Possible redundancy factors for a Nutanix cluster.

| Redundancy Factor | Description            |
| ----------------- | ---------------------- |
| **2**             | Two-node redundancy.   |
| **3**             | Three-node redundancy. |

---

### Nutanix DeploymentTypeEnum

Possible deployment types for a Nutanix cluster.

| Deployment Type   | Description                     |
| ----------------- | ------------------------------- |
| **NodeAwareness** | Node awareness deployment type. |

---

### Nutanix pcsizeEnum

Possible sizes for Prism Central.

| Size       | Description       |
| ---------- | ----------------- |
| **large**  | Large size.       |
| **small**  | Small size.       |
| **xlarge** | Extra-large size. |
| **xsmall** | Extra-small size. |

---

### Nutanix pctypeEnum

Possible deployment types for Prism Central.

| Type      | Description                              |
| --------- | ---------------------------------------- |
| **alone** | Prism Central is deployed alone.         |
| **scale** | Prism Central is deployed in scale mode. |

---

### Nutanix AvailabilitiesRawDatacenter

Details about datacenter availability for a Nutanix cluster.

```typescript
{
  "availability": "1440H",
  "datacenter": "dc1",
  "lastRule": "rule-description",
  "parentAvailable": 10,
  "trueAvailable": 8
}
```

---

### Nutanix Deploy

Node deployment payload.

```typescript
{
  "ahvIp": "192.168.1.1",
  "cvmIp": "192.168.1.2",
  "version": "5.10.0"
}
```

---

### Nutanix Reinstall

Node reinstall payload.

```typescript
{
  "version": "5.10.0"
}
```

---

### Nutanix Metadata

Cluster metadata.

```typescript
{
  "initialCommitmentSize": 10
}
```

---

### Nutanix PrismCentral

Prism Central configuration.

```typescript
{
  "ips": ["192.168.1.10"],
  "size": "small",
  "type": "alone",
  "vip": "192.168.1.10"
}
```

---

## Error Handling

When interacting with the Nutanix Cluster node, errors may occur due to invalid parameters, authentication issues, or API limitations. Ensure you handle errors gracefully and provide meaningful error messages to users.

### Common Error Cases

- **Invalid Parameters**: If a required parameter is missing or has an invalid value, the API will return an error. For example, if `quantity` is not provided when fetching availabilities, the API will return a validation error.
- **Authentication Failure**: If the provided credentials are invalid or do not have the necessary permissions, the API will return an authentication error.
- **API Limitations**: Some operations may have limitations, such as maximum node quantities or specific deployment types. Ensure you validate user inputs against these limitations.

### Example Error Response

```json
{
    "error": "Invalid quantity parameter",
    "message": "Quantity must be a positive integer.",
    "cause": "Missing or invalid quantity parameter"
}
```

---

## Security Considerations

- **Authentication**: Always use valid and secure credentials when interacting with the Nutanix Cluster node. Avoid hardcoding credentials in your code.
- **Permissions**: Ensure the provided credentials have the necessary permissions for the operations you intend to perform. For example, `nutanix:apiovh:terminate` requires the user to have termination permissions.
- **Data Protection**: Sensitive data, such as IP addresses, should be handled securely. Avoid exposing such data in logs or error messages.

---

## Rate Limits & Usage

- **Rate Limits**: The Nutanix Cluster node may have rate limits for certain operations. Ensure you adhere to these limits to avoid API throttling.
- **Usage**: Monitor your API usage to avoid unexpected charges or quota limits. Use the OVHcloud API to fetch usage statistics if available.

---

## Troubleshooting

### Common Issues

- **Cluster Not Found**: If the specified cluster does not exist, the API will return a `404 Not Found` error. Ensure the cluster name is correct.
- **Invalid Credentials**: If the provided credentials are invalid, the API will return an authentication error. Verify your credentials and permissions.
- **Deployment Failure**: If a node deployment fails, the API will return a `DEPLOY_FAILURE` status. Check the logs and node configuration.

### Steps to Resolve

1. **Verify Cluster Name**: Ensure the cluster name provided in the request is correct and exists in your account.
2. **Check Credentials**: Verify that the provided credentials are valid and have the necessary permissions for the operation.
3. **Review Node Configuration**: If deployment or reinstallation fails, review the node configuration and ensure all required parameters are provided.
4. **Contact OVHcloud Support**: If issues persist, contact OVHcloud support for further assistance.

---

## References

- [OVHcloud API Documentation](https://api.ovh.com)
- [Nutanix Official Documentation](https://www.nutanix.com/support/documentation)
- [Nutanix REST API Reference](https://developer.nutanix.com)

---

## Change History

| Version | Date        | Changes                                                    |
| ------- | ----------- | ---------------------------------------------------------- |
| **1.0** | Mar 31 2026 | Initial documentation based on `api_docs/v1/nutanix.json`. |

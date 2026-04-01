# Veeam Cloud Connect Integration

> Version: **1.0** | Status: **PRODUCTION** | Resource Path: `/veeamCloudConnect`

This document describes the technical details of the **Veeam Cloud Connect** integration for n8n, including available operations, authentication, and response types.

---

## Overview

The **Veeam Cloud Connect** integration enables interaction with Veeam Cloud Connect services through n8n nodes. It provides a set of operations to list, retrieve, create, update, and delete resources such as services, backup repositories, and tasks.

### Base URL

```
https://eu.api.ovh.com/v1
```

All operations are performed against this base URL.

---

## Authentication

Authentication is required for all operations except where explicitly stated otherwise (`noAuthentication: false`).

### Credential Type

The integration uses the **OVH API** credential type, which requires the following fields:

- **Host**: `https://eu.api.ovh.com/v1`
- **Application Key**: Provided by OVH Cloud
- **Application Secret**: Provided by OVH Cloud
- **Consumer Key**: Provided by OVH Cloud

For more details, refer to the [OVH API Authentication documentation](https://docs.ovh.com/fr/api/api-ovh/guide-authentification-api/).

---

## Available Operations

The following operations are supported by the **Veeam Cloud Connect** integration:

### 1. List Veeam Cloud Connect Services

**Endpoint:** `/veeamCloudConnect`

**HTTP Method:** `GET`

**Description:** List all Veeam Cloud Connect services.

**Response Type:** `string[]` (Array of service names)

**IAM Action Required:** `veeamCloudConnect:apiovh:get`

#### Parameters

| Parameter | Type                  | Required | Description                        |
| --------- | --------------------- | -------- | ---------------------------------- |
| `iamTags` | `map[string][]string` | No       | Filter resources based on IAM tags |

**Example Request:**

```bash
curl -X GET "https://eu.api.ovh.com/v1/veeamCloudConnect" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $CK_SIGNATURE" \
  -H "X-OVH-Timestamp: $CK_TIMESTAMP"
```

**Example Response:**

```json
["service1", "service2", "service3"]
```

---

### 2. Get Veeam Cloud Connect Service Details

**Endpoint:** `/veeamCloudConnect/{serviceName}`

**HTTP Method:** `GET`

**Description:** Retrieve details for a specific Veeam Cloud Connect service.

**Response Type:** `veeamCloudConnect.AccountWithIAM`

**IAM Action Required:** `veeamCloudConnect:apiovh:get`

#### Parameters

| Parameter     | Type     | Required | Description           |
| ------------- | -------- | -------- | --------------------- |
| `serviceName` | `string` | Yes      | Domain of the service |

**Example Request:**

```bash
curl -X GET "https://eu.api.ovh.com/v1/veeamCloudConnect/service1" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $CK_SIGNATURE" \
  -H "X-OVH-Timestamp: $CK_TIMESTAMP"
```

**Example Response:**

```json
{
    "serviceName": "service1",
    "vmCount": 10,
    "location": {
        "value": "rbx2"
    },
    "productOffer": {
        "value": "advanced"
    },
    "iam": {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "state": "OK",
        "urn": "urn:veeamCloudConnect:service1",
        "tags": {}
    }
}
```

---

### 3. List Backup Repositories

**Endpoint:** `/veeamCloudConnect/{serviceName}/backupRepository`

**HTTP Method:** `GET`

**Description:** Retrieve a list of backup repositories for a specific Veeam Cloud Connect service.

**Response Type:** `string[]` (Array of inventory names)

**IAM Action Required:** `veeamCloudConnect:apiovh:backupRepository/get`

#### Parameters

| Parameter     | Type     | Required | Description           |
| ------------- | -------- | -------- | --------------------- |
| `serviceName` | `string` | Yes      | Domain of the service |

**Example Request:**

```bash
curl -X GET "https://eu.api.ovh.com/v1/veeamCloudConnect/service1/backupRepository" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $CK_SIGNATURE" \
  -H "X-OVH-Timestamp: $CK_TIMESTAMP"
```

**Example Response:**

```json
["repo1", "repo2", "repo3"]
```

---

### 4. Create Backup Repository

**Endpoint:** `/veeamCloudConnect/{serviceName}/backupRepository`

**HTTP Method:** `POST`

**Description:** Create a new backup repository for a specific Veeam Cloud Connect service.

**Response Type:** `veeamCloudConnect.Task[]`

**IAM Action Required:** `veeamCloudConnect:apiovh:backupRepository/create`

#### Parameters

| Parameter     | Type     | Required | Description                    |
| ------------- | -------- | -------- | ------------------------------ |
| `serviceName` | `string` | Yes      | Domain of the service          |
| `quota`       | `long`   | Yes      | Quota in GB for the repository |

**Example Request:**

```bash
curl -X POST "https://eu.api.ovh.com/v1/veeamCloudConnect/service1/backupRepository" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $CK_SIGNATURE" \
  -H "X-OVH-Timestamp: $CK_TIMESTAMP" \
  -H "Content-Type: application/json" \
  -d '{"quota": 100}'
```

**Example Response:**

```json
[
    {
        "taskId": 12345678,
        "name": "createRepo",
        "progress": 0,
        "state": "todo"
    }
]
```

---

### 5. Get Backup Repository Details

**Endpoint:** `/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}`

**HTTP Method:** `GET`

**Description:** Retrieve details for a specific backup repository.

**Response Type:** `veeamCloudConnect.BackupRepository`

**IAM Action Required:** `veeamCloudConnect:apiovh:backupRepository/get`

#### Parameters

| Parameter       | Type     | Required | Description                                  |
| --------------- | -------- | -------- | -------------------------------------------- |
| `serviceName`   | `string` | Yes      | Domain of the service                        |
| `inventoryName` | `string` | Yes      | The inventory name of your backup repository |

**Example Request:**

```bash
curl -X GET "https://eu.api.ovh.com/v1/veeamCloudConnect/service1/backupRepository/repo1" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $CK_SIGNATURE" \
  -H "X-OVH-Timestamp: $CK_TIMESTAMP"
```

**Example Response:**

```json
{
    "inventoryName": "repo1",
    "quota": {
        "value": 100,
        "unit": "GB"
    },
    "quotaUsed": {
        "value": 50,
        "unit": "GB"
    },
    "usage": 50,
    "state": "delivered",
    "replicationZone": {
        "value": "rbx2"
    }
}
```

---

### 6. Delete Backup Repository

**Endpoint:** `/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}`

**HTTP Method:** `DELETE`

**Description:** Delete a specific backup repository.

**Response Type:** `veeamCloudConnect.Task[]`

**IAM Action Required:** `veeamCloudConnect:apiovh:backupRepository/delete`

#### Parameters

| Parameter       | Type     | Required | Description                                  |
| --------------- | -------- | -------- | -------------------------------------------- |
| `serviceName`   | `string` | Yes      | Domain of the service                        |
| `inventoryName` | `string` | Yes      | The inventory name of your backup repository |

**Example Request:**

```bash
curl -X DELETE "https://eu.api.ovh.com/v1/veeamCloudConnect/service1/backupRepository/repo1" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $CK_SIGNATURE" \
  -H "X-OVH-Timestamp: $CK_TIMESTAMP"
```

**Example Response:**

```json
[
    {
        "taskId": 12345678,
        "name": "deleteRepo",
        "progress": 0,
        "state": "todo"
    }
]
```

---

### 7. Upgrade Backup Repository Quota

**Endpoint:** `/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota`

**HTTP Method:** `POST`

**Description:** Change the quota for a specific backup repository.

**Response Type:** `veeamCloudConnect.Task[]`

**IAM Action Required:** `veeamCloudConnect:apiovh:backupRepository/upgradeQuota`

#### Parameters

| Parameter       | Type     | Required | Description                                  |
| --------------- | -------- | -------- | -------------------------------------------- |
| `serviceName`   | `string` | Yes      | Domain of the service                        |
| `inventoryName` | `string` | Yes      | The inventory name of your backup repository |
| `newQuota`      | `long`   | Yes      | New quota in GB                              |

**Example Request:**

```bash
curl -X POST "https://eu.api.ovh.com/v1/veeamCloudConnect/service1/backupRepository/repo1/upgradeQuota" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $CK_SIGNATURE" \
  -H "X-OVH-Timestamp: $CK_TIMESTAMP" \
  -H "Content-Type: application/json" \
  -d '{"newQuota": 200}'
```

**Example Response:**

```json
[
    {
        "taskId": 12345679,
        "name": "upgradeQuota",
        "progress": 0,
        "state": "todo"
    }
]
```

---

### 8. Get Service Capabilities

**Endpoint:** `/veeamCloudConnect/{serviceName}/capabilities`

**HTTP Method:** `GET`

**Description:** Retrieve the capabilities of a specific Veeam Cloud Connect service.

**Response Type:** `veeamCloudConnect.offerCapabilities`

**IAM Action Required:** `veeamCloudConnect:apiovh:capabilities/get`

#### Parameters

| Parameter     | Type     | Required | Description           |
| ------------- | -------- | -------- | --------------------- |
| `serviceName` | `string` | Yes      | Domain of the service |

**Example Request:**

```bash
curl -X GET "https://eu.api.ovh.com/v1/veeamCloudConnect/service1/capabilities" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $CK_SIGNATURE" \
  -H "X-OVH-Timestamp: $CK_TIMESTAMP"
```

**Example Response:**

```json
{
    "maxStoragesCount": 5,
    "defaultQuota": 100,
    "maxQuota": 1000,
    "minimumUsage": 10,
    "multiStorages": true,
    "replication": false,
    "vmCapacity": 1,
    "wanAccelerator": false
}
```

---

### 9. Get Available Offer Upgrades

**Endpoint:** `/veeamCloudConnect/{serviceName}/orderableUpgrade`

**HTTP Method:** `GET`

**Description:** Retrieve a list of available offer upgrades for a specific Veeam Cloud Connect service.

**Response Type:** `veeamCloudConnect.Offer[]`

**IAM Action Required:** `veeamCloudConnect:apiovh:orderableUpgrade/get`

#### Parameters

| Parameter     | Type     | Required | Description           |
| ------------- | -------- | -------- | --------------------- |
| `serviceName` | `string` | Yes      | Domain of the service |

**Example Request:**

```bash
curl -X GET "https://eu.api.ovh.com/v1/veeamCloudConnect/service1/orderableUpgrade" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $CK_SIGNATURE" \
  -H "X-OVH-Timestamp: $CK_TIMESTAMP"
```

**Example Response:**

```json
["advanced", "starter", "demo"]
```

---

### 10. Reset Service Password

**Endpoint:** `/veeamCloudConnect/{serviceName}/resetPassword`

**HTTP Method:** `POST`

**Description:** Reset the password for a specific Veeam Cloud Connect service.

**Response Type:** `veeamCloudConnect.Task`

**IAM Action Required:** `veeamCloudConnect:apiovh:resetPassword`

#### Parameters

| Parameter     | Type     | Required | Description           |
| ------------- | -------- | -------- | --------------------- |
| `serviceName` | `string` | Yes      | Domain of the service |

**Example Request:**

```bash
curl -X POST "https://eu.api.ovh.com/v1/veeamCloudConnect/service1/resetPassword" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $CK_SIGNATURE" \
  -H "X-OVH-Timestamp: $CK_TIMESTAMP"
```

**Example Response:**

```json
{
    "taskId": 12345680,
    "name": "resetPassword",
    "progress": 0,
    "state": "todo"
}
```

---

### 11. Get Service Information

**Endpoint:** `/veeamCloudConnect/{serviceName}/serviceInfos`

**HTTP Method:** `GET`

**Description:** Retrieve general information about a specific Veeam Cloud Connect service.

**Response Type:** `services.Service`

**IAM Action Required:** `veeamCloudConnect:apiovh:serviceInfos/get`

#### Parameters

| Parameter     | Type     | Required | Description           |
| ------------- | -------- | -------- | --------------------- |
| `serviceName` | `string` | Yes      | Domain of the service |

**Example Request:**

```bash
curl -X GET "https://eu.api.ovh.com/v1/veeamCloudConnect/service1/serviceInfos" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $CK_SIGNATURE" \
  -H "X-OVH-Timestamp: $CK_TIMESTAMP"
```

**Example Response:**

```json
{
    "serviceId": 12345678,
    "domain": "service1",
    "status": "ok",
    "renewalType": "automaticV2014",
    "renew": {
        "automatic": true,
        "deleteAtExpiration": false,
        "forced": false,
        "manualPayment": false,
        "period": 1
    },
    "expiration": "2026-03-31T00:00:00Z",
    "creation": "2025-03-31T00:00:00Z",
    "possibleRenewPeriod": [1]
}
```

---

### 12. Update Service Information

**Endpoint:** `/veeamCloudConnect/{serviceName}/serviceInfos`

**HTTP Method:** `PUT`

**Description:** Update properties of a specific Veeam Cloud Connect service.

**Response Type:** `void` (No response body)

**IAM Action Required:** `veeamCloudConnect:apiovh:serviceInfos/edit`

#### Parameters

| Parameter     | Type               | Required | Description           |
| ------------- | ------------------ | -------- | --------------------- |
| `serviceName` | `string`           | Yes      | Domain of the service |
| `body`        | `services.Service` | Yes      | Properties to update  |

**Example Request:**

```bash
curl -X PUT "https://eu.api.ovh.com/v1/veeamCloudConnect/service1/serviceInfos" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $CK_SIGNATURE" \
  -H "X-OVH-Timestamp: $CK_TIMESTAMP" \
  -H "Content-Type: application/json" \
  -d '{"status": "ok"}'
```

**Example Response:**

```json
{}
```

---

### 13. List Tasks

**Endpoint:** `/veeamCloudConnect/{serviceName}/task`

**HTTP Method:** `GET`

**Description:** List tasks associated with a specific Veeam Cloud Connect service.

**Response Type:** `long[]` (Array of task IDs)

**IAM Action Required:** `veeamCloudConnect:apiovh:task/get`

#### Parameters

| Parameter     | Type                              | Required | Description                 |
| ------------- | --------------------------------- | -------- | --------------------------- |
| `serviceName` | `string`                          | Yes      | Domain of the service       |
| `name`        | `string`                          | No       | Filter tasks by name (LIKE) |
| `state`       | `veeamCloudConnect.TaskStateEnum` | No       | Filter tasks by state (=)   |

**Example Request:**

```bash
curl -X GET "https://eu.api.ovh.com/v1/veeamCloudConnect/service1/task" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $CK_SIGNATURE" \
  -H "X-OVH-Timestamp: $CK_TIMESTAMP"
```

**Example Response:**

```json
[12345678, 12345679, 12345680]
```

---

### 14. Get Task Details

**Endpoint:** `/veeamCloudConnect/{serviceName}/task/{taskId}`

**HTTP Method:** `GET`

**Description:** Retrieve details for a specific task.

**Response Type:** `veeamCloudConnect.Task`

**IAM Action Required:** `veeamCloudConnect:apiovh:task/get`

#### Parameters

| Parameter     | Type     | Required | Description           |
| ------------- | -------- | -------- | --------------------- |
| `serviceName` | `string` | Yes      | Domain of the service |
| `taskId`      | `long`   | Yes      | Task ID               |

**Example Request:**

```bash
curl -X GET "https://eu.api.ovh.com/v1/veeamCloudConnect/service1/task/12345678" \
  -H "X-OVH-API-Key: $APP_KEY" \
  -H "X-OVH-Application: $APP_ID" \
  -H "X-OVH-Signature: $CK_SIGNATURE" \
  -H "X-OVH-Timestamp: $CK_TIMESTAMP"
```

**Example Response:**

```json
{
    "taskId": 12345678,
    "name": "createRepo",
    "progress": 0,
    "state": "todo",
    "startDate": "2026-03-31T12:00:00Z"
}
```

---

## Error Handling

All operations may return errors in the following format:

```json
{
    "error": "errorMessage",
    "status": 400
}
```

Common error cases include:

- **Missing authentication**: Ensure all required credential fields are provided.
- **Invalid service name**: The service must exist and be accessible with the provided credentials.
- **Invalid quota value**: The quota must be within the allowed range (see `/capabilities`).
- **IAM permission denied**: Ensure the IAM action is allowed for the provided consumer key.

For more details, refer to the [OVH API Error documentation](https://docs.ovh.com/fr/api/api-ovh/guide-gestion-erreurs/).

---

## IAM Actions

The following IAM actions are required for the respective operations:

| IAM Action                                         | Description                          |
| -------------------------------------------------- | ------------------------------------ |
| `veeamCloudConnect:apiovh:get`                     | Required for GET operations          |
| `veeamCloudConnect:apiovh:backupRepository/get`    | Required for listing repositories    |
| `veeamCloudConnect:apiovh:backupRepository/create` | Required for creating repositories   |
| `veeamCloudConnect:apiovh:backupRepository/delete` | Required for deleting repositories   |
| `veeamCloudConnect:apiovh:capabilities/get`        | Required for retrieving capabilities |
| `veeamCloudConnect:apiovh:orderableUpgrade/get`    | Required for retrieving upgrades     |
| `veeamCloudConnect:apiovh:resetPassword`           | Required for resetting passwords     |
| `veeamCloudConnect:apiovh:task/get`                | Required for listing tasks           |

For more details on IAM policies, refer to the [OVH IAM documentation](https://docs.ovh.com/fr/iam/).

---

## Notes

- **Service State**: The `state` field in responses indicates the current status of the resource (e.g., `ok`, `error`, `todo`).
- **Quota Units**: The `quota` field uses `complexType.UnitAndValue<long>` to indicate the unit (e.g., `GB`).
- **Task States**: Tasks can be in various states (e.g., `todo`, `doing`, `done`, `error`).
- **Renewal Types**: Services can be automatically or manually renewed, with different renewal types available (e.g., `automaticV2014`, `oneShot`).

---

## References

- [OVH API Authentication Guide](https://docs.ovh.com/fr/api/api-ovh/guide-authentification-api/)
- [OVH API Error Handling Guide](https://docs.ovh.com/fr/api/api-ovh/guide-gestion-erreurs/)
- [OVH IAM Policies](https://docs.ovh.com/fr/iam/)
- [Veeam Cloud Connect Documentation](https://www.veeam.com/cloud-connect.html)

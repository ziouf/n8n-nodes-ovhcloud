# VMware Cloud Director (v2) API Documentation

> **Note**: This documentation is auto-generated from the OVHcloud API specification. It may contain inaccuracies or inconsistencies. Refer to the [official OVHcloud API documentation](https://api.ovh.com/) for authoritative information.

## Overview

VMware Cloud Director is a cloud service orchestration platform that enables service providers to provision and manage cloud resources across multi-tenant environments. The OVHcloud API exposes VMware Cloud Director resources and operations through RESTful endpoints, allowing programmatic access to these cloud infrastructure management capabilities.

This API follows the [v2 API specification](https://api.ovh.com/2.0) and is hosted under the `/vmwareCloudDirector` resource path. All endpoints are prefixed with `/v2` and are signed using the OVHcloud signature algorithm.

### API Status

- **API Version**: 1.0
- **Resource Path**: `/vmwareCloudDirector`
- **Base Path**: `https://eu.api.ovh.com/v2`
- **Status**: Stable production version

---

## Authentication

All VMware Cloud Director API endpoints require authentication unless explicitly marked as `noAuthentication: false`. Authentication is typically handled via the [OVH API credentials](https://docs.ovh.com/api-credentials/), which must be configured in the request headers or body.

### Required IAM Actions

Each endpoint specifies required IAM actions. These actions must be enabled in your OVHcloud account for the API to work correctly. Refer to the [IAM documentation](https://docs.ovh.com/iam/) for more details on managing permissions.

---

## Pagination

Several endpoints support pagination using cursor-based pagination. This allows you to retrieve large datasets efficiently by fetching results in chunks.

### Pagination Parameters

| Parameter             | Type   | Required | Description                                             |
| --------------------- | ------ | -------- | ------------------------------------------------------- |
| `X-Pagination-Cursor` | string | No       | Pagination cursor for fetching the next page of results |
| `X-Pagination-Size`   | long   | No       | Number of items to fetch per page                       |

### Example: Paginated Request

```bash
curl -X GET \
  "https://eu.api.ovh.com/v2/vmwareCloudDirector/backup" \
  -H "X-Pagination-Cursor: abc123" \
  -H "X-Pagination-Size: 50"
```

---

## Endpoints Summary

| Endpoint                                                                                                                     | HTTP Method | Description                                                                                            | API Status |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ | ---------- |
| `/vmwareCloudDirector/backup`                                                                                                | GET         | List VMware Cloud Director Backup services                                                             | PRODUCTION |
| `/vmwareCloudDirector/backup/{backupId}`                                                                                     | GET         | Get VMware Cloud Director Backup service details                                                       | PRODUCTION |
| `/vmwareCloudDirector/backup/{backupId}`                                                                                     | PUT         | Update VMware Cloud Director Backup service details                                                    | PRODUCTION |
| `/vmwareCloudDirector/backup/{backupId}/task`                                                                                | GET         | List all asynchronous operations related to the VMware Cloud Director backup service                   | PRODUCTION |
| `/vmwareCloudDirector/backup/{backupId}/task/{taskId}`                                                                       | GET         | Get a specific task related to the VMware Cloud Director backup service                                | PRODUCTION |
| `/vmwareCloudDirector/organization`                                                                                          | GET         | List VMware Cloud Director organizations                                                               | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}`                                                                         | GET         | Get VMware Cloud Director organization details                                                         | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}`                                                                         | PUT         | Update VMware Cloud Director organization details                                                      | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/networkAcl`                                                              | GET         | List organization network access control list resources                                                | ALPHA      |
| `/vmwareCloudDirector/organization/{organizationId}/networkAcl/{id}`                                                         | GET         | Get organization network access control list resources                                                 | ALPHA      |
| `/vmwareCloudDirector/organization/{organizationId}/networkAcl/{id}`                                                         | PUT         | Update organization network access control list resources                                              | ALPHA      |
| `/vmwareCloudDirector/organization/{organizationId}/password`                                                                | POST        | Reset the VMware Cloud Director organization administrator password                                    | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/task`                                                                    | GET         | List all asynchronous operations related to the VMware Cloud Director resources                        | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/task/{taskId}`                                                           | GET         | Get a specific task related to the VMware Cloud Director resources                                     | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter`                                                       | GET         | List all organization Virtual DataCenters                                                              | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}`                                 | GET         | Get organization Virtual DataCenter details                                                            | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}`                                 | PUT         | Update organization Virtual DataCenter details                                                         | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/compute`                         | GET         | List organization Virtual DataCenter associated compute resources                                      | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/compute/{computeId}`             | GET         | Get organization Virtual DataCenter associated compute resources                                       | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/compute/{computeId}`             | DELETE      | Delete compute resources associated with an organization's Virtual DataCenter                          | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/orderableResource`               | GET         | List all orderable resources related to the organization Virtual DataCenter                            | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/storage`                         | GET         | List organization Virtual DataCenter associated storage resources                                      | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/storage/{storageId}`             | GET         | Get organization Virtual DataCenter associated storage resources                                       | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/task`                            | GET         | List all asynchronous operations related to the organization Virtual DataCenter resource               | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/task/{taskId}`                   | GET         | Get a specific task related to the organization Virtual DataCenter resource                            | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment`                    | GET         | List organization Virtual DataCenter associated vRack segment resources                                | ALPHA      |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}`               | GET         | Get organization Virtual DataCenter associated vRack segment resources                                 | ALPHA      |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}`               | PUT         | Update VMware Cloud Director vRack segment resources                                                   | ALPHA      |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}/task`          | GET         | List all asynchronous operations related to the organization Virtual DataCenter vRack segment resource | PRODUCTION |
| `/vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}/task/{taskId}` | GET         | Get a specific task related to the organization Virtual DataCenter vRack segment resource              | PRODUCTION |
| `/vmwareCloudDirector/reference/region`                                                                                      | GET         | Get region details                                                                                     | PRODUCTION |

---

## Detailed Endpoint Documentation

### Backup Services

#### List VMware Cloud Director Backup services

```
GET /vmwareCloudDirector/backup
```

**Parameters:**

| Parameter             | Type                                | Required | Description                  |
| --------------------- | ----------------------------------- | -------- | ---------------------------- |
| `X-Pagination-Cursor` | string                              | No       | Pagination cursor            |
| `X-Pagination-Size`   | long                                | No       | Pagination size              |
| `iamTags`             | map[string][]iam.resource.TagFilter | No       | Filter resources on IAM tags |

**Response Type:** `vmwareCloudDirector.backup.BackupDetailsWithIAM[]`

**Required IAM Actions:**

- `vmwareCloudDirectorBackup:apiovh:get`

**Description:** List VMware Cloud Director Backup services.

---

#### Get VMware Cloud Director Backup service details

```
GET /vmwareCloudDirector/backup/{backupId}
```

**Parameters:**

| Parameter  | Type   | Required | Description |
| ---------- | ------ | -------- | ----------- |
| `backupId` | string | Yes      | Backup ID   |

**Response Type:** `vmwareCloudDirector.backup.BackupDetailsWithIAM`

**Required IAM Actions:**

- `vmwareCloudDirectorBackup:apiovh:get`

**Description:** Get details for a specific VMware Cloud Director Backup service.

---

#### Update VMware Cloud Director Backup service details

```
PUT /vmwareCloudDirector/backup/{backupId}
```

**Parameters:**

| Parameter    | Type                                              | Required | Description         |
| ------------ | ------------------------------------------------- | -------- | ------------------- |
| `backupId`   | string                                            | Yes      | Backup ID           |
| Request Body | `vmwareCloudDirector.backup.backupDetails.Update` | Yes      | Update request body |

**Response Type:** `vmwareCloudDirector.backup.BackupDetails`

**Required IAM Actions:**

- `vmwareCloudDirectorBackup:apiovh:edit`

**Description:** Update details for a specific VMware Cloud Director Backup service.

---

#### List all asynchronous operations related to the VMware Cloud Director backup service

```
GET /vmwareCloudDirector/backup/{backupId}/task
```

**Parameters:**

| Parameter             | Type   | Required | Description       |
| --------------------- | ------ | -------- | ----------------- |
| `X-Pagination-Cursor` | string | No       | Pagination cursor |
| `X-Pagination-Size`   | long   | No       | Pagination size   |
| `backupId`            | string | Yes      | Backup ID         |

**Response Type:** `common.Task[]`

**Required IAM Actions:**

- `vmwareCloudDirectorBackup:apiovh:task/get`

**Description:** List all asynchronous operations related to the VMware Cloud Director backup service.

---

#### Get a specific task related to the VMware Cloud Director backup service

```
GET /vmwareCloudDirector/backup/{backupId}/task/{taskId}
```

**Parameters:**

| Parameter  | Type   | Required | Description |
| ---------- | ------ | -------- | ----------- |
| `backupId` | string | Yes      | Backup ID   |
| `taskId`   | uuid   | Yes      | Task ID     |

**Response Type:** `common.Task`

**Required IAM Actions:**

- `vmwareCloudDirectorBackup:apiovh:task/get`

**Description:** Get details for a specific task related to the VMware Cloud Director backup service.

---

### Organizations

#### List VMware Cloud Director organizations

```
GET /vmwareCloudDirector/organization
```

**Parameters:**

| Parameter             | Type                                | Required | Description                  |
| --------------------- | ----------------------------------- | -------- | ---------------------------- |
| `X-Pagination-Cursor` | string                              | No       | Pagination cursor            |
| `X-Pagination-Size`   | long                                | No       | Pagination size              |
| `iamTags`             | map[string][]iam.resource.TagFilter | No       | Filter resources on IAM tags |

**Response Type:** `vmwareCloudDirector.OrganizationWithIAM[]`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/get`

**Description:** List VMware Cloud Director organizations.

---

#### Get VMware Cloud Director organization details

```
GET /vmwareCloudDirector/organization/{organizationId}
```

**Parameters:**

| Parameter        | Type   | Required | Description     |
| ---------------- | ------ | -------- | --------------- |
| `organizationId` | string | Yes      | Organization ID |

**Response Type:** `vmwareCloudDirector.OrganizationWithIAM`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/get`

**Description:** Get details for a specific VMware Cloud Director organization.

---

#### Update VMware Cloud Director organization details

```
PUT /vmwareCloudDirector/organization/{organizationId}
```

**Parameters:**

| Parameter        | Type                                      | Required | Description         |
| ---------------- | ----------------------------------------- | -------- | ------------------- |
| `organizationId` | string                                    | Yes      | Organization ID     |
| Request Body     | `vmwareCloudDirector.organization.Update` | Yes      | Update request body |

**Response Type:** `vmwareCloudDirector.Organization`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/edit`

**Description:** Update details for a specific VMware Cloud Director organization.

---

#### Reset the VMware Cloud Director organization administrator password

```
POST /vmwareCloudDirector/organization/{organizationId}/password
```

**Parameters:**

| Parameter        | Type   | Required | Description     |
| ---------------- | ------ | -------- | --------------- |
| `organizationId` | string | Yes      | Organization ID |

**Response Type:** `void`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/resetPassword`

**Description:** Reset the administrator password for a specific VMware Cloud Director organization.

---

#### List all asynchronous operations related to the VMware Cloud Director resources

```
GET /vmwareCloudDirector/organization/{organizationId}/task
```

**Parameters:**

| Parameter             | Type   | Required | Description       |
| --------------------- | ------ | -------- | ----------------- |
| `X-Pagination-Cursor` | string | No       | Pagination cursor |
| `X-Pagination-Size`   | long   | No       | Pagination size   |
| `organizationId`      | string | Yes      | Organization ID   |

**Response Type:** `common.Task[]`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/task/get`

**Description:** List all asynchronous operations related to the VMware Cloud Director resources.

---

#### Get a specific task related to the VMware Cloud Director resources

```
GET /vmwareCloudDirector/organization/{organizationId}/task/{taskId}
```

**Parameters:**

| Parameter        | Type   | Required | Description     |
| ---------------- | ------ | -------- | --------------- |
| `organizationId` | string | Yes      | Organization ID |
| `taskId`         | uuid   | Yes      | Task ID         |

**Response Type:** `common.Task`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/task/get`

**Description:** Get details for a specific task related to the VMware Cloud Director resources.

---

### Network ACLs

#### List organization network access control list resources

```
GET /vmwareCloudDirector/organization/{organizationId}/networkAcl
```

**Parameters:**

| Parameter             | Type   | Required | Description       |
| --------------------- | ------ | -------- | ----------------- |
| `X-Pagination-Cursor` | string | No       | Pagination cursor |
| `X-Pagination-Size`   | long   | No       | Pagination size   |
| `organizationId`      | string | Yes      | Organization ID   |

**Response Type:** `vmwareCloudDirector.NetworkAcl[]`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/networkAcl/get`

**Description:** List all network access control list resources for a specific VMware Cloud Director organization.

---

#### Get organization network access control list resources

```
GET /vmwareCloudDirector/organization/{organizationId}/networkAcl/{id}
```

**Parameters:**

| Parameter        | Type   | Required | Description     |
| ---------------- | ------ | -------- | --------------- |
| `id`             | uuid   | Yes      | Id              |
| `organizationId` | string | Yes      | Organization ID |

**Response Type:** `vmwareCloudDirector.NetworkAcl`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/networkAcl/get`

**Description:** Get details for a specific network access control list resource within an organization.

---

#### Update organization network access control list resources

```
PUT /vmwareCloudDirector/organization/{organizationId}/networkAcl/{id}
```

**Parameters:**

| Parameter        | Type                                    | Required | Description         |
| ---------------- | --------------------------------------- | -------- | ------------------- |
| `id`             | uuid                                    | Yes      | Id                  |
| `organizationId` | string                                  | Yes      | Organization ID     |
| Request Body     | `vmwareCloudDirector.networkAcl.Update` | Yes      | Update request body |

**Response Type:** `vmwareCloudDirector.NetworkAcl`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/networkAcl/edit`

**Description:** Update a specific network access control list resource within an organization.

---

### Virtual Data Centers

#### List all organization Virtual DataCenters

```
GET /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter
```

**Parameters:**

| Parameter             | Type   | Required | Description       |
| --------------------- | ------ | -------- | ----------------- |
| `X-Pagination-Cursor` | string | No       | Pagination cursor |
| `X-Pagination-Size`   | long   | No       | Pagination size   |
| `organizationId`      | string | Yes      | Organization ID   |

**Response Type:** `vmwareCloudDirector.VirtualDataCenterWithIAM[]`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/get`

**Description:** List all Virtual DataCenters for a specific VMware Cloud Director organization.

---

#### Get organization Virtual DataCenter details

```
GET /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}
```

**Parameters:**

| Parameter             | Type   | Required | Description            |
| --------------------- | ------ | -------- | ---------------------- |
| `organizationId`      | string | Yes      | Organization ID        |
| `virtualDataCenterId` | string | Yes      | Virtual data center ID |

**Response Type:** `vmwareCloudDirector.VirtualDataCenterWithIAM`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/get`

**Description:** Get details for a specific Virtual DataCenter within an organization.

---

#### Update organization Virtual DataCenter details

```
PUT /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}
```

**Parameters:**

| Parameter             | Type                                           | Required | Description            |
| --------------------- | ---------------------------------------------- | -------- | ---------------------- |
| `organizationId`      | string                                         | Yes      | Organization ID        |
| `virtualDataCenterId` | string                                         | Yes      | Virtual data center ID |
| Request Body          | `vmwareCloudDirector.virtualDataCenter.Update` | Yes      | Update request body    |

**Response Type:** `vmwareCloudDirector.VirtualDataCenter`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/edit`

**Description:** Update details for a specific Virtual DataCenter within an organization.

---

#### List all asynchronous operations related to the organization Virtual DataCenter resource

```
GET /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/task
```

**Parameters:**

| Parameter             | Type   | Required | Description            |
| --------------------- | ------ | -------- | ---------------------- |
| `X-Pagination-Cursor` | string | No       | Pagination cursor      |
| `X-Pagination-Size`   | long   | No       | Pagination size        |
| `organizationId`      | string | Yes      | Organization ID        |
| `virtualDataCenterId` | string | Yes      | Virtual data center ID |

**Response Type:** `common.Task[]`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/task/get`

**Description:** List all asynchronous operations related to the organization Virtual DataCenter resource.

---

#### Get a specific task related to the organization Virtual DataCenter resource

```
GET /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/task/{taskId}
```

**Parameters:**

| Parameter             | Type   | Required | Description            |
| --------------------- | ------ | -------- | ---------------------- |
| `organizationId`      | string | Yes      | Organization ID        |
| `virtualDataCenterId` | string | Yes      | Virtual data center ID |
| `taskId`              | uuid   | Yes      | Task ID                |

**Response Type:** `common.Task`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/task/get`

**Description:** Get details for a specific task related to the organization Virtual DataCenter resource.

---

### Compute Resources

#### List organization Virtual DataCenter associated compute resources

```
GET /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/compute
```

**Parameters:**

| Parameter             | Type   | Required | Description            |
| --------------------- | ------ | -------- | ---------------------- |
| `organizationId`      | string | Yes      | Organization ID        |
| `virtualDataCenterId` | string | Yes      | Virtual data center ID |

**Response Type:** `vmwareCloudDirector.Compute[]`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/compute/get`

**Description:** List all compute resources associated with a specific Virtual DataCenter within an organization.

---

#### Get organization Virtual DataCenter associated compute resources

```
GET /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/compute/{computeId}
```

**Parameters:**

| Parameter             | Type   | Required | Description            |
| --------------------- | ------ | -------- | ---------------------- |
| `organizationId`      | string | Yes      | Organization ID        |
| `virtualDataCenterId` | string | Yes      | Virtual data center ID |
| `computeId`           | uuid   | Yes      | Compute ID             |

**Response Type:** `vmwareCloudDirector.Compute`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/compute/get`

**Description:** Get details for a specific compute resource within a Virtual DataCenter.

---

#### Delete compute resources associated with an organization's Virtual DataCenter

```
DELETE /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/compute/{computeId}
```

**Parameters:**

| Parameter             | Type   | Required | Description            |
| --------------------- | ------ | -------- | ---------------------- |
| `organizationId`      | string | Yes      | Organization ID        |
| `virtualDataCenterId` | string | Yes      | Virtual data center ID |
| `computeId`           | uuid   | Yes      | Compute ID             |

**Response Type:** `void`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/compute/delete`

**Description:** Delete a specific compute resource from a Virtual DataCenter.

---

### Orderable Resources

#### List all orderable resources related to the organization Virtual DataCenter

```
GET /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/orderableResource
```

**Parameters:**

| Parameter             | Type   | Required | Description            |
| --------------------- | ------ | -------- | ---------------------- |
| `organizationId`      | string | Yes      | Organization ID        |
| `virtualDataCenterId` | string | Yes      | Virtual data center ID |

**Response Type:** `vmwareCloudDirector.OrderableResource`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/orderableResource/get`

**Description:** List all orderable resources available within a specific Virtual DataCenter.

---

### Storage Resources

#### List organization Virtual DataCenter associated storage resources

```
GET /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/storage
```

**Parameters:**

| Parameter             | Type   | Required | Description            |
| --------------------- | ------ | -------- | ---------------------- |
| `organizationId`      | string | Yes      | Organization ID        |
| `virtualDataCenterId` | string | Yes      | Virtual data center ID |

**Response Type:** `vmwareCloudDirector.Storage[]`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/storage/get`

**Description:** List all storage resources associated with a specific Virtual DataCenter within an organization.

---

#### Get organization Virtual DataCenter associated storage resources

```
GET /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/storage/{storageId}
```

**Parameters:**

| Parameter             | Type   | Required | Description            |
| --------------------- | ------ | -------- | ---------------------- |
| `organizationId`      | string | Yes      | Organization ID        |
| `virtualDataCenterId` | string | Yes      | Virtual data center ID |
| `storageId`           | uuid   | Yes      | Storage ID             |

**Response Type:** `vmwareCloudDirector.Storage`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/storage/get`

**Description:** Get details for a specific storage resource within a Virtual DataCenter.

---

### vRack Segments

#### List organization Virtual DataCenter associated vRack segment resources

```
GET /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment
```

**Parameters:**

| Parameter             | Type   | Required | Description            |
| --------------------- | ------ | -------- | ---------------------- |
| `X-Pagination-Cursor` | string | No       | Pagination cursor      |
| `X-Pagination-Size`   | long   | No       | Pagination size        |
| `organizationId`      | string | Yes      | Organization ID        |
| `virtualDataCenterId` | string | Yes      | Virtual data center ID |

**Response Type:** `vmwareCloudDirector.VrackSegment[]`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/vrackSegment/get`

**Description:** List all vRack segment resources associated with a specific Virtual DataCenter within an organization.

---

#### Get organization Virtual DataCenter associated vRack segment resources

```
GET /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}
```

**Parameters:**

| Parameter             | Type   | Required | Description            |
| --------------------- | ------ | -------- | ---------------------- |
| `id`                  | uuid   | Yes      | Id                     |
| `organizationId`      | string | Yes      | Organization ID        |
| `virtualDataCenterId` | string | Yes      | Virtual data center ID |

**Response Type:** `vmwareCloudDirector.VrackSegment`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/vrackSegment/get`

**Description:** Get details for a specific vRack segment resource within a Virtual DataCenter.

---

#### Update VMware Cloud Director vRack segment resources

```
PUT /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}
```

**Parameters:**

| Parameter             | Type                                      | Required | Description            |
| --------------------- | ----------------------------------------- | -------- | ---------------------- |
| `id`                  | uuid                                      | Yes      | Id                     |
| `organizationId`      | string                                    | Yes      | Organization ID        |
| `virtualDataCenterId` | string                                    | Yes      | Virtual data center ID |
| Request Body          | `vmwareCloudDirector.vrackSegment.Update` | Yes      | Update request body    |

**Response Type:** `vmwareCloudDirector.VrackSegment`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/vrackSegment/edit`

**Description:** Update a specific vRack segment resource within a Virtual DataCenter.

---

#### Delete VMware Cloud Director vRack segment resources

```
DELETE /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}
```

**Parameters:**

| Parameter             | Type   | Required | Description            |
| --------------------- | ------ | -------- | ---------------------- |
| `id`                  | uuid   | Yes      | Id                     |
| `organizationId`      | string | Yes      | Organization ID        |
| `virtualDataCenterId` | string | Yes      | Virtual data center ID |

**Response Type:** `vmwareCloudDirector.VrackSegment`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/vrackSegment/delete`

**Description:** Delete a specific vRack segment resource from a Virtual DataCenter.

---

#### List all asynchronous operations related to the organization Virtual DataCenter vRack segment resource

```
GET /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}/task
```

**Parameters:**

| Parameter             | Type   | Required | Description            |
| --------------------- | ------ | -------- | ---------------------- |
| `X-Pagination-Cursor` | string | No       | Pagination cursor      |
| `X-Pagination-Size`   | long   | No       | Pagination size        |
| `id`                  | uuid   | Yes      | Id                     |
| `organizationId`      | string | Yes      | Organization ID        |
| `virtualDataCenterId` | string | Yes      | Virtual data center ID |

**Response Type:** `common.Task[]`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/vrackSegment/task/get`

**Description:** List all asynchronous operations related to the organization Virtual DataCenter vRack segment resource.

---

#### Get a specific task related to the organization Virtual DataCenter vRack segment resource

```
GET /vmwareCloudDirector/organization/{organizationId}/virtualDataCenter/{virtualDataCenterId}/vrackSegment/{id}/task/{taskId}
```

**Parameters:**

| Parameter             | Type   | Required | Description            |
| --------------------- | ------ | -------- | ---------------------- |
| `id`                  | uuid   | Yes      | Id                     |
| `organizationId`      | string | Yes      | Organization ID        |
| `virtualDataCenterId` | string | Yes      | Virtual data center ID |
| `taskId`              | uuid   | Yes      | Task ID                |

**Response Type:** `common.Task`

**Required IAM Actions:**

- `vmwareCloudDirector:apiovh:organization/virtualDataCenter/vrackSegment/task/get`

---

### Regions

#### Get region details

```
GET /vmwareCloudDirector/reference/region
```

**Parameters:**

| Parameter             | Type   | Required | Description       |
| --------------------- | ------ | -------- | ----------------- |
| `X-Pagination-Cursor` | string | No       | Pagination cursor |
| `X-Pagination-Size`   | long   | No       | Pagination size   |

**Response Type:** `vmwareCloudDirector.Region[]`

**Required IAM Actions:**

- None (public endpoint)

**Description:** Retrieve a list of all available regions in the VMware Cloud Director API.

---

## Models

### Backup Details

Represents details of a VMware Cloud Director backup service.

**Properties:**

| Property    | Type                      | Required | Description                            |
| ----------- | ------------------------- | -------- | -------------------------------------- |
| `id`        | string                    | Yes      | Backup service identifier              |
| `status`    | common.ResourceStatusEnum | Yes      | Current status of the backup service   |
| `type`      | string                    | Yes      | Type of backup service                 |
| `createdAt` | datetime                  | Yes      | Creation date of the backup service    |
| `updatedAt` | datetime                  | Yes      | Last update date of the backup service |

---

### Organization

Represents a VMware Cloud Director organization.

**Properties:**

| Property      | Type                      | Required | Description                          |
| ------------- | ------------------------- | -------- | ------------------------------------ |
| `id`          | string                    | Yes      | Organization identifier              |
| `name`        | string                    | Yes      | Name of the organization             |
| `description` | string                    | Yes      | Description of the organization      |
| `status`      | common.ResourceStatusEnum | Yes      | Current status of the organization   |
| `createdAt`   | datetime                  | Yes      | Creation date of the organization    |
| `updatedAt`   | datetime                  | Yes      | Last update date of the organization |

---

### Network ACL

Represents a network access control list resource within a VMware Cloud Director organization.

**Properties:**

| Property      | Type                      | Required | Description                                   |
| ------------- | ------------------------- | -------- | --------------------------------------------- |
| `id`          | uuid                      | Yes      | Network ACL identifier                        |
| `name`        | string                    | Yes      | Name of the network ACL                       |
| `description` | string                    | Yes      | Description of the network ACL                |
| `rules`       | NetworkAclRule[]          | Yes      | List of rules associated with the network ACL |
| `status`      | common.ResourceStatusEnum | Yes      | Current status of the network ACL             |

---

### Network ACL Rule

Represents a single rule within a network ACL.

**Properties:**

| Property      | Type     | Required | Description                     |
| ------------- | -------- | -------- | ------------------------------- |
| `id`          | uuid     | Yes      | Rule identifier                 |
| `action`      | string   | Yes      | Action to take (ALLOW/DENY)     |
| `source`      | string   | Yes      | Source IP address or range      |
| `destination` | string   | Yes      | Destination IP address or range |
| `protocol`    | string   | Yes      | Protocol (TCP/UDP/ICMP/etc)     |
| `ports`       | string[] | Yes      | List of ports to allow/deny     |

---

### Virtual DataCenter

Represents a Virtual DataCenter within a VMware Cloud Director organization.

**Properties:**

| Property           | Type                      | Required | Description                                             |
| ------------------ | ------------------------- | -------- | ------------------------------------------------------- |
| `id`               | string                    | Yes      | Virtual DataCenter identifier                           |
| `name`             | string                    | Yes      | Name of the Virtual DataCenter                          |
| `description`      | string                    | Yes      | Description of the Virtual DataCenter                   |
| `status`           | common.ResourceStatusEnum | Yes      | Current status of the Virtual DataCenter                |
| `computeResources` | Compute[]                 | Yes      | List of compute resources within the Virtual DataCenter |
| `storageResources` | Storage[]                 | Yes      | List of storage resources within the Virtual DataCenter |
| `networkAcls`      | NetworkAcl[]              | Yes      | List of network ACLs within the Virtual DataCenter      |
| `createdAt`        | datetime                  | Yes      | Creation date of the Virtual DataCenter                 |
| `updatedAt`        | datetime                  | Yes      | Last update date of the Virtual DataCenter              |

---

### Compute

Represents a compute resource within a Virtual DataCenter.

**Properties:**

| Property    | Type                      | Required | Description                                    |
| ----------- | ------------------------- | -------- | ---------------------------------------------- |
| `id`        | uuid                      | Yes      | Compute resource identifier                    |
| `name`      | string                    | Yes      | Name of the compute resource                   |
| `status`    | common.ResourceStatusEnum | Yes      | Current status of the compute resource         |
| `ipAddress` | string                    | Yes      | IP address assigned to the compute resource    |
| `flavor`    | string                    | Yes      | Compute flavor (e.g., "b2-7")                  |
| `image`     | string                    | Yes      | Image identifier used for the compute resource |
| `createdAt` | datetime                  | Yes      | Creation date of the compute resource          |

---

### Storage

Represents a storage resource within a Virtual DataCenter.

**Properties:**

| Property    | Type                      | Required | Description                                |
| ----------- | ------------------------- | -------- | ------------------------------------------ |
| `id`        | uuid                      | Yes      | Storage resource identifier                |
| `name`      | string                    | Yes      | Name of the storage resource               |
| `status`    | common.ResourceStatusEnum | Yes      | Current status of the storage resource     |
| `size`      | long                      | Yes      | Size of the storage resource in GB         |
| `volumeId`  | uuid                      | Yes      | Volume identifier for the storage resource |
| `createdAt` | datetime                  | Yes      | Creation date of the storage resource      |

---

### Orderable Resource

Represents a resource that can be ordered within a Virtual DataCenter.

**Properties:**

| Property      | Type     | Required | Description                                    |
| ------------- | -------- | -------- | ---------------------------------------------- |
| `id`          | string   | Yes      | Orderable resource identifier                  |
| `name`        | string   | Yes      | Name of the orderable resource                 |
| `description` | string   | Yes      | Description of the orderable resource          |
| `category`    | string   | Yes      | Resource category (e.g., "compute", "storage") |
| `flavors`     | Flavor[] | Yes      | List of available flavors for ordering         |

---

### Flavor

Represents a specific flavor available for ordering within a Virtual DataCenter.

**Properties:**

| Property      | Type   | Required | Description                            |
| ------------- | ------ | -------- | -------------------------------------- |
| `id`          | string | Yes      | Flavor identifier                      |
| `name`        | string | Yes      | Name of the flavor                     |
| `description` | string | Yes      | Description of the flavor              |
| `specs`       | Spec[] | Yes      | Technical specifications of the flavor |

---

### vRack Segment

Represents a vRack segment resource within a Virtual DataCenter.

**Properties:**

| Property      | Type                      | Required | Description                               |
| ------------- | ------------------------- | -------- | ----------------------------------------- |
| `id`          | uuid                      | Yes      | vRack segment identifier                  |
| `name`        | string                    | Yes      | Name of the vRack segment                 |
| `description` | string                    | Yes      | Description of the vRack segment          |
| `network`     | string                    | Yes      | Network associated with the vRack segment |
| `gateway`     | string                    | Yes      | Gateway IP address for the vRack segment  |
| `netmask`     | string                    | Yes      | Network mask for the vRack segment        |
| `status`      | common.ResourceStatusEnum | Yes      | Current status of the vRack segment       |

---

### Task

Represents an asynchronous operation within the VMware Cloud Director API.

**Properties:**

| Property     | Type                         | Required | Description                                      |
| ------------ | ---------------------------- | -------- | ------------------------------------------------ |
| `id`         | uuid                         | Yes      | Task identifier                                  |
| `status`     | common.CurrentTaskStatusEnum | Yes      | Current status of the task                       |
| `type`       | string                       | Yes      | Type of task being performed                     |
| `createdAt`  | datetime                     | Yes      | Creation date of the task                        |
| `finishedAt` | datetime                     | No       | Completion date of the task                      |
| `errors`     | common.TaskError[]           | No       | List of errors encountered during task execution |

---

### TaskError

Represents an error encountered during task execution.

**Properties:**

| Property  | Type   | Required | Description   |
| --------- | ------ | -------- | ------------- |
| `code`    | string | Yes      | Error code    |
| `message` | string | Yes      | Error message |

---

### Region

Represents a region available in the VMware Cloud Director API.

**Properties:**

| Property      | Type                      | Required | Description                  |
| ------------- | ------------------------- | -------- | ---------------------------- |
| `id`          | string                    | Yes      | Region identifier            |
| `name`        | string                    | Yes      | Name of the region           |
| `description` | string                    | Yes      | Description of the region    |
| `status`      | common.ResourceStatusEnum | Yes      | Current status of the region |
| `createdAt`   | datetime                  | Yes      | Creation date of the region  |

---

## Common Enums

### common.CurrentTaskStatusEnum

Current status of a task. A task in ERROR cannot be retried without your inputs. PENDING tasks will be executed as soon as possible. A RUNNING task is currently executing your original request. SCHEDULED is used for tasks that will be executed in the future.

**Enum Values:**

- ERROR
- PENDING
- RUNNING
- SCHEDULED
- WAITING_USER_INPUT

---

### common.ResourceStatusEnum

Current status of a resource.

**Enum Values:**

- CREATING
- DELETING
- ERROR
- OUT_OF_SYNC
- READY
- SUSPENDED
- UPDATING

---

### common.EventTypeEnum

Type of event associated with a task.

**Enum Values:**

- TARGET_SPEC_UPDATE
- TASK_ERROR
- TASK_START
- TASK_SUCCESS

---

### common.TaskError

Error encountered during task execution.

**Properties:**

| Property  | Type   | Required | Description   |
| --------- | ------ | -------- | ------------- |
| `code`    | string | Yes      | Error code    |
| `message` | string | Yes      | Error message |

---

## Usage Examples

### Example 1: List All VMware Cloud Director Backups

```bash
curl -X GET \
  "https://eu.api.ovh.com/v2/vmwareCloudDirector/backup" \
  -H "X-OVH-API-Key: your_api_key" \
  -H "X-OVH-API-Secret: your_api_secret" \
  -H "X-OVH-Consumer-Key: your_consumer_key"
```

**Response:**

```json
[
    {
        "id": "backup1",
        "status": "READY",
        "type": "full",
        "createdAt": "2023-01-01T12:00:00Z",
        "updatedAt": "2023-01-02T12:00:00Z"
    },
    {
        "id": "backup2",
        "status": "READY",
        "type": "incremental",
        "createdAt": "2023-01-03T12:00:00Z",
        "updatedAt": "2023-01-04T12:00:00Z"
    }
]
```

---

### Example 2: Get Backup Details

```bash
curl -X GET \
  "https://eu.api.ovh.com/v2/vmwareCloudDirector/backup/backup123" \
  -H "X-OVH-API-Key: your_api_key" \
  -H "X-OVH-API-Secret: your_api_secret" \
  -H "X-OVH-Consumer-Key: your_consumer_key"
```

**Response:**

```json
{
  "id": "backup123",
  "status": "READY",
  "type": "full",
  "createdAt": "2023-01-01T12:00:00Z",
  "updatedAt": "2023-01-02T12:00:00Z",
  "computeResources": [...],
  "storageResources": [...],
  "networkAcls": [...],
  "orderableResources": [...]
}
```

---

### Example 3: Update Backup Service

```bash
curl -X PUT \
  "https://eu.api.ovh.com/v2/vmwareCloudDirector/backup/backup123" \
  -H "X-OVH-API-Key: your_api_key" \
  -H "X-OVH-API-Secret: your_api_secret" \
  -H "X-OVH-Consumer-Key: your_consumer_key" \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Updated backup description",
    "enabled": true
  }'
```

---

### Example 4: Reset Organization Password

```bash
curl -X POST \
  "https://eu.api.ovh.com/v2/vmwareCloudDirector/organization/org123/password" \
  -H "X-OVH-API-Key: your_api_key" \
  -H "X-OVH-API-Secret: your_api_secret" \
  -H "X-OVH-Consumer-Key: your_consumer_key"
```

---

### Example 5: List All Tasks for a Backup

```bash
curl -X GET \
  "https://eu.api.ovh.com/v2/vmwareCloudDirector/backup/backup123/task" \
  -H "X-OVH-API-Key: your_api_key" \
  -H "X-OVH-API-Secret: your_api_secret" \
  -H "X-OVH-Consumer-Key: your_consumer_key"
```

---

### Example 6: List All vRack Segments for a Virtual DataCenter

```bash
curl -X GET \
  "https://eu.api.ovh.com/v2/vmwareCloudDirector/organization/org123/virtualDataCenter/vdc123/vrackSegment" \
  -H "X-OVH-API-Key: your_api_key" \
  -H "X-OVH-API-Secret: your_api_secret" \
  -H "X-OVH-Consumer-Key: your_consumer_key"
```

---

## Error Handling

### Common Error Codes

| Error Code | Description                                                          |
| ---------- | -------------------------------------------------------------------- |
| `400`      | Bad Request - Invalid parameters provided                            |
| `401`      | Unauthorized - Authentication failed or missing required IAM actions |
| `403`      | Forbidden - Insufficient permissions to access the resource          |
| `404`      | Not Found - Resource does not exist                                  |
| `409`      | Conflict - Resource already exists or operation cannot be performed  |
| `429`      | Too Many Requests - Rate limit exceeded                              |
| `500`      | Internal Server Error - API server encountered an unexpected error   |
| `503`      | Service Unavailable - API server is temporarily unavailable          |

### Example Error Response

```json
{
    "status": "ERROR",
    "code": "404",
    "message": "Backup with ID backup123 not found"
}
```

---

## Rate Limiting

The VMware Cloud Director API enforces rate limiting to prevent abuse and ensure fair usage. Exceeding the rate limit will result in a `429` error response.

**Rate Limits:**

- **Default Limit**: 10 requests per second
- **Burst Limit**: 20 requests per second

**Example Rate Limit Response:**

```json
{
    "status": "ERROR",
    "code": "429",
    "message": "Too many requests - please retry after 1 second"
}
```

---

## API Status Codes

| Status Code | Description                                            |
| ----------- | ------------------------------------------------------ |
| PRODUCTION  | Stable production version - fully tested and supported |
| ALPHA       | Alpha version - experimental and subject to change     |
| BETA        | Beta version - partially tested and subject to change  |

---

## Resource Status Codes

| Status Code | Description                                     |
| ----------- | ----------------------------------------------- |
| CREATING    | Resource is currently being created             |
| DELETING    | Resource is currently being deleted             |
| ERROR       | Resource encountered an error during operation  |
| OUT_OF_SYNC | Resource is out of sync with its intended state |
| READY       | Resource is ready and available for use         |
| SUSPENDED   | Resource is suspended and not available         |
| UPDATING    | Resource is currently being updated             |

---

## Task Status Codes

| Status Code        | Description                                                     |
| ------------------ | --------------------------------------------------------------- |
| ERROR              | Task encountered an error and cannot proceed without user input |
| PENDING            | Task is pending and will be executed as soon as possible        |
| RUNNING            | Task is currently executing                                     |
| SCHEDULED          | Task is scheduled for future execution                          |
| WAITING_USER_INPUT | Task is waiting for user input before proceeding                |

---

## IAM Action Codes

| Action Code | Description                  |
| ----------- | ---------------------------- |
| `get`       | Read-only access to resource |
| `edit`      | Update access to resource    |
| `delete`    | Delete access to resource    |
| `create`    | Create access to resource    |

---

## References

- [OVHcloud API Documentation](https://api.ovh.com/)
- [IAM Documentation](https://docs.ovh.com/iam/)
- [VMware Cloud Director Documentation](https://www.vmware.com/support/pubs/cloud-director-pubs.html)
- [Rate Limiting Documentation](https://docs.ovh.com/rate-limiting/)
- [Error Handling Documentation](https://docs.ovh.com/error-handling/)

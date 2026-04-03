# Public Cloud API Documentation (v2)

> **Note:** This documentation is auto-generated from the OVHcloud Public Cloud API v2 specification. It reflects the API structure, operations, parameters, and response types as defined by OVHcloud. This is **technical documentation** intended for developers, operators, and integrators working with the OVHcloud Public Cloud services.

---

## Overview

The **Public Cloud API v2** provides a set of RESTful endpoints for managing OVHcloud Public Cloud projects, Rancher services, and associated resources such as block storage volumes, backups, snapshots, and asynchronous operations. This API is part of the OVHcloud v2 API suite and is designed to be used in conjunction with OVHcloud's IAM (Identity and Access Management) policies for secure and scoped access to resources.

All endpoints are versioned and follow the **stable production** lifecycle. Some legacy endpoints are marked as **deprecated** and will be removed in future versions.

### Base URL

```
https://eu.api.ovh.com/v2
```

### Authentication

- **Required:** Yes (except where specified otherwise)
- **Type:** OVHcloud API credentials (via `n8n.credentials.ovhcloudApi`)
- **IAM Actions:** All operations require specific IAM permissions. See each operation for required permissions.

### Pagination

- **Headers:**
  - `X-Pagination-Cursor` (optional): Used for cursor-based pagination
  - `X-Pagination-Size` (optional): Used to limit the number of results per page
- **Default behavior:** If no pagination headers are provided, the API returns results in a default format (not guaranteed to be stable across versions).

---

## API Endpoints

### 1. List Public Cloud Projects

**Path:** `/publicCloud/project`

**Description:** List all Public Cloud projects accessible to the authenticated user.

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:get`

**Parameters:**

| Name                  | Type                                  | Param Type | Required | Description                  |
| --------------------- | ------------------------------------- | ---------- | -------- | ---------------------------- |
| `X-Pagination-Cursor` | `string`                              | header     | No       | Pagination cursor            |
| `X-Pagination-Size`   | `long`                                | header     | No       | Pagination size              |
| `iamTags`             | `map[string][]iam.resource.TagFilter` | query      | No       | Filter resources on IAM tags |

**Response Type:** `publicCloud.project.ProjectAsyncWithIAM[]`

**API Status:** Stable production version

---

### 2. Get Public Cloud Project Details

**Path:** `/publicCloud/project/{projectId}`

**Description:** Retrieve details for a specific Public Cloud project.

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:get`

**Parameters:**

| Name        | Type     | Param Type | Required | Description |
| ----------- | -------- | ---------- | -------- | ----------- |
| `projectId` | `string` | path       | Yes      | Project ID  |

**Response Type:** `publicCloud.project.ProjectAsyncWithIAM`

**API Status:** Stable production version

---

## Rancher Services

### 3. List Managed Rancher Services

**Path:** `/publicCloud/project/{projectId}/rancher`

**Description:** List all managed Rancher services for a given project.

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:rancher/get`

**Parameters:**

| Name                  | Type     | Param Type | Required | Description       |
| --------------------- | -------- | ---------- | -------- | ----------------- |
| `X-Pagination-Cursor` | `string` | header     | No       | Pagination cursor |
| `X-Pagination-Size`   | `long`   | header     | No       | Pagination size   |
| `projectId`           | `string` | path       | Yes      | Project ID        |

**Response Type:** `publicCloud.rancher.Rancher[]`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 4. Get a Managed Rancher Service

**Path:** `/publicCloud/project/{projectId}/rancher/{rancherId}`

**Description:** Retrieve details for a specific managed Rancher service.

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:rancher/get`

**Parameters:**

| Name        | Type     | Param Type | Required | Description |
| ----------- | -------- | ---------- | -------- | ----------- |
| `projectId` | `string` | path       | Yes      | Project ID  |
| `rancherId` | `uuid`   | path       | Yes      | Rancher ID  |

**Response Type:** `publicCloud.rancher.Rancher`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 5. Create a Managed Rancher Service

**Path:** `/publicCloud/project/{projectId}/rancher`

**Description:** Create a new managed Rancher service within a project.

**HTTP Method:** `POST`

**IAM Actions Required:**

- `publicCloudProject:apiovh:rancher/create`

**Parameters:**

| Name                  | Type                                  | Param Type | Required | Description                                          |
| --------------------- | ------------------------------------- | ---------- | -------- | ---------------------------------------------------- |
| `X-Pagination-Cursor` | `string`                              | header     | No       | Pagination cursor                                    |
| `X-Pagination-Size`   | `long`                                | header     | No       | Pagination size                                      |
| `projectId`           | `string`                              | path       | Yes      | Project ID                                           |
| `iamTags`             | `map[string][]iam.resource.TagFilter` | query      | No       | Filter resources on IAM tags                         |
| `Request Body`        | `publicCloud.rancher.RancherCreation` | body       | Yes      | Desired target specification for the Rancher service |

**Response Type:** `publicCloud.rancher.Rancher`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 6. Update a Managed Rancher Service

**Path:** `/publicCloud/project/{projectId}/rancher/{rancherId}`

**Description:** Update an existing managed Rancher service.

**HTTP Method:** `PUT`

**IAM Actions Required:**

- `publicCloudProject:apiovh:rancher/edit`

**Parameters:**

| Name           | Type                                | Param Type | Required | Description                                          |
| -------------- | ----------------------------------- | ---------- | -------- | ---------------------------------------------------- |
| `projectId`    | `string`                            | path       | Yes      | Project ID                                           |
| `rancherId`    | `uuid`                              | path       | Yes      | Rancher ID                                           |
| `Request Body` | `publicCloud.rancher.RancherUpdate` | body       | Yes      | Desired target specification for the Rancher service |

**Response Type:** `publicCloud.rancher.Rancher`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 7. Delete a Managed Rancher Service

**Path:** `/publicCloud/project/{projectId}/rancher/{rancherId}`

**Description:** Delete a managed Rancher service.

**HTTP Method:** `DELETE`

**IAM Actions Required:**

- `publicCloudProject:apiovh:rancher/delete`

**Parameters:**

| Name        | Type     | Param Type | Required | Description |
| ----------- | -------- | ---------- | -------- | ----------- |
| `projectId` | `string` | path       | Yes      | Project ID  |
| `rancherId` | `uuid`   | path       | Yes      | Rancher ID  |

**Response Type:** `publicCloud.rancher.Rancher`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 8. Reset Rancher Service Admin Credentials

**Path:** `/publicCloud/project/{projectId}/rancher/{rancherId}/adminCredentials`

**Description:** Reset the admin password for a managed Rancher service.

**HTTP Method:** `POST`

**IAM Actions Required:**

- `publicCloudProject:apiovh:rancher/adminCredentials/reset`

**Parameters:**

| Name        | Type     | Param Type | Required | Description |
| ----------- | -------- | ---------- | -------- | ----------- |
| `projectId` | `string` | path       | Yes      | Project ID  |
| `rancherId` | `uuid`   | path       | Yes      | Rancher ID  |

**Response Type:** `publicCloud.rancher.Credentials`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 9. List Available Rancher Plans

**Path:** `/publicCloud/project/{projectId}/rancher/{rancherId}/capabilities/plan`

**Description:** List available and current plans for the given managed Rancher service.

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:rancher/capabilities/plan/get`

**Parameters:**

| Name                  | Type     | Param Type | Required | Description       |
| --------------------- | -------- | ---------- | -------- | ----------------- |
| `X-Pagination-Cursor` | `string` | header     | No       | Pagination cursor |
| `X-Pagination-Size`   | `long`   | header     | No       | Pagination size   |
| `projectId`           | `string` | path       | Yes      | Project ID        |
| `rancherId`           | `uuid`   | path       | Yes      | Rancher ID        |

**Response Type:** `publicCloud.rancher.PlanCapability[]`

**API Status:** Stable production version

**Errors:**

- `Server::InternalError::Maintenance`

---

### 10. List Available Rancher Versions

**Path:** `/publicCloud/project/{projectId}/rancher/{rancherId}/capabilities/version`

**Description:** List available and current versions for the given managed Rancher service.

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:rancher/capabilities/version/get`

**Parameters:**

| Name                  | Type     | Param Type | Required | Description       |
| --------------------- | -------- | ---------- | -------- | ----------------- |
| `X-Pagination-Cursor` | `string` | header     | No       | Pagination cursor |
| `X-Pagination-Size`   | `long`   | header     | No       | Pagination size   |
| `projectId`           | `string` | path       | Yes      | Project ID        |
| `rancherId`           | `uuid`   | path       | Yes      | Rancher ID        |

**Response Type:** `publicCloud.rancher.VersionCapability[]`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

## Deprecated Legacy Endpoints

### 11. List Available Rancher Plans (Legacy)

**Path:** `/publicCloud/reference/rancher/plan`

**Description:** List available plans for creating a managed Rancher service. **Deprecated** and scheduled for removal.

**Replacement:** `/publicCloud/project/{projectId}/reference/rancher/plan`

**API Status:** Deprecated (removal date: `2024-09-01T00:00:00Z`)

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:reference/rancher/plan/get`

**Parameters:**

| Name                  | Type     | Param Type | Required | Description       |
| --------------------- | -------- | ---------- | -------- | ----------------- |
| `X-Pagination-Cursor` | `string` | header     | No       | Pagination cursor |
| `X-Pagination-Size`   | `long`   | header     | No       | Pagination size   |

**Response Type:** `publicCloud.rancher.PlanReference[]`

---

### 12. List Available Rancher Versions (Legacy)

**Path:** `/publicCloud/reference/rancher/version`

**Description:** List available versions for creating a managed Rancher service. **Deprecated** and scheduled for removal.

**Replacement:** `/publicCloud/project/{projectId}/reference/rancher/version`

**API Status:** Deprecated (removal date: `2024-09-01T00:00:00Z`)

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:reference/rancher/version/get`

**Parameters:**

| Name                  | Type     | Param Type | Required | Description       |
| --------------------- | -------- | ---------- | -------- | ----------------- |
| `X-Pagination-Cursor` | `string` | header     | No       | Pagination cursor |
| `X-Pagination-Size`   | `long`   | header     | No       | Pagination size   |

**Response Type:** `publicCloud.rancher.VersionReference[]`

---

## Block Storage

### 13. List Block Storage Volumes

**Path:** `/publicCloud/project/{projectId}/blockstorage`

**Description:** List all block storage volumes for a given project.

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:blockstorage/get`

**Parameters:**

| Name                  | Type     | Param Type | Required | Description       |
| --------------------- | -------- | ---------- | -------- | ----------------- |
| `X-Pagination-Cursor` | `string` | header     | No       | Pagination cursor |
| `X-Pagination-Size`   | `long`   | header     | No       | Pagination size   |
| `projectId`           | `string` | path       | Yes      | Project ID        |

**Response Type:** `publicCloud.blockStorage.Block[]`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 14. Get Block Storage Volume Details

**Path:** `/publicCloud/project/{projectId}/blockstorage/{volumeId}`

**Description:** Retrieve details for a specific block storage volume.

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:blockstorage/get`

**Parameters:**

| Name        | Type     | Param Type | Required | Description |
| ----------- | -------- | ---------- | -------- | ----------- |
| `projectId` | `string` | path       | Yes      | Project ID  |
| `volumeId`  | `uuid`   | path       | Yes      | Volume ID   |

**Response Type:** `publicCloud.blockStorage.Block`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 15. Create a Block Storage Volume

**Path:** `/publicCloud/project/{projectId}/blockstorage`

**Description:** Create a new block storage volume within a project.

**HTTP Method:** `POST`

**IAM Actions Required:**

- `publicCloudProject:apiovh:blockstorage/create`

**Parameters:**

| Name           | Type                                     | Param Type | Required | Description                                 |
| -------------- | ---------------------------------------- | ---------- | -------- | ------------------------------------------- |
| `projectId`    | `string`                                 | path       | Yes      | Project ID                                  |
| `Request Body` | `publicCloud.blockStorage.BlockCreation` | body       | Yes      | Desired target specification for the volume |

**Response Type:** `publicCloud.blockStorage.Block`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 16. Update a Block Storage Volume

**Path:** `/publicCloud/project/{projectId}/blockstorage/{volumeId}`

**Description:** Update an existing block storage volume.

**HTTP Method:** `PUT`

**IAM Actions Required:**

- `publicCloudProject:apiovh:blockstorage/edit`

**Parameters:**

| Name           | Type                                   | Param Type | Required | Description                                 |
| -------------- | -------------------------------------- | ---------- | -------- | ------------------------------------------- |
| `projectId`    | `string`                               | path       | Yes      | Project ID                                  |
| `volumeId`     | `uuid`                                 | path       | Yes      | Volume ID                                   |
| `Request Body` | `publicCloud.blockStorage.BlockUpdate` | body       | Yes      | Desired target specification for the volume |

**Response Type:** `publicCloud.blockStorage.Block`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 17. Delete a Block Storage Volume

**Path:** `/publicCloud/project/{projectId}/blockstorage/{volumeId}`

**Description:** Delete a block storage volume.

**HTTP Method:** `DELETE`

**IAM Actions Required:**

- `publicCloudProject:apiovh:blockstorage/delete`

**Parameters:**

| Name        | Type     | Param Type | Required | Description |
| ----------- | -------- | ---------- | -------- | ----------- |
| `projectId` | `string` | path       | Yes      | Project ID  |
| `volumeId`  | `uuid`   | path       | Yes      | Volume ID   |

**Response Type:** `publicCloud.blockStorage.Block`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 18. List Block Storage Backups

**Path:** `/publicCloud/project/{projectId}/blockstorage/backup`

**Description:** List all block storage backups for a given project.

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:blockstorage/backup/get`

**Parameters:**

| Name                  | Type     | Param Type | Required | Description       |
| --------------------- | -------- | ---------- | -------- | ----------------- |
| `X-Pagination-Cursor` | `string` | header     | No       | Pagination cursor |
| `X-Pagination-Size`   | `long`   | header     | No       | Pagination size   |
| `projectId`           | `string` | path       | Yes      | Project ID        |

**Response Type:** `publicCloud.blockStorage.Backup[]`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 19. Get Block Storage Backup Details

**Path:** `/publicCloud/project/{projectId}/blockstorage/backup/{backupId}`

**Description:** Retrieve details for a specific block storage backup.

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:blockstorage/backup/get`

**Parameters:**

| Name        | Type     | Param Type | Required | Description |
| ----------- | -------- | ---------- | -------- | ----------- |
| `projectId` | `string` | path       | Yes      | Project ID  |
| `backupId`  | `uuid`   | path       | Yes      | Backup ID   |

**Response Type:** `publicCloud.blockStorage.Backup`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 20. Create a Block Storage Backup

**Path:** `/publicCloud/project/{projectId}/blockstorage/backup`

**Description:** Create a new block storage backup.

**HTTP Method:** `POST`

**IAM Actions Required:**

- `publicCloudProject:apiovh:blockstorage/backup/create`

**Parameters:**

| Name           | Type                                      | Param Type | Required | Description                                 |
| -------------- | ----------------------------------------- | ---------- | -------- | ------------------------------------------- |
| `projectId`    | `string`                                  | path       | Yes      | Project ID                                  |
| `Request Body` | `publicCloud.blockStorage.BackupCreation` | body       | Yes      | Desired target specification for the backup |

**Response Type:** `publicCloud.blockStorage.Backup`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 21. Update a Block Storage Backup

**Path:** `/publicCloud/project/{projectId}/blockstorage/backup/{backupId}`

**Description:** Update an existing block storage backup.

**HTTP Method:** `PUT`

**IAM Actions Required:**

- `publicCloudProject:apiovh:blockstorage/backup/edit`

**Parameters:**

| Name           | Type                                    | Param Type | Required | Description                                        |
| -------------- | --------------------------------------- | ---------- | -------- | -------------------------------------------------- |
| `projectId`    | `string`                                | path       | Yes      | Project ID                                         |
| `backupId`     | `uuid`                                  | path       | Yes      | Backup ID                                          |
| `checksum`     | `string`                                | body       | Yes      | Computed hash controlling concurrent modifications |
| `Request Body` | `publicCloud.blockStorage.BackupUpdate` | body       | Yes      | Desired target specification for the backup        |

**Response Type:** `publicCloud.blockStorage.Backup`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 22. Delete a Block Storage Backup

**Path:** `/publicCloud/project/{projectId}/blockstorage/backup/{backupId}`

**Description:** Delete a block storage backup.

**HTTP Method:** `DELETE`

**IAM Actions Required:**

- `publicCloudProject:apiovh:blockstorage/backup/delete`

**Parameters:**

| Name        | Type     | Param Type | Required | Description |
| ----------- | -------- | ---------- | -------- | ----------- |
| `projectId` | `string` | path       | Yes      | Project ID  |
| `backupId`  | `uuid`   | path       | Yes      | Backup ID   |

**Response Type:** `publicCloud.blockStorage.Backup`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 23. List Block Storage Snapshots

**Path:** `/publicCloud/project/{projectId}/blockstorage/snapshot`

**Description:** List all block storage snapshots for a given project.

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:blockstorage/snapshot/get`

**Parameters:**

| Name                  | Type     | Param Type | Required | Description       |
| --------------------- | -------- | ---------- | -------- | ----------------- |
| `X-Pagination-Cursor` | `string` | header     | No       | Pagination cursor |
| `X-Pagination-Size`   | `long`   | header     | No       | Pagination size   |
| `projectId`           | `string` | path       | Yes      | Project ID        |

**Response Type:** `publicCloud.blockStorage.Snapshot[]`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 24. Get Block Storage Snapshot Details

**Path:** `/publicCloud/project/{projectId}/blockstorage/snapshot/{snapshotId}`

**Description:** Retrieve details for a specific block storage snapshot.

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:blockstorage/snapshot/get`

**Parameters:**

| Name         | Type     | Param Type | Required | Description |
| ------------ | -------- | ---------- | -------- | ----------- |
| `projectId`  | `string` | path       | Yes      | Project ID  |
| `snapshotId` | `uuid`   | path       | Yes      | Snapshot ID |

**Response Type:** `publicCloud.blockStorage.Snapshot`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 25. Create a Block Storage Snapshot

**Path:** `/publicCloud/project/{projectId}/blockstorage/snapshot`

**Description:** Create a new block storage snapshot.

**HTTP Method:** `POST`

**IAM Actions Required:**

- `publicCloudProject:apiovh:blockstorage/snapshot/create`

**Parameters:**

| Name           | Type                                        | Param Type | Required | Description                                   |
| -------------- | ------------------------------------------- | ---------- | -------- | --------------------------------------------- |
| `projectId`    | `string`                                    | path       | Yes      | Project ID                                    |
| `Request Body` | `publicCloud.blockStorage.SnapshotCreation` | body       | Yes      | Desired target specification for the snapshot |

**Response Type:** `publicCloud.blockStorage.Snapshot`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 26. Update a Block Storage Snapshot

**Path:** `/publicCloud/project/{projectId}/blockstorage/snapshot/{snapshotId}`

**Description:** Update an existing block storage snapshot.

**HTTP Method:** `PUT`

**IAM Actions Required:**

- `publicCloudProject:apiovh:blockstorage/snapshot/edit`

**Parameters:**

| Name           | Type                                      | Param Type | Required | Description                                        |
| -------------- | ----------------------------------------- | ---------- | -------- | -------------------------------------------------- |
| `projectId`    | `string`                                  | path       | Yes      | Project ID                                         |
| `snapshotId`   | `uuid`                                    | path       | Yes      | Snapshot ID                                        |
| `checksum`     | `string`                                  | body       | Yes      | Computed hash controlling concurrent modifications |
| `Request Body` | `publicCloud.blockStorage.SnapshotUpdate` | body       | Yes      | Desired target specification for the snapshot      |

**Response Type:** `publicCloud.blockStorage.Snapshot`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 27. Delete a Block Storage Snapshot

**Path:** `/publicCloud/project/{projectId}/blockstorage/snapshot/{snapshotId}`

**Description:** Delete a block storage snapshot.

**HTTP Method:** `DELETE`

**IAM Actions Required:**

- `publicCloudProject:apiovh:blockstorage/snapshot/delete`

**Parameters:**

| Name         | Type     | Param Type | Required | Description |
| ------------ | -------- | ---------- | -------- | ----------- |
| `projectId`  | `string` | path       | Yes      | Project ID  |
| `snapshotId` | `uuid`   | path       | Yes      | Snapshot ID |

**Response Type:** `publicCloud.blockStorage.Snapshot`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

## Events

### 28. List Managed Rancher Events

**Path:** `/publicCloud/project/{projectId}/rancher/{rancherId}/event`

**Description:** List all events related to a managed Rancher service.

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:rancher/event/get`

**Parameters:**

| Name                  | Type     | Param Type | Required | Description       |
| --------------------- | -------- | ---------- | -------- | ----------------- |
| `X-Pagination-Cursor` | `string` | header     | No       | Pagination cursor |
| `X-Pagination-Size`   | `long`   | header     | No       | Pagination size   |
| `projectId`           | `string` | path       | Yes      | Project ID        |
| `rancherId`           | `uuid`   | path       | Yes      | Rancher ID        |

**Response Type:** `common.Event[]`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

## Tasks

### 29. List Managed Rancher Tasks

**Path:** `/publicCloud/project/{projectId}/rancher/{rancherId}/task`

**Description:** List all asynchronous operations (tasks) related to a managed Rancher service.

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:rancher/task/get`

**Parameters:**

| Name                  | Type     | Param Type | Required | Description       |
| --------------------- | -------- | ---------- | -------- | ----------------- |
| `X-Pagination-Cursor` | `string` | header     | No       | Pagination cursor |
| `X-Pagination-Size`   | `long`   | header     | No       | Pagination size   |
| `projectId`           | `string` | path       | Yes      | Project ID        |
| `rancherId`           | `uuid`   | path       | Yes      | Rancher ID        |

**Response Type:** `common.Task[]`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

### 30. Get a Specific Task

**Path:** `/publicCloud/project/{projectId}/rancher/{rancherId}/task/{taskId}`

**Description:** Retrieve details for a specific asynchronous operation (task) related to a managed Rancher service.

**HTTP Method:** `GET`

**IAM Actions Required:**

- `publicCloudProject:apiovh:rancher/task/get`

**Parameters:**

| Name        | Type     | Param Type | Required | Description |
| ----------- | -------- | ---------- | -------- | ----------- |
| `projectId` | `string` | path       | Yes      | Project ID  |
| `rancherId` | `uuid`   | path       | Yes      | Rancher ID  |
| `taskId`    | `uuid`   | path       | Yes      | Task ID     |

**Response Type:** `common.Task`

**API Status:** Stable production version

**Errors:**

- `Server::InternalServerError::Maintenance`

---

## Types & Models

### 31. `common.CurrentTask`

**Description:** Represents an asynchronous operation currently running.

**Properties:**

| Name     | Type                           | CanBeNull | ReadOnly | Description                       |
| -------- | ------------------------------ | --------- | -------- | --------------------------------- |
| `id`     | `uuid`                         | No        | Yes      | Identifier of the current task    |
| `link`   | `string`                       | No        | Yes      | Link to the task details          |
| `status` | `common.CurrentTaskStatusEnum` | Yes       | Yes      | Current global status of the task |
| `type`   | `string`                       | No        | Yes      | Type of the task                  |
| `errors` | `common.TaskError[]`           | Yes       | Yes      | Errors that occurred on the task  |

---

### 32. `common.CurrentTaskStatusEnum`

**Description:** Current status of a task.

**Enum Values:**

- `ERROR`: Task failed and cannot be retried without user input
- `PENDING`: Task is scheduled and will run as soon as possible
- `RUNNING`: Task is currently executing
- `SCHEDULED`: Task is scheduled for future execution
- `WAITING_USER_INPUT`: Task requires user input to proceed

---

### 33. `common.Event`

**Description:** Represents an event for an async envelope (e.g., Rancher service).

**Properties:**

| Name        | Type                   | CanBeNull | ReadOnly | Description                        |
| ----------- | ---------------------- | --------- | -------- | ---------------------------------- |
| `createdAt` | `datetime`             | No        | Yes      | Creation date of the event         |
| `kind`      | `string`               | No        | Yes      | Nature of the event                |
| `message`   | `string`               | No        | Yes      | Description of what happened       |
| `type`      | `common.EventTypeEnum` | No        | Yes      | Type of the event                  |
| `link``     | `string`               | Yes       | Yes      | Link to the event-related resource |

---

### 34. `common.EventTypeEnum`

**Description:** Type of event.

**Enum Values:**

- `TARGET_SPEC_UPDATE`
- `TASK_ERROR`
- `TASK_START`
- `TASK_SUCCESS`

---

### 35. `common.ResourceStatusEnum`

**Description:** Status of a resource in the system.

**Enum Values:**

- `CREATING`
- `DELETING`
- `ERROR`
- `OUT_OF_SYNC`
- `READY`
- `SUSPENDED`
- `UPDATING`

---

### 36. `common.Task`

**Description:** Represents an asynchronous operation.

**Properties:**

| Name         | Type                    | CanBeNull | ReadOnly | Description                       |
| ------------ | ----------------------- | --------- | -------- | --------------------------------- |
| `id`         | `uuid`                  | No        | Yes      | Identifier of the task            |
| `link`       | `string`                | No        | Yes      | Link to the related resource      |
| `status`     | `common.TaskStatusEnum` | Yes       | Yes      | Current global status of the task |
| `type`       | `string`                | No        | Yes      | Type of the task                  |
| `message`    | `string`                | No        | Yes      | Description of the task           |
| `createdAt`  | `datetime`              | No        | Yes      | Creation date of the task         |
| `updatedAt`  | `datetime`              | No        | Yes      | Last update date of the task      |
| `startedAt`  | `datetime`              | Yes       | Yes      | Starting date of the task         |
| `finishedAt` | `datetime`              | Yes       | Yes      | Ending date of the task           |
| `errors`     | `common.TaskError[]`    | Yes       | Yes      | Errors that occurred on the task  |
| `progress`   | `common.TaskProgress[]` | No        | Yes      | Progress steps of the task        |

---

### 37. `common.TaskStatusEnum`

**Description:** Current status of a task.

**Enum Values:**

- `DONE`
- `ERROR`
- `PENDING`
- `RUNNING`
- `SCHEDULED`
- `WAITING_USER_INPUT`

---

### 38. `common.TaskProgress`

**Description:** Detailed information about an asynchronous operation's progress steps.

**Properties:**

| Name     | Type                    | CanBeNull | ReadOnly | Description                         |
| -------- | ----------------------- | --------- | -------- | ----------------------------------- |
| `name`   | `string`                | No        | Yes      | Progress step name                  |
| `status` | `common.TaskStatusEnum` | No        | Yes      | Current status of the progress step |

---

### 39. `common.TaskError`

**Description:** Errors that occurred on a task.

**Properties:**

| Name      | Type     | CanBeNull | ReadOnly | Description       |
| --------- | -------- | --------- | -------- | ----------------- |
| `message` | `string` | No        | Yes      | Error description |

---

### 40. `iam.ResourceMetadata`

**Description:** IAM resource metadata embedded in services models.

**Properties:**

| Name          | Type                             | CanBeNull | ReadOnly | Description                                                       |
| ------------- | -------------------------------- | --------- | -------- | ----------------------------------------------------------------- |
| `id`          | `uuid`                           | No        | Yes      | Unique identifier of the resource                                 |
| `urn`         | `string`                         | No        | Yes      | Unique resource name used in policies                             |
| `state`       | `iam.ResourceMetadata.StateEnum` | Yes       | Yes      | Resource state                                                    |
| `tags`        | `map[string]string`              | Yes       | Yes      | Resource tags (internally computed tags are prefixed with `ovh:`) |
| `displayName` | `string`                         | Yes       | Yes      | Resource display name                                             |

---

### 41. `iam.ResourceMetadata.StateEnum`

**Description:** Resource state.

**Enum Values:**

- `EXPIRED`
- `IN_CREATION`
- `OK`
- `SUSPENDED`

---

### 42. `iam.resource.TagFilter`

**Description:** Resource tag filter for querying resources.

**Properties:**

| Name       | Type                                  | CanBeNull | ReadOnly | Description                                      |
| ---------- | ------------------------------------- | --------- | -------- | ------------------------------------------------ |
| `operator` | `iam.resource.TagFilter.OperatorEnum` | Yes       | Yes      | Operator to use for filtering (defaults to `EQ`) |
| `value`    | `string`                              | No        | Yes      | Value to filter on                               |

---

### 43. `iam.resource.TagFilter.OperatorEnum`

**Description:** Operator that can be used to filter resources.

**Enum Values:**

- `EQ` (equals)
- `EXISTS`
- `ILIKE` (case-insensitive like)
- `LIKE`
- `NEQ` (not equals)
- `NEXISTS` (not exists)

---

### 44. `publicCloud.blockStorage.Backup`

**Description:** Represents a block storage backup.

**Properties:**

| Name             | Type                                          | CanBeNull | ReadOnly | Description                                                       |
| ---------------- | --------------------------------------------- | --------- | -------- | ----------------------------------------------------------------- |
| `id`             | `uuid`                                        | No        | Yes      | Unique identifier of the backup                                   |
| `checksum`       | `string`                                      | No        | Yes      | Computed hash representing the current target specification value |
| `createdAt`      | `datetime`                                    | No        | Yes      | Creation date of the backup                                       |
| `updatedAt`      | `datetime`                                    | No        | Yes      | Last update date of the backup                                    |
| `targetSpec`     | `publicCloud.blockStorage.BackupTargetSpec`   | No        | Yes      | Last target specification of the backup                           |
| `currentState`   | `publicCloud.blockStorage.BackupCurrentState` | Yes       | Yes      | Current observed state of the backup                              |
| `currentTasks`   | `common.CurrentTask[]`                        | Yes       | Yes      | Ongoing asynchronous tasks related to the backup                  |
| `resourceStatus` | `common.ResourceStatusEnum`                   | No        | Yes      | Backup readiness in the system                                    |

---

### 45. `publicCloud.blockStorage.BackupCurrentState`

**Description:** Current state of a block storage backup as observed from the infrastructure.

**Properties:**

| Name          | Type                          | CanBeNull | ReadOnly | Description                    |
| ------------- | ----------------------------- | --------- | -------- | ------------------------------ |
| `name`        | `string`                      | No        | Yes      | Current backup name            |
| `description` | `string`                      | Yes       | Yes      | Backup description             |
| `size`        | `long`                        | No        | Yes      | Size of the backup in GB       |
| `location`    | `publicCloud.common.Location` | No        | Yes      | Current location of the backup |
| `volumeId`    | `uuid`                        | No        | Yes      | Source volume ID               |

---

### 46. `publicCloud.blockStorage.BackupTargetSpec`

**Description:** Target specification for a block storage backup.

**Properties:**

| Name          | Type                          | CanBeNull | ReadOnly | Description                |
| ------------- | ----------------------------- | --------- | -------- | -------------------------- |
| `name`        | `string`                      | No        | No       | Desired backup name        |
| `description` | `string`                      | No        | No       | Desired backup description |
| `location`    | `publicCloud.common.Location` | No        | No       | Target location            |
| `volumeId`    | `uuid`                        | No        | No       | Source volume ID           |

---

### 47. `publicCloud.blockStorage.BackupCreation`

**Description:** Payload to create a Public Cloud block storage backup.

**Properties:**

| Name         | Type                                        | CanBeNull | ReadOnly | Description                                 |
| ------------ | ------------------------------------------- | --------- | -------- | ------------------------------------------- |
| `targetSpec` | `publicCloud.blockStorage.BackupTargetSpec` | No        | No       | Desired target specification for the backup |

---

### 48. `publicCloud.blockStorage.BackupUpdate`

**Description:** Payload to update a Public Cloud block storage backup.

**Properties:**

| Name         | Type                                              | CanBeNull | ReadOnly | Description                                        |
| ------------ | ------------------------------------------------- | --------- | -------- | -------------------------------------------------- |
| `checksum`   | `string`                                          | No        | No       | Computed hash controlling concurrent modifications |
| `targetSpec` | `publicCloud.blockStorage.BackupUpdateTargetSpec` | No        | No       | Desired target specification for the backup        |

---

### 49. `publicCloud.blockStorage.BackupUpdateTargetSpec`

**Description:** Target specification for updating a block storage backup (immutable fields like location and volumeId are excluded).

**Properties:**

| Name          | Type     | CanBeNull | ReadOnly | Description                |
| ------------- | -------- | --------- | -------- | -------------------------- |
| `name`        | `string` | No        | No       | Desired backup name        |
| `description` | `string` | No        | No       | Desired backup description |

---

### 50. `publicCloud.blockStorage.Block`

**Description:** Represents a block storage volume.

**Properties:**

| Name             | Type                                         | CanBeNull | ReadOnly | Description                                                       |
| ---------------- | -------------------------------------------- | --------- | -------- | ----------------------------------------------------------------- |
| `id`             | `uuid`                                       | No        | Yes      | Unique identifier of the volume                                   |
| `checksum`       | `string`                                     | No        | Yes      | Computed hash representing the current target specification value |
| `createdAt`      | `datetime`                                   | No        | Yes      | Creation date of the volume                                       |
| `updatedAt`      | `datetime`                                   | No        | Yes      | Last update date of the volume                                    |
| `targetSpec`     | `publicCloud.blockStorage.BlockTargetSpec`   | No        | Yes      | Last target specification of the volume                           |
| `currentState`   | `publicCloud.blockStorage.BlockCurrentState` | Yes       | Yes      | Current observed state of the volume                              |
| `currentTasks`   | `common.CurrentTask[]`                       | Yes       | Yes      | Ongoing asynchronous tasks related to the volume                  |
| `resourceStatus` | `common.ResourceStatusEnum`                  | No        | Yes      | Volume readiness in the system                                    |

---

### 51. `publicCloud.blockStorage.BlockCurrentState`

**Description:** Current state of a block storage volume.

**Properties:**

| Name          | Type                                        | CanBeNull | ReadOnly | Description                      |
| ------------- | ------------------------------------------- | --------- | -------- | -------------------------------- |
| `name`        | `string`                                    | No        | Yes      | Current volume name              |
| `description` | `string`                                    | Yes       | Yes      | Volume description               |
| `size`        | `long`                                      | No        | Yes      | Current size of the volume in GB |
| `status`      | `publicCloud.blockStorage.VolumeStatusEnum` | No        | Yes      | OpenStack volume status          |
| `volumeType`  | `publicCloud.blockStorage.VolumeTypeEnum`   | No        | Yes      | Current volume type              |
| `location`    | `publicCloud.blockStorage.BlockLocation`    | No        | Yes      | Current location of the volume   |
| `locked`      | `boolean`                                   | No        | Yes      | Whether the volume is locked     |
| `encrypted`   | `boolean`                                   | Yes       | Yes      | Whether the volume is encrypted  |
| `bootable`    | `boolean`                                   | Yes       | Yes      | Whether the volume is bootable   |

---

### 52. `publicCloud.blockStorage.BlockLocation`

**Description:** Location for a block storage volume.

**Properties:**

| Name               | Type     | CanBeNull | ReadOnly | Description                         |
| ------------------ | -------- | --------- | -------- | ----------------------------------- |
| `region`           | `string` | No        | No       | Region code                         |
| `availabilityZone` | `string` | Yes       | No       | Availability zone within the region |

---

### 53. `publicCloud.blockStorage.BlockTargetSpec`

**Description:** Target specification for a block storage volume.

**Properties:**

| Name          | Type                                       | CanBeNull | ReadOnly | Description                                                    |
| ------------- | ------------------------------------------ | --------- | -------- | -------------------------------------------------------------- |
| `name`        | `string`                                   | No        | No       | Desired volume name                                            |
| `description` | `string`                                   | No        | No       | Desired volume description                                     |
| `size`        | `long`                                     | No        | No       | Desired size in GB                                             |
| `volumeType`  | `publicCloud.blockStorage.VolumeTypeEnum`  | No        | No       | Desired volume type                                            |
| `location`    | `publicCloud.blockStorage.BlockLocation`   | No        | No       | Target location                                                |
| `bootable`    | `boolean`                                  | Yes       | No       | Whether the volume should be bootable                          |
| `createFrom`  | `publicCloud.blockStorage.BlockCreateFrom` | Yes       | No       | Optional source to create the volume from (backup or snapshot) |

---

### 54. `publicCloud.blockStorage.BlockCreateFrom`

**Description:** Optional source to create a block storage volume from (backup or snapshot).

**Properties:**

| Name         | Type   | CanBeNull | ReadOnly | Description                       |
| ------------ | ------ | --------- | -------- | --------------------------------- |
| `backupId`   | `uuid` | Yes       | No       | UUID of a backup to restore from  |
| `snapshotId` | `uuid` | Yes       | No       | UUID of a snapshot to create from |

---

### 55. `publicCloud.blockStorage.VolumeStatusEnum`

**Description:** OpenStack volume status.

**Enum Values:**

- `available`
- `attaching`
- `creating`
- `deleting`
- `detaching`
- `error`
- `extending`
- `in-use`

---

### 56. `publicCloud.blockStorage.VolumeTypeEnum`

**Description:** Volume type.

**Enum Values:**

- `high-speed`
- `standard`

---

### 57. `publicCloud.rancher.Rancher`

**Description:** Represents a managed Rancher service.

**Properties:**

| Name             | Type                                           | CanBeNull | ReadOnly | Description                                                       |
| ---------------- | ---------------------------------------------- | --------- | -------- | ----------------------------------------------------------------- |
| `id`             | `uuid`                                         | No        | Yes      | Unique identifier of the Rancher service                          |
| `checksum`       | `string`                                       | No        | Yes      | Computed hash representing the current target specification value |
| `createdAt`      | `datetime`                                     | No        | Yes      | Creation date of the Rancher service                              |
| `updatedAt`      | `datetime`                                     | No        | Yes      | Last update date of the Rancher service                           |
| `targetSpec`     | `publicCloud.blockStorage.RancherTargetSpec`   | No        | Yes      | Last target specification of the Rancher service                  |
| `currentState`   | `publicCloud.blockStorage.RancherCurrentState` | Yes       | Yes      | Current observed state of the Rancher service                     |
| `currentTasks`   | `common.CurrentTask[]`                         | Yes       | Yes      | Ongoing asynchronous tasks related to the Rancher service         |
| `resourceStatus` | `common.ResourceStatusEnum`                    | No        | Yes      | Rancher service readiness in the system                           |

---

### 58. `publicCloud.rancher.RancherCurrentState`

**Description:** Current state of a Rancher service.

**Properties:**

| Name          | Type     | CanBeNull | ReadOnly | Description                     |
| ------------- | -------- | --------- | -------- | ------------------------------- |
| `name`        | `string` | No        | Yes      | Current Rancher service name    |
| `description` | `string` | Yes       | Yes      | Rancher service description     |
| `version`     | `string` | No        | Yes      | Current Rancher service version |

---

### 59. `publicCloud.rancher.RancherTargetSpec`

**Description:** Target specification for a Rancher service.

**Properties:**

| Name          | Type     | CanBeNull | ReadOnly | Description                         |
| ------------- | -------- | --------- | -------- | ----------------------------------- |
| `name`        | `string` | No        | No       | Desired Rancher service name        |
| `description` | `string` | Yes       | No       | Desired Rancher service description |

---

### 60. `publicCloud.rancher.PlanCapability`

**Description:** Represents a plan capability for a Rancher service.

**Properties:**

| Name          | Type     | CanBeNull | ReadOnly | Description                   |
| ------------- | -------- | --------- | -------- | ----------------------------- |
| `id`          | `uuid`   | No        | Yes      | Unique identifier of the plan |
| `name`        | `string` | No        | Yes      | Plan name                     |
| `description` | `string` | Yes       | Yes      | Plan description              |

---

### 61. `publicCloud.rancher.VersionCapability`

**Description:** Represents a version capability for a Rancher service.

**Properties:**

| Name          | Type     | CanBeNull | ReadOnly | Description                      |
| ------------- | -------- | --------- | -------- | -------------------------------- |
| `id`          | `uuid`   | No        | Yes      | Unique identifier of the version |
| `version`     | `string` | No        | Yes      | Version string                   |
| `description` | `string` | Yes       | Yes      | Version description              |

---

### 62. `publicCloud.rancher.Credentials`

**Description:** Represents admin credentials for a Rancher service.

**Properties:**

| Name       | Type     | CanBeNull | ReadOnly | Description    |
| ---------- | -------- | --------- | -------- | -------------- |
| `user`     | `string` | No        | Yes      | Admin username |
| `password` | `string` | No        | Yes      | Admin password |

---

### 63. `publicCloud.rancher.RancherCreation`

**Description:** Payload to create a managed Rancher service.

**Properties:**

| Name         | Type                                    | CanBeNull | ReadOnly | Description                                          |
| ------------ | --------------------------------------- | --------- | -------- | ---------------------------------------------------- |
| `targetSpec` | `publicCloud.rancher.RancherTargetSpec` | No        | No       | Desired target specification for the Rancher service |

---

### 64. `publicCloud.rancher.RancherUpdate`

**Description:** Payload to update a managed Rancher service.

**Properties:**

| Name         | Type                                    | CanBeNull | ReadOnly | Description                                          |
| ------------ | --------------------------------------- | --------- | -------- | ---------------------------------------------------- |
| `checksum`   | `string`                                | No        | No       | Computed hash controlling concurrent modifications   |
| `targetSpec` | `publicCloud.rancher.RancherTargetSpec` | No        | No       | Desired target specification for the Rancher service |

---

### 65. `publicCloud.rancher.PlanReference`

**Description:** Represents a legacy plan reference (deprecated).

---

### 66. `publicCloud.rancher.VersionReference`

**Description:** Represents a legacy version reference (deprecated).

---

## Common Types

### 67. `publicCloud.common.Location`

**Description:** Location for a resource.

**Properties:**

| Name     | Type     | CanBeNull | ReadOnly | Description |
| -------- | -------- | --------- | -------- | ----------- |
| `region` | `string` | No        | No       | Region code |

---

## Pagination Types

### 68. `publicCloud.common.Pagination`

**Description:** Pagination metadata.

**Properties:**

| Name     | Type     | CanBeNull | ReadOnly | Description       |
| -------- | -------- | --------- | -------- | ----------------- |
| `cursor` | `string` | Yes       | Yes      | Pagination cursor |
| `size`   | `long`   | Yes       | Yes      | Pagination size   |

---

## Notes

- All dates are in **ISO 8601** format.
- All UUIDs are in **standard UUID format**.
- All errors are documented where applicable.
- All IAM actions are required unless specified otherwise.
- All endpoints are versioned and follow the **stable production** lifecycle.
- Some legacy endpoints are marked as **deprecated** and will be removed in future versions.

---

## Errors Reference

| Error                                      | Description                                         |
| ------------------------------------------ | --------------------------------------------------- |
| `Server::InternalServerError::Maintenance` | Internal server error due to maintenance operations |

---

## Resources Reference

### Projects

- `publicCloud.project.ProjectAsyncWithIAM`

### Rancher Services

- `publicCloud.rancher.Rancher`
- `publicCloud.rancher.RancherCreation`
- `publicCloud.rancher.RancherUpdate`
- `publicCloud.rancher.PlanCapability`
- `publicCloud.rancher.VersionCapability`
- `publicCloud.rancher.Credentials`

### Block Storage

- `publicCloud.blockStorage.Block`
- `publicCloud.blockStorage.BlockCreation`
- `publicCloud.blockStorage.BlockUpdate`
- `publicCloud.blockStorage.Snapshot`
- `publicCloud.blockStorage.SnapshotCreation`
- `publicCloud.blockStorage.SnapshotUpdate`
- `publicCloud.blockStorage.Backup`
- `publicCloud.blockStorage.BackupCreation`
- `publicCloud.blockStorage.BackupUpdate`

### Common

- `common.Task`
- `common.TaskStatusEnum`
- `common.TaskProgress`
- `common.TaskError`
- `common.Event`
- `common.EventTypeEnum`
- `common.CurrentTask`
- `common.ResourceStatusEnum`

### IAM

- `iam.ResourceMetadata`
- `iam.ResourceMetadata.StateEnum`
- `iam.resource.TagFilter`
- `iam.resource.TagFilter.OperatorEnum`

---

## API Status Reference

- **PRODUCTION**: Stable production version
- **DEPRECATED**: Deprecated and scheduled for removal
- **IN_CREATION**: Resource is being created
- **OK**: Resource is ready
- **ERROR**: Resource failed
- **SUSPENDED**: Resource is suspended

---

## Error Handling

- All errors are documented in the **errors** field of each operation.
- Errors are thrown as `NodeApiError` in the n8n node implementation.
- Errors are handled gracefully in the node implementation with meaningful messages for end users.

---

## Authentication & IAM

- All operations require authentication unless specified otherwise.
- IAM actions are required for all operations and are documented in the **iamActions** field.
- Authentication is handled via the `OVH API` credential type in the n8n node implementation.

---

## Pagination

- Pagination is supported via headers `X-Pagination-Cursor` and `X-Pagination-Size`.
- Default pagination behavior is not guaranteed to be stable across versions.
- Cursor-based pagination is used for listing operations.

---

## Resource Lifecycle

- All resources follow a lifecycle documented in their respective **StateEnum** or **ResourceStatusEnum** types.
- Resources can be in states like `CREATING`, `READY`, `ERROR`, `SUSPENDED`, etc.
- Asynchronous operations are documented via **Task** and **CurrentTask** types.

---

## Examples

### Example 1: List All Public Cloud Projects

**Request:**

```bash
curl -X GET \
  "https://eu.api.ovh.com/v2/publicCloud/project" \
  -H "X-Pagination-Cursor: <cursor>" \
  -H "X-Pagination-Size: <size>" \
  -H "Content-Type: application/json" \
  --user <applicationKey>:<applicationSecret> \
  -H "X-Ovh-Application: <applicationKey>" \
  -H "X-Ovh-Timestamp: $(date -u +%s)" \
  -H "X-Ovh-Signature: $(echo -n "$@" | ovh_hash <applicationSecret>)" \
  -H "X-Ovh-Consumer: <consumerKey>"
```

**Response:**

```json
[
    {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "urn": "urn:ovh:project:123e4567-e89b-12d3-a456-426614174000",
        "state": "OK",
        "tags": {
            "env": "production"
        },
        "displayName": "My Project",
        "checksum": "abc123",
        "createdAt": "2024-01-01T00:00:00Z",
        "updatedAt": "2024-01-01T00:00:00Z",
        "targetSpec": {},
        "currentState": {},
        "currentTasks": [],
        "resourceStatus": "READY"
    }
]
```

---

### Example 2: Get Rancher Service Details

**Request:**

```bash
curl -X GET \
  "https://eu.api.ovh.com/v2/publicCloud/project/{projectId}/rancher/{rancherId}" \
  -H "X-Pagination-Cursor: <cursor>" \
  -H "X-Pagination-Size: <size>" \
  -H "Content-Type: application/json" \
  --user <applicationKey>:<applicationSecret> \
  -H "X-Ovh-Application: <applicationKey>" \
  -H "X-Ovh-Timestamp: $(date -u +%s)" \
  -H "X-Ovh-Signature: $(echo -n "$@" | ovh_hash <applicationSecret>)" \
  -H "X-Ovh-Consumer: <consumerKey>"
```

**Response:**

```json
{
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "urn": "urn:ovh:rancher:123e4567-e89b-12d3-a456-426614174000",
    "state": "OK",
    "tags": {},
    "displayName": "My Rancher Service",
    "checksum": "def456",
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z",
    "targetSpec": {
        "name": "My Rancher Service",
        "description": "Managed Rancher service for Kubernetes operations"
    },
    "currentState": {
        "name": "My Rancher Service",
        "description": "Managed Rancher service for Kubernetes operations",
        "version": "v2.7.0"
    },
    "currentTasks": [],
    "resourceStatus": "READY"
}
```

---

### Example 3: Create a Block Storage Backup

**Request:**

```bash
curl -X POST \
  "https://eu.api.ovh.com/v2/publicCloud/project/{projectId}/blockstorage/backup" \
  -H "X-Pagination-Cursor: <cursor>" \
  -H "X-Pagination-Size: <size>" \
  -H "Content-Type: application/json" \
  --user <applicationKey>:<applicationSecret> \
  -H "X-Ovh-Application: <applicationKey>" \
  -H "X-Ovh-Timestamp: $(date -u +%s)" \
  -H "X-Ovh-Signature: $(echo -n "$@" | ovh_hash <applicationSecret>)" \
  -H "X-Ovh-Consumer: <consumerKey>" \
  -d '{
    "targetSpec": {
      "name": "backup-1",
      "description": "Backup for volume-1",
      "location": {
        "region": "eu-west-1"
      },
      "volumeId": "123e4567-e89b-12d3-a456-426614174000"
    }
  }'
```

**Response:**

```json
{
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "urn": "urn:ovh:blockstorage:backup:123e4567-e89b-12d3-a456-426614174000",
    "state": "OK",
    "tags": {},
    "displayName": "backup-1",
    "checksum": "ghi789",
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z",
    "targetSpec": {
        "name": "backup-1",
        "description": "Backup for volume-1",
        "location": {
            "region": "eu-west-1"
        },
        "volumeId": "123e4567-e89b-12d3-a456-426614174000"
    },
    "currentState": {
        "name": "backup-1",
        "description": "Backup for volume-1",
        "size": 10,
        "location": {
            "region": "eu-west-1"
        },
        "volumeId": "123e4567-e89b-12d3-a456-426614174000"
    },
    "currentTasks": [],
    "resourceStatus": "READY"
}
```

---

## Troubleshooting

### Common Issues

| Issue                                      | Description                                         | Solution                                              |
| ------------------------------------------ | --------------------------------------------------- | ----------------------------------------------------- |
| `Server::InternalServerError::Maintenance` | Internal server error due to maintenance operations | Retry the operation later or contact OVHcloud support |
| `common.TaskError`                         | Task failed due to an error                         | Check the task message and progress for details       |
| `common.TaskStatusEnum.ERROR`              | Task cannot be retried without user input           | Provide the required input and retry the task         |

---

### Error Handling in n8n Node Implementation

- All errors are thrown as `NodeApiError` with meaningful messages for end users.
- Errors are validated and handled gracefully in the node implementation.
- Error messages include context and actionable steps where possible.

---

## Summary

This documentation provides a comprehensive overview of the OVHcloud Public Cloud API v2, including:

- **API Overview**: Base URL, authentication, and pagination
- **Endpoints**: All available operations for managing projects, Rancher services, and block storage resources
- **Types & Models**: All data structures and enumerations used in requests and responses
- **Error Handling**: All errors documented with descriptions and solutions
- **Examples**: All operations demonstrated with example requests and responses

---

## Next Steps

- Review the [n8n OVHcloud Node Implementation](../nodes/OvhCloud/OvhCloud.node.ts) for integration examples.
- Review the [OVHcloud API Client](../nodes/OvhCloud/shared/OvhCloudApiClient.ts) for authentication and request signing examples.
- Review the [n8n Workflow Examples](../workflows/) for end-user integration examples.

---

> **Note:** This file is auto-generated from the OVHcloud Public Cloud API v2 specification. Do not modify manually unless necessary.

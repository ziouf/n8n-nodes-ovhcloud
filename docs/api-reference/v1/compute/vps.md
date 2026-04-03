# OVHcloud VPS Node Documentation

This document describes the **VPS (Virtual Private Server)** node for n8n, including its available operations, parameters, authentication requirements, and response types.

---

## Table of Contents

1. [Overview](#overview)
2. [Authentication](#authentication)
3. [VPS Root Operations](#vps-root-operations)
4. [Automated Backup Operations](#automated-backup-operations)
5. [Available Upgrade Operations](#available-upgrade-operations)
6. [Backup FTP Operations](#backup-ftp-operations)
7. [Datacenter Operations](#datacenter-operations)
8. [Disk Operations](#disk-operations)
9. [Distribution Operations](#distribution-operations)
10. [Images Operations (BETA)](#images-operations-beta)
11. [IP Operations](#ip-operations)
12. [IP Geolocation Operations](#ip-geolocation-operations)
13. [Migration 2020 Operations](#migration-2020-operations)
14. [Models & Options](#models--options)
15. [Power Management](#power-management)
16. [Rebuild & Reinstall](#rebuild--reinstall)
17. [Secondary DNS Operations](#secondary-dns-operations)
18. [Service Information](#service-information)
19. [Snapshot Operations](#snapshot-operations)
20. [Status & Password](#status--password)
21. [Tasks Operations](#tasks-operations)
22. [Templates Operations](#templates-operations)
23. [Termination Operations](#termination-operations)
24. [Veeam Backup Operations](#veeam-backup-operations)
25. [Console Access](#console-access)
26. [Contact & Termination Confirmation](#contact--termination-confirmation)
27. [Parameter Reference](#parameter-reference)
28. [Error Handling](#error-handling)
29. [Example Workflows](#example-workflows)
30. [Notes](#notes)
31. [Versioning](#versioning)
32. [References](#references)

---

## Overview

The **VPS node** interacts with the OVHcloud VPS API to perform operations such as listing VPS services, retrieving details, managing snapshots, disks, IPs, backups, and more. It is designed to work within n8n workflows, leveraging the `OvhCloudApiClient` for HTTP requests and the `OvhCloudApi` credential type for authentication.

All VPS operations require a **service name** (e.g., `vps123456.ovh.net`) to identify the target VPS. Service names can be entered manually or selected dynamically from a dropdown populated by the **List VPS** operation.

### Operation Summary

| Category              | Operations | Status     |
| --------------------- | ---------- | ---------- |
| VPS Root              | 4          | PRODUCTION |
| Automated Backup      | 6          | PRODUCTION |
| Available Upgrade     | 1          | PRODUCTION |
| Backup FTP            | 7          | PRODUCTION |
| Datacenter            | 2          | PRODUCTION |
| Disk                  | 5          | PRODUCTION |
| Distribution          | 3          | PRODUCTION |
| Images                | 3          | BETA       |
| IP                    | 4          | PRODUCTION |
| IP Geolocation        | 1          | PRODUCTION |
| Migration 2020        | 4          | PRODUCTION |
| Models & Options      | 3          | PRODUCTION |
| Power Management      | 3          | PRODUCTION |
| Rebuild & Reinstall   | 2          | BETA/PROD  |
| Secondary DNS         | 5          | PRODUCTION |
| Service Information   | 2          | PRODUCTION |
| Snapshot              | 5          | PRODUCTION |
| Status & Password     | 2          | PRODUCTION |
| Tasks                 | 2          | PRODUCTION |
| Templates             | 4          | PRODUCTION |
| Termination           | 2          | PRODUCTION |
| Veeam Backup          | 6          | PRODUCTION |
| Console Access        | 2          | PRODUCTION |
| Contact & Termination | 2          | PRODUCTION |
| **Total**             | **72**     |            |

---

## Authentication

Authentication is handled via the **OVH API** credential type.

### Required Credentials

| Credential             | Description                                       |
| ---------------------- | ------------------------------------------------- |
| **Host**               | `api.ovh.com`                                     |
| **Application Key**    | The OVH application key                           |
| **Application Secret** | The OVH application secret                        |
| **Consumer Key**       | The OVH consumer key (grants access to resources) |

### IAM Actions

Each operation requires specific IAM permissions. These are listed in the **IAM Actions** section for each operation below. Ensure your API credentials have the necessary scopes before executing operations.

---

## VPS Root Operations

### 1. List VPS

- **Operation ID**: `listVPS`
- **HTTP Method**: `GET`
- **Path**: `/vps`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List all VPS services.
- **Authentication**: Required
- **Response Type**: `string[]`

#### Parameters

| Parameter | Type                                  | Required | Description                   |
| --------- | ------------------------------------- | -------- | ----------------------------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | No       | Filter resources on IAM tags. |

#### IAM Actions

- `vps:apiovh:get` (required)

#### Example Usage

```json
{
    "resource": "vps",
    "vpsOperation": "list"
}
```

Returns an array of VPS service names (e.g., `["vps123456.ovh.net", "vps789012.ovh.net"]`).

---

### 2. Get VPS

- **Operation ID**: `getVPS`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve information about a specific VPS service.
- **Authentication**: Required
- **Response Type**: `vps.VPSWithIAM`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:get` (required)

#### Example Usage

```json
{
    "resource": "vps",
    "vpsOperation": "get",
    "serviceName": "vps123456.ovh.net"
}
```

Returns VPS details including plan type, state, IP addresses, and IAM metadata.

---

### 3. Edit VPS

- **Operation ID**: `editVPS`
- **HTTP Method**: `PUT`
- **Path**: `/vps/{serviceName}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Edit properties of a given VPS service (e.g., `displayName`, `dnsName`).
- **Authentication**: Required
- **Response Type**: `void`

#### Parameters

| Parameter     | Type      | Required | Description                   |
| ------------- | --------- | -------- | ----------------------------- |
| `serviceName` | `string`  | Yes      | The name of the VPS service.  |
| `requestBody` | `vps.VPS` | Yes      | The VPS properties to update. |

#### IAM Actions

- `vps:apiovh:put` (required)

#### Example Usage

```json
{
    "resource": "vps",
    "vpsOperation": "edit",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {
        "displayName": "My Production Server"
    }
}
```

---

### 4. Abort Snapshot

- **Operation ID**: `abortVpsSnapshot`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/abortSnapshot`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Abort an ongoing snapshot or automated backup operation for a specific VPS.
- **Authentication**: Required
- **Response Type**: `void`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:abortSnapshot` (required)

#### Example Usage

```json
{
    "resource": "vps",
    "vpsOperation": "abortSnapshot",
    "serviceName": "vps123456.ovh.net"
}
```

---

## Automated Backup Operations

### 5. Get Automated Backup

- **Operation ID**: `getVpsAutomatedBackup`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/automatedBackup`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve automated backup settings for a specific VPS.
- **Authentication**: Required
- **Response Type**: `vps.AutomatedBackup`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:automatedBackup/get` (required)

#### Response Fields

| Field                 | Type                  | Description                                   |
| --------------------- | --------------------- | --------------------------------------------- |
| `rotation`            | `long`                | Number of rotation of your daily backup       |
| `schedule`            | `time`                | Scheduled time of your daily backup           |
| `serviceResourceName` | `string`              | Resource name of the automated backup service |
| `state`               | `vps.BackupStateEnum` | Backup state (`enabled` or `disabled`)        |

#### Example Usage

```json
{
    "resource": "automatedBackup",
    "automatedBackupOperation": "get",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 6. List Attached Backups

- **Operation ID**: `getVpsAutomatedBackupAttached`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/automatedBackup/attachedBackup`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List backups currently attached to this VPS.
- **Authentication**: Required
- **Response Type**: `vps.automatedBackup.Attached[]`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:automatedBackup/attachedBackup/get` (required)

#### Example Usage

```json
{
    "resource": "automatedBackup",
    "automatedBackupOperation": "listAttached",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 7. Detach Backup

- **Operation ID**: `detachVpsAutomatedBackup`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/automatedBackup/detachBackup`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Unmount a restored backup from this VPS and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

#### Parameters

| Parameter     | Type                                    | Required | Description                                                   |
| ------------- | --------------------------------------- | -------- | ------------------------------------------------------------- |
| `serviceName` | `string`                                | Yes      | The name of the VPS service.                                  |
| `requestBody` | `vps.automatedBackup.detachBackup.post` | Yes      | The request body containing details for detaching the backup. |

#### IAM Actions

- `vps:apiovh:automatedBackup/detachBackup` (required)

#### Example Usage

```json
{
    "resource": "automatedBackup",
    "automatedBackupOperation": "detach",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {}
}
```

---

### 8. Reschedule Backup

- **Operation ID**: `rescheduleVpsAutomatedBackup`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/automatedBackup/reschedule`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Change the scheduled time of the daily automated backup and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

#### Parameters

| Parameter     | Type                                  | Required | Description                                     |
| ------------- | ------------------------------------- | -------- | ----------------------------------------------- |
| `serviceName` | `string`                              | Yes      | The name of the VPS service.                    |
| `requestBody` | `vps.automatedBackup.reschedule.post` | Yes      | The new schedule time for the automated backup. |

#### IAM Actions

- `vps:apiovh:automatedBackup/reschedule` (required)

#### Example Usage

```json
{
    "resource": "automatedBackup",
    "automatedBackupOperation": "reschedule",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {
        "schedule": "03:00:00"
    }
}
```

---

### 9. Restore from Backup

- **Operation ID**: `restoreVpsAutomatedBackup`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/automatedBackup/restore`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Restore this VPS from a given automated backup restore point and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

#### Parameters

| Parameter     | Type                               | Required | Description                  |
| ------------- | ---------------------------------- | -------- | ---------------------------- |
| `serviceName` | `string`                           | Yes      | The name of the VPS service. |
| `requestBody` | `vps.automatedBackup.restore.post` | Yes      | The restore point details.   |

#### IAM Actions

- `vps:apiovh:automatedBackup/restore` (required)

#### Example Usage

```json
{
    "resource": "automatedBackup",
    "automatedBackupOperation": "restore",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {
        "restorePoint": "2024-01-15T02:00:00Z",
        "restoreType": "full"
    }
}
```

---

### 10. List Restore Points

- **Operation ID**: `getVpsAutomatedBackupRestorePoints`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/automatedBackup/restorePoints`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List available restore points for the automated backup.
- **Authentication**: Required
- **Response Type**: `datetime[]`

#### Parameters

| Parameter     | Type                   | Required | Description                     |
| ------------- | ---------------------- | -------- | ------------------------------- |
| `serviceName` | `string`               | Yes      | The name of the VPS service.    |
| `state`       | `vps.RestoreStateEnum` | Yes      | The state of the restore point. |

#### IAM Actions

- `vps:apiovh:automatedBackup/restorePoints/get` (required)

#### Example Usage

```json
{
    "resource": "automatedBackup",
    "automatedBackupOperation": "listRestorePoints",
    "serviceName": "vps123456.ovh.net",
    "state": "available"
}
```

---

## Available Upgrade Operations

### 11. Get Available Upgrades

- **Operation ID**: `listVpsAvailableUpgrades`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/availableUpgrade`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List models this VPS can be upgraded to.
- **Authentication**: Required
- **Response Type**: `vps.Model[]`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:availableUpgrade/get` (required)

#### Response Fields (Model)

| Field                  | Type                  | Description                      |
| ---------------------- | --------------------- | -------------------------------- |
| `name`                 | `string`              | Model name                       |
| `offer`                | `string`              | Offer type                       |
| `memory`               | `long`                | Memory in MB                     |
| `disk`                 | `long`                | Disk size in GB                  |
| `vcore`                | `long`                | Number of virtual cores          |
| `datacenter`           | `string[]`            | Available datacenters            |
| `maximumAdditionnalIp` | `long`                | Maximum additional IPs allowed   |
| `availableOptions`     | `vps.VpsOptionEnum[]` | Available options for this model |
| `version`              | `vps.VpsVersionEnum`  | VPS version                      |

#### Example Usage

```json
{
    "resource": "availableUpgrade",
    "availableUpgradeOperation": "get",
    "serviceName": "vps123456.ovh.net"
}
```

---

## Backup FTP Operations

### 12. Get Backup FTP

- **Operation ID**: `getVpsBackupFtp`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/backupftp`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve Backup FTP configuration for this VPS.
- **Authentication**: Required
- **Response Type**: `vps.BackupFtp`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:backupftp/get` (required)

#### Response Fields

| Field           | Type                            | Description                                                   |
| --------------- | ------------------------------- | ------------------------------------------------------------- |
| `ftpBackupName` | `string`                        | The backup FTP server name                                    |
| `quota`         | `complexType.UnitAndValue_long` | The disk space available on your backup FTP                   |
| `usage`         | `complexType.UnitAndValue_long` | The disk space currently used on your backup FTP              |
| `readOnlyDate`  | `datetime`                      | Date since when account was set to read-only (quota exceeded) |
| `type`          | `string`                        | The backup FTP type                                           |

#### Example Usage

```json
{
    "resource": "backupftp",
    "backupftpOperation": "get",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 13. List ACLs

- **Operation ID**: `listVpsBackupFtpAcls`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/backupftp/access`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List Backup FTP ACL entries for this VPS.
- **Authentication**: Required
- **Response Type**: `ipBlock[]`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:backupftp/access/get` (required)

#### Example Usage

```json
{
    "resource": "backupftp",
    "backupftpOperation": "listAcls",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 14. Create ACL

- **Operation ID**: `createVpsBackupFtpAcl`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/backupftp/access`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Create a new Backup FTP ACL entry and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `dedicated.server.Task`

#### Parameters

| Parameter     | Type                        | Required | Description                        |
| ------------- | --------------------------- | -------- | ---------------------------------- |
| `serviceName` | `string`                    | Yes      | The name of the VPS service.       |
| `requestBody` | `vps.backupftp.access.post` | Yes      | The details for the new ACL entry. |

#### IAM Actions

- `vps:apiovh:backupftp/access/create` (required)

#### Example Usage

```json
{
    "resource": "backupftp",
    "backupftpOperation": "createAcl",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {
        "ipBlock": "192.168.1.0/24",
        "ftp": true,
        "nfs": false,
        "cifs": true
    }
}
```

---

### 15. Get ACL Entry

- **Operation ID**: `getVpsBackupFtpAcl`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/backupftp/access/{ipBlock}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve a specific Backup FTP ACL entry.
- **Authentication**: Required
- **Response Type**: `dedicated.server.BackupFtpAcl`

#### Parameters

| Parameter     | Type      | Required | Description                  |
| ------------- | --------- | -------- | ---------------------------- |
| `serviceName` | `string`  | Yes      | The name of the VPS service. |
| `ipBlock`     | `ipBlock` | Yes      | The IP block.                |

#### IAM Actions

- `vps:apiovh:backupftp/access/get` (required)

#### Example Usage

```json
{
    "resource": "backupftp",
    "backupftpOperation": "getAcl",
    "serviceName": "vps123456.ovh.net",
    "ipBlock": "192.168.1.0/24"
}
```

---

### 16. Delete ACL

- **Operation ID**: `deleteVpsBackupFtpAcl`
- **HTTP Method**: `DELETE`
- **Path**: `/vps/{serviceName}/backupftp/access/{ipBlock}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Revoke a Backup FTP ACL entry and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `dedicated.server.Task`

#### Parameters

| Parameter     | Type      | Required | Description                  |
| ------------- | --------- | -------- | ---------------------------- |
| `serviceName` | `string`  | Yes      | The name of the VPS service. |
| `ipBlock`     | `ipBlock` | Yes      | The IP block to revoke.      |

#### IAM Actions

- `vps:apiovh:backupftp/access/delete` (required)

#### Example Usage

```json
{
    "resource": "backupftp",
    "backupftpOperation": "deleteAcl",
    "serviceName": "vps123456.ovh.net",
    "ipBlock": "192.168.1.0/24"
}
```

---

### 17. Update ACL

- **Operation ID**: `editVpsBackupFtpAcl`
- **HTTP Method**: `PUT`
- **Path**: `/vps/{serviceName}/backupftp/access/{ipBlock}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Update a Backup FTP ACL entry.
- **Authentication**: Required
- **Response Type**: `void`

#### Parameters

| Parameter     | Type                            | Required | Description                    |
| ------------- | ------------------------------- | -------- | ------------------------------ |
| `serviceName` | `string`                        | Yes      | The name of the VPS service.   |
| `ipBlock`     | `ipBlock`                       | Yes      | The IP block.                  |
| `requestBody` | `dedicated.server.BackupFtpAcl` | Yes      | The updated ACL entry details. |

#### IAM Actions

- `vps:apiovh:backupftp/access/edit` (required)

#### Example Usage

```json
{
    "resource": "backupftp",
    "backupftpOperation": "updateAcl",
    "serviceName": "vps123456.ovh.net",
    "ipBlock": "192.168.1.0/24",
    "requestBody": {
        "ftp": true,
        "nfs": true,
        "cifs": false
    }
}
```

---

### 18. List Authorizable Blocks

- **Operation ID**: `listVpsBackupFtpAuthorizableBlocks`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/backupftp/authorizableBlocks`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List IP blocks that can be used in the Backup FTP ACL.
- **Authentication**: Required
- **Response Type**: `ipBlock[]`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:backupftp/authorizableBlocks/get` (required)

#### Example Usage

```json
{
    "resource": "backupftp",
    "backupftpOperation": "listAuthorizableBlocks",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 19. Set Password

- **Operation ID**: `setVpsBackupFtpPassword`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/backupftp/password`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Change the Backup FTP password for this VPS and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `dedicated.server.Task`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:backupftp/password/set` (required)

#### Example Usage

```json
{
    "resource": "backupftp",
    "backupftpOperation": "setPassword",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {
        "password": "newSecurePassword123!"
    }
}
```

---

## Datacenter Operations

### 20. Get Datacenter

- **Operation ID**: `getVpsDatacenter`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/datacenter`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve the datacenter information for this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Datacenter`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:datacenter/get` (required)

#### Response Fields

| Field      | Type                    | Description                 |
| ---------- | ----------------------- | --------------------------- |
| `name`     | `string`                | Datacenter name             |
| `longName` | `string`                | Datacenter display name     |
| `country`  | `coreTypes.CountryEnum` | Datacenter ISO country code |

#### Example Usage

```json
{
    "resource": "datacenter",
    "datacenterOperation": "get",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 21. List Datacenters

- **Operation ID**: `listVpsDatacentersByCountry`
- **HTTP Method**: `GET`
- **Path**: `/vps/datacenter`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List all VPS datacenters available for the given country.
- **Authentication**: Not required
- **Response Type**: `string[]`

#### Parameters

| Parameter | Type                    | Required | Description       |
| --------- | ----------------------- | -------- | ----------------- |
| `country` | `nichandle.CountryEnum` | No       | Country targeted. |

#### IAM Actions

- None (public endpoint)

#### Example Usage

```json
{
    "resource": "datacenter",
    "datacenterOperation": "list",
    "country": "FR"
}
```

---

## Disk Operations

### 22. List Disks

- **Operation ID**: `listVpsDisks`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/disks`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List disks attached to this VPS.
- **Authentication**: Required
- **Response Type**: `long[]`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:disks/get` (required)

#### Example Usage

```json
{
    "resource": "disks",
    "vpsDisksOperation": "list",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 23. Get Disk

- **Operation ID**: `getVpsDisk`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/disks/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve details about a specific disk attached to this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Disk`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `id`          | `long`   | Yes      | The disk ID.                 |

#### IAM Actions

- `vps:apiovh:disks/get` (required)

#### Response Fields

| Field                   | Type                 | Description                         |
| ----------------------- | -------------------- | ----------------------------------- |
| `id`                    | `long`               | Disk identifier                     |
| `serviceName`           | `string`             | Service name                        |
| `size`                  | `long`               | Disk size                           |
| `type`                  | `vps.disk.TypeEnum`  | Disk type                           |
| `state`                 | `vps.disk.StateEnum` | Disk state                          |
| `bandwidthLimit`        | `long`               | Bandwidth limit                     |
| `monitoring`            | `boolean`            | Monitoring state                    |
| `lowFreeSpaceThreshold` | `long`               | Low disk free space threshold (MiB) |

#### Example Usage

```json
{
    "resource": "disks",
    "vpsDisksOperation": "get",
    "serviceName": "vps123456.ovh.net",
    "id": 12345
}
```

---

### 24. Update Disk

- **Operation ID**: `editVpsDisk`
- **HTTP Method**: `PUT`
- **Path**: `/vps/{serviceName}/disks/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Update disk properties for this VPS.
- **Authentication**: Required
- **Response Type**: `void`

#### Parameters

| Parameter     | Type       | Required | Description                    |
| ------------- | ---------- | -------- | ------------------------------ |
| `serviceName` | `string`   | Yes      | The name of the VPS service.   |
| `id`          | `long`     | Yes      | The disk ID.                   |
| `requestBody` | `vps.Disk` | Yes      | The disk properties to update. |

#### IAM Actions

- `vps:apiovh:disks/edit` (required)

#### Example Usage

```json
{
    "resource": "disks",
    "vpsDisksOperation": "update",
    "serviceName": "vps123456.ovh.net",
    "id": 12345,
    "requestBody": {
        "monitoring": true,
        "lowFreeSpaceThreshold": 1024
    }
}
```

---

### 25. Get Disk Monitoring

- **Operation ID**: `getVpsDiskMonitoring`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/disks/{id}/monitoring`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve disk monitoring statistics for this VPS over a given period.
- **Authentication**: Required
- **Response Type**: `complexType.UnitAndValues_vps.VpsTimestampValue`

#### Parameters

| Parameter     | Type                          | Required | Description                                                                      |
| ------------- | ----------------------------- | -------- | -------------------------------------------------------------------------------- |
| `serviceName` | `string`                      | Yes      | The name of the VPS service.                                                     |
| `id`          | `long`                        | Yes      | The disk ID.                                                                     |
| `period`      | `vps.VpsMonitoringPeriodEnum` | Yes      | The period for statistics (e.g., `5min`, `1hour`, `1day`).                       |
| `type`        | `vps.disk.StatisticTypeEnum`  | Yes      | The type of statistic to fetch (e.g., `usage`, `iops`, `read/write operations`). |

#### IAM Actions

- `vps:apiovh:disks/monitoring/get` (required)

#### Example Usage

```json
{
    "resource": "disks",
    "vpsDisksOperation": "getMonitoring",
    "serviceName": "vps123456.ovh.net",
    "id": 12345,
    "period": "1hour",
    "type": "usage"
}
```

---

### 26. Get Disk Usage

- **Operation ID**: `getVpsDiskUsage`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/disks/{id}/use`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve current disk usage metrics for this VPS.
- **Authentication**: Required
- **Response Type**: `complexType.UnitAndValue_double`

#### Parameters

| Parameter     | Type                         | Required | Description                                                                      |
| ------------- | ---------------------------- | -------- | -------------------------------------------------------------------------------- |
| `serviceName` | `string`                     | Yes      | The name of the VPS service.                                                     |
| `id`          | `long`                       | Yes      | The disk ID.                                                                     |
| `type`        | `vps.disk.StatisticTypeEnum` | Yes      | The type of statistic to fetch (e.g., `usage`, `iops`, `read/write operations`). |

#### IAM Actions

- `vps:apiovh:disks/use/get` (required)

#### Example Usage

```json
{
    "resource": "disks",
    "vpsDisksOperation": "getUsage",
    "serviceName": "vps123456.ovh.net",
    "id": 12345,
    "type": "usage"
}
```

---

## Distribution Operations

### 27. Get Distribution

- **Operation ID**: `getVpsDistribution`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/distribution`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve information about the distribution (template) currently set for this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Template`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:distribution/get` (required)

#### Response Fields

| Field               | Type                        | Description                        |
| ------------------- | --------------------------- | ---------------------------------- |
| `distribution`      | `string`                    | Distribution name (e.g., `ubuntu`) |
| `version`           | `string`                    | Distribution version               |
| `availableLanguage` | `string[]`                  | Available installation languages   |
| `bitFormat`         | `vps.TemplateBitFormatEnum` | Bit format (e.g., `64bit`)         |

#### Example Usage

```json
{
    "resource": "distribution",
    "distributionOperation": "get",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 28. List Software

- **Operation ID**: `listVpsDistributionSoftwares`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/distribution/software`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List software available for the VPS distribution.
- **Authentication**: Required
- **Response Type**: `long[]`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:distribution/software/get` (required)

#### Example Usage

```json
{
    "resource": "distribution",
    "distributionOperation": "listSoftware",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 29. Get Software

- **Operation ID**: `getVpsDistributionSoftware`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/distribution/software/{softwareId}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve details about a specific software available for the VPS distribution.
- **Authentication**: Required
- **Response Type**: `vps.Software`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `softwareId`  | `long`   | Yes      | The software ID.             |

#### IAM Actions

- `vps:apiovh:distribution/software/get` (required)

#### Response Fields

| Field    | Type                     | Description         |
| -------- | ------------------------ | ------------------- |
| `id`     | `long`                   | Software identifier |
| `name`   | `string`                 | Software name       |
| `type`   | `vps.SoftwareTypeEnum`   | Software type       |
| `status` | `vps.SoftwareStatusEnum` | Software status     |

#### Example Usage

```json
{
    "resource": "distribution",
    "distributionOperation": "getSoftware",
    "serviceName": "vps123456.ovh.net",
    "softwareId": 42
}
```

---

## Images Operations (BETA)

> **⚠️ BETA**: These operations are in beta and may change. Use with caution in production workflows.

### 30. Images - List Available

- **Operation ID**: `listVpsAvailableImages`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/images/available`
- **Status**: Beta version (`BETA`)
- **Description**: List images available for this VPS.
- **Authentication**: Required
- **Response Type**: `string[]`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:images/available/get` (required)

#### Example Usage

```json
{
    "resource": "images",
    "imagesOperation": "listAvailable",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 31. Images - Get Current

- **Operation ID**: `getVpsCurrentImage`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/images/current`
- **Status**: Beta version (`BETA`)
- **Description**: Retrieve the currently installed image on this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Image`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:images/current/get` (required)

#### Response Fields

| Field  | Type     | Description        |
| ------ | -------- | ------------------ |
| `id`   | `string` | Image identifier   |
| `name` | `string` | Image display name |

#### Example Usage

```json
{
    "resource": "images",
    "imagesOperation": "getCurrent",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 32. Images - Get Details

- **Operation ID**: `getVpsAvailableImage`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/images/available/{id}`
- **Status**: Beta version (`BETA`)
- **Description**: Retrieve details about a specific image available for this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Image`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `id`          | `string` | Yes      | The image ID.                |

#### IAM Actions

- `vps:apiovh:images/available/get` (required)

#### Example Usage

```json
{
    "resource": "images",
    "imagesOperation": "getDetails",
    "serviceName": "vps123456.ovh.net",
    "id": "ubuntu-22.04"
}
```

---

## IP Operations

### 33. List IPs

- **Operation ID**: `listVpsIps`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/ips`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List IPs attached to this VPS.
- **Authentication**: Required
- **Response Type**: `ip[]`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:ips/get` (required)

#### Example Usage

```json
{
    "resource": "ips",
    "ipsOperation": "list",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 34. Get IP

- **Operation ID**: `getVpsIp`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/ips/{ipAddress}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve details about a specific IP attached to this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Ip`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `ipAddress`   | `ip`     | Yes      | The IP address to retrieve.  |

#### IAM Actions

- `vps:apiovh:ips/get` (required)

#### Response Fields

| Field         | Type                      | Description               |
| ------------- | ------------------------- | ------------------------- |
| `ipAddress`   | `ip`                      | The IP address            |
| `gateway`     | `ip`                      | Gateway IP                |
| `reverse`     | `string`                  | Reverse DNS               |
| `macAddress`  | `string`                  | MAC address               |
| `geolocation` | `vps.ip.GeolocationEnum`  | IP geolocation            |
| `type`        | `vps.ip.TypeEnum`         | IP type (e.g., `public`)  |
| `version`     | `coreTypes.IpVersionEnum` | IP version (`v4` or `v6`) |

#### Example Usage

```json
{
    "resource": "ips",
    "ipsOperation": "get",
    "serviceName": "vps123456.ovh.net",
    "ipAddress": "192.168.1.1"
}
```

---

### 35. Release IP

- **Operation ID**: `deleteVpsIp`
- **HTTP Method**: `DELETE`
- **Path**: `/vps/{serviceName}/ips/{ipAddress}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Release an additional IP attached to this VPS.
- **Authentication**: Required
- **Response Type**: `void`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `ipAddress`   | `ip`     | Yes      | The IP address to release.   |

#### IAM Actions

- `vps:apiovh:ips/delete` (required)

#### Example Usage

```json
{
    "resource": "ips",
    "ipsOperation": "release",
    "serviceName": "vps123456.ovh.net",
    "ipAddress": "192.168.1.1"
}
```

---

### 36. Update IP

- **Operation ID**: `editVpsIp`
- **HTTP Method**: `PUT`
- **Path**: `/vps/{serviceName}/ips/{ipAddress}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Update IP properties for this VPS.
- **Authentication**: Required
- **Response Type**: `void`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `ipAddress`   | `ip`     | Yes      | The IP address to update.    |
| `requestBody` | `vps.Ip` | Yes      | The IP properties to update. |

#### IAM Actions

- `vps:apiovh:ips/edit` (required)

#### Example Usage

```json
{
    "resource": "ips",
    "ipsOperation": "update",
    "serviceName": "vps123456.ovh.net",
    "ipAddress": "192.168.1.1",
    "requestBody": {
        "reverse": "my-server.example.com"
    }
}
```

---

## IP Geolocation Operations

### 37. IP Country Available

- **Operation ID**: `getVpsIpCountryAvailable`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/ipCountryAvailable`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List the available countries for IP geolocation (GeoIP) on this VPS.
- **Authentication**: Required
- **Response Type**: `vps.ip.GeolocationEnum[]`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:ipCountryAvailable/get` (required)

#### Example Usage

```json
{
    "resource": "ipCountryAvailable",
    "ipCountryAvailableOperation": "get",
    "serviceName": "vps123456.ovh.net"
}
```

---

## Migration 2020 Operations

### 38. Migration 2020 - Get

- **Operation ID**: `getVpsMigration2020`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/migration2020`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve information about the possible/ongoing migration from VPS 2020 to VPS 2025.
- **Authentication**: Required
- **Response Type**: `vps.migration.VPS2020to2025`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:migration2020/get` (required)

#### Example Usage

```json
{
    "resource": "migration2020",
    "migration2020Operation": "get",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 39. Migration 2020 - Cancel

- **Operation ID**: `cancelVpsMigration2020`
- **HTTP Method**: `DELETE`
- **Path**: `/vps/{serviceName}/migration2020`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Cancel the migration request from VPS 2020 to VPS 2025.
- **Authentication**: Required
- **Response Type**: `void`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:migration2020/create` (required)

#### Example Usage

```json
{
    "resource": "migration2020",
    "migration2020Operation": "cancel",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 40. Migration 2020 - Request

- **Operation ID**: `createVpsMigration2020`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/migration2020`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Request to be queued for migration from VPS 2020 to VPS 2025.
- **Authentication**: Required
- **Response Type**: `vps.migration.VPS2020to2025`

#### Parameters

| Parameter     | Type                               | Required | Description                    |
| ------------- | ---------------------------------- | -------- | ------------------------------ |
| `serviceName` | `string`                           | Yes      | The name of the VPS service.   |
| `requestBody` | `vps.migration.VPS2020to2025.Post` | Yes      | The migration request details. |

#### IAM Actions

- `vps:apiovh:migration2020/create` (required)

#### Example Usage

```json
{
    "resource": "migration2020",
    "migration2020Operation": "request",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {}
}
```

---

### 41. Migration 2020 - Update

- **Operation ID**: `editVpsMigration2020`
- **HTTP Method**: `PUT`
- **Path**: `/vps/{serviceName}/migration2020`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Update migration parameters for the VPS 2020 to VPS 2025 migration.
- **Authentication**: Required
- **Response Type**: `vps.migration.VPS2020to2025`

#### Parameters

| Parameter     | Type                              | Required | Description                   |
| ------------- | --------------------------------- | -------- | ----------------------------- |
| `serviceName` | `string`                          | Yes      | The name of the VPS service.  |
| `requestBody` | `vps.migration.VPS2020to2025.Put` | Yes      | The updated migration params. |

#### IAM Actions

- `vps:apiovh:migration2020/create` (required)

#### Example Usage

```json
{
    "resource": "migration2020",
    "migration2020Operation": "update",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {}
}
```

---

## Models & Options

### 42. Models

- **Operation ID**: `listVpsModels`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/models`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List available models for this VPS range.
- **Authentication**: Required
- **Response Type**: `vps.Model[]`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:models/get` (required)

#### Example Usage

```json
{
    "resource": "models",
    "modelsOperation": "list",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 43. List Options

- **Operation ID**: `listVpsOptions`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/option`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List options attached to this VPS.
- **Authentication**: Required
- **Response Type**: `vps.VpsOptionEnum[]`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:option/get` (required)

#### Example Usage

```json
{
    "resource": "option",
    "optionOperation": "list",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 44. Get Option

- **Operation ID**: `getVpsOption`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/option/{option}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve details about a specific option attached to this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Option`

#### Parameters

| Parameter     | Type                | Required | Description                  |
| ------------- | ------------------- | -------- | ---------------------------- |
| `serviceName` | `string`            | Yes      | The name of the VPS service. |
| `option`      | `vps.VpsOptionEnum` | Yes      | The option name.             |

#### IAM Actions

- `vps:apiovh:option/get` (required)

#### Response Fields

| Field    | Type                     | Description             |
| -------- | ------------------------ | ----------------------- |
| `option` | `vps.VpsOptionEnum`      | The option name         |
| `state`  | `vps.VpsOptionStateEnum` | The state of the option |

#### Example Usage

```json
{
    "resource": "option",
    "optionOperation": "get",
    "serviceName": "vps123456.ovh.net",
    "option": "snapshot"
}
```

---

## Power Management

### 45. Start VPS

- **Operation ID**: `startVps`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/start`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Start the VPS (power on) and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:start` (required)

#### Example Usage

```json
{
    "resource": "power",
    "powerOperation": "start",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 46. Stop VPS

- **Operation ID**: `stopVps`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/stop`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Stop the VPS (power off) and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:stop` (required)

#### Example Usage

```json
{
    "resource": "power",
    "powerOperation": "stop",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 47. Reboot VPS

- **Operation ID**: `rebootVps`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/reboot`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Request a reboot of the VPS and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:reboot` (required)

#### Example Usage

```json
{
    "resource": "power",
    "powerOperation": "reboot",
    "serviceName": "vps123456.ovh.net"
}
```

---

## Rebuild & Reinstall

### 48. Rebuild VPS

> **⚠️ BETA**: This operation is in beta and may change.

- **Operation ID**: `rebuildVps`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/rebuild`
- **Status**: Beta version (`BETA`)
- **Description**: Rebuild (reinstall) this VPS and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

#### Parameters

| Parameter     | Type               | Required | Description                  |
| ------------- | ------------------ | -------- | ---------------------------- |
| `serviceName` | `string`           | Yes      | The name of the VPS service. |
| `requestBody` | `vps.rebuild.post` | Yes      | The rebuild parameters.      |

#### IAM Actions

- `vps:apiovh:rebuild` (required)

#### Example Usage

```json
{
    "resource": "rebuild",
    "rebuildOperation": "rebuild",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {
        "imageUrl": "ubuntu-22.04"
    }
}
```

---

### 49. Reinstall VPS

- **Operation ID**: `reinstallVps`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/reinstall`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Reinstall the VPS and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

#### Parameters

| Parameter     | Type                 | Required | Description                  |
| ------------- | -------------------- | -------- | ---------------------------- |
| `serviceName` | `string`             | Yes      | The name of the VPS service. |
| `requestBody` | `vps.reinstall.post` | Yes      | The reinstall parameters.    |

#### IAM Actions

- `vps:apiovh:reinstall` (required)

#### Example Usage

```json
{
    "resource": "reinstall",
    "reinstallOperation": "reinstall",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {
        "hostname": "my-new-server"
    }
}
```

---

## Secondary DNS Operations

### 50. List Secondary DNS Domains

- **Operation ID**: `listVpsSecondaryDnsDomains`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/secondaryDnsDomains`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List domains configured on secondary DNS for this VPS.
- **Authentication**: Required
- **Response Type**: `string[]`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:secondaryDnsDomains/get` (required)

#### Example Usage

```json
{
    "resource": "secondaryDnsDomains",
    "secondaryDnsDomainsOperation": "list",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 51. Create Secondary DNS Domain

- **Operation ID**: `createVpsSecondaryDnsDomain`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/secondaryDnsDomains`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Add a domain to the secondary DNS configuration.
- **Authentication**: Required
- **Response Type**: `void`

#### Parameters

| Parameter     | Type                           | Required | Description                  |
| ------------- | ------------------------------ | -------- | ---------------------------- |
| `serviceName` | `string`                       | Yes      | The name of the VPS service. |
| `requestBody` | `vps.secondaryDnsDomains.post` | Yes      | The domain configuration.    |

#### IAM Actions

- `vps:apiovh:secondaryDnsDomains/create` (required)

#### Example Usage

```json
{
    "resource": "secondaryDnsDomains",
    "secondaryDnsDomainsOperation": "create",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {
        "domain": "example.com"
    }
}
```

---

### 52. Get Secondary DNS Domain

- **Operation ID**: `getVpsSecondaryDnsDomain`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/secondaryDnsDomains/{domain}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve the secondary DNS configuration for a specific domain.
- **Authentication**: Required
- **Response Type**: `secondaryDns.SecondaryDNS`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `domain`      | `string` | Yes      | The domain name.             |

#### IAM Actions

- `vps:apiovh:secondaryDnsDomains/get` (required)

#### Response Fields

| Field          | Type       | Description                           |
| -------------- | ---------- | ------------------------------------- |
| `creationDate` | `datetime` | Domain creation date                  |
| `dns`          | `string`   | Secondary DNS server                  |
| `domain`       | `string`   | Domain on slave server                |
| `ipMaster`     | `ipv4`     | IPv4 address of the master DNS server |

#### Example Usage

```json
{
    "resource": "secondaryDnsDomains",
    "secondaryDnsDomainsOperation": "get",
    "serviceName": "vps123456.ovh.net",
    "domain": "example.com"
}
```

---

### 53. Delete Secondary DNS Domain

- **Operation ID**: `deleteVpsSecondaryDnsDomain`
- **HTTP Method**: `DELETE`
- **Path**: `/vps/{serviceName}/secondaryDnsDomains/{domain}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Remove this domain from the secondary DNS configuration.
- **Authentication**: Required
- **Response Type**: `void`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `domain`      | `string` | Yes      | The domain name.             |

#### IAM Actions

- `vps:apiovh:secondaryDnsDomains/delete` (required)

#### Example Usage

```json
{
    "resource": "secondaryDnsDomains",
    "secondaryDnsDomainsOperation": "delete",
    "serviceName": "vps123456.ovh.net",
    "domain": "example.com"
}
```

---

### 54. Get Secondary DNS Name Server

- **Operation ID**: `getVpsSecondaryDnsNameServer`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/secondaryDnsDomains/{domain}/dnsServer`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve the authoritative name server information for this secondary DNS domain.
- **Authentication**: Required
- **Response Type**: `secondaryDns.SecondaryDNSNameServer`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `domain`      | `string` | Yes      | The domain name.             |

#### IAM Actions

- `vps:apiovh:secondaryDnsDomains/dnsServer/get` (required)

#### Response Fields

| Field      | Type     | Description              |
| ---------- | -------- | ------------------------ |
| `hostname` | `string` | The name server hostname |
| `ip`       | `ipv4`   | IPv4 address             |
| `ipv6`     | `ipv6`   | IPv6 address (optional)  |

#### Example Usage

```json
{
    "resource": "secondaryDnsDomains",
    "secondaryDnsDomainsOperation": "getNameServer",
    "serviceName": "vps123456.ovh.net",
    "domain": "example.com"
}
```

---

### 55. Get Available Secondary DNS Name Server

- **Operation ID**: `getVpsSecondaryDnsNameServerAvailable`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/secondaryDnsNameServerAvailable`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve the secondary DNS name server available for this VPS.
- **Authentication**: Required
- **Response Type**: `secondaryDns.SecondaryDNSNameServer`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:secondaryDnsNameServerAvailable/get` (required)

#### Example Usage

```json
{
    "resource": "secondaryDnsNameServerAvailable",
    "secondaryDnsNameServerAvailableOperation": "get",
    "serviceName": "vps123456.ovh.net"
}
```

---

## Service Information

### 56. Get Service Infos

- **Operation ID**: `getVpsServiceInfos`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/serviceInfos`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve the service information for this VPS.
- **Authentication**: Required
- **Response Type**: `services.Service`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:serviceInfos/get` (required)

#### Response Fields

| Field                   | Type                      | Description                                  |
| ----------------------- | ------------------------- | -------------------------------------------- |
| `serviceId`             | `long`                    | Service identifier                           |
| `contactAdmin`          | `string`                  | Admin contact                                |
| `contactBilling`        | `string`                  | Billing contact                              |
| `contactTech`           | `string`                  | Technical contact                            |
| `creation`              | `date`                    | Service creation date                        |
| `expiration`            | `date`                    | Service expiration date                      |
| `status`                | `service.StateEnum`       | Service state                                |
| `renewalType`           | `service.RenewalTypeEnum` | Renewal type                                 |
| `canDeleteAtExpiration` | `boolean`                 | Whether service can be deleted at expiration |
| `domain`                | `string`                  | Service domain                               |

#### Example Usage

```json
{
    "resource": "serviceInfos",
    "serviceInfosOperation": "get",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 57. Update Service Infos

- **Operation ID**: `editVpsServiceInfos`
- **HTTP Method**: `PUT`
- **Path**: `/vps/{serviceName}/serviceInfos`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Update the service information for this VPS.
- **Authentication**: Required
- **Response Type**: `void`

#### Parameters

| Parameter     | Type               | Required | Description                  |
| ------------- | ------------------ | -------- | ---------------------------- |
| `serviceName` | `string`           | Yes      | The name of the VPS service. |
| `requestBody` | `services.Service` | Yes      | The service info to update.  |

#### IAM Actions

- `vps:apiovh:serviceInfos/edit` (required)

#### Example Usage

```json
{
    "resource": "serviceInfos",
    "serviceInfosOperation": "update",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {
        "contactAdmin": "admin123-ovh"
    }
}
```

---

## Snapshot Operations

### 58. Snapshot Get

- **Operation ID**: `getVpsSnapshot`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/snapshot`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve information about the current VPS snapshot.
- **Authentication**: Required
- **Response Type**: `vps.Snapshot`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:snapshot/get` (required)

#### Response Fields

| Field          | Type       | Description            |
| -------------- | ---------- | ---------------------- |
| `id`           | `string`   | Snapshot identifier    |
| `description`  | `string`   | Snapshot description   |
| `creationDate` | `datetime` | Snapshot creation date |
| `region`       | `string`   | Snapshot region        |

#### Example Usage

```json
{
    "resource": "snapshot",
    "snapshotOperation": "get",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 59. Snapshot Create

- **Operation ID**: `createVpsSnapshot`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/createSnapshot`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Create a snapshot of this VPS (requires the snapshot option and no existing snapshot); returns an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

#### Parameters

| Parameter     | Type                      | Required | Description                  |
| ------------- | ------------------------- | -------- | ---------------------------- |
| `serviceName` | `string`                  | Yes      | The name of the VPS service. |
| `requestBody` | `vps.createSnapshot.post` | Yes      | Snapshot details.            |

#### Request Body Fields

| Field         | Type     | Required | Description          |
| ------------- | -------- | -------- | -------------------- |
| `description` | `string` | No       | Snapshot description |

#### IAM Actions

- `vps:apiovh:snapshot/create` (required)

#### Example Usage

```json
{
    "resource": "snapshot",
    "snapshotOperation": "create",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {
        "description": "Pre-deployment snapshot"
    }
}
```

---

### 60. Snapshot Update

- **Operation ID**: `editVpsSnapshot`
- **HTTP Method**: `PUT`
- **Path**: `/vps/{serviceName}/snapshot`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Update the VPS snapshot properties.
- **Authentication**: Required
- **Response Type**: `void`

#### Parameters

| Parameter     | Type           | Required | Description                  |
| ------------- | -------------- | -------- | ---------------------------- |
| `serviceName` | `string`       | Yes      | The name of the VPS service. |
| `requestBody` | `vps.Snapshot` | Yes      | The snapshot properties.     |

#### IAM Actions

- `vps:apiovh:snapshot/edit` (required)

#### Example Usage

```json
{
    "resource": "snapshot",
    "snapshotOperation": "update",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {
        "description": "Updated snapshot description"
    }
}
```

---

### 61. Snapshot Delete

- **Operation ID**: `deleteVpsSnapshot`
- **HTTP Method**: `DELETE`
- **Path**: `/vps/{serviceName}/snapshot`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Delete the VPS snapshot and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:snapshot/delete` (required)

#### Example Usage

```json
{
    "resource": "snapshot",
    "snapshotOperation": "delete",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 62. Snapshot Revert

- **Operation ID**: `revertVpsSnapshot`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/snapshot/revert`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Revert this VPS to the specified snapshot and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:snapshot/revert` (required)

#### Example Usage

```json
{
    "resource": "snapshot",
    "snapshotOperation": "revert",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 63. Snapshot Download

- **Operation ID**: `downloadVpsSnapshot`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/snapshot/download`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Generate a download URL for the VPS snapshot.
- **Authentication**: Required
- **Response Type**: `vps.DownloadSnapshotURL`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:snapshot/download/get` (required)

#### Response Fields

| Field  | Type     | Description                  |
| ------ | -------- | ---------------------------- |
| `size` | `long`   | Snapshot size (bytes)        |
| `url`  | `string` | URL to download the snapshot |

#### Example Usage

```json
{
    "resource": "snapshot",
    "snapshotOperation": "download",
    "serviceName": "vps123456.ovh.net"
}
```

---

## Status & Password

### 64. Status

- **Operation ID**: `getVpsIpServiceStatus`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/status`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve the service status of the main IP for this VPS.
- **Authentication**: Required
- **Response Type**: `vps.ip.ServiceStatus`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:status/get` (required)

#### Example Usage

```json
{
    "resource": "status",
    "statusOperation": "get",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 65. Set Root Password

- **Operation ID**: `setVpsRootPassword`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/setPassword`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Trigger the process to reset/set the root password on this VPS and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:setPassword` (required)

#### Example Usage

```json
{
    "resource": "password",
    "passwordOperation": "set",
    "serviceName": "vps123456.ovh.net"
}
```

---

## Tasks Operations

### 66. List Tasks

- **Operation ID**: `listVpsTasks`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/tasks`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List tasks associated with this VPS.
- **Authentication**: Required
- **Response Type**: `long[]`

#### Parameters

| Parameter     | Type                | Required | Description                         |
| ------------- | ------------------- | -------- | ----------------------------------- |
| `serviceName` | `string`            | Yes      | The name of the VPS service.        |
| `state`       | `vps.TaskStateEnum` | No       | Filter the value of state property. |
| `type`        | `vps.TaskTypeEnum`  | No       | Filter the value of type property.  |

#### IAM Actions

- `vps:apiovh:tasks/get` (required)

#### Example Usage

```json
{
    "resource": "tasks",
    "tasksOperation": "list",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 67. Get Task

- **Operation ID**: `getVpsTask`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/tasks/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve details about a specific task for this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Task`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `id`          | `long`   | Yes      | The task ID.                 |

#### IAM Actions

- `vps:apiovh:tasks/get` (required)

#### Response Fields

| Field      | Type                | Description              |
| ---------- | ------------------- | ------------------------ |
| `id`       | `long`              | Task identifier          |
| `date`     | `datetime`          | Task creation date       |
| `state`    | `vps.TaskStateEnum` | Task state               |
| `progress` | `long`              | Task progress percentage |
| `type`     | `vps.TaskTypeEnum`  | Task type                |

#### Example Usage

```json
{
    "resource": "tasks",
    "tasksOperation": "get",
    "serviceName": "vps123456.ovh.net",
    "id": 98765
}
```

---

## Templates Operations

### 68. List Templates

- **Operation ID**: `listVpsTemplates`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/templates`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List the templates available for this VPS.
- **Authentication**: Required
- **Response Type**: `long[]`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:templates/get` (required)

#### Example Usage

```json
{
    "resource": "templates",
    "templatesOperation": "list",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 69. Get Template

- **Operation ID**: `getVpsTemplate`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/templates/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve details about a specific template available for this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Template`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `id`          | `long`   | Yes      | The template ID.             |

#### IAM Actions

- `vps:apiovh:templates/get` (required)

#### Response Fields

| Field               | Type                        | Description                      |
| ------------------- | --------------------------- | -------------------------------- |
| `distribution`      | `string`                    | Distribution name                |
| `version`           | `string`                    | Distribution version             |
| `availableLanguage` | `string[]`                  | Available installation languages |
| `bitFormat`         | `vps.TemplateBitFormatEnum` | Bit format (e.g., `64bit`)       |

#### Example Usage

```json
{
    "resource": "templates",
    "templatesOperation": "get",
    "serviceName": "vps123456.ovh.net",
    "id": 101
}
```

---

### 70. List Template Software

- **Operation ID**: `listVpsTemplateSoftwares`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/templates/{id}/software`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List software available for the given VPS template.
- **Authentication**: Required
- **Response Type**: `long[]`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `id`          | `long`   | Yes      | The template ID.             |

#### IAM Actions

- `vps:apiovh:templates/software/get` (required)

#### Example Usage

```json
{
    "resource": "templates",
    "templatesOperation": "listSoftware",
    "serviceName": "vps123456.ovh.net",
    "id": 101
}
```

---

### 71. Get Template Software

- **Operation ID**: `getVpsTemplateSoftware`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/templates/{id}/software/{softwareId}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve details about a specific software available for a VPS template.
- **Authentication**: Required
- **Response Type**: `vps.Software`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `id`          | `long`   | Yes      | The template ID.             |
| `softwareId`  | `long`   | Yes      | The software ID.             |

#### IAM Actions

- `vps:apiovh:templates/software/get` (required)

#### Example Usage

```json
{
    "resource": "templates",
    "templatesOperation": "getSoftware",
    "serviceName": "vps123456.ovh.net",
    "id": 101,
    "softwareId": 42
}
```

---

## Termination Operations

### 72. Request Termination

- **Operation ID**: `terminateVps`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/terminate`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Request termination of this VPS service.
- **Authentication**: Required
- **Response Type**: `string`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:terminate` (required)

#### Example Usage

```json
{
    "resource": "termination",
    "terminationOperation": "request",
    "serviceName": "vps123456.ovh.net"
}
```

---

## Veeam Backup Operations

### 73. Get Veeam Configuration

- **Operation ID**: `getVpsVeeam`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/veeam`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve Veeam backup configuration for this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Veeam`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:veeam/get` (required)

#### Example Usage

```json
{
    "resource": "veeam",
    "veeamOperation": "get",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 74. List Veeam Restore Points

- **Operation ID**: `listVpsVeeamRestorePoints`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/veeam/restorePoints`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List Veeam restore points available for this VPS.
- **Authentication**: Required
- **Response Type**: `long[]`

#### Parameters

| Parameter      | Type       | Required | Description                                |
| -------------- | ---------- | -------- | ------------------------------------------ |
| `serviceName`  | `string`   | Yes      | The name of the VPS service.               |
| `creationTime` | `datetime` | No       | Filter the value of creationTime property. |

#### IAM Actions

- `vps:apiovh:veeam/restorePoints/get` (required)

#### Example Usage

```json
{
    "resource": "veeam",
    "veeamOperation": "listRestorePoints",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 75. Get Veeam Restore Point

- **Operation ID**: `getVpsVeeamRestorePoint`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/veeam/restorePoints/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve details about a specific Veeam restore point for this VPS.
- **Authentication**: Required
- **Response Type**: `vps.veeam.RestorePoint`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `id`          | `long`   | Yes      | The restore point ID.        |

#### IAM Actions

- `vps:apiovh:veeam/restorePoints/get` (required)

#### Example Usage

```json
{
    "resource": "veeam",
    "veeamOperation": "getRestorePoint",
    "serviceName": "vps123456.ovh.net",
    "id": 999
}
```

---

### 76. Restore from Veeam Restore Point

- **Operation ID**: `restoreVpsVeeamRestorePoint`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/veeam/restorePoints/{id}/restore`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Restore this VPS from a Veeam restore point and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

#### Parameters

| Parameter     | Type                                   | Required | Description                  |
| ------------- | -------------------------------------- | -------- | ---------------------------- |
| `serviceName` | `string`                               | Yes      | The name of the VPS service. |
| `id`          | `long`                                 | Yes      | The restore point ID.        |
| `requestBody` | `vps.veeam.restorePoints.restore.post` | Yes      | The restore parameters.      |

#### IAM Actions

- `vps:apiovh:veeam/restorePoints/restore` (required)

#### Example Usage

```json
{
    "resource": "veeam",
    "veeamOperation": "restore",
    "serviceName": "vps123456.ovh.net",
    "id": 999,
    "requestBody": {}
}
```

---

### 77. Get Restored Veeam Backup

- **Operation ID**: `getVpsVeeamRestoredBackup`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/veeam/restoredBackup`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve the restored Veeam backup currently mounted on this VPS.
- **Authentication**: Required
- **Response Type**: `vps.veeam.RestoredBackup`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:veeam/restoredBackup/get` (required)

#### Example Usage

```json
{
    "resource": "veeam",
    "veeamOperation": "getRestoredBackup",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 78. Delete Restored Veeam Backup

- **Operation ID**: `deleteVpsVeeamRestoredBackup`
- **HTTP Method**: `DELETE`
- **Path**: `/vps/{serviceName}/veeam/restoredBackup`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Unmount the restored Veeam backup from this VPS and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:veeam/restoredBackup/delete` (required)

#### Example Usage

```json
{
    "resource": "veeam",
    "veeamOperation": "deleteRestoredBackup",
    "serviceName": "vps123456.ovh.net"
}
```

---

## Console Access

### 79. Console - Get URL

- **Operation ID**: `getVpsConsoleUrl`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/getConsoleUrl`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Generate and return a console access URL for this VPS.
- **Authentication**: Required
- **Response Type**: `string`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:getConsoleUrl` (required)

#### Example Usage

```json
{
    "resource": "console",
    "consoleOperation": "getUrl",
    "serviceName": "vps123456.ovh.net"
}
```

---

### 80. Open Console Access (VNC)

- **Operation ID**: `openVpsConsoleAccess`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/openConsoleAccess`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Generate the information required to open a VNC connection to this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Vnc`

#### Parameters

| Parameter     | Type                         | Required | Description                  |
| ------------- | ---------------------------- | -------- | ---------------------------- |
| `serviceName` | `string`                     | Yes      | The name of the VPS service. |
| `requestBody` | `vps.openConsoleAccess.post` | Yes      | Console access parameters.   |

#### IAM Actions

- `vps:apiovh:openConsoleAccess` (required)

#### Example Usage

```json
{
    "resource": "console",
    "consoleOperation": "openAccess",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {}
}
```

---

## Contact & Termination Confirmation

### 81. Contact Change

- **Operation ID**: `changeVpsContact`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/changeContact`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Initiate a contact change procedure for this VPS service.
- **Authentication**: Required
- **Response Type**: `long[]`

#### Parameters

| Parameter     | Type                     | Required | Description                  |
| ------------- | ------------------------ | -------- | ---------------------------- |
| `serviceName` | `string`                 | Yes      | The name of the VPS service. |
| `requestBody` | `services.changeContact` | Yes      | The new contact details.     |

#### IAM Actions

- `vps:apiovh:changeContact/create` (required)

#### Request Body Fields

| Field            | Type     | Required | Description               |
| ---------------- | -------- | -------- | ------------------------- |
| `contactAdmin`   | `string` | No       | The new admin contact     |
| `contactBilling` | `string` | No       | The new billing contact   |
| `contactTech`    | `string` | No       | The new technical contact |

#### Example Usage

```json
{
    "resource": "contact",
    "contactOperation": "change",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {
        "contactAdmin": "admin123-ovh",
        "contactTech": "tech456-ovh"
    }
}
```

---

### 82. Confirm Termination

- **Operation ID**: `confirmVpsTermination`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/confirmTermination`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Confirm the termination of this VPS service.
- **Authentication**: Required
- **Response Type**: `string`

#### Parameters

| Parameter     | Type                          | Required | Description                  |
| ------------- | ----------------------------- | -------- | ---------------------------- |
| `serviceName` | `string`                      | Yes      | The name of the VPS service. |
| `requestBody` | `services.confirmTermination` | Yes      | Confirmation details.        |

#### IAM Actions

- `vps:apiovh:confirmTermination` (required)

#### Request Body Fields

| Field                 | Type                               | Required | Description                                      |
| --------------------- | ---------------------------------- | -------- | ------------------------------------------------ |
| `token`               | `string`                           | Yes      | Termination token sent by email to admin contact |
| `reason`              | `service.TerminationReasonEnum`    | No       | Reason for termination                           |
| `futureUse`           | `service.TerminationFutureUseEnum` | No       | Future use intention                             |
| `commentary`          | `string`                           | No       | Commentary about termination request             |
| `commentaryReason`    | `string`                           | No       | Commentary about reason                          |
| `commentaryFutureUse` | `string`                           | No       | Commentary about future use                      |

#### Example Usage

```json
{
    "resource": "termination",
    "terminationOperation": "confirm",
    "serviceName": "vps123456.ovh.net",
    "requestBody": {
        "token": "abc123-def456-ghi789",
        "reason": "NOT_NEEDED_ANYMORE",
        "commentary": "Migrating to a different provider"
    }
}
```

---

## Parameter Reference

### Common Parameter Types

| Type       | Description                                           |
| ---------- | ----------------------------------------------------- |
| `string`   | A standard text string                                |
| `long`     | A 64-bit integer                                      |
| `boolean`  | `true` or `false`                                     |
| `ip`       | An IP address (IPv4 or IPv6)                          |
| `ipBlock`  | An IP block in CIDR notation (e.g., `192.168.1.0/24`) |
| `datetime` | ISO 8601 datetime string                              |
| `date`     | ISO 8601 date string (YYYY-MM-DD)                     |
| `time`     | Time string (HH:MM:SS)                                |
| `uuid`     | Universally unique identifier                         |

### Enumerations

#### `vps.VpsMonitoringPeriodEnum`

| Value   | Description        |
| ------- | ------------------ |
| `5min`  | 5-minute intervals |
| `1hour` | 1-hour intervals   |
| `1day`  | 1-day intervals    |

#### `vps.disk.StatisticTypeEnum`

| Value   | Description             |
| ------- | ----------------------- |
| `usage` | Disk usage              |
| `iops`  | Input/output operations |
| `read`  | Read operations         |
| `write` | Write operations        |

#### `vps.BackupStateEnum`

| Value      | Description        |
| ---------- | ------------------ |
| `enabled`  | Backup is enabled  |
| `disabled` | Backup is disabled |

#### `vps.RestoreStateEnum`

| Value       | Description             |
| ----------- | ----------------------- |
| `available` | Restore point available |
| `restored`  | Restore point restored  |
| `restoring` | Restore point restoring |

#### `vps.RestoreTypeEnum`

| Value  | Description         |
| ------ | ------------------- |
| `full` | Full system restore |
| `file` | File-level restore  |

#### `vps.TaskStateEnum`

| Value        | Description             |
| ------------ | ----------------------- |
| `todo`       | Task is pending         |
| `doing`      | Task is in progress     |
| `done`       | Task completed          |
| `error`      | Task failed             |
| `cancelled`  | Task was cancelled      |
| `blocked`    | Task is blocked         |
| `paused`     | Task is paused          |
| `waitingAck` | Awaiting acknowledgment |

#### `vps.TaskTypeEnum`

| Value                      | Description                 |
| -------------------------- | --------------------------- |
| `addVeeamBackupJob`        | Add Veeam backup job        |
| `changeRootPassword`       | Change root password        |
| `createSnapshot`           | Create snapshot             |
| `deleteSnapshot`           | Delete snapshot             |
| `deliverVm`                | Deliver VM                  |
| `getConsoleUrl`            | Get console URL             |
| `internalTask`             | Internal task               |
| `migrate`                  | Migration task              |
| `openConsoleAccess`        | Open console access         |
| `provisioningAdditionalIp` | Provision additional IP     |
| `reOpenVm`                 | Reopen VM                   |
| `rebootVm`                 | Reboot VM                   |
| `reinstallVm`              | Reinstall VM                |
| `removeVeeamBackup`        | Remove Veeam backup         |
| `rescheduleAutoBackup`     | Reschedule automated backup |
| `restoreFullVeeamBackup`   | Restore full Veeam backup   |
| `restoreVeeamBackup`       | Restore Veeam backup        |
| `restoreVm`                | Restore VM                  |
| `revertSnapshot`           | Revert snapshot             |
| `setMonitoring`            | Set monitoring              |
| `setNetboot`               | Set netboot                 |
| `startVm`                  | Start VM                    |
| `stopVm`                   | Stop VM                     |
| `upgradeVm`                | Upgrade VM                  |

#### `service.TerminationReasonEnum`

| Value                             | Description                  |
| --------------------------------- | ---------------------------- |
| `NOT_NEEDED_ANYMORE`              | Service no longer needed     |
| `MIGRATED_TO_ANOTHER_OVH_PRODUCT` | Moved to another OVH product |
| `MIGRATED_TO_COMPETITOR`          | Moved to a competitor        |
| `TOO_EXPENSIVE`                   | Cost concerns                |
| `FEATURES_DONT_SUIT_ME`           | Missing features             |
| `LACK_OF_PERFORMANCES`            | Performance issues           |
| `NOT_RELIABLE`                    | Reliability concerns         |
| `TOO_HARD_TO_USE`                 | Usability issues             |
| `UNSATIFIED_BY_CUSTOMER_SUPPORT`  | Support dissatisfaction      |
| `OTHER`                           | Other reason                 |

#### `nichandle.CountryEnum`

Standard ISO 3166-1 alpha-2 country codes (e.g., `FR`, `DE`, `US`, `GB`). See the [OVH API documentation](https://api.ovh.com/) for the complete list.

---

## Error Handling

### Common Error Scenarios

| Error Type               | Cause                                                  | Resolution                                                                                  |
| ------------------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| **Authentication Error** | Invalid or expired credentials                         | Verify `applicationKey`, `applicationSecret`, and `consumerKey` are correct and not expired |
| **Invalid Service Name** | The `serviceName` does not exist or is misspelled      | Use **List VPS** to retrieve valid service names                                            |
| **Permission Denied**    | Missing IAM action for the requested operation         | Ensure API credentials have the required IAM scopes                                         |
| **Resource Not Found**   | The specified resource (disk, IP, etc.) does not exist | Verify the resource ID is correct and belongs to the VPS                                    |
| **Conflict**             | Operation conflicts with current VPS state             | Check VPS state; e.g., cannot create snapshot if one already exists                         |
| **Rate Limit**           | Too many API requests in a short period                | Implement delays between operations or use n8n's built-in rate limiting                     |
| **BETA API Unavailable** | BETA endpoint is temporarily unavailable               | Retry later; BETA endpoints may have intermittent availability                              |

### n8n Error Handling

- Use `NodeApiError` for n8n-specific error handling
- Validate inputs before making API calls (e.g., ensure `serviceName` is a valid VPS identifier)
- Handle asynchronous task responses by polling the task status using the returned task ID
- For operations that return `vps.Task`, check the `state` field to determine completion:
  - `done` — Operation completed successfully
  - `error` — Operation failed; check task details for error information
  - `doing` — Operation is still in progress

### Handling Asynchronous Tasks

Many VPS operations return a `vps.Task` object. To track task completion:

1. Capture the task `id` from the response
2. Use a **Wait** node or polling loop in your n8n workflow
3. Periodically query the task status using the task ID
4. Proceed when `state` is `done` or `error`

```json
{
    "id": 98765,
    "date": "2024-01-15T10:30:00Z",
    "state": "doing",
    "progress": 45,
    "type": "createSnapshot"
}
```

---

## Example Workflows

### Example 1: List All VPS and Get Details

```json
[
    {
        "name": "List VPS",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "vps",
            "vpsOperation": "list"
        }
    },
    {
        "name": "Get VPS Details",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "vps",
            "vpsOperation": "get",
            "serviceName": "={{ $json[0] }}"
        }
    }
]
```

### Example 2: Create Snapshot and Monitor Task

```json
[
    {
        "name": "Create Snapshot",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "snapshot",
            "snapshotOperation": "create",
            "serviceName": "vps123456.ovh.net",
            "requestBody": {
                "description": "Pre-deployment snapshot"
            }
        }
    },
    {
        "name": "Wait for Task",
        "type": "n8n-nodes-base.wait",
        "parameters": {
            "waitTime": 60
        }
    },
    {
        "name": "Check Snapshot",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "snapshot",
            "snapshotOperation": "get",
            "serviceName": "vps123456.ovh.net"
        }
    }
]
```

### Example 3: Automated Backup Workflow

```json
[
    {
        "name": "Get Backup Settings",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "automatedBackup",
            "automatedBackupOperation": "get",
            "serviceName": "vps123456.ovh.net"
        }
    },
    {
        "name": "Reschedule Backup",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "automatedBackup",
            "automatedBackupOperation": "reschedule",
            "serviceName": "vps123456.ovh.net",
            "requestBody": {
                "schedule": "02:00:00"
            }
        }
    }
]
```

### Example 4: Manage Backup FTP ACLs

```json
[
    {
        "name": "List Current ACLs",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "backupftp",
            "backupftpOperation": "listAcls",
            "serviceName": "vps123456.ovh.net"
        }
    },
    {
        "name": "Add New ACL",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "backupftp",
            "backupftpOperation": "createAcl",
            "serviceName": "vps123456.ovh.net",
            "requestBody": {
                "ipBlock": "10.0.0.0/8",
                "ftp": true,
                "cifs": true
            }
        }
    }
]
```

### Example 5: Disk Monitoring Dashboard

```json
[
    {
        "name": "List Disks",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "disks",
            "vpsDisksOperation": "list",
            "serviceName": "vps123456.ovh.net"
        }
    },
    {
        "name": "Get Disk Usage",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "disks",
            "vpsDisksOperation": "getUsage",
            "serviceName": "vps123456.ovh.net",
            "id": "={{ $json[0] }}",
            "type": "usage"
        }
    },
    {
        "name": "Get Disk Monitoring",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "disks",
            "vpsDisksOperation": "getMonitoring",
            "serviceName": "vps123456.ovh.net",
            "id": "={{ $json[0] }}",
            "period": "1hour",
            "type": "usage"
        }
    }
]
```

### Example 6: Power Management Workflow

Stop a VPS, perform maintenance, then start it again:

```json
[
    {
        "name": "Stop VPS",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "power",
            "powerOperation": "stop",
            "serviceName": "vps123456.ovh.net"
        }
    },
    {
        "name": "Wait",
        "type": "n8n-nodes-base.wait",
        "parameters": {
            "waitTime": 30
        }
    },
    {
        "name": "Start VPS",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "power",
            "powerOperation": "start",
            "serviceName": "vps123456.ovh.net"
        }
    }
]
```

### Example 7: Veeam Backup Restore

```json
[
    {
        "name": "List Veeam Restore Points",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "veeam",
            "veeamOperation": "listRestorePoints",
            "serviceName": "vps123456.ovh.net"
        }
    },
    {
        "name": "Restore from Veeam",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "veeam",
            "veeamOperation": "restore",
            "serviceName": "vps123456.ovh.net",
            "id": "={{ $json[0] }}"
        }
    }
]
```

### Example 8: Secondary DNS Management

```json
[
    {
        "name": "List Secondary DNS Domains",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "secondaryDnsDomains",
            "secondaryDnsDomainsOperation": "list",
            "serviceName": "vps123456.ovh.net"
        }
    },
    {
        "name": "Add Secondary DNS Domain",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "secondaryDnsDomains",
            "secondaryDnsDomainsOperation": "create",
            "serviceName": "vps123456.ovh.net",
            "requestBody": {
                "domain": "example.com"
            }
        }
    }
]
```

### Example 9: Migration 2020 Workflow

```json
[
    {
        "name": "Check Migration Status",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "migration2020",
            "migration2020Operation": "get",
            "serviceName": "vps123456.ovh.net"
        }
    },
    {
        "name": "Request Migration",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "migration2020",
            "migration2020Operation": "request",
            "serviceName": "vps123456.ovh.net",
            "requestBody": {}
        }
    }
]
```

### Example 10: Console Access

```json
[
    {
        "name": "Get Console URL",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "console",
            "consoleOperation": "getUrl",
            "serviceName": "vps123456.ovh.net"
        }
    },
    {
        "name": "Open VNC Access",
        "type": "n8n-nodes-ovhcloud.ovhCloud",
        "parameters": {
            "resource": "console",
            "consoleOperation": "openAccess",
            "serviceName": "vps123456.ovh.net",
            "requestBody": {}
        }
    }
]
```

---

## Notes

- **Beta Operations**: Operations marked as `BETA` are subject to change and may not be stable. Avoid relying on them for critical production workflows.
- **Deprecated Operations**: Always check the `deprecatedDate` and `replacement` fields for deprecated operations. Migrate to replacement endpoints when available.
- **IAM Actions**: Ensure the required IAM permissions are granted before attempting to execute operations. Missing permissions will result in `403 Forbidden` errors.
- **Asynchronous Tasks**: Operations that return `vps.Task` or `dedicated.server.Task` are asynchronous. Poll the task status to determine completion.
- **Service Name Format**: VPS service names typically follow the pattern `vpsXXXXXXX.ovh.net` or `vps-XXXXXXX.ovh.net`.
- **Testing**: Manual testing is required via `npm run dev` and the n8n UI. No automated test framework is currently configured.
- **Rate Limiting**: The OVHcloud API enforces rate limits. Implement appropriate delays or use n8n's built-in rate limiting features for bulk operations.
- **Snapshot Create Endpoint**: The Snapshot Create operation uses the dedicated endpoint `POST /vps/{serviceName}/createSnapshot` with an optional `description` field in the request body.
- **Contact Change**: The Contact Change operation requires body fields `contactAdmin`, `contactBilling`, and `contactTech` (all optional).
- **Confirm Termination**: The Confirm Termination operation uses the field name `commentary` (not `comment`) for termination commentary.
- **Automated Backup Reschedule**: The Reschedule Backup operation uses the body field `schedule` (not `scheduleTime`).

---

## Versioning

| Component     | Version                                      |
| ------------- | -------------------------------------------- |
| API Version   | `1.0`                                        |
| Node Version  | Follows `n8n-nodes-base` package conventions |
| Documentation | `v1.1`                                       |

### Change History

| Date       | Version | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-04-02 | v1.1    | Added operation summary table (72 operations); updated `vps.RestoreStateEnum` with `restored` and `restoring` values; added complete `vps.TaskTypeEnum` enumeration; added response fields for Get Secondary DNS Domain, Get Option, Snapshot Download; added new workflow examples (Secondary DNS, Migration 2020, Console Access); added Notes section entries for fixed operations (Snapshot Create endpoint, Contact Change body fields, Confirm Termination `commentary` field, Automated Backup Reschedule `schedule` field); updated documentation version to v1.1 |
| 2026-04-02 | v1      | Initial comprehensive VPS documentation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

---

## References

- [OVHcloud VPS API Documentation](https://api.ovh.com/)
- [OVHcloud API Explorer](https://api.ovh.com/console/)
- [n8n Node Development Guidelines](../../AGENTS.md)
- [TypeScript Style Guide](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)

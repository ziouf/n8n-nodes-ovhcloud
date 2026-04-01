# OVHcloud VPS Node Documentation

This document describes the **VPS (Virtual Private Server)** node for n8n, including its available operations, parameters, authentication requirements, and response types.

---

## Overview

The **VPS node** interacts with the OVHcloud VPS API to perform operations such as listing VPS services, retrieving details, managing snapshots, disks, IPs, and more. It is designed to work within n8n workflows, leveraging the `OvhCloudApiClient` for HTTP requests and the `OvhCloudApi` credential type for authentication.

---

## Authentication

Authentication is handled via the **OVH API** credential type.

### Required Credentials

- **Host**: `api.ovh.com`
- **Application Key**
- **Application Secret**
- **Consumer Key**

### IAM Actions

Each operation requires specific IAM permissions. These are listed in the **IAM Actions** section for each operation below.

---

## Available Operations

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

---

### 3. Edit VPS

- **Operation ID**: `editVPS`
- **HTTP Method**: `PUT`
- **Path**: `/vps/{serviceName}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Edit properties of a given VPS service.
- **Authentication**: Required
- **Response Type**: `void`

#### Parameters

| Parameter     | Type      | Required | Description                   |
| ------------- | --------- | -------- | ----------------------------- |
| `serviceName` | `string`  | Yes      | The name of the VPS service.  |
| `requestBody` | `vps.VPS` | Yes      | The VPS properties to update. |

#### IAM Actions

- `vps:apiovh:put` (required)

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

---

### 5. List Active Options

- **Operation ID**: `listVpsActiveOptions`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/activeOptions`
- **Status**: Deprecated (will be removed on **2023-11-23**)
- **Description**: List all active options enabled on this VPS.
- **Authentication**: Required
- **Response Type**: `vps.VpsOptionEnum[]`

#### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

#### IAM Actions

- `vps:apiovh:activeOptions/get` (required)

---

### 6. Automated Backup

#### Get Automated Backup Settings

- **Operation ID**: `getVpsAutomatedBackup`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/automatedBackup`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve automated backup settings for a specific VPS.
- **Authentication**: Required
- **Response Type**: `vps.AutomatedBackup`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

##### IAM Actions

- `vps:apiovh:automatedBackup/get` (required)

#### List Attached Backups

- **Operation ID**: `getVpsAutomatedBackupAttached`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/automatedBackup/attachedBackup`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List backups currently attached to this VPS.
- **Authentication**: Required
- **Response Type**: `vps.automatedBackup.Attached[]`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

##### IAM Actions

- `vps:apiovh:automatedBackup/attachedBackup/get` (required)

#### Detach Backup

- **Operation ID**: `detachVpsAutomatedBackup`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/automatedBackup/detachBackup`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Unmount a restored backup from this VPS and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

##### Parameters

| Parameter     | Type                                    | Required | Description                                                   |
| ------------- | --------------------------------------- | -------- | ------------------------------------------------------------- |
| `serviceName` | `string`                                | Yes      | The name of the VPS service.                                  |
| `requestBody` | `vps.automatedBackup.detachBackup.post` | Yes      | The request body containing details for detaching the backup. |

##### IAM Actions

- `vps:apiovh:automatedBackup/detachBackup` (required)

#### Reschedule Automated Backup

- **Operation ID**: `rescheduleVpsAutomatedBackup`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/automatedBackup/reschedule`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Change the scheduled time of the daily automated backup and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

##### Parameters

| Parameter     | Type                                  | Required | Description                                     |
| ------------- | ------------------------------------- | -------- | ----------------------------------------------- |
| `serviceName` | `string`                              | Yes      | The name of the VPS service.                    |
| `requestBody` | `vps.automatedBackup.reschedule.post` | Yes      | The new schedule time for the automated backup. |

##### IAM Actions

- `vps:apiovh:automatedBackup/reschedule` (required)

#### Restore from Automated Backup

- **Operation ID**: `restoreVpsAutomatedBackup`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/automatedBackup/restore`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Restore this VPS from a given automated backup restore point and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

##### Parameters

| Parameter     | Type                               | Required | Description                  |
| ------------- | ---------------------------------- | -------- | ---------------------------- |
| `serviceName` | `string`                           | Yes      | The name of the VPS service. |
| `requestBody` | `vps.automatedBackup.restore.post` | Yes      | The restore point details.   |

##### IAM Actions

- `vps:apiovh:automatedBackup/restore` (required)

---

### 7. VPS Upgrade

#### List Available Upgrades

- **Operation ID**: `listVpsAvailableUpgrades`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/availableUpgrade`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List models this VPS can be upgraded to.
- **Authentication**: Required
- **Response Type**: `vps.Model[]`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

##### IAM Actions

- `vps:apiovh:availableUpgrade/get` (required)

---

### 8. Backup FTP

#### Get Backup FTP Configuration

- **Operation ID**: `getVpsBackupFtp`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/backupftp`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve Backup FTP configuration for this VPS.
- **Authentication**: Required
- **Response Type**: `vps.BackupFtp`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

##### IAM Actions

- `vps:apiovh:backupftp/get` (required)

#### List Backup FTP ACL Entries

- **Operation ID**: `listVpsBackupFtpAcls`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/backupftp/access`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List Backup FTP ACL entries for this VPS.
- **Authentication**: Required
- **Response Type**: `ipBlock[]`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

##### IAM Actions

- `vps:apiovh:backupftp/access/get` (required)

#### Create Backup FTP ACL Entry

- **Operation ID**: `createVpsBackupFtpAcl`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/backupftp/access`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Create a new Backup FTP ACL entry and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `dedicated.server.Task`

##### Parameters

| Parameter     | Type                        | Required | Description                        |
| ------------- | --------------------------- | -------- | ---------------------------------- |
| `serviceName` | `string`                    | Yes      | The name of the VPS service.       |
| `requestBody` | `vps.backupftp.access.post` | Yes      | The details for the new ACL entry. |

##### IAM Actions

- `vps:apiovh:backupftp/access/create` (required)

#### Delete Backup FTP ACL Entry

- **Operation ID**: `deleteVpsBackupFtpAcl`
- **HTTP Method**: `DELETE`
- **Path**: `/vps/{serviceName}/backupftp/access/{ipBlock}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Revoke a Backup FTP ACL entry and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `dedicated.server.Task`

##### Parameters

| Parameter     | Type      | Required | Description                  |
| ------------- | --------- | -------- | ---------------------------- |
| `serviceName` | `string`  | Yes      | The name of the VPS service. |
| `ipBlock`     | `ipBlock` | Yes      | The IP block to revoke.      |

##### IAM Actions

- `vps:apiovh:backupftp/access/delete` (required)

#### List Authorizable IP Blocks

- **Operation ID**: `listVpsBackupFtpAuthorizableBlocks`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/backupftp/authorizableBlocks`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List IP blocks that can be used in the Backup FTP ACL.
- **Authentication**: Required
- **Response Type**: `ipBlock[]`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

##### IAM Actions

- `vps:apiovh:backupftp/authorizableBlocks/get` (required)

#### Set Backup FTP Password

- **Operation ID**: `setVpsBackupFtpPassword`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/backupftp/password`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Change the Backup FTP password for this VPS and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `dedicated.server.Task`

##### Parameters

| Parameter     | Type                      | Required | Description                  |
| ------------- | ------------------------- | -------- | ---------------------------- |
| `serviceName` | `string`                  | Yes      | The name of the VPS service. |
| `requestBody` | `services.changePassword` | Yes      | The new password details.    |

##### IAM Actions

- `vps:apiovh:backupftp/password/set` (required)

---

### 9. Contact Change

#### Initiate Contact Change

- **Operation ID**: `changeVpsContact`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/changeContact`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Initiate a contact change procedure for this VPS service.
- **Authentication**: Required
- **Response Type**: `long[]`

##### Parameters

| Parameter     | Type                     | Required | Description                  |
| ------------- | ------------------------ | -------- | ---------------------------- |
| `serviceName` | `string`                 | Yes      | The name of the VPS service. |
| `requestBody` | `services.changeContact` | Yes      | The new contact details.     |

##### IAM Actions

- `vps:apiovh:changeContact/create` (required)

---

### 10. Confirm Termination

#### Confirm VPS Termination

- **Operation ID**: `confirmVpsTermination`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/confirmTermination`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Confirm the termination of this VPS service.
- **Authentication**: Required
- **Response Type**: `string`

##### Parameters

| Parameter     | Type                          | Required | Description                  |
| ------------- | ----------------------------- | -------- | ---------------------------- |
| `serviceName` | `string`                      | Yes      | The name of the VPS service. |
| `requestBody` | `services.confirmTermination` | Yes      | Confirmation details.        |

##### IAM Actions

- `vps:apiovh:confirmTermination` (required)

---

### 11. Snapshot Operations

#### Create Snapshot

- **Operation ID**: `createVpsSnapshot`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/createSnapshot`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Create a snapshot of this VPS (requires the snapshot option and no existing snapshot); returns an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

##### Parameters

| Parameter     | Type                      | Required | Description                  |
| ------------- | ------------------------- | -------- | ---------------------------- |
| `serviceName` | `string`                  | Yes      | The name of the VPS service. |
| `requestBody` | `vps.createSnapshot.post` | Yes      | Snapshot details.            |

##### IAM Actions

- `vps:apiovh:snapshot/create` (required)

---

### 12. Disk Operations

#### List Disks

- **Operation ID**: `listVpsDisks`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/disks`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List disks attached to this VPS.
- **Authentication**: Required
- **Response Type**: `long[]`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

##### IAM Actions

- `vps:apiovh:disks/get` (required)

#### Get Disk Details

- **Operation ID**: `getVpsDisk`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/disks/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve details about a specific disk attached to this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Disk`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `id`          | `long`   | Yes      | The disk ID.                 |

##### IAM Actions

- `vps:apiovh:disks/get` (required)

#### Update Disk Properties

- **Operation ID**: `editVpsDisk`
- **HTTP Method**: `PUT`
- **Path**: `/vps/{serviceName}/disks/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Update disk properties for this VPS.
- **Authentication**: Required
- **Response Type**: `void`

##### Parameters

| Parameter     | Type       | Required | Description                    |
| ------------- | ---------- | -------- | ------------------------------ |
| `serviceName` | `string`   | Yes      | The name of the VPS service.   |
| `id`          | `long`     | Yes      | The disk ID.                   |
| `requestBody` | `vps.Disk` | Yes      | The disk properties to update. |

##### IAM Actions

- `vps:apiovh:disks/edit` (required)

#### Get Disk Monitoring Statistics

- **Operation ID**: `getVpsDiskMonitoring`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/disks/{id}/monitoring`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve disk monitoring statistics for this VPS over a given period.
- **Authentication**: Required
- **Response Type**: `complexType.UnitAndValues_vps.VpsTimestampValue`

##### Parameters

| Parameter     | Type                          | Required | Description                                                                      |
| ------------- | ----------------------------- | -------- | -------------------------------------------------------------------------------- |
| `serviceName` | `string`                      | Yes      | The name of the VPS service.                                                     |
| `id`          | `long`                        | Yes      | The disk ID.                                                                     |
| `period`      | `vps.VpsMonitoringPeriodEnum` | Yes      | The period for statistics (e.g., `5min`, `1hour`, `1day`).                       |
| `type`        | `vps.disk.StatisticTypeEnum`  | Yes      | The type of statistic to fetch (e.g., `usage`, `iops`, `read/write operations`). |

##### IAM Actions

- `vps:apiovh:disks/monitoring/get` (required)

#### Get Disk Usage

- **Operation ID**: `getVpsDiskUsage`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/disks/{id}/use`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve current disk usage metrics for this VPS.
- **Authentication**: Required
- **Response Type**: `complexType.UnitAndValue_double`

##### Parameters

| Parameter     | Type                         | Required | Description                                                                      |
| ------------- | ---------------------------- | -------- | -------------------------------------------------------------------------------- |
| `serviceName` | `string`                     | Yes      | The name of the VPS service.                                                     |
| `id`          | `long`                       | Yes      | The disk ID.                                                                     |
| `type`        | `vps.disk.StatisticTypeEnum` | Yes      | The type of statistic to fetch (e.g., `usage`, `iops`, `read/write operations`). |

##### IAM Actions

- `vps:apiovh:disks/use/get` (required)

---

### 13. Distribution Operations

#### Get Current Distribution

- **Operation ID**: `getVpsDistribution`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/distribution`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve information about the distribution (template) currently set for this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Template`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

##### IAM Actions

- `vps:apiovh:distribution/get` (required)

#### List Available Software

- **Operation ID**: `listVpsDistributionSoftwares`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/distribution/software`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List software available for the VPS distribution.
- **Authentication**: Required
- **Response Type**: `long[]`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

##### IAM Actions

- `vps:apiovh:distribution/software/get` (required)

#### Get Software Details

- **Operation ID**: `getVpsDistributionSoftware`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/distribution/software/{softwareId}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve details about a specific software available for the VPS distribution.
- **Authentication**: Required
- **Response Type**: `vps.Software`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `softwareId`  | `long`   | Yes      | The software ID.             |

##### IAM Actions

- `vps:apiovh:distribution/software/get` (required)

---

### 14. Console Access

#### Get Console URL

- **Operation ID**: `getVpsConsoleUrl`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/getConsoleUrl`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Generate and return a console access URL for this VPS.
- **Authentication**: Required
- **Response Type**: `string`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

##### IAM Actions

- `vps:apiovh:getConsoleUrl` (required)

---

### 15. Images Operations

#### List Available Images

- **Operation ID**: `listVpsAvailableImages`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/images/available`
- **Status**: Beta version (`BETA`)
- **Description**: List images available for this VPS.
- **Authentication**: Required
- **Response Type**: `string[]`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

##### IAM Actions

- `vps:apiovh:images/available/get` (required)

#### Get Current Image

- **Operation ID**: `getVpsCurrentImage`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/images/current`
- **Status**: Beta version (`BETA`)
- **Description**: Retrieve the currently installed image on this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Image`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

##### IAM Actions

- `vps:apiovh:images/current/get` (required)

#### Get Image Details

- **Operation ID**: `getVpsAvailableImage`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/images/available/{id}`
- **Status**: Beta version (`BETA`)
- **Description**: Retrieve details about a specific image available for this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Image`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `id`          | `string` | Yes      | The image ID.                |

##### IAM Actions

- `vps:apiovh:images/available/get` (required)

---

### 16. IP Geolocation Operations

#### List Available IP Geolocation Countries

- **Operation ID**: `getVpsIpCountryAvailable`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/ipCountryAvailable`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List the available countries for IP geolocation (GeoIP) on this VPS.
- **Authentication**: Required
- **Response Type**: `vps.ip.GeolocationEnum[]`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

##### IAM Actions

- `vps:apiovh:ipCountryAvailable/get` (required)

---

### 17. IP Operations

#### List IPs

- **Operation ID**: `listVpsIps`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/ips`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: List IPs attached to this VPS.
- **Authentication**: Required
- **Response Type**: `ip[]`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

##### IAM Actions

- `vps:apiovh:ips/get` (required)

#### Release IP

- **Operation ID**: `deleteVpsIp`
- **HTTP Method**: `DELETE`
- **Path**: `/vps/{serviceName}/ips/{ipAddress}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Release an additional IP attached to this VPS.
- **Authentication**: Required
- **Response Type**: `void`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `ipAddress`   | `ip`     | Yes      | The IP address to release.   |

##### IAM Actions

- `vps:apiovh:ips/delete` (required)

#### Get IP Details

- **Operation ID**: `getVpsIp`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/ips/{ipAddress}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve details about a specific IP attached to this VPS.
- **Authentication**: Required
- **Response Type**: `vps.Ip`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `ipAddress`   | `ip`     | Yes      | The IP address to retrieve.  |

##### IAM Actions

- `vps:apiovh:ips/get` (required)

#### Update IP Properties

- **Operation ID**: `editVpsIp`
- **HTTP Method**: `PUT`
- **Path**: `/vps/{serviceName}/ips/{ipAddress}`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Update IP properties for this VPS.
- **Authentication**: Required
- **Response Type**: `void`

##### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |
| `ipAddress`   | `ip`     | Yes      | The IP address to update.    |
| `requestBody` | `vps.Ip` | Yes      | The IP properties to update. |

##### IAM Actions

- `vps:apiovh:ips/edit` (required)

---

### 18. Migration Operations

#### VPS 2016 to 2020 Migration

##### Get Migration Status

- **Operation ID**: `getVpsMigration2016`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/migration2016`
- **Status**: Deprecated (will be removed on **2022-05-01**)
- **Description**: Retrieve information about the possible/ongoing migration from VPS 2016 to VPS 2020.
- **Authentication**: Required
- **Response Type**: `vps.migration.VPS2016to2020`

###### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

###### IAM Actions

- `vps:apiovh:migration2016/get` (required)

##### Schedule Migration

- **Operation ID**: `createVpsMigration2016`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/migration2016`
- **Status**: Deprecated (will be removed on **2022-05-01**)
- **Description**: Schedule the migration from VPS 2016 to VPS 2020 and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

###### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

###### IAM Actions

- `vps:apiovh:migration2016/create` (required)

#### VPS 2018 to 2020 Migration

##### Get Migration Status

- **Operation ID**: `getVpsMigration2018`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/migration2018`
- **Status**: Beta version (`BETA`)
- **Description**: Retrieve information about the possible/ongoing migration from VPS 2018 to VPS 2020.
- **Authentication**: Required
- **Response Type**: `vps.migration.VPS2018to2020`

###### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

###### IAM Actions

- `vps:apiovh:migration2018/get` (required)

##### Schedule Migration

- **Operation ID**: `createVpsMigration2018`
- **HTTP Method**: `POST`
- **Path**: `/vps/{serviceName}/migration2018`
- **Status**: Beta version (`BETA`)
- **Description**: Schedule the migration from VPS 2018 to VPS 2020 and return an asynchronous task.
- **Authentication**: Required
- **Response Type**: `vps.Task`

###### Parameters

| Parameter     | Type                     | Required | Description                    |
| ------------- | ------------------------ | -------- | ------------------------------ |
| `serviceName` | `string`                 | Yes      | The name of the VPS service.   |
| `requestBody` | `vps.migration2018.post` | Yes      | The migration request details. |

###### IAM Actions

- `vps:apiovh:migration2018/create` (required)

#### VPS 2020 to 2025 Migration

##### Get Migration Status

- **Operation ID**: `getVpsMigration2020`
- **HTTP Method**: `GET`
- **Path**: `/vps/{serviceName}/migration2020`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Retrieve information about the possible/ongoing migration from VPS 2020 to VPS 2025.
- **Authentication**: Required
- **Response Type**: `vps.migration.VPS2020to2025`

###### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

###### IAM Actions

- `vps:apiovh:migration2020/get` (required)

##### Cancel Migration

- **Operation ID**: `cancelVpsMigration2020`
- **HTTP Method**: `DELETE`
- **Path**: `/vps/{serviceName}/migration2020`
- **Status**: Stable production version (`PRODUCTION`)
- **Description**: Cancel the migration request from VPS 2020 to VPS 2025.
- **Authentication**: Required
- **Response Type**: `void`

###### Parameters

| Parameter     | Type     | Required | Description                  |
| ------------- | -------- | -------- | ---------------------------- |
| `serviceName` | `string` | Yes      | The name of the VPS service. |

###### IAM Actions

- `vps:apiovh:migration2020/create` (required)

---

## Response Types

| Response Type                 | Description                                     |
| ----------------------------- | ----------------------------------------------- |
| `string[]`                    | List of strings (e.g., VPS service names).      |
| `vps.VPSWithIAM`              | VPS service details with IAM information.       |
| `vps.Task`                    | Asynchronous task details.                      |
| `vps.Model[]`                 | List of VPS models available for upgrade.       |
| `vps.Disk`                    | Disk details.                                   |
| `vps.Template`                | Distribution (template) details.                |
| `vps.Software`                | Software details.                               |
| `vps.Ip`                      | IP address details.                             |
| `vps.Image`                   | Image details.                                  |
| `vps.ip.GeolocationEnum[]`    | List of available countries for IP geolocation. |
| `vps.migration.VPS2016to2020` | Migration status from VPS 2016 to 2020.         |
| `vps.migration.VPS2018to2020` | Migration status from VPS 2018 to 2020.         |
| `vps.migration.VPS2020to2025` | Migration status from VPS 2020 to 2025.         |

---

## Error Handling

- **Authentication Errors**: Ensure all required credentials (`applicationKey`, `applicationSecret`, `consumerKey`) are provided and valid.
- **Invalid Parameters**: Validate inputs before making API calls. For example, ensure `serviceName` is a valid VPS identifier.
- **API Errors**: Handle errors gracefully with meaningful messages. Use `NodeApiError` for n8n-specific errors.
- **Deprecated Operations**: Some operations are marked as deprecated and will be removed on a specified date. Use their replacements if available.

---

## Notes

- **Beta Operations**: Operations marked as `BETA` are subject to change and may not be stable.
- **Deprecated Operations**: Always check the `deprecatedDate` and `replacement` fields for deprecated operations.
- **IAM Actions**: Ensure the required IAM permissions are granted before attempting to execute operations.
- **Testing**: Manual testing is required via `npm run dev` and the n8n UI.

---

## Versioning

- **API Version**: `1.0`
- **Node Version**: Follows the `n8n-nodes-base` package conventions.

---

## References

- [OVHcloud VPS API Documentation](https://api.ovh.com/)
- [n8n Node Development Guidelines](../../AGENTS.md)
- [TypeScript Style Guide](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)

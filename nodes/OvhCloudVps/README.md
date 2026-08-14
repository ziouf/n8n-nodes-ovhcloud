# OVH Cloud VPS

> Manage virtual private servers — get, reboot, install OS images, snapshots, disks, netboot

## Overview

This node provides **59 operations** with **31 tests** for managing OVHcloud resources.

## Available Operations

### Root Operations

| Operation                                                               | Method | Endpoint                                           | Tests |
| ----------------------------------------------------------------------- | ------ | -------------------------------------------------- | ----- |
| [`abortSnapshotPost`](./`abortSnapshotPost`.ts)                         | POST   | `/vps/{...}/abortSnapshot`                         | 1     |
| [`automatedBackupList`](./`automatedBackupList`.ts)                     | GET    | `/vps/{...}/automaticBackups`                      | 0     |
| [`automatedBackupReschedulePost`](./`automatedBackupReschedulePost`.ts) | POST   | `/vps/{...}/automatedBackup/reschedule`            | 1     |
| [`automatedBackupRestoreCreate`](./`automatedBackupRestoreCreate`.ts)   | POST   | `/vps/{...}/automatedBackup/restore`               | 1     |
| [`automatedBackupSetPost`](./`automatedBackupSetPost`.ts)               | POST   | `/vps/{...}/automatedBackup/set`                   | 1     |
| [`availableUpgradeList`](./`availableUpgradeList`.ts)                   | GET    | `/vps/{...}/upgrade`                               | 0     |
| [`backupFtpAccessPostVps`](./`backupFtpAccessPostVps`.ts)               | POST   | `/vps/{...}/backupftp/access/{...}`                | 1     |
| [`backupFtpList`](./`backupFtpList`.ts)                                 | GET    | `/vps/{...}/backupftp`                             | 0     |
| [`backupRestoreListGet`](./`backupRestoreListGet`.ts)                   | GET    | `/vps/{...}/automatedBackup/attachedBackup`        | 1     |
| [`changeContactCreateVps`](./`changeContactCreateVps`.ts)               | POST   | `/vps/{...}/changeContact`                         | 1     |
| [`confirmTerminationCreateVps`](./`confirmTerminationCreateVps`.ts)     | POST   | `/vps/{...}/confirmTermination`                    | 1     |
| [`datacenterAvailabilityRawGet`](./`datacenterAvailabilityRawGet`.ts)   | GET    | `/vps/{...}/datacenter/availabilities/raw`         | 1     |
| [`datacenterList`](./`datacenterList`.ts)                               | GET    | `/vps/{...}/availableDatacenters`                  | 0     |
| [`diskCreatePost`](./`diskCreatePost`.ts)                               | POST   | `/vps/{...}/disks/create`                          | 1     |
| [`diskGet`](./`diskGet`.ts)                                             | GET    | `/vps/{...}/disks/{...}`                           | 1     |
| [`diskList`](./`diskList`.ts)                                           | GET    | `/vps/{...}/disks`                                 | 0     |
| [`diskMonitoringStatsGet`](./`diskMonitoringStatsGet`.ts)               | GET    | `/vps/{...}/disks/monitoring/stats`                | 1     |
| [`diskUpdatePut`](./`diskUpdatePut`.ts)                                 | POST   | `/vps/{...}/disks/{...}`                           | 1     |
| [`distributionGet`](./`distributionGet`.ts)                             | GET    | `/vps/{...}/distribution/{...}`                    | 0     |
| [`distributionList`](./`distributionList`.ts)                           | GET    | `/vps/{...}/distribution`                          | 0     |
| [`distributionUpdatePut`](./`distributionUpdatePut`.ts)                 | POST   | `/vps/{...}/distribution/update`                   | 1     |
| [`get`](./`get`.ts)                                                     | GET    | `/vps/{...}`                                       | 0     |
| [`imageGet`](./`imageGet`.ts)                                           | GET    | `/vps/{...}/images/{...}`                          | 0     |
| [`imageList`](./`imageList`.ts)                                         | GET    | `/vps/{...}/images`                                | 0     |
| [`ipAdd`](./`ipAdd`.ts)                                                 | POST   | `/vps/{...}/ips`                                   | 1     |
| [`ipCountryAvailableGet`](./`ipCountryAvailableGet`.ts)                 | GET    | `/vps/{...}/ips/country/available`                 | 1     |
| [`ipDeleteOperation`](./`ipDeleteOperation`.ts)                         | DELETE | `/vps/{...}/ips/{...}`                             | 1     |
| [`ipGeolocationGet`](./`ipGeolocationGet`.ts)                           | GET    | `/vps/{...}/ip/{...}`                              | 0     |
| [`ipGet`](./`ipGet`.ts)                                                 | GET    | `/vps/{...}/ip/{...}`                              | 0     |
| [`ipList`](./`ipList`.ts)                                               | GET    | `/vps/{...}/ip`                                    | 0     |
| [`ipReleaseDelete`](./`ipReleaseDelete`.ts)                             | DELETE | `/vps/{...}/ips/{...}`                             | 1     |
| [`list`](./`list`.ts)                                                   | GET    | `...`                                              | 0     | ✅ `iamTags` (json) — Also includes "Return Full Objects / Max Items" toggle for parallel fetching |
| [`migrationMigrationIdGet`](./`migrationMigrationIdGet`.ts)             | GET    | `/vps/{...}/migrations/2020/migration/{...}`       | 0     |
| [`migrationMigrationIdStepGet`](./`migrationMigrationIdStepGet`.ts)     | GET    | `/vps/{...}/migrations/2020/migration/{...}/{...}` | 0     |
| [`modelList`](./`modelList`.ts)                                         | GET    | `/vps/{...}/models`                                | 0     |
| [`netbootConfigGet`](./`netbootConfigGet`.ts)                           | GET    | `/vps/{...}/kernels`                               | 0     |
| [`netbootCreatePost`](./`netbootCreatePost`.ts)                         | POST   | `/vps/{...}/netboot/order/create`                  | 1     |
| [`netbootOrderGet`](./`netbootOrderGet`.ts)                             | GET    | `/vps/{...}/order/netboot`                         | 0     |
| [`netbootTemplateDetailsGet`](./`netbootTemplateDetailsGet`.ts)         | GET    | `/vps/{...}/order/netboot/template`                | 0     |
| [`optionDetailGet`](./`optionDetailGet`.ts)                             | GET    | `/vps/{...}/options/{...}`                         | 0     |
| [`optionList`](./`optionList`.ts)                                       | GET    | `/vps/{...}/options`                               | 0     |
| [`powerOffGet`](./`powerOffGet`.ts)                                     | GET    | `/vps/{...}`                                       | 0     |
| [`powerRebootDelete`](./`powerRebootDelete`.ts)                         | DELETE | `/vps/{...}/reboot`                                | 1     |
| [`powerStartPost`](./`powerStartPost`.ts)                               | POST   | `/vps/{...}/start`                                 | 1     |
| [`powerStopDelete`](./`powerStopDelete`.ts)                             | DELETE | `/vps/{...}/stop`                                  | 1     |
| [`rebootHardGet`](./`rebootHardGet`.ts)                                 | GET    | `/vps/{...}/status`                                | 0     |
| [`restorePointListGet`](./`restorePointListGet`.ts)                     | GET    | `/vps/{...}/automatedBackup/restorePoints`         | 1     |
| [`secondaryDnsDomainListDomains`](./`secondaryDnsDomainListDomains`.ts) | GET    | `/vps/{...}/secdns/domain`                         | 0     |
| [`secondaryDnsServerList`](./`secondaryDnsServerList`.ts)               | GET    | `/vps/{...}/secdns/server`                         | 0     |
| [`serviceInformationGet`](./`serviceInformationGet`.ts)                 | GET    | `/vps/{...}/information`                           | 0     |
| [`serviceSecretGet`](./`serviceSecretGet`.ts)                           | GET    | `/vps/{...}/secret/key/get`                        | 1     |
| [`snapshotCreatePost`](./`snapshotCreatePost`.ts)                       | POST   | `/vps/{...}/snapshot/create`                       | 1     |
| [`snapshotGetImageGet`](./`snapshotGetImageGet`.ts)                     | GET    | `/vps/{...}/snapshot/image/get`                    | 1     |
| [`snapshotListSnapshotsForVps`](./`snapshotListSnapshotsForVps`.ts)     | GET    | `/vps/{...}/snapshot`                              | 0     |
| [`snapshotRevertPut`](./`snapshotRevertPut`.ts)                         | POST   | `/vps/{...}/snapshot/revert`                       | 1     |
| [`statusTaskIdGet`](./`statusTaskIdGet`.ts)                             | GET    | `/vps/{...}/tasks/{...}`                           | 1     |
| [`templateApplyPost`](./`templateApplyPost`.ts)                         | POST   | `/vps/{...}/netboot/order/applyTemplate`           | 1     |
| [`templateGet`](./`templateGet`.ts)                                     | GET    | `/vps/template/{...}`                              | 0     |
| [`vpsUpdate`](./`vpsUpdate`.ts)                                         | PUT    | `/vps/{...}`                                       | 1     |

**Total:** 59 operations, 31 tests

> **Optional filters**: The **List** operation (`list`) supports optional Filters (iamTags). See [docs/_shared/filtering.md](../../docs/_shared/filtering.md) for details.

# OVH Cloud OverTheBox

> Manage OverTheBox services — devices, backups, logs, remote accesses and migrations

## Overview

This node provides **50 operations** covering the `/overTheBox` API v1 endpoints for
managing OVHcloud OverTheBox services and their devices..

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`GET /overTheBox`, `POST /overTheBox/*`, `PUT /overTheBox/*` and related IAM actions granted.

## Available Operations

| Operation | Method | Endpoint |
| --------- | ------ | -------- |
| [`list`](./`resources/main/list.ts`) | GET    | `/overTheBox` |
| [`availableOffersGet`](./`resources/main/availableOffersGet.ts`) | GET    | `/overTheBox/availableOffers` |
| [`devicesPost`](./`resources/main/devicesPost.ts`) | POST   | `/overTheBox/devices` |
| [`hardwareGet`](./`resources/main/hardwareGet.ts`) | GET    | `/overTheBox/hardware` |
| [`hardwareAvailableGet`](./`resources/main/hardwareAvailableGet.ts`) | GET    | `/overTheBox/hardware/available` |
| [`hardwareDetailGet`](./`resources/main/hardwareDetailGet.ts`) | GET    | `/overTheBox/hardware/{hardwareName}` |
| [`get`](./`resources/main/get.ts`) | GET    | `/overTheBox/{serviceName}` |
| [`deleteDelete`](./`resources/main/deleteDelete.ts`) | DELETE | `/overTheBox/{serviceName}` |
| [`updatePut`](./`resources/main/updatePut.ts`) | PUT    | `/overTheBox/{serviceName}` |
| [`autoMTUPut`](./`resources/main/autoMTUPut.ts`) | PUT    | `/overTheBox/{serviceName}/autoMTU` |
| [`availableReleaseChannelsGet`](./`resources/main/availableReleaseChannelsGet.ts`) | GET    | `/overTheBox/{serviceName}/availableReleaseChannels` |
| [`backupsGet`](./`resources/main/backupsGet.ts`) | GET    | `/overTheBox/{serviceName}/backups` |
| [`backupDelete`](./`resources/main/backupDelete.ts`) | DELETE | `/overTheBox/{serviceName}/backups/{backupId}` |
| [`backupGet`](./`resources/main/backupGet.ts`) | GET    | `/overTheBox/{serviceName}/backups/{backupId}` |
| [`cancelResiliationPost`](./`resources/main/cancelResiliationPost.ts`) | POST   | `/overTheBox/{serviceName}/cancelResiliation` |
| [`changeContactPost`](./`resources/main/changeContactPost.ts`) | POST   | `/overTheBox/{serviceName}/changeContact` |
| [`ipsGet`](./`resources/main/ipsGet.ts`) | GET    | `/overTheBox/{serviceName}/ips` |
| [`ipGet`](./`resources/main/ipGet.ts`) | GET    | `/overTheBox/{serviceName}/ips/{ip}` |
| [`ipv6Put`](./`resources/main/ipv6Put.ts`) | PUT    | `/overTheBox/{serviceName}/ipv6` |
| [`linkDevicePost`](./`resources/main/linkDevicePost.ts`) | POST   | `/overTheBox/{serviceName}/linkDevice` |
| [`linkHardwarePost`](./`resources/main/linkHardwarePost.ts`) | POST   | `/overTheBox/{serviceName}/linkHardware` |
| [`migrationOffersGet`](./`resources/main/migrationOffersGet.ts`) | GET    | `/overTheBox/{serviceName}/migration/offers` |
| [`migrationChangeOffersPost`](./`resources/main/migrationChangeOffersPost.ts`) | POST   | `/overTheBox/{serviceName}/migration/changeOffers` |
| [`serviceInfosGet`](./`resources/main/serviceInfosGet.ts`) | GET    | `/overTheBox/{serviceName}/serviceInfos` |
| [`statisticsGet`](./`resources/main/statisticsGet.ts`) | GET    | `/overTheBox/{serviceName}/statistics` |
| [`tasksGet`](./`resources/main/tasksGet.ts`) | GET    | `/overTheBox/{serviceName}/tasks` |
| [`taskGet`](./`resources/main/taskGet.ts`) | GET    | `/overTheBox/{serviceName}/tasks/{taskId}` |
| [`serviceInfosUpdatePut`](./`resources/main/serviceInfosUpdatePut.ts`) | PUT    | `/overTheBox/{serviceName}/serviceInfos` |
| [`deviceGet`](./`resources/device/deviceGet.ts`) | GET    | `/overTheBox/{serviceName}/device` |
| [`deviceDelete`](./`resources/device/deviceDelete.ts`) | DELETE | `/overTheBox/{serviceName}/device` |
| [`deviceActionsGet`](./`resources/device/deviceActionsGet.ts`) | GET    | `/overTheBox/{serviceName}/device/actions` |
| [`deviceActionsPost`](./`resources/device/deviceActionsPost.ts`) | POST   | `/overTheBox/{serviceName}/device/actions` |
| [`deviceActionGet`](./`resources/device/deviceActionGet.ts`) | GET    | `/overTheBox/{serviceName}/device/actions/{actionId}` |
| [`deviceAvailableActionsGet`](./`resources/device/deviceAvailableActionsGet.ts`) | GET    | `/overTheBox/{serviceName}/device/availableActions` |
| [`deviceBackupPost`](./`resources/device/deviceBackupPost.ts`) | POST   | `/overTheBox/{serviceName}/device/backup` |
| [`deviceHardwareGet`](./`resources/device/deviceHardwareGet.ts`) | GET    | `/overTheBox/{serviceName}/device/hardware` |
| [`deviceLogsPost`](./`resources/device/deviceLogsPost.ts`) | POST   | `/overTheBox/{serviceName}/device/logs` |
| [`deviceRestoreBackupPost`](./`resources/device/deviceRestoreBackupPost.ts`) | POST   | `/overTheBox/{serviceName}/device/restoreBackup` |
| [`logKindGet`](./`resources/log/logKindGet.ts`) | GET    | `/overTheBox/{serviceName}/log/kind` |
| [`logKindNameGet`](./`resources/log/logKindNameGet.ts`) | GET    | `/overTheBox/{serviceName}/log/kind/{name}` |
| [`logSubscriptionGet`](./`resources/log/logSubscriptionGet.ts`) | GET    | `/overTheBox/{serviceName}/log/subscription` |
| [`logSubscriptionPost`](./`resources/log/logSubscriptionPost.ts`) | POST   | `/overTheBox/{serviceName}/log/subscription` |
| [`logSubscriptionDelete`](./`resources/log/logSubscriptionDelete.ts`) | DELETE | `/overTheBox/{serviceName}/log/subscription/{subscriptionId}` |
| [`logSubscriptionDetailGet`](./`resources/log/logSubscriptionDetailGet.ts`) | GET    | `/overTheBox/{serviceName}/log/subscription/{subscriptionId}` |
| [`logUrlPost`](./`resources/log/logUrlPost.ts`) | POST   | `/overTheBox/{serviceName}/log/url` |
| [`remoteAccessesGet`](./`resources/remoteAccesses/remoteAccessesGet.ts`) | GET    | `/overTheBox/{serviceName}/remoteAccesses` |
| [`remoteAccessesPost`](./`resources/remoteAccesses/remoteAccessesPost.ts`) | POST   | `/overTheBox/{serviceName}/remoteAccesses` |
| [`remoteAccessDelete`](./`resources/remoteAccesses/remoteAccessDelete.ts`) | DELETE | `/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}` |
| [`remoteAccessGet`](./`resources/remoteAccesses/remoteAccessGet.ts`) | GET    | `/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}` |
| [`remoteAccessAuthorizePost`](./`resources/remoteAccesses/remoteAccessAuthorizePost.ts`) | POST   | `/overTheBox/{serviceName}/remoteAccesses/{remoteAccessId}/authorize` |

**Total:** 50 operations

## Notes

- All service-scoped operations use a `serviceName` resource locator with an
  "From List" mode populated via the `getOverTheBoxServices` list-search method
  (`GET /overTheBox`), and a "By Name" mode (e.g. `overthebox-12345`).
- The `serviceName` is always URL-encoded before being interpolated into the
  request path.

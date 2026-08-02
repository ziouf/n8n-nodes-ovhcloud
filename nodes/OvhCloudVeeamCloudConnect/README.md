# OVH Cloud Veeam Cloud Connect

> Manage Veeam Cloud Connect services — backup repositories, tasks and service information

## Overview

This node provides **14 operations** covering the `/veeamCloudConnect` API v1 endpoints for
managing OVHcloud Veeam Cloud Connect services..

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`GET /veeamCloudConnect`, `POST /veeamCloudConnect/*`, `PUT /veeamCloudConnect/*` and related IAM actions granted.

## Available Operations

| Operation | Method | Endpoint |
| --------- | ------ | -------- |
| [`list`](./`resources/list.ts`) | GET    | `/veeamCloudConnect` |
| [`get`](./`resources/get.ts`) | GET    | `/veeamCloudConnect/{serviceName}` |
| [`backupRepositoryGet`](./`resources/backupRepositoryGet.ts`) | GET    | `/veeamCloudConnect/{serviceName}/backupRepository` |
| [`backupRepositoryPost`](./`resources/backupRepositoryPost.ts`) | POST   | `/veeamCloudConnect/{serviceName}/backupRepository` |
| [`backupRepositoryDetailGet`](./`resources/backupRepositoryDetailGet.ts`) | GET    | `/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}` |
| [`backupRepositoryDelete`](./`resources/backupRepositoryDelete.ts`) | DELETE | `/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}` |
| [`backupRepositoryUpgradeQuotaPost`](./`resources/backupRepositoryUpgradeQuotaPost.ts`) | POST   | `/veeamCloudConnect/{serviceName}/backupRepository/{inventoryName}/upgradeQuota` |
| [`capabilitiesGet`](./`resources/capabilitiesGet.ts`) | GET    | `/veeamCloudConnect/{serviceName}/capabilities` |
| [`orderableUpgradeGet`](./`resources/orderableUpgradeGet.ts`) | GET    | `/veeamCloudConnect/{serviceName}/orderableUpgrade` |
| [`resetPasswordPost`](./`resources/resetPasswordPost.ts`) | POST   | `/veeamCloudConnect/{serviceName}/resetPassword` |
| [`serviceInfosGet`](./`resources/serviceInfosGet.ts`) | GET    | `/veeamCloudConnect/{serviceName}/serviceInfos` |
| [`serviceInfosUpdatePut`](./`resources/serviceInfosUpdatePut.ts`) | PUT    | `/veeamCloudConnect/{serviceName}/serviceInfos` |
| [`taskGet`](./`resources/taskGet.ts`) | GET    | `/veeamCloudConnect/{serviceName}/task` |
| [`taskDetailGet`](./`resources/taskDetailGet.ts`) | GET    | `/veeamCloudConnect/{serviceName}/task/{taskId}` |

**Total:** 14 operations

## Notes

- All service-scoped operations use a `serviceName` resource locator with an
  "From List" mode populated via the `getVeeamCloudConnectServices` list-search method
  (`GET /veeamCloudConnect`), and a "By Name" mode (e.g. `vcc-12345`).
- The `serviceName` is always URL-encoded before being interpolated into the
  request path.

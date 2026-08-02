# OVH Cloud OvhCloudConnect

> Manage OvhCloud Connect services, POP configurations, interfaces, diagnostics and logs

## Overview

This node provides **42 operations** covering the API v1 endpoints for
managing OVHcloud resources.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
related IAM actions granted.

## Available Operations

### main

| Operation | Method | Endpoint |
| --------- | ------ | -------- |
| [`list`](./`resources/main/list.ts`) | GET    | `/ovhCloudConnect` |
| [`get`](./`resources/main/get.ts`) | GET    | `/ovhCloudConnect/{serviceName}` |
| [`updatePut`](./`resources/main/updatePut.ts`) | PUT    | `/ovhCloudConnect/{serviceName}` |
| [`confirmTerminationPost`](./`resources/main/confirmTerminationPost.ts`) | POST   | `/ovhCloudConnect/{serviceName}/confirmTermination` |
| [`changeContactPost`](./`resources/main/changeContactPost.ts`) | POST   | `/ovhCloudConnect/{serviceName}/changeContact` |
| [`diagnosticGet`](./`resources/main/diagnosticGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/diagnostic` |
| [`diagnosticPost`](./`resources/main/diagnosticPost.ts`) | POST   | `/ovhCloudConnect/{serviceName}/diagnostic` |
| [`diagnosticDetailGet`](./`resources/main/diagnosticDetailGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/diagnostic/{id}` |
| [`incidentGet`](./`resources/main/incidentGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/incident` |
| [`incidentDetailGet`](./`resources/main/incidentDetailGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/incident/{id}` |
| [`interfaceGet`](./`resources/main/interfaceGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/interface` |
| [`interfaceDetailGet`](./`resources/main/interfaceDetailGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/interface/{id}` |
| [`interfaceLockPost`](./`resources/main/interfaceLockPost.ts`) | POST   | `/ovhCloudConnect/{serviceName}/interface/{id}/lock` |
| [`interfaceUnlockPost`](./`resources/main/interfaceUnlockPost.ts`) | POST   | `/ovhCloudConnect/{serviceName}/interface/{id}/unlock` |
| [`interfaceStatisticsGet`](./`resources/main/interfaceStatisticsGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/interface/{id}/statistics` |
| [`interfaceStatusGet`](./`resources/main/interfaceStatusGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/interface/{id}/status` |
| [`monitoringGet`](./`resources/main/monitoringGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/monitoring` |
| [`monitoringPost`](./`resources/main/monitoringPost.ts`) | POST   | `/ovhCloudConnect/{serviceName}/monitoring` |
| [`monitoringDelete`](./`resources/main/monitoringDelete.ts`) | DELETE | `/ovhCloudConnect/{serviceName}/monitoring` |
| [`migrationGet`](./`resources/main/migrationGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/migration` |
| [`migrationPost`](./`resources/main/migrationPost.ts`) | POST   | `/ovhCloudConnect/{serviceName}/migration` |

### config

| Operation | Method | Endpoint |
| --------- | ------ | -------- |
| [`popGet`](./`resources/config/popGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/config/pop` |
| [`popPost`](./`resources/config/popPost.ts`) | POST   | `/ovhCloudConnect/{serviceName}/config/pop` |
| [`popDetailGet`](./`resources/config/popDetailGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/config/pop/{popId}` |
| [`popDelete`](./`resources/config/popDelete.ts`) | DELETE | `/ovhCloudConnect/{serviceName}/config/pop/{popId}` |
| [`popDatacenterGet`](./`resources/config/popDatacenterGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter` |
| [`popDatacenterPost`](./`resources/config/popDatacenterPost.ts`) | POST   | `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter` |
| [`popDatacenterDetailGet`](./`resources/config/popDatacenterDetailGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}` |
| [`popDatacenterDelete`](./`resources/config/popDatacenterDelete.ts`) | DELETE | `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}` |
| [`popDatacenterExtraGet`](./`resources/config/popDatacenterExtraGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra` |
| [`popDatacenterExtraPost`](./`resources/config/popDatacenterExtraPost.ts`) | POST   | `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra` |
| [`popDatacenterExtraDetailGet`](./`resources/config/popDatacenterExtraDetailGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId}` |
| [`popDatacenterExtraDelete`](./`resources/config/popDatacenterExtraDelete.ts`) | DELETE | `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId}` |
| [`popStatisticsGet`](./`resources/config/popStatisticsGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/config/pop/{popId}/statistics` |
| [`popStatusGet`](./`resources/config/popStatusGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/config/pop/{popId}/status` |

### log

| Operation | Method | Endpoint |
| --------- | ------ | -------- |
| [`logKindGet`](./`resources/log/logKindGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/log/kind` |
| [`logKindNameGet`](./`resources/log/logKindNameGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/log/kind/{name}` |
| [`logSubscriptionGet`](./`resources/log/logSubscriptionGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/log/subscription` |
| [`logSubscriptionPost`](./`resources/log/logSubscriptionPost.ts`) | POST   | `/ovhCloudConnect/{serviceName}/log/subscription` |
| [`logSubscriptionDetailGet`](./`resources/log/logSubscriptionDetailGet.ts`) | GET    | `/ovhCloudConnect/{serviceName}/log/subscription/{subscriptionId}` |
| [`logSubscriptionDelete`](./`resources/log/logSubscriptionDelete.ts`) | DELETE | `/ovhCloudConnect/{serviceName}/log/subscription/{subscriptionId}` |
| [`logUrlPost`](./`resources/log/logUrlPost.ts`) | POST   | `/ovhCloudConnect/{serviceName}/log/url` |

**Total:** 42 operations

## Notes

- All service-scoped operations use a `serviceName` resource locator with an
  "From List" mode populated via the `getOvhCloudConnectServices` list-search method
  (`GET /ovhCloudConnect`), and a "By Name" mode (e.g. `123e4567-e89b-12d3-a456-426614174000`).
- The `serviceName` is always URL-encoded before being interpolated into the
  request path.

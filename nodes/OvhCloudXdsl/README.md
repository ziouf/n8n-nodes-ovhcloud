# OVH Cloud Xdsl

> Manage xDSL services, modems, logs, lines and DSLAM ports

## Overview

This node provides **39 operations** covering the API v1 endpoints for
managing OVHcloud resources.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
related IAM actions granted.

## Available Operations

### main

| Operation | Method | Endpoint |
| --------- | ------ | -------- |
| [`list`](./`resources/main/list.ts`) | GET    | `/xdsl` |
| [`get`](./`resources/main/get.ts`) | GET    | `/xdsl/{serviceName}` |
| [`updatePut`](./`resources/main/updatePut.ts`) | PUT    | `/xdsl/{serviceName}` |
| [`extraIpRangeGet`](./`resources/main/extraIpRangeGet.ts`) | GET    | `/xdsl/{serviceName}/addressMove/extraIpRange` |
| [`extraIpRangeMovePost`](./`resources/main/extraIpRangeMovePost.ts`) | POST   | `/xdsl/{serviceName}/addressMove/extraIpRangeMove` |
| [`antiSpamsGet`](./`resources/main/antiSpamsGet.ts`) | GET    | `/xdsl/{serviceName}/antiSpams` |
| [`antiSpamDetailGet`](./`resources/main/antiSpamDetailGet.ts`) | GET    | `/xdsl/{serviceName}/antiSpams/{ip}` |
| [`antiSpamEvidencesGet`](./`resources/main/antiSpamEvidencesGet.ts`) | GET    | `/xdsl/{serviceName}/antiSpams/{ip}/evidences` |
| [`canCancelResiliationGet`](./`resources/main/canCancelResiliationGet.ts`) | GET    | `/xdsl/{serviceName}/canCancelResiliation` |
| [`cancelResiliationPost`](./`resources/main/cancelResiliationPost.ts`) | POST   | `/xdsl/{serviceName}/cancelResiliation` |
| [`changeContactPost`](./`resources/main/changeContactPost.ts`) | POST   | `/xdsl/{serviceName}/changeContact` |
| [`diagnosticGet`](./`resources/main/diagnosticGet.ts`) | GET    | `/xdsl/{serviceName}/diagnostic` |
| [`diagnosticPost`](./`resources/main/diagnosticPost.ts`) | POST   | `/xdsl/{serviceName}/diagnostic` |
| [`fiberEligibilitiesGet`](./`resources/main/fiberEligibilitiesGet.ts`) | GET    | `/xdsl/{serviceName}/fiberEligibilities` |
| [`fiberEligibilityDetailGet`](./`resources/main/fiberEligibilityDetailGet.ts`) | GET    | `/xdsl/{serviceName}/fiberEligibilities/{id}` |
| [`incidentGet`](./`resources/main/incidentGet.ts`) | GET    | `/xdsl/{serviceName}/incident` |
| [`incidentsGet`](./`resources/main/incidentsGet.ts`) | GET    | `/xdsl/incidents` |
| [`incidentDetailGet`](./`resources/main/incidentDetailGet.ts`) | GET    | `/xdsl/incidents/{id}` |
| [`ipsGet`](./`resources/main/ipsGet.ts`) | GET    | `/xdsl/{serviceName}/ips` |
| [`ipsPost`](./`resources/main/ipsPost.ts`) | POST   | `/xdsl/{serviceName}/ips` |
| [`ipDelete`](./`resources/main/ipDelete.ts`) | DELETE | `/xdsl/{serviceName}/ips/{ip}` |
| [`mailSendingPost`](./`resources/main/mailSendingPost.ts`) | POST   | `/xdsl/{serviceName}/mailSending` |
| [`modemGet`](./`resources/main/modemGet.ts`) | GET    | `/xdsl/{serviceName}/modem` |
| [`modemUpdatePut`](./`resources/main/modemUpdatePut.ts`) | PUT    | `/xdsl/{serviceName}/modem` |

### log

| Operation | Method | Endpoint |
| --------- | ------ | -------- |
| [`logKindGet`](./`resources/log/logKindGet.ts`) | GET    | `/xdsl/{serviceName}/log/kind` |
| [`logKindNameGet`](./`resources/log/logKindNameGet.ts`) | GET    | `/xdsl/{serviceName}/log/kind/{name}` |
| [`logSubscriptionGet`](./`resources/log/logSubscriptionGet.ts`) | GET    | `/xdsl/{serviceName}/log/subscription` |
| [`logSubscriptionPost`](./`resources/log/logSubscriptionPost.ts`) | POST   | `/xdsl/{serviceName}/log/subscription` |
| [`logSubscriptionDetailGet`](./`resources/log/logSubscriptionDetailGet.ts`) | GET    | `/xdsl/{serviceName}/log/subscription/{subscriptionId}` |
| [`logSubscriptionDelete`](./`resources/log/logSubscriptionDelete.ts`) | DELETE | `/xdsl/{serviceName}/log/subscription/{subscriptionId}` |
| [`logUrlPost`](./`resources/log/logUrlPost.ts`) | POST   | `/xdsl/{serviceName}/log/url` |

### lines

| Operation | Method | Endpoint |
| --------- | ------ | -------- |
| [`dslamPortGet`](./`resources/lines/dslamPortGet.ts`) | GET    | `/xdsl/{serviceName}/lines/{number}/dslamPort` |
| [`dslamPortAvailableProfilesGet`](./`resources/lines/dslamPortAvailableProfilesGet.ts`) | GET    | `/xdsl/{serviceName}/lines/{number}/dslamPort/availableProfiles` |
| [`dslamPortChangeProfilePost`](./`resources/lines/dslamPortChangeProfilePost.ts`) | POST   | `/xdsl/{serviceName}/lines/{number}/dslamPort/changeProfile` |
| [`dslamPortLogsGet`](./`resources/lines/dslamPortLogsGet.ts`) | GET    | `/xdsl/{serviceName}/lines/{number}/dslamPort/logs` |
| [`dslamPortResetPost`](./`resources/lines/dslamPortResetPost.ts`) | POST   | `/xdsl/{serviceName}/lines/{number}/dslamPort/reset` |
| [`linesStatisticsGet`](./`resources/lines/linesStatisticsGet.ts`) | GET    | `/xdsl/{serviceName}/lines/{number}/statistics` |
| [`lineDiagnosticCancelPost`](./`resources/lines/lineDiagnosticCancelPost.ts`) | POST   | `/xdsl/{serviceName}/lines/{number}/diagnostic/cancel` |
| [`lineDiagnosticRunPost`](./`resources/lines/lineDiagnosticRunPost.ts`) | POST   | `/xdsl/{serviceName}/lines/{number}/diagnostic/run` |

**Total:** 39 operations

## Notes

- All service-scoped operations use a `serviceName` resource locator with an
  "From List" mode populated via the `getXdslServices` list-search method
  (`GET /xdsl`), and a "By Name" mode (e.g. `xdsl-12345`).
- The `serviceName` is always URL-encoded before being interpolated into the
  request path.

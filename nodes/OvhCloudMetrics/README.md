# OVH Cloud Metrics

> Manage Metrics services — properties, tokens, quotas, consumption and termination

## Overview

This node provides **13 operations** covering the `/metrics` API v1 endpoints for
managing OVHcloud Metrics services.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`GET /metrics`, `POST /metrics/*`, `PUT /metrics/*`, `DELETE /metrics/*` and
related IAM actions granted.

## Available Operations

### resources

| Operation                                                           | Method | Endpoint                                    |
| ------------------------------------------------------------------- | ------ | ------------------------------------------- |
| [`list`](./`resources/list.ts`)                                     | GET    | `/metrics`                                  |
| [`get`](./`resources/get.ts`)                                       | GET    | `/metrics/{serviceName}`                    |
| [`updatePut`](./`resources/updatePut.ts`)                           | PUT    | `/metrics/{serviceName}`                    |
| [`consumptionGet`](./`resources/consumptionGet.ts`)                 | GET    | `/metrics/{serviceName}/consumption`        |
| [`tokenGet`](./`resources/tokenGet.ts`)                             | GET    | `/metrics/{serviceName}/token`              |
| [`tokenCreatePost`](./`resources/tokenCreatePost.ts`)               | POST   | `/metrics/{serviceName}/token`              |
| [`tokenDetailGet`](./`resources/tokenDetailGet.ts`)                 | GET    | `/metrics/{serviceName}/token/{tokenId}`    |
| [`tokenUpdatePut`](./`resources/tokenUpdatePut.ts`)                 | PUT    | `/metrics/{serviceName}/token/{tokenId}`    |
| [`tokenDelete`](./`resources/tokenDelete.ts`)                       | DELETE | `/metrics/{serviceName}/token/{tokenId}`    |
| [`quotaSetPut`](./`resources/quotaSetPut.ts`)                       | PUT    | `/metrics/{serviceName}/quota`              |
| [`quotaGet`](./`resources/quotaGet.ts`)                             | GET    | `/metrics/{serviceName}/quota`              |
| [`confirmTerminationPost`](./`resources/confirmTerminationPost.ts`) | POST   | `/metrics/{serviceName}/confirmTermination` |
| [`changeContactPost`](./`resources/changeContactPost.ts`)           | POST   | `/metrics/{serviceName}/changeContact`      |

**Total:** 13 operations

## Notes

- All service-scoped operations use a `serviceName` resource locator with an
  "From List" mode populated via the `getMetricsServices` list-search method
  (`GET /metrics`), and a "By Name" mode (e.g. `metrics-12345`).
- The `serviceName` and `tokenId` values are always URL-encoded before being
  interpolated into the request path.
- The `duration` consumption parameter is an optional query parameter (defaults
  to the last 60 minutes).
- The `labels` parameter of the token creation operation accepts a JSON array of
  `{ key, value }` objects.

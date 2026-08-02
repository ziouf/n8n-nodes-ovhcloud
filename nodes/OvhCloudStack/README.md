# OVH Cloud Stack

> Manage Stack MIS services — properties and service information

## Overview

This node provides **4 operations** covering the `/stack/mis` API v1 endpoints
for managing OVHcloud Stack (MIS) services.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`GET /stack/mis`, `PUT /stack/mis/*` and related IAM actions granted.

## Available Operations

### resources

| Operation                                                         | Method | Endpoint                                |
| ----------------------------------------------------------------- | ------ | --------------------------------------- |
| [`list`](./`resources/list.ts`)                                   | GET    | `/stack/mis`                            |
| [`get`](./`resources/get.ts`)                                     | GET    | `/stack/mis/{serviceName}`              |
| [`serviceInfosGet`](./`resources/serviceInfosGet.ts`)             | GET    | `/stack/mis/{serviceName}/serviceInfos` |
| [`serviceInfosUpdatePut`](./`resources/serviceInfosUpdatePut.ts`) | PUT    | `/stack/mis/{serviceName}/serviceInfos` |

**Total:** 4 operations

## Notes

- All service-scoped operations use a `serviceName` resource locator with an
  "From List" mode populated via the `getStackServices` list-search method
  (`GET /stack/mis`), and a "By Name" mode (e.g. `mis-12345`).
- The `serviceName` is always URL-encoded before being interpolated into the
  request path.

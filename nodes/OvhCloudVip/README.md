# OVH Cloud VIP

> Manage VIP services — properties and service information

## Overview

This node provides **4 operations** covering the `/vip` API v1 endpoints for
managing OVHcloud VIP (Very Important Person) support services.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`GET /vip`, `PUT /vip/*` and related IAM actions granted.

## Available Operations

### resources

| Operation                                                         | Method | Endpoint                          |
| ----------------------------------------------------------------- | ------ | --------------------------------- |
| [`list`](./`resources/list.ts`)                                   | GET    | `/vip`                            |
| [`get`](./`resources/get.ts`)                                     | GET    | `/vip/{serviceName}`              |
| [`serviceInfosGet`](./`resources/serviceInfosGet.ts`)             | GET    | `/vip/{serviceName}/serviceInfos` |
| [`serviceInfosUpdatePut`](./`resources/serviceInfosUpdatePut.ts`) | PUT    | `/vip/{serviceName}/serviceInfos` |

**Total:** 4 operations

## Notes

- All service-scoped operations use a `serviceName` resource locator with an
  "From List" mode populated via the `getVipServices` list-search method
  (`GET /vip`), and a "By Name" mode (e.g. `vip1`).
- The `serviceName` is always URL-encoded before being interpolated into the
  request path.

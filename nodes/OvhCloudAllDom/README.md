# OVH Cloud AllDom

> Manage AllDom services — properties, domains and service information

## Overview

This node provides **6 operations** covering the `/allDom` API v1 endpoints for
managing OVHcloud AllDom services.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`GET /allDom`, `PUT /allDom/*` and related IAM actions granted.

## Available Operations

### resources

| Operation                                                                             | Method | Endpoint                                |
| ------------------------------------------------------------------------------------- | ------ | --------------------------------------- |
| [`allDomListGet`](./resources/allDomListGet.operation.ts)                             | GET    | `/allDom`                               |
| [`allDomGetGet`](./resources/allDomGetGet.operation.ts)                               | GET    | `/allDom/{serviceName}`                 |
| [`allDomDomainListGet`](./resources/allDomDomainListGet.operation.ts)                 | GET    | `/allDom/{serviceName}/domain`          |
| [`allDomDomainGetGet`](./resources/allDomDomainGetGet.operation.ts)                   | GET    | `/allDom/{serviceName}/domain/{domain}` |
| [`allDomServiceInfosGet`](./resources/allDomServiceInfosGet.operation.ts)             | GET    | `/allDom/{serviceName}/serviceInfos`    |
| [`allDomServiceInfosUpdatePut`](./resources/allDomServiceInfosUpdatePut.operation.ts) | PUT    | `/allDom/{serviceName}/serviceInfos`    |

**Total:** 6 operations

## Notes

- All service-scoped operations use a `serviceName` resource locator with an
  "From List" mode populated via the `getAllDomServices` list-search method
  (`GET /allDom`), and a "By Name" mode (e.g. `alldom1234567`).
- The `serviceName` and `domain` values are always URL-encoded before being
  interpolated into the request path.

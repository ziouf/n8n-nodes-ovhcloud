# OVH Cloud License

> Manage OVHcloud licenses — WorkLight license properties, moves and termination

## Overview

This node provides **9 operations** covering the `/license/worklight` API v1 endpoints for
managing OVHcloud WorkLight licenses.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`GET /license/worklight`, `POST /license/worklight/*`, `PUT /license/worklight/*` and related
IAM actions granted.

## Available Operations

### resources

| Operation                                                             | Method | Endpoint                                                             |
| --------------------------------------------------------------------- | ------ | -------------------------------------------------------------------- |
| [`list`](./`resources/list.ts`)                                       | GET    | `/license/worklight`                                                 |
| [`orderableVersionsGet`](./`resources/orderableVersionsGet.ts`)       | GET    | `/license/worklight/orderableVersions?ip={ip}`                       |
| [`get`](./`resources/get.ts`)                                         | GET    | `/license/worklight/{serviceName}`                                   |
| [`updatePut`](./`resources/updatePut.ts`)                             | PUT    | `/license/worklight/{serviceName}`                                   |
| [`allowedDestinationIpGet`](./`resources/allowedDestinationIpGet.ts`) | GET    | `/license/worklight/{serviceName}/allowedDestinationIp`              |
| [`canLicenseBeMovedToGet`](./`resources/canLicenseBeMovedToGet.ts`)   | GET    | `/license/worklight/{serviceName}/canLicenseBeMovedTo?destinationIp` |
| [`changeIpPost`](./`resources/changeIpPost.ts`)                       | POST   | `/license/worklight/{serviceName}/changeIp`                          |
| [`terminatePost`](./`resources/terminatePost.ts`)                     | POST   | `/license/worklight/{serviceName}/terminate`                         |
| [`confirmTerminationPost`](./`resources/confirmTerminationPost.ts`)   | POST   | `/license/worklight/{serviceName}/confirmTermination`                |

**Total:** 9 operations

## Notes

- A `licenseType` options parameter (default `worklight`) is part of the node's
  dispatch context so future license types can be added later. For now every
  operation targets the `/license/worklight` API prefix.
- All service-scoped operations use a `serviceName` resource locator with an
  "From List" mode populated via the `getWorkLightLicenses` list-search method
  (`GET /license/worklight`), and a "By Name" mode (e.g. `license-1`).
- The `serviceName` is always URL-encoded before being interpolated into the
  request path.
- Termination operations require the admin contact to receive a token by email.
  Use `confirmTerminationPost` with that token to finalise the termination.

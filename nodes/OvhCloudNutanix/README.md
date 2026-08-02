# OVH Cloud Nutanix

> Manage Nutanix clusters — availabilities, requirements, nodes and service information

## Overview

This node provides **17 operations** covering the `/nutanix` API v1 endpoints for
managing OVHcloud Nutanix clusters..

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`GET /nutanix`, `POST /nutanix/*`, `PUT /nutanix/*` and related IAM actions granted.

## Available Operations

| Operation | Method | Endpoint |
| --------- | ------ | -------- |
| [`list`](./`resources/list.ts`) | GET    | `/nutanix` |
| [`availabilitiesGet`](./`resources/availabilitiesGet.ts`) | GET    | `/nutanix/availabilities` |
| [`availabilitiesRawGet`](./`resources/availabilitiesRawGet.ts`) | GET    | `/nutanix/availabilities/raw` |
| [`availableVersionsGet`](./`resources/availableVersionsGet.ts`) | GET    | `/nutanix/availableVersions` |
| [`requirementsGet`](./`resources/requirementsGet.ts`) | GET    | `/nutanix/requirements` |
| [`get`](./`resources/get.ts`) | GET    | `/nutanix/{serviceName}` |
| [`updatePut`](./`resources/updatePut.ts`) | PUT    | `/nutanix/{serviceName}` |
| [`changeContactPost`](./`resources/changeContactPost.ts`) | POST   | `/nutanix/{serviceName}/changeContact` |
| [`confirmTerminationPost`](./`resources/confirmTerminationPost.ts`) | POST   | `/nutanix/{serviceName}/confirmTermination` |
| [`nodesGet`](./`resources/nodesGet.ts`) | GET    | `/nutanix/{serviceName}/nodes` |
| [`nodeGet`](./`resources/nodeGet.ts`) | GET    | `/nutanix/{serviceName}/nodes/{server}` |
| [`nodeUpdatePut`](./`resources/nodeUpdatePut.ts`) | PUT    | `/nutanix/{serviceName}/nodes/{server}` |
| [`nodeDeployPut`](./`resources/nodeDeployPut.ts`) | PUT    | `/nutanix/{serviceName}/nodes/{server}/deploy` |
| [`nodeTerminatePost`](./`resources/nodeTerminatePost.ts`) | POST   | `/nutanix/{serviceName}/nodes/{server}/terminate` |
| [`serviceInfosGet`](./`resources/serviceInfosGet.ts`) | GET    | `/nutanix/{serviceName}/serviceInfos` |
| [`serviceInfosUpdatePut`](./`resources/serviceInfosUpdatePut.ts`) | PUT    | `/nutanix/{serviceName}/serviceInfos` |
| [`terminatePost`](./`resources/terminatePost.ts`) | POST   | `/nutanix/{serviceName}/terminate` |

**Total:** 17 operations

## Notes

- All service-scoped operations use a `serviceName` resource locator with an
  "From List" mode populated via the `getNutanixServices` list-search method
  (`GET /nutanix`), and a "By Name" mode (e.g. `nutanix-12345`).
- The `serviceName` is always URL-encoded before being interpolated into the
  request path.

# OVH Cloud Freefax

> Manage Freefax line accounts — properties, credits, directory and voicemail configuration

## Overview

This node provides **19 operations** covering the `/freefax` API v1 endpoints for
managing OVHcloud Freefax line accounts.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`GET /freefax`, `POST /freefax/*`, `PUT /freefax/*` and related IAM actions granted.

## Available Operations

### resources

| Operation                                                                                               | Method | Endpoint                                                       |
| ------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------- |
| [`list`](./`resources/list.ts`)                                                                         | GET    | `/freefax`                                                     |
| [`creditsGet`](./`resources/creditsGet.ts`)                                                             | GET    | `/freefax/credits`                                             |
| [`get`](./`resources/get.ts`)                                                                           | GET    | `/freefax/{serviceName}`                                       |
| [`updatePut`](./`resources/updatePut.ts`)                                                               | PUT    | `/freefax/{serviceName}`                                       |
| [`changePasswordPost`](./`resources/changePasswordPost.ts`)                                             | POST   | `/freefax/{serviceName}/changePassword`                        |
| [`directoryGet`](./`resources/directoryGet.ts`)                                                         | GET    | `/freefax/{serviceName}/directory`                             |
| [`directoryUpdatePut`](./`resources/directoryUpdatePut.ts`)                                             | PUT    | `/freefax/{serviceName}/directory`                             |
| [`directoryFetchEntrepriseInformationsPost`](./`resources/directoryFetchEntrepriseInformationsPost.ts`) | POST   | `/freefax/{serviceName}/directory/fetchEntrepriseInformations` |
| [`directoryGetDirectoryServiceCodeGet`](./`resources/directoryGetDirectoryServiceCodeGet.ts`)           | GET    | `/freefax/{serviceName}/directory/getDirectoryServiceCode`     |
| [`directoryGetWayTypesGet`](./`resources/directoryGetWayTypesGet.ts`)                                   | GET    | `/freefax/{serviceName}/directory/getWayTypes`                 |
| [`mainServiceGet`](./`resources/mainServiceGet.ts`)                                                     | GET    | `/freefax/{serviceName}/mainService`                           |
| [`serviceInfosGet`](./`resources/serviceInfosGet.ts`)                                                   | GET    | `/freefax/{serviceName}/serviceInfos`                          |
| [`serviceInfosUpdatePut`](./`resources/serviceInfosUpdatePut.ts`)                                       | PUT    | `/freefax/{serviceName}/serviceInfos`                          |
| [`voicemailGet`](./`resources/voicemailGet.ts`)                                                         | GET    | `/freefax/{serviceName}/voicemail`                             |
| [`voicemailUpdatePut`](./`resources/voicemailUpdatePut.ts`)                                             | PUT    | `/freefax/{serviceName}/voicemail`                             |
| [`voicemailChangePasswordPost`](./`resources/voicemailChangePasswordPost.ts`)                           | POST   | `/freefax/{serviceName}/voicemail/changePassword`              |
| [`voicemailChangeRoutingPost`](./`resources/voicemailChangeRoutingPost.ts`)                             | POST   | `/freefax/{serviceName}/voicemail/changeRouting`               |
| [`voicemailRoutingGet`](./`resources/voicemailRoutingGet.ts`)                                           | GET    | `/freefax/{serviceName}/voicemail/routing`                     |
| [`voicemailVoicemailNumbersGet`](./`resources/voicemailVoicemailNumbersGet.ts`)                         | GET    | `/freefax/{serviceName}/voicemail/voicemailNumbers`            |

**Total:** 19 operations

## Notes

- All service-scoped operations use a `serviceName` resource locator with an
  "From List" mode populated via the `getFreefaxServices` list-search method
  (`GET /freefax`), and a "By Name" mode (e.g. `fr12345-ovh`).
- The `serviceName` is always URL-encoded before being interpolated into the
  request path.

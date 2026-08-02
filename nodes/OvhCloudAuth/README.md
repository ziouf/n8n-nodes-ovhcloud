# OVH Cloud Auth

> Manage OVHcloud API credentials, authentication and server time

## Overview

This node provides **6 operations** covering the `/auth` API v1 endpoints for
managing OVHcloud API credentials and authentication.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`GET /auth/*`, `POST /auth/*` and related IAM actions granted.

## Available Operations

| Operation                                                       | Method | Endpoint                  |
| --------------------------------------------------------------- | ------ | ------------------------- |
| [`credentialPost`](./`resources/credentialPost.ts`)             | POST   | `/auth/credential`        |
| [`currentCredentialGet`](./`resources/currentCredentialGet.ts`) | GET    | `/auth/currentCredential` |
| [`detailsGet`](./`resources/detailsGet.ts`)                     | GET    | `/auth/details`           |
| [`logoutPost`](./`resources/logoutPost.ts`)                     | POST   | `/auth/logout`            |
| [`timeGet`](./`resources/timeGet.ts`)                           | GET    | `/auth/time`              |
| [`tokenPost`](./`resources/tokenPost.ts`)                       | POST   | `/auth/token`             |

**Total:** 6 operations

## Notes

- No `serviceName` is required: these operations are not scoped to a service.
- The `credentialPost` operation lets you request a brand new credential for your
  application. Provide `accessRules` (array of `{ method, path }` objects) and
  optionally `allowedIPs` and a `redirection` URL.
- The `timeGet` operation returns the current OVH server time as a UNIX timestamp.

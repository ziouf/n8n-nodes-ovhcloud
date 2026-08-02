# OVH Cloud Contact

> Retrieve and send OVHcloud contact forms

## Overview

This node provides **2 operations** covering the `/contact` API v1 endpoints for
retrieving form characteristics and sending contact forms.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The requests
themselves do not require authentication, but the credential is still required to
sign and dispatch the calls through `ApiClient`.

## Available Operations

| Operation                                       | Method | Endpoint             |
| ----------------------------------------------- | ------ | -------------------- |
| [`formGet`](./`resources/formGet.ts`)           | GET    | `/contact/form`      |
| [`formSendPost`](./`resources/formSendPost.ts`) | POST   | `/contact/form/send` |

**Total:** 2 operations

## Notes

- No `serviceName` is required: these operations are not scoped to a service.
- `formGet` accepts an optional `type` query parameter to filter the retrieved
  form characteristics.
- `formSendPost` expects a `type` matching one of the characteristics returned by
  `formGet`, plus a `form` array of `{ key, value }` objects.

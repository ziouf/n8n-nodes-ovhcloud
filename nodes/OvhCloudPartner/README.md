# OVH Cloud Partner

> Register and manage OVHcloud Partner Program memberships

## Overview

This node provides **2 operations** covering the `/partner` API v1 endpoints for
retrieving the current partner registration status and registering an
organization in the OVHcloud Partner Program.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`account:apiovh:partner/get` and `account:apiovh:partner/create` IAM actions granted.

## Available Operations

| Operation                                       | Method | Endpoint   |
| ----------------------------------------------- | ------ | ---------- |
| [`get`](./`resources/get.ts`)                   | GET    | `/partner` |
| [`registerPost`](./`resources/registerPost.ts`) | POST   | `/partner` |

**Total:** 2 operations

## Notes

- No `serviceName` is required: these operations are not scoped to a service.
- `registerPost` builds the nested `account`, `contact` and `partnership` objects
  of the Partner entity from flat node fields. `account.name` and all
  `contact.*` fields are required; everything else is optional.
- The `partnership.areaOfExpertise` field accepts an array of strings (JSON).

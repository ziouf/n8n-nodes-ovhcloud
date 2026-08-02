# OVH Cloud Startup

> Register a startup and retrieve its acceptance status

## Overview

This node provides **2 operations** covering the `/startup` API v1 endpoints for
registering startups and tracking their acceptance status in the OVHcloud
ecosystem.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`GET /startup`, `POST /startup` and related IAM actions granted.

## Available Operations

### resources

| Operation                                       | Method | Endpoint   |
| ----------------------------------------------- | ------ | ---------- |
| [`get`](./`resources/get.ts`)                   | GET    | `/startup` |
| [`registerPost`](./`resources/registerPost.ts`) | POST   | `/startup` |

**Total:** 2 operations

## Notes

- The `GET /startup` operation returns the full `startup.startup` entity,
  including the read-only `acceptanceStatus` field.
- The `registerPost` operation builds the nested `company`, `project` and
  `fundRaising` objects from the exposed parameters. The `relatedTechnology`
  parameter accepts a JSON array of strings.

# OVH Cloud IAM

> Manage identity and access management resources via /iam API v2

## Overview

This node provides **31 operations** with **31 tests** for managing OVHcloud resources.

## Available Operations

### Root Operations

| Operation                                                                                   | Method | Endpoint | Tests |
| ------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`iamauthorizationcheckCreatePost`](./`iamauthorizationcheckCreatePost`.ts)                 | POST   | `...`    | 1     |
| [`iamlogkindListGet2`](./`iamlogkindListGet2`.ts)                                           | GET    | `...`    | 1     |
| [`iamlogkindListGet`](./`iamlogkindListGet`.ts)                                             | GET    | `...`    | 1     |
| [`iamlogsubscriptionCreatePost`](./`iamlogsubscriptionCreatePost`.ts)                       | POST   | `...`    | 1     |
| [`iamlogsubscriptionDeleteDelete`](./`iamlogsubscriptionDeleteDelete`.ts)                   | DELETE | `...`    | 1     |
| [`iamlogsubscriptionListGet2`](./`iamlogsubscriptionListGet2`.ts)                           | GET    | `...`    | 1     |
| [`iamlogsubscriptionListGet`](./`iamlogsubscriptionListGet`.ts)                             | GET    | `...`    | 1     |
| [`iamlogurlCreatePost`](./`iamlogurlCreatePost`.ts)                                         | POST   | `...`    | 1     |
| [`iampermissionsGroupCreatePost`](./`iampermissionsGroupCreatePost`.ts)                     | POST   | `...`    | 1     |
| [`iampermissionsGroupDeleteDelete`](./`iampermissionsGroupDeleteDelete`.ts)                 | DELETE | `...`    | 1     |
| [`iampermissionsGroupListGet2`](./`iampermissionsGroupListGet2`.ts)                         | GET    | `...`    | 1     |
| [`iampermissionsGroupListGet`](./`iampermissionsGroupListGet`.ts)                           | GET    | `...`    | 1     |
| [`iampermissionsGroupUpdatePut`](./`iampermissionsGroupUpdatePut`.ts)                       | PUT    | `...`    | 1     |
| [`iampolicyCreatePost`](./`iampolicyCreatePost`.ts)                                         | POST   | `...`    | 1     |
| [`iampolicyDeleteDelete`](./`iampolicyDeleteDelete`.ts)                                     | DELETE | `...`    | 1     |
| [`iampolicyListGet2`](./`iampolicyListGet2`.ts)                                             | GET    | `...`    | 1     | ✅ `action`, `identity`, `resourceURN`, `readOnly`, `details` |
| [`iampolicyListGet`](./`iampolicyListGet`.ts)                                               | GET    | `...`    | 1     | ✅ `action`, `identity`, `resourceURN`, `readOnly`, `details` |
| [`iampolicyUpdatePut`](./`iampolicyUpdatePut`.ts)                                           | PUT    | `...`    | 1     |
| [`iamreferenceactionListGet`](./`iamreferenceactionListGet`.ts)                             | GET    | `...`    | 1     |
| [`iamreferenceresourcetypeListGet`](./`iamreferenceresourcetypeListGet`.ts)                 | GET    | `...`    | 1     |
| [`iamresourceauthorizationcheckCreatePost`](./`iamresourceauthorizationcheckCreatePost`.ts) | POST   | `...`    | 1     |
| [`iamresourceGroupCreatePost`](./`iamresourceGroupCreatePost`.ts)                           | POST   | `...`    | 1     |
| [`iamresourceGroupDeleteDelete`](./`iamresourceGroupDeleteDelete`.ts)                       | DELETE | `...`    | 1     |
| [`iamresourceGroupListGet2`](./`iamresourceGroupListGet2`.ts)                               | GET    | `...`    | 1     |
| [`iamresourceGroupListGet`](./`iamresourceGroupListGet`.ts)                                 | GET    | `...`    | 1     |
| [`iamresourceGroupUpdatePut`](./`iamresourceGroupUpdatePut`.ts)                             | PUT    | `...`    | 1     |
| [`iamresourceListGet2`](./`iamresourceListGet2`.ts)                                         | GET    | `...`    | 1     |
| [`iamresourceListGet`](./`iamresourceListGet`.ts)                                           | GET    | `...`    | 1     |
| [`iamresourcetagCreatePost`](./`iamresourcetagCreatePost`.ts)                               | POST   | `...`    | 1     |
| [`iamresourcetagDeleteDelete`](./`iamresourcetagDeleteDelete`.ts)                           | DELETE | `...`    | 1     |
| [`iamresourceUpdatePut`](./`iamresourceUpdatePut`.ts)                                       | PUT    | `...`    | 1     |

**Total:** 31 operations, 31 tests

> **Optional filters**: The **Policy List** operations (`iampolicyListGet`, `iampolicyListGet2`) support optional Filters (action, identity, resourceURN — comma-separated; readOnly, details — tri-state booleans). See [docs/_shared/filtering.md](../../docs/_shared/filtering.md) for details.

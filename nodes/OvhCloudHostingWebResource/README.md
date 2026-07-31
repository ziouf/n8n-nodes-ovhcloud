# OVH Cloud Hosting Web Resource

> Manage web hosting resources (attached domains, SSL, users, websites)

## Overview

This node provides **15 operations** with **15 tests** for managing OVHcloud resources.

## Available Operations

### attachedDomain

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`createPost`](./`attachedDomain/createPost.ts`) | POST | `/webhosting/resource/{...}/attachedDomain` | 1 |
| [`deleteDeleteByResourceNameGet`](./`attachedDomain/deleteDeleteByResourceNameGet.ts`) | DELETE | `/webhosting/resource/{...}/attachedDomain` | 1 |
| [`listByResourceGet`](./`attachedDomain/listByResourceGet.ts`) | GET | `/webhosting/resource/{...}/attachedDomain` | 1 |

### resource

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`getByNameGet`](./`resource/getByNameGet.ts`) | GET | `/webhosting/resource/{...}` | 1 |
| [`listGet`](./`resource/listGet.ts`) | GET | `...` | 1 |

### ssl

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`importCustomCertificatePost`](./`ssl/importCustomCertificatePost.ts`) | POST | `/webhosting/resource/{...}/ssl/import` | 1 |
| [`listByResourceGet`](./`ssl/listByResourceGet.ts`) | GET | `/webhosting/resource/{...}/certificate` | 1 |

### user

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`deleteUser`](./`user/deleteUser.ts`) | DELETE | `/webhosting/resource/{...}/user` | 1 |
| [`getDetailGetByIdGet`](./`user/getDetailGetByIdGet.ts`) | GET | `/webhosting/resource/{...}/user` | 1 |
| [`listGetByResourceNameGet`](./`user/listGetByResourceNameGet.ts`) | GET | `/webhosting/resource/{...}/user` | 1 |
| [`updateUserPutByIdGet`](./`user/updateUserPutByIdGet.ts`) | PUT | `/webhosting/resource/{...}/user` | 1 |

### website

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`createPost`](./`website/createPost.ts`) | POST | `/webhosting/resource/{...}/website` | 1 |
| [`deleteDeleteByWebsiteIdGet`](./`website/deleteDeleteByWebsiteIdGet.ts`) | DELETE | `/webhosting/resource/{...}/website` | 1 |
| [`listGet`](./`website/listGet.ts`) | GET | `/webhosting/resource/{...}/website` | 1 |
| [`updatePutByWebsiteIdGet`](./`website/updatePutByWebsiteIdGet.ts`) | PUT | `/webhosting/resource/{...}/website` | 1 |

**Total:** 15 operations, 15 tests

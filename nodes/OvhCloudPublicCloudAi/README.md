# OVH Cloud Public Cloud AI

> Manage AI services — apps, jobs, notebooks, registries, data stores, alerting

## Overview

This node provides **25 operations** with **25 tests** for managing OVHcloud resources.

## Available Operations

### alerting

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`alertCreatePost`](./`alerting/alertCreatePost.ts`) | POST | `/publicCloud/project/{...}/alerting` | 1 |
| [`alertListGet`](./`alerting/alertListGet.ts`) | GET | `/publicCloud/project/{...}/alerting` | 1 |

### app

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`appCreatePost`](./`app/appCreatePost.ts`) | POST | `/publicCloud/project/{...}/ai/app` | 1 |
| [`appDeleteDelete`](./`app/appDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/ai/app/{...}` | 1 |
| [`appGetGet`](./`app/appGetGet.ts`) | GET | `/publicCloud/project/{...}/ai/app/{...}` | 1 |
| [`appListGet`](./`app/appListGet.ts`) | GET | `/publicCloud/project/{...}/ai/app` | 1 |
| [`appStartPut`](./`app/appStartPut.ts`) | PUT | `/publicCloud/project/{...}/ai/app/{...}/start` | 1 |
| [`appStopPut`](./`app/appStopPut.ts`) | PUT | `/publicCloud/project/{...}/ai/app/{...}/stop` | 1 |
| [`appUpdatePut`](./`app/appUpdatePut.ts`) | PUT | `/publicCloud/project/{...}/ai/app/{...}` | 1 |

### capabilities

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|

### dataStore

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`dataCreatePost`](./`dataStore/dataCreatePost.ts`) | POST | `/cloud/project/{...}/ai/data/region/{...}/alias` | 1 |
| [`dataListGet`](./`dataStore/dataListGet.ts`) | GET | `/publicCloud/project/{...}/ai/data/region/eu/alias` | 1 |

### job

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`jobCreatePost`](./`job/jobCreatePost.ts`) | POST | `/publicCloud/project/{...}/ai/job` | 1 |
| [`jobDeleteDelete`](./`job/jobDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/ai/job/{...}` | 1 |
| [`jobGetGet`](./`job/jobGetGet.ts`) | GET | `/publicCloud/project/{...}/ai/job/{...}` | 1 |
| [`jobListGet`](./`job/jobListGet.ts`) | GET | `/publicCloud/project/{...}/ai/job` | 1 |

### notebook

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`notebookCreatePost`](./`notebook/notebookCreatePost.ts`) | POST | `/publicCloud/project/{...}/ai/notebook` | 1 |
| [`notebookDeleteDelete`](./`notebook/notebookDeleteDelete.ts`) | DELETE | `/publicCloud/project/{...}/ai/notebook/{...}` | 1 |
| [`notebookGetGet`](./`notebook/notebookGetGet.ts`) | GET | `/publicCloud/project/{...}/ai/notebook/{...}` | 1 |
| [`notebookListGet`](./`notebook/notebookListGet.ts`) | GET | `/publicCloud/project/{...}/ai/notebook` | 1 |
| [`notebookStartPut`](./`notebook/notebookStartPut.ts`) | PUT | `/publicCloud/project/{...}/ai/notebook/{...}/start` | 1 |

### registry

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`registryCreatePost`](./`registry/registryCreatePost.ts`) | POST | `/publicCloud/project/{...}/ai/registry` | 1 |
| [`registryListGet`](./`registry/registryListGet.ts`) | GET | `/publicCloud/project/{...}/ai/registry` | 1 |

**Total:** 25 operations, 25 tests

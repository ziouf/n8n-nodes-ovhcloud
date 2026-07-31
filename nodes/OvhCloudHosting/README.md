# OVH Cloud Hosting Web

> Manage web hosting services (databases, crons, FTP, mail, PHP, statistics, users, SSL)

## Overview

This node provides **39 operations** with **17 tests** for managing OVHcloud resources.

## Available Operations

### cron

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`cronCreatePost`](./`cron/cronCreatePost.ts`) | POST | `/hosting/web/{...}/cron` | 1 |
| [`cronDeleteDelete`](./`cron/cronDeleteDelete.ts`) | DELETE | `/hosting/web/{...}/cron/{...}` | 1 |
| [`cronUpdatePut`](./`cron/cronUpdatePut.ts`) | PUT | `/hosting/web/{...}/cron/{...}` | 1 |

### database

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`databaseUpdatePut`](./`database/databaseUpdatePut.ts`) | PUT | `/hosting/web/{...}/database/{...}` | 1 |

### statistics

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`statisticsGet`](./`statistics/statisticsGet.ts`) | GET | `/hosting/web/{...}/statistics` | 1 |

### Root Operations

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`attachedDomainCreate`](./`attachedDomainCreate`.ts) | POST | `/hosting/web/{...}/attachedDomain` | 1 |
| [`attachedDomainDelete`](./`attachedDomainDelete`.ts) | DELETE | `/hosting/web/{...}/attachedDomain/{...}` | 1 |
| [`attachedDomainPurgeCacheCreate`](./`attachedDomainPurgeCacheCreate`.ts) | POST | `/hosting/web/{...}/attachedDomain/{...}/purge` | 1 |
| [`attachedDomainUpdate`](./`attachedDomainUpdate`.ts) | PUT | `/hosting/web/{...}/attachedDomain/{...}` | 1 |
| [`configurationPut`](./`configurationPut`.ts) | PUT | `/hosting/web/{...}/configuration` | 1 |
| [`databaseCreatePost`](./`databaseCreatePost`.ts) | POST | `/hosting/web/{...}/database/create` | 1 |
| [`databaseDelete`](./`databaseDelete`.ts) | POST | `/hosting/web/{...}/database/delete` | 1 |
| [`defaultSslCertificateCreate`](./`defaultSslCertificateCreate`.ts) | POST | `/hosting/web/{...}/ssl/defaultSslCertificate` | 1 |
| [`envVarSetCreate`](./`envVarSetCreate`.ts) | POST | `/hosting/web/{...}/env/set` | 1 |
| [`findByDomain`](./`findByDomain`.ts) | GET | `/hosting/web/{...}` | 0 |
| [`getAttachedDomain`](./`getAttachedDomain`.ts) | GET | `/hosting/web/{...}/attachedDomain/{...}` | 0 |
| [`getCron`](./`getCron`.ts) | GET | `/hosting/web/{...}/cron/{...}` | 0 |
| [`getDatabase`](./`getDatabase`.ts) | GET | `/hosting/web/{...}/database/{...}` | 0 |
| [`getEmail`](./`getEmail`.ts) | GET | `/hosting/web/{...}/email` | 0 |
| [`getEnvVar`](./`getEnvVar`.ts) | GET | `/hosting/web/{...}/envVar/{...}` | 0 |
| [`getModule`](./`getModule`.ts) | GET | `/hosting/web/{...}/module/{...}` | 0 |
| [`get`](./`get`.ts) | GET | `/hosting/web/{...}` | 0 |
| [`getRuntime`](./`getRuntime`.ts) | GET | `/hosting/web/{...}/runtime/{...}` | 0 |
| [`getServiceInfos`](./`getServiceInfos`.ts) | GET | `/hosting/web/{...}/serviceInfos` | 0 |
| [`getSsl`](./`getSsl`.ts) | GET | `/hosting/web/{...}/ssl` | 0 |
| [`getTask`](./`getTask`.ts) | GET | `/hosting/web/{...}/tasks/{...}` | 0 |
| [`getUser`](./`getUser`.ts) | GET | `/hosting/web/{...}/user/{...}` | 0 |
| [`hostingUpdate`](./`hostingUpdate`.ts) | PUT | `/hosting/web/{...}` | 1 |
| [`importCustomCertificateCreate`](./`importCustomCertificateCreate`.ts) | POST | `/hosting/web/{...}/ssl/importCustomCertificate` | 1 |
| [`listAttachedDomains`](./`listAttachedDomains`.ts) | GET | `/hosting/web/{...}/attachedDomain` | 0 |
| [`listCrons`](./`listCrons`.ts) | GET | `/hosting/web/{...}/cron` | 0 |
| [`listDatabases`](./`listDatabases`.ts) | GET | `/hosting/web/{...}/database` | 0 |
| [`listEnvVars`](./`listEnvVars`.ts) | GET | `/hosting/web/{...}/envVar` | 0 |
| [`listModules`](./`listModules`.ts) | GET | `/hosting/web/{...}/module` | 0 |
| [`list`](./`list`.ts) | GET | `/hosting/web/{...}` | 0 |
| [`listRuntimes`](./`listRuntimes`.ts) | GET | `/hosting/web/{...}/runtime` | 0 |
| [`listTasks`](./`listTasks`.ts) | GET | `/hosting/web/{...}/tasks` | 0 |
| [`listUsers`](./`listUsers`.ts) | GET | `/hosting/web/{...}/user` | 0 |
| [`userUpdatePut`](./`userUpdatePut`.ts) | POST | `/hosting/web/{...}/user/update` | 1 |

**Total:** 39 operations, 17 tests

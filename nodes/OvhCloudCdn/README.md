# OVH Cloud CDN

> Manage OVHcloud CDN services via `/cdn/dedicated` API v1

## Overview

This node provides **44 operations** (one per endpoint of the `cdn` v1 spec) with **44 test suites**. Operations are grouped into four families under `resources/`:

- `resources/service/` — service-level and global CDN endpoints
- `resources/domains/` — domain, backend, cache rule and task endpoints
- `resources/log/` — log kind / subscription / URL endpoints
- `resources/ssl/` — SSL endpoints

The primary identifier is the **Service Name** (`serviceName`, the internal name of the CDN offer), exposed as a required parameter on every scoped operation.

## Available Operations

### Service (`resources/service/`)

| Operation           | Method | Endpoint                                     |
| ------------------- | ------ | -------------------------------------------- |
| `servicesListGet`   | GET    | `/cdn/dedicated`                             |
| `serviceGetGet`     | GET    | `/cdn/dedicated/{serviceName}`               |
| `logKindListGet`    | GET    | `/cdn/dedicated/log/kind`                    |
| `logKindGetGet`     | GET    | `/cdn/dedicated/log/kind/{name}`             |
| `popsListGet`       | GET    | `/cdn/dedicated/pops`                        |
| `popsGetGet`        | GET    | `/cdn/dedicated/pops/{name}`                 |
| `changeContactPost` | POST   | `/cdn/dedicated/{serviceName}/changeContact` |
| `quotaGet`          | GET    | `/cdn/dedicated/{serviceName}/quota`         |
| `serviceInfosGet`   | GET    | `/cdn/dedicated/{serviceName}/serviceInfos`  |
| `serviceInfosPut`   | PUT    | `/cdn/dedicated/{serviceName}/serviceInfos`  |
| `logsPost`          | POST   | `/cdn/dedicated/{serviceName}/logs`          |

### Domains (`resources/domains/`)

| Operation               | Method | Endpoint                                                                                |
| ----------------------- | ------ | --------------------------------------------------------------------------------------- |
| `domainsListGet`        | GET    | `/cdn/dedicated/{serviceName}/domains`                                                  |
| `domainsCreatePost`     | POST   | `/cdn/dedicated/{serviceName}/domains`                                                  |
| `domainDeleteDelete`    | DELETE | `/cdn/dedicated/{serviceName}/domains/{domain}`                                         |
| `domainGetGet`          | GET    | `/cdn/dedicated/{serviceName}/domains/{domain}`                                         |
| `domainUpdatePut`       | PUT    | `/cdn/dedicated/{serviceName}/domains/{domain}`                                         |
| `backendsListGet`       | GET    | `/cdn/dedicated/{serviceName}/domains/{domain}/backends`                                |
| `backendsCreatePost`    | POST   | `/cdn/dedicated/{serviceName}/domains/{domain}/backends`                                |
| `backendDeleteDelete`   | DELETE | `/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}`                           |
| `backendGetGet`         | GET    | `/cdn/dedicated/{serviceName}/domains/{domain}/backends/{ip}`                           |
| `cacheRulesListGet`     | GET    | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules`                              |
| `cacheRulesCreatePost`  | POST   | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules`                              |
| `cacheRuleDeleteDelete` | DELETE | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}`                |
| `cacheRuleGetGet`       | GET    | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}`                |
| `cacheRuleUpdatePut`    | PUT    | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}`                |
| `cacheRuleFlushPost`    | POST   | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/flush`          |
| `cacheRuleTasksListGet` | GET    | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks`          |
| `cacheRuleTaskGetGet`   | GET    | `/cdn/dedicated/{serviceName}/domains/{domain}/cacheRules/{cacheRuleId}/tasks/{taskId}` |
| `domainFlushPost`       | POST   | `/cdn/dedicated/{serviceName}/domains/{domain}/flush`                                   |
| `domainLogsPost`        | POST   | `/cdn/dedicated/{serviceName}/domains/{domain}/logs`                                    |
| `domainStatisticsGet`   | GET    | `/cdn/dedicated/{serviceName}/domains/{domain}/statistics`                              |
| `domainTasksListGet`    | GET    | `/cdn/dedicated/{serviceName}/domains/{domain}/tasks`                                   |
| `domainTaskGetGet`      | GET    | `/cdn/dedicated/{serviceName}/domains/{domain}/tasks/{taskId}`                          |

### Log (`resources/log/`)

| Operation                  | Method | Endpoint                                                         |
| -------------------------- | ------ | ---------------------------------------------------------------- |
| `subscriptionsListGet`     | GET    | `/cdn/dedicated/{serviceName}/log/subscription`                  |
| `subscriptionsCreatePost`  | POST   | `/cdn/dedicated/{serviceName}/log/subscription`                  |
| `subscriptionDeleteDelete` | DELETE | `/cdn/dedicated/{serviceName}/log/subscription/{subscriptionId}` |
| `subscriptionGetGet`       | GET    | `/cdn/dedicated/{serviceName}/log/subscription/{subscriptionId}` |
| `logUrlPost`               | POST   | `/cdn/dedicated/{serviceName}/log/url`                           |

### SSL (`resources/ssl/`)

| Operation         | Method | Endpoint                                          |
| ----------------- | ------ | ------------------------------------------------- |
| `sslDeleteDelete` | DELETE | `/cdn/dedicated/{serviceName}/ssl`                |
| `sslGetGet`       | GET    | `/cdn/dedicated/{serviceName}/ssl`                |
| `sslCreatePost`   | POST   | `/cdn/dedicated/{serviceName}/ssl`                |
| `sslTasksListGet` | GET    | `/cdn/dedicated/{serviceName}/ssl/tasks`          | ✅ `function`, `status` |
| `sslTaskGetGet`   | GET    | `/cdn/dedicated/{serviceName}/ssl/tasks/{taskId}` |
| `sslUpdatePost`   | POST   | `/cdn/dedicated/{serviceName}/ssl/update`         |

**Total:** 44 operations, 44 test suites

> **Optional filters**: The **SSL Tasks List** operation (`sslTasksListGet`) supports optional Filters (function, status — read from flat parameters). See [docs/_shared/filtering.md](../../docs/_shared/filtering.md) for details.

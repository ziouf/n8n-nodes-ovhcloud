# OVH Cloud SaaS CSP2

> Manage Office 365 CSP2 tenants — licenses, subscriptions, add-ons, tasks and usage statistics

## Overview

This node provides **19 operations** covering the `/saas/csp2` API v1 endpoints for
managing OVHcloud Office 365 CSP2 (Office Reseller) tenants.

## Credentials

This node requires the **OVH Cloud API** credential (`OvhCloudApi`). The credential
must have an application key, application secret and consumer key with the
`GET /saas/csp2`, `POST /saas/csp2/*`, `PUT /saas/csp2/*`, `DELETE /saas/csp2/*`
and related IAM actions granted (`cspReseller:apiovh:*`).

## Available Operations

### resources

| Operation                                                                                         | Method | Endpoint                                                            |
| ------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------- |
| [`list`](./`resources/list.ts`)                                                                   | GET    | `/saas/csp2`                                                        |
| [`get`](./`resources/get.ts`)                                                                     | GET    | `/saas/csp2/{serviceName}`                                          |
| [`updatePut`](./`resources/updatePut.ts`)                                                         | PUT    | `/saas/csp2/{serviceName}`                                          |
| [`billingPeriodPeaksGet`](./`resources/billingPeriodPeaksGet.ts`)                                 | GET    | `/saas/csp2/{serviceName}/billingPeriodPeaks`                       |
| [`orderableLicensesGet`](./`resources/orderableLicensesGet.ts`)                                   | GET    | `/saas/csp2/{serviceName}/orderableLicenses`                        |
| [`orderableLicensesDetailGet`](./`resources/orderableLicensesDetailGet.ts`)                       | GET    | `/saas/csp2/{serviceName}/orderableLicenses/{id}`                   |
| [`serviceInfosGet`](./`resources/serviceInfosGet.ts`)                                             | GET    | `/saas/csp2/{serviceName}/serviceInfos`                             |
| [`serviceInfosUpdatePut`](./`resources/serviceInfosUpdatePut.ts`)                                 | PUT    | `/saas/csp2/{serviceName}/serviceInfos`                             |
| [`subscriptionGet`](./`resources/subscriptionGet.ts`)                                             | GET    | `/saas/csp2/{serviceName}/subscription`                             |
| [`subscriptionPost`](./`resources/subscriptionPost.ts`)                                           | POST   | `/saas/csp2/{serviceName}/subscription`                             |
| [`subscriptionDetailGet`](./`resources/subscriptionDetailGet.ts`)                                 | GET    | `/saas/csp2/{serviceName}/subscription/{id}`                        |
| [`subscriptionDelete`](./`resources/subscriptionDelete.ts`)                                       | DELETE | `/saas/csp2/{serviceName}/subscription/{id}`                        |
| [`subscriptionAddonsSubscriptionIdsGet`](./`resources/subscriptionAddonsSubscriptionIdsGet.ts`)   | GET    | `/saas/csp2/{serviceName}/subscription/{id}/addonsSubscriptionIds`  |
| [`subscriptionAvailableAddonLicensesGet`](./`resources/subscriptionAvailableAddonLicensesGet.ts`) | GET    | `/saas/csp2/{serviceName}/subscription/{id}/availableAddonLicenses` |
| [`subscriptionChangeQuantityPost`](./`resources/subscriptionChangeQuantityPost.ts`)               | POST   | `/saas/csp2/{serviceName}/subscription/{id}/changeQuantity`         |
| [`subscriptionOrderAddonPost`](./`resources/subscriptionOrderAddonPost.ts`)                       | POST   | `/saas/csp2/{serviceName}/subscription/{id}/orderAddon`             |
| [`taskGet`](./`resources/taskGet.ts`)                                                             | GET    | `/saas/csp2/{serviceName}/task`                                     |
| [`taskDetailGet`](./`resources/taskDetailGet.ts`)                                                 | GET    | `/saas/csp2/{serviceName}/task/{id}`                                |
| [`usageStatisticsGet`](./`resources/usageStatisticsGet.ts`)                                       | GET    | `/saas/csp2/{serviceName}/usageStatistics`                          |

**Total:** 19 operations

## Notes

- All service-scoped operations use a `serviceName` resource locator with an
  "From List" mode populated via the `getSaasCsp2Services` list-search method
  (`GET /saas/csp2`), and a "By Name" mode (e.g. `csp2-12345`).
- The `serviceName` is always URL-encoded before being interpolated into the
  request path.
- The `usageStatisticsGet` operation requires the `timePeriod` query parameter
  (`lastWeek`, `lastMonth`, `lastQuarter` or `lastYear`).

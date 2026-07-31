# OVH Cloud Dedicated Server

> Manage dedicated servers (BIOS, backups, firewall, Ceph, cluster, housing, etc.)

## Overview

This node provides **67 operations** with **7 tests** for managing OVHcloud resources.

## Available Operations

### resources

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`authSecretGet`](./`resources/authSecretGet.ts`) | POST | `/dedicated/server/{...}/authenticationSecret` | 0 |
| [`availabilityRawGet`](./`resources/availabilityRawGet.ts`) | GET | `...` | 0 |
| [`backupCloudDelete`](./`resources/backupCloudDelete.ts`) | DELETE | `/dedicated/server/{...}/features/backupCloud` | 0 |
| [`backupCloudGetByIdGet`](./`resources/backupCloudGetByIdGet.ts`) | GET | `/dedicated/server/{...}/features/backupCloud/get/{...}` | 1 |
| [`backupCloudGet`](./`resources/backupCloudGet.ts`) | GET | `/dedicated/server/{...}/features/backupCloud` | 0 |
| [`backupCloudOfferDetailsCreate`](./`resources/backupCloudOfferDetailsCreate.ts`) | POST | `/dedicated/server/{...}/features/backupCloud` | 0 |
| [`backupFtpAccessDelete`](./`resources/backupFtpAccessDelete.ts`) | DELETE | `/dedicated/server/{...}/features/backupFTP/access/delete?ipBlock={...}` | 1 |
| [`backupFtpAccessEditPut`](./`resources/backupFtpAccessEditPut.ts`) | PUT | `/dedicated/server/{...}/features/backupFTP/access/edit?ipBlock={...}` | 1 |
| [`backupFtpAccessListGet`](./`resources/backupFtpAccessListGet.ts`) | GET | `/dedicated/server/{...}/features/backupFTP/access` | 0 |
| [`backupFtpAccessPost`](./`resources/backupFtpAccessPost.ts`) | POST | `/dedicated/server/{...}/features/backupFTP/access` | 0 |
| [`backupFtpDelete`](./`resources/backupFtpDelete.ts`) | DELETE | `/dedicated/server/{...}/features/backupFTP` | 0 |
| [`backupFtpGet`](./`resources/backupFtpGet.ts`) | GET | `/dedicated/server/{...}/features/backupFTP` | 0 |
| [`backupFtpPasswordPost`](./`resources/backupFtpPasswordPost.ts`) | POST | `/dedicated/server/{...}/features/backupFTP/password` | 1 |
| [`backupFtpPost`](./`resources/backupFtpPost.ts`) | POST | `/dedicated/server/{...}/features/backupFTP` | 0 |
| [`biosSettingsGet`](./`resources/biosSettingsGet.ts`) | GET | `/dedicated/server/{...}/biosSettings` | 0 |
| [`biosSgxConfigurePost`](./`resources/biosSgxConfigurePost.ts`) | POST | `/dedicated/server/{...}/biosSettings/sgx/configure` | 1 |
| [`biosSgxGet`](./`resources/biosSgxGet.ts`) | GET | `/dedicated/server/{...}/biosSettings/sgx` | 0 |
| [`bootListGet`](./`resources/bootListGet.ts`) | GET | `/dedicated/server/{...}/boot` | 0 |
| [`burstUpdate`](./`resources/burstUpdate.ts`) | PUT | `/dedicated/server/{...}/burst` | 0 |
| [`changeContactCreate`](./`resources/changeContactCreate.ts`) | POST | `/dedicated/server/{...}/changeContact` | 0 |
| [`confirmTerminationCreate`](./`resources/confirmTerminationCreate.ts`) | POST | `/dedicated/server/{...}/confirmTermination` | 0 |
| [`datacenterAvailabilityGet`](./`resources/datacenterAvailabilityGet.ts`) | GET | `...` | 1 |
| [`datacenterAvailabilityList`](./`resources/datacenterAvailabilityList.ts`) | GET | `...` | 0 |
| [`firewallGet`](./`resources/firewallGet.ts`) | GET | `/dedicated/server/{...}/features/firewall` | 0 |
| [`firewallUpdate`](./`resources/firewallUpdate.ts`) | PUT | `/dedicated/server/{...}/features/firewall` | 0 |
| [`get`](./`resources/get.ts`) | GET | `/dedicated/server/{...}` | 0 |
| [`ipmiGet`](./`resources/ipmiGet.ts`) | GET | `/dedicated/server/{...}/features/ipmi` | 0 |
| [`list`](./`resources/list.ts`) | GET | `...` | 0 |
| [`netbootOrderPut`](./`resources/netbootOrderPut.ts`) | PUT | `/dedicated/server/{...}/netboot/order` | 1 |
| [`optionDelete`](./`resources/optionDelete.ts`) | DELETE | `/dedicated/server/{...}/option/{...}` | 0 |
| [`serverUpdate`](./`resources/serverUpdate.ts`) | PUT | `/dedicated/server/{...}` | 0 |
| [`taskDetailGet`](./`resources/taskDetailGet.ts`) | GET | `/dedicated/server/{...}/task/{...}` | 0 |
| [`taskListGet`](./`resources/taskListGet.ts`) | GET | `/dedicated/server/{...}/task` | 0 |

**Total:** 67 operations, 7 tests

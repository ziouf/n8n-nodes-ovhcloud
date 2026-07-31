# OVH Cloud Service

> Manage OVHcloud services (get, list, renews, reopen, suspend, terminate)

## Overview

This node provides **8 operations** with **5 tests** for managing OVHcloud resources.

## Available Operations

### Root Operations

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`createRenew`](./`createRenew`.ts) | POST | `/service/{...}/renew` | 1 |
| [`get`](./`get`.ts) | GET | `/service/{...}` | 0 |
| [`list`](./`list`.ts) | GET | `/service/{...}` | 0 |
| [`listRenews`](./`listRenews`.ts) | GET | `/service/{...}/renew` | 0 |
| [`reopen`](./`reopen`.ts) | POST | `/service/{...}/reopen` | 1 |
| [`suspend`](./`suspend`.ts) | POST | `/service/{...}/suspend` | 1 |
| [`terminate`](./`terminate`.ts) | POST | `/service/{...}/terminate` | 1 |
| [`update`](./`update`.ts) | PUT | `/service/{...}` | 1 |

**Total:** 8 operations, 5 tests

# OVH Cloud SSL

> Manage SSL certificates via /ssl API v1

## Overview

This node provides **4 operations** with **4 tests** for managing OVHcloud resources.

## Available Operations

### resources

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`createCertificateByResourceName`](./`resources/createCertificateByResourceName.ts`) | POST | `/webhosting/resource/{...}/certificate` | 1 |
| [`getCertificateByResourceName`](./`resources/getCertificateByResourceName.ts`) | GET | `/webhosting/resource/{...}/certificate` | 1 |
| [`listAllDomains`](./`resources/listAllDomains.ts`) | GET | `...` | 1 |
| [`updateCertificateByResourceName`](./`resources/updateCertificateByResourceName.ts`) | PUT | `/webhosting/resource/{...}/certificate` | 1 |

**Total:** 4 operations, 4 tests

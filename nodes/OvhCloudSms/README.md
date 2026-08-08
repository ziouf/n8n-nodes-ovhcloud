# OVH Cloud SMS

> Manage OVHcloud SMS services via /sms API v1

## Overview

This node provides **126 operations** with **126 tests** for managing OVHcloud resources.

- **Dynamic Service Selection**: The `serviceName` field is now a `resourceLocator` supporting dynamic search via `getSmsServices`.

## Available Operations

| Family              | Operations | Methods                |
| ------------------- | ---------: | ---------------------- |
| `batches/`          |          7 | DELETE, GET, POST, PUT |
| `blacklist/`        |          4 | DELETE, GET, POST      |
| `document/`         |          1 | GET                    |
| `estimate/`         |          1 | POST                   |
| `exceptions/`       |          1 | GET                    |
| `hlr/`              |          4 | GET, POST              |
| `incoming/`         |          3 | DELETE, GET            |
| `jobs/`             |          3 | DELETE, GET            |
| `outgoing/`         |          4 | DELETE, GET            |
| `phonebooks/`       |         12 | DELETE, GET, POST, PUT |
| `ptts/`             |          1 | GET                    |
| `rates/`            |          2 | GET                    |
| `receivers/`        |          6 | DELETE, GET, POST, PUT |
| `seeOffers/`        |          1 | GET                    |
| `senders/`          |         11 | DELETE, GET, POST, PUT |
| `serviceInfos/`     |          2 | GET, PUT               |
| `smpp/`             |          4 | GET, POST, PUT         |
| `sms/`              |          8 | DELETE, GET, POST, PUT |
| `templatesControl/` |          6 | DELETE, GET, POST, PUT |
| `transferCredits/`  |          1 | POST                   |
| `users/`            |         24 | DELETE, GET, POST, PUT |
| `virtualNumbers/`   |         20 | DELETE, GET, POST, PUT |

**Total:** 126 operations, 126 tests

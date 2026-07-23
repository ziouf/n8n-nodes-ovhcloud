# n8n-nodes-ovhcloud

[![n8n Nodes Base](https://img.shields.io/badge/n8n-nodes_base-orange.svg)](https://docs.n8n.io/integrations/#community-nodes)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**n8n-nodes-ovhcloud** is a community node for [n8n](https://n8n.io/) that enables seamless integration with OVHcloud APIs. It provides **6 dedicated nodes** to manage your entire OVH Cloud infrastructure — from web hosting and virtual private servers to domain management, DNS zones, dedicated hardware, and account billing — all orchestrated directly inside your n8n workflows.

> **Note**: n8n is a workflow automation platform released under the [FairCode license](https://docs.n8n.io/sustainable-use-license/).

---

## 📚 Documentation

| Resource                     | Link                                                                       |
| ---------------------------- | -------------------------------------------------------------------------- |
| **Getting Started**          | [docs/guides/getting-started.md](docs/guides/getting-started.md)           |
| **Authentication Guide**     | [docs/guides/authentication-guide.md](docs/guides/authentication-guide.md) |
| **Workflow Examples**        | [docs/guides/examples.md](docs/guides/examples.md)                         |
| **Troubleshooting**          | [docs/guides/troubleshooting.md](docs/guides/troubleshooting.md)           |
| **API Reference (V1)**       | [docs/api-reference/v1/\_index.md](docs/api-reference/v1/_index.md)        |
| **API Reference (V2)**       | [docs/api-reference/v2/\_index.md](docs/api-reference/v2/_index.md)        |
| **Full Documentation Index** | [docs/README.md](docs/README.md)                                           |

---

## Features

### API Coverage

All nodes share common features across every OVH Cloud endpoint:

- **Multi-endpoint support**: OVH Europe, Canada, USA, SoYouStart, Kimsufi
- **SHA1 signature authentication** for secure API requests (via `OvhCloudApiClient`)
- **Dynamic list selection** — auto-populate dropdowns with live data via resourceLocator + paginated searchListMethod
- **Automatic pagination** for endpoints returning ID arrays (`string[]` / `long[]`) that are mapped to full objects

### Available Nodes

| Node                           | Description                                                                      | Operations |
| ------------------------------ | -------------------------------------------------------------------------------- | ---------- |
| **OVH Cloud Dedicated Server** | Manage dedicated servers (get, list, BIOS settings, backups, firewall, etc.)     | 12         |
| **OVH Cloud Domain**           | Manage domains — listing, extensions, contacts, auth info, DS records, DNS zones | 19         |
| **OVH Cloud Hosting Web**      | Manage web hosting services (databases, crons, users, SSL, env vars, etc.)       | 22         |
| **OVH Cloud Me**               | Manage your OVHcloud account details and billing                                 | 10         |
| **OVH Cloud Service**          | Manage OVHcloud services (get, list, renews, reopen, suspend, terminate)         | 8          |
| **OVH Cloud VPS**              | Manage virtual private servers — get, reboot, install OS images                  | 30         |

---

### Web Hosting Operations

| Category             | Operations                                 |
| -------------------- | ------------------------------------------ |
| **General**          | Get, List, Find by Domain                  |
| **Attached Domains** | List attached domains, Get attached domain |
| **Databases**        | List databases, Get database               |
| **Crons**            | List crons, Get cron                       |
| **Users**            | List users, Get user                       |
| **Tasks**            | List tasks                                 |
| **Modules**          | List modules, Get module                   |
| **Runtimes**         | List runtimes                              |
| **Emails**           | Get email                                  |
| **Env Vars**         | List env vars, Get env var                 |
| **SSL**              | Get SSL                                    |
| **Service Infos**    | Get service infos                          |

### Service Operations

| Operation       | Description                        |
| --------------- | ---------------------------------- |
| **Get**         | Get service details                |
| **List**        | List all services                  |
| **List Renews** | List possible renews for a service |
| **Reopen**      | Reopen a terminated service        |
| **Suspend**     | Suspend a service                  |
| **Terminate**   | Terminate a service                |
| **Update**      | Update service configuration       |

### Domain Operations (OvhCloudDomain)

The `OVH Cloud Domain` node covers the entire GET scope of `/domain` API v1, organized by sub-resource:

#### Root & Extensions

| Operation                 | Endpoint                            | Description                                                |
| ------------------------- | ----------------------------------- | ---------------------------------------------------------- |
| **List Domains**          | `GET /domain`                       | List all managed domains (auto-paginated)                  |
| **Get Domain Details**    | `GET /domain/{serviceName}`         | Get full domain info via resourceLocator                   |
| **Extension List**        | `GET /domain/extensions`            | List available extensions                                  |
| **Get Extension**         | `GET /domain/extensions/{name}`     | Get details of a specific extension                        |
| **Extension By Category** | `GET /domain/extensions/byCategory` | Extensions grouped by category (thematic, geolocalization) |

#### Contacts & Claim Notices

| Operation               | Endpoint                           | Description                                    |
| ----------------------- | ---------------------------------- | ---------------------------------------------- |
| **List Contacts**       | `GET /domain/contact`              | List all contacts associated with the account  |
| **Get Contact Details** | `GET /domain/contact/{contactId}`  | Get a specific contact by ID (resourceLocator) |
| **Claim Notice**        | `GET /data/claimNotice?domain=...` | Retrieve claim notices for a domain name       |

#### Domain Sub-Resources (`{serviceName}/`)

| Operation            | Endpoint                          | Description                                                         |
| -------------------- | --------------------------------- | ------------------------------------------------------------------- |
| **Auth Info Get**    | `GET .../authInfo`                | Return auth info password if the domain is unlocked                 |
| **DS Record List**   | `GET .../dsRecord?flags=&status=` | List DS records with optional DNSSEC filter (auto-paginated)        |
| **Name Server List** | `GET .../nameServer`              | List all name servers for a domain (auto-paginated to full objects) |

#### Configuration Rules & Zone DNS (`{zoneName}/`)

| Operation                   | Endpoint                                 | Description                                                                                |
| --------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Configuration Rule**      | `GET /configurationRule?action=&domain=` | Get configuration rule applied for a domain in a given action (validation before API call) |
| **Zone List**               | `GET /domain/zone`                       | List all DNS zones (auto-paginated to full objects)                                        |
| **Service Info Get (zone)** | `GET .../serviceInfos`                   | Get service information for a zone                                                         |
| **SOA Get**                 | `GET .../soa`                            | Retrieve SOA record of a zone                                                              |
| **Status Get**              | `GET .../status`                         | Check current status of a DNS zone                                                         |
| **Task List Get (zone)**    | `GET .../task?function=&status=`         | List all tasks for a zone with optional filters (auto-paginated)                           |
| **Task Get (zone)**         | `GET .../task/{id}`                      | Retrieve full details of a specific task by ID                                             |

### VPS Operations

| Operation            | Description                                  |
| -------------------- | -------------------------------------------- |
| **Get**              | Get VPS server properties                    |
| **List**             | List all VPS servers                         |
| **Reboot**           | Reboot a running or stopped VPS              |
| **Install OS Image** | Install an operating system image on the VPS |

### Dedicated Server Operations

| Operation                     | Description                                         |
| ----------------------------- | --------------------------------------------------- |
| **Get**                       | Get dedicated server properties                     |
| **List**                      | List all dedicated servers                          |
| **BIOS Settings**             | Retrieve BIOS settings and SGX parameters           |
| **Backup Cloud / FTP Access** | Manage cloud/FTP backup access control lists (ACLs) |

---

## Quick Start

### 1. Install

```bash
# Via n8n UI: Settings > Community Nodes > Install > n8n-nodes-ovhcloud
# Or manually:
npm install n8n-nodes-ovhcloud
```

### 2. Configure

1. Create API credentials at [auth.eu.ovhcloud.com/api/createToken](https://auth.eu.ovhcloud.com/api/createToken)
2. Add **OVH API** credentials in n8n (Application Key, Application Secret, Consumer Key)
3. Choose your endpoint (Europe, Canada, USA, SoYouStart, Kimsufi)

See the [full authentication guide](docs/guides/authentication-guide.md) for detailed steps.

### 3. Use

Add any of the **6 available OVH Cloud nodes** to your workflow — select a resource, pick an operation from the dropdown, fill in parameters (resourceLocator for services with IDs), and execute:

| Node                           | Resource Locator Fields                       | Example Use Cases                                                                      |
| ------------------------------ | --------------------------------------------- | -------------------------------------------------------------------------------------- |
| **OVH Cloud Dedicated Server** | `serviceName` via list or name                | Get server BIOS settings, manage backup ACLs, check datacenter availability            |
| **OVH Cloud Domain**           | Various (`domainOperation`, `zoneName`, etc.) | List domains & extensions, retrieve DS records and nameservers, monitor DNS zone tasks |
| **OVH Cloud Hosting Web**      | `serviceName` via list or name                | Manage databases, crons, users, SSL certificates for web hosting accounts              |
| **OVH Cloud Me**               | Account-level (no resourceLocator)            | Get billing summary, account details, and subscription info                            |
| **OVH Cloud Service**          | `serviceName` via list or name                | List all services, reopen terminated ones, suspend/terminate resources                 |
| **OVH Cloud VPS**              | `serviceName` via list or name                | Reboot VPS instances, install OS images from catalog                                   |

See [workflow examples](docs/guides/examples.md) for common use cases.

---

## Development

```bash
git clone https://github.com/ziouf/n8n-nodes-ovhcloud.git
cd n8n-nodes-ovhcloud
npm install
npm run build
npm run dev          # Development mode with hot reload
npm run lint         # Check code quality
npm run lint:fix     # Auto-fix linting issues
```

### Testing

```bash
npm test
```

### Project Structure

```
n8n-nodes-ovhcloud/
├── credentials/
│   └── OvhCloudApi.credentials.ts      # OVH API credential type (SHA1 signing)
├── nodes/
│   ├── OvhCloudDedicated/              # Dedicated servers node (12 operations)
│   │   ├── OvhCloudDedicated.node.ts    # n8n node class
│   │   ├── index.ts                    # description() + execute() router
│   │   └── resources/*.operation.ts    # operation implementations
│   ├── OvhCloudDomain/                 # Domain management node (19 operations)
│   │   ├── OvhCloudDomain.node.ts       # n8n node class
│   │   ├── index.ts                    # description() + execute() router with resourceLocator dropdown
│   │   └── resources/*.operation.ts    # operation implementations (extensions, contacts, zones...)
│   ├── OvhCloudHosting/                # Web hosting node (22 operations)
│   │   ├── OvhCloudHosting.node.ts      # n8n node class
│   │   ├── index.ts                    # description() + execute() router
│   │   └── resources/*.operation.ts    # operation implementations
│   ├── OvhCloudMe/                     # Account management node (10 operations)
│   │   ├── OvhCloudMe.node.ts           # n8n node class
│   │   ├── index.ts                    # description() + execute() router
│   │   └── resources/*.operation.ts    # operation implementations
│   ├── OvhCloudService/                # Service management node (8 operations)
│   │   ├── OvhCloudService.node.ts      # n8n node class
│   │   ├── index.ts                    # description() + execute() router
│   │   └── resources/*.operation.ts    # operation implementations
│   ├── OvhCloudVps/                    # VPS management node (30 operations)
│   │   ├── OvhCloudVps.node.ts          # n8n node class
│   │   ├── index.ts                    # description() + execute() router
│   │   └── resources/*.operation.ts    # operation implementations
│   └── shared/
│       ├── constants.ts                # Shared constants (icon path, credential name)
│       ├── nodes/BaseNode.ts           # Abstract base class for all OVH Cloud nodes
│       └── transport/                   # API client & authentication
│           ├── ApiClient.ts             #   abstract interface
│           ├── ApiClientImpl.ts         #   HTTP implementation (with retry + pagination)
│           └── CredentialHolder.ts      #   OVH SHA1 signature helper
├── scripts/
│   ├── generate-nodes-manifest.js       # Regenerate nodes list in package.json after build
│   ├── gen-api-docs.sh                  # Generate API documentation from specs
│   └── get-api-description.sh           # Fetch OVH API JSON specifications
├── tests/                               # Jest unit & non-regression tests (175+ tests)
│   ├── domain-lot1.test.ts              # Tests for all OvhCloudDomain GET operations
│   ├── helpers.ts                       # Shared test utilities (createMockCtx, invokeOperation)
│   └── *.operation.test.ts              # Per-node operation coverage tests
├── docs/
│   ├── README.md                        # Documentation index & structure overview
│   ├── guides/                          # User-facing getting-started guides
│   ├── api-reference/                   # Categorized API documentation (v1 + v2)
│   │   └── v2/reference/domain.md       # Full Domain API reference for OvhCloudDomain node
│   ├── _shared/                         # Reusable markdown includes (auth, errors, security...)
│   └── api-specs/                       # Raw OVH API JSON specifications (v1 + v2)
├── icons/                               # Node icons (ovh_vertical.svg)
└── package.json                         # Manifest auto-generated by generate-nodes-manifest.js
```

Each node follows the same three-export pattern: `description()`, optional `methodsListSearch()` for dynamic dropdowns, and a single async `execute()` function that switches on an operation parameter. All HTTP calls go through `OvhCloudApiClient` which handles SHA1 signing automatically.

---

## Contributing

Contributions welcome! See our [development guidelines](#development) and follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes, run `npm run lint:fix && npm test`
4. Commit and push: `git commit -m "feat: add your feature"`
5. Open a Pull Request

---

## License

[MIT](LICENSE) — Copyright (c) 2026 Cyril MARIN

---

## Resources

- [OVH API - Create Token](https://auth.eu.ovhcloud.com/api/createToken)
- [OVH API Console](https://api.ovh.com/console/)
- [OVHcloud API Documentation](https://docs.ovh.com/gb/en/api/)
- [n8n Community Nodes](https://docs.n8n.io/integrations/#community-nodes)
- [OVHcloud Status](https://status.ovhcloud.com/)

---

**Found this node useful?** 🌟 Star the repository on GitHub!

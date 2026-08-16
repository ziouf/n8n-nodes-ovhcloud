# n8n-nodes-ovhcloud

[![n8n Nodes Base](https://img.shields.io/badge/n8n-nodes_base-orange.svg)](https://docs.n8n.io/integrations/#community-nodes)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**n8n-nodes-ovhcloud** is a community node for [n8n](https://n8n.io/) that enables seamless integration with OVHcloud APIs. It provides **71 dedicated nodes** to manage your entire OVH Cloud infrastructure — from web hosting and virtual private servers, public cloud projects with Kubernetes and AI services, domain management, dedicated hardware, billing, SMS, telephony, CDN, storage, and more — all orchestrated directly inside your n8n workflows.

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
- **SHA1 signature authentication** for secure API requests (via `ApiClient` / `getClient()` factory)
- **Dynamic list selection** — auto-populate dropdowns with live data via a shared `resourceLocator` factory (e.g. `shared/nodes/locators.ts`) and paginated `searchListMethod` (built on `shared/methods/listSearch.ts`)
- **Credential memoization** — API credentials are fetched once per execution and shared between all items and HTTP calls via the `getClient()` factory (client memoized per execution context).
- **Automatic retry & backoff** — GET requests automatically retry on transient errors (429, 5xx, timeouts) with jitter; POST/PUT/DELETE retries require explicit `*WithRetry` configuration.
- **Destructive operation warnings** — destructive or irreversible operations (terminate, reinstall, reboot) display a yellow warning notice in the node UI via the shared `destructiveActionNotice()` helper.
- **Correct multi-items support** — parameters are resolved per item (`getNodeParameter(name, itemIndex ?? 0)`) across all nodes, so workflows with multiple input items use the right parameters for each.
- **Advanced pagination** — `paginate()` fetches pages in parallel batches (configurable `concurrency`, default 3, overridable via `OVH_PAGINATE_CONCURRENCY` env var); `paginateResources()` fetches detail objects in parallel (max 5 concurrent requests) with an `onSkipped` callback for per-resource error tracking; `paginate` supports `maxItems` (default 1000), `query` merging, and automatic mapping to full objects for ID arrays.
- **Multi-items concurrency** — all nodes (71) use `executeTemplate` with `perItemConcurrency` based on operation classification: read operations run up to 3 concurrent workers, write/destructive operations are limited to 1 for consistency, preserving output order.
- **Return Full Objects / Max Items** — list operations (VPS, Dedicated Server) expose a toggle to fetch full resource objects in parallel, with a configurable max item count and a visible warning when some resources could not be fetched.
- **Optional filters on list operations** — select list-type operations across 8 nodes (Me, Support, Hosting, Domain, CDN, IP, VPS, IAM) now expose an optional Filters block. When empty, requests are identical to before (non-breaking); when filled, filters are translated into API query parameters. See [docs/_shared/filtering.md](docs/_shared/filtering.md) for details.

### Status

- **Build Status**: ✅ Passing (stable)

### Available Nodes

The plugin provides **71 nodes** organized by category:

#### 🖥️ Compute & Infrastructure

| Node                                | Description                                                                                                  | Sub-README                                       |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| **OVH Cloud Dedicated Server**      | Manage dedicated servers (BIOS, backups, firewall, Ceph, cluster, housing, etc.)                             | [→](nodes/OvhCloudDedicated/README.md)           |
| **OVH Cloud Dedicated Cloud**       | Manage dedicated cloud services                                                                              | [→](nodes/OvhCloudDedicatedCloud/README.md)      |
| **OVH Cloud VPS**                   | Manage virtual private servers (get, reboot, install OS, snapshots, disks, netboot)                          | [→](nodes/OvhCloudVps/README.md)                 |
| **OVH Cloud Public Cloud**          | Manage public cloud projects, Kubernetes, instances, regions, databases (14 engines), block storage, Rancher | [→](nodes/OvhCloudPublicCloud/README.md)         |
| **OVH Cloud Public Cloud AI**       | Manage AI services — apps, jobs, notebooks, registries, data stores, alerting                                | [→](nodes/OvhCloudPublicCloudAi/README.md)       |
| **OVH Cloud VMware Cloud Director** | Manage VMware Cloud Director services                                                                        | [→](nodes/OvhCloudVmwareCloudDirector/README.md) |
| **OVH Cloud Cluster**               | Manage cluster services                                                                                      | [→](nodes/OvhCloudCluster/README.md)             |

#### 🌐 Networking & Storage

| Node                            | Description                                  | Sub-README                                   |
| ------------------------------- | -------------------------------------------- | -------------------------------------------- |
| **OVH Cloud vRack**             | Manage vRack networks                        | [→](nodes/OvhCloudVrack/README.md)           |
| **OVH Cloud vRack Services**    | Manage vRack services (V2)                   | [→](nodes/OvhCloudVrackServices/README.md)   |
| **OVH Cloud IP**                | Manage IP addresses, equilibriums, failovers | [→](nodes/OvhCloudIp/README.md)              |
| **OVH Cloud IP Load Balancing** | Manage IP load balancing services            | [→](nodes/OvhCloudIPLoadbalancing/README.md) |
| **OVH Cloud CDN**               | Manage CDN services                          | [→](nodes/OvhCloudCdn/README.md)             |
| **OVH Cloud Storage**           | Manage object storage services               | [→](nodes/OvhCloudStorage/README.md)         |
| **OVH Cloud Network Defense**   | Manage network defense services              | [→](nodes/OvhCloudNetworkDefense/README.md)  |

#### 🌍 Domains & Hosting

| Node                               | Description                                                                                        | Sub-README                                      |
| ---------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **OVH Cloud Domain**               | Manage domains — listing, contacts, DNS zones, records, wildcards, pools, redirects, WHOIS privacy | [→](nodes/OvhCloudDomain/README.md)             |
| **OVH Cloud Domain (V2)**          | Manage domains via API v2                                                                          | [→](nodes/OvhCloudDomainV2/README.md)           |
| **OVH Cloud Hosting Web**          | Manage web hosting services (databases, crons, FTP, mail, PHP, statistics, users, SSL)             | [→](nodes/OvhCloudHosting/README.md)            |
| **OVH Cloud Hosting Web Resource** | Manage web hosting resources (attached domains, SSL, users, websites)                              | [→](nodes/OvhCloudHostingWebResource/README.md) |
| **OVH Cloud Web Hosting (V2)**     | Manage web hosting services via API v2                                                             | [→](nodes/OvhCloudWebhostingV2/README.md)       |
| **OVH Cloud Managed CMS**          | Manage managed CMS services                                                                        | [→](nodes/OvhCloudManagedCms/README.md)         |

#### 📧 Email & Messaging

| Node                    | Description                                 | Sub-README                            |
| ----------------------- | ------------------------------------------- | ------------------------------------- |
| **OVH Cloud Email Pro** | Manage email professional services          | [→](nodes/OvhCloudEmailPro/README.md) |
| **OVH Cloud MX Plan**   | Manage MX plan configurations               | [→](nodes/OvhCloudMxPlan/README.md)   |
| **OVH Cloud Zimbra**    | Manage Zimbra email services                | [→](nodes/OvhCloudZimbra/README.md)   |
| **OVH Cloud SMS**       | Manage SMS services — send, list, blacklist | [→](nodes/OvhCloudSms/README.md)      |
| **OVH Cloud SSL**       | Manage SSL certificates                     | [→](nodes/OvhCloudSsl/README.md)      |

#### 💰 Billing & Orders

| Node                   | Description                                                                            | Sub-README                            |
| ---------------------- | -------------------------------------------------------------------------------------- | ------------------------------------- |
| **OVH Cloud Me**       | Manage your OVHcloud account details, billing, and subscriptions                       | [→](nodes/OvhCloudMe/README.md)       |
| **OVH Cloud Service**  | Manage OVHcloud services (get, list, renews, reopen, suspend, terminate)               | [→](nodes/OvhCloudService/README.md)  |
| **OVH Cloud Services** | Manage generic services                                                                | [→](nodes/OvhCloudServices/README.md) |
| **OVH Cloud Order**    | Manage orders — carts, catalogs, upgrades, dedicated, telephony, licenses, emails, VPS | [→](nodes/OvhCloudOrder/README.md)    |
| **OVH Cloud Price**    | Consult prices for all OVH Cloud products                                              | [→](nodes/OvhCloudPrice/README.md)    |
| **OVH Cloud Pack**     | Manage pack services                                                                   | [→](nodes/OvhCloudPack/README.md)     |

#### 📞 Telephony & Microsoft

| Node                                | Description                                                                          | Sub-README                                       |
| ----------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------ |
| **OVH Cloud Telephony**             | Manage telephony — aliases, lines, trunks, numbers, accessories, offers, directories | [→](nodes/OvhCloudTelephony/README.md)           |
| **OVH Cloud Microsoft Services**    | Manage Microsoft services (Exchange, Office 365)                                     | [→](nodes/OvhCloudMsServices/README.md)          |
| **OVH Cloud Veeam Enterprise Plus** | Manage Veeam Enterprise Plus services                                                | [→](nodes/OvhCloudVeeamEnterprisePlus/README.md) |

#### 🔐 Security & Identity

| Node                       | Description                                                       | Sub-README                                |
| -------------------------- | ----------------------------------------------------------------- | ----------------------------------------- |
| **OVH Cloud IAM**          | Manage identity and access management resources                   | [→](nodes/OvhCloudIam/README.md)          |
| **OVH Cloud OKMS**         | Manage key management services                                    | [→](nodes/OvhCloudOkms/README.md)         |
| **OVH Cloud Support**      | Manage support tickets — create, get, reply, score, close, reopen | [→](nodes/OvhCloudSupport/README.md)      |
| **OVH Cloud Notification** | Manage notification services                                      | [→](nodes/OvhCloudNotification/README.md) |

#### 💾 Database & Catalog

| Node                                | Description                             | Sub-README                                     |
| ----------------------------------- | --------------------------------------- | ---------------------------------------------- |
| **OVH Cloud Database as a Service** | Manage database services                | [→](nodes/OvhCloudDbaas/README.md)             |
| **OVH Cloud Backup Services**       | Manage backup services                  | [→](nodes/OvhCloudBackupServices/README.md)    |
| **OVH Cloud Commercial Catalog**    | Browse commercial catalog               | [→](nodes/OvhCloudCommercialCatalog/README.md) |
| **OVH Cloud Location**              | Browse location data                    | [→](nodes/OvhCloudLocation/README.md)          |
| **OVH Cloud Public Cloud (V2)**     | Manage public cloud projects via API v2 | [→](nodes/OvhCloudPublicCloudV2/README.md)     |

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

### Public Cloud Operations (OvhCloudPublicCloud)

The `OVH Cloud Public Cloud` node covers the full scope of `/publicCloud` API v2, organized by sub-resource categories:

#### Projects (`project/`) — GET only

| Operation               | Endpoint                               | Description                                           |
| ----------------------- | -------------------------------------- | ----------------------------------------------------- |
| **List Projects**       | `GET /publicCloud/project`             | List all Public Cloud projects (with IAM tags filter) |
| **Get Project Details** | `GET /publicCloud/project/{projectId}` | Get full project info including IAM metadata          |

#### Rancher Services (`rancher/`) — GET only

| Operation                     | Endpoint                                       | Description                                     |
| ----------------------------- | ---------------------------------------------- | ----------------------------------------------- |
| **List Rancher Services**     | `GET /publicCloud/project/{projectId}/rancher` | List all managed Rancher services for a project |
| **Get Rancher Service**       | `GET .../rancher/{rancherId}`                  | Get details of a specific Rancher service       |
| **List Plan Capabilities**    | `GET .../capabilities/plan`                    | List available plans for a Rancher service      |
| **List Version Capabilities** | `GET .../capabilities/version`                 | List available versions for a Rancher service   |

#### Block Storage (`blockstorage/`) — Full CRUD (GET / POST / PUT / DELETE)

##### Volumes

| Operation              | Endpoint                       | Description                                 |
| ---------------------- | ------------------------------ | ------------------------------------------- |
| **List Volumes**       | `GET .../blockStorage/volume`  | List all block storage volumes in a project |
| **Get Volume Details** | `GET .../volume/{volumeId}`    | Get details of a specific volume            |
| **Create Volume**      | `POST .../blockStorage/volume` | Create a new block storage volume           |
| **Update Volume**      | `PUT .../volume/{volumeId}`    | Update an existing volume (with checksum)   |
| **Delete Volume**      | `DELETE .../volume/{volumeId}` | Delete a specific volume                    |

##### Backups

| Operation              | Endpoint                       | Description                                 |
| ---------------------- | ------------------------------ | ------------------------------------------- |
| **List Backups**       | `GET .../blockStorage/backup`  | List all block storage backups in a project |
| **Get Backup Details** | `GET .../backup/{backupId}`    | Get details of a specific backup            |
| **Create Backup**      | `POST .../blockStorage/backup` | Create a new block storage backup           |
| **Update Backup**      | `PUT .../backup/{backupId}`    | Update an existing backup (with checksum)   |
| **Delete Backup**      | `DELETE .../backup/{backupId}` | Delete a specific backup                    |

##### Snapshots

| Operation                | Endpoint                           | Description                                   |
| ------------------------ | ---------------------------------- | --------------------------------------------- |
| **List Snapshots**       | `GET .../blockStorage/snapshot`    | List all block storage snapshots in a project |
| **Get Snapshot Details** | `GET .../snapshot/{snapshotId}`    | Get details of a specific snapshot            |
| **Create Snapshot**      | `POST .../blockStorage/snapshot`   | Create a new block storage snapshot           |
| **Update Snapshot**      | `PUT .../snapshot/{snapshotId}`    | Update an existing snapshot (with checksum)   |
| **Delete Snapshot**      | `DELETE .../snapshot/{snapshotId}` | Delete a specific snapshot                    |

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

Add any of the **71 available OVH Cloud nodes** to your workflow — select a resource, pick an operation from the dropdown, fill in parameters (resourceLocator for services with IDs), and execute.

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

The test suite covers API spec compliance, pagination, retry logic, credential handling, and concurrency. Key test files:

- **`tests/multi-item.test.ts`** — per-item parameter resolution, order preservation with concurrency, and a static guardrail that fails if any `.operation.ts` uses a hardcoded `getNodeParameter('x', 0)` index.
- **`tests/paginate-concurrency.test.ts`** — verifies that parallel page fetching produces identical results to sequential pagination, respects `maxItems`, and honors the `concurrency` option.
- **`tests/base-node.test.ts`** — `runItems()` worker pool, error handling, and ordered output with `concurrency > 1`.

### Project Structure

```
n8n-nodes-ovhcloud/
├── credentials/
│   └── OvhCloudApi.credentials.ts      # OVH API credential type (SHA1 signing)
├── nodes/
│   ├── OvhCloudBackupServices/         # Backup services node
│   ├── OvhCloudCdn/                    # CDN services node
│   ├── OvhCloudCluster/                # Cluster services node
│   ├── OvhCloudCommercialCatalog/      # Commercial catalog node
│   ├── OvhCloudDbaas/                  # Database as a Service node
│   ├── OvhCloudDedicated/              # Dedicated servers node (67 operations)
│   │   ├── OvhCloudDedicated.node.ts    # n8n node class
│   │   ├── index.ts                    # description() + execute() router
│   │   ├── README.md                   # Node documentation
│   │   └── resources/
│   │       ├── ceph/                   # Ceph/NAS operations
│   │       ├── cluster/                # Cluster operations
│   │       ├── housing/                # Housing operations
│   │       ├── installation/           # Installation template operations
│   │       ├── monitoring/             # Monitoring operations
│   │       └── option/                 # Option operations
│   ├── OvhCloudDedicatedCloud/         # Dedicated cloud node
│   ├── OvhCloudDomain/                 # Domain management node (110 operations)
│   ├── OvhCloudDomainV2/               # Domain V2 node
│   ├── OvhCloudEmailPro/               # Email Pro node
│   ├── OvhCloudHosting/                # Web hosting node (233 operations)
│   ├── OvhCloudHostingWebResource/     # Web hosting resource node
│   ├── OvhCloudIam/                    # IAM node (V2)
│   ├── OvhCloudIp/                     # IP management node
│   ├── OvhCloudIPLoadbalancing/        # IP Load Balancing node
│   ├── OvhCloudLocation/               # Location node (V2)
│   ├── OvhCloudManagedCms/              # Managed CMS node (V2)
│   ├── OvhCloudMe/                     # Account management node (12 operations)
│   ├── OvhCloudMsServices/             # Microsoft Services node
│   ├── OvhCloudMxPlan/                 # MX Plan node
│   ├── OvhCloudNetworkDefense/         # Network Defense node (V2)
│   ├── OvhCloudNotification/           # Notification node (V2)
│   ├── OvhCloudOkms/                   # OKMS node (V2)
│   ├── OvhCloudOrder/                  # Order management node
│   ├── OvhCloudPack/                   # Pack services node
│   ├── OvhCloudPrice/                  # Price consultation node
│   ├── OvhCloudPublicCloud/            # Public Cloud node (675 operations)
│   │   ├── OvhCloudPublicCloud.node.ts  # n8n node class
│   │   ├── index.ts                    # description() + execute() router
│   │   ├── README.md                   # Node documentation
│   │   ├── blockstorage/               # Block Storage CRUD (volumes, backups, snapshots)
│   │   ├── project/                    # Project GET operations
│   │   ├── rancher/                    # Rancher Services GET operations
│   │   ├── kube/                       # Kubernetes operations
│   │   ├── instance/                   # Instance operations
│   │   ├── region/                     # Region operations
│   │   └── database/                   # Database engines (cassandra, clickhouse, grafana, kafka, etc.)
│   ├── OvhCloudPublicCloudAi/          # Public Cloud AI node
│   ├── OvhCloudPublicCloudV2/          # Public Cloud V2 node
│   ├── OvhCloudService/                # Service management node (8 operations)
│   ├── OvhCloudServices/               # Generic services node
│   ├── OvhCloudSms/                    # SMS node
│   ├── OvhCloudSsl/                    # SSL certificates node
│   ├── OvhCloudStorage/                # Object storage node
│   ├── OvhCloudSupport/                # Support tickets node
│   ├── OvhCloudTelephony/              # Telephony node
│   ├── OvhCloudVeeamEnterprisePlus/    # Veeam Enterprise Plus node
│   ├── OvhCloudVmwareCloudDirector/    # VMware Cloud Director node (V2)
│   ├── OvhCloudVps/                    # VPS management node (61 operations)
│   ├── OvhCloudVrack/                  # vRack network node
│   ├── OvhCloudVrackServices/          # vRack Services node (V2)
│   ├── OvhCloudWebhostingV2/           # Web Hosting V2 node
│   ├── OvhCloudZimbra/                 # Zimbra email node (V2)
│   └── shared/
│       ├── constants.ts                # Shared constants (icon path, credential name)
│       ├── nodes/
│       │   ├── BaseNode.ts           # Shared `executeTemplate` with errorContext enrichment and perItemConcurrency on all nodes
│       │   ├── listOptions.ts        # "Return Full Objects / Max Items" list options helper
│       │   ├── notices.ts            # Destructive action warning notices
│       ├── methods/                    # Search list methods for dynamic dropdowns
│       │   └── listSearch.ts           # createServiceListSearch() factory (deduplicated loaders, bounded cache with MAX_CACHE_ENTRIES)
│       └── transport/                   # API client & authentication
│           ├── ApiClient.ts             #   `getClient()` factory (shared client per execution)
│           └── CredentialHolder.ts      #   OVH SHA1 signature helper
├── scripts/
│   ├── generate-nodes-manifest.js       # Regenerate nodes list in package.json after build
│   ├── gen-api-docs.sh                  # Generate API documentation from specs
│   └── get-api-description.sh           # Fetch OVH API JSON specifications
├── tests/                               # Jest unit & non-regression tests (5217 suites / 11606 tests)
│   ├── base-node.test.ts                # `runItems()` worker pool, error handling, ordered output with concurrency
│   ├── credential-scope.test.ts         # Scoped memoization and isolation per credentials
│   ├── CredentialHolder.test.ts         # OVH SHA1 signature generation and auth headers
│   ├── get-client.test.ts               # getClient factory (same instance per context)
│   ├── helpers.ts                       # Shared test utilities (createMockCtx, invokeOperation)
│   ├── helpers/mockCtx.ts               # `createMockExecuteFunctions` typed helper
│   ├── hosting.operation.test.ts        # Non-regression tests for Hosting operations
│   ├── list-search.test.ts              # Dynamic dropdown loaders (createServiceListSearch)
│   ├── mockCtx.test.ts                  # Typed mock helper
│   ├── multi-item.test.ts               # Per-item parameter resolution + static guardrail for hardcoded indices
│   ├── paginate-concurrency.test.ts     # Parallel page fetching correctness and maxItems compliance
│   ├── publicCloud.operation.test.ts    # Non-regression tests for Public Cloud backup & snapshot CRUD ops
│   ├── vps-list.test.ts                 # Return Full Objects / Max Items feature tests
│   ├── vps.operation.test.ts            # Non-regression tests for VPS operations
│   └── *.test.ts                        # Additional API client, pagination, retry, and spec-coverage tests
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

Each node follows the same three-export pattern: `description()`, optional `methodsListSearch()` for dynamic dropdowns, and a single async `execute()` function that switches on an operation parameter. All HTTP calls go through `ApiClient` (`getClient()` factory) which handles SHA1 signing automatically.

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

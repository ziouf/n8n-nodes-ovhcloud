# n8n-nodes-ovhcloud

[![n8n Nodes Base](https://img.shields.io/badge/n8n-nodes_base-orange.svg)](https://docs.n8n.io/integrations/#community-nodes)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**n8n-nodes-ovhcloud** is a community node for [n8n](https://n8n.io/) that enables seamless integration with OVHcloud APIs. It provides comprehensive functionality for managing OVH services including dedicated servers, VPS, email domains, and more—all from within your n8n workflows.

> **Note**: n8n is a workflow automation platform released under the [FairCode license](https://docs.n8n.io/sustainable-use-license/).

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage Examples](#usage-examples)
- [Troubleshooting](#troubleshooting)
- [Development](#development)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Resources](#resources)

---

## Features

### Core Resources

| Resource              | Operations                                                               | Description                                                       |
| --------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| **Me**                | Get Info, List Bills, Get Bill, Get Debt Account, List Orders, Get Order | Manage your OVH account, billing, and orders                      |
| **Services**          | List, Get, Get Options, Get Forms, Get Upgrades                          | Discover and manage OVH services across all product lines         |
| **Email**             | List Domains, Get Domain                                                 | Manage email domains and configurations                           |
| **VPS**               | List, Get, Edit, Abort Snapshot, and 26+ sub-resources                   | Full VPS management — see [VPS Sub-Resources](#vps-sub-resources) |
| **Domain**            | List, Get                                                                | List and retrieve domain details                                  |
| **Dedicated**         | List, Get                                                                | List and retrieve dedicated server details                        |
| **IP Load Balancing** | List, Get                                                                | List and retrieve IP Load Balancer details                        |
| **IP**                | List, Get                                                                | List and retrieve IP block details                                |
| **vRack**             | List, Get                                                                | List and retrieve vRack private network details                   |
| **SMS**               | List, Get                                                                | List and retrieve SMS service details                             |
| **SSL**               | List, Get                                                                | List and retrieve SSL gateway service details                     |
| **Hosting**           | List, Get                                                                | List and retrieve private database hosting details                |
| **Dedicated Cloud**   | List, Get                                                                | List and retrieve Dedicated Cloud (VMware) details                |
| **DBaaS**             | List, Get                                                                | List and retrieve DBaaS log service details                       |

### VPS Sub-Resources

The VPS resource includes 26+ sub-resources for comprehensive virtual server management:

| Sub-Resource              | Operations                                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------------------- |
| **VPS**                   | List, Get, Edit, Abort Snapshot                                                                     |
| **Disks**                 | List, Get, Update, Get Monitoring, Get Usage                                                        |
| **Snapshot**              | Create, Get, Update, Delete, Revert, Download                                                       |
| **Power**                 | Start, Stop, Reboot                                                                                 |
| **IPs**                   | List, Get, Release, Update                                                                          |
| **Automated Backup**      | Get, List Attached, Detach, Reschedule, Restore, List Restore Points                                |
| **Backup FTP**            | Get, List ACLs, Create ACL, Delete ACL, Get ACL, Update ACL, Set Password, List Authorizable Blocks |
| **Console**               | Get Console URL, Open VNC Access                                                                    |
| **Datacenter**            | Get, List by Country                                                                                |
| **Distribution**          | Get, List Software, Get Software                                                                    |
| **Images**                | List Available, Get Current, Get Details                                                            |
| **Migration 2020**        | Get Status, Cancel, Request, Update                                                                 |
| **Models**                | List                                                                                                |
| **Option**                | List Options, Get Option                                                                            |
| **Password**              | Set Root Password                                                                                   |
| **Reinstall**             | Reinstall VPS                                                                                       |
| **Secondary DNS Domains** | List, Create, Get, Delete, Get Name Server, Get Available Name Server                               |
| **Service Infos**         | Get, Update                                                                                         |
| **Status**                | Get Status                                                                                          |
| **Tasks**                 | List, Get                                                                                           |
| **Templates**             | List, Get, List Software, Get Software                                                              |
| **Termination**           | Request Termination                                                                                 |
| **Confirm Termination**   | Confirm Termination                                                                                 |
| **Contact Change**        | Change Admin, Billing, or Tech Contact                                                              |
| **Veeam Backup**          | Get, List Restore Points, Get Restore Point, Restore, Get Restored Backup, Delete Restored Backup   |
| **IP Country Available**  | Get Available Countries                                                                             |
| **Available Upgrade**     | Get Available Upgrades                                                                              |

### Additional Capabilities

- **Multi-endpoint support**: OVH Europe/Canada/USA, SoYouStart, Kimsufi
- **OAuth signature authentication**: Secure SHA1-based signature algorithm
- **Dynamic list selection**: Auto-populate dropdowns with live data (service IDs, domains, VPS names)
- **Extensive API coverage**: 14 top-level resources with 60+ total operations

---

## Prerequisites

Before using this node, ensure you have:

1. **OVHcloud Account**: A valid OVHcloud account with API access enabled
2. **API Credentials**: Application Key, Application Secret, and Consumer Key (see [Configuration](#configuration))
3. **n8n Installation**: n8n version 1.60.0 or higher

---

## Installation

### Method 1: Using n8n UI

1. Open n8n and navigate to **Settings** > **Community Nodes**
2. Click **Install**
3. Search for `n8n-nodes-ovhcloud`
4. Click **Install** and restart n8n when prompted

### Method 2: Manual Installation

```bash
# In your n8n installation directory
npm install n8n-nodes-ovhcloud
```

> **Restart n8n** after installation for changes to take effect.

### Method 3: Development Installation

For contributing or development purposes:

```bash
git clone https://github.com/cyril-marin/n8n-nodes-ovhcloud.git
cd n8n-nodes-ovhcloud
npm install
npm run build
```

---

## Configuration

### Step 1: Create an OVH API Application

1. Visit the [OVH API Console](https://api.ovh.com/console/)
2. Click **Create Application**
3. Fill in:
   - **Application Name**: Descriptive name (e.g., "n8n-integration")
   - **Application Description**: Brief description of usage
   - **Access rights**: Select the permissions you need (see [Permissions](#permissions))

4. Click **Create Application**
5. **Note down your credentials**:
   - `Application Key` (starts with `...`)
   - `Application Secret` (starts with `...`)

### Step 2: Authorize Your Application

1. In the application details, click **Create a Consumer Key**
2. Select the desired permissions (see [Permissions](#permissions))
3. Click **Create**
4. Authorize the request in your browser
5. **Note down your `Consumer Key`**

### Step 3: Configure Credentials in n8n

1. In n8n, go to **Settings** > **Credentials** > **New**
2. Select **OVH API**
3. Fill in the fields:

| Field                  | Value                | Description        |
| ---------------------- | -------------------- | ------------------ |
| **Endpoint**           | `eu.api.ovh.com/1.0` | OVH cloud endpoint |
| **Application Key**    | `...`                | From Step 1        |
| **Application Secret** | `...`                | From Step 1        |
| **Consumer Key**       | `...`                | From Step 2        |

1. Click **Save**

### Permissions

The following permissions are typically required for full functionality:

```text
GET /me
GET /me/bill
GET /me/bill/*
GET /me/debtAccount
GET /me/order
GET /me/order/*

GET /services
GET /services/*

GET /email/domain
GET /email/domain/*

GET /vps
GET /vps/*
GET /vps/*/snapshot
POST /vps/*/snapshot
GET /vps/*/disks
GET /vps/*/disks/*

GET /domain
GET /domain/*

GET /dedicated/server
GET /dedicated/server/*

GET /ipLoadbalancing
GET /ipLoadbalancing/*

GET /ip
GET /ip/*

GET /vrack
GET /vrack/*

GET /sms
GET /sms/*

GET /ssl
GET /ssl/*

GET /hosting/privateDatabase
GET /hosting/privateDatabase/*

GET /dedicatedCloud
GET /dedicatedCloud/*

GET /dbaas/logs
GET /dbaas/logs/*
```

> **Tip**: Start with minimal permissions and add more as needed following the principle of least privilege.

### Endpoints

Choose the appropriate endpoint based on your OVH account region:

| Endpoint                    | Region                   |
| --------------------------- | ------------------------ |
| `eu.api.ovh.com/1.0`        | OVH Europe               |
| `ca.api.ovh.com/1.0`        | OVH Canada               |
| `api.us.ovhcloud.com/1.0`   | OVH USA                  |
| `eu.api.soyoustart.com/1.0` | SoYouStart Europe        |
| `ca.api.soyoustart.com/1.0` | SoYouStart North America |
| `eu.api.kimsufi.com/1.0`    | Kimsufi Europe           |
| `ca.api.kimsufi.com/1.0`    | Kimsufi North America    |

---

## Usage Examples

### Example 1: List All VPS Services

**Use Case**: Automatically discover your VPS instances for monitoring or backup workflows.

#### Configuration

1. **Node**: Add "OVH Cloud" node to workflow
2. **Resource**: `VPS`
3. **Operation**: `List`
4. **Credentials**: Select your OVH API credentials

#### Expected Output

```json
[
    {
        "json": {
            "serviceId": "vps1234567",
            "displayName": "vps-display-name",
            "cloudProject": "project-name",
            "state": "running",
            "plan": "vps-2024-virtual-2"
        }
    },
    {
        "json": {
            "serviceId": "vps8901234",
            "displayName": "vps-second",
            "cloudProject": "project-name",
            "state": "stopped",
            "plan": "vps-2024-virtual-4"
        }
    }
]
```

---

### Example 2: Get VPS Details and Create Snapshot

**Use Case**: Create daily snapshots of critical VPS instances.

#### Configuration

1. **Node**: `OVH Cloud` > `VPS` > `Get`
   - **Service Name**: Select from list (e.g., `vps1234567`)
   - **Credentials**: OVH API credentials

2. **Node**: `OVH Cloud` > `VPS` > `Snapshot` > `Create`
   - **Service Name**: Use expression `={{ $json.serviceId }}` to reuse VPS ID
   - **Description**: `Daily backup - {{ $datetime.now().toISODate() }}`
   - **Credentials**: OVH API credentials

#### Output Structure

**Get VPS Details**:

```json
{
    "json": {
        "serviceId": "vps1234567",
        "displayName": "vps-display-name",
        "state": "running",
        "plan": "vps-2024-virtual-2",
        "ipAddresses": ["123.456.789.012"]
    }
}
```

**Create Snapshot**:

```json
{
    "json": {
        "description": "Daily backup - 2026-03-26",
        "id": "snap-abcdef12",
        "state": "in_progress",
        "size": 0
    }
}
```

---

### Example 3: List All Email Domains

**Use Case**: Audit email domains owned by your OVH account.

#### Configuration

1. **Node**: `OVH Cloud` > `Email` > `List Domains`
2. **Credentials**: OVH API credentials

#### Expected Output

```json
[
    {
        "json": {
            "displayName": "example.com",
            "domain": "example.com",
            "techContact": "user123"
        }
    },
    {
        "json": {
            "displayName": "my-business.net",
            "domain": "my-business.net",
            "techContact": "user456"
        }
    }
]
```

---

### Example 4: Get YourOVH Account Information

**Use Case**: Retrieve account details for notifications or monitoring.

#### Configuration

1. **Node**: `OVH Cloud` > `Me` > `My Account` > `Get My Info`
2. **Credentials**: OVH API credentials

#### Output

```json
{
    "json": {
        "email": "user@example.com",
        "country": "fr",
        "currency": "eur",
        "lang": "fr"
    }
}
```

---

### Example 5: List All Bills with Filtering

**Use Case**: Create monthly expense reports.

#### Configuration

1. **Node**: `OVH Cloud` > `Me` > `Bills` > `List Bills`
2. **Filters**:
   - **Category**: `purchase-web` (web hosting bills only)
   - **Date From**: `2026-03-01`
   - **Date To**: `2026-03-31`
3. **Credentials**: OVH API credentials

#### Output Structure

```json
[
    {
        "json": {
            "billId": "bill-123456",
            "creationDate": "2026-03-01T00:00:00Z",
            "date": "2026-03-01T00:00:00Z",
            "description": "Web hosting - March 2026",
            "totalWithTax": {
                "value": 12.99,
                "currency": "EUR"
            },
            "status": "paid"
        }
    }
]
```

---

### Example 6: List Services by Route

**Use Case**: Find all hosting web services for maintenance.

#### Configuration

1. **Node**: `OVH Cloud` > `Services` > `List Services`
2. **Filters**:
   - **Route**: `/hosting/web`
   - **Sort By**: `serviceId` (ascending)
3. **Credentials**: OVH API credentials

#### Output

```json
[
    {
        "json": {
            "serviceId": "webhosting123",
            "displayName": "webhosting123.ovh.net",
            "routes": ["/hosting/web"]
        }
    }
]
```

---

## Troubleshooting

### Common Errors

| Error                     | Cause                          | Solution                                              |
| ------------------------- | ------------------------------ | ----------------------------------------------------- |
| `401 Unauthorized`        | Invalid or expired credentials | Regenerate API credentials and update in n8n          |
| `403 Forbidden`           | Insufficient permissions       | Add required permissions to your API application      |
| `404 Not Found`           | Service ID does not exist      | Verify service ID and ensure service is active in OVH |
| `429 Too Many Requests`   | Rate limit exceeded            | Implement delay nodes between API calls               |
| `503 Service Unavailable` | OVH API maintenance            | Retry after some time or check OVH status page        |

### Debug Tips

1. **Enable Logging**: Use n8n's **Debug Node** to inspect intermediate outputs
2. **Test Credentials**: Use the test button in credential configuration
3. **Check OVH Status**: Visit [OVH Status](https://status.ovhcloud.com/) for outages
4. **Review Permissions**: Ensure your Consumer Key has the correct permissions

### API Rate Limits

OVH API enforces rate limits. If you encounter `429` errors:

- Add **Wait** nodes between API calls (recommended: 100ms+)
- Use **Batching** to group similar operations
- Implement **Retry** logic for transient failures

---

## Development

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x
- n8n CLI

### Setup

```bash
# Clone the repository
git clone https://github.com/cyril-marin/n8n-nodes-ovhcloud.git
cd n8n-nodes-ovhcloud

# Install dependencies
npm install

# Build the project
npm run build

# Start development mode (with hot reload)
npm run dev
```

### Available Scripts

| Command               | Description                           |
| --------------------- | ------------------------------------- |
| `npm run build`       | Compile TypeScript to `dist/`         |
| `npm run build:watch` | Watch mode for TypeScript             |
| `npm run dev`         | Development mode with hot reload      |
| `npm run lint`        | Run ESLint                            |
| `npm run lint:fix`    | Auto-fix linting issues               |
| `npm run release`     | Release new version (uses release-it) |

### Testing

1. Start development mode: `npm run dev`
2. Open n8n and add the OVH Cloud node
3. Configure your credentials
4. Test operations using sample workflows

> **Note**: Automated tests are currently not configured. Manual testing in n8n is required.

### Code Style

This project follows the [n8n Node Developer Guidelines](https://docs.n8n.io/integrations/creating-nodes/) with the following specific rules:

- **Indentation**: 2-space tabs (`useTabs: true`)
- **Semicolons**: Required (`semi: true`)
- **Quotes**: Single quotes preferred (`singleQuote: true`)
- **Line Width**: 100 characters max
- **TypeScript**: Strict mode enabled

---

## Project Structure

```
n8n-nodes-ovhcloud/
├── credentials/
│   └── OvhCloudApi.credentials.ts     # OVH API credential type
├── nodes/
│   └── OvhCloud/
│       ├── OvhCloud.node.ts           # Main node definition
│       ├── actions/                   # Resource operation handlers
│       │   ├── dbaas/                 # DBaaS log service actions
│       │   ├── dedicated/             # Dedicated server actions
│       │   ├── dedicatedCloud/        # Dedicated Cloud actions
│       │   ├── domain/                # Domain actions
│       │   ├── email/                 # Email resource actions
│       │   ├── hosting/               # Private database hosting actions
│       │   ├── ip/                    # IP block actions
│       │   ├── ipLoadbalancing/       # IP Load Balancing actions
│       │   ├── me/                    # Account/Me resource actions
│       │   ├── services/              # Services resource actions
│       │   ├── sms/                   # SMS service actions
│       │   ├── ssl/                   # SSL service actions
│       │   ├── vps/                   # VPS resource actions (26+ sub-resources)
│       │   └── vrack/                 # vRack actions
│       ├── methods/                   # Dynamic list search methods
│       │   ├── getServiceIds.method.ts
│       │   ├── getEmailDomains.method.ts
│       │   └── getVpsServices.method.ts
│       └── transport/                 # API communication layer
│           ├── ApiClient.ts           # API client interface
│           ├── ApiClientImpl.ts       # API client implementation
│           └── CredentialHolder.ts    # OVH signature authentication
├── icons/                             # Node and credential icons
├── dist/                              # Compiled output (generated)
├── .eslintrc.js                       # ESLint configuration
├── .prettierrc                        # Prettier configuration
└── package.json                       # Project metadata and dependencies
```

---

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**

   ```bash
   git fork https://github.com/cyril-marin/n8n-nodes-ovhcloud
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow the code style guidelines
   - Add comprehensive JSDoc comments
   - Update documentation as needed

4. **Commit your changes**

   ```bash
   git commit -m "feat: add amazing feature"
   ```

5. **Push to your branch**

   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Include examples if applicable
   - Reference any related issues

### Development Guidelines

- **Testing**: Ensure all operations work manually in n8n before submitting
- **Documentation**: Update this README with any new features or changes
- **Code Quality**: Run `npm run lint:fix` before committing
- **Commit Messages**: Use [Conventional Commits](https://www.conventionalcommits.org/) format

---

## License

[MIT](LICENSE)

Copyright (c) 2026 Cyril MARIN

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Resources

### Official Documentation

- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/#community-nodes)
- [OVHcloud API Documentation](https://docs.ovh.com/gb/en/api/)
- [OVH API Console](https://api.ovh.com/console/)
- [Manage OVHcloud API Tokens](https://help.ovhcloud.com/csm/en-manage-ovhcloud-api-tokens?id=kb_article_view&sysparm_article=KB0042784)

### Related Links

- [n8n Website](https://n8n.io/)
- [n8n Documentation](https://docs.n8n.io/)
- [n8n Community](https://community.n8n.io/)
- [OVHcloud Status](https://status.ovhcloud.com/)

### Community Nodes

- [n8n Nodes GitHub](https://github.com/n8n-nodes)
- [Community Node Templates](https://github.com/n8n-nodes/base)

---

## Acknowledgments

- Thanks to the n8n team for making this ecosystem possible
- OVHcloud API team for their comprehensive documentation
- Community contributors and users of this node

---

**Found this node useful?** 🌟 Star the repository on GitHub!

# n8n-nodes-ovhcloud

[![n8n Nodes Base](https://img.shields.io/badge/n8n-nodes_base-orange.svg)](https://docs.n8n.io/integrations/#community-nodes)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**n8n-nodes-ovhcloud** is a community node for [n8n](https://n8n.io/) that enables seamless integration with OVHcloud APIs. Manage 74 resources across V1 and V2 APIs — dedicated servers, VPS, domains, email, SMS, IP Load Balancers, Public Cloud, IAM, and more — all from within your n8n workflows.

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

- **74 resources** across V1 and V2 OVHcloud APIs
- **61 V1 resources** — compute, networking, email, storage, billing, security, and more
- **13 V2 resources** — Public Cloud, IAM, Web Hosting, Backup Services, OKMS, and more
- **50+ sub-resources** — DNS zones, SMS jobs, IP firewalls, vRack attachments, databases, etc.
- **Multi-endpoint support**: OVH Europe, Canada, USA, SoYouStart, Kimsufi
- **SHA1 signature authentication** for secure API requests
- **Dynamic list selection** — auto-populate dropdowns with live data

### Resource Categories

| Category              | Resources | Key Examples                                               |
| --------------------- | --------- | ---------------------------------------------------------- |
| **Compute**           | 8         | VPS (27 sub-resources), Dedicated Servers, Dedicated Cloud |
| **Networking**        | 9         | Domain, IP, IP Load Balancing, vRack, xDSL                 |
| **Email & Messaging** | 7         | Email, Exchange, MXplan, SMS, Telephony, FreeFax           |
| **Storage & Hosting** | 7         | Hosting, DBaaS, Ceph, NAS-HA, Storage                      |
| **Account & Billing** | 10        | Me, Services, Orders, Pricing, Support                     |
| **Security**          | 4         | Auth, SSL, SSL Gateway, Secret                             |
| **Licenses**          | 12        | cPanel, Plesk, Windows, Red Hat, and 8 more                |
| **V2 APIs**           | 13        | Public Cloud, IAM, Web Hosting, OKMS, Network Defense      |
| **Other**             | 4         | AllDom, CDN, Metrics, MS Services                          |

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

Add the **OVH Cloud** node to your workflow, select a resource and operation, and you're done.

See [workflow examples](docs/guides/examples.md) for common use cases.

---

## Development

```bash
git clone https://github.com/ziouf/n8n-nodes-ovhcloud.git
cd n8n-nodes-ovhcloud
npm install
npm run build
npm run dev          # Development mode with hot reload
npm test             # Run 177 unit tests
npm run lint         # Check code quality
npm run lint:fix     # Auto-fix linting issues
```

### Testing

The project includes **177 unit tests** across 7 test suites with 100% coverage on critical files (ApiClient, CredentialHolder, node routing):

```bash
npm test
```

### Project Structure

Each of the **74 OVHcloud resources** is an independent n8n node with its own directory:

```
n8n-nodes-ovhcloud/
├── credentials/
│   └── OvhCloudApi.credentials.ts      # OVH API credential type
├── nodes/
│   ├── OvhCloudVps/                    # Example: complex node (27 sub-resources)
│   │   ├── OvhCloudVps.node.ts          #   n8n node class
│   │   ├── index.ts                    #   description() + execute() router
│   │   ├── *.operation.ts              #   top-level operations (get, list, edit…)
│   │   └── resources/                  #   sub-resource directories
│   │       ├── automatedBackup/        #     each with its own operations
│   │       ├── datacenter/
│   │       ├── disks/
│   │       └── …                       #     (27 sub-resources total)
│   ├── OvhCloudDomain/                 # Example: mid-complexity node (24 sub-resources)
│   │   ├── OvhCloudDomain.node.ts
│   │   ├── index.ts
│   │   ├── *.operation.ts
│   │   └── resources/
│   │       ├── dnsZone/
│   │       ├── glueRecord/
│   │       └── …
│   ├── OvhCloudAllDom/                 # Example: simple node
│   │   ├── OvhCloudAllDom.node.ts
│   │   ├── index.ts
│   │   ├── *.operation.ts
│   │   └── resources/
│   └── …                               # 74 node directories total
├── shared/
│   ├── transport/                       # API client & authentication
│   │   ├── ApiClient.ts                 #   abstract interface
│   │   ├── ApiClientImpl.ts             #   HTTP implementation
│   │   └── CredentialHolder.ts          #   OVH SHA1 signature
│   ├── methods/                         # Dynamic list search methods
│   │   ├── getVpsServices.method.ts
│   │   ├── getEmailDomains.method.ts
│   │   └── …                            #   10 search methods
│   └── constants.ts
├── scripts/
│   ├── generate-node.sh                 # Scaffold a new node
│   ├── gen-api-docs.sh                  # Generate API documentation
│   └── get-api-description.sh           # Fetch OVH API specs
├── tests/                               # 177 unit tests across 7 suites
├── docs/
│   ├── README.md                        # Documentation index
│   ├── guides/                          # User-facing guides
│   ├── api-reference/                   # Categorized API documentation
│   └── api-specs/                       # Raw OVH API JSON specifications
├── icons/                               # Node icons
└── package.json
```

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

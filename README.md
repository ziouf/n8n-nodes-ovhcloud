# n8n-nodes-ovhcloud

[![n8n Nodes Base](https://img.shields.io/badge/n8n-nodes_base-orange.svg)](https://docs.n8n.io/integrations/#community-nodes)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**n8n-nodes-ovhcloud** is a community node for [n8n](https://n8n.io/) that enables seamless integration with OVHcloud APIs. Manage 81 resources across V1 and V2 APIs — dedicated servers, VPS, domains, email, SMS, IP Load Balancers, Public Cloud, IAM, and more — all from within your n8n workflows.

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

- **81 resources** across V1 and V2 OVHcloud APIs
- **68 V1 resources** — compute, networking, email, storage, billing, security, and more
- **13 V2 resources** — Public Cloud, IAM, Web Hosting, Backup Services, OKMS, and more
- **50+ sub-resources** — DNS zones, SMS jobs, IP firewalls, vRack attachments, databases, etc.
- **Multi-endpoint support**: OVH Europe, Canada, USA, SoYouStart, Kimsufi
- **SHA1 signature authentication** for secure API requests
- **Dynamic list selection** — auto-populate dropdowns with live data

### Resource Categories

| Category              | V1 Resources | Key Examples                                                |
| --------------------- | ------------ | ----------------------------------------------------------- |
| **Compute**           | 4            | VPS (26+ sub-resources), Dedicated Servers, Dedicated Cloud |
| **Networking**        | 4            | Domain, IP, IP Load Balancing, vRack                        |
| **Email & Messaging** | 4            | Email, SMS, Telephony, FreeFax                              |
| **Storage**           | 5            | Hosting, DBaaS, Veeam, Storage                              |
| **Account & Billing** | 5            | Me, Services, Orders, Pricing                               |
| **Security**          | 4            | Auth, SSL, SSL Gateway, Secret                              |
| **V2 APIs**           | 13           | Public Cloud, IAM, Web Hosting, OKMS, Network Defense       |
| **Other**             | 42           | Licenses (12 types), CDN, Metrics, Nutanix, and more        |

---

## Quick Start

### 1. Install

```bash
# Via n8n UI: Settings > Community Nodes > Install > n8n-nodes-ovhcloud
# Or manually:
npm install n8n-nodes-ovhcloud
```

### 2. Configure

1. Create API credentials at [api.ovh.com/console](https://api.ovh.com/console/)
2. Add **OVH API** credentials in n8n (Application Key, Application Secret, Consumer Key)
3. Choose your endpoint (Europe, Canada, USA, SoYouStart, Kimsufi)

See the [full authentication guide](docs/guides/authentication-guide.md) for detailed steps.

### 3. Use

Add the **OVH Cloud** node to your workflow, select a resource and operation, and you're done.

See [workflow examples](docs/guides/examples.md) for common use cases.

---

## Development

```bash
git clone https://github.com/cyril-marin/n8n-nodes-ovhcloud.git
cd n8n-nodes-ovhcloud
npm install
npm run build
npm run dev          # Development mode with hot reload
npm test             # Run 223 unit tests
npm run lint         # Check code quality
npm run lint:fix     # Auto-fix linting issues
```

### Testing

The project includes **223 unit tests** across 7 test suites with 100% coverage on critical files (ApiClient, CredentialHolder, node routing):

```bash
npm test
```

### Project Structure

```
n8n-nodes-ovhcloud/
├── credentials/
│   └── OvhCloudApi.credentials.ts
├── nodes/
│   └── OvhCloud/
│       ├── OvhCloud.node.ts           # Main node (81 resources)
│       ├── actions/                   # 68 V1 resource handlers
│       │   ├── allDom/ through xdsl/  # 54 new top-level resources
│       │   ├── dbaas/                 # DBaaS + sub-resources
│       │   ├── dedicated/             # Dedicated + 8 sub-resources
│       │   ├── domain/                # Domain + 6 sub-resources
│       │   ├── email/                 # Email domains
│       │   ├── hosting/               # Hosting + 4 sub-resources
│       │   ├── ip/                    # IP + 7 sub-resources
│       │   ├── me/                    # Me + 6 sub-resources
│       │   ├── services/              # Services + 5 sub-resources
│       │   ├── sms/                   # SMS + 8 sub-resources
│       │   ├── vps/                   # VPS + 26 sub-resources
│       │   └── vrack/                 # vRack + 6 sub-resources
│       ├── actionsV2/                 # 13 V2 API resource handlers
│       ├── methods/                   # Dynamic list search methods
│       └── transport/                 # API client & credential handling
├── docs/
│   ├── README.md                      # Documentation index
│   ├── _shared/                       # Shared reference content
│   ├── guides/                        # User-facing guides
│   ├── api-reference/                 # Categorized API documentation
│   └── api-specs/                     # Raw OVH API JSON specifications
├── tests/                             # Unit tests (223 tests)
├── icons/                             # Node icons
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

- [OVH API Console](https://api.ovh.com/console/)
- [OVHcloud API Documentation](https://docs.ovh.com/gb/en/api/)
- [n8n Community Nodes](https://docs.n8n.io/integrations/#community-nodes)
- [OVHcloud Status](https://status.ovhcloud.com/)

---

**Found this node useful?** 🌟 Star the repository on GitHub!

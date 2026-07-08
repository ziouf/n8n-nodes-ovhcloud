# n8n-nodes-ovhcloud

[![n8n Nodes Base](https://img.shields.io/badge/n8n-nodes_base-orange.svg)](https://docs.n8n.io/integrations/#community-nodes)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**n8n-nodes-ovhcloud** is a community node for [n8n](https://n8n.io/) that enables seamless integration with OVHcloud APIs. Manage OVHcloud services — web hosting, dedicated services, and more — all from within your n8n workflows.

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

- **Web Hosting** — manage web hosting services via `/hosting/web` API
- **Services** — manage OVHcloud services via `/service` API
- **Multi-endpoint support**: OVH Europe, Canada, USA, SoYouStart, Kimsufi
- **SHA1 signature authentication** for secure API requests
- **Dynamic list selection** — auto-populate dropdowns with live data

### Available Nodes

| Node                  | Description                                           | Operations |
| --------------------- | ----------------------------------------------------- | ---------- |
| **OVH Cloud Hosting Web** | Manage web hosting services (databases, domains, crons, users, SSL, etc.) | 25 |
| **OVH Cloud Service**       | Manage OVHcloud services (get, list, renews, reopen, suspend, terminate, update) | 8 |

### Web Hosting Operations

| Category            | Operations |
| ------------------- | ---------- |
| **General**         | Get, List, Find by Domain |
| **Attached Domains** | List attached domains, Get attached domain |
| **Databases**       | List databases, Get database |
| **Crons**           | List crons, Get cron |
| **Users**           | List users, Get user |
| **Tasks**           | List tasks |
| **Modules**         | List modules, Get module |
| **Runtimes**        | List runtimes |
| **Emails**          | Get email |
| **Env Vars**        | List env vars, Get env var |
| **SSL**             | Get SSL |
| **Service Infos**   | Get service infos |

### Service Operations

| Operation     | Description                                |
| ------------- | ------------------------------------------ |
| **Get**       | Get service details                        |
| **List**      | List all services                          |
| **List Renews** | List possible renews for a service         |
| **Reopen**    | Reopen a terminated service                 |
| **Suspend**   | Suspend a service                           |
| **Terminate** | Terminate a service                         |
| **Update**    | Update service configuration                |

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
│   └── OvhCloudApi.credentials.ts      # OVH API credential type
├── nodes/
│   ├── OvhCloudHosting/                # Web Hosting node (25 operations)
│   │   ├── OvhCloudHosting.node.ts      # n8n node class
│   │   ├── index.ts                    # description() + execute() router
│   │   └── *.operation.ts              # operation implementations
│   ├── OvhCloudService/                # Service node (8 operations)
│   │   ├── OvhCloudService.node.ts      # n8n node class
│   │   ├── index.ts                    # description() + execute() router
│   │   └── *.operation.ts              # operation implementations
│   └── shared/
│       ├── transport/                   # API client & authentication
│       │   ├── ApiClient.ts             #   abstract interface
│       │   ├── ApiClientImpl.ts         #   HTTP implementation
│       │   └── CredentialHolder.ts      #   OVH SHA1 signature
│       └── constants.ts
├── scripts/
│   ├── generate-node.sh                 # Scaffold a new node
│   ├── gen-api-docs.sh                  # Generate API documentation
│   └── get-api-description.sh           # Fetch OVH API specs
├── tests/                               # Unit tests
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

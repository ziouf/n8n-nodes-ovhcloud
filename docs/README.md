# OVH Cloud Node Documentation

Welcome to the documentation for the **n8n-nodes-ovhcloud** community node.

## Quick Start

- [Getting Started Guide](guides/getting-started.md) — Installation, configuration, and your first workflow
- [Authentication Guide](guides/authentication-guide.md) — Step-by-step API credential setup
- [Troubleshooting](guides/troubleshooting.md) — Common errors and solutions
- [Examples](guides/examples.md) — Real-world workflow examples

## API Reference

### V1 API (68 resources)

- [V1 API Index](api-reference/v1/_index.md) — Complete list of all V1 endpoints

Organized by category:

- **Compute** — [VPS](api-reference/v1/compute/vps.md), [Dedicated Servers](api-reference/v1/compute/dedicated.md), [Dedicated Cloud](api-reference/v1/compute/dedicatedCloud.md), [Cloud](api-reference/v1/compute/cloud.md)
- **Networking** — [Domain](api-reference/v1/networking/domain.md), [IP](api-reference/v1/networking/ip.md), [IP Load Balancing](api-reference/v1/networking/ipLoadbalancing.md), [vRack](api-reference/v1/networking/vrack.md), [Connectivity](api-reference/v1/networking/connectivity.md)
- **Email & Messaging** — [Email](api-reference/v1/email-messaging/email.md), [SMS](api-reference/v1/email-messaging/sms.md), [Telephony](api-reference/v1/email-messaging/telephony.md), [FreeFax](api-reference/v1/email-messaging/freefax.md)
- **Storage** — [Hosting](api-reference/v1/storage/hosting.md), [Storage](api-reference/v1/storage/storage.md), [DBaaS](api-reference/v1/storage/dbaas.md), [Veeam](api-reference/v1/storage/veeam.md)
- **Account & Billing** — [Me](api-reference/v1/account-billing/me.md), [Services](api-reference/v1/account-billing/services.md), [Order](api-reference/v1/account-billing/order.md), [Price](api-reference/v1/account-billing/price.md)
- **Security** — [Auth](api-reference/v1/security/auth.md), [SSL](api-reference/v1/security/ssl.md), [SSL Gateway](api-reference/v1/security/sslGateway.md), [Secret](api-reference/v1/security/secret.md)
- **Other** — [All other V1 resources](api-reference/v1/other/)

### V2 API (13 resources)

- [V2 API Index](api-reference/v2/_index.md) — Complete list of all V2 endpoints

Organized by category:

- **Identity** — [IAM](api-reference/v2/identity/iam.md)
- **Cloud** — [Public Cloud](api-reference/v2/cloud/publicCloud.md)
- **Hosting** — [Web Hosting](api-reference/v2/hosting/webhosting.md), [Managed CMS](api-reference/v2/hosting/managedCMS.md), [Zimbra](api-reference/v2/hosting/zimbra.md)
- **Infrastructure** — [Backup Services](api-reference/v2/infrastructure/backupServices.md), [Network Defense](api-reference/v2/infrastructure/networkDefense.md), [vRack Services](api-reference/v2/infrastructure/vrackServices.md), [VMware Cloud Director](api-reference/v2/infrastructure/vmwareCloudDirector.md), [OKMS](api-reference/v2/infrastructure/okms.md)
- **Reference** — [Domain](api-reference/v2/reference/domain.md), [Location](api-reference/v2/reference/location.md), [Commercial Catalog](api-reference/v2/reference/commercialCatalog.md), [Notification](api-reference/v2/reference/notification.md)

## Shared Reference Material

- [Authentication](_shared/authentication.md) — Credential setup and signing
- [Error Handling](_shared/error-handling.md) — Common error codes and patterns
- [Type Safety](_shared/type-safety.md) — TypeScript conventions
- [Testing](_shared/testing.md) — How to test nodes
- [Security](_shared/security.md) — Security best practices
- [Common Models](_shared/common-models.md) — Shared type definitions

## API Specifications

Raw OVH API specification data (JSON) is available in [api-specs/](api-specs/).

## External Resources

- [OVH API Console](https://api.ovh.com/console/)
- [OVHcloud API Documentation](https://docs.ovh.com/gb/en/api/)
- [n8n Community Nodes](https://docs.n8n.io/integrations/#community-nodes)

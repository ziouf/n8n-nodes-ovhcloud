# OVHcloud SSL Gateway API Documentation

This document describes the operations available for the **SSL Gateway** service via the OVHcloud API v1.

## Base URL

```
https://eu.api.ovh.com/v1
```

## Authentication

Most operations require authentication. The exceptions are explicitly marked as `noAuthentication: true`.

### Required IAM Actions

- `sslGateway:apiovh:get` (for most operations)
- `sslGateway:apiovh:changeContact` (for contact changes)
- `sslGateway:apiovh:domain/get` (for domain operations)
- `sslGateway:apiovh:domain/create` (for attaching domains)
- `sslGateway:apiovh:server/create` (for adding servers)
- `sslGateway:apiovh:server/get` (for server operations)
- `sslGateway:apiovh:server/edit` (for editing servers)
- `sslGateway:apiovh:task/get` (for task operations)
- `sslGateway:apiovh:terminate` (for termination)

## API Status

All operations are currently in **Beta** version (`apiStatus: BETA`).

---

## Operations Overview

### List SSL Gateways

**Path:** `/sslGateway`

**Method:** `GET`

**Description:** List of your SSL Gateways

**Parameters:**

| Parameter | Type                                  | Required | Description                  |
| --------- | ------------------------------------- | -------- | ---------------------------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | No       | Filter resources on IAM tags |

**Response Type:** `string[]`

**Example:**

```json
{
    "allowedSource": ["192.0.2.0/24", "203.0.113.0/24"],
    "displayName": "My SSL Gateway",
    "hsts": true,
    "httpsRedirect": true,
    "ipv4": "192.0.2.123",
    "ipv6": "2001:db8::1",
    "metricsToken": "your-metrics-token",
    "offer": "advanced",
    "reverse": "your-reverse.example.com",
    "serviceName": "ssl-gateway-123456",
    "sslConfiguration": "intermediate",
    "state": "ok",
    "zones": ["fr", "eu"]
}
```

---

### Get Available Zones for SSL Gateway

**Path:** `/sslGateway/availableZones`

**Method:** `GET`

**Description:** List of zones available for an SSL Gateway

**Parameters:** None

**Response Type:** `string[]`

**Example:**

```json
["fr", "eu", "ca", "de"]
```

---

### Check Domain Eligibility

**Path:** `/sslGateway/eligibility`

**Method:** `GET`

**Description:** Check domain eligibility. Returns a list of eligible IPs for the domain.

**Parameters:**

| Parameter | Type     | Required | Description                     |
| --------- | -------- | -------- | ------------------------------- |
| `domain`  | `string` | Yes      | Domain to check eligibility for |

**Response Type:** `sslGateway.EligibilityStatus`

**Example:**

```json
{
    "domain": "example.com",
    "ip6s": ["2001:db8::1", "2001:db8::2"],
    "ips": ["192.0.2.1", "192.0.2.2"],
    "isHostedByOvh": false
}
```

---

### Get SSL Gateway Properties

**Path:** `/sslGateway/{serviceName}`

**Method:** `GET`

**Description:** Get properties of a specific SSL Gateway

**Parameters:**

| Parameter     | Type     | Required | Description                           |
| ------------- | -------- | -------- | ------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of your SSL Gateway |

**Response Type:** `sslGateway.SslGatewayWithIAM`

**Example:**

```json
{
    "allowedSource": ["192.0.2.0/24"],
    "displayName": "My SSL Gateway",
    "hsts": true,
    "httpsRedirect": true,
    "iam": {
        "displayName": "ssl-gateway-123456",
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "state": "OK",
        "tags": {},
        "urn": "ovh:sslGateway:123456"
    },
    "ipv4": "192.0.2.123",
    "ipv6": "2001:db8::1",
    "metricsToken": "your-metrics-token",
    "offer": "advanced",
    "reverse": "reverse.example.com",
    "serverHttps": true,
    "serviceName": "ssl-gateway-123456",
    "sslConfiguration": "intermediate",
    "state": "ok",
    "zones": ["fr"]
}
```

---

### Update SSL Gateway Properties

**Path:** `/sslGateway/{serviceName}`

**Method:** `PUT`

**Description:** Alter properties of a specific SSL Gateway

**Parameters:**

| Parameter     | Type                    | Required | Description                           |
| ------------- | ----------------------- | -------- | ------------------------------------- |
| `serviceName` | `string`                | Yes      | The internal name of your SSL Gateway |
| `body`        | `sslGateway.SslGateway` | Yes      | New object properties                 |

**Response Type:** `void`

**Example:**

```json
{
    "allowedSource": ["192.0.2.0/24"],
    "displayName": "Updated SSL Gateway Name",
    "hsts": true,
    "httpsRedirect": true,
    "reverse": "updated.reverse.example.com",
    "serverHttps": true,
    "sslConfiguration": "modern"
}
```

---

### Change SSL Gateway Contacts

**Path:** `/sslGateway/{serviceName}/changeContact`

**Method:** `POST`

**Description:** Change the admin, billing, or tech contacts for your SSL Gateway

**Parameters:**

| Parameter        | Type     | Required | Description                              |
| ---------------- | -------- | -------- | ---------------------------------------- |
| `serviceName`    | `string` | Yes      | The internal name of your SSL Gateway    |
| `contactAdmin`   | `string` | No       | The new admin contact (OVH Account ID)   |
| `contactBilling` | `string` | No       | The new billing contact (OVH Account ID) |
| `contactTech`    | `string` | No       | The new tech contact (OVH Account ID)    |

**Response Type:** `long[]` (task IDs)

**Example:**

```json
{
    "contactAdmin": "123456",
    "contactBilling": "789012",
    "contactTech": "345678"
}
```

---

### Terminate SSL Gateway

**Path:** `/sslGateway/{serviceName}/terminate`

**Method:** `POST`

**Description:** Request termination of your SSL Gateway. The admin contact will receive a termination token via email to confirm the deletion.

**Parameters:**

| Parameter     | Type                               | Required | Description                               |
| ------------- | ---------------------------------- | -------- | ----------------------------------------- |
| `serviceName` | `string`                           | Yes      | The internal name of your SSL Gateway     |
| `commentary`  | `string`                           | No       | Commentary about your termination request |
| `futureUse`   | `service.TerminationFutureUseEnum` | No       | What you plan to do after termination     |
| `reason`      | `service.TerminationReasonEnum`    | No       | Reason for termination                    |
| `token`       | `string`                           | Yes      | The termination token sent by email       |

**Response Type:** `string` (confirmation message)

**Example:**

```json
{
    "commentary": "No longer needed",
    "futureUse": "NOT_REPLACING_SERVICE",
    "reason": "NOT_NEEDED_ANYMORE",
    "token": "TERMINATION_TOKEN_RECEIVED_BY_EMAIL"
}
```

---

### Confirm SSL Gateway Termination

**Path:** `/sslGateway/{serviceName}/confirmTermination`

**Method:** `POST`

**Description:** Confirm termination of your SSL Gateway service

**Parameters:**

| Parameter     | Type                               | Required | Description                               |
| ------------- | ---------------------------------- | -------- | ----------------------------------------- |
| `serviceName` | `string`                           | Yes      | The internal name of your SSL Gateway     |
| `commentary`  | `string`                           | No       | Commentary about your termination request |
| `futureUse`   | `service.TerminationFutureUseEnum` | No       | What you plan to do after termination     |
| `reason`      | `service.TerminationReasonEnum`    | No       | Reason for termination                    |
| `token`       | `string`                           | Yes      | The termination token sent by email       |

**Response Type:** `string`

**Example:**

```json
{
    "commentary": "Migrating to competitor",
    "futureUse": "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR",
    "reason": "MIGRATED_TO_COMPETITOR",
    "token": "TERMINATION_TOKEN_RECEIVED_BY_EMAIL"
}
```

---

### List Domains Attached to SSL Gateway

**Path:** `/sslGateway/{serviceName}/domain`

**Method:** `GET`

**Description:** List domains attached to your SSL Gateway

**Parameters:**

| Parameter     | Type     | Required | Description                           |
| ------------- | -------- | -------- | ------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of your SSL Gateway |

**Response Type:** `long[]` (domain IDs)

**Example:**

```json
[1, 2, 3]
```

---

### Get Domain Attached to SSL Gateway

**Path:** `/sslGateway/{serviceName}/domain/{id}`

**Method:** `GET`

**Description:** Get properties of a specific domain attached to your SSL Gateway

**Parameters:**

| Parameter     | Type     | Required | Description                           |
| ------------- | -------- | -------- | ------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of your SSL Gateway |
| `id`          | `long`   | Yes      | ID of the domain                      |

**Response Type:** `sslGateway.Domain`

**Example:**

```json
{
    "domain": "example.com",
    "id": 1,
    "state": "ok"
}
```

---

### Attach Domain to SSL Gateway

**Path:** `/sslGateway/{serviceName}/domain`

**Method:** `POST`

**Description:** Attach a new domain to your SSL Gateway

**Parameters:**

| Parameter     | Type     | Required | Description                           |
| ------------- | -------- | -------- | ------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of your SSL Gateway |
| `domain`      | `string` | Yes      | Domain to attach                      |

**Response Type:** `sslGateway.Domain`

**Example:**

```json
{
    "domain": "new-domain.com",
    "id": 4,
    "state": "creating"
}
```

---

### Detach Domain from SSL Gateway

**Path:** `/sslGateway/{serviceName}/domain/{id}`

**Method:** `DELETE`

**Description:** Detach a domain from your SSL Gateway

**Parameters:**

| Parameter     | Type     | Required | Description                           |
| ------------- | -------- | -------- | ------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of your SSL Gateway |
| `id`          | `long`   | Yes      | ID of the domain to detach            |

**Response Type:** `void`

**Example:** None (empty response)

---

### List Servers Attached to SSL Gateway

**Path:** `/sslGateway/{serviceName}/server`

**Method:** `GET`

**Description:** List servers attached to your SSL Gateway

**Parameters:**

| Parameter     | Type     | Required | Description                           |
| ------------- | -------- | -------- | ------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of your SSL Gateway |

**Response Type:** `long[]` (server IDs)

**Example:**

```json
[1, 2, 3]
```

---

### Add Server to SSL Gateway

**Path:** `/sslGateway/{serviceName}/server`

**Method:** `POST`

**Description:** Add a new server to your SSL Gateway

**Parameters:**

| Parameter     | Type     | Required | Description                           |
| ------------- | -------- | -------- | ------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of your SSL Gateway |
| `address`     | `ip`     | Yes      | IPv4 address of the server            |
| `port`        | `long`   | Yes      | Port of the server                    |

**Response Type:** `sslGateway.Server`

**Example:**

```json
{
    "address": "192.0.2.100",
    "id": 4,
    "port": 443,
    "state": "ok"
}
```

---

### Get Server Attached to SSL Gateway

**Path:** `/sslGateway/{serviceName}/server/{id}`

**Method:** `GET`

**Description:** Get properties of a specific server attached to your SSL Gateway

**Parameters:**

| Parameter     | Type     | Required | Description                           |
| ------------- | -------- | -------- | ------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of your SSL Gateway |
| `id`          | `long`   | Yes      | ID of the server                      |

**Response Type:** `sslGateway.Server`

**Example:**

```json
{
    "address": "192.0.2.100",
    "id": 4,
    "port": 443,
    "state": "ok"
}
```

---

### Update Server Attached to SSL Gateway

**Path:** `/sslGateway/{serviceName}/server/{id}`

**Method:** `PUT`

**Description:** Update properties of a specific server attached to your SSL Gateway

**Parameters:**

| Parameter     | Type                | Required | Description                           |
| ------------- | ------------------- | -------- | ------------------------------------- |
| `serviceName` | `string`            | Yes      | The internal name of your SSL Gateway |
| `id`          | `long`              | Yes      | ID of the server to update            |
| `body``       | `sslGateway.Server` | Yes      | New server properties                 |

**Response Type:** `void`

**Example:**

```json
{
    "address": "192.0.2.100",
    "port": 8443,
    "state": "updating"
}
```

---

### Remove Server from SSL Gateway

**Path:** `/sslGateway/{serviceName}/server/{id}`

**Method:** `DELETE`

**Description:** Remove a server from your SSL Gateway

**Parameters:**

| Parameter     | Type     | Required | Description                           |
| ------------- | -------- | -------- | ------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of your SSL Gateway |
| `id`          | `long`   | Yes      | ID of the server to remove            |

**Response Type:** `void`

**Example:** None (empty response)

---

### List Tasks for SSL Gateway

**Path:** `/sslGateway/{serviceName}/task`

**Method:** `GET`

**Description:** List tasks associated with your SSL Gateway

**Parameters:**

| Parameter     | Type     | Required | Description                           |
| ------------- | -------- | -------- | ------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of your SSL Gateway |

**Response Type:** `long[]` (task IDs)

**Example:**

```json
[1, 2, 3]
```

---

### Get Task for SSL Gateway

**Path:** `/sslGateway/{serviceName}/task/{id}`

**Method:** `GET`

**Description:** Get properties of a specific task for your SSL Gateway

**Parameters:**

| Parameter     | Type     | Required | Description                           |
| ------------- | -------- | -------- | ------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of your SSL Gateway |
| `id`          | `long`   | Yes      | ID of the task                        |

**Response Type:** `sslGateway.Task`

**Example:**

```json
{
    "action": "addServer",
    "creationDate": "2026-03-31T12:00:00Z",
    "id": 1,
    "progress": 50,
    "status": "doing"
}
```

---

### List NAT IPs for SSL Gateway

**Path:** `/sslGateway/{serviceName}/natIp`

**Method:** `GET`

**Description:** List IP subnets used by OVH to NAT requests to your SSL Gateway backends

**Parameters:**

| Parameter     | Type     | Required | Description                           |
| ------------- | -------- | -------- | ------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of your SSL Gateway |

**Response Type:** `sslGateway.NatIps[]`

**Example:**

```json
[
    {
        "ip": ["192.0.2.0/24"],
        "zone": "fr"
    },
    {
        "ip": ["203.0.113.0/24"],
        "zone": "eu"
    }
]
```

---

### Renew SSL Certificate

**Path:** `/sslGateway/{serviceName}/renewCertificate`

**Method:** `POST`

**Description:** Renew SSL certificates for a domain attached to your SSL Gateway

**Parameters:**

| Parameter     | Type     | Required | Description                              |
| ------------- | -------- | -------- | ---------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of your SSL Gateway    |
| `domain`      | `string` | No       | Domain on which to renew the certificate |

**Response Type:** `string[]`

**Example:**

```json
["Certificate renewed for example.com"]
```

---

## Models Reference

### `sslGateway.EligibilityStatus`

Describes the eligibility status of a domain for SSL Gateway.

**Properties:**

| Property        | Type      | Description                         |
| --------------- | --------- | ----------------------------------- |
| `domain`        | `string`  | Customer domain name                |
| `ip6s`          | `ipv6[]`  | List of eligible IPv6 addresses     |
| `ips`           | `ipv4[]`  | List of eligible IPv4 addresses     |
| `isHostedByOvh` | `boolean` | Whether the domain is hosted by OVH |

---

### `sslGateway.SslGateway`

Represents your SSL Gateway.

**Properties:**

| Property           | Type                              | Description                                                            |
| ------------------ | --------------------------------- | ---------------------------------------------------------------------- |
| `allowedSource`    | `ipBlock[]`                       | Restrict SSL Gateway access to these IP blocks. No restriction if null |
| `displayName`      | `string`                          | Custom name of your SSL Gateway                                        |
| `hsts`             | `boolean`                         | Enable HSTS header                                                     |
| `httpsRedirect`    | `boolean`                         | Enable HTTPS redirect                                                  |
| `ipv4`             | `ipv4`                            | IPv4 address for your domain (A record)                                |
| `ipv6`             | `ipv6`                            | IPv6 address for your domain (AAAA record)                             |
| `metricsToken`     | `string`                          | Metrics token for SSL Gateway                                          |
| `offer`            | `sslGateway.OfferEnum`            | Current offer for your SSL Gateway                                     |
| `reverse`          | `string`                          | Custom reverse for your SSL Gateway                                    |
| `serviceName`      | `string`                          | Internal name of your SSL Gateway                                      |
| `serverHttps`      | `boolean`                         | Contact backend servers over HTTPS                                     |
| `sslConfiguration` | `sslGateway.SslConfigurationEnum` | SSL configuration type: `modern`, `intermediate`, or `internal`        |
| `state`            | `sslGateway.StateEnum`            | Current state of your SSL Gateway                                      |
| `zones`            | `string[]`                        | Zones of your SSL Gateway                                              |

---

### `sslGateway.SslGatewayWithIAM`

Represents your SSL Gateway with embedded IAM metadata.

**Properties:**

| Property           | Type                              | Description                                                            |
| ------------------ | --------------------------------- | ---------------------------------------------------------------------- |
| `allowedSource`    | `ipBlock[]`                       | Restrict SSL Gateway access to these IP blocks. No restriction if null |
| `displayName`      | `string`                          | Custom name of your SSL Gateway                                        |
| `hsts`             | `boolean`                         | Enable HSTS header                                                     |
| `httpsRedirect`    | `boolean`                         | Enable HTTPS redirect                                                  |
| `iam`              | `iam.ResourceMetadata`            | IAM resource metadata                                                  |
| `ipv4`             | `ipv4`                            | IPv4 address for your domain (A record)                                |
| `ipv6`             | `ipv6`                            | IPv6 address for your domain (AAAA record)                             |
| `metricsToken`     | `string`                          | Metrics token for SSL Gateway                                          |
| `offer`            | `sslGateway.OfferEnum`            | Current offer for your SSL Gateway                                     |
| `reverse`          | `string`                          | Custom reverse for your SSL Gateway                                    |
| `serviceName`      | `string`                          | Internal name of your SSL Gateway                                      |
| `serverHttps`      | `boolean`                         | Contact backend servers over HTTPS                                     |
| `sslConfiguration` | `sslGateway.SslConfigurationEnum` | SSL configuration type: `modern`, `intermediate`, or `internal`        |
| `state`            | `sslGateway.StateEnum`            | Current state of your SSL Gateway                                      |
| `zones`            | `string[]`                        | Zones of your SSL Gateway                                              |

---

### `sslGateway.Domain`

Represents a domain attached to your SSL Gateway.

**Properties:**

| Property | Type                         | Description                                                                              |
| -------- | ---------------------------- | ---------------------------------------------------------------------------------------- |
| `domain` | `string`                     | Domain name attached to your SSL Gateway                                                 |
| `id`     | `long`                       | ID of the domain                                                                         |
| `state`  | `sslGateway.DomainStateEnum` | State of the domain: `creating`, `deleted`, `deleting`, `http-only`, `internal`, or `ok` |

---

### `sslGateway.Server`

Represents a server attached to your SSL Gateway.

**Properties:**

| Property  | Type                         | Description                                                                             |
| --------- | ---------------------------- | --------------------------------------------------------------------------------------- |
| `address` | `ip`                         | IPv4 address of the server                                                              |
| `id`      | `long`                       | ID of the server                                                                        |
| `port`    | `long`                       | Port of the server                                                                      |
| `state`   | `sslGateway.ServerStateEnum` | State of the server: `creating`, `deleted`, `deleting`, `internal`, `ok`, or `updating` |

---

### `sslGateway.Task`

Represents a task associated with your SSL Gateway.

**Properties:**

| Property       | Type                        | Description                                                                                        |
| -------------- | --------------------------- | -------------------------------------------------------------------------------------------------- |
| `action`       | `sslGateway.TaskActionEnum` | The action made                                                                                    |
| `creationDate` | `datetime`                  | Creation date of your task                                                                         |
| `id`           | `long`                      | ID of the task                                                                                     |
| `progress`     | `long`                      | Task progress percentage                                                                           |
| `status`       | `sslGateway.TaskStatusEnum` | Current status of your task: `blocked`, `cancelled`, `doing`, `done`, `error`, `paused`, or `todo` |

---

### `sslGateway.OfferEnum`

Possible offers for your SSL Gateway.

**Enum Values:**

- `free`
- `advanced`
- `enterprise`
- `internal`

---

### `sslGateway.StateEnum`

Possible states for your SSL Gateway.

**Enum Values:**

- `creating`
- `ok`
- `http-only`
- `internal`
- `suspended`
- `deleted`
- `deleting`
- `upgrading`

---

### `sslGateway.DomainStateEnum`

Possible states for a domain attached to your SSL Gateway.

**Enum Values:**

- `creating`
- `ok`
- `http-only`
- `internal`
- `deleted`
- `deleting`

---

### `sslGateway.ServerStateEnum`

Possible states for a server attached to your SSL Gateway.

**Enum Values:**

- `creating`
- `ok`
- `internal`
- `deleted`
- `deleting`
- `updating`

---

### `sslGateway.SslConfigurationEnum`

Possible SSL configuration types.

**Enum Values:**

- `modern`
- `intermediate`
- `internal`

---

### `sslGateway.TaskActionEnum`

Possible actions for a task.

**Enum Values:**

- `addDomain`
- `addPaidCertificate`
- `addServer`
- `createService`
- `deleteDomain`
- `deleteServer`
- `deleteService`
- `internalTask`
- `updateServer`
- `updateService`
- `upgrade`

---

### `sslGateway.TaskStatusEnum`

Possible statuses for a task.

**Enum Values:**

- `todo`
- `doing`
- `done`
- `error`
- `blocked`
- `cancelled`
- `paused`

---

### `service.TerminationReasonEnum`

Possible reasons for terminating your SSL Gateway.

**Enum Values:**

- `FEATURES_DONT_SUIT_ME`
- `LACK_OF_PERFORMANCES`
- `MIGRATED_TO_ANOTHER_OVH_PRODUCT`
- `MIGRATED_TO_COMPETITOR`
- `NOT_ENOUGH_RECOGNITION`
- `NOT_NEEDED_ANYMORE`
- `NOT_RELIABLE`
- `NO_ANSWER`
- `OTHER`
- `PRODUCT_DIMENSION_DONT_SUIT_ME`
- `PRODUCT_TOOLS_DONT_SUIT_ME`
- `TOO_EXPENSIVE`
- `TOO_HARD_TO_USE`
- `UNSATIFIED_BY_CUSTOMER_SUPPORT`

---

### `service.TerminationFutureUseEnum`

Possible future uses after terminating your SSL Gateway.

**Enum Values:**

- `NOT_REPLACING_SERVICE`
- `SUBSCRIBE_ANOTHER_KIND_OF_SERVICE_WITH_COMPETITOR`
- `SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR`
- `SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR`
- `OTHER`

---

## Error Handling

All operations may return errors. Common error types include:

- **Authentication errors**: Missing or invalid credentials
- **Validation errors**: Invalid parameters (e.g., malformed IP address)
- **IAM errors**: Insufficient permissions for the requested action
- **Resource errors**: SSL Gateway not found or already deleted
- **Task errors**: Task not found or invalid status

### Example Error Response

```json
{
    "error": "Invalid serviceName",
    "message": "The serviceName 'invalid-gateway' does not exist or is not accessible",
    "status": 404
}
```

---

## Notes and Best Practices

1. **IAM Tags**: Use `iamTags` to filter SSL Gateways in list operations.
2. **Termination**: Always confirm termination using the token received by email.
3. **Server and Domain Operations**: Ensure servers and domains are in the `ok` state before performing updates or deletions.
4. **SSL Configuration**: Choose the appropriate `sslConfiguration` based on your client compatibility requirements.
5. **HSTS and HTTPS Redirect**: Enable these features for enhanced security, but ensure backend servers support HTTPS if `serverHttps` is set to `true`.

---

## References

- [OVHcloud API v1 Documentation](https://api.ovh.com/)
- [IAM Documentation](https://docs.ovh.com/en/public-cloud/iam/)
- [SSL Gateway Overview](https://docs.ovh.com/en/public-cloud/ssl-gateway/)

# OVHcloud VIP Node Documentation

This document describes the **VIP** node for OVHcloud API operations in n8n. It covers the available endpoints, parameters, and response types for managing VIP (Very Important Person) services.

---

## Overview

The **VIP** node provides access to OVHcloud's VIP service management endpoints. These endpoints allow you to list, retrieve, and update properties of VIP services, including IAM (Identity and Access Management) metadata and service information.

All operations are performed against the **OVHcloud API** at the base path:

```
https://eu.api.ovh.com/v1
```

Authentication is required for all operations except where explicitly noted.

---

## Authentication

The **VIP** node uses the **OVH API** credential type for authentication. Ensure you have configured the following credentials in your n8n instance:

- **Host**: `https://eu.api.ovh.com`
- **Application Key**
- **Application Secret**
- **Consumer Key**

For more details, refer to the [OVH API Credential Documentation](https://eu.api.ovh.com/v1).

---

## Available Operations

### 1. List Available VIP Services

**Endpoint**: `GET /vip`

**Description**: List all available VIP services.

**Authentication**: Required

**IAM Actions**:

- `vip:apiovh:get`

**Parameters**:

| Parameter | Type                     | Required | Description                  |
| --------- | ------------------------ | -------- | ---------------------------- |
| `iamTags` | `map[string][]TagFilter` | No       | Filter resources on IAM tags |

**Response Type**: `string[]`

**Example Response**:

```json
["vip1", "vip2", "vip3"]
```

---

### 2. Get VIP Service Properties

**Endpoint**: `GET /vip/{serviceName}`

**Description**: Retrieve properties of a specific VIP service.

**Authentication**: Required

**IAM Actions**:

- `vip:apiovh:get`

**Parameters**:

| Parameter     | Type     | Required | Description                           |
| ------------- | -------- | -------- | ------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of your VIP service |

**Response Type**: `vip.SupportVipWithIAM`

**Response Structure**:

```json
{
    "iam": {
        "displayName": "string",
        "id": "uuid",
        "state": "iam.ResourceMetadata.StateEnum",
        "tags": "map[string]string",
        "urn": "string"
    },
    "serviceName": "string",
    "universe": ["vip.UniverseEnum"]
}
```

**Example Response**:

```json
{
    "iam": {
        "displayName": "My VIP Service",
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "state": "OK",
        "tags": {
            "environment": "production",
            "team": "support"
        },
        "urn": "vip:123e4567-e89b-12d3-a456-426614174000"
    },
    "serviceName": "vip1",
    "universe": ["cloud", "dedicated"]
}
```

---

### 3. Get VIP Service Information

**Endpoint**: `GET /vip/{serviceName}/serviceInfos`

**Description**: Retrieve detailed service information for a specific VIP service.

**Authentication**: Required

**IAM Actions**:

- `vip:apiovh:serviceInfos/get`

**Parameters**:

| Parameter     | Type     | Required | Description                           |
| ------------- | -------- | -------- | ------------------------------------- |
| `serviceName` | `string` | Yes      | The internal name of your VIP service |

**Response Type**: `services.Service`

**Response Structure**:

```json
{
    "canDeleteAtExpiration": false,
    "contactAdmin": "string",
    "contactBilling": "string",
    "contactTech": "string",
    "creation": "date",
    "domain": "string",
    "engagedUpTo": "date",
    "expiration": "date",
    "possibleRenewPeriod": ["long"],
    "renew": {
        "automatic": false,
        "deleteAtExpiration": false,
        "forced": false,
        "manualPayment": false,
        "period": "long"
    },
    "renewalType": "service.RenewalTypeEnum",
    "serviceId": "long",
    "status": "service.StateEnum",
    "universe": ["vip.UniverseEnum"]
}
```

**Example Response**:

```json
{
    "canDeleteAtExpiration": false,
    "contactAdmin": "admin@example.com",
    "contactBilling": "billing@example.com",
    "contactTech": "tech@example.com",
    "creation": "2024-01-01T00:00:00Z",
    "domain": "example.com",
    "engagedUpTo": "2024-12-31T00:00:00Z",
    "expiration": "2024-12-31T00:00:00Z",
    "possibleRenewPeriod": [12, 24],
    "renew": {
        "automatic": true,
        "deleteAtExpiration": false,
        "forced": false,
        "manualPayment": false,
        "period": 12
    },
    "renewalType": "automaticV2014",
    "serviceId": 123456,
    "status": "ok",
    "universe": ["cloud", "web"]
}
```

---

### 4. Update VIP Service Information

**Endpoint**: `PUT /vip/{serviceName}/serviceInfos`

**Description**: Update properties of a specific VIP service.

**Authentication**: Required

**IAM Actions**:

- `vip:apiovh:serviceInfos/edit`

**Parameters**:

| Parameter     | Type               | Required | Description                   |
| ------------- | ------------------ | -------- | ----------------------------- |
| `serviceName` | `string`           | Yes      | The internal name of your VIP |
| `body`        | `services.Service` | Yes      | New object properties         |

**Request Body Structure**:

```json
{
    "canDeleteAtExpiration": false,
    "contactAdmin": "string",
    "contactBilling": "string",
    "contactTech": "string",
    "creation": "date",
    "domain": "string",
    "engagedUpTo": "date",
    "expiration": "date",
    "possibleRenewPeriod": ["long"],
    "renew": {
        "automatic": false,
        "deleteAtExpiration": false,
        "forced": false,
        "manualPayment": false,
        "period": "long",
        "deleteAtExpiration": false
    },
    "renewalType": "service.RenewalTypeEnum",
    "serviceId": "long",
    "status": "service.StateEnum"
}
```

**Example Request**:

```json
{
    "contactAdmin": "newadmin@example.com",
    "contactBilling": "newbilling@example.com",
    "contactTech": "newtech@example.com"
}
```

**Response Type**: `void`

---

## IAM Resource Metadata

The `iam.ResourceMetadata` object contains metadata about the resource, including its state and tags.

**Properties**:

| Property      | Type                             | Description                                       |
| ------------- | -------------------------------- | ------------------------------------------------- |
| `displayName` | `string`                         | Resource display name (read-only)                 |
| `id`          | `uuid`                           | Unique identifier of the resource (read-only)     |
| `state`       | `iam.ResourceMetadata.StateEnum` | Resource state (read-only)                        |
| `tags`        | `map[string]string`              | Resource tags (read-only)                         |
| `urn`         | `string`                         | Unique resource name used in policies (read-only) |

**Possible States**:

- `EXPIRED`
- `IN_CREATION`
- `OK`
- `SUSPENDED`

---

## Tag Filtering

The `iam.resource.TagFilter` object allows filtering resources based on their tags.

**Properties**:

| Property   | Type                                  | Description                                      |
| ---------- | ------------------------------------- | ------------------------------------------------ |
| `operator` | `iam.resource.TagFilter.OperatorEnum` | Operator to use for filtering (defaults to `EQ`) |
| `value`    | `string`                              | Value to filter tags against                     |

**Possible Operators**:

- `EQ`
- `EXISTS`
- `ILIKE`
- `LIKE`
- `NEQ`
- `NEXISTS`

---

## Service Models

### `service.RenewType`

**Properties**:

| Property             | Type      | Description                               |
| -------------------- | --------- | ----------------------------------------- |
| `automatic`          | `boolean` | The service is automatically renewed      |
| `deleteAtExpiration` | `boolean` | The service will be deleted at expiration |
| `forced`             | `boolean` | The service is forced to be renewed       |
| `manualPayment`      | `boolean` | The service needs manual payment          |
| `period`             | `long`    | Renewal period in months                  |

---

### `service.RenewalTypeEnum`

**Possible Values**:

- `automaticForcedProduct`
- `automaticV2012`
- `automaticV2014`
- `automaticV2016`
- `automaticV2024`
- `manual`
- `oneShot`
- `option`

---

### `service.StateEnum`

**Possible Values**:

- `autorenewInProgress`
- `expired`
- `inCreation`
- `ok`
- `pendingDebt`
- `unPaid`

---

## VIP Universe Enumeration

The `vip.UniverseEnum` object defines the available universes for VIP services.

**Possible Values**:

- `cloud`
- `dedicated`
- `telecom`
- `web`

---

## Usage in n8n

To use the **VIP** node in n8n:

1. **Add Credentials**: Configure your OVH API credentials in the n8n UI.
2. **Select Operation**: Choose the desired operation from the dropdown menu.
3. **Provide Parameters**: Fill in the required parameters (e.g., `serviceName`).
4. **Execute**: Run the node to perform the operation.

---

## Error Handling

- **Authentication Errors**: Ensure your credentials are valid and have the required permissions.
- **Parameter Errors**: Validate that required parameters are provided and match the expected data types.
- **API Errors**: Handle errors returned by the OVH API gracefully. Refer to the [OVH API Error Documentation](https://eu.api.ovh.com/v1) for details.

---

## References

- [OVHcloud API Documentation](https://eu.api.ovh.com/v1)
- [n8n Workflow Documentation](https://docs.n8n.io)
- [IAM Resource Metadata Documentation](https://eu.api.ovh.com/v1/iam)

---

## Change History

- **v1.0**: Initial release with stable production endpoints.

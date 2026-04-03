# OVHcloud Horizon View API Documentation

This document describes the **Horizon View** API endpoints available for managing OVHcloud's Cloud Desktop Infrastructure (CDI) services. The API follows REST conventions and requires authentication via OVHcloud's Identity and Access Management (IAM) system.

## Overview

The **Horizon View** API provides operations to manage access points, customer networks, user accounts, and domain trusts for Horizon View as a Service. It is part of the OVHcloud Public Cloud suite and is designed for administrators and users managing dedicated Horizon View infrastructure.

---

## Authentication

All Horizon View API endpoints require authentication via OVHcloud's IAM system. You must provide the following credentials in your requests:

- **Application Key** (`applicationKey`)
- **Application Secret** (`applicationSecret`)
- **Consumer Key** (`consumerKey`)
- **Service Name** (`serviceName`)

These credentials are typically obtained through the OVHcloud Control Panel or API. Ensure you have the necessary IAM permissions to perform the requested actions.

---

## API Status

All endpoints in this API are marked as **PRODUCTION** status, indicating they are stable and ready for use in production environments.

---

## Endpoints

### 1. List Horizon View Services

**Path:** `/horizonView`

**Method:** `GET`

**Description:** Retrieve a list of Horizon View services available.

**Parameters:**

| Parameter | Type                                  | Required | Description                         |
| --------- | ------------------------------------- | -------- | ----------------------------------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | No       | Filter resources based on IAM tags. |

**IAM Actions:**

- `horizonView:apiovh:get` (required)

**Response Type:** `string[]`

**Example Response:**

```json
["service1", "service2", "service3"]
```

---

### 2. Get Horizon View Service Properties

**Path:** `/horizonView/{serviceName}`

**Method:** `GET`

**Description:** Retrieve properties of a specific Horizon View service.

**Parameters:**

| Parameter     | Type     | Required | Description            |
| ------------- | -------- | -------- | ---------------------- |
| `serviceName` | `string` | Yes      | Domain of the service. |

**IAM Actions:**

- `horizonView:apiovh:get` (required)

**Response Type:** `horizonView.DatacenterWithIAM`

**Example Response:**

```json
{
    "datacenterId": "dc1",
    "iam": {
        "enabled": true,
        "roles": ["admin", "user"]
    }
}
```

---

### 3. List Access Points

**Path:** `/horizonView/{serviceName}/accessPoint`

**Method:** `GET`

**Description:** List all access points associated with a Horizon View service.

**Parameters:**

| Parameter     | Type     | Required | Description            |
| ------------- | -------- | -------- | ---------------------- |
| `serviceName` | `string` | Yes      | Domain of the service. |

**IAM Actions:**

- `horizonView:apiovh:accessPoint/get` (required)

**Response Type:** `long[]`

**Example Response:**

```json
[12345, 67890, 11223]
```

---

### 4. Add Access Point

**Path:** `/horizonView/{serviceName}/accessPoint`

**Method:** `POST`

**Description:** Add a new access point to create a new network.

**Parameters:**

| Parameter             | Type                   | Required | Description                                                                |
| --------------------- | ---------------------- | -------- | -------------------------------------------------------------------------- |
| `serviceName`         | `string`               | Yes      | Domain of the service.                                                     |
| `poolType`            | `horizonView.PoolType` | Yes      | The type of pool you want to deploy.                                       |
| `privateBlock`        | `ipBlock`              | No       | Customize your pool by choosing the private network (e.g., `10.0.0.0/16`). |
| `privateVlan`         | `long`                 | No       | Customize your pool by choosing its private VLAN ID (smaller than 4095).   |
| `vrouterPoolPublicIp` | `ip`                   | No       | Public IP for deploying a public pool.                                     |

**IAM Actions:**

- `horizonView:apiovh:accessPoint/create` (required)

**Response Type:** `horizonView.Task[]`

**Example Request:**

```json
{
    "poolType": "dedicated",
    "privateBlock": "10.0.0.0/16",
    "privateVlan": 100,
    "vrouterPoolPublicIp": "203.0.113.1"
}
```

**Example Response:**

```json
[
    {
        "id": "task1",
        "state": "pending"
    }
]
```

---

### 5. Get Access Point Properties

**Path:** `/horizonView/{serviceName}/accessPoint/{accessPointId}`

**Method:** `GET`

**Description:** Retrieve properties of a specific access point.

**Parameters:**

| Parameter       | Type     | Required | Description            |
| --------------- | -------- | -------- | ---------------------- |
| `serviceName`   | `string` | Yes      | Domain of the service. |
| `accessPointId` | `long`   | Yes      | Pool ID.               |

**IAM Actions:**

- `horizonView:apiovh:accessPoint/get` (required)

**Response Type:** `horizonView.Pool`

**Example Response:**

```json
{
    "id": 12345,
    "name": "MyPool",
    "type": "dedicated",
    "privateBlock": "10.0.0.0/16",
    "privateVlan": 100
}
```

---

### 6. Delete Access Point

**Path:** `/horizonView/{serviceName}/accessPoint/{accessPointId}`

**Method:** `DELETE`

**Description:** Delete an access point.

**Parameters:**

| Parameter       | Type     | Required | Description            |
| --------------- | -------- | -------- | ---------------------- |
| `serviceName`   | `string` | Yes      | Domain of the service. |
| `accessPointId` | `long`   | Yes      | Pool ID.               |

**IAM Actions:**

- `horizonView:apiovh:accessPoint/delete` (required)

**Response Type:** `horizonView.Task[]`

**Example Response:**

```json
[
    {
        "id": "task2",
        "state": "completed"
    }
]
```

---

### 7. Change Access Point Session Timeout

**Path:** `/horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout`

**Method:** `POST`

**Description:** Manage session timeout on Unified Access Gateway.

**Parameters:**

| Parameter       | Type                              | Required | Description                                                                       |
| --------------- | --------------------------------- | -------- | --------------------------------------------------------------------------------- |
| `serviceName`   | `string`                          | Yes      | Domain of the service.                                                            |
| `accessPointId` | `long`                            | Yes      | Pool ID.                                                                          |
| `expiration`    | `long`                            | Yes      | Timeout in hours.                                                                 |
| `onSingleAP`    | `horizonView.AccessPointTypeEnum` | No       | Update timeout session on a single Unified Access Gateway (only for hybrid pool). |

**IAM Actions:**

- `horizonView:apiovh:accessPoint/changeSessionTimeout` (required)

**Response Type:** `horizonView.Task`

**Example Request:**

```json
{
    "expiration": 8,
    "onSingleAP": "hybrid"
}
```

**Example Response:**

```json
{
    "id": "task3",
    "state": "pending"
}
```

---

### 8. Manage Customer Network

**Path:** `/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork`

**Method:** `GET` (List), `POST` (Add), `DELETE` (Remove)

**Description:** List, add, or remove customer networks associated with an access point.

**Parameters:**

| Parameter       | Type      | Required | Description                            |
| --------------- | --------- | -------- | -------------------------------------- |
| `serviceName`   | `string`  | Yes      | Domain of the service.                 |
| `accessPointId` | `long`    | Yes      | Pool ID.                               |
| `network`       | `ipBlock` | Yes      | The private network you want to reach. |

**IAM Actions:**

- `horizonView:apiovh:accessPoint/customerNetwork/get` (required for GET)
- `horizonView:apiovh:accessPoint/customerNetwork/create` (required for POST)
- `horizonView:apiovh:accessPoint/customerNetwork/delete` (required for DELETE)

**Response Type:** `long[]` (List), `horizonView.Task[]` (Add/Remove)

**Example Request (Add):**

```json
{
    "network": "192.168.1.0/24"
}
```

**Example Response (Add):**

```json
[
    {
        "id": "task4",
        "state": "pending"
    }
]
```

---

### 9. Get Customer Network Properties

**Path:** `/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}`

**Method:** `GET`

**Description:** Retrieve properties of a specific customer network.

**Parameters:**

| Parameter           | Type     | Required | Description            |
| ------------------- | -------- | -------- | ---------------------- |
| `serviceName`       | `string` | Yes      | Domain of the service. |
| `accessPointId`     | `long`   | Yes      | Pool ID.               |
| `customerNetworkId` | `long`   | Yes      | Customer Network ID.   |

**IAM Actions:**

- `horizonView:apiovh:accessPoint/customerNetwork/get` (required)

**Response Type:** `horizonView.CustomerNetworkPool`

**Example Response:**

```json
{
    "id": 67890,
    "network": "192.168.1.0/24",
    "state": "active"
}
```

---

### 10. Delete Customer Network

**Path:** `/horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}`

**Method:** `DELETE`

**Description:** Delete a customer network from an access point.

**Parameters:**

| Parameter           | Type     | Required | Description            |
| ------------------- | -------- | -------- | ---------------------- |
| `serviceName`       | `string` | Yes      | Domain of the service. |
| `accessPointId`     | `long`   | Yes      | Pool ID.               |
| `customerNetworkId` | `long`   | Yes      | Customer Network ID.   |

**IAM Actions:**

- `horizonView:apiovh:accessPoint/customerNetwork/delete` (required)

**Response Type:** `horizonView.Task[]`

**Example Response:**

```json
[
    {
        "id": "task5",
        "state": "completed"
    }
]
```

---

### 11. Disable Two-Factor Authentication (2FA)

**Path:** `/horizonView/{serviceName}/accessPoint/{accessPointId}/disableTwoFA`

**Method:** `POST`

**Description:** Disable two-factor authentication on your pool.

**Parameters:**

| Parameter       | Type     | Required | Description            |
| --------------- | -------- | -------- | ---------------------- |
| `serviceName`   | `string` | Yes      | Domain of the service. |
| `accessPointId` | `long`   | Yes      | Pool ID.               |

**IAM Actions:**

- `horizonView:apiovh:accessPoint/disableTwoFA/create` (required)

**Response Type:** `horizonView.Task`

**Example Response:**

```json
{
    "id": "task6",
    "state": "pending"
}
```

---

### 12. Enable Two-Factor Authentication (2FA)

**Path:** `/horizonView/{serviceName}/accessPoint/{accessPointId}/enableTwoFA`

**Method:** `POST`

**Description:** Enable two-factor authentication on your pool.

**Parameters:**

| Parameter       | Type       | Required | Description                                        |
| --------------- | ---------- | -------- | -------------------------------------------------- |
| `serviceName`   | `string`   | Yes      | Domain of the service.                             |
| `accessPointId` | `long`     | Yes      | Pool ID.                                           |
| `radiusIp`      | `ipv4`     | Yes      | IP of your RADIUS server.                          |
| `secret`        | `password` | Yes      | Secret password for the two-factor authentication. |

**IAM Actions:**

- `horizonView:apiovh:accessPoint/enableTwoFA` (required)

**Response Type:** `horizonView.Task`

**Example Response:**

```json
{
    "id": "task7",
    "state": "pending"
}
```

---

### 13. Disable Windows Username Option

**Path:** `/horizonView/{serviceName}/accessPoint/{accessPointId}/disableWindowsUsernameOption`

**Method:** `POST`

**Description:** Disable Windows username option on Unified Access Gateway (only for hybrid pool).

**Parameters:**

| Parameter       | Type                              | Required | Description                                                         |
| --------------- | --------------------------------- | -------- | ------------------------------------------------------------------- |
| `serviceName`   | `string`                          | Yes      | Domain of the service.                                              |
| `accessPointId` | `long`                            | Yes      | Pool ID.                                                            |
| `onSingleAP`    | `horizonView.AccessPointTypeEnum` | No       | Disable Windows username option on a single Unified Access Gateway. |

**IAM Actions:**

- `horizonView:apiovh:accessPoint/disableWindowsUsernameOption` (required)

**Response Type:** `horizonView.Task`

**Example Response:**

```json
{
    "id": "task8",
    "state": "pending"
}
```

---

### 14. Enable Windows Username Option

**Path:** `/horizonView/{serviceName}/accessPoint/{accessPointId}/enableWindowsUsernameOption`

**Method:** `POST`

**Description:** Enable Windows username option on Unified Access Gateway (only for hybrid pool).

**Parameters:**

| Parameter       | Type                              | Required | Description                                                        |
| --------------- | --------------------------------- | -------- | ------------------------------------------------------------------ |
| `serviceName`   | `string`                          | Yes      | Domain of the service.                                             |
| `accessPointId` | `long`                            | Yes      | Pool ID.                                                           |
| `onSingleAP`    | `horizonView.AccessPointTypeEnum` | No       | Enable Windows username option on a single Unified Access Gateway. |

**IAM Actions:**

- `horizonView:apiovh:accessPoint/enableWindowsUsernameOption` (required)

**Response Type:** `horizonView.Task`

**Example Response:**

```json
{
    "id": "task9",
    "state": "pending"
}
```

---

### 15. Confirm Service Termination

**Path:** `/horizonView/{serviceName}/confirmTermination`

**Method:** `POST`

**Description:** Confirm termination of a Horizon View service.

**Parameters:**

| Parameter     | Type                               | Required | Description                                           |
| ------------- | ---------------------------------- | -------- | ----------------------------------------------------- |
| `serviceName` | `string`                           | Yes      | Domain of the service.                                |
| `commentary`  | `string`                           | No       | Commentary about your termination request.            |
| `futureUse`   | `service.TerminationFutureUseEnum` | No       | What next after your termination request.             |
| `reason`      | `service.TerminationReasonEnum`    | No       | Reason for your termination request.                  |
| `token`       | `string`                           | Yes      | Termination token sent by email to the admin contact. |

**IAM Actions:**

- `horizonView:apiovh:confirmTermination` (required)

**Response Type:** `string`

**Example Response:**

```json
"Termination confirmed successfully"
```

---

### 16. Dedicated Horizon Operations

**Path:** `/horizonView/{serviceName}/dedicatedHorizon`

**Method:** `GET` (List), `POST` (Enable/Disable Storage Accelerator)

**Description:** Manage dedicated Horizon View services, including enabling/disabling storage accelerator options.

**Parameters:**

| Parameter     | Type     | Required | Description            |
| ------------- | -------- | -------- | ---------------------- |
| `serviceName` | `string` | Yes      | Domain of the service. |

**IAM Actions:**

- `horizonView:apiovh:dedicatedHorizon/get` (required for GET)
- `horizonView:apiovh:dedicatedHorizon/enableStorageAccelerator` (required for POST - enable)
- `horizonView:apiovh:dedicatedHorizon/disableStorageAccelerator` (required for POST - disable)

**Response Types:**

- `horizonView.DedicatedHorizon` (GET)
- `horizonView.Task` (POST)

---

### 17. User Management

**Path:** `/horizonView/{serviceName}/dedicatedHorizon/user`

**Method:** `GET` (List), `POST` (Change Properties)

**Description:** List users or change user properties (e.g., email) for dedicated Horizon View services.

**Parameters:**

| Parameter     | Type     | Required | Description            |
| ------------- | -------- | -------- | ---------------------- |
| `serviceName` | `string` | Yes      | Domain of the service. |

**IAM Actions:**

- `horizonView:apiovh:dedicatedHorizon/user/get` (required for GET)

**Response Type:** `horizonView.User`

---

### 18. Change User Password

**Path:** `/horizonView/{serviceName}/dedicatedHorizon/user/changePassword`

**Method:** `POST`

**Description:** Change the password for a Horizon View user.

**Parameters:**

| Parameter     | Type       | Required | Description                                                                                  |
| ------------- | ---------- | -------- | -------------------------------------------------------------------------------------------- |
| `serviceName` | `string`   | Yes      | Domain of the service.                                                                       |
| `username`    | `string`   | Yes      | Customer username of your Horizon View user.                                                 |
| `password`    | `password` | No       | New password for this user. If empty, a random password will be generated and sent by email. |

**IAM Actions:**

- `horizonView:apiovh:dedicatedHorizon/user/changePassword` (required)

**Response Type:** `horizonView.Task`

---

### 19. Domain Trust Management

**Path:** `/horizonView/{serviceName}/domainTrust`

**Method:** `GET` (List), `POST` (Add Trust)

**Description:** List or add domain trusts for your Horizon View service.

**Parameters:**

| Parameter           | Type     | Required | Description                                             |
| ------------------- | -------- | -------- | ------------------------------------------------------- |
| `serviceName`       | `string` | Yes      | Domain of the service.                                  |
| `activeDirectoryIP` | `ipv4`   | Yes      | IP of your Active Directory.                            |
| `domain`            | `string` | Yes      | Domain of your Active Directory (e.g., `domain.local`). |
| `dns1`              | `ip`     | No       | IP of your first DNS server.                            |
| `dns2`              | `ip`     | No       | IP of your second DNS server.                           |

**IAM Actions:**

- `horizonView:apiovh:domainTrust/get` (required for GET)
- `horizonView:apiovh:domainTrust/create` (required for POST)

**Response Types:**

- `long[]` (GET)
- `horizonView.Task[]` (POST)

---

### 20. Add Child Domain

**Path:** `/horizonView/{serviceName}/domainTrust/{domainTrustId}/addChildDomain`

**Method:** `POST`

**Description:** Add a child domain to an existing domain trust.

**Parameters:**

| Parameter                | Type       | Required | Description                                             |
| ------------------------ | ---------- | -------- | ------------------------------------------------------- |
| `serviceName`            | `string`   | Yes      | Domain of the service.                                  |
| `domainTrustId`          | `long`     | Yes      | Domain trust ID.                                        |
| `domain`                 | `string`   | Yes      | Name of your private domain.                            |
| `activeDirectoryIP`      | `ipv4`     | Yes      | IP of your Active Directory.                            |
| `passphrase`             | `password` | Yes      | Shared passphrase to create the Active Directory trust. |
| `serviceAccountPassword` | `password` | Yes      | Password of the `horizonUI` service account.            |

**IAM Actions:**

- `horizonView:apiovh:domainTrust/addChildDomain` (required)

**Response Type:** `horizonView.Task`

---

### 21. Add Domain Controller

**Path:** `/horizonView/{serviceName}/domainTrust/{domainTrustId}/addDomainController`

**Method:** `POST`

**Description:** Add a Domain Controller to your domain trust.

**Parameters:**

| Parameter            | Type     | Required | Description                                            |
| -------------------- | -------- | -------- | ------------------------------------------------------ |
| `serviceName`        | `string` | Yes      | Domain of the service.                                 |
| `domainTrustId`      | `long`   | Yes      | Domain trust ID.                                       |
| `domain`             | `string` | Yes      | Name of your Domain Controller (e.g., `domain.local`). |
| `domainControllerIp` | `ipv4`   | Yes      | IP of your Domain Controller.                          |

**IAM Actions:**

- `horizonView:apiovh:domainTrust/addDomainController` (required)

**Response Type:** `horizonView.Task`

---

## Error Handling

The Horizon View API may return errors in the following scenarios:

- **Invalid Credentials:** Ensure your `applicationKey`, `applicationSecret`, and `consumerKey` are correct.
- **Missing Permissions:** Verify you have the required IAM actions for the requested operation.
- **Invalid Parameters:** Check parameter types and constraints (e.g., `privateVlan` must be smaller than 4095).
- **Service Not Found:** The requested `serviceName` may not exist or may be inaccessible.
- **Token Required:** For termination operations, ensure you provide the `token` received via email.

### Example Error Response

```json
{
    "error": "InvalidParameter",
    "message": "privateVlan must be smaller than 4095",
    "details": {
        "parameter": "privateVlan",
        "value": 5000
    }
}
```

---

## Rate Limiting and Quotas

The Horizon View API may enforce rate limits or quotas on certain operations. Ensure you adhere to these limits to avoid service disruptions.

---

## Support

For issues or questions related to the Horizon View API, contact OVHcloud support via the [OVHcloud Control Panel](https://www.ovhcloud.com/fr/support/) or [OVHcloud Help Center](https://docs.ovh.com/fr/public-cloud/horizon-view/).

---

## References

- [OVHcloud Public Cloud Documentation](https://docs.ovh.com/fr/public-cloud/)
- [OVHcloud IAM Documentation](https://docs.ovh.com/fr/iam/)
- [Horizon View Overview](https://www.ovhcloud.com/fr/public-cloud/horizon-view/)

---

## Versioning

This API documentation corresponds to **API Version 1.0** as defined in the `api_docs/v1/horizonView.json` file.

> **Note:** Always verify the API version in use before making requests, as breaking changes may occur between versions.

---

> **⚠️ Important:** This documentation is generated from the provided JSON file and is intended for technical audiences (developers, administrators). Ensure you follow the API conventions and authentication requirements as specified in the official OVHcloud documentation.

# n8n OVHcloud Metrics Node Documentation

## Overview

The **Metrics** node in the n8n OVHcloud integration provides operations to interact with OVHcloud's metrics API. This API allows you to manage metrics services, tokens, quotas, and consumption data for your OVHcloud services.

---

## Node Properties

The node properties are defined in the `nodes/OvhCloud/OvhCloud.node.ts` file. The node supports the following operations for the **Metrics** service:

### Operations

| Operation                          | HTTP Method | Description                      |
| ---------------------------------- | ----------- | -------------------------------- |
| `listMetricsServices`              | GET         | List available services          |
| `getMetricsService`                | GET         | Get service details              |
| `editMetricsService`               | PUT         | Modify service description       |
| `getMetricsServiceConsumption`     | GET         | Get consumption for a service    |
| `listMetricsTokens`                | GET         | Get list of tokens for a service |
| `createMetricsToken`               | POST        | Create a new token               |
| `getMetricsToken`                  | GET         | Get details for a specific token |
| `editMetricsToken`                 | PUT         | Modify a token                   |
| `deleteMetricsToken`               | DELETE      | Revoke a token                   |
| `setMetricsServiceQuota`           | PUT         | Set overquota                    |
| `getMetricsServiceQuota`           | GET         | Get service information          |
| `confirmMetricsServiceTermination` | POST        | Confirm service termination      |
| `changeMetricsContact`             | POST        | Update contact information       |

---

## Credentials

The **Metrics** node uses the **OVH API** credentials defined in `credentials/OVHcloudApi.credentials.ts`. Ensure you have the following credentials configured:

- **Host**: `https://eu.api.ovh.com/` (or your preferred OVHcloud region)
- **Application Key**
- **Application Secret**
- **Consumer Key**

---

## Input Parameters

### Common Parameters

| Parameter     | Type   | Required | Description                              |
| ------------- | ------ | -------- | ---------------------------------------- |
| `serviceName` | string | Yes      | The name of the service to interact with |

### Operation-Specific Parameters

#### List Metrics Services (`listMetricsServices`)

- **HTTP Method**: `GET`
- **Path**: `/metrics`
- **Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  | `iamTags` | map[string][]iam.resource.TagFilter | No | Filter resources on IAM tags |

#### Get Metrics Service (`getMetricsService`)

- **HTTP Method**: `GET`
- **Path**: `/metrics/{serviceName}`
- **Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  | `serviceName` | string | Yes | Service name |

#### Edit Metrics Service (`editMetricsService`)

- **HTTP Method**: `PUT`
- **Path**: `/metrics/{serviceName}`
- **Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  | `body` | metrics.Update | Yes | Request Body containing the new description |
  | `serviceName` | string | Yes | Service name |

#### Get Metrics Service Consumption (`getMetricsServiceConsumption`)

- **HTTP Method**: `GET`
- **Path**: `/metrics/{serviceName}/consumption`
- **Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  | `duration` | long | No | Last 'm' minutes. Default is 60 minutes |
  | `serviceName` | string | Yes | Service name |

#### List Metrics Tokens (`listMetricsTokens`)

- **HTTP Method**: `GET`
- **Path**: `/metrics/{serviceName}/token`
- **Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  | `serviceName` | string | Yes | Service name |

#### Create Metrics Token (`createMetricsToken`)

- **HTTP Method**: `POST`
- **Path**: `/metrics/{serviceName}/token`
- **Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  | `body` | metrics.TokenCreation | Yes | Request Body containing token details (description, labels, permission) |
  | `serviceName` | string | Yes | Service name |

#### Get Metrics Token (`getMetricsToken`)

- **HTTP Method**: `GET`
- **Path**: `/metrics/{serviceName}/token/{tokenId}`
- **Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  | `serviceName` | string | Yes | Service name |
  | `tokenId` | string | Yes | Token ID |

#### Edit Metrics Token (`editMetricsToken`)

- **HTTP Method**: `PUT`
- **Path**: `/metrics/{serviceName}/token/{tokenId}`
- **Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  | `body` | metrics.TokenUpdate | Yes | Request Body containing the new description |
  | `serviceName` | string | Yes | Service name |
  | `tokenId` | string | Yes | Token ID |

#### Delete Metrics Token (`deleteMetricsToken`)

- **HTTP Method**: `DELETE`
- **Path**: `/metrics/{serviceName}/token/{tokenId}`
- **Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  | `serviceName` | string | Yes | Service name |
  | `tokenId` | string | Yes | Token ID |

#### Set Metrics Service Quota (`setMetricsServiceQuota`)

- **HTTP Method**: `PUT`
- **Path**: `/metrics/{serviceName}/quota`
- **Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  | `body` | metrics.QuotaUpdate | Yes | Request Body containing the new quota value |
  | `serviceName` | string | Yes | Service name |

#### Get Metrics Service Quota (`getMetricsServiceQuota`)

- **HTTP Method**: `GET`
- **Path**: `/metrics/{serviceName}/quota`
- **Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  | `serviceName` | string | Yes | Service name |

#### Confirm Metrics Service Termination (`confirmMetricsServiceTermination`)

- **HTTP Method**: `POST`
- **Path**: `/metrics/{serviceName}/confirmTermination`
- **Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  | `body` | services.confirmTermination | Yes | Request Body containing the termination token and reason |
  | `serviceName` | string | Yes | Service name |

#### Change Metrics Contact (`changeMetricsContact`)

- **HTTP Method**: `POST`
- **Path**: `/metrics/{serviceName}/changeContact`
- **Parameters**:
  | Parameter | Type | Required | Description |
  |-----------|------|----------|-------------|
  | `body` | services.changeContact | Yes | Request Body containing new contact details |
  | `serviceName` | string | Yes | Service name |

---

## Output Parameters

### Common Outputs

| Output        | Type                         | Description                        |
| ------------- | ---------------------------- | ---------------------------------- |
| `services`    | metrics.api.ServiceWithIAM[] | List of services with IAM metadata |
| `service`     | metrics.api.ServiceWithIAM   | Service details with IAM metadata  |
| `consumption` | metrics.api.Consumption      | Consumption data for a service     |
| `tokens`      | metrics.api.Token[]          | List of tokens for a service       |
| `token`       | metrics.api.Token            | Token details                      |

### Operation-Specific Outputs

#### `listMetricsServices`

- **Output**: `string[]`
- **Description**: Returns a list of available service names.

#### `getMetricsService`

- **Output**: `metrics.api.ServiceWithIAM`
- **Description**: Returns details about a specific service, including its IAM metadata.

#### `editMetricsService`

- **Output**: `metrics.api.Service`
- **Description**: Returns the updated service details.

#### `getMetricsServiceConsumption`

- **Output**: `metrics.api.Consumption`
- **Description**: Returns consumption data for a service.

#### `listMetricsTokens`

- **Output**: `string[]`
- **Description**: Returns a list of token IDs for a service.

#### `createMetricsToken`

- **Output**: `metrics.api.Token`
- **Description**: Returns the created token details.

#### `getMetricsToken`

- **Output**: `metrics.api.Token`
- **Description**: Returns details for a specific token.

#### `editMetricsToken`

- **Output**: `metrics.api.Token`
- **Description**: Returns the updated token details.

#### `deleteMetricsToken`

- **Output**: `void`
- **Description**: No output returned on success.

#### `setMetricsServiceQuota`

- **Output**: `string`
- **Description**: Returns a confirmation message on success.

#### `getMetricsServiceQuota`

- **Output**: `metrics.api.Service`
- **Description**: Returns service details including quota information.

#### `confirmMetricsServiceTermination`

- **Output**: `string`
- **Description**: Returns a confirmation message on success.

#### `changeMetricsContact`

- **Output**: `long[]`
- **Description**: Returns a list of contact IDs on success.

---

## IAM Actions

The **Metrics** node requires specific IAM actions for certain operations. Ensure your credentials have the necessary permissions:

| Operation                          | IAM Action                       | Required |
| ---------------------------------- | -------------------------------- | -------- |
| `listMetricsServices`              | `metrics:apiovh:get`             | Yes      |
| `getMetricsService`                | `metrics:apiovh:get`             | Yes      |
| `editMetricsService`               | `metrics:apiovh:put`             | Yes      |
| `getMetricsServiceConsumption`     | `metrics:apiovh:consumption/get` | Yes      |
| `listMetricsTokens`                | `metrics:apiovh:token/get`       | Yes      |
| `createMetricsToken`               | `metrics:apiovh:token/create`    | Yes      |
| `getMetricsToken`                  | `metrics:apiovh:token/get`       | Yes      |
| `editMetricsToken`                 | `metrics:apiovh:token/edit`      | Yes      |
| `deleteMetricsToken`               | `metrics:apiovh:token/delete`    | Yes      |
| `setMetricsServiceQuota`           | `metrics:apiovh:quota/edit`      | Yes      |
| `confirmMetricsServiceTermination` | `metrics:apiovh:terminate`       | Yes      |
| `changeMetricsContact`             | `metrics:apiovh:changeContact`   | Yes      |

---

## Models

### `metrics.api.ServiceWithIAM`

Structure holding the elements about a service with IAM metadata.

**Properties**:

| Property        | Type                            | Required | Description                                 |
| --------------- | ------------------------------- | -------- | ------------------------------------------- |
| `description`   | string                          | No       | Description of the service                  |
| `iam`           | `iam.ResourceMetadata`          | No       | IAM resource metadata                       |
| `name`          | string                          | No       | Name of the service                         |
| `offer`         | string                          | No       | Offer used for the service                  |
| `quota`         | `metrics.api.Option`            | No       | Quota information                           |
| `region`        | `metrics.api.Region`            | No       | Region holding the service                  |
| `shouldUpgrade` | boolean                         | No       | Indicator if the service should be upgraded |
| `status`        | `metrics.api.ServiceStatusEnum` | No       | Status of the service                       |
| `type`          | `metrics.api.OfferTypeEnum`     | No       | Type of the service: cloud or live          |

### `metrics.api.Service`

Structure holding the elements about a service.

**Properties**:

| Property        | Type                            | Required | Description                                 |
| --------------- | ------------------------------- | -------- | ------------------------------------------- |
| `description`   | string                          | No       | Description of the service                  |
| `name`          | string                          | No       | Name of the service                         |
| `offer`         | string                          | No       | Offer used for the service                  |
| `quota`         | `metrics.api.Option`            | No       | Quota information                           |
| `region`        | `metrics.api.Region`            | No       | Region holding the service                  |
| `shouldUpgrade` | boolean                         | No       | Indicator if the service should be upgraded |
| `status`        | `metrics.api.ServiceStatusEnum` | No       | Status of the service                       |
| `type`          | `metrics.api.OfferTypeEnum`     | No       | Type of the service: cloud or live          |

### `metrics.api.Consumption`

Structure holding the consumption data for a service.

**Properties**:

| Property | Type | Required | Description                         |
| -------- | ---- | -------- | ----------------------------------- |
| `ddp`    | long | No       | Current Daily data points           |
| `mads`   | long | No       | Current monthly active data streams |

### `metrics.api.Token`

Structure holding the elements about a token.

**Properties**:

| Property      | Type                         | Required | Description                       |
| ------------- | ---------------------------- | -------- | --------------------------------- |
| `access`      | password                     | No       | The actual access token           |
| `createdAt`   | datetime                     | No       | Token creation date               |
| `description` | string                       | No       | Description of the token          |
| `expiryAt`    | datetime                     | No       | Token expiration date             |
| `id`          | string                       | No       | ID of the token                   |
| `isRevoked`   | boolean                      | No       | Indicator if the token is revoked |
| `labels`      | `metrics.api.Label[]`        | No       | Labels for the token              |
| `permission`  | `metrics.api.PermissionEnum` | No       | Token permission: read or write   |

### `metrics.api.Label`

Structure holding the elements about a label.

**Properties**:

| Property | Type   | Required | Description |
| -------- | ------ | -------- | ----------- |
| `key`    | string | No       | Label key   |
| `value`  | string | No       | Label value |

### `metrics.api.PermissionEnum`

Enum representing token permissions.

**Values**:

- `read`
- `write`

### `metrics.api.OfferTypeEnum`

Enum representing service types.

**Values**:

- `cloud`
- `live`

### `metrics.api.ServiceStatusEnum`

Enum representing service statuses.

**Values**:

- `alive`
- `dead`
- `disabled`
- `new`

### `metrics.api.Region`

Structure holding the elements about a region.

**Properties**:

| Property      | Type   | Required | Description               |
| ------------- | ------ | -------- | ------------------------- |
| `description` | string | No       | Description of the region |
| `name`        | string | No       | Name of the region        |

### `metrics.api.Option`

Structure holding the elements about an option.

**Properties**:

| Property           | Type     | Required | Description                   |
| ------------------ | -------- | -------- | ----------------------------- |
| `ddp`              | long     | No       | Daily data points             |
| `lastModification` | datetime | No       | Time of last modification     |
| `mads`             | long     | No       | Monthly active device streams |

### `metrics.Update`

Structure holding the elements for updating a service description.

**Properties**:

| Property      | Type   | Required | Description                      |
| ------------- | ------ | -------- | -------------------------------- |
| `description` | string | No       | New description for your service |

### `metrics.TokenCreation`

Structure holding the elements for creating a token.

**Properties**:

| Property      | Type                         | Required | Description                          |
| ------------- | ---------------------------- | -------- | ------------------------------------ |
| `description` | string                       | No       | Description for the new token        |
| `labels`      | `metrics.api.Label[]`        | No       | Labels for the new token             |
| `permission`  | `metrics.api.PermissionEnum` | Yes      | Type of the new token. Read or Write |

### `metrics.TokenUpdate`

Structure holding the elements for updating a token.

**Properties**:

| Property      | Type   | Required | Description                    |
| ------------- | ------ | -------- | ------------------------------ |
| `description` | string | No       | New description for your token |

### `metrics.LookupTokenCreation`

Structure holding the elements for finding a token ID.

**Properties**:

| Property      | Type   | Required | Description  |
| ------------- | ------ | -------- | ------------ |
| `accessToken` | string | Yes      | Access token |

### `metrics.QuotaUpdate`

Structure holding the elements for updating quota.

**Properties**:

| Property | Type | Required | Description             |
| -------- | ---- | -------- | ----------------------- |
| `quota`  | long | Yes      | New value for overquota |

### `services.confirmTermination`

Structure holding the elements for confirming service termination.

**Properties**:

| Property              | Type                               | Required | Description                                               |
| --------------------- | ---------------------------------- | -------- | --------------------------------------------------------- |
| `commentary`          | string                             | No       | Commentary about your termination request                 |
| `commentaryFutureUse` | string                             | No       | Commentary about your future use                          |
| `commentaryReason`    | string                             | No       | Commentary about your reason for termination              |
| `futureUse`           | `service.TerminationFutureUseEnum` | No       | All future uses you can provide for a service termination |
| `reason`              | `service.TerminationReasonEnum`    | No       | All reasons you can provide for a service termination     |
| `token`               | string                             | Yes      | The termination token sent by email to the admin contact  |

### `services.changeContact`

Structure holding the elements for changing contact information.

**Properties**:

| Property         | Type   | Required | Description                           |
| ---------------- | ------ | -------- | ------------------------------------- |
| `contactAdmin`   | string | No       | The contact to set as admin contact   |
| `contactBilling` | string | No       | The contact to set as billing contact |
| `contactTech`    | string | No       | The contact to set as tech contact    |

### `service.TerminationFutureUseEnum`

Enum representing future uses after service termination.

**Values**:

- `NOT_REPLACING_SERVICE`
- `OTHER`
- `SUBSCRIBE_AN_OTHER_SERVICE`
- `SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR`
- `SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR`

### `service.TerminationReasonEnum`

Enum representing termination reasons.

**Values**:

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

## API Status

All operations are currently in **Beta** status unless otherwise specified.

---

## Examples

### List Metrics Services

```json
{
    "iamTags": {
        "operator": "EQ",
        "value": "metrics"
    }
}
```

**Output**:

```json
["metrics-service-1", "metrics-service-2"]
```

---

### Get Metrics Service

**Input**:

```json
{
    "serviceName": "metrics-service-1"
}
```

**Output**:

```json
{
    "description": "This is a metrics service",
    "name": "metrics-service-1",
    "offer": "metrics-offer",
    "quota": {
        "ddp": 100,
        "lastModification": "2024-03-31T12:00:00Z",
        "mads": 50
    },
    "region": {
        "description": "This service is in the EU region",
        "name": "eu"
    },
    "shouldUpgrade": false,
    "status": "alive",
    "type": "cloud"
}
```

---

### Edit Metrics Service

**Input**:

```json
{
    "body": {
        "description": "Updated description for metrics-service-1"
    },
    "serviceName": "metrics-service-1"
}
```

**Output**:

```json
{
    "description": "Updated description for metrics-service-1",
    "name": "metrics-service-1",
    "offer": "metrics-offer",
    "quota": {
        "ddp": 100,
        "lastModification": "2024-03-31T12:00:00Z",
        "mads": 50
    },
    "region": {
        "description": "This service is in the EU region",
        "name": "eu"
    },
    "shouldUpgrade": false,
    "status": "alive",
    "type": "cloud"
}
```

---

### Get Metrics Service Consumption

**Input**:

```json
{
    "duration": 30,
    "serviceName": "metrics-service-1"
}
```

**Output**:

```json
{
    "ddp": 80,
    "mads": 45
}
```

---

### Create Metrics Token

**Input**:

```json
{
    "body": {
        "description": "New token for metrics-service-1",
        "labels": [
            {
                "key": "label1",
                "value": "value1"
            },
            {
                "key": "label2",
                "value": "value2"
            }
        ],
        "permission": "read"
    },
    "serviceName": "metrics-service-1"
}
```

**Output**:

```json
{
    "access": "abcdef123456",
    "createdAt": "2024-03-31T12:00:00Z",
    "description": "New token for metrics-service-1",
    "expiryAt": "2025-03-31T12:00:00Z",
    "id": "token-1234",
    "isRevoked": false,
    "labels": [
        {
            "key": "label1",
            "value": "value1"
        },
        {
            "key": "label2",
            "value": "value2"
        }
    ],
    "permission": "read"
}
```

---

### Confirm Metrics Service Termination

**Input**:

```json
{
    "body": {
        "commentary": "I don't need this service anymore",
        "commentaryFutureUse": "NOT_NEEDED_ANYMORE",
        "commentaryReason": "MIGRATED_TO_COMPETITOR",
        "futureUse": "NOT_NEEDED_ANYMORE",
        "reason": "NOT_NEEDED_ANYMORE",
        "token": "termination-token-1234"
    },
    "serviceName": "metrics-service-1"
}
```

**Output**:

```json
"Service termination confirmed"
```

---

## Troubleshooting

### Common Errors

| Error           | Description                                                                |
| --------------- | -------------------------------------------------------------------------- |
| `NodeApiError`  | Thrown when the operation fails due to authentication or permission issues |
| `Invalid Input` | Thrown when required parameters are missing or invalid                     |

### Error Handling

- **Authentication Errors**: Ensure your OVH API credentials are valid and have the necessary permissions.
- **Permission Errors**: Verify that the IAM actions required for the operation are enabled in your OVHcloud account.
- **Invalid Service Name**: Check that the service name exists and is correctly spelled.
- **Token Revoked**: If a token is revoked, you cannot interact with it. Create a new token if needed.

---

## References

- [OVHcloud Metrics API Documentation](https://eu.api.ovh.com/v1/metrics)
- [n8n OVHcloud Integration Overview](https://github.com/n8n-io/n8n-nodes-ovhcloud)
- [IAM Resource Metadata](https://github.com/n8n-io/n8n-nodes-ovhcloud/blob/main/api_docs/v1/iam.json)

---

## Change History

| Version | Date       | Description                                       |
| ------- | ---------- | ------------------------------------------------- |
| 1.0     | 2024-03-31 | Initial documentation for Metrics node operations |

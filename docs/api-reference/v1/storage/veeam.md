# OVHcloud Veeam Enterprise Plus Node Documentation

This document describes the **Veeam Enterprise Plus** node in n8n, which allows you to interact with OVHcloud's Veeam Enterprise Plus services via the OVHcloud API.

---

## Overview

The **Veeam Enterprise Plus** node provides a set of operations to manage Veeam backup servers within OVHcloud. It is designed to integrate seamlessly with OVHcloud's IAM (Identity and Access Management) system for authentication and authorization.

---

## Node Properties

### Common Properties

| Property    | Type     | Required | Description                                                                                                                                                       |
| ----------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `operation` | `string` | **Yes**  | The operation to perform. Supported values: `get`, `getServices`, `confirmTermination`, `register`, `serviceInfos`, `listTasks`, `getTask`, `terminate`, `update` |
| `resource`  | `string` | **Yes**  | The resource type. Must be `veeamEnterprise`.                                                                                                                     |

---

## Operations

### 1. List Veeam Enterprise Plus Services

**Operation Name:** `getServices`

**Description:**
Lists all Veeam Enterprise Plus services available to the authenticated user.

**API Status:** Beta version

**HTTP Method:** GET

**Path:** `/veeam/veeamEnterprise`

**Parameters:**

| Parameter | Type                                  | Required | Description                                                                            |
| --------- | ------------------------------------- | -------- | -------------------------------------------------------------------------------------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | No       | Filter resources based on IAM tags. See [IAM Tag Filter](#iam-tag-filter) for details. |

**Response Type:** `string[]`

**IAM Actions:**

- `veeamEnterprise:apiovh:get` (required: true)

**Example:**

```json
{
    "operation": "getServices",
    "resource": "veeamEnterprise"
}
```

---

### 2. Get Veeam Enterprise Plus Service Details

**Operation Name:** `get`

**Description:**
Retrieves detailed information about a specific Veeam Enterprise Plus service.

**API Status:** Beta version

**HTTP Method:** GET

**Path:** `/veeam/veeamEnterprise/{serviceName}`

**Parameters:**

| Parameter     | Type     | Required | Description                                           |
| ------------- | -------- | -------- | ----------------------------------------------------- |
| `serviceName` | `string` | **Yes**  | The domain name of the Veeam Enterprise Plus service. |

**Response Type:** [Veeam Enterprise Plus Account with IAM](#veeam-enterprise-plus-account-with-iam)

**IAM Actions:**

- `veeamEnterprise:apiovh:get` (required: true)

**Example:**

```json
{
    "operation": "get",
    "resource": "veeamEnterprise",
    "serviceName": "your-service-name.example.com"
}
```

---

### 3. Confirm Service Termination

**Operation Name:** `confirmTermination`

**Description:**
Confirms the termination of a Veeam Enterprise Plus service using the termination token received by email.

**API Status:** Beta version

**HTTP Method:** POST

**Path:** `/veeam/veeamEnterprise/{serviceName}/confirmTermination`

**Parameters:**

| Parameter     | Type                               | Required | Description                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------- | ---------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `commentary`  | `string`                           | No       | A commentary about the termination request.                                                                                                                                                                                                                                                                                                                                                       |
| `futureUse`   | `service.TerminationFutureUseEnum` | No       | What the service will be used for after termination. Allowed values: `NOT_REPLACING_SERVICE`, `OTHER`, `SUBSCRIBE_AN_OTHER_SERVICE`, `SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR`, `SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR`.                                                                                                                                                              |
| `reason`      | `service.TerminationReasonEnum`    | No       | The reason for terminating the service. Allowed values: `FEATURES_DONT_SUIT_ME`, `LACK_OF_PERFORMANCES`, `MIGRATED_TO_ANOTHER_OVH_PRODUCT`, `MIGRATED_TO_COMPETITOR`, `NOT_ENOUGH_RECOGNITION`, `NOT_NEEDED_ANYMORE`, `NOT_RELIABLE`, `NO_ANSWER`, `OTHER`, `PRODUCT_DIMENSION_DONT_SUIT_ME`, `PRODUCT_TOOLS_DONT_SUIT_ME`, `TOO_EXPENSIVE`, `TOO_HARD_TO_USE`, `UNSATIFIED_BY_CUSTOMER_SUPPORT`. |
| `serviceName` | `string`                           | **Yes**  | The domain name of the Veeam Enterprise Plus service.                                                                                                                                                                                                                                                                                                                                             |
| `token`       | `string`                           | **Yes**  | The termination token received by email.                                                                                                                                                                                                                                                                                                                                                          |

**Response Type:** `string`

**IAM Actions:**

- `veeamEnterprise:apiovh:confirmTermination` (required: true)

**Example:**

```json
{
    "operation": "confirmTermination",
    "resource": "veeamEnterprise",
    "serviceName": "your-service-name.example.com",
    "token": "your-termination-token",
    "commentary": "Optional commentary",
    "futureUse": "SUBSCRIBE_AN_OTHER_SERVICE",
    "reason": "LACK_OF_PERFORMANCES"
}
```

---

### 4. Register a Veeam Backup Server

**Operation Name:** `register`

**Description:**
Registers a Veeam Backup and Replication server with OVHcloud.

**API Status:** Beta version

**HTTP Method:** POST

**Path:** `/veeam/veeamEnterprise/{serviceName}/register`

**Parameters:**

| Parameter     | Type       | Required | Description                                                           |
| ------------- | ---------- | -------- | --------------------------------------------------------------------- |
| `ip`          | `ip`       | **Yes**  | The IP address of the Veeam Backup and Replication server.            |
| `password`    | `password` | **Yes**  | The password associated with the Veeam Backup and Replication server. |
| `serviceName` | `string`   | **Yes**  | The domain name of the Veeam Enterprise Plus service.                 |
| `username`    | `string`   | **Yes**  | The username for the Veeam Backup and Replication server.             |

**Response Type:** [Veeam Enterprise Plus Task](#veeam-enterprise-plus-task) array

**IAM Actions:**

- `veeamEnterprise:apiovh:register` (required: true)

**Example:**

```json
{
    "operation": "register",
    "resource": "veeamEnterprise",
    "serviceName": "your-service-name.example.com",
    "ip": "192.168.1.100",
    "password": "your-password",
    "username": "admin"
}
```

---

### 5. Get Service Information

**Operation Name:** `serviceInfos`

**Description:**
Retrieves information about a specific service.

**API Status:** Beta version

**HTTP Method:** GET

**Path:** `/veeam/veeamEnterprise/{serviceName}/serviceInfos`

**Parameters:**

| Parameter     | Type     | Required | Description                                           |
| ------------- | -------- | -------- | ----------------------------------------------------- |
| `serviceName` | `string` | **Yes**  | The domain name of the Veeam Enterprise Plus service. |

**Response Type:** [Services.Service](#services-service)

**IAM Actions:**

- `veeamEnterprise:apiovh:serviceInfos/get` (required: true)

**Example:**

```json
{
    "operation": "serviceInfos",
    "resource": "veeamEnterprise",
    "serviceName": "your-service-name.example.com"
}
```

---

### 6. Update Service Information

**Operation Name:** `update`

**Description:**
Updates the information of a specific Veeam Enterprise Plus service.

**API Status:** Beta version

**HTTP Method:** PUT

**Path:** `/veeam/veeamEnterprise/{serviceName}/serviceInfos`

**Parameters:**

| Parameter     | Type               | Required | Description                                                                          |
| ------------- | ------------------ | -------- | ------------------------------------------------------------------------------------ |
| `dataType`    | `services.Service` | **Yes**  | The new properties to update. See [Services.Service](#services-service) for details. |
| `serviceName` | `string`           | **Yes**  | The domain name of the Veeam Enterprise Plus service.                                |

**Response Type:** void

**IAM Actions:**

- `veeamEnterprise:apiovh:serviceInfos/edit` (required: true)

**Example:**

```json
{
    "operation": "update",
    "resource": "veeamEnterprise",
    "serviceName": "your-service-name.example.com",
    "dataType": {
        "domain": "your-service-name.example.com",
        "renewalType": "automaticV2024"
    }
}
```

---

### 7. List Operations (Tasks)

**Operation Name:** `listTasks`

**Description:**
Lists all operations (tasks) associated with a Veeam Enterprise Plus service.

**API Status:** Beta version

**HTTP Method:** GET

**Path:** `/veeam/veeamEnterprise/{serviceName}/task`

**Parameters:**

| Parameter     | Type                            | Required | Description                                                                                                                                                     |
| ------------- | ------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`        | `string`                        | No       | Filter the value of the name property (like).                                                                                                                   |
| `serviceName` | `string`                        | **Yes**  | The domain name of the Veeam Enterprise Plus service.                                                                                                           |
| `state`       | `veeamEnterprise.TaskStateEnum` | No       | Filter the value of the state property (=). Allowed values: `canceled`, `doing`, `done`, `error`, `toCreate`, `todo`, `unfixed`, `waiting`, `waitingForChilds`. |

**Response Type:** `long[]`

**IAM Actions:**

- `veeamEnterprise:apiovh:task/get` (required: true)

**Example:**

```json
{
    "operation": "listTasks",
    "resource": "veeamEnterprise",
    "serviceName": "your-service-name.example.com",
    "state": "done"
}
```

---

### 8. Get Operation Details

**Operation Name:** `getTask`

**Description:**
Retrieves details about a specific operation (task) associated with a Veeam Enterprise Plus service.

**API Status:** Beta version

**HTTP Method:** GET

**Path:** `/veeam/veeamEnterprise/{serviceName}/task/{taskId}`

**Parameters:**

| Parameter     | Type     | Required | Description                                           |
| ------------- | -------- | -------- | ----------------------------------------------------- |
| `serviceName` | `string` | **Yes**  | The domain name of the Veeam Enterprise Plus service. |
| `taskId`      | `long`   | **Yes**  | The ID of the task to retrieve.                       |

**Response Type:** [Veeam Enterprise Plus Task](#veeam-enterprise-plus-task)

**IAM Actions:**

- `veeamEnterprise:apiovh:task/get` (required: true)

**Example:**

```json
{
    "operation": "getTask",
    "resource": "veeamEnterprise",
    "serviceName": "your-service-name.example.com",
    "taskId": 12345
}
```

---

### 9. Terminate a Service

**Operation Name:** `terminate`

**Description:**
Requests the termination of a Veeam Enterprise Plus service. The admin contact will receive a termination token by email to confirm the termination using the `/confirmTermination` endpoint.

**API Status:** Beta version

**HTTP Method:** POST

**Path:** `/veeam/veeamEnterprise/{serviceName}/terminate`

**Parameters:**

| Parameter     | Type     | Required | Description                                           |
| ------------- | -------- | -------- | ----------------------------------------------------- |
| `serviceName` | `string` | **Yes**  | The domain name of the Veeam Enterprise Plus service. |

**Response Type:** `string`

**IAM Actions:**

- `veeamEnterprise:apiovh:terminate` (required: true)

**Example:**

```json
{
    "operation": "terminate",
    "resource": "veeamEnterprise",
    "serviceName": "your-service-name.example.com"
}
```

---

### 10. Update Veeam Enterprise Plus Configuration

**Operation Name:** `update`

**Description:**
Updates the configuration of a Veeam Enterprise Plus service.

**API Status:** Beta version

**HTTP Method:** POST

**Path:** `/veeam/veeamEnterprise/{serviceName}/update`

**Parameters:**

| Parameter     | Type       | Required | Description                                                           |
| ------------- | ---------- | -------- | --------------------------------------------------------------------- |
| `ip`          | `ip`       | **Yes**  | The IP address of the Veeam Backup and Replication server.            |
| `password`    | `password` | **Yes**  | The password associated with the Veeam Backup and Replication server. |
| `serviceName` | `string`   | **Yes**  | The domain name of the Veeam Enterprise Plus service.                 |
| `username`    | `string`   | **Yes**  | The username for the Veeam Backup and Replication server.             |

**Response Type:** [Veeam Enterprise Plus Task](#veeam-enterprise-plus-task) array

**IAM Actions:**

- `veeamEnterprise:apiovh:update` (required: true)

**Example:**

```json
{
    "operation": "update",
    "resource": "veeamEnterprise",
    "serviceName": "your-service-name.example.com",
    "ip": "192.168.1.100",
    "password": "your-new-password",
    "username": "admin"
}
```

---

## Response Types

### Veeam Enterprise Plus Account with IAM

**Description:**
Represents a Veeam Enterprise Plus account with embedded IAM resource metadata.

**Properties:**

| Property           | Type                                   | Description                                                                                             |
| ------------------ | -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `activationStatus` | `veeamEnterprise.ActivationStatusEnum` | The activation status of the Veeam backup server. Allowed values: `cancelled`, `doing`, `done`, `todo`. |
| `iam`              | `iam.ResourceMetadata`                 | IAM resource metadata. See [IAM Resource Metadata](#iam-resource-metadata) for details.                 |
| `ip`               | `ip`                                   | The IP address of the Veeam backup server.                                                              |
| `serviceName`      | `string`                               | The domain name of the Veeam Enterprise Plus service.                                                   |
| `sourceIp`         | `ip`                                   | The IP address of the OVH Enterprise Manager.                                                           |

---

### Veeam Enterprise Plus Task

**Description:**
Represents an operation (task) associated with a Veeam Enterprise Plus service.

**Properties:**

| Property    | Type                            | Description                                                                                                                                        |
| ----------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `endDate`   | `datetime`                      | The completion date of the task.                                                                                                                   |
| `name`      | `string`                        | The name of the task.                                                                                                                              |
| `progress`  | `long`                          | The current progress of the task.                                                                                                                  |
| `startDate` | `datetime`                      | The creation date of the task.                                                                                                                     |
| `state`     | `veeamEnterprise.TaskStateEnum` | The current state of the task. Allowed values: `canceled`, `doing`, `done`, `error`, `toCreate`, `todo`, `unfixed`, `waiting`, `waitingForChilds`. |
| `taskId`    | `long`                          | The ID of the task.                                                                                                                                |

---

### Services.Service

**Description:**
Represents details about a service, including its state, contacts, and renewal information.

**Properties:**

| Property                | Type                      | Description                                                                                                                                                                                |
| ----------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `canDeleteAtExpiration` | `boolean`                 | Indicates if the service can be set up to be deleted at expiration.                                                                                                                        |
| `contactAdmin`          | `string`                  | The admin contact for the service.                                                                                                                                                         |
| `contactBilling`        | `string`                  | The billing contact for the service.                                                                                                                                                       |
| `contactTech`           | `string`                  | The technical contact for the service.                                                                                                                                                     |
| `creation`              | `date`                    | The creation date of the service.                                                                                                                                                          |
| `domain`                | `string`                  | The domain name of the service.                                                                                                                                                            |
| `engagedUpTo`           | `date`                    | The date up to which the service is engaged.                                                                                                                                               |
| `expiration`            | `date`                    | The expiration date of the service.                                                                                                                                                        |
| `possibleRenewPeriod`   | `long[]`                  | All possible renewal periods for the service in months.                                                                                                                                    |
| `renew`                 | `service.RenewType`       | The renewal type of the service. See [Service Renew Type](#service-renew-type) for details.                                                                                                |
| `renewalType`           | `service.RenewalTypeEnum` | The detailed renewal type of the service. Allowed values: `automaticForcedProduct`, `automaticV2012`, `automaticV2014`, `automaticV2016`, `automaticV2024`, `manual`, `oneShot`, `option`. |
| `serviceId`             | `long`                    | The unique identifier of the service.                                                                                                                                                      |
| `status`                | `service.StateEnum`       | The status of the service. Allowed values: `autorenewInProgress`, `expired`, `inCreation`, `ok`, `pendingDebt`, `unPaid`.                                                                  |

---

## Additional Types

### IAM Resource Metadata

**Description:**
Embedded metadata for IAM resources.

**Properties:**

| Property      | Type                             | Description                                                                               |
| ------------- | -------------------------------- | ----------------------------------------------------------------------------------------- |
| `displayName` | `string`                         | The display name of the resource.                                                         |
| `id`          | `uuid`                           | The unique identifier of the resource.                                                    |
| `state`       | `iam.ResourceMetadata.StateEnum` | The state of the resource. Allowed values: `EXPIRED`, `IN_CREATION`, `OK`, `SUSPENDED`.   |
| `tags`        | `map[string]string`              | The tags associated with the resource. Tags prefixed with `ovh:` are internally computed. |
| `urn`         | `string`                         | The unique resource name used in policies.                                                |

---

### IAM Resource Metadata StateEnum

**Description:**
Possible states for IAM resources.

**Allowed Values:**

- `EXPIRED`
- `IN_CREATION`
- `OK`
- `SUSPENDED`

---

### IAM Resource Tag Filter

**Description:**
Filter to apply on resource tags.

**Properties:**

| Property   | Type                                  | Description                                                                                           |
| ---------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `operator` | `iam.resource.TagFilter.OperatorEnum` | The operator to use for filtering. Allowed values: `EQ`, `EXISTS`, `ILIKE`, `LIKE`, `NEQ`, `NEXISTS`. |
| `value`    | `string`                              | The value to filter on.                                                                               |

---

### Service Renew Type

**Description:**
Type representing possible renewal options for a service.

**Properties:**

| Property             | Type      | Description                                             |
| -------------------- | --------- | ------------------------------------------------------- |
| `automatic`          | `boolean` | Indicates if the service is automatically renewed.      |
| `deleteAtExpiration` | `boolean` | Indicates if the service will be deleted at expiration. |
| `forced`             | `boolean` | Indicates if the renewal is forced.                     |
| `manualPayment`      | `boolean` | Indicates if manual payment is required for renewal.    |
| `period`             | `long`    | The period of renewal in months.                        |

---

### Service Renewal TypeEnum

**Description:**
Detailed renewal type of a service.

**Allowed Values:**

- `automaticForcedProduct`
- `automaticV2012`
- `automaticV2014`
- `automaticV2016`
- `automaticV2024`
- `manual`
- `oneShot`
- `option`

---

### Service StateEnum

**Description:**
Status of a service.

**Allowed Values:**

- `autorenewInProgress`
- `expired`
- `inCreation`
- `ok`
- `pendingDebt`
- `unPaid`

---

### Service Termination Future UseEnum

**Description:**
Possible future uses after service termination.

**Allowed Values:**

- `NOT_REPLACING_SERVICE`
- `OTHER`
- `SUBSCRIBE_AN_OTHER_SERVICE`
- `SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR`
- `SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR`

---

### Service Termination ReasonEnum

**Description:**
Possible reasons for service termination.

**Allowed Values:**

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

## Authentication

The **Veeam Enterprise Plus** node uses OVHcloud's **API** credential type for authentication. Ensure you have configured the following properties in your credential:

| Property            | Type     | Required | Description                                                |
| ------------------- | -------- | -------- | ---------------------------------------------------------- |
| `host`              | `string` | **Yes**  | The API endpoint host (e.g., `https://eu.api.ovh.com/v1`). |
| `applicationKey`    | `string` | **Yes**  | Your OVHcloud application key.                             |
| `applicationSecret` | `string` | **Yes**  | Your OVHcloud application secret.                          |
| `consumerKey`       | `string` | **Yes**  | Your OVHcloud consumer key.                                |

---

## Usage Notes

- **Beta Status:** Most operations are marked as **Beta**, indicating they may change or improve in future versions.
- **IAM Integration:** All operations require specific IAM actions for authorization. Ensure your OVHcloud account has the necessary permissions.
- **Termination Flow:** Terminating a service requires a two-step process: first, request termination via `/terminate`; then, confirm it via `/confirmTermination` using the token received by email.
- **Error Handling:** If an operation fails, the response will include an error state in the `state` property of the [Veeam Enterprise Plus Task](#veeam-enterprise-plus-task).

---

## Error Handling

- **NodeApiError:** Used for n8n-specific errors.
- **Descriptive Messages:** Errors include contextual information to help diagnose issues.
- **IAM Validation:** Ensure your credential has the required IAM actions before performing operations.

---

## Examples

### Example 1: List All Veeam Enterprise Plus Services

**Operation:** `getServices`

**Input:**

```json
{
    "operation": "getServices",
    "resource": "veeamEnterprise"
}
```

**Expected Output:**

```json
["service1.example.com", "service2.example.com"]
```

---

### Example 2: Get Service Details

**Operation:** `get`

**Input:**

```json
{
    "operation": "get",
    "resource": "veeamEnterprise",
    "serviceName": "service1.example.com"
}
```

**Expected Output:**

```json
{
    "activationStatus": "done",
    "ip": "192.168.1.100",
    "serviceName": "service1.example.com",
    "sourceIp": "203.0.113.45",
    "iam": {
        "id": "uuid-1234",
        "state": "OK",
        "urn": "urn:veeamEnterprise:service1.example.com"
    }
}
```

---

### Example 3: Register a Veeam Backup Server

**Operation:** `register`

**Input:**

```json
{
    "operation": "register",
    "resource": "veeamEnterprise",
    "serviceName": "service1.example.com",
    "ip": "192.168.1.100",
    "password": "your-password",
    "username": "admin"
}
```

**Expected Output:**

```json
[
    {
        "name": "Register Veeam Backup Server",
        "progress": 50,
        "state": "done",
        "taskId": 12345,
        "startDate": "2026-01-01T12:00:00Z",
        "endDate": "2026-01-01T12:30:00Z"
    }
]
```

---

### Example 4: Update Service Information

**Operation:** `update`

**Input:**

```json
{
    "operation": "update",
    "resource": "veeamEnterprise",
    "serviceName": "service1.example.com",
    "dataType": {
        "renewalType": "automaticV2024"
    }
}
```

**Expected Output:**

```json
[
    {
        "name": "Update Renewal Type",
        "progress": 100,
        "state": "done",
        "taskId": 12346,
        "startDate": "2026-01-01T12:00:00Z",
        "endDate": "2026-01-01T12:01:00Z"
    }
]
```

---

## Troubleshooting

### Common Issues

| Issue                                | Possible Cause                                | Solution                                                                                                                                         |
| ------------------------------------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Operation fails with error state** | Missing IAM permissions or invalid parameters | Check the `state` property in the response and ensure your credential has the required IAM actions. Verify all required parameters are provided. |
| **Termination token not received**   | Invalid admin contact or email issues         | Ensure the service's admin contact is correct and check your spam folder.                                                                        |
| **Task not found**                   | Incorrect task ID or service name             | Verify the `taskId` and `serviceName` parameters.                                                                                                |
| **IP address invalid**               | Incorrect IP format or unauthorized IP        | Ensure the IP address is valid and your OVHcloud account has permission to use it.                                                               |

---

### Error Handling Best Practices

- **Validate Inputs:** Ensure all required parameters are provided and correctly formatted before making API calls.
- **Check IAM Actions:** Verify that your OVHcloud credential includes all necessary IAM actions for the operation you are attempting.
- **Review Error Messages:** Use the descriptive error messages in the response to diagnose issues.
- **Retry Operations:** For transient errors, retry the operation after a short delay.

---

## References

- [OVHcloud API Documentation](https://api.ovh.com/)
- [n8n Workflow Documentation](https://docs.n8n.io/)
- [OVHcloud IAM Documentation](https://docs.ovh.com/en/latest/iam/iam-resource-metadata.html)
- [Veeam Enterprise Plus API Endpoints](https://api.ovh.com/console/#/veeam/veeamEnterprise)

---

## Change History

| Version | Date       | Description                                                                    |
| ------- | ---------- | ------------------------------------------------------------------------------ |
| 1.0     | 2026-03-31 | Initial documentation for Veeam Enterprise Plus node based on OVHcloud API v1. |

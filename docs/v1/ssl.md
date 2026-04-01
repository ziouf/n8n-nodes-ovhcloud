# OVHcloud SSL Node Documentation

## Overview

The **OVHcloud SSL Node** allows you to interact with OVHcloud's SSL certificate API within n8n workflows. This node provides operations to list SSL certificates, retrieve details for a specific certificate, and fetch task information related to certificate management.

---

## Credentials

The node requires authentication via the **OVH API** credential type. Ensure you have the following credentials configured in your n8n instance:

- **Host**: `https://eu.api.ovh.com/v1`
- **Application Key**: Your OVHcloud API application key
- **Application Secret**: Your OVHcloud API application secret
- **Consumer Key**: Your OVHcloud API consumer key

---

## Node Properties

### Common Properties

| Property       | Type   | Required | Description                                                    |
| -------------- | ------ | -------- | -------------------------------------------------------------- |
| `resourcePath` | string | Yes      | The base path for SSL operations: `/ssl`                       |
| `svcOperation` | string | Yes      | The operation to perform. See [Operations](#operations) below. |
| `svcType`      | string | Yes      | The type of SSL certificate: `DV`, `EV`, or `OV`               |

---

## Operations

### List SSL Certificates

**Description**: Retrieves a list of SSL certificates.

**HTTP Method**: `GET`

**Path**: `/ssl`

**Parameters**:

- **IAM Tags** (Optional): Filter resources based on IAM tags.
  - **Type**: `map[string][]iam.resource.TagFilter`
  - **Required**: No
  - **Description**: Filter SSL certificates using IAM tag operators.

**Response Type**: `string[]`

**Authentication**: Required

**IAM Actions**:

- `ssl:apiovh:get` (Required)

---

### Get SSL Certificate Details

**Description**: Retrieves detailed information about a specific SSL certificate.

**HTTP Method**: `GET`

**Path**: `/ssl/{serviceName}`

**Parameters**:

- **Service Name** (Required): The internal name of the certificate offer.
  - **Type**: `string`
  - **Required**: Yes
  - **Description**: The internal name of your certificate offer.

**Response Type**: `ssl.CertificateWithIAM`

**Authentication**: Required

**IAM Actions**:

- `ssl:apiovh:get` (Required)

---

### Get Service Information

**Description**: Retrieves service information for a specific SSL certificate.

**HTTP Method**: `GET`

**Path**: `/ssl/{serviceName}/serviceInfos`

**Parameters**:

- **Service Name** (Required): The internal name of the certificate offer.
  - **Type**: `string`
  - **Required**: Yes
  - **Description**: The internal name of your certificate offer.

**Response Type**: `services.Service`

**Authentication**: Required

**IAM Actions**:

- `ssl:apiovh:serviceInfos/get` (Required)

---

### Update Service Information

**Description**: Updates service information for a specific SSL certificate.

**HTTP Method**: `PUT`

**Path**: `/ssl/{serviceName}/serviceInfos`

**Parameters**:

- **Request Body** (Required): The service information to update.
  - **Type**: `services.Service`
  - **Required**: Yes
  - **Description**: Details about the service to update.
- **Service Name** (Required): The internal name of the certificate offer.
  - **Type**: `string`
  - **Required**: Yes
  - **Description**: The internal name of your certificate offer.

**Response Type**: `void`

**Authentication**: Required

**IAM Actions**:

- `ssl:apiovh:serviceInfos/edit` (Required)

---

### List Tasks of an SSL Certificate

**Description**: Retrieves a list of tasks associated with a specific SSL certificate.

**HTTP Method**: `GET`

**Path**: `/ssl/{serviceName}/tasks`

**Parameters**:

- **Service Name** (Required): The internal name of the certificate offer.
  - **Type**: `string`
  - **Required**: Yes
  - **Description**: The internal name of your certificate offer.

**Response Type**: `long[]`

**Authentication**: Required

**IAM Actions**:

- `ssl:apiovh:tasks/get` (Required)

---

### Get a Task of an SSL Certificate

**Description**: Retrieves detailed information about a specific task associated with an SSL certificate.

**HTTP Method**: `GET`

**Path**: `/ssl/{serviceName}/tasks/{taskId}`

**Parameters**:

- **Service Name** (Required): The internal name of the certificate offer.
  - **Type**: `string`
  - **Required**: Yes
  - **Description**: The internal name of your certificate offer.
- **Task ID** (Required): The unique identifier of the task.
  - **Type**: `long`
  - **Required**: Yes
  - **Description**: Task ID retrieved from the task list.

**Response Type**: `ssl.Operation`

**Authentication**: Required

**IAM Actions**:

- `ssl:apiovh:tasks/get` (Required)

---

## Response Types

### ssl.CertificateWithIAM

Represents an SSL certificate with IAM metadata.

**Properties**:

- **authority**: The authority that issued the certificate.
  - **Type**: `ssl.CertificateAuthorityEnum`
  - **Possible Values**: `comodo`, `sectigo`
  - **Read-only**: Yes
- **certificate**: The certificate content.
  - **Type**: `text`
  - **Read-only**: Yes
- **chain**: The issuer chain of the certificate.
  - **Type**: `text`
  - **Read-only**: Yes
- **commonName**: The common name (CN) of the certificate.
  - **Type**: `string`
  - **Read-only**: Yes
- **csr**: The Certificate Signing Request (CSR) used to create the certificate.
  - **Type**: `text`
  - **Read-only**: Yes
- **iam**: IAM metadata associated with the certificate.
  - **Type**: `iam.ResourceMetadata`
  - **Read-only**: Yes
- **serviceName**: The internal name of the certificate offer.
  - **Type**: `string`
  - **Read-only**: Yes
- **status**: The current status of the certificate.
  - **Type**: `ssl.CertificateStatusEnum`
  - **Possible Values**: `creating`, `error`, `ok`, `validating`
  - **Read-only**: Yes
- **subjectAltName**: The Subject Alternative Names (SANs) for multidomain certificates.
  - **Type**: `string[]`
  - **Read-only**: Yes
- **type**: The type of the certificate.
  - **Type**: `ssl.CertificateTypeEnum`
  - **Possible Values**: `DV`, `EV`, `OV`
  - **Read-only**: Yes
- **validityEnd**: The expiration date of the certificate.
  - **Type**: `datetime`
  - **Read-only**: Yes
- **validityStart**: The start date of the certificate's validity.
  - **Type**: `datetime`
  - **Read-only**: Yes

---

### ssl.Certificate

Represents an SSL certificate.

**Properties**:

- **authority**: The authority that issued the certificate.
  - **Type**: `ssl.CertificateAuthorityEnum`
  - **Possible Values**: `comodo`, `sectigo`
  - **Read-only**: Yes
- **certificate**: The certificate content.
  - **Type**: `text`
  - **Read-only**: Yes
- **chain**: The issuer chain of the certificate.
  - **Type**: `text`
  - **Read-only**: Yes
- **commonName**: The common name (CN) of the certificate.
  - **Type**: `string`
  - **Read-only**: Yes
- **csr**: The Certificate Signing Request (CSR) used to create the certificate.
  - **Type**: `text`
  - **Read-only**: Yes
- **serviceName**: The internal name of the certificate offer.
  - **Type**: `string`
  - **Read-only**: Yes
- **status**: The current status of the certificate.
  - **Type**: `ssl.CertificateStatusEnum`
  - **Possible Values**: `creating`, `error`, `ok`, `validating`
  - **Read-only**: Yes
- **subjectAltName**: The Subject Alternative Names (SANs) for multidomain certificates.
  - **Type**: `string[]`
  - **Read-only**: Yes
- **type**: The type of the certificate.
  - **Type**: `ssl.CertificateTypeEnum`
  - **Possible Values**: `DV`, `EV`, `OV`
  - **Read-only**: Yes
- **validityEnd**: The expiration date of the certificate.
  - **Type**: `datetime`
  - **Read-only**: Yes
- **validityStart**: The start date of the certificate's validity.
  - **Type**: `datetime`
  - **Read-only**: Yes

---

### ssl.Operation

Represents a task operation associated with an SSL certificate.

**Properties**:

- **doneDate**: The completion date of the task.
  - **Type**: `datetime`
  - **Read-only**: Yes
- **function**: The function name of the task.
  - **Type**: `ssl.OperationFunctionEnum`
  - **Possible Values**:
    - `acme_order_certificate`
    - `sectigo_deliver_certificate`
    - `sectigo_deliver_certificate_from_api`
    - `sectigo_order_certificate`
  - **Read-only**: Yes
- **lastUpdate**: The last update date of the task.
  - **Type**: `datetime`
  - **Read-only**: Yes
- **startDate**: The creation date of the task.
  - **Type**: `datetime`
  - **Read-only**: Yes
- **status**: The status of the task.
  - **Type**: `ssl.OperationStatusEnum`
  - **Possible Values**: `cancelled`, `doing`, `done`, `error`, `todo`
  - **Read-only**: Yes
- **taskId**: The unique identifier of the task.
  - **Type**: `long`
  - **Read-only**: Yes

---

### services.Service

Represents details about a service.

**Properties**:

- **canDeleteAtExpiration**: Indicates if the service can be set up to be deleted at expiration.
  - **Type**: `boolean`
  - **Read-only**: Yes
- **contactAdmin**: The admin contact for the service.
  - **Type**: `string`
  - **Read-only**: Yes
- **contactBilling**: The billing contact for the service.
  - **Type**: `string`
  - **Read-only**: Yes
- **contactTech**: The technical contact for the service.
  - **Type**: `string`
  - **Read-only**: Yes
- **creation**: The creation date of the service.
  - **Type**: `date`
  - **Read-only**: Yes
- **domain**: The domain associated with the service.
  - **Type**: `string`
  - **Read-only**: Yes
- **engagedUpTo**: The engagement end date.
  - **Type**: `date`
  - **Read-only**: Yes
- **expiration**: The expiration date of the service.
  - **Type**: `date`
  - **Read-only**: Yes
- **possibleRenewPeriod**: All possible renewal periods for the service in months.
  - **Type**: `long[]`
  - **Read-only**: Yes
- **renew**: Renewal configuration details.
  - **Type**: `service.RenewType`
  - **Read-only**: No
- **renewalType**: The renewal type of the service.
  - **Type**: `service.RenewalTypeEnum`
  - **Possible Values**:
    - `automaticForcedProduct`
    - `automaticV2012`
    - `automaticV2014`
    - `automaticV2016`
    - `manual`
    - `oneShot`
    - `option`
  - **Read-only**: Yes
- **serviceId**: The unique identifier of the service.
  - **Type**: `long`
  - **Read-only**: Yes
- **status**: The status of the service.
  - **Type**: `service.StateEnum`
  - **Possible Values**:
    - `autorenewInProgress`
    - `expired`
    - `inCreation`
    - `ok`
    - `pendingDebt`
    - `unPaid`
  - **Read-only**: Yes

---

## Usage Examples

### Example 1: List SSL Certificates

This example demonstrates how to list all SSL certificates available in your OVHcloud account.

**Steps**:

1. **Add the OVHcloud SSL Node** to your workflow.
2. **Configure the node**:
   - Set `resourcePath` to `/ssl`.
   - Set `svcOperation` to `executeList`.
   - Set `svcType` to `DV`, `EV`, or `OV` (or leave empty to list all types).
3. **Execute the workflow**.

**Expected Output**:

An array of service names (strings) representing your SSL certificates.

```json
["myDomain.com", "anotherDomain.com"]
```

---

### Example 2: Get SSL Certificate Details

This example retrieves detailed information about a specific SSL certificate.

**Steps**:

1. **Add the OVHcloud SSL Node** to your workflow.
2. **Configure the node**:
   - Set `resourcePath` to `/ssl/{serviceName}`.
   - Set `svcOperation` to `executeGet`.
   - Set `svcType` to `DV`, `EV`, or `OV`.
3. **Set the Service Name**:
   - Use the output from the **List SSL Certificates** operation as input.
   - For example, set `serviceName` to `{{ $json[0] }}` (if using the first certificate from the list).
4. **Execute the workflow**.

**Expected Output**:

A detailed SSL certificate object with the following structure:

```json
{
    "authority": "comodo",
    "certificate": "-----BEGIN CERTIFICATE-----...",
    "chain": "-----BEGIN CERTIFICATE-----...",
    "commonName": "myDomain.com",
    "csr": "-----BEGIN CERTIFICATE REQUEST-----...",
    "iam": {
        "displayName": "myDomain.com",
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "state": "OK",
        "tags": {}
    },
    "serviceName": "myDomain.com",
    "status": "ok",
    "subjectAltName": ["www.myDomain.com", "api.myDomain.com"],
    "type": "DV",
    "validityEnd": "2026-03-31T12:00:00Z",
    "validityStart": "2025-03-31T12:00:00Z"
}
```

---

### Example 3: List Tasks for an SSL Certificate

This example lists all tasks associated with a specific SSL certificate.

**Steps**:

1. **Add the OVHcloud SSL Node** to your workflow.
2. **Configure the node**:
   - Set `resourcePath` to `/ssl/{serviceName}/tasks`.
   - Set `svcOperation` to `executeList`.
   - Set `svcType` to `DV`, `EV`, or `OV`.
3. **Set the Service Name**:
   - Use the output from the **Get SSL Certificate Details** operation as input.
   - For example, set `serviceName` to `{{ $json.serviceName }}`.
4. **Execute the workflow**.

**Expected Output**:

An array of task IDs (longs) representing the tasks associated with your SSL certificate.

```json
[12345678, 87654321]
```

---

### Example 4: Get Task Details

This example retrieves detailed information about a specific task.

**Steps**:

1. **Add the OVHcloud SSL Node** to your workflow.
2. **Configure the node**:
   - Set `resourcePath` to `/ssl/{serviceName}/tasks/{taskId}`.
   - Set `svcOperation` to `executeGet`.
   - Set `svcType` to `DV`, `EV`, or `OV`.
3. **Set the Service Name**:
   - Use the output from the **Get SSL Certificate Details** operation as input.
   - For example, set `serviceName` to `{{ $json.serviceName }}`.
4. **Set the Task ID**:
   - Use the output from the **List Tasks for an SSL Certificate** operation as input.
   - For example, set `taskId` to `{{ $json[0] }}`.
5. **Execute the workflow**.

**Expected Output**:

A task operation object with the following structure:

```json
{
    "doneDate": "2026-03-31T12:00:00Z",
    "function": "sectigo_deliver_certificate",
    "lastUpdate": "2026-03-31T12:00:00Z",
    "startDate": "2026-03-30T12:00:00Z",
    "status": "done",
    "taskId": 12345678
}
```

---

## IAM Actions and Permissions

| IAM Action                     | Description                                                    |
| ------------------------------ | -------------------------------------------------------------- |
| `ssl:apiovh:get`               | Required for listing SSL certificates and retrieving details.  |
| `ssl:apiovh:tasks/get`         | Required for listing tasks associated with an SSL certificate. |
| `ssl:apiovh:serviceInfos/get`  | Required for retrieving service information.                   |
| `ssl:apiovh:serviceInfos/edit` | Required for updating service information.                     |

Ensure your OVHcloud API credentials have the appropriate permissions for the IAM actions required by your operations.

---

## Error Handling

The node throws **NodeApiError** for n8n-specific errors and handles API errors gracefully. Common error cases include:

- **Invalid Service Name**: If the `serviceName` provided does not exist.
- **Missing Required Parameters**: If mandatory parameters like `serviceName` are not provided.
- **Authentication Failures**: If the credentials are invalid or do not have the required permissions.
- **API Rate Limits**: If the OVHcloud API rate limits are exceeded.

**Example Error Response**:

```json
{
    "message": "SSL certificate not found",
    "details": {
        "error": "404 Not Found",
        "path": "/ssl/nonexistent.com"
    }
}
```

---

## Rate Limits

OVHcloud API has rate limits. Ensure your workflow respects these limits to avoid being throttled. For more details, refer to the [OVHcloud API documentation](https://api.ovh.com/).

---

## Notes

- **API Status**: All operations are in the **PRODUCTION** status.
- **Read-only Fields**: Most fields in the response types are read-only.
- **Stable Operations**: All operations are stable and production-ready.
- **Manual Testing**: Use `npm run dev` to test the node in n8n UI.

---

## References

- [OVHcloud SSL API Documentation](https://api.ovh.com/)
- [n8n Workflow Documentation](https://docs.n8n.io/)
- [IAM Resource Metadata](https://api.ovh.com/)
- [ssl.CertificateWithIAM](https://api.ovh.com/)
- [ssl.Certificate](https://api.ovh.com/)
- [ssl.Operation](https://api.ovh.com/)
- [services.Service](https://api.ovh.com/)

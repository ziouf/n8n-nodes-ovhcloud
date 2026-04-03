# OVHcloud Connect Node Documentation

This document provides technical documentation for the **OVHcloud Connect** node in n8n, covering available operations, parameters, response types, and authentication requirements.

---

## Overview

The OVHcloud Connect node is designed to interact with the OVHcloud API for managing OVHcloud Connect services, including operations related to services, POP configurations, interfaces, diagnostics, incidents, and monitoring.

All operations require authentication via the `OVH API` credential type and are scoped under the `ovhCloudConnect:apiovh` IAM action namespace.

---

## Authentication

- **Credential Type**: `OVH API`
- **Required**: Yes
- **IAM Actions**:
  - All operations require at least one of the following IAM actions:
    - `ovhCloudConnect:apiovh:get`
    - `ovhCloudConnect:apiovh:edit`
    - `ovhCloudConnect:apiovh:changeContact`
    - `ovhCloudConnect:apiovh:config/pop/get`
    - `ovhCloudConnect:apiovh:config/pop/create`
    - `ovhCloudConnect:apiovh:config/pop/delete`
    - `ovhCloudConnect:apiovh:config/pop/datacenter/get`
    - `ovhCloudConnect:apiovh:config/pop/datacenter/create`
    - `ovhCloudConnect:apiovh:config/pop/datacenter/delete`
    - `ovhCloudConnect:apiovh:config/pop/datacenter/extra/get`
    - `ovhCloudConnect:apiovh:config/pop/datacenter/extra/create`
    - `ovhCloudConnect:apiovh:config/pop/statistics/get`
    - `ovhCloudConnect:apiovh:config/status/get`
    - `ovhCloudConnect:apiovh:interface/get`
    - `ovhCloudConnect:apiovh:interface/lock`
    - `ovhCloudConnect:apiovh:interface/unlock`
    - `ovhCloudConnect:apiovh:interface/statistics/get`
    - `ovhCloudConnect:apiovh:log/kind/get`
    - `ovhCloudConnect:apiovh:log/url/create`
    - `ovhCloudConnect:apiovh:log/subscription/get`
    - `ovhCloudConnect:apiovh:log/subscription/create`
    - `ovhCloudConnect:apiovh:log/subscription/delete`
    - `ovhCloudConnect:apiovh:diagnostic/get`
    - `ovhCloudConnect:apiovh:diagnostic/create`
    - `ovhCloudConnect:apiovh:incident/get`
    - `ovhCloudConnect:apiovh:monitoring/get`
    - `ovhCloudConnect:apiovh:monitoring/create`
    - `ovhCloudConnect:apiovh:monitoring/delete`

---

## Available Operations

### Services

#### List Available Services

- **Path**: `/ovhCloudConnect`
- **HTTP Method**: `GET`
- **Description**: List available services
- **Parameters**:
  - **iamTags**: `map[string][]iam.resource.TagFilter` (Optional)
    - Filter resources on IAM tags
- **Response Type**: `uuid[]`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:get`

---

#### Get Service

- **Path**: `/ovhCloudConnect/{serviceName}`
- **HTTP Method**: `GET`
- **Description**: Get service details
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
- **Response Type**: `ovhcloudconnect.ServiceWithIAM`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:get`

---

#### Modify Service

- **Path**: `/ovhCloudConnect/{serviceName}`
- **HTTP Method**: `PUT`
- **Description**: Modify a service
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **Request Body**: `ovhcloudconnect.Update` (Required)
    - Contains the updated service configuration
- **Response Type**: `void`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:edit`

---

#### Confirm Service Termination

- **Path**: `/ovhCloudConnect/{serviceName}/confirmTermination`
- **HTTP Method**: `POST`
- **Description**: Confirm termination of a service
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **Request Body**: `services.confirmTermination` (Required)
    - Contains termination confirmation details
- **Response Type**: `string`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:confirmTermination`

---

#### Launch Contact Change Procedure

- **Path**: `/ovhCloudConnect/{serviceName}/changeContact`
- **HTTP Method**: `POST`
- **Description**: Launch a contact change procedure for a service
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **Request Body**: `services.changeContact` (Required)
    - Contains the new contact information
- **Response Type**: `long[]`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:changeContact`

---

### POP Configuration

#### Get POP Configuration

- **Path**: `/ovhCloudConnect/{serviceName}/config/pop`
- **HTTP Method**: `GET`
- **Description**: List available POP configurations linked to a service
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
- **Response Type**: `long[]`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:config/pop/get`

---

#### Create POP Configuration

- **Path**: `/ovhCloudConnect/{serviceName}/config/pop`
- **HTTP Method**: `POST`
- **Description**: Create a new POP configuration
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **Request Body**: `ovhcloudconnect.PopConfig` (Required)
    - Contains the POP configuration details
- **Response Type**: `ovhcloudconnect.Task`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:config/pop/create`

---

#### Get POP Configuration by ID

- **Path**: `/ovhCloudConnect/{serviceName}/config/pop/{popId}`
- **HTTP Method**: `GET`
- **Description**: Get a specific POP configuration
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **popId**: `long` (Required)
    - The unique identifier of the POP configuration
- **Response Type**: `ovhcloudconnect.PopConfig`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:config/pop/get`

---

#### Delete POP Configuration by ID

- **Path**: `/ovhCloudConnect/{serviceName}/config/pop/{popId}`
- **HTTP Method**: `DELETE`
- **Description**: Delete a specific POP configuration
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **popId**: `long` (Required)
    - The unique identifier of the POP configuration
- **Response Type**: `ovhcloudconnect.Task`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:config/pop/delete`

---

#### Get Datacenter Configuration

- **Path**: `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter`
- **HTTP Method**: `GET`
- **Description**: List available datacenter configurations linked to a POP
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **popId**: `long` (Required)
    - The unique identifier of the POP configuration
- **Response Type**: `long[]`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:config/pop/datacenter/get`

---

#### Create Datacenter Configuration

- **Path**: `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter`
- **HTTP Method**: `POST`
- **Description**: Create a new datacenter configuration
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **popId**: `long` (Required)
    - The unique identifier of the POP configuration
  - **Request Body**: `ovhcloudconnect.DatacenterConfig` (Required)
    - Contains the datacenter configuration details
- **Response Type**: `ovhcloudconnect.Task`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:config/pop/datacenter/create`

---

#### Get Datacenter Configuration by ID

- **Path**: `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}`
- **HTTP Method**: `GET`
- **Description**: Get a specific datacenter configuration
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **popId**: `long` (Required)
    - The unique identifier of the POP configuration
  - **datacenterId**: `long` (Required)
    - The unique identifier of the datacenter configuration
- **Response Type**: `ovhcloudconnect.DatacenterConfig`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:config/pop/datacenter/get`

---

#### Delete Datacenter Configuration by ID

- **Path**: `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}`
- **HTTP Method**: `DELETE`
- **Description**: Delete a specific datacenter configuration
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **popId**: `long` (Required)
    - The unique identifier of the POP configuration
  - **datacenterId**: `long` (Required)
    - The unique identifier of the datacenter configuration
- **Response Type**: `ovhcloudconnect.Task`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:config/pop/datacenter/delete`

---

#### Get Datacenter Extra Configuration

- **Path**: `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra`
- **HTTP Method**: `GET`
- **Description**: List available extra configurations for a datacenter
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **popId**: `long` (Required)
    - The unique identifier of the POP configuration
  - **datacenterId**: `long` (Required)
    - The unique identifier of the datacenter configuration
- **Response Type**: `long[]`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:config/pop/datacenter/extra/get`

---

#### Create Datacenter Extra Configuration

- **Path**: `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra`
- **HTTP Method**: `POST`
- **Description**: Create a new extra configuration for a datacenter
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **popId**: `long` (Required)
    - The unique identifier of the POP configuration
  - **datacenterId**: `long` (Required)
    - The unique identifier of the datacenter configuration
  - **Request Body**: `ovhcloudconnect.DatacenterExtraConfig` (Required)
    - Contains the extra configuration details
- **Response Type**: `ovhcloudconnect.Task`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:config/pop/datacenter/extra/create`

---

#### Get Datacenter Extra Configuration by ID

- **Path**: `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId}`
- **HTTP Method**: `GET`
- **Description**: Get a specific extra configuration
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **popId**: `long` (Required)
    - The unique identifier of the POP configuration
  - **datacenterId**: `long` (Required)
    - The unique identifier of the datacenter configuration
  - **extraId**: `long` (Required)
    - The unique identifier of the extra configuration
- **Response Type**: `ovhcloudconnect.DatacenterExtraConfig`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:config/pop/datacenter/extra/get`

---

#### Delete Datacenter Extra Configuration by ID

- **Path**: `/ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra/{extraId}`
- **HTTP Method**: `DELETE`
- **Description**: Delete a specific extra configuration
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **popId**: `long` (Required)
    - The unique identifier of the POP configuration
  - **datacenterId**: `long` (Required)
    - The unique identifier of the datacenter configuration
  - **extraId**: `long` (Required)
    - The unique identifier of the extra configuration
- **Response Type**: `ovhcloudconnect.Task`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:config/pop/datacenter/extra/delete`

---

### POP Statistics

#### Get POP Statistics

- **Path**: `/ovhCloudConnect/{serviceName}/config/pop/{popId}/statistics`
- **HTTP Method**: `GET`
- **Description**: Get statistics for a POP configuration
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **popId**: `long` (Required)
    - The unique identifier of the POP configuration
  - **period**: `MetricsPeriodEnum` (Required)
    - The period for which statistics are fetched (e.g., `1HOUR`, `1DAY`)
  - **type**: `MetricsTypeEnum` (Required)
    - The type of statistic to fetch (e.g., `cpu`, `memory`)
- **Response Type**: `ovhcloudconnect.Metrics[]`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:config/pop/statistics/get`

---

### POP Status

#### Get POP Status

- **Path**: `/ovhCloudConnect/{serviceName}/config/pop/{popId}/status`
- **HTTP Method**: `GET`
- **Description**: Get the current status of a POP configuration
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **popId**: `long` (Required)
    - The unique identifier of the POP configuration
- **Response Type**: `ovhcloudconnect.PopConfStatus`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:config/status/get`

---

### Interfaces

#### List Interfaces

- **Path**: `/ovhCloudConnect/{serviceName}/interface`
- **HTTP Method**: `GET`
- **Description**: List interfaces linked to a service
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
- **Response Type**: `long[]`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:interface/get`

---

#### Get Interface Details

- **Path**: `/ovhCloudConnect/{serviceName}/interface/{id}`
- **HTTP Method**: `GET`
- **Description**: Get details of a specific interface
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **id**: `long` (Required)
    - The unique identifier of the interface
- **Response Type**: `ovhcloudconnect.Interface`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:interface/get`

---

#### Lock Interface

- **Path**: `/ovhCloudConnect/{serviceName}/interface/{id}/lock`
- **HTTP Method**: `POST`
- **Description**: Lock a specific interface
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **id**: `long` (Required)
    - The unique identifier of the interface
- **Response Type**: `ovhcloudconnect.Task`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:interface/lock`

---

#### Unlock Interface

- **Path**: `/ovhCloudConnect/{serviceName}/interface/{id}/unlock`
- **HTTP Method**: `POST`
- **Description**: Unlock a specific interface
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **id**: `long` (Required)
    - The unique identifier of the interface
- **Response Type**: `ovhcloudconnect.Task`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:interface/unlock`

---

#### Get Interface Statistics

- **Path**: `/ovhCloudConnect/{serviceName}/interface/{id}/statistics`
- **HTTP Method**: `GET`
- **Description**: Get statistics for a specific interface
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **id**: `long` (Required)
    - The unique identifier of the interface
  - **period**: `MetricsPeriodEnum` (Required)
    - The period for which statistics are fetched (e.g., `1HOUR`, `1DAY`)
  - **type**: `MetricsTypeEnum` (Required)
    - The type of statistic to fetch (e.g., `cpu`, `memory`)
- **Response Type**: `ovhcloudconnect.Metrics[]`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:interface/statistics/get`

---

#### Get Interface Status

- **Path**: `/ovhCloudConnect/{serviceName}/interface/{id}/status`
- **HTTP Method**: `GET`
- **Description**: Get the current status of an interface
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **id**: `long` (Required)
    - The unique identifier of the interface
- **Response Type**: `ovhcloudconnect.InterfaceStatus`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:interface/status/get`

---

### Diagnostics

#### List Diagnostics

- **Path**: `/ovhCloudConnect/{serviceName}/diagnostic`
- **HTTP Method**: `GET`
- **Description**: List diagnostics linked to a service
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
- **Response Type**: `long[]`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:diagnostic/get`

---

#### Get Diagnostic Details

- **Path**: `/ovhCloudConnect/{serviceName}/diagnostic/{id}`
- **HTTP Method**: `GET`
- **Description**: Get details of a specific diagnostic
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **id**: `long` (Required)
    - The unique identifier of the diagnostic
- **Response Type**: `ovhcloudconnect.Diagnostic`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:diagnostic/get`

---

#### Create Diagnostic

- **Path**: `/ovhCloudConnect/{serviceName}/diagnostic`
- **HTTP Method**: `POST`
- **Description**: Create a new diagnostic configuration
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **Request Body**: `ovhcloudconnect.DiagnosticConfiguration` (Required)
    - Contains the diagnostic configuration details
- **Response Type**: `ovhcloudconnect.Diagnostic`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:diagnostic/create`

---

### Incidents

#### List Incidents

- **Path**: `/ovhCloudConnect/{serviceName}/incident`
- **HTTP Method**: `GET`
- **Description**: List incidents linked to a service
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
- **Response Type**: `long[]`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:incident/get`

---

#### Get Incident Details

- **Path**: `/ovhCloudConnect/{serviceName}/incident/{id}`
- **HTTP Method**: `GET`
- **Description**: Get details of a specific incident
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **id**: `long` (Required)
    - The unique identifier of the incident
- **Response Type**: `ovhcloudconnect.Incident`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:incident/get`

---

### Logs

#### List Available Log Kinds

- **Path**: `/ovhCloudConnect/{serviceName}/log/kind`
- **HTTP Method**: `GET`
- **Description**: List available log kinds for a service
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
- **Response Type**: `string[]`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:log/kind/get`

---

#### Get Log Kind Details

- **Path**: `/ovhCloudConnect/{serviceName}/log/kind/{name}`
- **HTTP Method**: `GET`
- **Description**: Get details of a specific log kind
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **name**: `string` (Required)
    - The name of the log kind
- **Response Type**: `dbaas.logs.LogKind`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:log/kind/get`

---

#### List Log Subscriptions

- **Path**: `/ovhCloudConnect/{serviceName}/log/subscription`
- **HTTP Method**: `GET`
- **Description**: List log subscriptions for a service
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **kind**: `string` (Optional)
    - Filter on a specific kind (e.g., `audit`)
- **Response Type**: `uuid[]`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:log/subscription/get`

---

#### Create Log Subscription

- **Path**: `/ovhCloudConnect/{serviceName}/log/subscription`
- **HTTP Method**: `POST`
- **Description**: Create a log subscription
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **Request Body**: `dbaas.logs.LogSubscriptionCreation` (Required)
    - Contains the log subscription details
- **Response Type**: `dbaas.logs.LogSubscriptionResponse`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:log/subscription/create`
  - `ldp:apiovh:output/graylog/stream/forwardTo` (Required on the targeted LDP service)

---

#### Get Log Subscription Details

- **Path**: `/ovhCloudConnect/{serviceName}/log/subscription/{subscriptionId}`
- **HTTP Method**: `GET`
- **Description**: Get details of a specific log subscription
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **subscriptionId**: `uuid` (Required)
    - The unique identifier of the log subscription
- **Response Type**: `dbaas.logs.LogSubscription`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:log/subscription/get`

---

#### Delete Log Subscription

- **Path**: `/ovhCloudConnect/{serviceName}/log/subscription/{subscriptionId}`
- **HTTP Method**: `DELETE`
- **Description**: Delete a specific log subscription
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **subscriptionId**: `uuid` (Required)
    - The unique identifier of the log subscription
- **Response Type**: `dbaas.logs.LogSubscriptionResponse`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:log/subscription/delete`

---

#### Generate Temporary Logs URL

- **Path**: `/ovhCloudConnect/{serviceName}/log/url`
- **HTTP Method**: `POST`
- **Description**: Generate a temporary URL to retrieve logs
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **Request Body**: `dbaas.logs.LogUrlCreation` (Required)
    - Contains the URL generation details
- **Response Type**: `dbaas.logs.TemporaryLogsLink`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:log/url/create`

---

### Monitoring

#### List Monitoring Alerts

- **Path**: `/ovhCloudConnect/{serviceName}/monitoring`
- **HTTP Method**: `GET`
- **Description**: List monitoring alerts for a service
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
- **Response Type**: `ovhcloudconnect.Monitoring[]`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:monitoring/get`

---

#### Create Monitoring Subscription

- **Path**: `/ovhCloudConnect/{serviceName}/monitoring`
- **HTTP Method**: `POST`
- **Description**: Create a new monitoring subscription
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
  - **Request Body**: `ovhcloudconnect.Subscriptions` (Required)
    - Contains the subscription details
- **Response Type**: `void`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:monitoring/create`

---

#### Delete Monitoring Subscription

- **Path**: `/ovhCloudConnect/{serviceName}/monitoring`
- **HTTP Method**: `DELETE`
- **Description**: Delete a monitoring subscription
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
- **Response Type**: `void`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:monitoring/delete`

---

### Migration

#### Get Migration Service Information

- **Path**: `/ovhCloudConnect/{serviceName}/migration`
- **HTTP Method**: `GET`
- **Description**: Get information about the migration service for a specific service
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
- **Response Type**: `ovhcloudconnect.Migration`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:migration/get`

---

#### Create Migration Service

- **Path**: `/ovhCloudConnect/{serviceName}/migration`
- **HTTP Method**: `POST`
- **Description**: Create a new migration service
- **Parameters**:
  - **serviceName**: `uuid` (Required)
    - The unique identifier of the service
- **Response Type**: `void`
- **Authentication**: Required
- **IAM Actions**:
  - `ovhCloudConnect:apiovh:migration/create`

---

## Notes

### API Status

- **PRODUCTION**: Stable production version of the API
- **BETA**: Beta version of the API (may be subject to changes)

### Authentication Requirements

- All operations require authentication via the `OVH API` credential type.
- Ensure your OVHcloud account has the necessary IAM permissions before using this node.

### Error Handling

- If an operation fails, the node will throw a `NodeApiError` with a descriptive message.
- Validate inputs (e.g., `uuid` formats) before making API calls to avoid errors.

---

## Usage Examples

### List Available Services

```json
{
    "parameters": {
        "iamTags": {}
    }
}
```

**Response**: `uuid[]`

---

### Get Service Details

```json
{
    "parameters": {
        "serviceName": "123e4567-e89b-12d3-a456-426614174000"
    }
}
```

**Response**: `ovhcloudconnect.ServiceWithIAM`

---

### Create POP Configuration

```json
{
    "parameters": {
        "serviceName": "123e4567-e89b-12d3-a456-426614174000",
        "popConfig": {
            "datacenter": "gra1",
            "region": "GRA",
            "plan": "essential"
        }
    }
}
```

**Response**: `ovhcloudconnect.Task`

---

### Delete Datacenter Configuration

```json
{
    "parameters": {
        "serviceName": "123e4567-e89b-12d3-a456-426614174000",
        "popId": 12345,
        "datacenterId": 67890
    }
}
```

**Response**: `ovhcloudconnect.Task`

---

## Troubleshooting

### Authentication Errors

- **Error**: `NodeApiError` with message indicating missing IAM permissions
- **Solution**: Ensure your OVHcloud account has the required IAM permissions for the operation you are attempting.

---

### Invalid UUID Format

- **Error**: `NodeApiError` with message indicating invalid UUID
- **Solution**: Validate that the `serviceName`, `popId`, `datacenterId`, `interfaceId`, or any other UUID parameter follows the standard UUID format (e.g., `123e4567-e89b-12d3-a456-426614174000`).

---

### Operation Not Supported

- **Error**: `NodeApiError` with message indicating unsupported operation
- **Solution**: Verify that the operation path is correct and that the HTTP method is supported for the given endpoint.

---

## References

- [OVHcloud API Documentation](https://api.ovh.com/)
- [n8n Workflow Documentation](https://docs.n8n.io/)
- [OVHcloud Connect Node Source Code](../../nodes/OvhCloud/OvhCloud.node.ts)
- [OVHcloud IAM Permissions](https://docs.ovh.com/en/public-cloud/iam/iam_permissions.html)

---

## Versioning

- **API Version**: `1.0`
- **Node Version**: Aligned with `n8n-nodes-base` conventions
- **Last Updated**: `2026-03-31`

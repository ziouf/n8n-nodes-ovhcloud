# OVHcloud Services API v1

This document describes the available API endpoints for managing OVHcloud services in the **v1** API version. These endpoints allow you to list, retrieve, update, delete, and perform operations related to your services, including billing engagements, consumption tracking, and Savings Plans.

---

## Table of Contents

- [Overview](#overview)
- [Authentication](#authentication)
- [Endpoints](#endpoints)
  - [List Services](#list-services)
  - [Get Service Details](#get-service-details)
  - [Delete Service](#delete-service)
  - [Update Service](#update-service)
  - [Billing Engagement](#billing-engagement)
  - [Consumption Tracking](#consumption-tracking)
  - [Detach Options](#detach-options)
  - [Savings Plans](#savings-plans)
    - [List Contracts for Savings Plans](#list-contracts-for-savings-plans)
    - [List Subscribable Savings Plan Offers](#list-subscribable-savings-plan-offers)
    - [Subscribe to a Savings Plan](#subscribe-to-a-savings-plan)
    - [Simulate Savings Plan Subscription](#simulate-savings-plan-subscription)
    - [List Subscribed Savings Plans](#list-subscribed-savings-plans)
    - [Fetch a Subscribed Savings Plan](#fetch-a-subscribed-savings-plan)
    - [Update a Subscribed Savings Plan](#update-a-subscribed-savings-plan)
    - [Change Savings Plan Period End Action](#change-savings-plan-period-end-action)
    - [Resize a Savings Plan](#resize-a-savings-plan)
    - [List Savings Plan Periods](#list-savings-plan-periods)
    - [Terminate a Savings Plan](#terminate-a-savings-plan)
  - [Forms](#forms)
    - [List Available Forms](#list-available-forms)
    - [Get Form Description](#get-form-description)
    - [Post Form Answers](#post-form-answers)

---

## Overview

The **v1** API provides endpoints for managing OVHcloud services, including:

- **List Services**: Retrieve a list of all your services with optional filtering and sorting.
- **Get Service Details**: Fetch detailed information about a specific service.
- **Delete Service**: Terminate a service without confirmation.
- **Update Service**: Modify service information.
- **Billing Engagement**: Retrieve engagement details for a service.
- **Consumption Tracking**: Monitor resource consumption and forecast.
- **Detach Options**: Migrate option offers to standalone offers.
- **Savings Plans**: Subscribe to Savings Plans and manage existing subscriptions.
- **Forms**: Retrieve and submit forms related to your services.

### API Status

- **Beta**: Marked as `BETA` in `apiStatus.value`, indicating these endpoints are in beta testing.
- **Production**: Marked as `PRODUCTION` in `apiStatus.value`, indicating stable and production-ready endpoints.

---

## Authentication

All endpoints require authentication unless explicitly marked as `noAuthentication: true`. Authentication is handled via OVHcloud's IAM (Identity and Access Management) system. Each endpoint specifies the required IAM actions under the `iamActions` field.

### Required IAM Actions

| Endpoint                 | Required IAM Action                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| **List Services**        | `account:apiovh:services/get`                                                                                         |
| **Get Service Details**  | `account:apiovh:services/get`                                                                                         |
| **Delete Service**       | `account:apiovh:services/terminateWithoutConfirmation`                                                                |
| **Update Service**       | `account:apiovh:services/edit`                                                                                        |
| **Billing Engagement**   | `account:apiovh:services/billing/engagement/get`                                                                      |
| **Consumption Tracking** | `account:apiovh:services/consumption/get`                                                                             |
| **Detach Options**       | `account:apiovh:services/detach/get`                                                                                  |
| **Savings Plans**        | `account:apiovh:savingsPlans/get` (or `publicCloudProject:apiovh:savingsPlans/get` for Public Cloud Project services) |
| **Forms**                | `account:apiovh:services/form/get`                                                                                    |

---

## Endpoints

### List Services

**Path**: `/services`

**HTTP Method**: `GET`

**Description**: List all available services with optional filtering and sorting.

**Parameters**:

| Name           | Data Type | Param Type | Required | Description                                                                        |
| -------------- | --------- | ---------- | -------- | ---------------------------------------------------------------------------------- |
| `orderBy`      | `string`  | `query`    | No       | Order services by their properties (e.g., `services.expanded.Service` properties). |
| `resourceName` | `string`  | `query`    | No       | Filter services by their `resourceName` (e.g., `resource.name`).                   |
| `routes`       | `string`  | `query`    | No       | Filter services by API route path (comma-separated).                               |
| `sort`         | `string`  | `query`    | No       | Sort results generated by `orderBy`.                                               |

**Response Type**: `long[]` (list of service IDs)

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services?orderBy=services.expanded.Service&resourceName=resource.name&sort=services.expanded.Service"
```

**Example Response**:

```json
[12345678, 87654321]
```

---

### Get Service Details

**Path**: `/services/{serviceId}`

**HTTP Method**: `GET`

**Description**: Retrieve detailed information about a specific service.

**Parameters**:

| Name        | Data Type | Param Type | Required | Description                        |
| ----------- | --------- | ---------- | -------- | ---------------------------------- |
| `serviceId` | `long`    | `path`     | Yes      | The ID of the service to retrieve. |

**Response Type**: `services.expanded.Service`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services/12345678"
```

**Example Response**:

```json
{
    "serviceId": 12345678,
    "name": "myService",
    "description": "Service description",
    "status": "ACTIVE",
    "plan": "planCode",
    "orderId": 987654321
}
```

---

### Delete Service

**Path**: `/services/{serviceId}`

**HTTP Method**: `DELETE`

**Description**: Delete a service without asking for confirmation.

**Parameters**:

| Name        | Data Type | Param Type | Required | Description                      |
| ----------- | --------- | ---------- | -------- | -------------------------------- |
| `serviceId` | `long`    | `path`     | Yes      | The ID of the service to delete. |

**Response Type**: `services.terminate.TerminationAnswer`

**Example Request**:

```bash
curl -X DELETE "https://api.ovh.com/1.0/services/12345678"
```

**Example Response**:

```json
{
    "status": "TERMINATED",
    "message": "Service successfully terminated"
}
```

---

### Update Service

**Path**: `/services/{serviceId}`

**HTTP Method**: `PUT`

**Description**: Update service information.

**Parameters**:

| Name        | Data Type                 | Param Type | Required | Description                      |
| ----------- | ------------------------- | ---------- | -------- | -------------------------------- |
| `service`   | `services.update.Service` | `body`     | Yes      | The updated service information. |
| `serviceId` | `long`                    | `path`     | Yes      | The ID of the service to update. |

**Response Type**: `void`

**Example Request**:

```bash
curl -X PUT "https://api.ovh.com/1.0/services/12345678" \
  -H "Content-Type: application/json" \
  -d '{
    "serviceId": 12345678,
    "name": "updatedServiceName",
    "description": "Updated description"
  }'
```

**Example Response**:

```json
{}
```

---

### Billing Engagement

**Path**: `/services/{serviceId}/billing/engagement`

**HTTP Method**: `GET`

**Description**: Retrieve engagement details for a given service.

**Parameters**:

| Name        | Data Type | Param Type | Required | Description                                               |
| ----------- | --------- | ---------- | -------- | --------------------------------------------------------- |
| `serviceId` | `long`    | `path`     | Yes      | The ID of the service to retrieve engagement details for. |

**Response Type**: `services.billing.engagement.Engagement`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services/12345678/billing/engagement"
```

**Example Response**:

```json
{
    "engagementId": 1,
    "serviceId": 12345678,
    "startDate": "2024-01-01T00:00:00Z",
    "endDate": "2024-12-31T23:59:59Z",
    "status": "ACTIVE"
}
```

---

### Consumption Tracking

#### Get Ongoing Consumption

**Path**: `/services/{serviceId}/consumption`

**HTTP Method**: `GET`

**Description**: Retrieve a summary of the ongoing consumption of a specific service.

**Parameters**:

| Name        | Data Type | Param Type | Required | Description                                                |
| ----------- | --------- | ---------- | -------- | ---------------------------------------------------------- |
| `serviceId` | `long`    | `path`     | Yes      | The ID of the service to retrieve consumption details for. |

**Response Type**: `services.consumption.Summary`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services/12345678/consumption"
```

**Example Response**:

```json
{
    "serviceId": 12345678,
    "currentConsumption": {
        "resource": "CPU",
        "value": 50
    }
}
```

#### Get Resource Consumption

**Path**: `/services/{serviceId}/consumption/element`

**HTTP Method**: `GET`

**Description**: Retrieve each resource consumed by a specific service.

**Parameters**:

| Name         | Data Type | Param Type | Required | Description                                                 |
| ------------ | --------- | ---------- | -------- | ----------------------------------------------------------- |
| `planFamily` | `string`  | `query`    | No       | Filter elements by commercial offer family.                 |
| `serviceId`  | `long`    | `path`     | Yes      | The ID of the service to retrieve consumption elements for. |
| `uniqueId`   | `string`  | `query`    | No       | Filter elements by a specific unique ID.                    |

**Response Type**: `services.consumption.Element[]`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services/12345678/consumption/element?planFamily=GPU"
```

**Example Response**:

```json
[
    {
        "uniqueId": "gpu-1",
        "planFamily": "GPU",
        "consumption": 100
    }
]
```

#### Get Forecasted Consumption

**Path**: `/services/{serviceId}/consumption/forecast`

**HTTP Method**: `GET`

**Description**: Retrieve a summary of the forecasted consumption of a specific service.

**Parameters**:

| Name        | Data Type | Param Type | Required | Description                                                           |
| ----------- | --------- | ---------- | -------- | --------------------------------------------------------------------- |
| `serviceId` | `long`    | `path`     | Yes      | The ID of the service to retrieve forecasted consumption details for. |

**Response Type**: `services.consumption.Summary`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services/12345678/consumption/forecast"
```

**Example Response**:

```json
{
    "serviceId": 12345678,
    "forecastedConsumption": {
        "resource": "RAM",
        "value": 75
    }
}
```

#### Get Consumption History

**Path**: `/services/{serviceId}/consumption/history`

**HTTP Method**: `GET`

**Description**: List the consumption history of a specific service.

**Parameters**:

| Name         | Data Type | Param Type | Required | Description                                                |
| ------------ | --------- | ---------- | -------- | ---------------------------------------------------------- |
| `planFamily` | `string`  | `query`    | No       | Filter history entries by commercial offer family.         |
| `serviceId`  | `long`    | `path`     | Yes      | The ID of the service to retrieve consumption history for. |
| `uniqueId`   | `string`  | `query`    | No       | Filter history entries by a specific unique ID.            |

**Response Type**: `long[]` (list of history entry IDs)

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services/12345678/consumption/history"
```

**Example Response**:

```json
[1, 2, 3]
```

---

### Detach Options

#### List Offers for Detachment

**Path**: `/services/{serviceId}/detach`

**HTTP Method**: `GET`

**Description**: List offers this option can be converted to.

**Parameters**:

| Name        | Data Type | Param Type | Required | Description                                   |
| ----------- | --------- | ---------- | -------- | --------------------------------------------- |
| `serviceId` | `long`    | `path`     | Yes      | The ID of the service to detach options from. |

**Response Type**: `services.GenericProductDefinition[]`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services/12345678/detach"
```

**Example Response**:

```json
[
    {
        "planCode": "offer1",
        "description": "Description of offer1"
    },
    {
        "planCode": "offer2",
        "description": "Description of offer2"
    }
]
```

#### View Detachment Offer

**Path**: `/services/{serviceId}/detach/{planCode}`

**HTTP Method**: `GET`

**Description**: View details about an offer this option can be converted to.

**Parameters**:

| Name        | Data Type | Param Type | Required | Description                                   |
| ----------- | --------- | ---------- | -------- | --------------------------------------------- |
| `planCode`  | `string`  | `path`     | Yes      | The plan code of the offer to view.           |
| `serviceId` | `long`    | `path`     | Yes      | The ID of the service to detach options from. |

**Response Type**: `services.GenericProductDefinition`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services/12345678/detach/offer1"
```

**Example Response**:

```json
{
    "planCode": "offer1",
    "description": "Description of offer1",
    "price": 100
}
```

#### Execute Detachment

**Path**: `/services/{serviceId}/detach/{planCode}/execute`

**HTTP Method**: `POST`

**Description**: Perform the migration to a standalone offer. May require payment for an order.

**Parameters**:

| Name        | Data Type                                   | Param Type | Required | Description                                   |
| ----------- | ------------------------------------------- | ---------- | -------- | --------------------------------------------- |
| `service`   | `services.operation.DetachExecutionRequest` | `body`     | Yes      | The detachment execution request.             |
| `planCode`  | `string`                                    | `path`     | Yes      | The plan code of the offer to migrate to.     |
| `serviceId` | `long`                                      | `path`     | Yes      | The ID of the service to detach options from. |

**Response Type**: `services.operation.Order`

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/services/12345678/detach/offer1/execute" \
  -H "Content-Type: application/json" \
  -d '{
    "serviceId": 12345678,
    "planCode": "offer1"
  }'
```

**Example Response**:

```json
{
    "orderId": 12345678,
    "status": "PENDING",
    "amount": 100
}
```

#### Simulate Detachment

**Path**: `/services/{serviceId}/detach/{planCode}/simulate`

**HTTP Method**: `POST`

**Description**: Simulate the migration to a standalone offer without generating an order or issuing changes to your service.

**Parameters**:

| Name        | Data Type                                   | Param Type | Required | Description                                          |
| ----------- | ------------------------------------------- | ---------- | -------- | ---------------------------------------------------- |
| `service`   | `services.operation.DetachExecutionRequest` | `body`     | Yes      | The detachment execution request.                    |
| `planCode`  | `string`                                    | `path`     | Yes      | The plan code of the offer to simulate migration to. |
| `serviceId` | `long`                                      | `path`     | Yes      | The ID of the service to detach options from.        |

**Response Type**: `services.operation.Order`

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/services/12345678/detach/offer1/simulate" \
  -H "Content-Type: application/json" \
  -d '{
    "serviceId": 12345678,
    "planCode": "offer1"
  }'
```

**Example Response**:

```json
{
    "orderId": 12345678,
    "status": "SIMULATED",
    "amount": 0
}
```

---

### Savings Plans

#### List Contracts for Savings Plans

**Path**: `/services/{serviceId}/savingsPlans/contracts`

**HTTP Method**: `GET`

**Description**: List contracts automatically agreed when subscribing to Savings Plans for a specific project.

**Parameters**:

| Name        | Data Type | Param Type | Required | Description                                                |
| ----------- | --------- | ---------- | -------- | ---------------------------------------------------------- |
| `serviceId` | `long`    | `path`     | Yes      | The ID of the project to list Savings Plans contracts for. |

**Response Type**: `order.Contract[]`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services/12345678/savingsPlans/contracts"
```

**Example Response**:

```json
[
    {
        "contractId": 1,
        "status": "ACTIVE",
        "startDate": "2024-01-01T00:00:00Z",
        "endDate": "2024-12-31T23:59:59Z"
    }
]
```

#### List Subscribable Savings Plan Offers

**Path**: `/services/{serviceId}/savingsPlans/subscribable`

**HTTP Method**: `GET`

**Description**: List subscribable Savings Plan commercial offers for a given project.

**Parameters**:

| Name          | Data Type | Param Type | Required | Description                                                   |
| ------------- | --------- | ---------- | -------- | ------------------------------------------------------------- |
| `productCode` | `string`  | `query`    | No       | Filter offers by product code.                                |
| `serviceId`   | `long`    | `path`     | Yes      | The ID of the project to list subscribable Savings Plans for. |

**Response Type**: `services.savingsPlans.SubscribableSavingsPlanOffer[]`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services/12345678/savingsPlans/subscribable?productCode=compute"
```

**Example Response**:

```json
[
    {
        "offerId": 1,
        "name": "Compute Savings Plan",
        "description": "A Savings Plan for Compute resources",
        "price": 50
    }
]
```

#### Subscribe to a Savings Plan

**Path**: `/services/{serviceId}/savingsPlans/subscribe/execute`

**HTTP Method**: `POST`

**Description**: Subscribe to a Savings Plan. Applicable contracts will be automatically agreed to.

**Parameters**:

| Name        | Data Type                         | Param Type | Required | Description                                               |
| ----------- | --------------------------------- | ---------- | -------- | --------------------------------------------------------- |
| `service`   | `services.savingsPlans.Subscribe` | `body`     | Yes      | The Savings Plan subscription request.                    |
| `serviceId` | `long`                            | `path`     | Yes      | The ID of the project to subscribe to a Savings Plan for. |

**Response Type**: `services.savingsPlans.SavingsPlan`

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/services/12345678/savingsPlans/subscribe/execute" \
  -H "Content-Type: application/json" \
  -d '{
    "serviceId": 12345678,
    "offerId": 1,
    "startDate": "2024-01-01T00:00:00Z",
    "size": 100
  }'
```

**Example Response**:

```json
{
    "savingsPlanId": "123e4567-e89b-12d3-a456-426614174000",
    "status": "ACTIVE",
    "startDate": "2024-01-01T00:00:00Z",
    "endDate": "2024-12-31T23:59:59Z",
    "size": 100
}
```

#### Simulate Savings Plan Subscription

**Path**: `/services/{serviceId}/savingsPlans/subscribe/simulate`

**HTTP Method**: `POST`

**Description**: Simulate subscribing to a Savings Plan without generating an order or issuing changes to your service.

**Parameters**:

| Name        | Data Type                         | Param Type | Required | Description                                                          |
| ----------- | --------------------------------- | ---------- | -------- | -------------------------------------------------------------------- |
| `service`   | `services.savingsPlans.Subscribe` | `body`     | Yes      | The Savings Plan subscription request.                               |
| `serviceId` | `long`                            | `path`     | Yes      | The ID of the project to simulate subscribing to a Savings Plan for. |

**Response Type**: `services.savingsPlans.SimulatedSavingsPlan`

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/services/12345678/savingsPlans/subscribe/simulate" \
  -H "Content-Type: application/json" \
  -d '{
    "offerId": 1,
    "startDate": "2024-01-01T00:00:00Z",
    "size": 100
  }'
```

**Example Response**:

```json
{
    "savingsPlanId": "123e4567-e89b-12d3-a456-426614174000",
    "status": "SIMULATED",
    "startDate": "2024-01-01T00:00:00Z",
    "endDate": "2024-12-31T23:59:59Z",
    "size": 100
}
```

#### List Subscribed Savings Plans

**Path**: `/services/{serviceId}/savingsPlans/subscribed`

**HTTP Method**: `GET`

**Description**: List all subscribed Savings Plans for a specific project.

**Parameters**:

| Name        | Data Type | Param Type | Required | Description                                      |
| ----------- | --------- | ---------- | -------- | ------------------------------------------------ |
| `serviceId` | `long`    | `path`     | Yes      | The ID of the project to list Savings Plans for. |

**Response Type**: `services.savingsPlans.SavingsPlan[]`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services/12345678/savingsPlans/subscribed"
```

**Example Response**:

```json
[
    {
        "savingsPlanId": "123e4567-e89b-12d3-a456-426614174000",
        "status": "ACTIVE",
        "startDate": "2024-01-01T00:00:00Z",
        "endDate": "2024-12-31T23:59:59Z",
        "size": 100
    }
]
```

#### Fetch a Subscribed Savings Plan

**Path**: `/services/{serviceId}/savingsPlans/subscribed/{savingsPlanId}`

**HTTP Method**: `GET`

**Description**: Retrieve details about a specific subscribed Savings Plan.

**Parameters**:

| Name            | Data Type | Param Type | Required | Description                                        |
| --------------- | --------- | ---------- | -------- | -------------------------------------------------- |
| `savingsPlanId` | `uuid`    | `path`     | Yes      | The ID of the Savings Plan to retrieve.            |
| `serviceId`     | `long`    | `path`     | Yes      | The ID of the project the Savings Plan belongs to. |

**Response Type**: `services.savingsPlans.SavingsPlan`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services/12345678/savingsPlans/subscribed/123e4567-e89b-12d3-a456-426614174000"
```

**Example Response**:

```json
{
    "savingsPlanId": "123e4567-e89b-12d3-a456-426614174000",
    "status": "ACTIVE",
    "startDate": "2024-01-01T00:00:00Z",
    "endDate": "2024-12-31T23:59:59Z",
    "size": 100
}
```

#### Update a Subscribed Savings Plan

**Path**: `/services/{serviceId}/savingsPlans/subscribed/{savingsPlanId}`

**HTTP Method**: `PUT`

**Description**: Update a subscribed Savings Plan.

**Parameters**:

| Name            | Data Type                           | Param Type | Required | Description                                        |
| --------------- | ----------------------------------- | ---------- | -------- | -------------------------------------------------- |
| `savingsPlan`   | `services.savingsPlans.SavingsPlan` | `body`     | Yes      | The updated Savings Plan details.                  |
| `savingsPlanId` | `uuid`                              | `path`     | Yes      | The ID of the Savings Plan to update.              |
| `serviceId`     | `long`                              | `path`     | Yes      | The ID of the project the Savings Plan belongs to. |

**Response Type**: `services.savingsPlans.SavingsPlan`

**Example Request**:

```bash
curl -X PUT "https://api.ovh.com/1.0/services/12345678/savingsPlans/subscribed/123e4567-e89b-12d3-a456-426614174000" \
  -H "Content-Type: application/json" \
  -d '{
    "savingsPlanId": "123e4567-e89b-12d3-a456-426614174000",
    "size": 200,
    "status": "ACTIVE"
  }'
```

**Example Response**:

```json
{
    "savingsPlanId": "123e4567-e89b-12d3-a456-426614174000",
    "status": "ACTIVE",
    "size": 200,
    "startDate": "2024-01-01T00:00:00Z",
    "endDate": "2024-12-31T23:59:59Z"
}
```

#### Change Savings Plan Period End Action

**Path**: `/services/{serviceId}/savingsPlans/subscribed/{savingsPlanId}/changePeriodEndAction`

**HTTP Method**: `POST`

**Description**: Change the action occurring at the end of the Savings Plan period.

**Parameters**:

| Name                    | DataType                                      | Param Type | Required | Description                                        |
| ----------------------- | --------------------------------------------- | ---------- | -------- | -------------------------------------------------- |
| `changePeriodEndAction` | `services.savingsPlans.ChangePeriodEndAction` | `body`     | Yes      | The request containing the new end action.         |
| `savingsPlanId`         | `uuid`                                        | `path`     | Yes      | The ID of the Savings Plan to update.              |
| `serviceId`             | `long`                                        | `path`     | Yes      | The ID of the project the Savings Plan belongs to. |

**Response Type**: `services.savingsPlans.SavingsPlan`

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/services/12345678/savingsPlans/subscribed/123e4567-e89b-12d3-a456-426614174000/changePeriodEndAction" \
  -H "Content-Type: application/json" \
  -d '{
    "savingsPlanId": "123e4567-e89b-12d3-a456-426614174000",
    "endAction": "RENEW"
  }'
```

**Example Response**:

```json
{
    "savingsPlanId": "123e4567-e89b-12d3-a456-426614174000",
    "status": "ACTIVE",
    "endAction": "RENEW",
    "startDate": "2024-01-01T00:00:00Z",
    "endDate": "2024-12-31T23:59:59Z"
}
```

#### Resize a Savings Plan

**Path**: `/services/{serviceId}/savingsPlans/subscribed/{savingsPlanId}/changeSize`

**HTTP Method**: `POST`

**Description**: Resize a Savings Plan.

**Parameters**:

| Name            | DataType                           | Param Type | Required | Description                                        |
| --------------- | ---------------------------------- | ---------- | -------- | -------------------------------------------------- |
| `changeSize`    | `services.savingsPlans.ChangeSize` | `body`     | Yes      | The request containing the new size.               |
| `savingsPlanId` | `uuid`                             | `path`     | Yes      | The ID of the Savings Plan to resize.              |
| `serviceId`     | `long`                             | `path`     | Yes      | The ID of the project the Savings Plan belongs to. |

**Response Type**: `services.savingsPlans.SavingsPlan`

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/services/12345678/savingsPlans/subscribed/123e4567-e89b-12d3-a456-426614174000/changeSize" \
  -H "Content-Type: application/json" \
  -d '{
    "savingsPlanId": "123e4567-e89b-12d3-a456-426614174000",
    "size": 150
  }'
```

**Example Response**:

```json
{
    "savingsPlanId": "123e4567-e89b-12d3-a456-426614174000",
    "status": "ACTIVE",
    "size": 150,
    "startDate": "2024-01-01T00:00:00Z",
    "endDate": "2024-12-31T23:59:59Z"
}
```

#### List Savings Plan Periods

**Path**: `/services/{serviceId}/savingsPlans/subscribed/{savingsPlanId}/periods`

**HTTP Method**: `GET`

**Description**: List the period history of a given Savings Plan.

**Parameters**:

| Name            | DataType | Param Type | Required | Description                                        |
| --------------- | -------- | ---------- | -------- | -------------------------------------------------- |
| `savingsPlanId` | `uuid`   | `path`     | Yes      | The ID of the Savings Plan to list periods for.    |
| `serviceId`     | `long`   | `path`     | Yes      | The ID of the project the Savings Plan belongs to. |

**Response Type**: `services.savingsPlans.SavingsPlan.Period[]`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services/12345678/savingsPlans/subscribed/123e4567-e89b-12d3-a456-426614174000/periods"
```

**Example Response**:

```json
[
    {
        "periodId": 1,
        "startDate": "2024-01-01T00:00:00Z",
        "endDate": "2024-03-31T23:59:59Z",
        "size": 100
    }
]
```

#### Terminate a Savings Plan

**Path**: `/services/{serviceId}/savingsPlans/subscribed/{savingsPlanId}/terminate`

**HTTP Method**: `POST`

**Description**: Terminate a Savings Plan.

**Parameters**:

| Name            | DataType                            | Param Type | Required | Description                                        |
| --------------- | ----------------------------------- | ---------- | -------- | -------------------------------------------------- |
| `savingsPlan`   | `services.savingsPlans.SavingsPlan` | `body`     | Yes      | The request containing the termination details.    |
| `savingsPlanId` | `uuid`                              | `path`     | Yes      | The ID of the Savings Plan to terminate.           |
| `serviceId`     | `long`                              | `path`     | Yes      | The ID of the project the Savings Plan belongs to. |

**Response Type**: `services.savingsPlans.SavingsPlan`

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/services/12345678/savingsPlans/subscribed/123e4567-e89b-12d3-a456-426614174000/terminate" \
  -H "Content-Type: application/json" \
  -d '{
    "savingsPlanId": "123e4567-e89b-12d3-a456-426614174000"
  }'
```

**Example Response**:

```json
{
    "savingsPlanId": "123e4567-e89b-12d3-a456-426614174000",
    "status": "TERMINATED",
    "startDate": "2024-01-01T00:00:00Z",
    "endDate": "2024-12-31T23:59:59Z"
}
```

---

### Forms

#### List Available Forms

**Path**: `/services/{serviceId}/form`

**HTTP Method**: `GET`

**Description**: List available forms for a specific service.

**Parameters**:

| Name        | DataType | Param Type | Required | Description                              |
| ----------- | -------- | ---------- | -------- | ---------------------------------------- |
| `serviceId` | `long`   | `path`     | Yes      | The ID of the service to list forms for. |

**Response Type**: `services.form.Description[]`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services/12345678/form"
```

**Example Response**:

```json
[
    {
        "formName": "form1",
        "description": "Description of form1"
    },
    {
        "formName": "form2",
        "description": "Description of form2"
    }
]
```

#### Get Form Description

**Path**: `/services/{serviceId}/form/{formName}`

**HTTP Method**: `GET`

**Description**: Retrieve the description of a specific form for a service.

**Parameters**:

| Name        | DataType | Param Type | Required | Description                                |
| ----------- | -------- | ---------- | -------- | ------------------------------------------ |
| `formName`  | `string` | `path`     | Yes      | The name of the form to retrieve.          |
| `serviceId` | `long`   | `path`     | Yes      | The ID of the service the form belongs to. |

**Response Type**: `services.form.Description`

**Example Request**:

```bash
curl -X GET "https://api.ovh.com/1.0/services/12345678/form/form1"
```

**Example Response**:

```json
{
    "formName": "form1",
    "description": "Description of form1",
    "fields": [
        {
            "name": "field1",
            "type": "string"
        },
        {
            "name": "field2",
            "type": "number"
        }
    ]
}
```

#### Post Form Answers

**Path**: `/services/{serviceId}/form/{formName}/answer`

**HTTP Method**: `POST`

**Description**: Submit answers to a form for a specific service.

**Parameters**:

| Name        | DataType             | Param Type | Required | Description                                 |
| ----------- | -------------------- | ---------- | -------- | ------------------------------------------- |
| `form`      | `services.form.Form` | `body`     | Yes      | The form answers to submit.                 |
| `formName`  | `string`             | `path`     | Yes      | The name of the form to submit answers for. |
| `serviceId` | `long`               | `path`     | Yes      | The ID of the service the form belongs to.  |

**Response Type**: `services.form.Response`

**Example Request**:

```bash
curl -X POST "https://api.ovh.com/1.0/services/12345678/form/form1/answer" \
  -H "Content-Type: application/json" \
  -d '{
    "formName": "form1",
    "answers": {
      "field1": "answer1",
      "field2": 42
    }
  }'
```

**Example Response**:

```json
{
    "formName": "form1",
    "status": "SUBMITTED",
    "submissionId": 12345678
}
```

---

## Errors

Each endpoint may return specific errors. These are listed under the `errors` field in the endpoint definition. Common errors include:

- `Client::NotFound::ErrPCIProjectNotFound`: The project was not found.
- `Server::InternalServerError::InternalServerError`: An internal server error occurred.
- `Client::BadRequest::ErrInvalidDisplayName`: The display name provided is invalid.
- `Client::BadRequest::ErrNegativeSize`: The size provided is negative.
- `Client::BadRequest::ErrOfferNotAvailableForProject`: The offer is not available for the project.
- `Client::BadRequest::ErrStartDatePassed`: The start date provided has already passed.
- `Client::BadRequest::ErrStartDateToLate`: The start date provided is too late.
- `Client::BadRequest::ErrUnsubscribableProject`: The project is not subscribable.
- `Client::NotFound::ErrSavingsPlanOfferNotFound`: The Savings Plan offer was not found.
- `Client::NotFound::ErrSavingsPlanNotFound`: The Savings Plan was not found.

---

## API Status Legend

| Status       | Description                              |
| ------------ | ---------------------------------------- |
| `BETA`       | Endpoint is in beta testing.             |
| `PRODUCTION` | Endpoint is stable and production-ready. |

---

## Notes

- **Public Cloud Project**: Some endpoints require additional IAM actions for Public Cloud Project services, as indicated under `iamActions`.
- **Savings Plans**: The `savingsPlans` endpoints allow you to manage Savings Plans, including resizing, changing end actions, and listing periods.
- **Forms**: The `form` endpoints allow you to retrieve forms and submit answers for specific services.

---

## Related Documentation

- [OVHcloud API Documentation](https://api.ovh.com/)
- [n8n OVHcloud Nodes Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-ovhcloud/)

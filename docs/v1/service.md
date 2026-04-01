# OVHcloud Service API Documentation

This document describes the available operations for the OVHcloud Service API, which is currently in **Beta** version (`BETA`).

## Overview

The OVHcloud Service API provides operations to manage and retrieve information about your OVHcloud services. It is part of the OVHcloud Public Cloud API v1 and requires authentication.

### API Status

- **Status**: Beta (`BETA`)
- **Authentication**: Required
- **Base Path**: `https://eu.api.ovh.com/v1`

## Authentication

All operations in this API require authentication. You must use the `OVH API` credential type in n8n to authenticate these requests.

## Available Operations

### List Services

**Path**: `/service`

**Description**: Retrieve a list of all your services.

**HTTP Method**: `GET`

**Response Type**: `long[]` (array of service IDs)

**IAM Actions**:

- `account:apiovh:service/get` (required)

**Parameters**: None

---

### Get Service Details

**Path**: `/service/{serviceId}`

**Description**: Retrieve details about a specific service.

**HTTP Method**: `GET`

**Response Type**: `serviceList.Service`

**IAM Actions**:

- `account:apiovh:service/get` (required)

**Parameters**:

- `serviceId` (path parameter, type: `long`, required: true)
  - Description: The internal ID of your service

---

### Update Service Properties

**Path**: `/service/{serviceId}`

**Description**: Modify the properties of a specific service.

**HTTP Method**: `PUT`

**Response Type**: `void`

**IAM Actions**:

- `account:apiovh:service/edit` (required)

**Parameters**:

- `serviceId` (path parameter, type: `long`, required: true)
  - Description: The internal ID of your service
- Body parameter (type: `serviceList.Service`, required: true)
  - Description: New object properties to update

---

### List Possible Renews for a Service

**Path**: `/service/{serviceId}/renew`

**Description**: List possible renewal options for a specific service.

**HTTP Method**: `GET`

**Response Type**: `service.renew.RenewDescription[]`

**IAM Actions**:

- `account:apiovh:service/renew/get` (required)

**Parameters**:

- `serviceId` (path parameter, type: `string`, required: true)
  - Description: Service ID
- `includeOptions` (query parameter, type: `boolean`, required: false)
  - Description: Include service's option(s)

---

### Create a Renew Order

**Path**: `/service/{serviceId}/renew`

**Description**: Generate a renewal order for one or more services.

**HTTP Method**: `POST`

**Response Type**: `service.renew.RenewOrder`

**IAM Actions**:

- `account:apiovh:service/renew/create` (required)

**Parameters**:

- Body parameter (type: `object`, required: true)
  - `dryRun` (type: `boolean`, required: false)
    - Description: Indicates if renew order is generated (for testing)
  - `duration` (type: `string`, required: true)
    - Description: Renew duration (ISO8601 formatted)
    - Allowed values: `P1M`, `P1Y`, `P2Y`, `P3M`, `P3Y`, `P6M`
  - `services` (type: `long[]`, required: true)
    - Description: List of services to renew
    - Full type: `coreTypes.ServiceId[]:long[]`
- `serviceId` (path parameter, type: `string`, required: true)
  - Description: Service ID

---

### Reopen a Suspended Service

**Path**: `/service/{serviceId}/reopen`

**Description**: Reopen a suspended service.

**HTTP Method**: `POST`

**Response Type**: `void`

**IAM Actions**:

- `account:apiovh:service/reopen` (required)

**Parameters**:

- `serviceId` (path parameter, type: `long`, required: true)
  - Description: The internal ID of your service

---

### Suspend a Service

**Path**: `/service/{serviceId}/suspend`

**Description**: Suspend a service. The service won't be accessible, but you will still be charged for it.

**HTTP Method**: `POST`

**Response Type**: `void`

**IAM Actions**:

- `account:apiovh:service/suspend` (required)

**Parameters**:

- Body parameter (type: `object`, required: true)
  - `serviceId` (type: `long`, required: true)
    - Description: The internal ID of your service

---

### Terminate a Suspended Service

**Path**: `/service/{serviceId}/terminate`

**Description**: Terminate a suspended service.

**HTTP Method**: `POST`

**Response Type**: `void`

**IAM Actions**:

- `account:apiovh:service/terminate` (required)

**Parameters**:

- Body parameter (type: `object`, required: true)
  - `serviceId` (type: `long`, required: true)
    - Description: The internal ID of your service

---

## Resource Types

### `serviceList.Service`

**Description**: Details about a Service

**Properties**:

- `creationDate` (type: `date`)
  - Description: Creation date
- `details` (type: `complexType.SafeKeyValue<string>[]`)
  - Description: Resource details
- `engagementDate` (type: `date`)
  - Description: Engagement date
- `expirationDate` (type: `date`)
  - Description: Expiration date
- `nextBillingDate` (type: `date`)
  - Description: The next billing date
- `plan` (type: `service.Plan`)
  - Description: Plan service description
- `quantity` (type: `long`)
  - Description: Quantity
- `renew` (type: `service.Renew`)
  - Description: Renew service description
- `resource` (type: `service.Resource`)
  - Description: Resource service description
- `route` (type: `service.Route`)
  - Description: Route to use in API
- `state` (type: `service.BillingStateEnum`)
  - Description: Billing state of your service

---

### `service.BillingStateEnum`

**Description**: Possible billing states

**Enum Values**:

- `expired`
- `ok`
- `pending`
- `unpaid`

---

### `service.ResourceStateEnum`

**Description**: Possible resource states

**Enum Values**:

- `deleted`
- `deleting`
- `ok`
- `opening`
- `suspended`
- `suspending`
- `toDelete`
- `toOpen`
- `toSuspend`

---

### `service.Plan`

**Description**: Plan information

**Properties**:

- `code` (type: `string`)
  - Description: Product code
- `product` (type: `service.plan.Product`)
  - Description: Product plan information

---

### `service.Renew`

**Description**: Renew information

**Properties**:

- `dayOfMonth` (type: `long`)
  - Description: Renew day number
- `interval` (type: `service.renew.Interval`)
  - Description: Interval between each renewal
- `mode` (type: `service.renew.Mode`)
  - Description: Renewal mode
- `possibleIntervals` (type: `service.renew.Interval[]`)
  - Description: Possible interval between each renewal
- `possibleModes` (type: `service.renew.Mode[]`)
  - Description: Possible renewal mode

---

### `service.renew.Interval`

**Description**: Interval enum information

**Enum Values**:

- `P1M` (1 month)
- `P1Y` (1 year)
- `P2Y` (2 years)
- `P3M` (3 months)
- `P3Y` (3 years)
- `P6M` (6 months)

---

### `service.renew.Mode`

**Description**: Mode enum information

**Enum Values**:

- `automaticForcedProduct`
- `automaticV2012`
- `automaticV2014`
- `automaticV2016`
- `automaticV2024`
- `deleteAtEndEngagement`
- `deleteAtExpiration`
- `manual`
- `oneShot`
- `option`

---

### `service.renew.RenewDescription`

**Description**: List possible renews for service

**Properties**:

- `renewPeriod` (type: `string`)
  - Description: ISO8601 formatted renewal duration
- `strategies` (type: `service.renew.RenewStrategy[]`)
  - Description: List possible strategies

---

### `service.renew.RenewStrategy`

**Description**: Representation of a product renew pricing

**Properties**:

- `price` (type: `order.Price`)
  - Description: Price of the product
- `priceInUcents` (type: `long`)
  - Description: Price of the product in micro-centims
- `services` (type: `long[]`)
  - Description: Services renewed by strategy
- `servicesDetails` (type: `service.renew.Service[]`)
  - Description: Details of services renewed by strategy

---

### `service.renew.Service`

**Description**: Description of a service

**Properties**:

- `serviceId` (type: `long`)
  - Description: ID of the service
- `serviceName` (type: `string`)
  - Description: Name of the service
- `serviceType` (type: `string`)
  - Description: Type of the service

---

### `service.renew.RenewOrder`

**Description**: Details about a renew Order

**Properties**:

- `date` (type: `datetime`)
  - Description: Creation date of the renew Order
- `expirationDate` (type: `datetime`)
  - Description: Expiration date of the renew Order
- `orderId` (type: `long`)
  - Description: ID of the renew Order
- `password` (type: `string`)
  - Description: Password
- `pdfUrl` (type: `string`)
  - Description: Public PDF URL of the generated renew Order
- `priceWithTax` (type: `order.Price`)
  - Description: Price of the product with tax
- `priceWithoutTax` (type: `order.Price`)
  - Description: Price of the product without tax
- `retractionDate` (type: `datetime`)
  - Description: Retraction date
- `tax` (type: `order.Price`)
  - Description: Value of the tax
- `url` (type: `string`)
  - Description: Public URL to display generated renew Order

---

### `service.renew.RenewForecast`

**Description**: Representation of service's renew forecasting

**Properties**:

- `details` (type: `service.renew.RenewForecastDetail[]`)
  - Description: Forecast details
- `prices` (type: `service.renew.RenewForecastPrices`)
  - Description: Prices for renew forecasting

---

### `service.renew.RenewForecastDetail`

**Description**: Representation of a product renew pricing

**Properties**:

- `description` (type: `string`)
  - Description: Detail description
- `quantity` (type: `long`)
  - Description: Quantity
- `serviceName` (type: `string`)
  - Description: Associated service name
- `totalPrice` (type: `order.Price`)
  - Description: Total price
- `unitPrice` (type: `order.Price`)
  - Description: Price for one unit

---

### `service.renew.RenewForecastPrices`

**Description**: Prices for renew forecasting

**Properties**:

- `tax` (type: `order.Price`)
  - Description: Tax
- `withTax` (type: `order.Price`)
  - Description: Total price with tax
- `withoutTax` (type: `order.Price`)
  - Description: Total price without tax

---

### `service.Resource`

**Description**: Resource service informations

**Properties**:

- `displayName` (type: `string`)
  - Description: Custom display name of the service
- `name` (type: `string`)
  - Description: Name of the service
- `state` (type: `service.ResourceStateEnum`)
  - Description: Resource state

---

### `service.Route`

**Description**: Route of this service

**Properties**:

- `path` (type: `string`)
  - Description: Path to use in API
- `url` (type: `string`)
  - Description: Path with variables applied
- `vars` (type: `complexType.SafeKeyValue<string>[]`)
  - Description: Variables to use in the path

---

### `order.Price`

**Description**: Price with its currency and textual representation

**Properties**:

- `currencyCode` (type: `order.CurrencyCodeEnum`)
  - Description: Currency code
- `text` (type: `string`)
  - Description: Textual representation of the price
- `value` (type: `double`)
  - Description: Numeric value of the price

---

### `order.CurrencyCodeEnum`

**Description**: Possible currency codes

**Enum Values**:

- `AUD` (Australian Dollar)
- `CAD` (Canadian Dollar)
- `CZK` (Czech Koruna)
- `EUR` (Euro)
- `GBP` (British Pound)
- `INR` (Indian Rupee)
- `LTL` (Lithuanian Litas)
- `MAD` (Moroccan Dirham)
- `N/A` (Not Applicable)
- `PLN` (Polish Zloty)
- `SGD` (Singapore Dollar)
- `TND` (Tunisian Dinar)
- `USD` (US Dollar)
- `XOF` (West African CFA Franc)
- `points` (Points)

---

### `order.CurrencyCodeEnum`

**Description**: Price with its currency and textual representation

**Properties**:

- `currencyCode` (type: `order.CurrencyCodeEnum`)
  - Description: Currency code
- `text` (type: `string`)
  - Description: Textual representation of the price
- `value` (type: `double`)
  - Description: Numeric value of the price

---

### `complexType.SafeKeyValue<T>`

**Description**: Key and value with proper key strings

**Properties**:

- `key` (type: `string`)
  - Description: Key string
- `value` (type: `T`)
  - Description: Value of type T

---

### `service.plan.Product`

**Description**: Product plan information

**Properties**:

- `name` (type: `string`)
  - Description: Product name

---

## Notes

- All operations are currently in **Beta** version.
- The API uses strict typing with TypeScript interfaces.
- Error handling should use `NodeApiError` for n8n-specific errors.
- Validate inputs before making API calls to ensure type safety.
- Use the `OvhCloudApiClient` wrapper for HTTP requests to maintain consistency.

## Examples

### Example 1: List All Services

```bash
# Using cURL with authentication
curl -X GET "https://eu.api.ovh.com/v1/service" \
  -H "X-OVH-API-Key: your_application_key" \
  -H "X-OVH-API-Secret: your_application_secret" \
  -H "X-OVH-Timestamp: $(date +%s)" \
  -H "X-OVH-Signature: $(ovhcloud_signature /workspaces/n8n-nodes-ovhcloud/v1/service GET)" \
  -H "X-OVH-Consumer: your_consumer_key"

# Expected response: [123456, 789012, ...] (array of service IDs)
```

### Example 2: Get Service Details

```bash
# Using cURL with authentication
curl -X GET "https://eu.api.ovh.com/v1/service/123456" \
  -H "X-OVH-API-Key: your_application_key" \
  -H "X-OVH-API-Secret: your_application_secret" \
  -H "X-OVH-Timestamp: $(date +%s)" \
  -H "X-OVH-Signature: $(ovhcloud_signature /workspaces/n8n-nodes-ovhcloud/v1/service/123456 GET)" \
  -H "X-OVH-Consumer: your_consumer_key"

# Expected response: {
#   "creationDate": "2023-01-01",
#   "details": [{"key": "region", "value": "eu-west-1"}],
#   "expirationDate": "2024-01-01",
#   "nextBillingDate": "2024-01-01",
#   "plan": {"code": "essential"},
#   "quantity": 1,
#   "renew": {"dayOfMonth": 1, "interval": "P1Y"},
#   "resource": {"displayName": "My Server", "name": "server-123", "state": "ok"},
#   "route": {"path": "/service/123456", "url": "https://api.ovhcloud.com/service/123456"},
#   "state": "ok"
# }
```

### Example 3: Update Service Properties

```bash
# Using cURL with authentication
curl -X PUT "https://eu.api.ovh.com/v1/service/123456" \
  -H "X-OVH-API-Key: your_application_key" \
  -H "X-OVH-API-Secret: your_application_secret" \
  -H "X-OVH-Timestamp: $(date +%s)" \
  -H "X-OVH-Signature: $(ovhcloud_signature /workspaces/n8n-nodes-ovhcloud/v1/service/123456 PUT)" \
  -H "X-OVH-Consumer: your_consumer_key" \
  -d '{"resource": {"displayName": "Updated Server Name"}}'

# Expected response: (empty response for successful update)
```

### Example 4: List Possible Renews for a Service

```bash
# Using cURL with authentication
curl -X GET "https://eu.api.ovh.com/v1/service/123456/renew" \
  -H "X-OVH-API-Key: your_application_key" \
  -H "X-OVH-API-Secret: your_application_secret" \
  -H "X-OVH-Timestamp: $(date +%s)" \
  -H "X-OVH-Signature: $(ovhcloud_signature /workspaces/n8n-nodes-ovhcloud/v1/service/123456/renew GET)" \
  -H "X-OVH-Consumer: your_consumer_key"

# Expected response: [
#   {
#     "renewPeriod": "P1Y",
#     "strategies": [
#       {
#         "price": {"currencyCode": "EUR", "text": "12.99 €", "value": 12.99},
#         "priceInUcents": 1299,
#         "services": [123456],
#         "servicesDetails": [
#           {
#             "serviceId": 123456,
#             "serviceName": "server-123",
#             "serviceType": "vps"
#           }
#         ]
#       }
#     ]
#   }
# ]
```

### Example 5: Create a Renew Order

```bash
# Using cURL with authentication
curl -X POST "https://eu.api.ovh.com/v1/service/123456/renew" \
  -H "X-OVH-API-Key: your_application_key" \
  -H "X-OVH-API-Secret: your_application_secret" \
  -H "X-OVH-Timestamp: $(date +%s)" \
  -H "X-OVH-Signature: $(ovhcloud_signature /workspaces/n8n-nodes-ovhcloud/v1/service/123456/renew POST)" \
  -H "X-OVH-Conssumer: your_consumer_key" \
  -d '{
    "duration": "P1Y",
    "services": [123456],
    "dryRun": false
  }'

# Expected response: {
#   "date": "2023-12-01T00:00:00Z",
#   "expirationDate": "2024-12-01T00:00:00Z",
#   "orderId": 987654,
#   "password": "...",
#   "pdfUrl": "https://www.ovhcloud.com/order/renew/987654.pdf",
#   "priceWithTax": {"currencyCode": "EUR", "text": "12.99 €", "value": 12.99},
#   "priceWithoutTax": {"currencyCode": "EUR", "text": "11.99 €", "value": 11.99},
#   "retractionDate": "2024-12-01T00:00:00Z",
#   "tax": {"currencyCode": "EUR", "text": "1.00 €", "value": 1.00},
#   "url": "https://www.ovhcloud.com/order/renew/987654"
# }
```

### Example 6: Reopen a Suspended Service

```bash
# Using cURL with authentication
curl -X POST "https://eu.api.ovh.com/v1/service/123456/reopen" \
  -H "X-OVH-API-Key: your_application_key" \
  -H "X-OVH-API-Secret: your_application_secret" \
  -H "X-OVH-Timestamp: $(date +%s)" \
  -H "X-OVH-Signature: $(ovhcloud_signature /workspaces/n8n-nodes-ovhcloud/v1/service/123456/reopen POST)" \
  -H "X-OVH-Consumer: your_consumer_key"

# Expected response: (empty response for successful operation)
```

### Example 7: Suspend a Service

```bash
# Using cURL with authentication
curl -X POST "https://eu.api.ovh.com/v1/service/123456/suspend" \
  -H "X-OVH-API-Key: your_application_key" \
  -H "X-OVH-API-Secret: your_application_secret" \
  -H "X-OVH-Timestamp: $(date +%s)" \
  -H "X-OVH-Signature: $(ovhcloud_signature /workspaces/n8n-nodes-ovhcloud/v1/service/123456/suspend POST)" \
  -H "X-OVH-Consumer: your_consumer_key"

# Expected response: (empty response for successful operation)
```

### Example 8: Terminate a Suspended Service

```bash
# Using cURL with authentication
curl -X POST "https://eu.api.ovh.com/v1/service/123456/terminate" \
  -H "X-OVH-API-Key: your_application_key" \
  -H "X-OVH-API-Secret: your_application_secret" \
  -H "X-OVH-Timestamp: $(date +%s)" \
  -H "X-OVH-Signature: $(ovhcloud_signature /workspaces/n8n-nodes-ovhcloud/v1/service/123456/terminate POST)" \
  -H "X-OVH-Consumer: your_consumer_key"

# Expected response: (empty response for successful operation)
```

---

## Error Handling

- Use `NodeApiError` for n8n-specific errors.
- Validate inputs before making API calls to prevent errors.
- Handle API errors gracefully with meaningful messages.
- Common error scenarios:
  - Invalid `serviceId` format or value
  - Missing required authentication headers
  - Unauthorized IAM action
  - Server-side errors (e.g., service suspension in progress)

---

## Troubleshooting

### Service Not Found

**Issue**: The service ID provided does not exist or is invalid.

**Solution**: Verify the `serviceId` value is correct and exists in your OVHcloud account.

### Authentication Failed

**Issue**: The API request fails due to authentication errors.

**Solution**: Ensure all required headers are present and correctly signed:

- `X-OVH-API-Key`
- `X-OVH-API-Secret`
- `X-OVH-Timestamp`
- `X-OVH-Signature`
- `X-OVH-Consumer`

### IAM Action Not Authorized

**Issue**: The authenticated user does not have permission to perform the requested action.

**Solution**: Check your IAM permissions in the OVHcloud Control Panel and ensure the correct IAM action is included in the request.

### Service Suspension/Termination in Progress

**Issue**: The service is already in the process of being suspended or terminated.

**Solution**: Wait for the operation to complete before attempting another action on the same service.

---

## References

- [OVHcloud API Documentation](https://api.ovh.com/)
- [OVHcloud Public Cloud Documentation](https://docs.ovh.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [n8n Documentation](https://docs.n8n.io/)
- [n8n Node Development Guide](https://docs.n8n.io/integrations/core-nodes/)

---

## Version History

- **v1.0**: Initial API documentation for the OVHcloud Service API in Beta version.
- **v1.0**: Added operations for suspending, reopening, and terminating services.

---

*Documentation generated for the n8n-nodes-ovhcloud project on 2026-03-31.*

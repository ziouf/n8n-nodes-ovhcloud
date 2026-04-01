# OVH Cloud Order Node API Documentation v1

## Overview

This document describes the available API endpoints for the OVH Cloud Order Node, which allows users to manage their order carts and associated products through n8n. The endpoints are grouped by their functional paths and include operations for listing, creating, updating, and deleting carts and items.

---

## Authentication

All endpoints require authentication unless explicitly marked as `noAuthentication: true`.

Authentication is handled via the `OVH API` credential type in n8n. Ensure your credentials are properly configured with:

- Host
- Application Key
- Application Secret
- Consumer Key

---

## Endpoints

### `/order/cart`

#### Operations

| HTTP Method | Authentication | Description                  | IAM Actions             |
| ----------- | -------------- | ---------------------------- | ----------------------- |
| GET         | Required       | List of your OVH order carts | `order:apiovh:cart/get` |
| POST        | Not Required   | Create a new OVH order cart  | None                    |

#### Parameters

- **GET**
  - `description` (string, optional): Filter the value of the description property (=)
- **POST**
  - Request Body (required): `order.cart.Creation`

#### Response Types

- **GET**: `string[]` (List of cart IDs)
- **POST**: `order.cart.Cart` (Created cart details)

---

### `/order/cart/{cartId}`

#### Operations

| HTTP Method | Authentication | Description                                | IAM Actions                |
| ----------- | -------------- | ------------------------------------------ | -------------------------- |
| DELETE      | Required       | Delete a cart                              | `order:apiovh:cart/delete` |
| GET         | Not Required   | Retrieve information about a specific cart | None                       |
| PUT         | Not Required   | Modify information about a specific cart   | None                       |

#### Parameters

- **DELETE**
  - `cartId` (string, path, required): Cart ID
- **GET**
  - `cartId` (string, path, required): Cart ID
- **PUT**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.Update` (Cart update details)

#### Response Types

- **DELETE**: `void`
- **GET**: `order.cart.Cart` (Cart details)
- **PUT**: `order.cart.Cart` (Updated cart details)

---

### `/order/cart/{cartId}/advisoryServicesHostingWeb`

#### Operations

| HTTP Method | API Status | Authentication | Description                                                        | IAM Actions |
| ----------- | ---------- | -------------- | ------------------------------------------------------------------ | ----------- |
| GET         | Beta       | Required       | Get information about an Advisory Services Hosting Web support     | None        |
| POST        | Beta       | Required       | Post a new Advisory Services Hosting Web support item in your cart | None        |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericProductCreation`

#### Response Types

- **GET**: `order.cart.GenericProductDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/advisoryServicesHostingWeb/options`

#### Operations

| HTTP Method | API Status | Authentication | Description                                                          | IAM Actions |
| ----------- | ---------- | -------------- | -------------------------------------------------------------------- | ----------- |
| GET         | Beta       | Required       | Get information about Advisory Services Hosting Web support options  | None        |
| POST        | Beta       | Required       | Post a new Advisory Services Hosting Web support option in your cart | None        |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
  - `planCode` (string, query, required): Identifier of an Advisory Services Hosting Web support offer
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericOptionCreation`

#### Response Types

- **GET**: `order.cart.GenericOptionDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/advisoryServicesPublicCloud`

#### Operations

| HTTP Method | API Status | Authentication | Description                                                         | IAM Actions |
| ----------- | ---------- | -------------- | ------------------------------------------------------------------- | ----------- |
| GET         | Beta       | Required       | Get information about an Advisory Services Public Cloud support     | None        |
| POST        | Beta       | Required       | Post a new Advisory Services Public Cloud support item in your cart | None        |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericProductCreation`

#### Response Types

- **GET**: `order.cart.GenericProductDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/advisoryServicesPublicCloud/options`

#### Operations

| HTTP Method | API Status | Authentication | Description                                                           | IAM Actions |
| ----------- | ---------- | -------------- | --------------------------------------------------------------------- | ----------- |
| GET         | Beta       | Required       | Get information about Advisory Services Public Cloud support options  | None        |
| POST        | Beta       | Required       | Post a new Advisory Services Public Cloud support option in your cart | None        |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
  - `planCode` (string, query, required): Identifier of an Advisory Services Public Cloud support offer
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericOptionCreation`

#### Response Types

- **GET**: `order.cart.GenericOptionDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/advisoryServicesTelecom`

#### Operations

| HTTP Method | API Status | Authentication | Description                                                    | IAM Actions |
| ----------- | ---------- | -------------- | -------------------------------------------------------------- | ----------- |
| GET         | Beta       | Required       | Get information about an Advisory Services Telecom support     | None        |
| POST        | Beta       | Required       | Post a new Advisory Services Telecom support item in your cart | None        |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericProductCreation`

#### Response Types

- **GET**: `order.cart.GenericProductDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/advisoryServicesTelecom/options`

#### Operations

| HTTP Method | API Status | Authentication | Description                                                      | IAM Actions |
| ----------- | ---------- | -------------- | ---------------------------------------------------------------- | ----------- |
| GET         | Beta       | Required       | Get information about Advisory Services Telecom support options  | None        |
| POST        | Beta       | Required       | Post a new Advisory Services Telecom support option in your cart | None        |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
  - `planCode` (string, query, required): Identifier of an Advisory Services Telecom support offer
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericOptionCreation`

#### Response Types

- **GET**: `order.cart.GenericOptionDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/analytics`

#### Operations

| HTTP Method | API Status | Authentication | Description                            |
| ----------- | ---------- | -------------- | -------------------------------------- |
| GET         | Beta       | Not Required   | Get information about analytics offers |
| POST        | Beta       | Not Required   | Post a new analytics item in your cart |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericProductCreation`

#### Response Types

- **GET**: `order.cart.GenericProductDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/analytics/options`

#### Operations

| HTTP Method | API Status | Authentication | Description                             |
| ----------- | ---------- | -------------- | --------------------------------------- |
| GET         | Beta       | Not Required   | Get information about analytics options |
| POST        | Beta       | Not Required   | Post a new analytics addon in your cart |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
  - `planCode` (string, query, required): Identifier of the analytics plan you want to consult options
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericOptionCreation`

#### Response Types

- **GET**: `order.cart.GenericOptionDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/assign`

#### Operations

| HTTP Method | API Status | Authentication | Description                          | IAM Actions                |
| ----------- | ---------- | -------------- | ------------------------------------ | -------------------------- |
| POST        | Production | Required       | Assign an order cart to your account | `order:apiovh:cart/assign` |

#### Parameters

- **POST**
  - `cartId` (string, path, required): Cart ID

#### Response Types

- `order.Order` (Prices and contracts information for your cart)

---

### `/order/cart/{cartId}/baremetalServers`

#### Operations

| HTTP Method | API Status | Authentication | Description                                   |
| ----------- | ---------- | -------------- | --------------------------------------------- |
| GET         | Beta       | Not Required   | Get information about a baremetal server      |
| POST        | Beta       | Not Required   | Post a new baremetal server item in your cart |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericProductCreation`

#### Response Types

- **GET**: `order.cart.GenericProductDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/baremetalServers/options`

#### Operations

| HTTP Method | API Status | Authentication | Description                                     |
| ----------- | ---------- | -------------- | ----------------------------------------------- |
| GET         | Beta       | Not Required   | Get information about baremetal server options  |
| POST        | Beta       | Not Required   | Post a new baremetal server option in your cart |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
  - `planCode` (string, query, required): Identifier of a baremetal server offer
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericOptionCreation`

#### Response Types

- **GET**: `order.cart.GenericOptionDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/bringYourOwnIp`

#### Operations

| HTTP Method | API Status | Authentication | Description                                              |
| ----------- | ---------- | -------------- | -------------------------------------------------------- |
| GET         | Beta       | Not Required   | Get information about bring your own IP addresses offers |
| POST        | Beta       | Not Required   | Post a new bring your own IP addresses item in your cart |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericProductCreation`

#### Response Types

- **GET**: `order.cart.GenericProductDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/cdn`

#### Operations

| HTTP Method | API Status | Authentication | Description                      |
| ----------- | ---------- | -------------- | -------------------------------- |
| GET         | Production | Not Required   | Get information about CDN offers |
| POST        | Production | Not Required   | Post a new CDN item in your cart |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericProductCreation`

#### Response Types

- **GET**: `order.cart.GenericProductDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/cdn/options`

#### Operations

| HTTP Method | API Status | Authentication | Description                        |
| ----------- | ---------- | -------------- | ---------------------------------- |
| GET         | Production | Not Required   | Get information about CDN options  |
| POST        | Production | Not Required   | Post a new CDN option in your cart |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
  - `planCode` (string, query, required): Identifier of the CDN offer you want to consult options
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericOptionCreation`

#### Response Types

- **GET**: `order.cart.GenericOptionDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/cephaas`

#### Operations

| HTTP Method | API Status | Authentication | Description                                    |
| ----------- | ---------- | -------------- | ---------------------------------------------- |
| GET         | Production | Not Required   | Get information about Ceph as a Service offers |
| POST        | Production | Not Required   | Post a new Ceph as a Service item in your cart |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericProductCreation`

#### Response Types

- **GET**: `order.cart.GenericProductDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/cephaas/options`

#### Operations

| HTTP Method | API Status | Authentication | Description                                      |
| ----------- | ---------- | -------------- | ------------------------------------------------ |
| GET         | Production | Not Required   | Get information about Ceph as a Service options  |
| POST        | Production | Not Required   | Post a new Ceph as a Service option in your cart |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
  - `planCode` (string, query, required): Identifier of the Ceph as a Service you want to consult options
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericOptionCreation`

#### Response Types

- **GET**: `order.cart.GenericOptionDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/checkout`

#### Operations

| HTTP Method | API Status | Authentication | Description                                        | IAM Actions                           |
| ----------- | ---------- | -------------- | -------------------------------------------------- | ------------------------------------- |
| GET         | Production | Not Required   | Get prices and contracts information for your cart | `order:apiovh:cart/checkout/simulate` |
| POST        | Production | Not Required   | Validate your shopping and create order            | `order:apiovh:cart/checkout/execute`  |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.Checkout`

#### Response Types

- **GET**: `order.Order` (Prices and contracts information for your cart)
- **POST**: `order.Order` (Validated order details)

---

### `/order/cart/{cartId}/cloud`

#### Operations

| HTTP Method | API Status | Authentication | Description                               |
| ----------- | ---------- | -------------- | ----------------------------------------- |
| GET         | Production | Not Required   | Get information about Public Cloud offers |
| POST        | Production | Not Required   | Post a new Public Cloud item in your cart |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericProductCreation`

#### Response Types

- **GET**: `order.cart.GenericProductDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/cloud/options`

#### Operations

| HTTP Method | API Status | Authentication | Description                                 |
| ----------- | ---------- | -------------- | ------------------------------------------- |
| GET         | Production | Not Required   | Get information about Public Cloud options  |
| POST        | Production | Not Required   | Post a new Public Cloud option in your cart |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
  - `planCode` (string, query, required): Identifier of the Public Cloud you want to consult options
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericOptionCreation`

#### Response Types

- **GET**: `order.cart.GenericOptionDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/cloudDB`

#### Operations

| HTTP Method | API Status | Authentication | Description                       |
| ----------- | ---------- | -------------- | --------------------------------- |
| GET         | Production | Not Required   | Get all cloud db offers available |
| POST        | Production | Not Required   | Add a cloudDB in your cart        |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericProductCreation`

#### Response Types

- **GET**: `order.cart.GenericProductDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/cloudDB/options`

*Documentation manquante*

---

### `/order/cart/{cartId}/cloudweb`

#### Operations

| HTTP Method | API Status | Authentication | Description                            |
| ----------- | ---------- | -------------- | -------------------------------------- |
| GET         | Production | Not Required   | Get information about Cloud Web offers |
| POST        | Production | Not Required   | Post a new Cloud Web item in your cart |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericProductCreation`

#### Response Types

- **GET**: `order.cart.GenericProductDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/cloudweb/options`

#### Operations

| HTTP Method | API Status | Authentication | Description                              |
| ----------- | ---------- | -------------- | ---------------------------------------- |
| GET         | Production | Not Required   | Get information about Cloud Web options  |
| POST        | Production | Not Required   | Post a new Cloud Web option in your cart |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
  - `planCode` (string, query, required): Identifier of the Cloud Web you want to consult options
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericOptionCreation`

#### Response Types

- **GET**: `order.cart.GenericOptionDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/coupon`

#### Operations

| HTTP Method | API Status | Authentication | Description                         |
| ----------- | ---------- | -------------- | ----------------------------------- |
| DELETE      | Production | Not Required   | Delete a coupon from cart           |
| GET         | Production | Not Required   | Retrieve coupons associated to cart |
| POST        | Production | Not Required   | Add a new coupon to cart            |

#### Parameters

- **DELETE**
  - `cartId` (string, path, required): Cart ID
  - `coupon` (string, query, required): Coupon identifier
- **GET**
  - `cartId` (string, path, required): Cart ID
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.CouponCreation`

#### Response Types

- **DELETE**: `void`
- **GET**: `string[]` (List of coupon identifiers)
- **POST**: `string[]` (Updated list of coupon identifiers)

---

### `/order/cart/{cartId}/csp2`

#### Operations

| HTTP Method | API Status | Authentication | Description                                  |
| ----------- | ---------- | -------------- | -------------------------------------------- |
| GET         | Production | Not Required   | Get information about SaaS CSP2 offers       |
| POST        | Production | Not Required   | Post a new SaaS CSP2 offer item in your cart |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericProductCreation`

#### Response Types

- **GET**: `order.cart.GenericProductDefinition[]`
- **POST**: `order.cart.Item`

---

### `/order/cart/{cartId}/csp2/options`

#### Operations

| HTTP Method | API Status | Authentication | Description                              |
| ----------- | ---------- | -------------- | ---------------------------------------- |
| GET         | Production | Not Required   | Get information about SaaS CSP2 options  |
| POST        | Production | Not Required   | Post a new SaaS CSP2 option in your cart |

#### Parameters

- **GET**
  - `cartId` (string, path, required): Cart ID
  - `planCode` (string, query, required): Identifier of a SaaS CSP2 main offer
- **POST**
  - `cartId` (string, path, required): Cart ID
  - Request Body (required): `order.cart.GenericOptionCreation`

#### Response Types

- **GET**: `order.cart.GenericOptionDefinition[]`
- **POST**: `order.cart.Item`

---

## Notes

- **API Status**: Each endpoint is marked with its API status (`PRODUCTION` or `BETA`).
  - `PRODUCTION`: Stable production version
  - `BETA`: Beta version (may change or be unstable)

- **Authentication**: Some endpoints may require authentication even if marked as `noAuthentication: false`. Always check the `iamActions` field for required permissions.

- **Response Types**: The response type is indicated for each operation. Ensure your implementation handles the correct type.

---

## Security Considerations

- Always validate and sanitize input parameters before making API calls.
- Handle API errors gracefully and provide meaningful error messages to users.
- Ensure that sensitive data (such as consumer keys) are properly secured and not exposed in logs or error messages.
- Use HTTPS for all API calls to protect data in transit.
- Follow the principle of least privilege when configuring IAM actions.

---

## Error Handling

- Use `NodeApiError` for n8n-specific errors.
- Throw descriptive error messages with context when validation fails.
- Handle API errors gracefully with meaningful messages for users.
- Catch blocks should use the `unknown` type for error handling (ensure `useUnknownInCatchVariables` is set to `false` in TypeScript configuration).

---

## Type Safety

- Define explicit types for all parameters and returns.
- Use TypeScript type guards where appropriate.
- Prefer interfaces/types over `any`.
- Use `IDataObject` for n8n data structures.
- Leverage strict null checks in all API calls.

---

## Credential Configuration

Ensure your `OVH API` credentials are configured with the following fields:

- **Host**: The OVH API host (e.g., `api.ovh.com`)
- **Application Key**: Your OVH application key
- **Application Secret**: Your OVH application secret
- **Consumer Key**: Your OVH consumer key

---

## Usage Examples

### Create a new cart

```json
{
    "path": "/order/cart",
    "httpMethod": "POST",
    "parameters": [
        {
            "paramType": "body",
            "dataType": "order.cart.Creation",
            "required": true
        }
    ],
    "responseType": "order.cart.Cart",
    "noAuthentication": false,
    "description": "Create a new OVH order cart",
    "iamActions": []
}
```

**Request Body Example**:

```json
{
    "description": "My new cart"
}
```

**Response Example**:

```json
{
    "cartId": "cart123456",
    "description": "My new cart",
    "creationDate": "2026-03-31T12:00:00Z"
}
```

---

### List carts

```json
{
    "path": "/order/cart",
    "httpMethod": "GET",
    "parameters": [
        {
            "paramType": "query",
            "name": "description",
            "dataType": "string",
            "required": false
        }
    ],
    "responseType": "string[]",
    "noAuthentication": false,
    "description": "List of your OVH order carts",
    "iamActions": [
        {
            "name": "order:apiovh:cart/get",
            "required": true
        }
    ]
}
```

**Response Example**:

```json
["cart123456", "cart789012"]
```

---

### Delete a cart

```json
{
    "path": "/order/cart/{cartId}",
    "httpMethod": "DELETE",
    "parameters": [
        {
            "paramType": "path",
            "name": "cartId",
            "dataType": "string",
            "required": true
        }
    ],
    "responseType": "void",
    "noAuthentication": false,
    "description": "Delete a cart",
    "iamActions": [
        {
            "name": "order:apiovh:cart/delete",
            "required": true
        }
    ]
}
```

**Response**: None (void)

---

### Retrieve cart information

```json
{
    "path": "/order/cart/{cartId}",
    "httpMethod": "GET",
    "parameters": [
        {
            "paramType": "path",
            "name": "cartId",
            "dataType": "string",
            "required": true
        }
    ],
    "responseType": "order.cart.Cart",
    "noAuthentication": true,
    "description": "Retrieve information about a specific cart",
    "iamActions": []
}
```

**Response Example**:

```json
{
    "cartId": "cart123456",
    "description": "My new cart",
    "creationDate": "2026-03-31T12:00:00Z"
}
```

---

### Update cart information

```json
{
    "path": "/order/cart/{cartId}",
    "httpMethod": "PUT",
    "parameters": [
        {
            "paramType": "path",
            "name": "cartId",
            "dataType": "string",
            "required": true
        },
        {
            "paramType": "body",
            "dataType": "order.cart.Update",
            "required": true
        }
    ],
    "responseType": "order.cart.Cart",
    "noAuthentication": true,
    "description": "Modify information about a specific cart",
    "iamActions": []
}
```

**Request Body Example**:

```json
{
    "description": "Updated cart description"
}
```

**Response Example**:

```json
{
    "cartId": "cart123456",
    "description": "Updated cart description",
    "creationDate": "2026-03-31T12:00:00Z"
}
```

---

### Assign cart to account

```json
{
    "path": "/order/cart/{cartId}/assign",
    "httpMethod": "POST",
    "parameters": [
        {
            "paramType": "path",
            "name": "cartId",
            "dataType": "string",
            "required": true
        }
    ],
    "responseType": "void",
    "noAuthentication": false,
    "description": "Assign an order cart to your account",
    "iamActions": [
        {
            "name": "order:apiovh:cart/assign",
            "required": true
        }
    ]
}
```

**Response**: None (void)

---

### Get Public Cloud offers

```json
{
    "path": "/order/cart/{cartId}/cloud",
    "httpMethod": "GET",
    "parameters": [
        {
            "paramType": "path",
            "name": "cartId",
            "dataType": "string",
            "required": true
        }
    ],
    "responseType": "order.cart.GenericProductDefinition[]",
    "noAuthentication": true,
    "description": "Get information about Public Cloud offers",
    "iamActions": []
}
```

**Response Example**:

```json
[
    {
        "planCode": "cloud1",
        "name": "Public Cloud Offer 1",
        "price": {
            "currencyCode": "EUR",
            "value": 19.99
        }
    },
    {
        "planCode": "cloud2",
        "name": "Public Cloud Offer 2",
        "price": {
            "currencyCode": "EUR",
            "value": 29.99
        }
    }
]
```

---

### Add Public Cloud offer to cart

```json
{
    "path": "/order/cart/{cartId}/cloud",
    "httpMethod": "POST",
    "parameters": [
        {
            "paramType": "path",
            "name": "cartId",
            "dataType": "string",
            "required": true
        },
        {
            "paramType": "body",
            "dataType": "order.cart.GenericProductCreation",
            "required": true
        }
    ],
    "responseType": "order.cart.Item",
    "noAuthentication": true,
    "description": "Post a new Public Cloud item in your cart",
    "iamActions": []
}
```

**Request Body Example**:

```json
{
    "planCode": "cloud1"
}
```

**Response Example**:

```json
{
    "itemId": "item789012",
    "planCode": "cloud1",
    "name": "Public Cloud Offer 1",
    "price": {
        "currencyCode": "EUR",
        "value": 19.99
    }
}
```

---

### Get Public Cloud options

```json
{
    "path": "/order/cart/{cartId}/cloud/options",
    "httpMethod": "GET",
    "parameters": [
        {
            "paramType": "path",
            "name": "cartId",
            "dataType": "string",
            "required": true
        },
        {
            "paramType": "query",
            "name": "planCode",
            "dataType": "string",
            "required": true
        }
    ],
    "responseType": "order.cart.GenericOptionDefinition[]",
    "noAuthentication": true,
    "description": "Get information about Public Cloud options",
    "iamActions": []
}
```

**Response Example**:

```json
[
    {
        "optionCode": "option1",
        "name": "Public Cloud Option 1",
        "price": {
            "currencyCode": "EUR",
            "value": 9.99
        }
    },
    {
        "optionCode": "option2",
        "name": "Public Cloud Option 2",
        "price": {
            "currencyCode": "EUR",
            "value": 14.99
        }
    }
]
```

---

### Add Public Cloud option to cart

```json
{
    "path": "/order/cart/{cartId}/cloud/options",
    "httpMethod": "POST",
    "parameters": [
        {
            "paramType": "path",
            "name": "cartId",
            "dataType": "string",
            "required": true
        },
        {
            "paramType": "body",
            "dataType": "order.cart.GenericOptionCreation",
            "required": true
        }
    ],
    "responseType": "order.cart.Item",
    "noAuthentication": true,
    "description": "Post a new Public Cloud option in your cart",
    "iamActions": []
}
```

**Request Body Example**:

```json
{
    "planCode": "cloud1",
    "optionCode": "option1"
}
```

**Response Example**:

```json
{
    "itemId": "item789012",
    "planCode": "cloud1",
    "optionCode": "option1",
    "name": "Public Cloud Option 1",
    "price": {
        "currencyCode": "EUR",
        "value": 9.99
    }
}
```

---

## Missing Documentation

Les descriptions manquantes dans le fichier JSON ont été remplacées par des descriptions génériques basées sur les informations disponibles dans les autres champs. Ces descriptions doivent être complétées par des informations spécifiques ou des exemples d'utilisation.

---

## Future Enhancements

- Ajouter des exemples d'utilisation pour les endpoints manquants.
- Documenter les types de données spécifiques pour les réponses.
- Clarifier les permissions IAM pour les endpoints nécessitant une authentification.
- Ajouter des cas d'erreur et des messages d'erreur significatifs pour les utilisateurs.

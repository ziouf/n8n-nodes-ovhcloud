# OVHcloud Secret Node Documentation

## Overview

This document describes the **Secret** node in the OVHcloud API node package, which allows you to interact with OVHcloud's Secret API. The node is designed to retrieve secrets sent by email, providing a secure and stable way to access sensitive information.

---

## Node Properties

| Property | Type     | Required | Description                |
| -------- | -------- | -------- | -------------------------- |
| `id`     | password | **Yes**  | The secret ID to retrieve. |

### API Status

- **Status**: `PRODUCTION`
- **Description**: This is a stable production version of the API.

---

## HTTP Method

- **Method**: `POST`
- **Path**: `/secret/retrieve`
- **Description**: Retrieves a secret sent by email.

---

## Parameters

### Body Parameters

| Name | Type     | Required | Description                |
| ---- | -------- | -------- | -------------------------- |
| `id` | password | **Yes**  | The secret ID to retrieve. |

---

## Response Type

The response is of type `secret.Secret`.

---

## Authentication

- **No Authentication Required**: This operation does not require authentication.

---

## Models

### `secret.Secret`

A **Secret** object represents a secret in OVHcloud's system.

#### Properties

| Property     | Type     | Can Be Null | Read Only | Description                    |
| ------------ | -------- | ----------- | --------- | ------------------------------ |
| `expiration` | datetime | **No**      | **No**    | Expiration time of the secret. |
| `secret`     | password | **No**      | **No**    | The secret value.              |

---

## API Base Path

- **Base Path**: `https://eu.api.ovh.com/v1`

---

## Description

The **Secret** node allows you to retrieve a secret sent by email using the OVHcloud Secret API. This operation is useful for accessing sensitive information that has been securely transmitted and stored in OVHcloud's system.

### Key Features

- **Stable API**: This is a production-ready API.
- **No Authentication**: This operation does not require authentication, simplifying access to secrets.
- **Explicit Response**: The response includes both the secret and its expiration time for clarity and security.

---

## Usage Example

### Retrieve a Secret

1. **Set the Secret ID**:
   - In the node properties, provide the `id` of the secret you want to retrieve.

2. **Execute the Operation**:
   - The node will send a `POST` request to `/secret/retrieve` with the provided `id`.

3. **Response Handling**:
   - The response will contain the secret and its expiration time.

```json
{
    "id": "your-secret-id"
}
```

### Expected Response

```json
{
    "expiration": "2026-03-31T12:34:56.789Z",
    "secret": "your-secret-value"
}
```

---

## Notes

- **Security**: Ensure you handle secrets securely and do not expose them unnecessarily.
- **Expiration**: Always check the `expiration` property to verify the secret's validity period.
- **Production Environment**: This API is stable and suitable for production use.

- --\n

## Version

- **API Version**: `1.0`
- **Resource Path**: `/secret`
- **Base Path**: `/v1`

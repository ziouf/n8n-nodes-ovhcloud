# OVH Cloud IAM API Documentation (v2)

This documentation describes the **IAM (Identity and Access Management) API** endpoints available for OVH Cloud services, as documented in the `iam.json` file. These endpoints are used for managing permissions, policies, resource groups, and log subscriptions.

---

## Overview

The OVH Cloud IAM API provides a set of endpoints to manage:

- **Permissions**: Check and manage user permissions on resources
- **Policies**: Define and manage reusable permission policies
- **Resource Groups**: Organize resources into groups for easier permission management
- **Log Management**: Handle log subscriptions and temporary log retrieval URLs

This API is part of OVH's **IAM (Identity and Access Management)** system, enabling granular control over user access to cloud resources.

---

## Authentication

All IAM API endpoints require authentication via the OVH Cloud API credentials. You must provide:

- `applicationKey`
- `applicationSecret`
- `consumerKey`

These credentials are used to sign requests using the OVH signature algorithm (SHA1).

---

## API Endpoints

### 1. **Authorization Batch Check**

**Path**: `/iam/authorization/check`
**Method**: `POST`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Validate authorizations on multiple resources at once.

#### Parameters

| Parameter | Type                        | Required | Description                                                |
| --------- | --------------------------- | -------- | ---------------------------------------------------------- |
| Body      | `iam.AuthorizeBatchRequest` | **Yes**  | Request body containing the resources and actions to check |

#### Request Body Structure (`iam.AuthorizeBatchRequest`)

```json
{
    "actions": ["string"],
    "resourceURNs": ["string"]
}
```

- **actions**: List of actions to check authorizations for (e.g., `"account:apiovh:iam/policy/get"`)
- **resourceURNs**: List of resource URNs to check authorizations on

#### Response

Returns an array of `iam.AuthorizeBatchResponse` objects.

```json
[
    {
        "resourceURN": "string",
        "authorizedActions": ["string"],
        "unauthorizedActions": ["string"]
    }
]
```

- **resourceURN**: The URN of the resource being checked
- **authorizedActions**: List of actions the user is authorized to perform
- **unauthorizedActions**: List of actions the user is **not** authorized to perform

---

### 2. **Log Kind Management**

#### **List Log Kinds**

**Path**: `/iam/log/kind`
**Method**: `GET`
**Status**: Beta version (`BETA`)

#### Description

Retrieve all available log kinds.

#### Parameters

| Parameter             | Type     | Required | Description                                |
| --------------------- | -------- | -------- | ------------------------------------------ |
| `X-Pagination-Cursor` | `string` | No       | Pagination cursor (for large datasets)     |
| `X-Pagination-Size`   | `long`   | No       | Pagination size (number of items per page) |

#### Response

Returns an array of log kind names as strings:

```json
["string", "string"]
```

---

#### **Get Log Kind Details**

**Path**: `/iam/log/kind/{name}`
**Method**: `GET`
**Status**: Beta version (`BETA`)

#### Description

Retrieve details for a specific log kind.

#### Parameters

| Parameter | Type     | Required | Description          |
| --------- | -------- | -------- | -------------------- |
| `name`    | `string` | **Yes**  | Name of the log kind |

#### Response

Returns a `dbaas.logs.LogKind` object:

```json
{
    "name": "string",
    "displayName": "string",
    "kindId": "uuid",
    "createdAt": "datetime",
    "updatedAt": "datetime",
    "additionalReturnedFields": ["string"]
}
```

- **name**: Log kind name
- **displayName**: Human-readable display name
- **kindId**: Unique identifier for the log kind
- **createdAt**: Timestamp when the log kind was created
- **updatedAt**: Timestamp when the log kind was last updated
- **additionalReturnedFields**: Additional fields available in log entries

---

### 3. **Log Subscription Management**

#### **List Subscription IDs for a Cluster**

**Path**: `/iam/log/subscription`
**Method**: `GET`
**Status**: Beta version (`BETA`)

#### Description

List all log subscription IDs for a specific cluster.

#### Parameters

| Parameter             | Type     | Required | Description                                          |
| --------------------- | -------- | -------- | ---------------------------------------------------- |
| `X-Pagination-Cursor` | `string` | No       | Pagination cursor                                    |
| `X-Pagination-Size`   | `long`   | No       | Pagination size                                      |
| `kind`                | `string` | No       | Filter subscriptions by log kind (e.g., `"default"`) |

#### Response

Returns an array of subscription IDs as UUIDs:

```json
["uuid", "uuid"]
```

---

#### **Create a Log Subscription**

**Path**: `/iam/log/subscription`
**Method**: `POST`
**Status**: Beta version (`BETA`)

#### Description

Create a log subscription to forward logs to a pre-existing LDP (Log Data Platform) stream.

#### Required IAM Actions

- `account:apiovh:iam/log/subscription/create`
- `ldp:apiovh:output/graylog/stream/forwardTo` (on the targeted LDP service)

#### Parameters

| Parameter | Type                                 | Required | Description                                      |
| --------- | ------------------------------------ | -------- | ------------------------------------------------ |
| Body      | `dbaas.logs.LogSubscriptionCreation` | **Yes**  | Request body containing the subscription details |

#### Request Body Structure (`dbaas.logs.LogSubscriptionCreation`)

```json
{
    "kind": "string",
    "streamId": "uuid"
}
```

- **kind**: Log kind name to subscribe to
- **streamId**: Customer log stream ID (UUID)

#### Response

Returns a `dbaas.logs.LogSubscriptionResponse` object:

```json
{
    "operationId": "uuid",
    "serviceName": "string"
}
```

- **operationId**: Identifier of the asynchronous operation
- **serviceName**: Name of the service that owns the operation

---

#### **Delete a Log Subscription**

**Path**: `/iam/log/subscription/{subscriptionId}`
**Method**: `DELETE`
**Status**: Beta version (`BETA`)

#### Description

Delete a log subscription.

#### Required IAM Action

- `account:apiovh:iam/log/subscription/delete`

#### Parameters

| Parameter        | Type   | Required | Description                      |
| ---------------- | ------ | -------- | -------------------------------- |
| `subscriptionId` | `uuid` | **Yes**  | ID of the subscription to delete |

#### Response

Returns a `dbaas.logs.LogSubscriptionResponse` object confirming the deletion.

---

#### **Retrieve Log Subscription Details**

**Path**: `/iam/log/subscription/{subscriptionId}`
**Method**: `GET`
**Status**: Beta version (`BETA`)

#### Description

Get details for a specific log subscription.

#### Required IAM Action

- `account:apiovh:iam/log/subscription/get`

#### Parameters

| Parameter        | Type   | Required | Description                        |
| ---------------- | ------ | -------- | ---------------------------------- |
| `subscriptionId` | `uuid` | **Yes**  | ID of the subscription to retrieve |

#### Response

Returns a `dbaas.logs.LogSubscription` object:

```json
{
    "subscriptionId": "uuid",
    "kind": "string",
    "resource": {
        "name": "string",
        "type": "string"
    },
    "serviceName": "string",
    "streamId": "string",
    "createdAt": "datetime",
    "updatedAt": "datetime"
}
```

- **subscriptionId**: Unique identifier for the log subscription
- **kind**: Log kind name
- **resource**: Information about the subscribed resource
  - **name**: Name of the resource
  - **type**: Type of the resource
- **serviceName**: Name of the destination log service
- **streamId**: ID of the destination log stream
- **createdAt**: Timestamp when the subscription was created
- **updatedAt**: Timestamp when the subscription was last updated

---

#### **Generate Temporary Logs URL**

**Path**: `/iam/log/url`
**Method**: `POST`
**Status**: Beta version (`BETA`)

#### Description

Generate a temporary URL to retrieve logs.

#### Parameters

| Parameter | Type                        | Required | Description                               |
| --------- | --------------------------- | -------- | ----------------------------------------- |
| Body      | `dbaas.logs.LogUrlCreation` | **Yes**  | Request body containing the log kind name |

#### Request Body Structure (`dbaas.logs.LogUrlCreation`)

```json
{
    "kind": "string"
}
```

- **kind**: Log kind name to retrieve logs for

#### Response

Returns a `dbaas.logs.TemporaryLogsLink` object:

```json
{
    "url": "string",
    "expirationDate": "datetime"
}
```

- **url**: Temporary URL to access logs
- **expirationDate**: Expiration timestamp for the temporary URL

---

### 4. **Permissions Group Management**

#### **Retrieve All Permissions Groups**

**Path**: `/iam/permissionsGroup`
**Method**: `GET`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Retrieve all permissions groups.

#### Parameters

| Parameter             | Type     | Required | Description       |
| --------------------- | -------- | -------- | ----------------- |
| `X-Pagination-Cursor` | `string` | No       | Pagination cursor |
| `X-Pagination-Size`   | `long`   | No       | Pagination size   |

#### Response

Returns an array of `iam.PermissionsGroup` objects:

```json
[
    {
        "id": "uuid",
        "name": "string",
        "description": "string",
        "owner": "string",
        "createdAt": "datetime",
        "updatedAt": "datetime",
        "urn": "string",
        "permissions": {
            "actions": ["string"],
            "resources": ["string"]
        }
    }
]
```

- **id**: Unique identifier (UUID)
- **name**: Name of the permissions group
- **description**: Description of the group
- **owner**: Owner of the group
- **createdAt**: Creation timestamp
- **updatedAt**: Last update timestamp
- **urn**: Unique resource name used in policies
- **permissions**: Contains the granted permissions
  - **actions**: List of actions granted
  - **resources**: List of resources granted access to

---

#### **Create a Permissions Group**

**Path**: `/iam/permissionsGroup`
**Method**: `POST`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Create a new permissions group with a set of permissions.

#### Required IAM Action

- `account:apiovh:iam/permissionsGroup/create`

#### Parameters

| Parameter | Type                   | Required | Description                                           |
| --------- | ---------------------- | -------- | ----------------------------------------------------- |
| Body      | `iam.PermissionsGroup` | **Yes**  | Request body containing the permissions group details |

#### Request Body Structure (`iam.PermissionsGroup`)

```json
{
    "name": "string",
    "description": "string",
    "permissions": {
        "actions": ["string"],
        "resources": ["string"]
    }
}
```

- **name**: Name of the permissions group
- **description**: Description of the group
- **permissions**: Permissions to grant
  - **actions**: List of actions to allow
  - **resources**: List of resource URNs to allow access to

#### Response

Returns the created `iam.PermissionsGroup` object with additional metadata.

---

#### **Retrieve Permissions Group Details**

**Path**: `/iam/permissionsGroup/{permissionsGroupURN}`
**Method**: `GET`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Retrieve details for a specific permissions group.

#### Parameters

| Parameter             | Type     | Required | Description                  |
| --------------------- | -------- | -------- | ---------------------------- |
| `permissionsGroupURN` | `string` | **Yes**  | URN of the permissions group |

#### Response

Returns the `iam.PermissionsGroup` object with full metadata.

---

#### **Update a Permissions Group**

**Path**: `/iam/permissionsGroup/{permissionsGroupURN}`
**Method**: `PUT`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Update an existing permissions group.

#### Required IAM Action

- `account:apiovh:iam/permissionsGroup/edit`

#### Parameters

| Parameter             | Type                   | Required | Description                            |
| --------------------- | ---------------------- | -------- | -------------------------------------- |
| `permissionsGroupURN` | `string`               | **Yes**  | URN of the permissions group to update |
| Body                  | `iam.PermissionsGroup` | **Yes**  | Updated permissions group details      |

#### Request Body Structure (`iam.PermissionsGroup`)

Same as for **Create a Permissions Group**.

#### Response

Returns the updated `iam.PermissionsGroup` object.

---

#### **Delete a Permissions Group**

**Path**: `/iam/permissionsGroup/{permissionsGroupURN}`
**Method**: `DELETE`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Remove a permissions group entirely.

#### Required IAM Action

- `account:apiovh:iam/permissionsGroup/delete`

#### Parameters

| Parameter             | Type     | Required | Description                            |
| --------------------- | -------- | -------- | -------------------------------------- |
| `permissionsGroupURN` | `string` | **Yes**  | URN of the permissions group to delete |

#### Response

Returns `void` (no content) on success.

---

### 5. **Policy Management**

#### **Retrieve All Policies**

**Path**: `/iam/policy`
**Method**: `GET`
**Status**: Stable production version (`PRODUCTION`)

#### Description

List all policies.

#### Parameters

| Parameter             | Type       | Required | Description                                    |
| --------------------- | ---------- | -------- | ---------------------------------------------- |
| `X-Pagination-Cursor` | `string`   | No       | Pagination cursor                              |
| `X-Pagination-Size`   | `long`     | No       | Pagination size                                |
| `action`              | `string[]` | No       | Filter policies embedding specific IAM actions |
| `details`             | `boolean`  | No       | Add extra resource information                 |
| `identity`            | `string[]` | No       | Filter policies by identity                    |
| `readOnly`            | `boolean`  | No       | Filter by read-only attribute                  |
| `resourceURN`         | `string[]` | No       | Filter policies by resource URN                |

#### Response

Returns an array of `iam.policy.Response` objects:

```json
[
    {
        "policyId": "uuid",
        "name": "string",
        "description": "string",
        "owner": "string",
        "createdAt": "datetime",
        "updatedAt": "datetime",
        "permissions": {
            "actions": ["string"],
            "resources": ["string"]
        },
        "urn": "string"
    }
]
```

- **policyId**: Unique identifier (UUID)
- **name**: Policy name
- **description**: Description of the policy
- **owner**: Owner of the policy
- **createdAt**: Creation timestamp
- **updatedAt**: Last update timestamp
- **permissions**: Permissions granted by the policy
  - **actions**: List of actions
  - **resources**: List of resource URNs
- **urn**: Unique resource name used in policies

---

#### **Create a New Policy**

**Path**: `/iam/policy`
**Method**: `POST`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Create a new policy.

#### Required IAM Action

- `account:apiovh:iam/policy/create`

#### Parameters

| Parameter | Type                  | Required | Description             |
| --------- | --------------------- | -------- | ----------------------- |
| Body      | `iam.policy.Creation` | **Yes**  | Policy creation payload |

#### Request Body Structure (`iam.policy.Creation`)

```json
{
    "name": "string",
    "description": "string",
    "permissions": {
        "actions": ["string"],
        "resources": ["string"]
    }
}
```

- **name**: Name of the policy
- **description**: Description of the policy
- **permissions**: Permissions to grant
  - **actions**: List of actions to allow
  - **resources**: List of resource URNs to allow access to

#### Response

Returns the created `iam.policy.Response` object with full metadata.

---

#### **Retrieve Policy Details**

**Path**: `/iam/policy/{policyId}`
**Method**: `GET`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Get details for a specific policy.

#### Parameters

| Parameter  | Type      | Required | Description                    |
| ---------- | --------- | -------- | ------------------------------ |
| `policyId` | `uuid`    | **Yes**  | ID of the policy to retrieve   |
| `details`  | `boolean` | No       | Add extra resource information |

#### Response

Returns the `iam.policy.Response` object with full details.

---

#### **Update an Existing Policy**

**Path**: `/iam/policy/{policyId}`
**Method**: `PUT`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Modify an existing policy.

#### Required IAM Action

- `account:apiovh:iam/policy/edit`

#### Parameters

| Parameter  | Type                | Required | Description                |
| ---------- | ------------------- | -------- | -------------------------- |
| `policyId` | `uuid`              | **Yes**  | ID of the policy to update |
| Body       | `iam.policy.Update` | **Yes**  | Updated policy details     |

#### Request Body Structure (`iam.policy.Update`)

```json
{
    "name": "string",
    "description": "string",
    "permissions": {
        "actions": ["string"],
        "resources": ["string"]
    }
}
```

- **name**: Updated policy name
- **description**: Updated policy description
- **permissions**: Updated permissions
  - **actions**: Modified list of actions
  - **resources**: Modified list of resource URNs

#### Response

Returns the updated `iam.policy.Response` object.

---

#### **Delete a Policy**

**Path**: `/iam/policy/{policyId}`
**Method**: `DELETE`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Remove a policy entirely.

#### Required IAM Action

- `account:apiovh:iam/policy/delete`

#### Parameters

| Parameter  | Type   | Required | Description                |
| ---------- | ------ | -------- | -------------------------- |
| `policyId` | `uuid` | **Yes**  | ID of the policy to delete |

#### Response

Returns `void` (no content) on success.

---

### 6. **Resource Type Reference**

#### **Retrieve All Resource Types**

**Path**: `/iam/reference/resource/type`
**Method**: `GET`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Get a list of all available resource types in the OVH Cloud IAM system.

#### Parameters

| Parameter             | Type     | Required | Description       |
| --------------------- | -------- | -------- | ----------------- |
| `X-Pagination-Cursor` | `string` | No       | Pagination cursor |
| `X-Pagination-Size`   | `long`   | No       | Pagination size   |

#### Response

Returns an array of resource type names as strings:

```json
["string", "string"]
```

---

### 7. **Resource Management**

#### **Retrieve All Resources**

**Path**: `/iam/resource`
**Method**: `GET`
**Status**: Stable production version (`PRODUCTION`)

#### Description

List all resources with optional filtering.

#### Parameters

| Parameter             | Type                                  | Required | Description                     |
| --------------------- | ------------------------------------- | -------- | ------------------------------- |
| `X-Pagination-Cursor` | `string`                              | No       | Pagination cursor               |
| `X-Pagination-Size`   | `long`                                | No       | Pagination size                 |
| `resourceName`        | `string[]`                            | No       | Filter by resource names        |
| `resourceType`        | `string[]`                            | No       | Filter by resource types        |
| `resourceURN`         | `string[]`                            | No       | Filter by resource URN patterns |
| `tags`                | `map[string][]iam.resource.TagFilter` | No       | Filter using tag filters        |

#### Response

Returns an array of `iam.resource.Resource` objects:

```json
[
    {
        "id": "uuid",
        "name": "string",
        "type": "string",
        "displayName": "string",
        "owner": "string",
        "tags": {},
        "urn": "string",
        "state": "iam.ResourceMetadata.StateEnum"
    }
]
```

- **id**: Unique resource identifier
- **name**: Resource name
- **type**: Resource type
- **displayName**: Human-readable display name
- **owner**: Resource owner
- **tags**: Map of tags (internally computed tags are prefixed with `ovh:`)
- **urn**: Unique resource name used in policies
- **state**: Resource state (one of: `EXPIRED`, `IN_CREATION`, `OK`, `SUSPENDED`)

---

#### **Retrieve a Resource**

**Path**: `/iam/resource/{resourceURN}`
**Method**: `GET`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Get details for a specific resource.

#### Parameters

| Parameter     | Type     | Required | Description         |
| ------------- | -------- | -------- | ------------------- |
| `resourceURN` | `string` | **Yes**  | URN of the resource |

#### Response

Returns a `iam.resource.Resource` object with full details.

---

#### **Update an Existing Resource**

**Path**: `/iam/resource/{resourceURN}`
**Method**: `PUT`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Modify an existing resource.

#### Required IAM Action

- `account:apiovh:iam/resource/edit`

#### Parameters

| Parameter     | Type                    | Required | Description                   |
| ------------- | ----------------------- | -------- | ----------------------------- |
| `resourceURN` | `string`                | **Yes**  | URN of the resource to update |
| Body          | `iam.resource.Resource` | **Yes**  | Updated resource details      |

#### Request Body Structure (`iam.resource.Resource`)

Same as the response structure for **Retrieve a Resource**.

#### Response

Returns the updated `iam.resource.Resource` object.

---

### 8. **Resource Authorization Check**

#### **Validate Authorizations on a Resource**

**Path**: `/iam/resource/{resourceURN}/authorization/check`
**Method**: `POST`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Check if the current user has the required authorizations to perform specific actions on a resource.

#### Parameters

| Parameter     | Type                   | Required | Description              |
| ------------- | ---------------------- | -------- | ------------------------ |
| `resourceURN` | `string`               | **Yes**  | URN of the resource      |
| Body          | `iam.AuthorizeRequest` | **Yes**  | List of actions to check |

#### Request Body Structure (`iam.AuthorizeRequest`)

```json
{
    "actions": ["string"]
}
```

- **actions**: List of actions to validate (e.g., `["account:apiovh:iam/resource/edit"]`)

#### Response

Returns an `iam.AuthorizeResponse` object:

```json
{
    "authorizedActions": ["string"],
    "unauthorizedActions": ["string"]
}
```

- **authorizedActions**: List of actions the user is authorized to perform
- **unauthorizedActions**: List of actions the user is **not** authorized to perform

---

### 9. **Resource Tag Management**

#### **Add a Tag to a Resource**

**Path**: `/iam/resource/{resourceURN}/tag`
**Method**: `POST`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Add a tag to a resource.

#### Required IAM Action

- `account:apiovh:iam/resource/tag/add`

#### Parameters

| Parameter     | Type                  | Required | Description         |
| ------------- | --------------------- | -------- | ------------------- |
| `resourceURN` | `string`              | **Yes**  | URN of the resource |
| Body          | `iam.resource.AddTag` | **Yes**  | Tag to add          |

#### Request Body Structure (`iam.resource.AddTag`)

```json
{
    "key": "string",
    "value": "string"
}
```

- **key**: Tag key
- **value**: Tag value

#### Response

Returns `void` (no content) on success.

---

#### **Remove a Tag from a Resource**

**Path**: `/iam/resource/{resourceURN}/tag/{key}`
**Method**: `DELETE`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Remove a specific tag from a resource.

#### Required IAM Action

- `account:apiovh:iam/resource/tag/remove`

#### Parameters

| Parameter     | Type     | Required | Description              |
| ------------- | -------- | -------- | ------------------------ |
| `resourceURN` | `string` | **Yes**  | URN of the resource      |
| `key`         | `string` | **Yes**  | Key of the tag to remove |

#### Response

Returns `void` (no content) on success.

---

### 10. **Resource Group Management**

#### **Retrieve All Resource Groups**

**Path**: `/iam/resourceGroup`
**Method**: `GET`
**Status**: Stable production version (`PRODUCTION`)

#### Description

List all resource groups.

#### Parameters

| Parameter             | Type      | Required | Description                    |
| --------------------- | --------- | -------- | ------------------------------ |
| `X-Pagination-Cursor` | `string`  | No       | Pagination cursor              |
| `X-Pagination-Size`   | `long`    | No       | Pagination size                |
| `details`             | `boolean` | No       | Add extra resource information |

#### Response

Returns an array of `iam.group.Response` objects:

```json
[
    {
        "id": "uuid",
        "name": "string",
        "createdAt": "datetime",
        "resources": [
            {
                "id": "uuid",
                "name": "string",
                "type": "string",
                "displayName": "string",
                "owner": "string",
                "tags": {},
                "urn": "string"
            }
        ]
    }
]
```

- **id**: Unique group identifier
- **name**: Group name
- **createdAt**: Creation timestamp
- **resources**: List of resources in the group
  - Each resource includes: `id`, `name`, `type`, `displayName`, `owner`, `tags`, `urn`

---

#### **Create a New Resource Group**

**Path**: `/iam/resourceGroup`
**Method**: `POST`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Create a new resource group containing specific resources.

#### Required IAM Action

- `account:apiovh:iam/resourceGroup/create`

#### Parameters

| Parameter | Type                 | Required | Description                     |
| --------- | -------------------- | -------- | ------------------------------- |
| Body      | `iam.group.Creation` | **Yes**  | Resource group creation payload |

#### Request Body Structure (`iam.group.Creation`)

```json
{
    "name": "string",
    "resources": [
        {
            "id": "uuid",
            "name": "string",
            "type": "string",
            "urn": "string"
        }
    ]
}
```

- **name**: Name of the resource group
- **resources**: List of resources to include in the group
  - Each resource includes: `id`, `name`, `type`, `urn`

#### Response

Returns the created `iam.group.Response` object with full metadata.

---

#### **Retrieve Resource Group Details**

**Path**: `/iam/resourceGroup/{groupId}`
**Method**: `GET`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Get details for a specific resource group.

#### Parameters

| Parameter  | Type      | Required | Description                    |
| ---------- | --------- | -------- | ------------------------------ |
| `groupId`  | `uuid`    | **Yes**  | ID of the resource group       |
| `details`` | `boolean` | No       | Add extra resource information |

#### Response

Returns a `iam.group.Response` object with full details.

---

#### **Update an Existing Resource Group**

**Path**: `/iam/resourceGroup/{groupId}`
**Method**: `PUT`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Modify an existing resource group.

#### Required IAM Action

- `account:apiovh:iam/resourceGroup/edit`

#### Parameters

| Parameter | Type               | Required | Description                        |
| --------- | ------------------ | -------- | ---------------------------------- |
| `groupId` | `uuid`             | **Yes**  | ID of the resource group to update |
| Body      | `iam.group.Update` | **Yes**  | Updated resource group details     |

#### Request Body Structure (`iam.group.Update`)

```json
{
    "name": "string",
    "resources": [
        {
            "id": "uuid",
            "name": "string",
            "type": "string",
            "urn": "string"
        }
    ]
}
```

- **name**: Updated group name
- **resources**: Updated list of resources

#### Response

Returns the updated `iam.group.Response` object.

---

#### **Delete a Resource Group**

**Path**: `/iam/resourceGroup/{groupId}`
**Method**: `DELETE`
**Status**: Stable production version (`PRODUCTION`)

#### Description

Remove a resource group entirely.

#### Required IAM Action

- `account:apiovh:iam/resourceGroup/delete`

#### Parameters

| Parameter | Type   | Required | Description                        |
| --------- | ------ | -------- | ---------------------------------- |
| `groupId` | `uuid` | **Yes**  | ID of the resource group to delete |

#### Response

Returns `void` (no content) on success.

---

## Models

### 1. `dbaas.logs.LogKind`

**Namespace**: `dbaas.logs`

**Description**: Log kind definition.

**Properties**:

| Property                   | Type       | Nullable | Read-only | Description                                  |
| -------------------------- | ---------- | -------- | --------- | -------------------------------------------- |
| `name`                     | `string`   | No       | Yes       | Log kind name                                |
| `displayName`              | `string`   | No       | Yes       | Human-readable display name                  |
| `kindId`                   | `uuid`     | No       | Yes       | Unique identifier for the log kind           |
| `createdAt`                | `datetime` | No       | Yes       | Timestamp when the log kind was created      |
| `updatedAt`                | `datetime` | No       | Yes       | Timestamp when the log kind was last updated |
| `additionalReturnedFields` | `string[]` | No       | Yes       | Additional fields available in log entries   |

---

### 2. `dbaas.logs.LogSubscription`

**Namespace**: `dbaas.logs`

**Description**: Log subscription details.

**Properties**:

| Property         | Type                                 | Nullable | Read-only | Description                                      |
| ---------------- | ------------------------------------ | -------- | --------- | ------------------------------------------------ |
| `subscriptionId` | `uuid`                               | No       | Yes       | Unique identifier for the log subscription       |
| `kind`           | `string`                             | No       | Yes       | Log kind name                                    |
| `resource`       | `dbaas.logs.LogSubscriptionResource` | No       | Yes       | Subscribed resource details                      |
| `serviceName`    | `string`                             | No       | Yes       | Name of the destination log service              |
| `streamId`       | `string`                             | No       | Yes       | ID of the destination log stream                 |
| `createdAt`      | `datetime`                           | No       | Yes       | Timestamp when the subscription was created      |
| `updatedAt`      | `datetime`                           | No       | Yes       | Timestamp when the subscription was last updated |

---

### 3. `dbaas.logs.LogSubscriptionCreation`

**Namespace**: `dbaas.logs`

**Description**: Payload for creating a log subscription.

**Properties**:

| Property   | Type     | Nullable | Read-only | Description                   |
| ---------- | -------- | -------- | --------- | ----------------------------- |
| `kind`     | `string` | No       | No        | Log kind name to subscribe to |
| `streamId` | `uuid`   | No       | No        | Customer log stream ID        |

---

### 4. `dbaas.logs.LogSubscriptionResource`

**Namespace**: `dbaas.logs`

**Description**: Resource details for a log subscription.

**Properties**:

| Property | Type     | Nullable | Read-only | Description                     |
| -------- | -------- | -------- | --------- | ------------------------------- |
| `name`   | `string` | No       | Yes       | Name of the subscribed resource |
| `type`   | `string` | No       | Yes       | Type of the subscribed resource |

---

### 5. `dbaas.logs.LogSubscriptionResponse`

**Namespace**: `dbaas.logs`

**Description**: Response for asynchronous log subscription operations.

**Properties**:

| Property      | Type     | Nullable | Read-only | Description                                 |
| ------------- | -------- | -------- | --------- | ------------------------------------------- |
| `operationId` | `uuid`   | No       | Yes       | Identifier of the asynchronous operation    |
| `serviceName` | `string` | No       | Yes       | Name of the service that owns the operation |

---

### 6. `dbaas.logs.TemporaryLogsLink`

**Namespace**: `dbaas.logs`

**Description**: Temporary URL for retrieving logs.

**Properties**:

| Property         | Type       | Nullable | Read-only | Description                                |
| ---------------- | ---------- | -------- | --------- | ------------------------------------------ |
| `url`            | `string`   | No       | Yes       | Temporary URL to access logs               |
| `expirationDate` | `datetime` | No       | Yes       | Expiration timestamp for the temporary URL |

---

### 7. `iam.AuthorizeBatchRequest`

**Namespace**: `iam`

**Description**: Payload for batch authorization checks.

**Properties**:

| Property       | Type       | Nullable | Read-only | Description                                   |
| -------------- | ---------- | -------- | --------- | --------------------------------------------- |
| `actions`      | `string[]` | No       | No        | List of actions to check authorizations for   |
| `resourceURNs` | `string[]` | No       | No        | Resources on which accesses should be checked |

---

### 8. `iam.AuthorizeBatchResponse`

**Namespace**: `iam`

**Description**: Response for batch authorization checks.

**Properties**:

| Property              | Type        | Nullable | Read-only | Description                  |
| --------------------- | ----------- | -------- | --------- | ---------------------------- |
| `resourceURN`         | `string`    | No       | Yes       | URN of the resource          |
| `authorizedActions`   | `string[]`  | No       | Yes       | List of authorized actions   |
| `unauthorizedActions` | `string[]`` | No       | Yes       | List of unauthorized actions |

---

### 9. `iam.AuthorizeRequest`

**Namespace**: `iam`

**Description**: Payload for checking authorizations on a resource.

**Properties**:

| Property  | Type       | Nullable | Read-only | Description                                 |
| --------- | ---------- | -------- | --------- | ------------------------------------------- |
| `actions` | `string[]` | No       | No        | List of actions to check authorizations for |

---

### 10. `iam.AuthorizeResponse`

**Namespace**: `iam`

**Description**: Response for authorization checks.

**Properties**:

| Property              | Type       | Nullable | Read-only | Description                                               |
| --------------------- | ---------- | -------- | --------- | --------------------------------------------------------- |
| `authorizedActions`   | `string[]` | No       | Yes       | List of actions the user is authorized to perform         |
| `unauthorizedActions` | `string[]` | No       | Yes       | List of actions the user is **not** authorized to perform |

---

### 11. `iam.PermissionsGroup`

**Namespace**: `iam`

**Description**: Permissions group defines a reusable set of permissions.

**Properties**:

| Property      | Type                     | Nullable | Read-only | Description                                |
| ------------- | ------------------------ | -------- | --------- | ------------------------------------------ |
| `id`          | `uuid`                   | No       | Yes       | Unique identifier of the permissions group |
| `name`        | `string`                 | No       | No        | Name of the permissions group              |
| `description` | `string`                 | No       | No        | Description of the permissions group       |
| `owner`       | `string`                 | No       | Yes       | Owner of the permissions group             |
| `createdAt`   | `datetime`               | No       | Yes       | Creation timestamp                         |
| `updatedAt`   | `datetime`               | No       | Yes       | Last update timestamp                      |
| `urn`         | `string`                 | No       | Yes       | Unique resource name used in policies      |
| `permissions` | `iam.policy.Permissions` | No       | No        | Permissions granted when using this group  |

---

### 12. `iam.policy.Creation`

**Namespace**: `iam.policy`

**Description**: Payload for creating a new policy.

**Properties**:

| Property      | Type                     | Nullable | Read-only | Description               |
| ------------- | ------------------------ | -------- | --------- | ------------------------- |
| `name`        | `string`                 | No       | No        | Name of the policy        |
| `description` | `string`                 | No       | No        | Description of the policy |
| `permissions` | `iam.policy.Permissions` | No       | No        | Permissions to grant      |

---

### 13. `iam.policy.Response`

**Namespace**: `iam.policy`

**Description**: Response object for policy operations.

**Properties**:

| Property      | Type                     | Nullable | Read-only | Description                           |
| ------------- | ------------------------ | -------- | --------- | ------------------------------------- |
| `policyId`    | `uuid`                   | No       | Yes       | Unique identifier of the policy       |
| `name`        | `string`                 | No       | No        | Name of the policy                    |
| `description` | `string`                 | No       | No        | Description of the policy             |
| `owner`       | `string`                 | No       | Yes       | Owner of the policy                   |
| `createdAt`   | `datetime`               | No       | Yes       | Creation timestamp                    |
| `updatedAt`   | `datetime`               | No       | Yes       | Last update timestamp                 |
| `permissions` | `iam.policy.Permissions` | No       | No        | Permissions granted by the policy     |
| `urn`         | `string`                 | No       | Yes       | Unique resource name used in policies |

---

### 14. `iam.group.Creation`

**Namespace**: `iam.group`

**Description**: Properties needed to create a resource group.

**Properties**:

| Property    | Type                   | Nullable | Read-only | Description                           |
| ----------- | ---------------------- | -------- | --------- | ------------------------------------- |
| `name`      | `string`               | No       | No        | Name of the resource group            |
| `resources` | `iam.group.Resource[]` | No       | No        | List of resources to add in the group |

---

### 15. `iam.group.Resource`

**Namespace**: `iam.group`

**Description**: Resource definition for a resource group.

**Properties**:

| Property      | Type                | Nullable | Read-only | Description                       |
| ------------- | ------------------- | -------- | --------- | --------------------------------- |
| `id`          | `uuid`              | No       | No        | Unique identifier of the resource |
| `name`        | `string`            | No       | Yes       | Resource name                     |
| `type`        | `string`            | No       | Yes       | Resource type                     |
| `displayName` | `string`            | No       | Yes       | Human-readable display name       |
| `owner`       | `string`            | No       | Yes       | Resource owner                    |
| `tags`        | `map[string]string` | No       | Yes       | Resource tags                     |
| `urn`         | `string`            | No       | No        | Unique resource name              |

---

### 16. `iam.group.Response`

**Namespace**: `iam.group`

**Description**: Response object for resource group operations.

**Properties**:

| Property    | Type                   | Nullable | Read-only | Description                    |
| ----------- | ---------------------- | -------- | --------- | ------------------------------ |
| `id`        | `uuid`                 | No       | Yes       | Unique identifier of the group |
| `name`      | `string`               | No       | Yes       | Name of the group              |
| `createdAt` | `datetime`             | No       | Yes       | Creation timestamp             |
| `resources` | `iam.group.Resource[]` | No       | Yes       | List of resources in the group |

---

### 17. `iam.policy.Permissions`

**Namespace**: `iam.policy`

**Description**: Permissions structure for policies.

**Properties**:

| Property    | Type       | Nullable | Read-only | Description                    |
| ----------- | ---------- | -------- | --------- | ------------------------------ |
| `actions`   | `string[]` | No       | No        | List of actions to allow       |
| `resources` | `string[]` | No       | No        | List of resource URNs to allow |

---

### 18. `iam.resource.Resource`

**Namespace**: `iam.resource`

**Description**: IAM resource metadata embedded in services models.

**Properties**:

| Property      | Type                             | Nullable | Read-only | Description                                                   |
| ------------- | -------------------------------- | -------- | --------- | ------------------------------------------------------------- |
| `id`          | `uuid`                           | No       | Yes       | Unique identifier of the resource                             |
| `name`        | `string`                         | No       | Yes       | Resource name                                                 |
| `type`        | `string`                         | No       | Yes       | Resource type                                                 |
| `displayName` | `string`                         | No       | Yes       | Human-readable display name                                   |
| `owner`       | `string`                         | No       | Yes       | Resource owner                                                |
| `tags`        | `map[string]string`              | No       | Yes       | Resource tags (internally computed tags prefixed with `ovh:`) |
| `urn`         | `string`                         | No       | Yes       | Unique resource name used in policies                         |
| `state`       | `iam.ResourceMetadata.StateEnum` | No       | Yes       | Resource state                                                |

---

### 19. `iam.ResourceMetadata.StateEnum`

**Namespace**: `iam.ResourceMetadata`

**Description**: Resource state enumeration.

**Enum Values**:

- `EXPIRED`
- `IN_CREATION`
- `OK`
- `SUSPENDED`

---

## Usage Examples

### Example 1: Batch Authorization Check

**Request**:

```bash
curl -X POST \
  https://eu.api.ovh.com/v2/iam/authorization/check \
  -H "X-Pagination-Cursor: cursor123" \
  -H "X-Pagination-Size: 100" \
  -H "Content-Type: application/json" \
  -d '{
    "actions": ["account:apiovh:iam/policy/get"],
    "resourceURNs": ["urn:ovh:account:12345678", "urn:ovh:project:98765432"]
  }'
```

**Response**:

```json
[
    {
        "resourceURN": "urn:ovh:account:12345678",
        "authorizedActions": ["account:apiovh:iam/policy/get"],
        "unauthorizedActions": []
    }
]
```

---

### Example 2: Create a Log Subscription

**Request**:

```bash
curl -X POST \
  https://eu.api.ovh.com/v2/iam/log/subscription \
  -H "Content-Type: application/json" \
  -d '{
    "kind": "default",
    "streamId": "550e8400-e29b-41d4-a716-446655440000"
  }'
```

**Response**:

```json
{
    "operationId": "550e8400-e29b-41d4-a716-446655440000",
    "serviceName": "logs"
}
```

---

### Example 3: Generate a Temporary Logs URL

**Request**:

```bash
curl -X POST \
  https://eu.api.ovh.com/v2/iam/log/url \
  -H "Content-Type: application/json" \
  -d '{
    "kind": "default"
  }'
```

**Response**:

```json
{
    "url": "https://logs.ovh.com/temporary-url/12345678",
    "expirationDate": "2026-04-01T12:00:00Z"
}
```

---

### Example 4: Create a Permissions Group

**Request**:

```bash
curl -X POST \
  https://eu.api.ovh.com/v2/iam/permissionsGroup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "my-permissions-group",
    "description": "A group for managing permissions",
    "permissions": {
      "actions": ["account:apiovh:iam/policy/get"],
      "resources": ["urn:ovh:account:*"]
    }
  }'
```

**Response**:

```json
[
    {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "name": "my-permissions-group",
        "description": "A group for managing permissions",
        "owner": "user@ovh.com",
        "createdAt": "2026-04-01T12:00:00Z",
        "updatedAt": null,
        "urn": "urn:ovh:iam:permissionsGroup:550e8400-e29b-41d4-a716-446655440000",
        "permissions": {
            "actions": ["account:apiovh:iam/policy/get"],
            "resources": ["urn:ovh:account:*"]
        }
    }
]
```

---

### Example 5: Create a Resource Group

**Request**:

```bash
curl -X POST \
  https://eu.api.ovh.com/v2/iam/resourceGroup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "my-resource-group",
    "resources": [
      {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "name": "my-resource",
        "type": "account",
        "urn": "urn:ovh:account:12345678"
      }
    ]
  }'
```

**Response**:

```json
[
    {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "name": "my-resource-group",
        "createdAt": "2026-04-01T12:00:00Z",
        "resources": [
            {
                "id": "550e8400-e29b-41d4-a716-446655440000",
                "name": "my-resource",
                "type": "account",
                "displayName": "My Resource",
                "owner": "user@ovh.com",
                "tags": {},
                "urn": "urn:ovh:account:12345678"
            }
        ]
    }
]
```

---

## Error Handling

### Common Errors

| Error Type              | Description                                                     |
| ----------------------- | --------------------------------------------------------------- |
| `NodeApiError`          | Used for n8n-specific errors when calling the OVH Cloud IAM API |
| `401 Unauthorized`      | Missing or invalid OVH Cloud API credentials                    |
| `403 Forbidden`         | User lacks the required IAM permissions                         |
| `404 Not Found`         | Resource or group does not exist                                |
| `429 Too Many Requests` | Rate limit exceeded                                             |

### Error Messages

- **Authentication Errors**:

  ```
  "Error: Missing applicationKey"
  ```

- **Permission Errors**:

  ```
  "Error: User lacks permission 'account:apiovh:iam/policy/get'"
  ```

---

## Rate Limiting & Pagination

### Rate Limiting

- **Headers**:
  - `X-RateLimit-Limit`: Maximum number of requests allowed per time window
  - `X-RateLimit-Remaining`: Number of requests remaining in the current window
  - `X-RateLimit-Reset`: Timestamp when the rate limit resets

### Pagination

- **Headers**:
  - `X-Pagination-Cursor`: Cursor for the next page of results
  - `X-Pagination-Size`: Number of items per page (default: `100`)

---

## Security Considerations

### Credential Handling

- **Never hardcode credentials**: Always use environment variables or secure credential storage
- **Consumer Key**: Treat as sensitive data - revoke immediately if compromised

### IAM Actions

- **Granular permissions**: Use specific IAM actions rather than broad wildcards
- **Audit logs**: Monitor and log all policy and permission changes
- **Least privilege**: Grant only the minimum permissions required

### Resource URNs

- **Avoid wildcard URNs**: Use specific URNs where possible to prevent unintended access
- **Validate URNs**: Ensure URNs are valid before making API calls

---

## Best Practices

### Request Optimization

- **Batch operations**: Use batch endpoints (e.g., `/authorization/check`) instead of individual calls
- **Pagination**: Use cursors and sizes for large datasets

### Error Handling

- **Descriptive errors**: Include context in error messages
- **Retry logic**: Implement exponential backoff for rate limit errors

### Resource Management

- **Tagging**: Use tags for filtering and organizing resources
- **Grouping**: Organize resources into groups for easier permission management

---

## References

- [OVH Cloud IAM Documentation](https://api.ovh.com/)
- [n8n Workflow Documentation](https://docs.n8n.io/)
- [OVH Cloud API Status](https://status.ovhcloud.com/)

---

## Notes

- **Beta endpoints**: Marked as `BETA` - may change in future versions
- **Wildcard URNs**: Supported in some endpoints (e.g., `/resource/{resourceURN}`) - use with caution
- **Resource states**: Resources can be in states: `EXPIRED`, `IN_CREATION`, `OK`, `SUSPENDED`

# OVHcloud Domain Operations Documentation

## Overview

This document describes the available API operations for managing OVHcloud domain names and related DNS services. The operations are categorized by their functionality and follow the OVHcloud API conventions.

---

## API Version

- **Version**: 1.0
- **Status**: Production (Stable)

---

## Operations

### 1. `/domain`

#### **GET** - List all managed domain names

```
GET /domain
```

**Description**: Retrieve a list of all domain names managed by the OVHcloud API.

**Authentication**: Required

**Parameters**:

| Parameter | Type                                  | Required | Description                        |
| --------- | ------------------------------------- | -------- | ---------------------------------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | No       | Filter resources based on IAM tags |

**Response Type**: `string[]`

**IAM Actions**:

- `domain:apiovh:get` (Required)

**Example Response**:

```json
["example1.com", "example2.fr", "example3.net"]
```

---

### 2. `/domain/configurationRule`

#### **GET** - Get configuration rule for a domain

```
GET /domain/configurationRule
```

**Description**: Retrieve the configuration rule applied for a domain based on a specified action.

**Authentication**: Not required

**Parameters**:

| Parameter | Type                | Required | Description                                           |
| --------- | ------------------- | -------- | ----------------------------------------------------- |
| `action`  | `domain.ActionEnum` | Yes      | Action to filter rules (e.g., `transfer` or `create`) |
| `domain`  | `string`            | Yes      | The domain name to get the configuration rule for     |

**Response Type**: `domain.configuration.rules.Rule`

**Example Response**:

```json
{
    "transfer": {
        "authCode": "string",
        "owner": "string",
        "duration": "integer"
    },
    "create": {
        "duration": "integer"
    }
}
```

---

### 3. `/domain/data/claimNotice`

#### **GET** - Retrieve claim notices associated with a domain

```
GET /domain/data/claimNotice?domain=example.com
```

**Description**: Get claim notices for a specific domain name.

**Authentication**: Not required

**Parameters**:

| Parameter | Type     | Required | Description |
| --------- | -------- | -------- | ----------- |
| `domain`  | `string` | Yes      | Domain name |

**Response Type**: `domain.data.claimNotice.ClaimNotice`

**Example Response**:

```json
{
    "claimNotice": "string"
}
```

---

### 4. `/domain/data/extension`

#### **GET** - List all domain extensions

```
GET /domain/data/extension
```

**Description**: Retrieve a list of all available domain extensions.

**Authentication**: Not required

\***\*Deprecated**

- **Status**: Deprecated
- **Deprecated Date**: 2021-02-01
- **Removal Date**: 2021-08-31
- **Replacement**: Use `/domain/extensions` instead

**Parameters**:

| Parameter | Type                          | Required | Description                                |
| --------- | ----------------------------- | -------- | ------------------------------------------ |
| `country` | `nichandle.OvhSubsidiaryEnum` | No       | OVH subsidiary targeted (e.g., `FR`, `EU`) |

**Response Type**: `string[]`

---

### 5. `/domain/data/smd`

#### **GET** - List all SMD files

```
GET /domain/data/smd
```

**Description**: Retrieve a list of all Signed Marked Definition (SMD) files.

**Authentication**: Required

**Parameters**:

| Parameter | Type                                  | Required | Description                        |
| --------- | ------------------------------------- | -------- | ---------------------------------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | No       | Filter resources based on IAM tags |

**Response Type**: `domain.data.smd.Smd[]`

**IAM Actions**:

- `account:apiovh:domain/data/smd/get` (Required)

---

#### **POST** - Create a new SMD file

```
POST /domain/data/smd
```

**Description**: Create a new SMD file for a domain.

**Authentication**: Required

**Parameters**:

| Parameter | Type                      | Required | Description                      |
| --------- | ------------------------- | -------- | -------------------------------- |
| `SmdBody` | `domain.data.smd.SmdBody` | Yes      | Request body containing SMD data |
| `domain`  | `string`                  | Yes      | Domain name                      |

**Response Type**: `domain.data.smd.Smd`

**IAM Actions**:

- `account:apiovh:domain/data/smd/create` (Required)

---

### 6. `/domain/data/smd/{smdId}`

#### **GET** - Get details about a specific SMD file

```
GET /domain/data/smd/{smdId}
```

**Description**: Retrieve properties of a specific SMD file by its ID.

**Authentication**: Required

**Parameters**:

| Parameter | Type   | Required | Description                       |
| --------- | ------ | -------- | --------------------------------- |
| `smdId`   | `uuid` | Yes      | Unique identifier of the SMD file |

**Response Type**: `domain.data.smd.Smd`

**IAM Actions**:

- `dnsZone:apiovh:domain/data/smd/get` (Required)

---

#### **PUT** - Update an SMD file

```
PUT /domain/data/smd/{smdId}
```

**Description**: Modify properties of an existing SMD file.

**Authentication**: Required

**Parameters**:

| Parameter | Type                      | Required | Description                       |
| --------- | ------------------------- | -------- | --------------------------------- |
| `SmdBody` | `domain.data.smd.SmdBody` | Yes      | Updated request body              |
| `smdId`   | `uuid`                    | Yes      | Unique identifier of the SMD file |

**Response Type**: `domain.data.smd.Smd`

**IAM Actions**:

- `dnsZone:apiovh:domain/data/smd/edit` (Required)

---

#### **DELETE** - Delete an SMD file

```
DELETE /domain/data/smd/{smdId}
```

**Description**: Remove an SMD file from the system.

**Authentication**: Required

**Parameters**:

| Parameter | Type   | Required | Description                       |
| --------- | ------ | -------- | --------------------------------- |
| `smdId`   | `uuid` | Yes      | Unique identifier of the SMD file |

**Response Type**: `void`

**IAM Actions**:

- `dnsZone:apiovh:domain/data/smd/delete` (Required)

---

### 7. `/domain/extensions`

#### **GET** - List all domain extensions

```
GET /domain/extensions
```

**Description**: Retrieve a list of all available domain extensions.

**Authentication**: Not required

**Parameters**:

| Parameter          | Type                                | Required | Description                                                    |
| ------------------ | ----------------------------------- | -------- | -------------------------------------------------------------- |
| `geolocalizations` | `string`                            | No       | Filter extensions by geolocalization places (comma separated)  |
| `orderBy`          | `domain.extensions.OrderByTypeEnum` | No       | Order results by `alphabetical` or `trending`                  |
| `ovhSubsidiary`    | `nichandle.OvhSubsidiaryEnum`       | No       | OVHcloud subsidiary targeted (e.g., `FR`, `EU`). Default: `FR` |
| `thematics`        | `string`                            | No       | Filter extensions by thematics (comma separated)               |

**Response Type**: `string[]`

**IAM Actions**:

- `account:apiovh:domain/extension/get` (Required)

---

### 8. `/domain/extensions/byCategory`

#### **GET** - List extensions grouped by category types

```
GET /domain/extensions/byCategory
```

**Description**: Retrieve extensions grouped by category types (e.g., `thematic`, `geolocalization`) and category names (e.g., `europe`).

**Authentication**: Not required

**Parameters**:

| Parameter      | Type                                   | Required | Description              |
| -------------- | -------------------------------------- | -------- | ------------------------ |
| `categoryType` | `domain.extensions.CategoryTypeEnum[]` | No       | Filter by category types |

**Response Type**: `domain.extensions.ExtensionsByCategory`

**IAM Actions**:

- `account:apiovh:domain/extension/byCategory/get` (Required)

---

### 9. `/domain/extensions/highlighted`

#### **GET** - List highlighted domain extensions

```
GET /domain/extensions/highlighted
```

**Description**: Retrieve a list of highlighted domain extensions, ordered by decreased importance. Highlighted extensions vary by OVHcloud subsidiary.

**Authentication**: Not required

**Parameters**:

| Parameter       | Type                          | Required | Description                                 |
| --------------- | ----------------------------- | -------- | ------------------------------------------- |
| `ovhSubsidiary` | `nichandle.OvhSubsidiaryEnum` | No       | OVHcloud subsidiary targeted. Default: `FR` |

**Response Type**: `string[]`

**IAM Actions**:

- `account:apiovh:domain/extension/highlighted/get` (Required)

---

### 10. `/domain/extensions/pricingAttributes`

#### **GET** - List domain extensions with pricing attributes

```
GET /domain/extensions/pricingAttributes
```

**Description**: Retrieve domain extensions with their pricing attributes. This endpoint is useful for checking recent implementations or price drops.

**Authentication**: Not required

**Parameters**:

| Parameter       | Type                          | Required | Description                                                                    |
| --------------- | ----------------------------- | -------- | ------------------------------------------------------------------------------ |
| `ovhSubsidiary` | `nichandle.OvhSubsidiaryEnum` | No       | OVHcloud subsidiary targeted. Attributes may vary by subsidiary. Default: `FR` |

**Response Type**: `domain.extensions.ExtensionsPricingAttributes[]`

**IAM Actions**:

- `account:apiovh:domain/extension/get` (Required)

---

### 11. `/domain/extensions/{name}`

#### **GET** - Get a specific domain extension

```
GET /domain/extensions/{name}
```

**Description**: Retrieve details about a specific domain extension by its name.

**Authentication**: Not required

**Parameters**:

| Parameter | Type     | Required | Description                  |
| --------- | -------- | -------- | ---------------------------- |
| `name`    | `string` | Yes      | Name of the domain extension |

**Response Type**: `domain.extensions.Extension`

**IAM Actions**:

- `account:apiovh:domain/extension/get` (Required)

---

### 12. `/domain/extensions/{name}/registryConfigurations`

#### **GET** - Retrieve registry configurations for a domain extension

```
GET /domain/extensions/{name}/registryConfigurations
```

**Description**: Retrieve registry configurations for a specific domain extension.

**Authentication**: Not required

**Parameters**:

| Parameter | Type     | Required | Description                  |
| --------- | -------- | -------- | ---------------------------- |
| `name`    | `string` | Yes      | Name of the domain extension |

**Response Type**: `domain.extensions.registryConfigurations.RegistryConfigurations`

**IAM Actions**:

- `account:apiovh:domain/extension/registryConfiguration/get` (Required)

---

### 13. `/domain/zone`

#### **GET** - List DNS zone services

```
GET /domain/zone
```

**Description**: Retrieve a list of all available DNS zone services.

**Authentication**: Not required

**Parameters**:

| Parameter | Type                                  | Required | Description                        |
| --------- | ------------------------------------- | -------- | ---------------------------------- |
| `iamTags` | `map[string][]iam.resource.TagFilter` | No       | Filter resources based on IAM tags |

**Response Type**: `string[]`

**IAM Actions**:

- `dnsZone:apiovh:get` (Required)

---

### 14. `/domain/zone/{zoneName}`

#### **GET** - Get a specific DNS zone

```
GET /domain/zone/{zoneName}
```

**Description**: Retrieve details about a specific DNS zone by its name.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type     | Required | Description          |
| ---------- | -------- | -------- | -------------------- |
| `zoneName` | `string` | Yes      | Name of the DNS zone |

**Response Type**: `domain.ZoneWithIAM`

**IAM Actions**:

- `dnsZone:apiovh:get` (Required)

---

### 15. `/domain/zone/{zoneName}/capabilities`

#### **GET** - Get zone capabilities

```
GET /domain/zone/{zoneName}/capabilities
```

**Description**: Retrieve capabilities for a specific DNS zone.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type     | Required | Description          |
| ---------- | -------- | -------- | -------------------- |
| `zoneName` | `string` | Yes      | Name of the DNS zone |

**Response Type**: `domain.zone.Capabilities`

**IAM Actions**:

- `dnsZone:apiovh:capabilities/get` (Required)

---

### 16. `/domain/zone/{zoneName}/changeContact`

#### **POST** - Launch a contact change procedure

```
POST /domain/zone/{zoneName}/changeContact
```

**Description**: Initiate a contact change procedure for a specific DNS zone.

**Authentication**: Not required

**Parameters**:

| Parameter       | Type                     | Required | Description                                    |
| --------------- | ------------------------ | -------- | ---------------------------------------------- |
| `zoneName`      | `string`                 | Yes      | Name of the DNS zone                           |
| `ChangeContact` | `services.changeContact` | Yes      | Request body containing contact change details |

**Response Type**: `long[]`

**IAM Actions**:

- `dnsZone:apiovh:changeContact` (Required)

---

### 17. `/domain/zone/{zoneName}/confirmTermination`

#### **POST** - Confirm service termination

```
POST /domain/zone/{zoneName}/confirmTermination
```

**Description**: Confirm the termination of a specific DNS zone service.

**Authentication**: Not required

**Parameters**:

| Parameter            | Type                          | Required | Description                                              |
| -------------------- | ----------------------------- | -------- | -------------------------------------------------------- |
| `zoneName`           | `string`                      | Yes      | Name of the DNS zone                                     |
| `ConfirmTermination` | `services.confirmTermination` | Yes      | Request body containing termination confirmation details |

**Response Type**: `string`

**IAM Actions**:

- `dnsZone:apiovh:confirmTermination` (Required)

---

### 18. `/domain/zone/{zoneName}/dnssec`

#### **GET** - Get a zone DNSSEC status

```
GET /domain/zone/{zoneName}/dnssec
```

**Description**: Retrieve the DNSSEC status of a specific DNS zone.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type     | Required | Description          |
| ---------- | -------- | -------- | -------------------- |
| `zoneName` | `string` | Yes      | Name of the DNS zone |

**Response Type**: `domain.zone.Dnssec`

**IAM Actions**:

- `dnsZone:apiovh:dnssec/get` (Required)

---

#### **POST** - Enable DNSSEC for a zone

```
POST /domain/zone/{zoneName}/dnssec
```

**Description**: Enable DNSSEC for a specific DNS zone.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type     | Required | Description          |
| ---------- | -------- | -------- | -------------------- |
| `zoneName` | `string` | Yes      | Name of the DNS zone |

**Response Type**: `void`

**IAM Actions**:

- `dnsZone:apiovh:dnssec/create` (Required)

---

#### **DELETE** - Disable DNSSEC for a zone

```
DELETE /domain/zone/{zoneName}/dnssec
```

**Description**: Disable DNSSEC for a specific DNS zone.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type     | Required | Description          |
| ---------- | -------- | -------- | -------------------- |
| `zoneName` | `string` | Yes      | Name of the DNS zone |

**Response Type**: `void`

**IAM Actions**:

- `dnsZone:apiovh:dnssec/delete` (Required)

---

### 19. `/domain/zone/{zoneName}/export`

#### **GET** - Export DNS zone

```
GET /domain/zone/{zoneName}/export
```

**Description**: Export a DNS zone to a zone file.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type     | Required | Description          |
| ---------- | -------- | -------- | -------------------- |
| `zoneName` | `string` | Yes      | Name of the DNS zone |

**Response Type**: `string`

**IAM Actions**:

- `dnsZone:apiovh:export/get` (Required)

---

### 20. `/domain/zone/{zoneName}/history`

#### **GET** - List zone histories

```
GET /domain/zone/{zoneName}/history
```

**Description**: Retrieve a list of historical backup points for a specific DNS zone.

**Authentication**: Not required

**Parameters**:

| Parameter           | Type       | Required | Description                                |
| ------------------- | ---------- | -------- | ------------------------------------------ |
| `zoneName`          | `string`   | Yes      | Name of the DNS zone                       |
| `creationDate.from` | `datetime` | No       | Filter backup points by creation date (>=) |
| `creationDate.to`   | `datetime` | No       | Filter backup points by creation date (<=) |

**Response Type**: `datetime[]`

**IAM Actions**:

- `dnsZone:apiovh:history/get` (Required)

---

### 21. `/domain/zone/{zoneName}/history/{creationDate}`

#### **GET** - Get a zone history

```
GET /domain/zone/{zoneName}/history/{creationDate}
```

**Description**: Retrieve details about a specific historical backup point of a DNS zone.

**Authentication**: Not required

**Parameters**:

| Parameter      | Type       | Required | Description                       |
| -------------- | ---------- | -------- | --------------------------------- |
| `zoneName`     | `string`   | Yes      | Name of the DNS zone              |
| `creationDate` | `datetime` | Yes      | Creation date of the backup point |

**Response Type**: `domain.zone.ZoneRestorePoint`

**IAM Actions**:

- `dnsZone:apiovh:history/get` (Required)

---

#### **POST** - Restore a backup point

```
POST /domain/zone/{zoneName}/history/{creationDate}/restore
```

**Description**: Restore a DNS zone to a specific backup point.

**Authentication**: Not required

**Parameters**:

| Parameter      | Type       | Required | Description                                  |
| -------------- | ---------- | -------- | -------------------------------------------- |
| `zoneName`     | `string`   | Yes      | Name of the DNS zone                         |
| `creationDate` | `datetime` | Yes      | Creation date of the backup point to restore |

**Response Type**: `domain.zone.Task`

**IAM Actions**:

- `dnsZone:apiovh:history/restore` (Required)

---

### 22. `/domain/zone/{zoneName}/import`

#### **POST** - Import a DNS zone from a zone file

```
POST /domain/zone/{zoneName}/import
```

**Description**: Import a DNS zone from a zone file.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type                 | Required | Description                            |
| ---------- | -------------------- | -------- | -------------------------------------- |
| `zoneName` | `string`             | Yes      | Name of the DNS zone                   |
| `Import`   | `domain.zone.Import` | Yes      | Request body containing zone file data |

**Response Type**: `domain.zone.Task`

**IAM Actions**:

- `dnsZone:apiovh:import` (Required)

---

### 23. `/domain/zone/{zoneName}/option`

#### **GET** - List zone options

```
GET /domain/zone/{zoneName}/option
```

**Description**: Retrieve a list of available options for a specific DNS zone.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type     | Required | Description          |
| ---------- | -------- | -------- | -------------------- |
| `zoneName` | `string` | Yes      | Name of the DNS zone |

**Response Type**: `string[]`

**IAM Actions**:

- `dnsZone:apiovh:option/get` (Required)

---

### 24. `/domain/zone/{zoneName}/option/{name}`

#### **GET** - Get zone option

```
GET /domain/zone/{zoneName}/option/{name}
```

**Description**: Retrieve details about a specific option of a DNS zone.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type     | Required | Description          |
| ---------- | -------- | -------- | -------------------- |
| `zoneName` | `string` | Yes      | Name of the DNS zone |
| `name`     | `string` | Yes      | Name of the option   |

**Response Type**: `domain.zone.Option`

**IAM Actions**:

- `dnsZone:apiovh:option/get` (Required)

---

#### **PUT** - Alter zone option properties

```
PUT /domain/zone/{zoneName}/option/{name}/serviceInfos
```

**Description**: Modify properties of a specific option for a DNS zone.

**Authentication**: Not required

**Parameters**:

| Parameter      | Type               | Required | Description          |
| -------------- | ------------------ | -------- | -------------------- |
| `zoneName`     | `string`           | Yes      | Name of the DNS zone |
| `name`         | `string`           | Yes      | Name of the option   |
| `serviceInfos` | `services.Service` | Yes      | Updated request body |

**Response Type**: `void`

**IAM Actions**:

- `dnsZone:apiovh:option/serviceInfos/edit` (Required)

---

### 25. `/domain/zone/{zoneName}/dynHost/login`

#### **GET** - List DynHost logins

```
GET /domain/zone/{zoneName}/dynHost/login
```

**Description**: Retrieve a list of DynHost logins for a specific DNS zone.

**Authentication**: Not required

**Parameters**:

| Parameter   | Type     | Required | Description                        |
| ----------- | -------- | -------- | ---------------------------------- |
| `zoneName`  | `string` | Yes      | Name of the DNS zone               |
| `login`     | `string` | No       | Filter logins by value (ilike)     |
| `subDomain` | `string` | No       | Filter logins by subdomain (ilike) |

**Response Type**: `string[]`

**IAM Actions**:

- `dnsZone:apiovh:dynHost/login/get` (Required)

---

#### **POST** - Create a new DynHost login

```
POST /domain/zone/{zoneName}/dynHost/login
```

**Description**: Create a new DynHost login for a specific DNS zone.

**Authentication**: Not required

**Parameters**:

| Parameter     | Type                              | Required | Description                                    |
| ------------- | --------------------------------- | -------- | ---------------------------------------------- |
| `zoneName`    | `string`                          | Yes      | Name of the DNS zone                           |
| `LoginCreate` | `domain.zone.dynHost.LoginCreate` | Yes      | Request body containing login creation details |

**Response Type**: `domain.zone.dynHost.Login`

**IAM Actions**:

- `dnsZone:apiovh:dynHost/login/create` (Required)

---

### 26. `/domain/zone/{zoneName}/dynHost/login/{login}`

#### **GET** - Get DynHost login properties

```
GET /domain/zone/{zoneName}/dynHost/login/{login}
```

**Description**: Retrieve properties of a specific DynHost login by its value.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type     | Required | Description                |
| ---------- | -------- | -------- | -------------------------- |
| `zoneName` | `string` | Yes      | Name of the DNS zone       |
| `login`    | `string` | Yes      | Value of the DynHost login |

**Response Type**: `domain.zone.dynHost.Login`

**IAM Actions**:

- `dnsZone:apiovh:dynHost/login/get` (Required)

---

#### **PUT** - Alter DynHost login properties

```
PUT /domain/zone/{zoneName}/dynHost/login/{login}
```

**Description**: Modify properties of an existing DynHost login.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type                        | Required | Description                |
| ---------- | --------------------------- | -------- | -------------------------- |
| `zoneName` | `string`                    | Yes      | Name of the DNS zone       |
| `login`    | `string`                    | Yes      | Value of the DynHost login |
| `Login`    | `domain.zone.dynHost.Login` | Yes      | Updated request body       |

**Response Type**: `void`

**IAM Actions**:

- `dnsZone:apiovh:dynHost/login/edit` (Required)

---

#### **DELETE** - Delete a DynHost login

```
DELETE /domain/zone/{zoneName}/dynHost/login/{login}
```

**Description**: Remove a DynHost login from the system.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type     | Required | Description                |
| ---------- | -------- | -------- | -------------------------- |
| `zoneName` | `string` | Yes      | Name of the DNS zone       |
| `login`    | `string` | Yes      | Value of the DynHost login |

**Response Type**: `void`

**IAM Actions**:

- `dnsZone:apiovh:dynHost/login/delete` (Required)

---

### 27. `/domain/zone/{zoneName}/dynHost/login/{login}/changePassword`

#### **POST** - Change password of a DynHost login

```
POST /domain/zone/{zoneName}/dynHost/login/{login}/changePassword
```

**Description**: Change the password of an existing DynHost login.

**Authentication**: Not required

**Parameters**:

| Parameter             | Type                                      | Required | Description                                  |
| --------------------- | ----------------------------------------- | -------- | -------------------------------------------- |
| `zoneName`            | `string`                                  | Yes      | Name of the DNS zone                         |
| `login`               | `string`                                  | Yes      | Value of the DynHost login                   |
| `LoginChangePassword` | `domain.zone.dynHost.LoginChangePassword` | Yes      | Request body containing new password details |

**Response Type**: `void`

**IAM Actions**:

- `dnsZone:apiovh:dynHost/login/changePassword` (Required)

---

### 28. `/domain/zone/{zoneName}/dynHost/record`

#### **GET** - List DynHost records

```
GET /domain/zone/{zoneName}/dynHost/record
```

**Description**: Retrieve a list of DynHost records for a specific DNS zone.

**Authentication**: Not required

**Parameters**:

| Parameter   | Type     | Required | Description                         |
| ----------- | -------- | -------- | ----------------------------------- |
| `zoneName`  | `string` | Yes      | Name of the DNS zone                |
| `subDomain` | `string` | No       | Filter records by subdomain (ilike) |

**Response Type**: `long[]`

**IAM Actions**:

- `dnsZone:apiovh:dynHost/record/get` (Required)

---

#### **POST** - Create a new DynHost record

```
POST /domain/zone/{zoneName}/dynHost/record
```

**Description**: Create a new DynHost record for a specific DNS zone.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type                         | Required | Description                                     |
| ---------- | ---------------------------- | -------- | ----------------------------------------------- |
| `zoneName` | `string`                     | Yes      | Name of the DNS zone                            |
| `Record`   | `domain.zone.dynHost.Record` | Yes      | Request body containing record creation details |

**Response Type**: `domain.zone.dynHost.Record`

**IAM Actions**:

- `dnsZone:apiovh:dynHost/record/create` (Required)

---

### 29. `/domain/zone/{zoneName}/dynHost/record/{id}`

#### **GET** - Get DynHost record properties

```
GET /domain/zone/{zoneName}/dynHost/record/{id}
```

**Description**: Retrieve properties of a specific DynHost record by its ID.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type     | Required | Description              |
| ---------- | -------- | -------- | ------------------------ |
| `zoneName` | `string` | Yes      | Name of the DNS zone     |
| `id`       | `long`   | Yes      | ID of the DynHost record |

**Response Type**: `domain.zone.dynHost.Record`

**IAM Actions**:

- `dnsZone:apiovh:dynHost/record/get` (Required)

---

#### **PUT** - Alter DynHost record properties

```
PUT /domain/zone/{zoneName}/dynHost/record/{id}
```

**Description**: Modify properties of an existing DynHost record.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type                         | Required | Description              |
| ---------- | ---------------------------- | -------- | ------------------------ |
| `zoneName` | `string`                     | Yes      | Name of the DNS zone     |
| `id`       | `long`                       | Yes      | ID of the DynHost record |
| `Record`   | `domain.zone.dynHost.Record` | Yes      | Updated request body     |

**Response Type**: `void`

**IAM Actions**:

- `dnsZone:apiovh:dynHost/record/edit` (Required)

---

#### **DELETE** - Delete a DynHost record

```
DELETE /domain/zone/{zoneName}/dynHost/record/{id}
```

**Description**: Remove a DynHost record from the system.

**Authentication**: Not required

**Parameters**:

| Parameter  | Type     | Required | Description              |
| ---------- | -------- | -------- | ------------------------ |
| `zoneName` | `string` | Yes      | Name of the DNS zone     |
| `id`       | `long`   | Yes      | ID of the DynHost record |

**Response Type**: `void`

**IAM Actions**:

- `dnsZone:apiovh:dynHost/record/delete` (Required)

---

### 30. `/domain/zone/{zoneName}/dynHost/record/{id}/changePassword`

#### **POST** - Change password of a DynHost record

```
POST /domain/zone/{zoneName}/dynHost/record/{id}/changePassword
```

**Description**: Change the password of an existing DynHost record.

**Authentication**: Not required

**Parameters**:

| Parameter              | Type                                       | Required | Description                                  |
| ---------------------- | ------------------------------------------ | -------- | -------------------------------------------- |
| `zoneName`             | `string`                                   | Yes      | Name of the DNS zone                         |
| `id`                   | `long`                                     | Yes      | ID of the DynHost record                     |
| `RecordChangePassword` | `domain.zone.dynHost.RecordChangePassword` | Yes      | Request body containing new password details |

**Response Type**: `void`

**IAM Actions**:

- `dnsZone:apiovh:dynHost/record/changePassword` (Required)

---

## Security Considerations

- **Authentication**: Most endpoints require authentication via `OVH API` credentials.
- **IAM Actions**: Ensure the correct IAM actions are enabled for the operations you intend to perform.
- **Data Sensitivity**: Some operations (e.g., contact changes, password alterations) involve sensitive data. Use appropriate security measures when handling this data.
- **Deprecated Endpoints**: Avoid using deprecated endpoints as they may pose security risks or be removed in future updates.

---

## Error Handling

- **NodeApiError**: Use this for n8n-specific errors.
- **API Errors**: Handle OVHcloud API errors gracefully and provide meaningful error messages to users.
- **Validation**: Validate inputs before making API calls to avoid unnecessary errors.

---

## Type Safety

- **Interfaces**: Define explicit interfaces for request and response bodies (e.g., `domain.Contact`, `domain.ZoneWithIAM`).
- **Type Guards**: Use TypeScript type guards to validate data types before processing.
- **Strict Null Checks**: Leverage strict null checks to avoid runtime errors.

---

## Testing

- **Manual Testing**: Use `npm run dev` to test endpoints in the n8n UI.
- **Endpoint Testing**: Test each endpoint with valid and invalid parameters to ensure proper error handling.
- **Authentication Testing**: Verify that authentication is correctly handled for endpoints requiring it.

---

## References

- [OVHcloud API Documentation](https://api.ovh.com/)
- [n8n Workflow Documentation](https://docs.n8n.io/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

**Documentation Version**: 1.0

**Last Updated**: 2026-03-31

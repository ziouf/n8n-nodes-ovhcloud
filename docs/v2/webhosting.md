# OVHcloud Web Hosting Node Documentation

## Overview

The **OVHcloud Web Hosting** node provides a set of operations to manage OVHcloud Web Hosting resources via the n8n workflow automation platform. It leverages the OVHcloud API v2 to interact with Web Hosting services, including attached domains, certificates, websites, and user accounts.

This documentation covers the available operations, parameters, and response types for the Web Hosting API as of April 2026.

---

## Authentication

All operations require authentication via the `OVH API` credential type. The credentials must provide the following parameters:

- **Host**: The OVHcloud API host (e.g., `https://eu.api.ovh.com/`)
- **Application Key**: Your OVHcloud application key
- **Application Secret**: Your OVHcloud application secret
- **Consumer Key**: Your OVHcloud consumer key

### Required IAM Actions

The following IAM actions are required for all operations:

- `iam:account:apiovh:webHosting/attachedDomain/get`
- `iam:webHosting:apiovh:get`
- `iam:webHosting:apiovh:attachedDomain/get`
- `iam:webHosting:apiovh:website/get`
- `iam:webHosting:apiovh:website/create`
- `iam:webHosting:apiovh:website/edit`
- `iam:webHosting:apiovh:website/domain/get`
- `iam:webHosting:apiovh:website/get`
- `iam:webHosting:apiovh:ssl/get`

---

## API Operations

### 1. List Attached Domains

**Path**: `/webhosting/attachedDomain`

**HTTP Method**: `GET`

**Description**: Retrieve a list of attached domains for a Web Hosting service.

**Parameters**:

| Parameter Name        | Data Type | Param Type | Required | Description                                       |
| --------------------- | --------- | ---------- | -------- | ------------------------------------------------- |
| `X-Pagination-Cursor` | string    | header     | No       | Pagination cursor                                 |
| `X-Pagination-Size`   | long      | header     | No       | Pagination size                                   |
| `domain`              | string    | query      | No       | Optional query parameter to filter by domain name |

**Response Type**: `webhosting.AttachedDomain[]`

**IAM Actions**:

- `account:apiovh:webHosting/attachedDomain/get`

**Example**:

```json
{
    "parameters": {
        "X-Pagination-Size": 50,
        "domain": "example.com"
    }
}
```

---

### 2. List Resources

**Path**: `/webhosting/resource`

**HTTP Method**: `GET`

**Description**: Retrieve a list of resources associated with a Web Hosting service.

**Parameters**:

| Parameter Name        | Data Type                           | Param Type | Required | Description                  |
| --------------------- | ----------------------------------- | ---------- | -------- | ---------------------------- |
| `X-Pagination-Cursor` | string                              | header     | No       | Pagination cursor            |
| `X-Pagination-Size`   | long                                | header     | No       | Pagination size              |
| `iamTags`             | map[string][]iam.resource.TagFilter | query      | No       | Filter resources on IAM tags |

**Response Type**: `webhosting.WebWithIAM[]`

**IAM Actions**:

- `webHosting:apiovh:get`

**Example**:

```json
{
    "parameters": {
        "X-Pagination-Size": 50,
        "iamTags": {
            "ovh:country": [
                {
                    "operator": "EQ",
                    "value": "FR"
                }
            ]
        }
    }
}
```

---

### 3. Get Resource by Name

**Path**: `/webhosting/resource/{name}`

**HTTP Method**: `GET`

**Description**: Retrieve a specific resource by its name.

**Parameters**:

| Parameter Name        | Data Type | Param Type | Required | Description          |
| --------------------- | --------- | ---------- | -------- | -------------------- |
| `X-Pagination-Cursor` | string    | header     | No       | Pagination cursor    |
| `X-Pagination-Size`   | long      | header     | No       | Pagination size      |
| `name`                | string    | path       | Yes      | Name of the resource |

**Response Type**: `webhosting.WebWithIAM`

**IAM Actions**:

- `webHosting:apiovh:get`

**Example**:

```json
{
    "parameters": {
        "name": "myResourceName"
    }
}
```

---

### 4. List Attached Domains for a Resource

**Path**: `/webhosting/resource/{name}/attachedDomain`

**HTTP Method**: `GET`

**Description**: Retrieve a list of attached domains for a specific resource.

**Parameters**:

| Parameter Name        | Data Type | Param Type | Required | Description          |
| --------------------- | --------- | ---------- | -------- | -------------------- |
| `X-Pagination-Cursor` | string    | header     | No       | Pagination cursor    |
| `X-Pagination-Size`   | long      | header     | No       | Pagination size      |
| `name`                | string    | path       | Yes      | Name of the resource |

**Response Type**: `webhosting.AttachedDomain[]`

**IAM Actions**:

- `webHosting:apiovh:attachedDomain/get`

**Example**:

```json
{
    "parameters": {
        "name": "myResourceName"
    }
}
```

---

### 5. Get Certificates for a Resource

**Path**: `/webhosting/resource/{name}/certificate`

**HTTP Method**: `GET`

**Description**: Retrieve SSL certificates associated with a specific resource.

**Parameters**:

| Parameter Name        | Data Type | Param Type | Required | Description          |
| --------------------- | --------- | ---------- | -------- | -------------------- |
| `X-Pagination-Cursor` | string    | header     | No       | Pagination cursor    |
| `X-Pagination-Size`   | long      | header     | No       | Pagination size      |
| `name`                | string    | path       | Yes      | Name of the resource |

**Response Type**: `webhosting.SSL[]`

**IAM Actions**:

- `webHosting:apiovh:ssl/get`

**Example**:

```json
{
    "parameters": {
        "name": "myResourceName"
    }
}
```

---

### 6. List Websites for a Resource

**Path**: `/webhosting/resource/{name}/website`

**HTTP Method**: `GET`

**Description**: Retrieve a list of websites associated with a specific resource.

**Parameters**:

| Parameter Name        | Data Type | Param Type | Required | Description          |
| --------------------- | --------- | ---------- | -------- | -------------------- |
| `X-Pagination-Cursor` | string    | header     | No       | Pagination cursor    |
| `X-Pagination-Size`   | long      | header     | No       | Pagination size      |
| `name`                | string    | path       | Yes      | Name of the resource |

**Response Type**: `webhosting.Website[]`

**IAM Actions**:

- `webHosting:apiovh:website/get`

**Example**:

```json
{
    "parameters": {
        "name": "myResourceName"
    }
}
```

---

### 7. Get Website by ID

**Path**: `/webhosting/resource/{name}/website/{websiteId}`

**HTTP Method**: `GET`

**Description**: Retrieve a specific website by its ID.

**Parameters**:

| Parameter Name        | Data Type | Param Type | Required | Description                      |
| --------------------- | --------- | ---------- | -------- | -------------------------------- |
| `X-Pagination-Cursor` | string    | header     | No       | Pagination cursor                |
| `X-Pagination-Size`   | long      | header     | No       | Pagination size                  |
| `name`                | string    | path       | Yes      | Name of the resource             |
| `websiteId`           | uuid      | path       | Yes      | Unique identifier of the website |

**Response Type**: `webhosting.Website`

**IAM Actions**:

- `webHosting:apiovh:website/get`

**Example**:

```json
{
    "parameters": {
        "name": "myResourceName",
        "websiteId": "a1b2c3d4-5678-90ab-cdef-1234567890ab"
    }
}
```

---

### 8. Update Website by ID

**Path**: `/webhosting/resource/{name}/website/{websiteId}`

**HTTP Method**: `PUT`

**Description**: Update an existing website.

**Parameters**:

| Parameter Name | Data Type                    | Param Type | Required | Description                                      |
| -------------- | ---------------------------- | ---------- | -------- | ------------------------------------------------ |
| `name`         | string                       | path       | Yes      | Name of the resource                             |
| `websiteId`    | uuid                         | path       | Yes      | Unique identifier of the website                 |
| `targetSpec`   | webhosting.WebsitePutPayload | body       | Yes      | Request body containing the update specification |

**Response Type**: `webhosting.Website`

**IAM Actions**:

- `webHosting:apiovh:website/edit`

**Example**:

```json
{
    "parameters": {
        "name": "myResourceName",
        "websiteId": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
        "targetSpec": {
            "language": "fr",
            "installPath": "/my/path",
            "adminLogin": "admin",
            "adminPassword": "password"
        }
    }
}
```

---

### 9. Get Domains for a Website

**Path**: `/webhosting/resource/{name}/website/{websiteId}/domain`

**HTTP Method**: `GET`

**Description**: Retrieve domains associated with a specific website.

**Parameters**:

| Parameter Name        | Data Type | Param Type | Required | Description                      |
| --------------------- | --------- | ---------- | -------- | -------------------------------- |
| `X-Pagination-Cursor` | string    | header     | No       | Pagination cursor                |
| `X-Pagination-Size`   | long      | header     | No       | Pagination size                  |
| `name`                | string    | path       | Yes      | Name of the resource             |
| `websiteId`           | uuid      | path       | Yes      | Unique identifier of the website |

**Response Type**: `webhosting.Domain[]`

**IAM Actions**:

- `webHosting:apiovh:website/domain/get`

**Example**:

```json
{
    "parameters": {
        "name": "myResourceName",
        "websiteId": "a1b2c3d4-5678-90ab-cdef-1234567890ab"
    }
}
```

---

### 10. Create a Website

**Path**: `/webhosting/resource/{name}/website/{websiteId}`

**HTTP Method**: `POST`

**Description**: Create a new website.

**Parameters**:

| Parameter Name | Data Type                     | Param Type | Required | Description                                        |
| -------------- | ----------------------------- | ---------- | -------- | -------------------------------------------------- |
| `name`         | string                        | path       | Yes      | Name of the resource                               |
| `websiteId`    | uuid                          | path       | Yes      | Unique identifier of the website                   |
| `targetSpec`   | webhosting.WebsitePostPayload | body       | Yes      | Request body containing the creation specification |

**Response Type**: `webhosting.Website`

**IAM Actions**:

- `webHosting:apiovh:website/create`

**Example**:

```json
{
    "parameters": {
        "name": "myResourceName",
        "websiteId": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
        "targetSpec": {
            "language": "fr",
            "installPath": "/my/path",
            "adminLogin": "admin",
            "adminPassword": "password"
        }
    }
}
```

---

## Models

### `webhosting.AttachedDomain`

Web Hosting attached domain details.

**Properties**:

- `checksum` (string): Computed hash used to control concurrent modification requests. Represents the current target specification value.
- `currentState` (webhosting.AttachedDomainCurrentState): Current state of the attached domain.
- `currentTasks` (common.CurrentTask[]): Ongoing asynchronous tasks related to the attached domain.
- `id` (uuid): Unique identifier of the attached domain.
- `resourceStatus` (common.ResourceStatusEnum): Web Hosting attached domain readiness in the system.

---

### `webhosting.AttachedDomainCurrentState`

Current state of the hosting plan.

**Properties**:

- `cdn` (webhosting.CdnStatus): CDN related to the attached domain.
- `firewall` (webhosting.FirewallStatus): Firewall of the attached domain.
- `fqdn` (string): FQDN of the attached domain.
- `git` (webhosting.Git): Git details of the attached domain.
- `hosting` (webhosting.AttachedDomainHosting): Hosting details of the attached domain.
- `isDefault` (boolean): Default attached domain can't be updated and can't support SSL.
- `ownLog` (string): Domain to separate the logs from the others attached domains.
- `path` (string): Path of the attached domain.
- `ssl` (webhosting.AttachedDomainSsl): SSL details.

---

### `webhosting.AttachedDomainHosting`

Hosting details of the attached domain.

**Properties**:

- `boostOffer` (string): Boost offer of the hosting related to the attached domain.
- `displayName` (string): Display name of the hosting related to the attached domain.
- `offer` (string): Offer of the hosting related to the attached domain.
- `serviceName` (string): Service name of the hosting related to the attached domain.

---

### `webhosting.AttachedDomainSsl`

SSL details of the attached domain.

**Properties**:

- `status` (webhosting.SslStatusEnum): SSL status.

---

### `webhosting.CdnStatus`

CDN details.

**Properties**:

- `status` (webhosting.CdnStatusEnum): CDN status.

---

### `webhosting.CdnStatusEnum`

CDN status enum.

**Enum**:

- `ACTIVE`
- `NONE`

---

### `webhosting.DatabaseConfiguration`

Database configuration details.

**Properties**:

- `databaseName` (string): Name of the database to use during the module installation.
- `password` (string): Database password used for authentication.
- `port` (long): Port used to connect to the database server.
- `server` (string): Hostname or address of the database server (e.g., `mydb.mysql.db`).
- `user` (string): Database username used for authentication.

---

### `webhosting.Domain`

Web Hosting domain details.

**Properties**:

- `checksum` (string): Computed hash used to control concurrent modification requests. Represents the current target specification value.
- `currentState` (webhosting.DomainCurrentState): Current state of the domain.
- `currentTasks` (common.CurrentTask[]): Ongoing asynchronous tasks related to the domain.
- `id` (string): Unique identifier of the domain.
- `resourceStatus` (common.ResourceStatusEnum): Web Hosting domain readiness in the system.

---

### `webhosting.DomainCurrentState`

Current state of the website's domain.

**Properties**:

- `cdn` (webhosting.CdnStatus): CDN status for domain.
- `firewall` (webhosting.FirewallStatus): Firewall status for domain.
- `fqdn` (string): FQDN of the domain.
- `path` (string): Target specification of the domain path.
- `websiteId` (string): Unique identifier of the website the domain belongs to.

---

### `webhosting.FirewallStatus`

Firewall details.

**Properties**:

- `status` (webhosting.FirewallStatusEnum): Firewall status.

---

### `webhosting.FirewallStatusEnum`

Firewall status enum.

**Enum**:

- `ACTIVE`
- `NONE`

---

### `webhosting.Git`

Git details.

**Properties**:

- `status` (webhosting.GitStatusEnum): Git status.
- `vcsBranch` (string): Branch of the repository containing the website source code to deploy.
- `vcsUrl` (string): URL of the repository containing the website source code to deploy.

---

### `webhosting.GitStatusEnum`

Git status enum.

**Enum**:

- `CREATED`
- `CREATING`
- `DELETING`
- `DEPLOYING`
- `DISABLED`
- `ERROR`
- `INITIAL_ERROR`

---

### `webhosting.Module`

Module details.

**Properties**:

- `name` (webhosting.ModuleNameEnum): Module name.

---

### `webhosting.ModuleAdminConfiguration`

Administrator credentials and settings for module deployment.

**Properties**:

- `adminLogin` (string): Administrator username for accessing the module backend.
- `adminPassword` (string): Password for the module administrator account.
- `domain` (string): Domain name on which the module will be installed.
- `installPath` (string): Directory path where the module will be installed inside the hosting.
- `language` (webhosting.ModuleLanguageEnum): Language selected for module installation.

---

### `webhosting.ModuleLanguageEnum`

Available languages enum.

**Enum**:

- `cz`
- `de`
- `en`
- `es`
- `fi`
- `fr`
- `it`
- `lt`
- `nl`
- `pl`
- `pt`

---

### `webhosting.ModuleNameEnum`

Module name enum.

**Enum**:

- `DRUPAL`
- `JOOMLA`
- `PRESTASHOP`
- `WORDPRESS`

---

### `webhosting.ModuleStatus`

Module enabled status.

**Properties**:

- `enabled` (boolean): Module enabled status.

---

### `webhosting.SSL`

Web Hosting SSL details.

**Properties**:

- `checksum` (string): Computed hash used to control concurrent modification requests. Represents the current target specification value.
- `currentState` (webhosting.SSLCurrentState): Current state of the SSL.
- `currentTasks` (common.CurrentTask[]): Ongoing asynchronous tasks related to the SSL.
- `id` (uuid): Unique identifier of the SSL.
- `resourceStatus` (common.ResourceStatusEnum): Web Hosting SSL readiness in the system.

---

### `webhosting.SSLCertificateTypeEnum`

SSL certificate type enum.

**Enum**:

- `COMODO`
- `CUSTOM`
- `LETSENCRYPT`
- `SECTIGO`

---

### `webhosting.SSLCurrentState`

Current state of the web hosting SSL certificate.

**Properties**:

- `additionalDomains` (string[]): Additional domains of the SSL.
- `certificateType` (webhosting.SSLCertificateTypeEnum): Certificate type of the SSL.
- `createdAt` (datetime): Date of creation of the SSL.
- `expiredAt` (datetime): Date of expiration of the SSL.
- `mainDomain` (string): Main domain of the SSL.
- `state` (webhosting.SSLStateEnum): State of the SSL.

---

### `webhosting.SSLStateEnum`

SSL state enum.

**Enum**:

- `ACTIVE`
- `CREATING`
- `DELETING`
- `EXPIRED`
- `IMPORTING`
- `REGENERATING`

---

### `webhosting.SslStatusEnum`

SSL status enum.

**Enum**:

- `ACTIVE`
- `NONE`

---

### `webhosting.User`

Web Hosting user details.

**Properties**:

- `checksum` (string): Computed hash used to control concurrent modification requests. Represents the current target specification value.
- `currentState` (webhosting.UserCurrentState): Current state of the user.
- `currentTasks` (common.CurrentTask[]): Ongoing asynchronous tasks related to the user.
- `id` (uuid): Unique identifier of the user.
- `resourceStatus` (common.ResourceStatusEnum): Web Hosting user readiness in the system.
- `targetSpec` (webhosting.UserTargetSpec): Latest target specification of the user.

---

### `webhosting.UserCurrentState`

Current state of the web hosting user.

**Properties**:

- `home` (string): Home of the user.
- `login` (string): Login of the user.
- `sshState` (webhosting.UserSSHStateEnum): SSH state of the user.
- `state` (webhosting.UserStateEnum): State of the user.

---

### `webhosting.UserPatchPayload`

User patch payload details.

**Properties**:

- `targetSpec` (webhosting.UserPatchTargetSpec): Patch target specification of the user.

---

### `webhosting.UserPatchTargetSpec`

User patch payload target specification.

**Properties**:

- `home` (string): User home.
- `password` (string): User password.
- `sshState` (webhosting.UserSSHStateEnum): SSH state of the user.
- `state` (webhosting.UserStateEnum): State of the user.

---

### `webhosting.UserPostPayload`

User post payload details.

**Properties**:

- `targetSpec` (webhosting.UserPostTargetSpec): Post target specification of the user.

---

### `webhosting.UserPostTargetSpec`

User post payload target specification.

**Properties**:

- `home` (string): User home.
- `login` (string): User login.
- `password` (string): User password.
- `sshState` (webhosting.UserSSHStateEnum): SSH state of the user.

---

### `webhosting.UserPutPayload`

User put payload details.

**Properties**:

- `targetSpec` (webhosting.UserPutTargetSpec): Put target specification of the user.

---

### `webhosting.UserPutTargetSpec`

User put payload target specification.

**Properties**:

- `home` (string): User home.
- `password` (string): User password.
- `sshState` (webhosting.UserSSHStateEnum): SSH state of the user.
- `state` (webhosting.UserStateEnum): State of the user.

---

### `webhosting.UserSSHStateEnum`

User SSH state enum.

**Enum**:

- `ACTIVE`
- `NONE`
- `SFTP_ONLY`

---

### `webhosting.UserStateEnum`

User state enum.

**Enum**:

- `OFF`
- `RW`

---

### `webhosting.UserTargetSpec`

Target specification of the user.

**Properties**:

- `home` (string): User home.
- `sshState` (webhosting.UserSSHStateEnum): SSH state of the user.
- `state` (webhosting.UserStateEnum): State of the user.

---

### `webhosting.Web`

Web Hosting web details.

**Properties**:

- `checksum` (string): Computed hash used to control concurrent modification requests. Represents the current target specification value.
- `currentState` (webhosting.WebCurrentState): Current state of the hosting plan.
- `currentTasks` (common.CurrentTask[]): Ongoing asynchronous tasks related to the hosting plan.
- `id` (string): Unique identifier for the resource. Here, the service name is used as an identifier.
- `resourceStatus` (common.ResourceStatusEnum): Web Hosting resource readiness in the system.

---

### `webhosting.WebCurrentState`

Current state of the web hosting plan.

**Properties**:

- `name` (string): Name of the hosting.

---

### `webhosting.WebWithIAM`

Web Hosting web with IAM metadata.

**Properties**:

- `checksum` (string): Computed hash used to control concurrent modification requests. Represents the current target specification value.
- `currentState` (webhosting.WebCurrentState): Current state of the hosting plan.
- `currentTasks` (common.CurrentTask[]): Ongoing asynchronous tasks related to the hosting plan.
- `iam` (iam.ResourceMetadata): IAM resource metadata embedded in the service.
- `id` (string): Unique identifier for the resource. Here, the service name is used as an identifier.
- `resourceStatus` (common.ResourceStatusEnum): Web Hosting resource readiness in the system.

---

## Common Models

### `common.CurrentTask`

Asynchronous operation currently running.

**Properties**:

- `errors` (common.TaskError[]): Errors that occurred on the task.
- `id` (uuid): Identifier of the current task.
- `link` (string): Link to the task details.
- `status` (common.CurrentTaskStatusEnum): Current global status of the current task.
- `type` (string): Type of the current task.

---

### `common.CurrentTaskStatusEnum`

Current status of a task.

**Enum**:

- `ERROR`
- `PENDING`
- `RUNNING`
- `SCHEDULED`
- `WAITING_USER_INPUT`

---

### `common.ResourceStatusEnum`

Resource status enum.

**Enum**:

- `CREATING`
- `DELETING`
- `ERROR`
- `OUT_OF_SYNC`
- `READY`
- `SUSPENDED`
- `UPDATING`

---

### `common.TaskError`

Errors that occurred on the task.

**Properties**:

- `message` (string): Error description.

---

### `iam.ResourceMetadata`

IAM resource metadata embedded in services models.

**Properties**:

- `displayName` (string): Resource display name.
- `id` (uuid): Unique identifier of the resource.
- `state` (iam.ResourceMetadata.StateEnum): Resource state.
- `tags` (map[string]string): Resource tags. Tags that were internally computed are prefixed with `ovh:`.
- `urn` (string): Unique resource name used in policies.

---

### `iam.ResourceMetadata.StateEnum`

Resource state enum.

**Enum**:

- `EXPIRED`
- `IN_CREATION`
- `OK`
- `SUSPENDED`

---

### `iam.resource.TagFilter`

Resource tag filter.

**Properties**:

- `operator` (iam.resource.TagFilter.OperatorEnum): Operator to use in order to filter on the value (defaults to `EQ`).
- `value` (string): Value to use in order to filter tags.

---

### `iam.resource.TagFilter.OperatorEnum`

Operator that can be used in order to filter resources tags.

**Enum**:

- `EQ`
- `EXISTS`
- `ILIKE`
- `LIKE`
- `NEQ`
- `NEXISTS`

---

## Available Countries for IP Location

The `webhosting.IpLocationCountryEnum` model defines the available countries for IP location.

**Enum**:

- `BE` (Belgium)
- `CA` (Canada)
- `CZ` (Czech Republic)
- `DE` (Germany)
- `ES` (Spain)
- `FI` (Finland)
- `FR` (France)
- `IE` (Ireland)
- `IT` (Italy)
- `LT` (Lithuania)
- `NL` (Netherlands)
- `PL` (Poland)
- `PT` (Portugal)
- `UK` (United Kingdom)

---

## Versioning & Change History

- **API Version**: `1.0` (as of April 2026)
- **Base Path**: `https://eu.api.ovh.com/v2`
- **Resource Path**: `/webhosting`

### Beta Operations

All operations are currently in **Beta** version, as indicated by the `X-Pagination-Cursor` and `X-Pagination-Size` parameters.

---

## Troubleshooting

### Common Errors

- **Concurrent Modification**: Use the `checksum` parameter to control concurrent modification requests. If the checksum does not match the current target specification value, the operation may fail.
- **Resource Not Found**: Ensure the `name` parameter is correct and the resource exists.
- **Invalid Parameters**: Validate all parameters before making API calls. Invalid parameters may cause the operation to fail.
- **IAM Permission Denied**: Ensure the provided IAM actions are correctly configured and the consumer key has the necessary permissions.

### Error Handling

- Use `NodeApiError` for n8n-specific errors.
- Throw descriptive error messages with context.
- Validate inputs before API calls.
- Handle API errors gracefully with meaningful messages.

---

## References

- [OVHcloud API v2 Documentation](https://eu.api.ovh.com/)
- [n8n Workflow Documentation](https://docs.n8n.io/)
- [IAM Documentation](https://docs.ovh.com/fr/public-cloud/iam/)

---

## Notes

- Follow the existing code patterns in resource files.
- Use the `OvhCloudApiClient` for all API calls.
- Credential authentication via the `OVH API` credential type.
- All examples provided assume a valid OVHcloud API credential is configured in n8n.
- Manual testing in n8n instance is required for all operations.

---

> **⚠️ Important**: This documentation is based on the provided JSON file and may not reflect the latest changes in the OVHcloud API. Always refer to the official OVHcloud API documentation for the most up-to-date information.

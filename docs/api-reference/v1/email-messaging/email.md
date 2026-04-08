# OVHcloud Email Pro Node Documentation

This document describes the technical details of the OVHcloud Email Pro node for n8n, including available operations, parameters, and authentication requirements based on the OVHcloud API documentation.

---

## Overview

The **OVHcloud Email Pro** node provides access to the OVHcloud Email Professional (PROEMAIL) service API endpoints. It supports operations related to email services, accounts, aliases, domain management, and billing transitions.

The node is designed to work with the n8n platform and follows the established conventions for node implementation, including:

- **API Client Pattern**: Uses `OvhCloudApiClient` for HTTP requests
- **Authentication**: Handled via the `OVH API` credential type
- **Error Handling**: Uses `NodeApiError` for n8n-specific errors
- **Type Safety**: Defines explicit types for all parameters and responses

---

## Authentication

The OVHcloud Email Pro node requires authentication using the OVHcloud API credentials. These credentials must be configured in n8n before using the node.

### Required IAM Actions

The following IAM actions are required for authentication:

| IAM Action Name                              | Description                          |
| -------------------------------------------- | ------------------------------------ |
| `emailPro:apiovh:get`                        | List available services              |
| `emailPro:apiovh:account/get`                | Get account properties               |
| `emailPro:apiovh:account/edit`               | Edit account properties              |
| `emailPro:apiovh:account/alias/get`          | Get account alias properties         |
| `emailPro:apiovh:account/alias/edit`         | Edit account alias properties        |
| `emailPro:apiovh:account/diagnostics/get`    | Get diagnostics for an account       |
| `emailPro:apiovh:account/diagnostics/create` | Create diagnostics request           |
| `emailPro:apiovh:account/fullAccess/get`     | Get full access users for an account |
| `emailPro:apiovh:account/fullAccess/grant`   | Grant full access to a user          |
| `emailPro:apiovh:account/sendAs/get`         | Get send-as users for an account     |
| `emailPro:apiovh:account/sendAs/grant`       | Grant send-as permission             |
| `emailPro:apiovh:account/sendOnBehalfTo/get` | Get send-on-behalf users             |
| `emailPro:apiovh:account/tasks/get`          | Get pending tasks for an account     |
| `emailPro:apiovh:domain/get`                 | Get domain properties                |
| `emailPro:apiovh:domain/create`              | Create domain                        |
| `emailPro:apiovh:domain/edit`                | Edit domain properties               |
| `emailPro:apiovh:domain/delete`              | Delete domain                        |
| `emailPro:apiovh:domain/disclaimer/get`      | Get disclaimer properties            |
| `emailPro:apiovh:domain/disclaimer/delete`   | Delete disclaimer                    |
| `emailPro:apiovh:account/terminate`          | Terminate account                    |
| `emailPro:apiovh:billingMigrated/get`        | Get billing transition status        |
| `emailPro:apiovh:billingPlan/get`            | Get billing plan                     |
| `emailPro:apiovh:changeContact`              | Change service contacts              |

---

## Available Operations

The OVHcloud Email Pro node supports the following operations:

### 1. List Available Services (`GET /email/pro`)

**Description**: List available OVHcloud Email Pro services.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:get` (Alpha version)

**Parameters**:

| Parameter Name | Type                                  | Required | Description                  |
| -------------- | ------------------------------------- | -------- | ---------------------------- |
| `iamTags`      | `map[string][]iam.resource.TagFilter` | No       | Filter resources on IAM tags |

**Response Type**: `string[]`

**Example Response**:

```json
["service1", "service2"]
```

---

### 2. Get Service Properties (`GET /email/pro/{service}`)

**Description**: Get properties of a specific Email Pro service.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:get` (Alpha version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |

**Response Type**: `email.pro.ServiceNativeWithIAM`

---

### 3. Get Account Properties (`GET /email/pro/{service}/account`)

**Description**: List accounts associated with a specific Email Pro service.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/get` (Alpha version)

**Parameters**:

| Parameter Name        | Type   | Required | Description                      |
| --------------------- | ------ | -------- | -------------------------------- |
| `service`             | string | Yes      | The internal name of the service |
| `id`                  | long   | No       | Filter accounts by ID            |
| `primaryEmailAddress` | string | No       | Filter accounts by email address |

**Response Type**: `string[]`

**Example Response**:

```json
[123456, 789012]
```

---

### 4. Get Account Properties (`GET /email/pro/{service}/account/{email}`)

**Description**: Get properties of a specific email account within a service.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/get` (Alpha version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `email`        | string | Yes      | The email address                |

**Response Type**: `email.pro.AccountNative`

---

### 5. Edit Account Properties (`PUT /email/pro/{service}/account/{email}`)

**Description**: Alter properties of a specific email account within a service.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/edit` (Production version)

**Parameters**:

| Parameter Name | Type                | Required | Description                      |
| -------------- | ------------------- | -------- | -------------------------------- |
| `service`      | string              | Yes      | The internal name of the service |
| `email`        | string              | Yes      | The email address                |
| `account`      | `email.pro.Account` | Yes      | New object properties            |

**Response Type**: `void`

---

### 6. Delete Account (`DELETE /email/pro/{service}/account/{email}`)

**Description**: Delete an existing mailbox in a service.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/delete` (Production version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `email`        | string | Yes      | The email address to delete      |

**Response Type**: `email.pro.Task`

---

### 7. List Account Aliases (`GET /email/pro/{service}/account/{email}/alias`)

**Description**: List aliases associated with a specific email account.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/alias/get` (Alpha version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `email`        | string | Yes      | The email address                |

**Response Type**: `string[]`

**Example Response**:

```json
["alias1@example.com", "alias2@example.com"]
```

---

### 8. Create Account Alias (`POST /email/pro/{service}/account/{email}/alias`)

**Description**: Create a new alias for a specific email account.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/alias/create` (Production version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `email`        | string | Yes      | The email address                |
| `alias`        | string | Yes      | The alias to create              |

**Response Type**: `email.pro.Task`

---

### 9. Get Account Alias Properties (`GET /email/pro/{service}/account/{email}/alias/{alias}`)

**Description**: Get properties of a specific alias.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/alias/get` (Alpha version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `email`        | string | Yes      | The email address                |
| `alias`        | string | Yes      | The alias to get                 |

**Response Type**: `email.pro.AccountAlias`

---

### 10. Delete Account Alias (`DELETE /email/pro/{service}/account/{email}/alias/{alias}`)

**Description**: Delete an existing alias.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/alias/delete` (Production version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `email`        | string | Yes      | The email address                |
| `alias`        | string | Yes      | The alias to delete              |

**Response Type**: `email.pro.Task`

---

### 11. Change Account Password (`POST /email/pro/{service}/account/{email}/changePassword`)

**Description**: Change the password of a specific email account.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/changePassword` (Production version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `email`        | string | Yes      | The email address                |
| `password`     | string | Yes      | The new password                 |

**Response Type**: `email.pro.Task`

---

### 12. Get Account Diagnostics (`GET /email/pro/{service}/account/{email}/diagnostics`)

**Description**: Get diagnostics for a specific email account.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/diagnostics/get` (Alpha version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `email`        | string | Yes      | The email address                |

**Response Type**: `email.pro.AccountDiagnosis`

---

### 13. Create Diagnostics Request (`POST /email/pro/{service}/account/{email}/diagnostics`)

**Description**: Create a new diagnostics request for an email account.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/diagnostics/create` (Production version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `email`        | string | Yes      | The email address                |
| `password`     | string | Yes      | The account password             |

**Response Type**: `email.pro.Task`

---

### 14. Get Full Access Users (`GET /email/pro/{service}/account/{email}/fullAccess`)

**Description**: List users who have full access to a specific email account.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/fullAccess/get` (Alpha version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `email`        | string | Yes      | The email address                |

**Response Type**: `long[]`

**Example Response**:

```json
[123456, 789012]
```

---

### 15. Grant Full Access (`POST /email/pro/{service}/account/{email}/fullAccess`)

**Description**: Grant full access to a user for a specific email account.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/fullAccess/grant` (Production version)

**Parameters**:

| Parameter Name     | Type   | Required | Description                         |
| ------------------ | ------ | -------- | ----------------------------------- |
| `service`          | string | Yes      | The internal name of the service    |
| `email`            | string | Yes      | The email address                   |
| `allowedAccountId` | long   | Yes      | The account ID to grant full access |

**Response Type**: `email.pro.Task`

---

### 16. Get Send-As Users (`GET /email/pro/{service}/account/{email}/sendAs`)

**Description**: List users who can send emails as a specific email account.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/sendAs/get` (Alpha version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `email`        | string | Yes      | The email address                |

**Response Type**: `long[]`

**Example Response**:

```json
[123456, 789012]
```

---

### 17. Grant Send-As Permission (`POST /email/pro/{service}/account/{email}/sendAs`)

**Description**: Grant send-as permission to a user for a specific email account.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/sendAs/grant` (Production version)

**Parameters**:

| Parameter Name   | Type   | Required | Description                      |
| ---------------- | ------ | -------- | -------------------------------- |
| `service`        | string | Yes      | The internal name of the service |
| `email`          | string | Yes      | The email address                |
| `allowAccountId` | long   | Yes      | The account ID to allow          |

**Response Type**: `email.pro.Task`

---

### 18. Get Send-On-Behalf Users (`GET /email/pro/{service}/account/{email}/sendOnBehalfTo`)

**Description**: List users who can send emails on behalf of a specific email account.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/sendOnBehalfTo/get` (Alpha version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `email`        | string | Yes      | The email address                |

**Response Type**: `long[]`

**Example Response**:

```json
[123456, 789012]
```

---

### 19. Grant Send-On-Behalf Permission (`POST /email/pro/{service}/account/{email}/sendOnBehalfTo`)

**Description**: Grant send-on-behalf permission to a user for a specific email account.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/sendOnBehalfTo/grant` (Production version)

**Parameters**:

| Parameter Name   | Type   | Required | Description                      |
| ---------------- | ------ | -------- | -------------------------------- |
| `service`        | string | Yes      | The internal name of the service |
| `email`          | string | Yes      | The email address                |
| `allowAccountId` | long   | Yes      | The account ID to allow          |

**Response Type**: `email.pro.Task`

---

### 20. Get Pending Tasks (`GET /email/pro/{service}/account/{email}/tasks`)

**Description**: List pending tasks for a specific email account.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/tasks/get` (Alpha version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `email`        | string | Yes      | The email address                |

**Response Type**: `long[]`

**Example Response**:

```json
[123456, 789012]
```

---

### 21. Get Task Properties (`GET /email/pro/{service}/account/{email}/tasks/{id}`)

**Description**: Get properties of a specific pending task.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/tasks/get` (Alpha version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `email`        | string | Yes      | The email address                |
| `id`           | long   | Yes      | The task ID                      |

**Response Type**: `email.pro.Task`

---

### 22. Terminate Account (`POST /email/pro/{service}/account/{email}/terminate`)

**Description**: Terminate an email account at its expiration date.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:account/terminate` (Production version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `email`        | string | Yes      | The email address to terminate   |

**Response Type**: `string`

---

### 23. Get Billing Transition Status (`GET /email/pro/{service}/billingMigrated`)

**Description**: Detect if the billing for a service has transitioned.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:billingMigrated/get` (Alpha version)

**Parameters**:

| Parameter Name | Type   | Required | Description      |
| -------------- | ------ | -------- | ---------------- |
| `service`      | string | Yes      | The service name |

**Response Type**: `boolean`

**Example Response**:

```json
true
```

---

### 24. Get Billing Plan (`GET /email/pro/{service}/billingPlan`)

**Description**: Get the billing plan for a specific service.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:billingPlan/get` (Alpha version)

**Parameters**:

| Parameter Name | Type   | Required | Description      |
| -------------- | ------ | -------- | ---------------- |
| `service`      | string | Yes      | The service name |

**Response Type**: `string`

---

### 25. Change Service Contacts (`POST /email/pro/{service}/changeContact`)

**Description**: Change the admin, billing, or tech contacts for a service.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:changeContact` (Production version)

**Parameters**:

| Parameter Name   | Type   | Required | Description                      |
| ---------------- | ------ | -------- | -------------------------------- |
| `service`        | string | Yes      | The internal name of the service |
| `contactAdmin`   | string | No       | The contact to set as admin      |
| `contactBilling` | string | No       | The contact to set as billing    |
| `contactTech`    | string | No       | The contact to set as tech       |

**Response Type**: `long[]`

---

### 26. Create Domain in Service (`POST /email/pro/{service}/domain`)

**Description**: Create a new domain in a service.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:domain/create` (Production version)

**Parameters**:

| Parameter Name          | Type                       | Required | Description                       |
| ----------------------- | -------------------------- | -------- | --------------------------------- |
| `service`               | string                     | Yes      | The internal name of the service  |
| `name`                  | string                     | Yes      | Domain to install on server       |
| `type`                  | `email.pro.DomainTypeEnum` | Yes      | Type of domain to install         |
| `autoEnableDKIM`        | boolean                    | No       | Enable DKIM automatically         |
| `configureAutodiscover` | boolean                    | No       | Configure autodiscover record     |
| `configureDKIM`         | boolean                    | No       | Configure DKIM automatically      |
| `configureMx`           | boolean                    | No       | Configure MX record automatically |
| `configureSPF`          | boolean                    | No       | Enable automatic SPF record       |
| `mxRelay`               | string                     | No       | Redirect emails to domain         |

**Response Type**: `email.pro.Task`

---

### 27. Get Domain Properties (`GET /email/pro/{service}/domain/{domainName}`)

**Description**: Get properties of a specific domain.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:domain/get` (Alpha version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `domainName`   | string | Yes      | The domain name                  |

**Response Type**: `email.pro.DomainNative`

---

### 28. Delete Domain (`DELETE /email/pro/{service}/domain/{domainName}`)

**Description**: Delete an existing domain in a service.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:domain/delete` (Production version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `domainName`   | string | Yes      | The domain name to delete        |

**Response Type**: `email.pro.Task`

---

### 29. Edit Domain Properties (`PUT /email/pro/{service}/domain/{domainName}`)

**Description**: Alter properties of a specific domain.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:domain/edit` (Production version)

**Parameters**:

| Parameter Name | Type               | Required | Description                      |
| -------------- | ------------------ | -------- | -------------------------------- |
| `service`      | string             | Yes      | The internal name of the service |
| `domainName`   | string             | Yes      | The domain name                  |
| `account`      | `email.pro.Domain` | Yes      | New object properties            |

**Response Type**: `void`

---

### 30. Get Disclaimer Properties (`GET /email/pro/{service}/domain/{domainName}/disclaimer`)

**Description**: Get properties of a disclaimer for a specific domain.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:domain/disclaimer/get` (Alpha version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `domainName`   | string | Yes      | The domain name                  |

**Response Type**: `email.pro.disclaimerNative`

---

### 31. Delete Disclaimer (`DELETE /email/pro/{service}/domain/{domainName}/disclaimer`)

**Description**: Delete an existing disclaimer for a domain.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:domain/disclaimer/delete` (Production version)

**Parameters**:

| Parameter Name | Type   | Required | Description                      |
| -------------- | ------ | -------- | -------------------------------- |
| `service`      | string | Yes      | The internal name of the service |
| `domainName`   | string | Yes      | The domain name                  |

**Response Type**: `email.pro.Task`

---

### 32. Create Disclaimer (`POST /email/pro/{service}/domain/{domainName}/disclaimer`)

**Description**: Create a disclaimer for a domain.

**Authentication**: Required

**IAM Action**: `emailPro:apiovh:domain/disclaimer/create` (Production version)

**Parameters**:

| Parameter Name | Type    | Required | Description                       |
| -------------- | ------- | -------- | --------------------------------- |
| `service`      | string  | Yes      | The internal name of the service  |
| `domainName`   | string  | Yes      | The domain name                   |
| `content`      | text    | Yes      | Signature added at the bottom     |
| `outsideOnly`  | boolean | No       | Activate only for external emails |

**Response Type**: `email.pro.Task`

---

## Node Properties

The OVHcloud Email Pro node follows the standard n8n node properties pattern:

| Property Name              | Type     | Required | Description                                            |
| -------------------------- | -------- | -------- | ------------------------------------------------------ |
| `svcOperation`             | string   | Yes      | The operation to perform                               |
| `svcType`                  | string   | Yes      | The resource type (e.g., `account`, `alias`, `domain`) |
| `svcId`                    | long     | No       | The account ID                                         |
| `svcEmail`                 | string   | No       | The email address                                      |
| `svcDomainName`            | string   | No       | The domain name                                        |
| `svcState`                 | string   | No       | The state of the resource                              |
| `svcAllowAccountId`        | long     | No       | The account ID for permissions                         |
| `svcContent`               | text     | No       | Content for disclaimer operations                      |
| `svcPassword`              | password | No       | Account password                                       |
| `svcAutoEnableDKIM`        | boolean  | No       | Enable DKIM automatically                              |
| `svcConfigureAutodiscover` | boolean  | No       | Configure autodiscover record                          |
| `svcConfigureDKIM`         | boolean  | No       | Configure DKIM automatically                           |
| `svcConfigureMx`           | boolean  | No       | Configure MX record automatically                      |
| `svcConfigureSPF`          | boolean  | No       | Enable automatic SPF record                            |
| `svcMxRelay`               | string   | No       | Redirect emails to domain                              |

---

## Error Handling

The node uses `NodeApiError` for n8n-specific errors and follows these guidelines:

- **Input Validation**: Validate all inputs before making API calls
- **API Error Handling**: Catch API errors and provide meaningful error messages
- **Authentication Errors**: Handle authentication failures with clear context
- **Rate Limiting**: Implement proper rate limiting and retry logic if needed

---

## Type Safety

The node defines explicit types for all parameters and responses, following these conventions:

- **TypeScript**: Uses TypeScript with strict mode enabled
- **Type Guards**: Leverages TypeScript type guards for parameter validation
- **Interfaces**: Defines interfaces for complex data structures
- **Strict Null Checks**: Ensures all types are properly checked for null/undefined values

---

## Examples

### Example 1: List Accounts for a Service

**Node Properties**:

```json
{
    "svcOperation": "get",
    "svcType": "account",
    "svcService": "myService"
}
```

**Expected Output**:

```json
["123456", "789012"]
```

---

### Example 2: Create an Alias

**Node Properties**:

```json
{
    "svcOperation": "create",
    "svcType": "alias",
    "svcService": "myService",
    "svcEmail": "user@example.com",
    "svcAlias": "alias@example.com"
}
```

**Expected Output**:

```json
{
    "taskId": 123456,
    "status": "pending"
}
```

---

### Example 3: Change Service Contacts

**Node Properties**:

```json
{
    "svcOperation": "edit",
    "svcType": "contact",
    "svcService": "myService",
    "svcContactAdmin": "admin@example.com",
    "svcContactBilling": "billing@example.com",
    "svcContactTech": "tech@example.com"
}
```

**Expected Output**:

```json
["admin@example.com", "billing@example.com", "tech@example.com"]
```

---

## Troubleshooting

### Common Issues

1. **Authentication Failure**: Ensure all required IAM actions are enabled in your OVHcloud API credentials
2. **Invalid Parameters**: Validate all parameters against the API documentation before making calls
3. **Rate Limiting**: Implement proper rate limiting to avoid hitting API quotas
4. **Missing Operations**: Check the API documentation for the latest available operations

### Error Messages

- **NodeApiError**: Used for n8n-specific errors with clear context
- **API Error**: Provides the original OVHcloud API error message for debugging

---

## References

- [OVHcloud API Documentation - Email Pro](https://api.ovh.com/)
- [n8n Node Development Guide](https://docs.n8n.io/integrations/core-nodes/)
- [n8n OVHcloud Node Implementation](https://github.com/n8n-io/n8n/tree/master/packages/nodes-base/ovh)
- [TypeScript Strict Mode](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html)
- [n8n Error Handling](https://docs.n8n.io/integrations/core-nodes/error-handling/)

---

## Version History

This documentation is based on the OVHcloud Email Pro API as of March 2026. For the latest updates, refer to the official OVHcloud API documentation.

- **v1.0**: Initial version of the node documentation
- **March 2026**: Updated to reflect the latest API operations and conventions

---

## Security Considerations

- **Credential Storage**: Ensure OVHcloud API credentials are stored securely
- **IAM Actions**: Only enable required IAM actions to minimize attack surface
- **Parameter Validation**: Validate all inputs to prevent injection attacks
- **Error Handling**: Do not expose sensitive error details to end users

---

## Notes

- Follow the existing code patterns in the `OvhCloudApiClient` for all API calls
- Use the provided `NodeApiError` for consistent error handling across n8n
- Validate all inputs before making API calls to ensure type safety
- Keep the documentation up-to-date with the latest API changes

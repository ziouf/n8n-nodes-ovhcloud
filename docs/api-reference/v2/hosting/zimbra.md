# Zimbra OVHcloud API Documentation

## Overview

This document describes the Zimbra OVHcloud API endpoints for managing Zimbra Platforms, accounts, domains, organizations, aliases, redirections, and slots. The API follows REST conventions and uses UUIDs for resource identification.

---

## API Status

All endpoints are in **`PRODUCTION`** status unless otherwise specified (e.g., `BETA`).

---

## Base Path

```
https://eu.api.ovh.com/v2
```

---

## Authentication

All endpoints require authentication unless explicitly marked as `noAuthentication: true`.

Authentication is typically handled via the `X-Pagination-Cursor` and `X-Pagination-Size` headers for pagination, and OAuth2 or API keys for resource access.

---

## Pagination

### Supported Headers

| Header Name           | Data Type | Description              | Required |
| --------------------- | --------- | ------------------------ | -------- |
| `X-Pagination-Cursor` | string    | Pagination cursor        | No       |
| `X-Pagination-Size`   | long      | Number of items per page | No       |

Pagination is used across multiple endpoints to manage large datasets efficiently.

---

## Endpoints

### Platforms

#### **List Platforms**

```
GET /zimbra/platform
```

**Description:** Retrieve a list of Zimbra Platforms.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `GET`

**Parameters:**

| Parameter Name | Data Type                           | Param Type | Description                  | Required |
| -------------- | ----------------------------------- | ---------- | ---------------------------- | -------- |
| `iamTags`      | map[string][]iam.resource.TagFilter | query      | Filter resources on IAM tags | No       |
| `projectId`    | uuid                                | query      | Project identifier           | No       |

**Response Type:** `zimbra.PlatformResponseWithIAM[]`

**Errors:**

- None explicitly defined (inherits standard OVHcloud errors)

**IAM Actions:**

- `zimbra:apiovh:platform/get` (Required: `true`)

---

#### **Get a Platform**

```
GET /zimbra/platform/{platformId}
```

**Description:** Retrieve details for a specific Zimbra Platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `GET`

**Parameters:**

| Parameter Name | Data Type | Param Type | Description | Required |
| -------------- | --------- | ---------- | ----------- | -------- |
| `platformId`   | uuid      | path       | Platform ID | Yes      |

**Response Type:** `zimbra.PlatformResponseWithIAM`

**Errors:**

- `Client::NotFound::PlatformNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/get` (Required: `true`)

---

#### **Modify a Platform**

```
PUT /zimbra/platform/{platformId}
```

**Description:** Update properties of a Zimbra Platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `PUT`

**Parameters:**

| Parameter Name | Data Type                   | Param Type | Description                                           | Required |
| -------------- | --------------------------- | ---------- | ----------------------------------------------------- | -------- |
| `platformId`   | uuid                        | path       | Platform ID                                           | Yes      |
| `body`         | `zimbra.PlatformPutPayload` | body       | Request Body containing platform properties to update | Yes      |

**Response Type:** `zimbra.PlatformResponse`

**Errors:**

- `Client::NotFound::PlatformNotFound`
- `Client::Conflict::UndesiredObjectStatus`
- `Client::PreconditionFailed::InvalidChecksum`

**IAM Actions:**

- `zimbra:apiovh:platform/edit` (Required: `true`)

---

### Accounts

#### **List Accounts**

```
GET /zimbra/platform/{platformId}/account
```

**Description:** Retrieve a list of accounts associated with a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `GET`

**Parameters:**

| Parameter Name        | Data Type          | Param Type | Description                       | Required |
| --------------------- | ------------------ | ---------- | --------------------------------- | -------- |
| `X-Pagination-Cursor` | string             | header     | Pagination cursor                 | No       |
| `X-Pagination-Size`   | long               | header     | Number of items per page          | No       |
| `domainId`            | uuid               | query      | Filter by Domain identifier       | No       |
| `email`               | string             | query      | Filter by email                   | No       |
| `offer`               | `zimbra.OfferEnum` | query      | Filter by offer                   | No       |
| `organizationId`      | uuid               | query      | Filter by organization identifier | No       |
| `organizationLabel`   | string             | query      | Filter by organization label      | No       |
| `platformId`          | uuid               | path       | Platform ID                       | Yes      |

**Response Type:** `zimbra.AccountResponse[]`

**Errors:**

- `Client::BadRequest::CannotFilterByOffer`
- `Client::NotFound::PlatformNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/account/get` (Required: `true`)

---

#### **Create an Account**

```
POST /zimbra/platform/{platformId}/account
```

**Description:** Create a new account within a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `POST`

**Parameters:**

| Parameter Name | Data Type                   | Param Type | Description                                          | Required |
| -------------- | --------------------------- | ---------- | ---------------------------------------------------- | -------- |
| `platformId`   | uuid                        | path       | Platform ID                                          | Yes      |
| `body`         | `zimbra.AccountPostPayload` | body       | Request Body containing account properties to create | Yes      |

**Response Type:** `zimbra.AccountResponse`

**Errors:**

- `Client::BadRequest::AccountEmailContainForbiddenCharacter`
- `Client::BadRequest::AccountSlotHasWrongOffer`
- `Client::BadRequest::DomainNotReady`
- `Client::BadRequest::InvalidPasswordNotMatchingPolicy`
- `Client::BadRequest::NoSlotAvailable`
- `Client::NotFound::DomainNotFound`
- `Client::NotFound::OrganizationNotFound`
- `Client::NotFound::SlotNotFound`
- `Client::Conflict::AccountEmailAddressAlreadyUsed`
- `Client::Conflict::AccountSlotInUndesiredStatus`
- `Client::Conflict::AccountSlotIsAlreadyUsed`

**IAM Actions:**

- `zimbra:apiovh:platform/account/create` (Required: `true`)

---

#### **Get an Account**

```
GET /zimbra/platform/{platformId}/account/{accountId}
```

**Description:** Retrieve details for a specific account.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `GET`

**Parameters:**

| Parameter Name | Data Type | Param Type | Description | Required |
| -------------- | --------- | ---------- | ----------- | -------- |
| `platformId`   | uuid      | path       | Platform ID | Yes      |
| `accountId`    | uuid      | path       | Account ID  | Yes      |

**Response Type:** `zimbra.AccountResponse`

**Errors:**

- `Client::BadRequest::MultipleAccountsFoundWithSameID`
- `Client::NotFound::AccountNotFound`
- `Client::NotFound::PlatformNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/account/get` (Required: `true`)

---

#### **Modify an Account**

```
PUT /zimbra/platform/{platformId}/account/{accountId}
```

**Description:** Update properties of a specific account.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `PUT`

**Parameters:**

| Parameter Name | Data Type                  | Param Type | Description                                          | Required |
| -------------- | -------------------------- | ---------- | ---------------------------------------------------- | -------- |
| `platformId`   | uuid                       | path       | Platform ID                                          | Yes      |
| `accountId`    | uuid                       | path       | Account ID                                           | Yes      |
| `body`         | `zimbra.AccountPutPayload` | body       | Request Body containing account properties to update | Yes      |

**Response Type:** `zimbra.AccountResponse`

**Errors:**

- `Client::BadRequets::PasswordDoesNotMeetRequirements`
- `Client::BadRequest::MultipleDomainsFound`
- `Client::NotFound::AccountNotFound`
- `Client::NotFound::DomainNotFound`
- `Client::Conflict::AccountEmailAddressAlreadyUsed`
- `Client::Conflict::DomainNotReady`
- `Client::Conflict::UndesiredObjectStatus`
- `Client::PreconditionFailed::InvalidChecksum`

**IAM Actions:**

- `zimbra:apiovh:platform/account/edit` (Required: `true`)

---

#### **Delete an Account**

```
DELETE /zimbra/platform/{platformId}/account/{accountId}
```

**Description:** Remove a specific account from a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `DELETE`

**Parameters:**

| Parameter Name | Data Type | Param Type | Description | Required |
| -------------- | --------- | ---------- | ----------- | -------- |
| `platformId`   | uuid      | path       | Platform ID | Yes      |
| `accountId`    | uuid      | path       | Account ID  | Yes      |

**Response Type:** `void`

**Errors:**

- `Client::NotFound::AccountCannotBeDeletedDueToSpam`
- `Client::NotFound::AccountNotFound`
- `Client::NotFound::PlatformNotFound`
- `Client::Conflict::UndesiredObjectStatus`
- `Client::PreconditionFailed::InvalidChecksum`

**IAM Actions:**

- `zimbra:apiovh:platform/account/delete` (Required: `true`)

---

### Aliases

#### **List Aliases**

```
GET /zimbra/platform/{platformId}/alias
```

**Description:** Retrieve a list of aliases associated with a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `GET`

**Parameters:**

| Parameter Name           | Data Type | Param Type | Description                                      | Required |
| ------------------------ | --------- | ---------- | ------------------------------------------------ | -------- |
| `X-Pagination-Cursor`    | string    | header     | Pagination cursor                                | No       |
| `X-Pagination-Size`      | long      | header     | Number of items per page                         | No       |
| `alias`                  | string    | query      | Filter by the alias email                        | No       |
| `aliasOrganizationId`    | string    | query      | Filter by organization identifier of the aliases | No       |
| `aliasOrganizationLabel` | string    | query      | Filter by organization label of the aliases      | No       |
| `aliasTargetId`          | string    | query      | Filter by the targeted email account identifier  | No       |
| `platformId`             | uuid      | path       | Platform ID                                      | Yes      |

**Response Type:** `zimbra.AliasResponse[]`

**Errors:**

- `Client::NotFound::OrganizationNotFound`
- `Client::NotFound::PlatformNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/alias/get` (Required: `true`)

---

#### **Create an Alias**

```
POST /zimbra/platform/{platformId}/alias
```

**Description:** Create a new alias within a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `POST`

**Parameters:**

| Parameter Name | Data Type                 | Param Type | Description                                        | Required |
| -------------- | ------------------------- | ---------- | -------------------------------------------------- | -------- |
| `platformId`   | uuid                      | path       | Platform ID                                        | Yes      |
| `body`         | `zimbra.AliasPostPayload` | body       | Request Body containing alias properties to create | Yes      |

**Response Type:** `zimbra.AliasResponse`

**Errors:**

- `Client::BadRequest::AliasAlreadyUsed`
- `Client::BadRequest::AliasDomainOrganizationDiffers`
- `Client::NotFound::AliasDomainNotFound`
- `Client::NotFound::AliasTargetNotFound`
- `Client::NotFound::OrganizationNotFound`
- `Client::NotFound::PlatformNotFound`
- `Client::Conflict::AliasDomainNotReady`
- `Client::Conflict::AliasTargetObjectNotReady`

**IAM Actions:**

- `zimbra:apiovh:platform/alias/create` (Required: `true`)

---

#### **Get an Alias**

```
GET /zimbra/platform/{platformId}/alias/{aliasId}
```

**Description:** Retrieve details for a specific alias.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `GET`

**Parameters:**

| Parameter Name | Data Type | Param Type | Description | Required |
| -------------- | --------- | ---------- | ----------- | -------- |
| `platformId`   | uuid      | path       | Platform ID | Yes      |
| `aliasId`      | uuid      | path       | Alias ID    | Yes      |

**Response Type:** `zimbra.AliasResponse`

**Errors:**

- `Client::BadRequest::MultipleAliasesFoundWithSameID`
- `Client::NotFound::AliasNotFound`
- `Client::NotFound::PlatformNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/alias/get` (Required: `true`)

---

#### **Delete an Alias**

```
DELETE /zimbra/platform/{platformId}/alias/{aliasId}
```

**Description:** Remove a specific alias from a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `DELETE`

**Parameters:**

| Parameter Name | Data Type | Param Type | Description | Required |
| -------------- | --------- | ---------- | ----------- | -------- |
| `platformId`   | uuid      | path       | Platform ID | Yes      |
| `aliasId`      | uuid      | path       | Alias ID    | Yes      |

**Response Type:** `void`

**Errors:**

- `Client::NotFound::AccountNotFound`
- `Client::NotFound::AliasDomainNotFound`
- `Client::NotFound::AliasNotFound`
- `Client::NotFound::AliasTargetNotFound`
- `Client::Conflict::AliasDomainNotReady`
- `Client::Conflict::AliasObjectNotReady`
- `Client::Conflict::AliasTargetObjectNotReady`
- `Client::Conflict::UndesiredObjectStatus`
- `Client::PreconditionFailed::InvalidChecksum`

**IAM Actions:**

- `zimbra:apiovh:platform/alias/delete` (Required: `true`)

---

### Domains

#### **List Domains**

```
GET /zimbra/platform/{platformId}/domain
```

**Description:** Retrieve a list of domains associated with a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `GET`

**Parameters:**

| Parameter Name        | Data Type | Param Type | Description                       | Required |
| --------------------- | --------- | ---------- | --------------------------------- | -------- |
| `X-Pagination-Cursor` | string    | header     | Pagination cursor                 | No       |
| `X-Pagination-Size`   | long      | header     | Number of items per page          | No       |
| `domainName`          | string    | query      | Filter by domain name             | No       |
| `organizationId`      | uuid      | query      | Filter by organization identifier | No       |
| `organizationLabel`   | string    | query      | Filter by organization label      | No       |
| `platformId`          | uuid      | path       | Platform ID                       | Yes      |

**Response Type:** `zimbra.DomainResponse[]`

**Errors:**

- `Client::NotFound::PlatformNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/domain/get` (Required: `true`)

---

#### **Get a Domain**

```
GET /zimbra/platform/{platformId}/domain/{domainId}
```

**Description:** Retrieve details for a specific domain.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `GET`

**Parameters:**

| Parameter Name | Data Type | Param Type | Description | Required |
| -------------- | --------- | ---------- | ----------- | -------- |
| `platformId`   | uuid      | path       | Platform ID | Yes      |
| `domainId`     | uuid      | path       | Domain ID   | Yes      |

**Response Type:** `zimbra.DomainResponse`

**Errors:**

- `Client::NotFound::DomainNotFound`
- `Client::NotFound::PlatformNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/domain/get` (Required: `true`)

---

#### **Create a Domain**

```
POST /zimbra/platform/{platformId}/domain
```

**Description:** Create a new domain within a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `POST`

**Parameters:**

| Parameter Name | Data Type                  | Param Type | Description                                         | Required |
| -------------- | -------------------------- | ---------- | --------------------------------------------------- | -------- |
| `platformId`   | uuid                       | path       | Platform ID                                         | Yes      |
| `body`         | `zimbra.DomainPostPayload` | body       | Request Body containing domain properties to create | Yes      |

**Response Type:** `zimbra.DomainResponse`

**Errors:**

- `Client::BadRequest::InvalidDomainFormat`
- `Client::NotFound::PlatformNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/domain/create` (Required: `true`)

---

#### **Modify a Domain**

```
PUT /zimbra/platform/{platformId}/domain/{domainId}
```

**Description:** Update properties of a specific domain.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `PUT`

**Parameters:**

| Parameter Name | Data Type                 | Param Type | Description                                         | Required |
| -------------- | ------------------------- | ---------- | --------------------------------------------------- | -------- |
| `platformId`   | uuid                      | path       | Platform ID                                         | Yes      |
| `domainId`     | uuid                      | path       | Domain ID                                           | Yes      |
| `body`         | `zimbra.DomainPutPayload` | body       | Request Body containing domain properties to update | Yes      |

**Response Type:** `zimbra.DomainResponse`

**Errors:**

- `Client::NotFound::DomainNotFound`
- `Client::NotFound::PlatformNotFound`
- `Client::PreconditionFailed::InvalidChecksum`

**IAM Actions:**

- `zimbra:apiovh:platform/domain/edit` (Required: `true`)

---

#### **Delete a Domain**

```
DELETE /zimbra/platform/{platformId}/domain/{domainId}
```

**Description:** Remove a specific domain from a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `DELETE`

**Parameters:**

| Parameter Name | DataType | Param Type | Description | Required |
| -------------- | -------- | ---------- | ----------- | -------- |
| `platformId`   | uuid     | path       | Platform ID | Yes      |
| `domainId`     | uuid     | path       | Domain ID   | Yes      |

**Response Type:** `void`

**Errors:**

- `Client::NotFound::DomainNotFound`
- `Client::NotFound::PlatformNotFound`
- `Client::Conflict::UndesiredObjectStatus`
- `Client::PreconditionFailed::InvalidChecksum`

**IAM Actions:**

- `zimbra:apiovh:platform/domain/delete` (Required: `true`)

---

### Organizations

#### **List Organizations**

```
GET /zimbra/platform/{platformId}/organization
```

**Description:** Retrieve a list of organizations associated with a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `GET`

**Parameters:**

| Parameter Name        | DataType | Param Type | Description                 | Required |
| --------------------- | -------- | ---------- | --------------------------- | -------- |
| `X-Pagination-Cursor` | string   | header     | Pagination cursor           | No       |
| `X-Pagination-Size`   | long     | header     | Number of items per page    | No       |
| `organizationName`    | string   | query      | Filter by organization name | No       |
| `platformId`          | uuid     | path       | Platform ID                 | Yes      |

**Response Type:** `zimbra.OrganizationResponse[]`

**Errors:**

- `Client::NotFound::PlatformNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/organization/get` (Required: `true`)

---

#### **Get an Organization**

```
GET /zimbra/platform/{platformId}/organization/{organizationId}
```

**Description:** Retrieve details for a specific organization.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `GET`

**Parameters:**

| Parameter Name   | DataType | Param Type | Description     | Required |
| ---------------- | -------- | ---------- | --------------- | -------- |
| `platformId`     | uuid     | path       | Platform ID     | Yes      |
| `organizationId` | uuid     | path       | Organization ID | Yes      |

**Response Type:** `zimbra.OrganizationResponse`

**Errors:**

- `Client::NotFound::OrganizationNotFound`
- `Client::NotFound::PlatformNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/organization/get` (Required: `true`)

---

#### **Create an Organization**

```
POST /zimbra/platform/{platformId}/organization
```

**Description:** Create a new organization within a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `POST`

**Parameters:**

| Parameter Name | DataType                         | Param Type | Description                                               | Required |
| -------------- | -------------------------------- | ---------- | --------------------------------------------------------- | -------- |
| `platformId`   | uuid                             | path       | Platform ID                                               | Yes      |
| `body`         | `zimbra.OrganizationPostPayload` | body       | Request Body containing organization properties to create | Yes      |

**Response Type:** `zimbra.OrganizationResponse`

**Errors:**

- `Client::BadRequest::LabelExceedsMaxLength`
- `Client::NotFound::PlatformNotFound`
- `Client::Conflict::LabelAlreadyExistInThisPlatform`
- `Client::Conflict::OrganizationExists`

**IAM Actions:**

- `zimbra:apiovh:platform/organization/create` (Required: `true`)

---

#### **Modify an Organization**

```
PUT /zimbra/platform/{platformId}/organization/{organizationId}
```

**Description:** Update properties of a specific organization.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `PUT`

**Parameters:**

| Parameter Name   | DataType                        | Param Type | Description                                               | Required |
| ---------------- | ------------------------------- | ---------- | --------------------------------------------------------- | -------- |
| `platformId`     | uuid                            | path       | Platform ID                                               | Yes      |
| `organizationId` | uuid                            | path       | Organization ID                                           | Yes      |
| `body`           | `zimbra.OrganizationPutPayload` | body       | Request Body containing organization properties to update | Yes      |

**Response Type:** `zimbra.OrganizationResponse`

**Errors:**

- `Client::BadRequest::LabelExceedsMaxLength`
- `Client::NotFound::InvalidOrganizationOwnership`
- `Client::NotFound::OrganizationNotFound`
- `Client::NotFound::PlatformNotFound`
- `Client::Conflict::LabelAlreadyExistInThisPlatform`
- `Client::Conflict::UndesiredObjectStatus`
- `Client::PreconditionFailed::InvalidChecksum`

**IAM Actions:**

- `zimbra:apiovh:platform/organization/edit` (Required: `true`)

---

#### **Delete an Organization**

```
DELETE /zimbra/platform/{platformId}/organization/{organizationId}
```

**Description:** Remove a specific organization from a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `DELETE`

**Parameters:**

| Parameter Name   | DataType | Param Type | Description     | Required |
| ---------------- | -------- | ---------- | --------------- | -------- |
| `platformId`     | uuid     | path       | Platform ID     | Yes      |
| `organizationId` | uuid     | path       | Organization ID | Yes      |

**Response Type:** `void`

**Errors:**

- `Client::NotFound::OrganizationNotFound`
- `Client::NotFound::PlatformNotFound`
- `Client::Conflict::OrganizationContainsLinkedResources`
- `Client::Conflict::UndesiredObjectStatus`

**IAM Actions:**

- `zimbra:apiovh:platform/organization/delete` (Required: `true`)

---

### Redirections

#### **List Redirections**

```
GET /zimbra/platform/{platformId}/redirection
```

**Description:** Retrieve a list of redirections associated with a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `GET`

**Parameters:**

| Parameter Name        | DataType | Param Type | Description                       | Required |
| --------------------- | -------- | ---------- | --------------------------------- | -------- |
| `X-Pagination-Cursor` | string   | header     | Pagination cursor                 | No       |
| `X-Pagination-Size`   | long     | header     | Number of items per page          | No       |
| `destination`         | string   | query      | Filter by destination             | No       |
| `domainId`            | string   | query      | Filter by domain identifier       | No       |
| `organizationId`      | string   | query      | Filter by organization identifier | No       |
| `platformId`          | uuid     | path       | Platform ID                       | Yes      |
| `source`              | string   | query      | Filter by source                  | No       |

**Response Type:** `zimbra.RedirectionResponse[]`

**Errors:**

- `Client::NotFound::OrganizationNotFound`
- `Client::NotFound::PlatformNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/redirection/get` (Required: `true`)

---

#### **Create a Redirection**

```
POST /zimbra/platform/{platformId}/redirection
```

**Description:** Create a new redirection within a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `POST`

**Parameters:**

| Parameter Name | DataType                        | Param Type | Description                                              | Required |
| -------------- | ------------------------------- | ---------- | -------------------------------------------------------- | -------- |
| `platformId`   | uuid                            | path       | Platform ID                                              | Yes      |
| `body`         | `zimbra.RedirectionPostPayload` | body       | Request Body containing redirection properties to create | Yes      |

**Response Type:** `zimbra.RedirectionResponse`

**Errors:**

- `Client::NotFound::OrganizationNotFound`
- `Client::NotFound::PlatformNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/redirection/create` (Required: `true`)

---

#### **Get a Redirection**

```
GET /zimbra/platform/{platformId}/redirection/{redirectionId}
```

**Description:** Retrieve details for a specific redirection.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `GET`

**Parameters:**

| Parameter Name  | DataType | Param Type | Description    | Required |
| --------------- | -------- | ---------- | -------------- | -------- |
| `platformId`    | uuid     | path       | Platform ID    | Yes      |
| `redirectionId` | uuid     | path       | Redirection ID | Yes      |

**Response Type:** `zimbra.RedirectionResponse`

**Errors:**

- `Client::NotFound::PlatformNotFound`
- `Client::NotFound::RedirectionNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/redirection/get` (Required: `true`)

---

#### **Delete a Redirection**

```
DELETE /zimbra/platform/{platformId}/redirection/{redirectionId}
```

**Description:** Remove a specific redirection from a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `DELETE`

**Parameters:**

| Parameter Name  | DataType | Param Type | Description    | Required |
| --------------- | -------- | ---------- | -------------- | -------- |
| `platformId`    | uuid     | path       | Platform ID    | Yes      |
| `redirectionId` | uuid     | path       | Redirection ID | Yes      |

**Response Type:** `void`

**Errors:**

- `Client::NotFound::AccountNotFound`
- `Client::NotFound::PlatformNotFound`
- `Client::NotFound::RedirectionNotFound`
- `Client::Conflict::UndesiredObjectStatus`
- `Client::PreconditionFailed::InvalidChecksum`

**IAM Actions:**

- `zimbra:apiovh:platform/redirection/delete` (Required: `true`)

---

### Slots

#### **List Slots**

```
GET /zimbra/platform/{platformId}/slot
```

**Description:** Retrieve a list of slots associated with a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `GET`

**Parameters:**

| Parameter Name        | DataType | Param Type | Description                        | Required |
| --------------------- | -------- | ---------- | ---------------------------------- | -------- |
| `X-Pagination-Cursor` | string   | header     | Pagination cursor                  | No       |
| `X-Pagination-Size`   | long     | header     | Number of items per page           | No       |
| `accountId`           | string   | query      | Filter by account identifier       | No       |
| `billingStatus`       | string   | query      | Filter by billing status           | No       |
| `email`               | string   | query      | Filter by email                    | No       |
| `offer`               | string   | query      | Filter by offer                    | No       |
| `platformId`          | uuid     | path       | Platform ID                        | Yes      |
| `used`                | boolean  | query      | Filter by empty account identifier | No       |

**Response Type:** `zimbra.SlotResponse[]`

**Errors:**

- `Client::BadRequest::IncorrectFilterUsedType`
- `Client::BadRequest::OfferIsIncorrect`
- `Client::NotFound::PlatformNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/slot/get` (Required: `true`)

---

#### **Get a Slot**

```
GET /zimbra/platform/{platformId}/slot/{slotId}
```

**Description:** Retrieve details for a specific slot.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `GET`

**Parameters:**

| Parameter Name | DataType | Param Type | Description | Required |
| -------------- | -------- | ---------- | ----------- | -------- |
| `platformId`   | uuid     | path       | Platform ID | Yes      |
| `slotId`       | uuid     | path       | Slot ID     | Yes      |

**Response Type:** `zimbra.SlotResponse`

**Errors:**

- `Client::BadRequest::MultipleSlotsFoundWithSameID`
- `Client::NotFound::PlatformNotFound`
- `Client::NotFound::SlotNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/slot/get` (Required: `true`)

---

#### **Delete a Slot**

```
DELETE /zimbra/platform/{platformId}/slot/{slotId}
```

**Description:** Remove a specific slot from a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `DELETE`

**Parameters:**

| Parameter Name | DataType | Param Type | Description | Required |
| -------------- | -------- | ---------- | ----------- | -------- |
| `platformId`   | uuid     | path       | Platform ID | Yes      |
| `slotId`       | uuid     | path       | Slot ID     | Yes      |

**Response Type:** `void`

**Errors:**

- `Client::NotFound::AccountNotFound`
- `Client::NotFound::PlatformNotFound`
- `Client::NotFound::SlotNotFound`
- `Client::Conflict::UndesiredObjectStatus`
- `Client::PreconditionFailed::InvalidChecksum`

**IAM Actions:**

- `zimbra:apiovh:platform/slot/delete` (Required: `true`)

---

### Tasks

#### **List Platform Tasks**

```
GET /zimbra/platform/{platformId}/task
```

**Description:** Retrieve a list of tasks associated with a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `GET`

**Parameters:**

| Parameter Name | DataType | Param Type | Description | Required |

| `X-Pagination-Cursor` | string | header | Pagination cursor | No |
| `X-Pagination-Size` | long | header | Number of items per page | No |
| `organizationId` | uuid | query | Filter by organization identifier | No |
| `organizationLabel` | string | query | Filter by organization label | No |
| `platformId` | uuid | path | Platform ID | Yes |

**Response Type:** `common.Task[]`

**Errors:**

- `Client::NotFound::PlatformNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/task/get` (Required: `true`)

---

### Diagnostic

#### **Domain Diagnostic**

```
POST /zimbra/platform/{platformId}/diagnostic/domain
```

**Description:** Perform a diagnostic on domains within a platform.

**Authentication:** Required (`noAuthentication: false`)

**HTTP Method:** `POST`

**Parameters:**

| Parameter Name        | DataType                            | Param Type | Description                                   | Required |
| --------------------- | ----------------------------------- | ---------- | --------------------------------------------- | -------- |
| `X-Pagination-Cursor` | string                              | header     | Pagination cursor                             | No       |
| `X-Pagination-Size`   | long                                | header     | Number of items per page                      | No       |
| `platformId`          | uuid                                | path       | Platform ID                                   | Yes      |
| `body`                | `zimbra.DomainDiagnosisPostPayload` | body       | Request Body containing diagnostic parameters | Yes      |

**Response Type:** `zimbra.DomainDiagnosisResponse[]`

**Errors:**

- `Client::NotFound::PlatformNotFound`

**IAM Actions:**

- `zimbra:apiovh:platform/diagnostic/domain/get` (Required: `true`)

---

## Response Types

### PlatformResponseWithIAM

Represents a platform with IAM metadata.

### PlatformResponse

Represents a platform without IAM metadata.

### AccountResponse

Represents an account with associated metadata.

### AliasResponse

Represents an alias with associated metadata.

### DomainResponse

Represents a domain with associated metadata.

### OrganizationResponse

Represents an organization with associated metadata.

### SlotResponse

Represents a slot with associated metadata.

### RedirectionResponse

Represents a redirection with associated metadata.

---

## Error Handling

### Common Errors

| Error Type                                          | Description                           |
| --------------------------------------------------- | ------------------------------------- |
| `Client::NotFound::PlatformNotFound`                | Platform not found                    |
| `Client::NotFound::AccountNotFound`                 | Account not found                     |
| `Client::NotFound::DomainNotFound`                  | Domain not found                      |
| `Client::NotFound::OrganizationNotFound`            | Organization not found                |
| `Client::NotFound::RedirectionNotFound`             | Redirection not found                 |
| `Client::NotFound::SlotNotFound`                    | Slot not found                        |
| `Client::Conflict::LabelAlreadyExistInThisPlatform` | Label already exists in this platform |
| `Client::Conflict::OrganizationExists`              | Organization already exists           |
| `Client::Conflict::UndesiredObjectStatus`           | Object status is not desired          |
| `Client::PreconditionFailed::InvalidChecksum`       | Invalid checksum provided             |

---

### Specific Errors by Endpoint

Each endpoint may return additional errors specific to its operation. These are detailed in the **Errors** section of each endpoint.

---

## IAM Actions

IAM actions are required permissions for performing operations on resources.

### Required IAM Actions

| IAM Action                                   | Description                             |
| -------------------------------------------- | --------------------------------------- |
| `zimbra:apiovh:platform/get`                 | Required to get platform details        |
| `zimbra:apiovh:platform/edit`                | Required to modify platform details     |
| `zimbra:apiovh:platform/account/get`         | Required to get account details         |
| `zimbra:apiovh:platform/account/create`      | Required to create an account           |
| `zimbra:apiovh:platform/account/edit`        | Required to modify account details      |
| `zimbra:apiovh:platform/account/delete`      | Required to delete an account           |
| `zimbra:apiovh:platform/alias/get`           | Required to get alias details           |
| `zimbra:apiovh:platform/alias/create`        | Required to create an alias             |
| `zimbra:apiovh:platform/alias/edit`          | Required to modify alias details        |
| `zimbra:apiovh:platform/alias/delete`        | Required to delete an alias             |
| `zimbra:apiovh:platform/domain/get`          | Required to get domain details          |
| `zimbra:apiovh:platform/domain/create`       | Required to create a domain             |
| `zimbra:apiovh:platform/domain/edit`         | Required to modify domain details       |
| `zimbra:apiovh:platform/domain/delete`       | Required to delete a domain             |
| `zimbra:apiovh:platform/organization/get`    | Required to get organization details    |
| `zimbra:apiovh:platform/organization/create` | Required to create an organization      |
| `zimbra:apiovh:platform/organization/edit`   | Required to modify organization details |
| `zimbra:apiovh:platform/organization/delete` | Required to delete an organization      |
| `zimbra:apiovh:platform/redirection/get`     | Required to get redirection details     |
| `zimbra:apiovh:platform/redirection/create`  | Required to create a redirection        |
| `zimbra:apiovh:platform/redirection/delete`  | Required to delete a redirection        |
| `zimbra:apiovh:platform/slot/get`            | Required to get slot details            |
| `zimbra:apiovh:platform/slot/delete`         | Required to delete a slot               |

---

## Models

### `common.CurrentTask`

Represents an asynchronous operation currently running.

**Properties:**

| Property Name | Data Type                      | Description                       |
| ------------- | ------------------------------ | --------------------------------- |
| `errors`      | `common.TaskError[]`           | Errors that occurred on the task  |
| `id`          | uuid                           | Identifier of the current task    |
| `link`        | string                         | Link to the task details          |
| `status`      | `common.CurrentTaskStatusEnum` | Current global status of the task |
| `type`        | string                         | Type of the current task          |

---

### `common.CurrentTaskStatusEnum`

**Enum:**

- `ERROR`
- `PENDING`
- `RUNNING`
- `SCHEDULED`
- `WAITING_USER_INPUT`

---

### `common.Event`

Represents an event for an async envelope.

**Properties:**

| Property Name | Data Type | Description                |
| ------------- | --------- | -------------------------- |
| `createdAt`   | datetime  | Creation date of the event |
| `kind`        | string    | Type of event              |
| `message`     | string    | Event message              |
| `projectId`   | uuid      | Project identifier         |

---

## Additional Notes

- **`BETA`** endpoints are subject to change and should be used with caution.
- **`PRODUCTION`** endpoints are stable and recommended for use.
- All **`POST`**, **`PUT`**, and **`DELETE`** operations require a valid **`body`** parameter.
- **`GET`** operations may support additional query parameters for filtering results.
- **`IAM Actions`** must be granted before performing operations on resources.

---

## Versioning

This API is versioned as part of the `n8n-nodes-ovhcloud` project.

---

## References

- [OVHcloud API Documentation](https://api.ovh.com/)
- [n8n-nodes-ovhcloud Project](https://github.com/n8n-io/n8n-nodes-ovhcloud)

# OVHcloud Microsoft Services API Documentation (v1)

> **Note**: This documentation is auto-generated from the OVHcloud API specification. It may contain inaccuracies or inconsistencies.

## Overview

The **Microsoft Services API** (`api_docs/v1/msServices.json`) provides endpoints for managing Microsoft services within OVHcloud infrastructure, including Active Directory, Exchange, SharePoint, and Multi-Factor Authentication (MFA) operations. This API is part of the `microsoftServices` family and is used for administrative tasks related to Microsoft services.

---

## API Status

| Status     | Description                 | Deprecation/Deletion Date |
| ---------- | --------------------------- | ------------------------- |
| PRODUCTION | Stable production version   | N/A                       |
| DEPRECATED | Deprecated, will be removed | 2024-08-01T00:00:00+01:00 |
| DELETION   | Will be removed             | 2024-10-01T00:00:00+01:00 |

---

## Authentication

All endpoints require authentication unless explicitly marked as `noAuthentication: true`.

### Required IAM Actions

Each endpoint specifies required IAM actions in the `iamActions` field. These actions must be granted to the user executing the request. Example:

```json
{
    "iamActions": [
        {
            "name": "microsoftServices:apiovh:get",
            "required": true
        }
    ]
}
```

---

## Endpoints

### `/msServices`

#### **Operation: List available services**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `iamTags` (optional): Filter resources on IAM tags
    - **Type**: `map[string][]iam.resource.TagFilter`
    - **Param Type**: `query`
    - **Required**: false
- **Response Type**: `string[]`
- **Description**: Returns a list of available Microsoft services.

---

### `/msServices/sharepoint`

#### **Operation: List available services**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `iamTags` (optional): Filter resources on IAM tags
    - **Type**: `map[string][]iam.resource.TagFilter`
    - **Param Type**: `query`
    - **Required**: false
- **Response Type**: `string[]`
- **Description**: Returns a list of SharePoint services.

---

### `/msServices/sharepoint/{domain}`

#### **Operation: Get service information**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `domain` (required): SharePoint customer's service
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.SharepointServiceInfoWithIAM`
- **Description**: Returns detailed information about a SharePoint service, including IAM properties.

#### **Operation: Update service information**

- **HTTP Method**: `PUT`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `body` (required): New object properties
    - **Type**: `msServices.SharepointService`
    - **Param Type**: `body`
    - **Required**: true
  - `domain` (required): SharePoint customer's service
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `void`
- **Description**: Updates properties of a SharePoint service.

---

### `/msServices/{serviceName}`

#### **Operation: Get this object properties**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.ActiveDirectoryOrganizationalUnitWithIAM`
- **Description**: Returns detailed information about an Active Directory organizational unit, including IAM properties.

#### **Operation: Alter this object properties**

- **HTTP Method**: `PUT`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `body` (required): New object properties
    - **Type**: `msServices.ActiveDirectoryOrganizationalUnit`
    - **Param Type**: `body`
    - **Required**: true
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `void`
- **Description**: Updates properties of an Active Directory organizational unit.

---

### `/msServices/{serviceName}/account`

#### **Operation: List accounts associated to this Active Directory service**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `company` (optional): Filter the value of company property (like)
    - **Type**: `string`
    - **Param Type**: `query`
    - **Required**: false
  - `id` (optional): Filter the value of id property (like)
    - **Type**: `long`
    - **Param Type**: `query`
    - **Required**: false
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `string[]`
- **Description**: Returns a list of accounts associated with the specified Active Directory service.

---

### `/msServices/{serviceName}/account/{userPrincipalName}`

#### **Operation: Get this object properties**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.Account`
- **Description**: Returns detailed information about an account, including IAM properties.

#### **Operation: Alter this object properties**

- **HTTP Method**: `PUT`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `body` (required): New object properties
    - **Type**: `msServices.Account`
    - **Param Type**: `body`
    - **Required**: true
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `void`
- **Description**: Updates properties of an account.

---

### `/msServices/{serviceName}/account/{userPrincipalName}/changePassword`

#### **Operation: Change account password**

- **HTTP Method**: `POST`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `password` (required): New password
    - **Type**: `password`
    - **Param Type**: `body`
    - **Required**: true
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.Task`
- **Description**: Initiates a password change procedure for the specified account.

---

### `/msServices/{serviceName}/account/{userPrincipalName}/exchange`

#### **Operation: Get this object properties**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.ExchangeInformation`
- **Description**: Returns detailed information about an Exchange mailbox.

#### **Operation: Alter this object properties**

- **HTTP Method**: `PUT`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `body` (required): New object properties
    - **Type**: `msServices.ExchangeInformation`
    - **Param Type**: `body`
    - **Required**: true
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `void`
- **Description**: Updates properties of an Exchange mailbox.

---

### `/msServices/{serviceName}/account/{userPrincipalName}/exchange/configure`

#### **Operation: Configure mailbox to be operational**

- **HTTP Method**: `POST`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.exchangeTask`
- **Description**: Returns a task object for configuring an Exchange mailbox.

---

### `/msServices/{serviceName}/account/{userPrincipalName}/mfa`

#### **Operation: Delete Multi-Factor Authentication feature for this account**

- **HTTP Method**: `DELETE`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.Task`
- **Description**: Deletes the MFA feature for the specified account.

#### **Operation: Get this object properties**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.MfaInformation`
- **Description**: Returns detailed information about the MFA status of an account.

#### **Operation: Create Multi-Factor Authentication for this account**

- **HTTP Method**: `POST`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.Task`
- **Description**: Initiates the creation of MFA for the specified account.

---

### `/msServices/{serviceName}/account/{userPrincipalName}/mfa/disable`

#### **Operation: Disable Multi-Factor Authentication for a period of time**

- **HTTP Method**: `POST`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `period` (required): Multi-Factor Authentication disable period in hours
    - **Type**: `long`
    - **Param Type**: `body`
    - **Required**: true
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.Task`
- **Description**: Disables MFA for the specified account for a given period.

---

### `/msServices/{serviceName}/account/{userPrincipalName}/mfa/enable`

#### **Operation: Enable Multi-Factor Authentication for this account**

- **HTTP Method**: `POST`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.Task`
- **Description**: Enables MFA for the specified account.

---

### `/msServices/{serviceName}/account/{userPrincipalName}/mfa/reset`

#### **Operation: Reset Multi-Factor Authentication status for this account**

- **HTTP Method**: `POST`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.Task`
- **Description**: Resets the MFA status for the specified account.

---

### `/msServices/{serviceName}/account/{userPrincipalName}/sharepoint`

#### **Operation: Get this object properties**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-08-01T00:00:00+01:00)
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.SharepointInformation`
- **Description**: Returns detailed information about a SharePoint account.

#### **Operation: Alter this object properties**

- **HTTP Method**: `PUT`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `body` (required): New object properties
    - **Type**: `msServices.SharepointInformation`
    - **Param Type**: `body`
    - **Required**: true
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `void`
- **Description**: Updates properties of a SharePoint account.

---

### `/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/clearSpace`

#### **Operation: On-demand MySite clearance**

- **HTTP Method**: `POST`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.sharepointTask`
- **Description**: Clears MySite space for the specified SharePoint account on demand.

---

### `/msServices/{serviceName}/account/{userPrincipalName}/sharepoint/configure`

#### **Operation: Configure SharePoint account to be operational**

- **HTTP Method**: `POST`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.sharepointTask`
- **Description**: Configures a SharePoint account to be operational.

---

### `/msServices/{serviceName}/account/{userPrincipalName}/sync`

#### **Operation: Delete sync account**

- **HTTP Method**: `DELETE`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.Task`
- **Description**: Deletes a sync account.

#### **Operation: Get this object properties**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.SyncInformation`
- **Description**: Returns detailed information about a sync account.

#### **Operation: Create new sync account**

- **HTTP Method**: `POST`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `license` (required): Sync account license
    - **Type**: `msServices.SyncLicenseEnum`
    - **Param Type**: `body`
    - **Required**: true
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.Task`
- **Description**: Creates a new sync account with the specified license.

---

### `/msServices/{serviceName}/account/{userPrincipalName}/sync/configure`

#### **Operation: Configure sync account to be operational**

- **HTTP Method**: `POST`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
  - `userPrincipalName` (required): User Principal Name
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.Task`
- **Description**: Configures a sync account to be operational.

---

### `/msServices/{serviceName}/changeContact`

#### **Operation: Change the contacts of this service**

- **HTTP Method**: `POST`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `contactAdmin` (optional): The contact to set as admin contact
    - **Type**: `string`
    - **Param Type**: `body`
    - **Required**: false
  - `contactBilling` (optional): The contact to set as billing contact
    - **Type**: `string`
    - **Param Type**: `body`
    - **Required**: false
  - `contactTech` (optional): The contact to set as tech contact
    - **Type**: `string`
    - **Param Type**: `body`
    - **Required**: false
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `long[]`
- **Description**: Initiates a contact change procedure for the specified service.

---

### `/msServices/{serviceName}/createMfaOnAllUsers`

#### **Operation: Create MFA on all accounts**

- **HTTP Method**: `POST`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.Task`
- **Description**: Creates MFA on all accounts associated with the specified service.

---

### `/msServices/{serviceName}/exchange`

#### **Operation: Get this object properties**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.ExchangeService`
- **Description**: Returns detailed information about an Exchange service.

#### **Operation: Alter this object properties**

- **HTTP Method**: `PUT`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `body` (required): New object properties
    - **Type**: `msServices.ExchangeService`
    - **Param Type**: `body`
    - **Required**: true
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `void`
- **Description**: Updates properties of an Exchange service.

---

### `/msServices/{serviceName}/exchange/billingMigrated`

#### **Operation: Detect billing transition status for the service**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `boolean`
- **Description**: Returns whether billing has been migrated for the specified service.

---

### `/msServices/{serviceName}/exchange/task`

#### **Operation: List the msServices.exchangeTask objects**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `long[]`
- **Description**: Returns a list of pending Exchange tasks for the specified service.

---

### `/msServices/{serviceName}/exchange/task/{id}`

#### **Operation: Get this object properties**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `id` (required): Task id
    - **Type**: `long`
    - **Param Type**: `path`
    - **Required**: true
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.exchangeTask`
- **Description**: Returns detailed information about a specific Exchange task.

---

### `/msServices/{serviceName}/removeMfaOnAllUsers`

#### **Operation: Remove MFA on all accounts**

- **HTTP Method**: `POST`
- **Authentication**: Required
- **API Status**: Stable production version
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.Task`
- **Description**: Removes MFA on all accounts associated with the specified service.

---

### `/msServices/{serviceName}/sharepoint`

#### **Operation: Get this object properties**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.SharepointService`
- **Description**: Returns detailed information about a SharePoint service.

#### **Operation: Alter this object properties**

- **HTTP Method**: `PUT`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `body` (required): New object properties
    - **Type**: `msServices.SharepointService`
    - **Param Type**: `body`
    - **Required**: true
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `void`
- **Description**: Updates properties of a SharePoint service.

---

### `/msServices/{serviceName}/sharepoint/billingMigrated`

#### **Operation: Detect billing transition status for the service**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `boolean`
- **Description**: Returns whether billing has been migrated for the specified SharePoint service.

---

### `/msServices/{serviceName}/sharepoint/license`

#### **Operation: Get active licenses for specific period of time**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `license` (optional): License type
    - **Type**: `msServices.SharepointLicenseEnum`
    - **Param Type**: `query`
    - **Required**: false
  - `period` (required): Period of time used to determine SharePoint account license statistics
    - **Type**: `msServices.LicensePeriodEnum`
    - **Param Type**: `query`
    - **Required**: true
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.SharepointDailyLicense[]`
- **Description**: Returns a list of active SharePoint licenses for the specified period.

---

### `/msServices/{serviceName}/sharepoint/restoreAdminRights`

#### **Operation: Restore administrator rights**

- **HTTP Method**: `POST`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.sharepointTask`
- **Description**: Restores administrator rights for the specified service.

---

### `/msServices/{serviceName}/sharepoint/task`

#### **Operation: List the msServices.sharepointTask objects**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `long[]`
- **Description**: Returns a list of pending SharePoint tasks for the specified service.

---

### `/msServices/{serviceName}/sharepoint/task/{id}`

#### **Operation: Get this object properties**

- **HTTP Method**: `GET`
- **Authentication**: Required
- **API Status**: Deprecated (will be removed on 2024-10-01T00:00:00+01:00)
- **Parameters**:
  - `id` (required): Task id
    - **Type**: `long`
    - **Param Type**: `path`
    - **Required**: true
  - `serviceName` (required): The internal name of your Active Directory organization
    - **Type**: `string`
    - **Param Type**: `path`
    - **Required**: true
- **Response Type**: `msServices.sharepointTask`
- **Description**: Returns detailed information about a specific SharePoint task.

---

## Types & Enums

### `msServices.Account`

Properties of an account object:

- **company**: `string`
- **id**: `long`
- **userPrincipalName**: `string`

---

### `msServices.SharepointService`

Properties of a SharePoint service object:

- **domain**: `string`

---

### `msServices.SharepointServiceInfoWithIAM`

Properties of a SharePoint service info object with IAM:

- **domain**: `string`
- **iamTags**: `map[string][]iam.resource.TagFilter`

---

### `msServices.ExchangeInformation`

Properties of an Exchange information object:

- **userPrincipalName**: `string`
- **exchangeProperties**: `map[string, string>`

---

### `msServices.ExchangeService`

Properties of an Exchange service object:

- **exchangeProperties**: `map[string, string>`

---

### `msServices.Task`

Properties of a task object:

- **id**: `long`
- **status**: `string`
- **description**: `string`

---

### `msServices.MfaInformation`

Properties of an MFA information object:

- **enabled**: `boolean`
- **userPrincipalName**: `string`

---

### `msServices.SyncInformation`

Properties of a sync information object:

- **userPrincipalName**: `string`
- **syncStatus**: `string`

---

### `msServices.ExchangeTask`

Properties of an Exchange task object:

- **id**: `long`
- **exchangeTaskProperties**: `map[string, string>`

---

### `msServices.SharepointInformation`

Properties of a SharePoint information object:

- **userPrincipalName**: `string`
- **sharepointProperties**: `map[string, string>`

---

### `msServices.sharepointTask`

Properties of a SharePoint task object:

- **id**: `long`
- **taskProperties**: `map[string, string>`

---

### `msServices.SyncLicenseEnum`

Possible values for sync license:

- **STANDARD**
- **PREMIUM**

---

### `msServices.SharepointDailyLicense`

Properties of a SharePoint daily license object:

- **date**: `string`
- **licenseCount**: `long`

---

### `msServices.LicensePeriodEnum`

Possible values for license period:

- **DAY**
- **WEEK**
- **MONTH**

---

## IAM Actions

### Required IAM Actions for Endpoints

Each endpoint requires specific IAM actions to be granted to the user executing the request. These actions are listed in the `iamActions` field of each operation.

Example IAM actions:

- `microsoftServices:apiovh:get`
- `microsoftServices:apiovh:exchange/get`
- `microsoftServices:apiovh:account/mfa/create`

---

## Error Handling

All endpoints may return errors in the following format:

```json
{
    "error": {
        "message": "Error message describing the issue",
        "code": 400,
        "details": "Optional additional error details"
    }
}
```

Common error codes:

- **400**: Bad request (invalid parameters)
- **401**: Unauthorized (missing or invalid authentication)
- **403**: Forbidden (insufficient permissions or IAM actions)
- **404**: Not found (resource does not exist)
- **500**: Internal server error

---

## Usage Notes

- **Authentication**: Use the `OVHcloud API` credential type in n8n to authenticate requests.
- **IAM Permissions**: Ensure the executing user has the required IAM actions granted.
- **Deprecation**: Some endpoints are marked as deprecated and will be removed in future API versions. Plan migrations accordingly.
- **Testing**: Manually test endpoints in your n8n instance using the `dev` mode for real-time feedback.

---

## See Also

- [OVHcloud Microsoft Services API Overview](https://api.ovh.com/)
- [n8n OVHcloud Nodes Documentation](https://docs.n8n.io/integrations/core-nodes/n8n-nodes-ovhcloud/)
- [OVHcloud IAM Documentation](https://docs.ovh.com/en/latest/iam/iam.html)

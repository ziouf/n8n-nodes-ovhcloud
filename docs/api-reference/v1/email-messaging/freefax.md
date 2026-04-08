# Freefax API Documentation

## Overview

This document describes the Freefax API operations available for managing fax line accounts, including listing, retrieving, and editing properties, credits, directory information, and voicemail configurations.

## Base URL

```
https://eu.api.ovh.com/v1
```

## Authentication

All Freefax API operations require authentication via the `OVH API` credential type. The authentication is handled through IAM (Identity and Access Management) actions specified for each operation.

## API Status

All operations are marked as `PRODUCTION` status, indicating stable and reliable API endpoints for use in production environments.

---

## Operations

### List Freefax Line Accounts

**Endpoint:** `GET /freefax`

**Description:** List Freefax line accounts with optional filtering on IAM tags.

**Authentication:** Required (`iamTags` parameter)

**Parameters:**

| Name    | Type                                | Param Type | Required | Description                                                                               |
| ------- | ----------------------------------- | ---------- | -------- | ----------------------------------------------------------------------------------------- |
| iamTags | map[string][]iam.resource.TagFilter | query      | No       | Filter resources on IAM tags. Tags that were internally computed are prefixed with `ovh:` |

**Response:** `freefax.FreefaxProperties[]`

**Example:**

```json
{
    "freefax:apiovh:get": {
        "iamTags": {
            "ovh:freefax": [
                {
                    "operator": "EQ",
                    "value": "true"
                }
            ]
        }
    }
}
```

**IAM Actions:**

- `freefax:apiovh:get` (required)

---

### Get Credit Balance Information

**Endpoint:** `GET /freefax/credits`

**Description:** Get the credit balance and the remaining pages available for all Freefax line accounts.

**Authentication:** Required

**Response:** `freefax.BalanceInformations`

**Example:**

```json
{
    "freefax/credits:apiovh:get": {}
}
```

**IAM Actions:**

- `account:apiovh:freefax/credits/get` (required)

---

### Get Freefax Information

**Endpoint:** `GET /freefax/{serviceName}`

**Description:** Retrieve information about a specific Freefax line account.

**Authentication:** Required

**Parameters:**

| Name        | Type        | Param Type | Required | Description                                  |
| ----------- | ----------- | ---------- | -------- | -------------------------------------------- |
| serviceName | phoneNumber | path       | Yes      | The phone number of the Freefax line account |

**Response:** `freefax.FreefaxProperties`

**Example:**

```json
{
    "freefax/{serviceName}:apiovh:get": {
        "serviceName": "0892701020"
    }
}
```

**IAM Actions:**

- `freefax:apiovh:get` (required)

---

### Edit Freefax Properties

**Endpoint:** `PUT /freefax/{serviceName}`

**Description:** Modify the properties of a Freefax line account.

**Authentication:** Required

**Parameters:**

| Name             | Type                          | Param Type | Required | Description                                  |
| ---------------- | ----------------------------- | ---------- | -------- | -------------------------------------------- |
| serviceName      | phoneNumber                   | path       | Yes      | The phone number of the Freefax line account |
| faxMaxCall       | telephony.FaxSendingTriesEnum | body       | Yes      | Number of tries when sending a fax           |
| faxQuality       | telephony.FaxQualityEnum      | body       | No       | Available quality for fax documents          |
| faxTagLine       | string                        | body       | No       | Customised Freefax header                    |
| fromEmail        | string                        | body       | No       | FROM email header                            |
| fromName         | string                        | body       | No       | Name of the sender of the email              |
| redirectionEmail | string[]                      | body       | No       | Email address to redirect fax response       |

**Response:** `void`

**Example:**

```json
{
    "freefax/{serviceName}:apiovh:put": {
        "serviceName": "0892701020",
        "faxMaxCall": 3,
        "faxQuality": "best",
        "faxTagLine": "My Custom Fax Header",
        "fromEmail": "sender@email.com",
        "fromName": "Sender Name",
        "redirectionEmail": ["admin@email.com", "support@email.com"]
    }
}
```

**IAM Actions:**

- `freefax:apiovh:put` (required)

---

### Change Freefax Password

**Endpoint:** `POST /freefax/{serviceName}/changePassword`

**Description:** Generate a new password for a specific Freefax line account.

**Authentication:** Required

**Parameters:**

| Name        | Type        | Param Type | Required | Description                                  |
| ----------- | ----------- | ---------- | -------- | -------------------------------------------- |
| serviceName | phoneNumber | path       | Yes      | The phone number of the Freefax line account |

**Response:** `password`

**Example:**

```json
{
    "freefax/{serviceName}/changePassword:apiovh:post": {
        "serviceName": "0892701020"
    }
}
```

**IAM Actions:**

- `freefax:apiovh:changePassword` (required)

---

### Get Freefax Directory Information

**Endpoint:** `GET /freefax/{serviceName}/directory`

**Description:** Retrieve directory information for a specific Freefax line account.

**Authentication:** Required

**Parameters:**

| Name        | Type        | Param Type | Required | Description                                  |
| ----------- | ----------- | ---------- | -------- | -------------------------------------------- |
| serviceName | phoneNumber | path       | Yes      | The phone number of the Freefax line account |

**Response:** `telephony.DirectoryInfo`

**Example:**

```json
{
    "freefax/{serviceName}/directory:apiovh:get": {
        "serviceName": "0892701020"
    }
}
```

**IAM Actions:**

- `freefax:apiovh:directory/get` (required)

---

### Edit Freefax Directory Information

**Endpoint:** `PUT /freefax/{serviceName}/directory`

**Description:** Update the directory information for a specific Freefax line account.

**Authentication:** Required

**Parameters:**

| Name               | Type                 | Param Type | Required | Description                                       |
| ------------------ | -------------------- | ---------- | -------- | ------------------------------------------------- |
| serviceName        | phoneNumber          | path       | Yes      | The phone number of the Freefax line account      |
| address            | string               | body       | No       | Address of the Freefax line account               |
| addressExtra       | string               | body       | No       | Additional address information                    |
| ape                | string               | body       | No       | Entreprise's category code for directory services |
| city               | string               | body       | No       | City of the Freefax line account                  |
| country            | string               | body       | No       | Country of the Freefax line account               |
| email              | string               | body       | No       | Email address of the Freefax line account         |
| firstName          | string               | body       | No       | First name of the account holder                  |
| gender             | nichandle.GenderEnum | body       | No       | Gender of the account holder                      |
| legalForm          | string               | body       | No       | Legal form of the entreprise                      |
| lineDescription    | string               | body       | No       | Description of the Freefax line                   |
| name               | string               | body       | No       | Name of the Freefax line account                  |
| occupation         | string               | body       | No       | Occupation of the account holder                  |
| postCode           | string               | body       | No       | Postal code of the Freefax line account           |
| receivePJDirectory | boolean              | body       | No       | Receive directory information via email           |
| siret              | string               | body       | No       | SIRET number of the entreprise                    |
| socialNomination   | string               | body       | No       | Social nomination of the account holder           |
| status             | string               | body       | No       | Status of the Freefax line account                |

**Response:** `void`

**Example:**

```json
{
    "freefax/{serviceName}/directory:apiovh:put": {
        "serviceName": "0892701020",
        "address": "123 Rue de Example",
        "addressExtra": "Building B",
        "ape": "1234",
        "city": "Paris",
        "country": "France",
        "email": "contact@example.com",
        "firstName": "John",
        "gender": "male",
        "legalForm": "SARL",
        "lineDescription": "Example Freefax Line",
        "name": "Example Name",
        "occupation": "Manager",
        "postCode": "75001",
        "receivePJDirectory": true,
        "siret": "12345678901234",
        "socialNomination": "Example Social Nomination",
        "status": "active"
    }
}
```

**IAM Actions:**

- `freefax:apiovh:directory/edit` (required)

---

### Fetch Entreprise Information

**Endpoint:** `POST /freefax/{serviceName}/directory/fetchEntrepriseInformations`

**Description:** Get enterprise information by providing an enterprise number.

**Authentication:** Required

**Parameters:**

| Name             | Type                       | Param Type | Required | Description                                  |
| ---------------- | -------------------------- | ---------- | -------- | -------------------------------------------- |
| serviceName      | phoneNumber                | path       | Yes      | The phone number of the Freefax line account |
| entrepriseNumber | telephony.EntrepriseNumber | body       | Yes      | Enterprise number to fetch information from  |

**Response:** `telephony.EntrepriseNumberInformationsTask`

**Example:**

```json
{
    "freefax/{serviceName}/directory/fetchEntrepriseInformations:apiovh:post": {
        "serviceName": "0892701020",
        "entrepriseNumber": {
            "entrepriseNumber": "12345678901234"
        }
    }
}
```

**IAM Actions:**

- `freefax:apiovh:directory/fetchEntrepriseInformations` (required)

---

### Get Directory Service Code from APE Code

**Endpoint:** `GET /freefax/{serviceName}/directory/getDirectoryServiceCode`

**Description:** Retrieve directory service code information from a provided APE code (principal activity of the firm code).

**Authentication:** Required

**Parameters:**

| Name        | Type        | Param Type | Required | Description                                  |
| ----------- | ----------- | ---------- | -------- | -------------------------------------------- |
| serviceName | phoneNumber | path       | Yes      | The phone number of the Freefax line account |
| apeCode     | string      | query      | Yes      | The APE code to search for                   |

**Response:** `telephony.DirectoryHeadingPJ[]`

**Example:**

```json
{
    "freefax/{serviceName}/directory/getDirectoryServiceCode:apiovh:get": {
        "serviceName": "0892701020",
        "apeCode": "1234"
    }
}
```

**IAM Actions:**

- `freefax:apiovh:directory/getDirectoryServiceCode` (required)

- --\n

### Get All Way Types

**Endpoint:** `GET /freefax/{serviceName}/directory/getWayTypes`

**Description:** Retrieve all available way types for a Freefax line account.

**Authentication:** Required

**Parameters:**

| Name        | Type        | Param Type | Required | Description                                  |
| ----------- | ----------- | ---------- | -------- | -------------------------------------------- |
| serviceName | phoneNumber | path       | Yes      | The phone number of the Freefax line account |

**Response:** `telephony.DirectoryWayType[]`

**Example:**

```json
{
    "freefax/{serviceName}/directory/getWayTypes:apiovh:get": {
        "serviceName": "0892701020"
    }
}
```

**IAM Actions:**

- `freefax:apiovh:directory/getWayTypes` (required)

- --\n

### Get Main Service Attached to Freefax

**Endpoint:** `GET /freefax/{serviceName}/mainService`

**Description:** Retrieve the main service attached to a specific Freefax line account.

**Authentication:** Required

**Parameters:**

| Name        | Type        | Param Type | Required | Description                                  |
| ----------- | ----------- | ---------- | -------- | -------------------------------------------- |
| serviceName | phoneNumber | path       | Yes      | The phone number of the Freefax line account |

**Response:** `string`

**Example:**

```json
{
    "freefax/{serviceName}/mainService:get": {
        "serviceName": "0892701020"
    }
}
```

**IAM Actions:**

- `freefax:apiovh:mainService/get` (required)

- --\n

### Get Service Information

**Endpoint:** `GET /freefax/{serviceName}/serviceInfos`

**Description:** Retrieve detailed service information for a specific Freefax line account.

**Authentication:** Required

**Parameters:**

| Name        | Type        | Param Type | Required | Description                                  |
| ----------- | ----------- | ---------- | -------- | -------------------------------------------- |
| serviceName | phoneNumber | path       | Yes      | The phone number of the Freefax line account |

**Response:** `services.Service`

**Example:**

```json
{
    "freefax/{serviceName}/serviceInfos:get": {
        "serviceName": "0892701020"
    }
}
```

**IAM Actions:**

- `freefax:apiovh:serviceInfos/get` (required)

- --\n

### Update Service Information

**Endpoint:** `PUT /freefax/{serviceName}/serviceInfos`

**Description:** Modify service information for a specific Freefax line account.

**Authentication:** Required

**Parameters:**

| Name                | Type              | Param Type | Required | Description                                  |
| ------------------- | ----------------- | ---------- | -------- | -------------------------------------------- |
| serviceName         | phoneNumber       | path       | Yes      | The phone number of the Freefax line account |
| contactAdmin        | string            | body       | No       | Contact email for administrative purposes    |
| contactBilling      | string            | body       | No       | Contact email for billing purposes           |
| contactTech         | string            | body       | No       | Contact email for technical purposes         |
| domain              | string            | body       | No       | Domain associated with the service           |
| engagedUpTo         | date              | body       | No       | Date until which the service is engaged      |
| expiration          | date              | body       | No       | Expiration date of the service               |
| possibleRenewPeriod | long[]            | body       | No       | Possible renewal periods for the service     |
| renew               | service.RenewType | body       | No       | Renewal type and configuration               |

**Response:** `void`

**Example:**

```json
{
    "freefax/{serviceName}/serviceInfos:apiovh:put": {
        "serviceName": "0892701020",
        "contactAdmin": "admin@email.com",
        "contactBilling": "billing@email.com",
        "contactTech": "tech@email.com",
        "domain": "example.com",
        "engagedUpTo": "2026-03-31T00:00:00Z",
        "expiration": "2026-03-31T00:00:00Z",
        "possibleRenewPeriod": [6, 12],
        "renew": {
            "automatic": true,
            "deleteAtExpiration": false,
            "forced": false,
            "manualPayment": false,
            "period": 12
        }
    }
}
```

**IAM Actions:**

- `freefax:apiovh:serviceInfos/edit` (required)

- --\n

### Get Voicemail Properties

**Endpoint:** `GET /freefax/{serviceName}/voicemail`

**Description:** Retrieve voicemail properties for a specific Freefax line account.

**Authentication:** Required

**Parameters:**

| Name        | Type        | Param Type | Required | Description                                  |
| ----------- | ----------- | ---------- | -------- | -------------------------------------------- |
| serviceName | phoneNumber | path       | Yes      | The phone number of the Freefax line account |

**Response:** `telephony.VoicemailProperties`

**Example:**

```json
{
    "freefax/{serviceName}/voicemail:get": {
        "serviceName": "0892701020"
    }
}
```

**IAM Actions:**

- `freefax:apiovh:voicemail/get` (required)

- --\n

### Edit Voicemail Properties

**Endpoint:** `PUT /freefax/{serviceName}/voicemail`

**Description:** Modify voicemail properties for a specific Freefax line account.

**Authentication:** Required

**Parameters:**

| Name                       | Type                                      | Param Type | Required | Description                                                   |
| -------------------------- | ----------------------------------------- | ---------- | -------- | ------------------------------------------------------------- |
| serviceName                | phoneNumber                               | path       | Yes      | The phone number of the Freefax line account                  |
| audioFormat                | telephony.ServiceVoicemailAudioFormatEnum | body       | No       | Voicemail audio format                                        |
| doNotRecord                | boolean                                   | body       | No       | Don't allow callers to leave voicemails                       |
| forcePassword              | boolean                                   | body       | No       | Force password request to access the voicemail panel          |
| fromEmail                  | string                                    | body       | No       | Email address from which voicemail notifications will be sent |
| fromName                   | string                                    | body       | No       | Name from which voicemail notifications will be sent          |
| fullGreetingSoundId        | long                                      | body       | No       | Sound ID of the full greeting                                 |
| greetingType               | telephony.VoicemailGreetingEnum           | body       | No       | Greeting type                                                 |
| keepMessage                | boolean                                   | body       | No       | Don't delete voicemails after they've been sent by email      |
| redirectionEmails          | telephony.ServiceVoicemailNotifications[] | body       | No       | Email addresses to notify when a new voicemail is left        |
| shortGreetingSoundId       | long                                      | body       | No       | Sound ID of the short greeting                                |
| temporaryGreetingActivated | boolean                                   | body       | No       | Play the temporary greeting instead of the regular one        |
| temporaryGreetingSoundId   | long                                      | body       | No       | Sound ID of the temporary greeting                            |
| unreadMessages             | long                                      | body       | No       | Number of unread voicemails                                   |

**Response:** `void`

**Example:**

```json
{
    "freefax/{serviceName}/voicemail:apiovh:put": {
        "serviceName": "0892701020",
        "audioFormat": "mp3",
        "doNotRecord": false,
        "forcePassword": true,
        "fromEmail": "voicemail@email.com",
        "fromName": "Voicemail Service",
        "fullGreetingSoundId": 12345,
        "greetingType": "default",
        "keepMessage": false,
        "redirectionEmails": [
            {
                "email": "admin@email.com",
                "type": "attachment"
            }
        ],
        "shortGreetingSoundId": 67890,
        "temporaryGreetingActivated": false,
        "temporaryGreetingSoundId": null,
        "unreadMessages": 0
    }
}
```

**IAM Actions:**

- `freefax:apiovh:voicemail/edit` (required)

- --\n

### Change Voicemail Password

**Endpoint:** `POST /freefax/{serviceName}/voicemail/changePassword`

**Description:** Change the voicemail password for a specific Freefax line account. The password must be 4 digits.

**Authentication:** Required

**Parameters:**

| Name        | Type        | Param Type | Required | Description                                  |
| ----------- | ----------- | ---------- | -------- | -------------------------------------------- |
| serviceName | phoneNumber | path       | Yes      | The phone number of the Freefax line account |
| password    | string      | body       | Yes      | The new 4-digit password                     |

**Response:** `void`

**Example:**

```json
{
    "freefax/{serviceName}/voicemail/changePassword:apiovh:post": {
        "serviceName": "0892701020",
        "password": "1234"
    }
}
```

**IAM Actions:**

- `freefax:apiovh:voicemail/changePassword` (required)

- --\n

### Change Voicemail Routing

**Endpoint:** `POST /freefax/{serviceName}/voicemail/changeRouting`

**Description:** Enable or disable voicemail routing for a specific Freefax line account. Available only if the line has fax capabilities.

**Authentication:** Required

**Parameters:**

| Name        | Type                          | Param Type | Required | Description                                         |
| ----------- | ----------------------------- | ---------- | -------- | --------------------------------------------------- |
| serviceName | phoneNumber                   | path       | Yes      | The phone number of the Freefax line account        |
| routing     | telephony.VoicefaxRoutingEnum | body       | Yes      | Voicemail routing status (e.g., "fax", "voicemail") |

**Response:** `void`

**Example:**

```json
{
    "freefax/{serviceName}/voicemail/changeRouting:apiovh:post": {
        "serviceName": "0892701020",
        "routing": "voicemail"
    }
}
```

**IAM Actions:**

- `freefax:apiovh:voicemail/changeRouting` (required)

- --\

### Get Voicemail Routing Status

**Endpoint:** `GET /freefax/{serviceName}/voicemail/routing`

**Description:** Retrieve the current routing status (enabled/disabled) for voicemail on a specific Freefax line account. Available only if the line has fax capabilities.

**Authentication:** Required

**Parameters:**

| Name        | Type        | Param Type | Required | Description                                  |
| ----------- | ----------- | ---------- | -------- | -------------------------------------------- |
| serviceName | phoneNumber | path       | Yes      | The phone number of the Freefax line account |

**Response:** `telephony.VoicefaxRoutingEnum`

**Example:**

```json
{
    "freefax/{serviceName}/voicemail/routing:get": {
        "serviceName": "0892701020"
    }
}
```

**IAM Actions:**

- `freefax:apiovh:voicemail/routing/get` (required)

- --\n

### Get Voicemail Numbers

**Endpoint:** `GET /freefax/{serviceName}/voicemail/voicemailNumbers`

**Description:** Retrieve internal and external voicemail numbers for a specific Freefax line account.

**Authentication:** Required

**Parameters:**

| Name        | Type        | Param Type | Required | Description                                  |
| ----------- | ----------- | ---------- | -------- | -------------------------------------------- |
| serviceName | phoneNumber | path       | Yes      | The phone number of the Freefax line account |

**Response:** `telephony.VoicemailNumbers`

**Example:**

```json
{
    "freefax/{serviceName}/voicemail/voicemailNumbers:get": {
        "serviceName": "0892701020"
    }
}
```

**IAM Actions:**

- `freefax:apiovh:voicemail/voicemailNumbers/get` (required)

- --\n

## Models

### BalanceInformations

**Description:** Structure containing credit balance information for Freefax line accounts.

**Properties:**

| Property | Type | Can Be Null | Read Only | Description                                      |
| -------- | ---- | ----------- | --------- | ------------------------------------------------ |
| faxs     | long | No          | Yes       | The number of equivalement remaining french faxs |
| points   | long | No          | Yes       | Total balance available in points                |

**Example:**

```json
{
    "faxs": 100,
    "points": 500
}
```

- --\n

### FreefaxProperties

**Description:** Properties of a Freefax line account.

**Properties:**

| Property         | Type                          | Can Be Null | Read Only | Description                            |
| ---------------- | ----------------------------- | ----------- | --------- | -------------------------------------- |
| faxMaxCall       | telephony.FaxSendingTriesEnum | No          | No        | Number of tries when sending a fax     |
| faxQuality       | telephony.FaxQualityEnum      | No          | No        | Available quality for fax documents    |
| faxTagLine       | string                        | No          | No        | Customised freefax header              |
| fromEmail        | string                        | No          | No        | FROM email header                      |
| fromName         | string                        | No          | No        | Name of the sender of the email        |
| number           | phoneNumber                   | No          | Yes       | Phone number                           |
| redirectionEmail | string[]                      | No          | No        | Email address to redirect fax response |

**Example:**

```json
{
    "faxMaxCall": 3,
    "faxQuality": "best",
    "faxTagLine": "My Custom Fax Header",
    "fromEmail": "sender@email.com",
    "fromName": "Sender Name",
    "number": "0892701020",
    "redirectionEmail": ["admin@email.com", "support@email.com"]
}
```

- --\n

### FreefaxPropertiesWithIAM

**Description:** Freefax properties with embedded IAM resource metadata.

**Properties:**

| Property         | Type                          | Can Be Null | Read Only | Description                            |
| ---------------- | ----------------------------- | ----------- | --------- | -------------------------------------- |
| faxMaxCall       | telephony.FaxSendingTriesEnum | No          | No        | Number of tries when sending a fax     |
| faxQuality       | telephony.FaxQualityEnum      | No          | No        | Available quality for fax documents    |
| faxTagLine       | string                        | No          | No        | Customised freefax header              |
| fromEmail        | string                        | No          | No        | FROM email header                      |
| fromName         | string                        | No          | No        | Name of the sender of the email        |
| iam              | iam.ResourceMetadata          | Yes         | Yes       | IAM resource metadata                  |
| number           | phoneNumber                   | No          | Yes       | Phone number                           |
| redirectionEmail | string[]                      | No          | No        | Email address to redirect fax response |

**Example:**

```json
{
    "faxMaxCall": 3,
    "faxQuality": "best",
    "faxTagLine": "My Custom Fax Header",
    "fromEmail": "sender@email.com",
    "fromName": "Sender Name",
    "iam": {
        "displayName": "My Freefax",
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "state": "OK",
        "tags": {},
        "urn": "freefax:0892701020"
    },
    "number": "0892701020",
    "redirectionEmail": ["admin@email.com", "support@email.com"]
}
```

- --\n

### ResourceMetadata

**Description:** IAM resource metadata embedded in services models.

**Properties:**

| Property    | Type                           | Can Be Null | Read Only | Description                                                                |
| ----------- | ------------------------------ | ----------- | --------- | -------------------------------------------------------------------------- |
| displayName | string                         | Yes         | Yes       | Resource display name                                                      |
| id          | uuid                           | No          | Yes       | Unique identifier of the resource                                          |
| state       | iam.ResourceMetadata.StateEnum | Yes         | Yes       | Resource state                                                             |
| tags        | map[string]string              | Yes         | Yes       | Resource tags. Tags that were internally computed are prefixed with `ovh:` |
| urn         | string                         | No          | Yes       | Unique resource name used in policies                                      |

**Example:**

```json
{
    "displayName": "My Freefax",
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "state": "OK",
    "tags": {},
    "urn": "freefax:0892701020"
}
```

- --\n

### TagFilter

**Description:** Resource tag filter for IAM operations.

**Properties:**

| Property | Type                                | Can Be Null | Read Only | Description                                                        |
| -------- | ----------------------------------- | ----------- | --------- | ------------------------------------------------------------------ |
| operator | iam.resource.TagFilter.OperatorEnum | Yes         | Yes       | Operator to use in order to filter on the value (defaults to 'EQ') |
| value    | string                              | No          | Yes       | Value to use in order to filter tags                               |

**Example:**

```json
{
    "operator": "EQ",
    "value": "true"
}
```

- --\n

### OperatorEnum

**Description:** Operator that can be used in order to filter resources tags.

**Enum Values:**

- `EQ`: Exact match
- `EXISTS`: Tag exists
- `ILIKE`: Case-insensitive like
- `LIKE`: Like match
- `NEQ`: Not equal
- `NEXISTS`: Tag does not exist

- --\

### EntrepriseNumberInformationsTask

**Description:** Task about getting entreprise information.

**Properties:**

| Property     | Type                                   | Can Be Null | Read Only | Description                          |
| ------------ | -------------------------------------- | ----------- | --------- | ------------------------------------ |
| informations | telephony.EntrepriseNumberInformations | No          | Yes       | Task information about an entreprise |
| status       | telephony.TaskStatusEnum               | No          | Yes       | Task status                          |

**Example:**

```json
{
    "informations": {
        "address": "123 Rue de Example",
        "ape": "1234",
        "brand": "Example Brand",
        "entrepriseNumber": "12345678901234",
        "isValid": true,
        "name": "Example Name"
    },
    "status": "done"
}
```

---

### TaskStatusEnum

**Description:** Possible status values for a task.

**Enum Values:**

- `doing`: Task is in progress
- `done`: Task completed successfully
- `error`: Task encountered an error
- `pause`: Task is paused
- `todo`: Task is pending

---

### ServiceVoicemailNotifications

**Description:** Voicemail notification configuration.

**Properties:**

| Property | Type                                     | Can Be Null | Read Only | Description                                                 |
| -------- | ---------------------------------------- | ----------- | --------- | ----------------------------------------------------------- |
| email    | string                                   | No          | No        | Email address to send notifications to                      |
| type     | telephony.ServiceVoicemailMailOptionEnum | No          | No        | Voicemail configuration type (e.g., "attachment", "simple") |

**Example:**

```json
{
    "email": "admin@email.com",
    "type": "attachment"
}
```

---

### ServiceVoicemailMailOptionEnum

**Description:** Voicemail configuration options.

**Enum Values:**

- `attachment`: Notifications sent as attachments
- `simple`: Notifications sent in simple format

---

### VoicemailGreetingEnum

**Description:** Greeting type options for voicemail.

**Enum Values:**

- `default`: Default greeting
- `full`: Full greeting
- `short`: Short greeting

---

### DirectoryHeadingPJ

**Description:** Directory information for a Freefax line account.

**Properties:**

| Property                    | Type   | Can Be Null | Read Only | Description                                |
| --------------------------- | ------ | ----------- | --------- | ------------------------------------------ |
| apeCode                     | string | No          | Yes       | APE code for directory services            |
| apeDescription              | string | No          | Yes       | Description of the APE code                |
| directoryServiceCode        | long   | No          | Yes       | Directory service code                     |
| directoryServiceDescription | string | No          | Yes       | Description of the directory service       |
| notification                | string | No          | Yes       | Notification associated with the directory |

**Example:**

```json
{
    "apeCode": "1234",
    "apeDescription": "Example Description",
    "directoryServiceCode": 12345,
    "directoryServiceDescription": "Example Directory Service",
    "notification": "Example Notification"
}
```

---

### DirectoryInfo

**Description:** Directory information for a Freefax line account.

**Properties:**

| Property                  | Type                 | Can Be Null | Read Only | Description                                |
| ------------------------- | -------------------- | ----------- | --------- | ------------------------------------------ |
| PJSocialNomination        | string               | No          | No        | Social nomination of the account holder    |
| address                   | string               | No          | No        | Address of the Freefax line account        |
| addressExtra              | string               | No          | No        | Additional address information             |
| ape                       | string               | No          | No        | APE code for directory services            |
| birthDate                 | date                 | No          | No        | Birth date of the account holder           |
| cedex                     | string               | No          | No        | Cedex code (French postal service)         |
| city                      | string               | No          | No        | City of the Freefax line account           |
| country                   | string               | No          | No        | Country of the Freefax line account        |
| directoryServiceCode      | string               | No          | No        | Directory service code                     |
| displayFirstName          | boolean              | No          | No        | Display first name of the account holder   |
| displayMarketingDirectory | boolean              | No          | No        | Display marketing directory                |
| displayOnlyCity           | boolean              | No          | No        | Display only city                          |
| displaySearchReverse      | boolean              | No          | No        | Display search reverse                     |
| displayUniversalDirectory | boolean              | No          | No        | Display universal directory                |
| email                     | string               | No          | No        | Email address of the Freefax line account  |
| firstName                 | string               | No          | No        | First name of the account holder           |
| gender                    | nichandle.GenderEnum | No          | No        | Gender of the account holder               |
| inseeCode                 | long                 | No          | No        | INSEE code (French geographic code)        |
| legalForm                 | string               | No          | No        | Legal form of the entreprise               |
| lineDescription           | string               | No          | No        | Description of the Freefax line            |
| modificationDate          | date                 | No          | Yes       | Date when the directory was last modified  |
| modificationType          | string               | No          | Yes       | Type of modification                       |
| name                      | string               | No          | No        | Name of the Freefax line account           |
| occupation                | string               | No          | No        | Occupation of the account holder           |
| postBox                   | string               | No          | No        | Post box number                            |
| postCode                  | string               | No          | No        | Postal code of the Freefax line account    |
| receivePJDirectory        | boolean              | No          | No        | Receive directory information via email    |
| siret                     | string               | No          | No        | SIRET number of the entreprise             |
| socialNomination          | string               | No          | No        | Social nomination of the account holder    |
| socialNominationExtra     | string               | No          | No        | Additional social nomination               |
| status                    | string               | No          | No        | Status of the Freefax line account         |
| urbanDistrict             | string               | No          | No        | Urban district of the Freefax line account |
| wayName                   | string               | No          | No        | Way name (street/avenue)                   |
| wayNumber                 | string               | No          | No        | Way number                                 |
| wayNumberExtra            | string               | No          | No        | Additional way number                      |
| wayType                   | string               | No          | No        | Way type                                   |

**Example:**

```json
{
    "PJSocialNomination": "Example Social Nomination",
    "address": "123 Rue de Example",
    "addressExtra": "Building B",
    "ape": "1234",
    "birthDate": "1980-01-01",
    "cedex": "",
    "city": "Paris",
    "country": "France",
    "displayFirstName": false,
    "displayMarketingDirectory": false,
    "displayOnlyCity": false,
    "displaySearchReverse": false,
    "displayUniversalDirectory": false,
    "email": "contact@example.com",
    "firstName": "John",
    "gender": "male",
    "inseeCode": 75001,
    "legalForm": "SARL",
    "lineDescription": "Example Freefax Line",
    "modificationDate": "2026-03-31T00:00:00Z",
    "modificationType": "update",
    "name": "Example Name",
    "occupation": "Manager",
    "postBox": "",
    "postCode": "75001",
    "receivePJDirectory": false,
    "siret": "12345678901234",
    "socialNomination": "Example Social Nomination",
    "socialNominationExtra": "",
    "status": "active",
    "urbanDistrict": "",
    "wayName": "Example Way",
    "wayNumber": "123",
    "wayNumberExtra": "",
    "wayType": "avenue"
}
```

---

### DirectoryWayType

**Description:** Directory way type information.

**Properties:**

| Property        | Type   | Can Be Null | Read Only | Description                      |
| --------------- | ------ | ----------- | --------- | -------------------------------- |
| abbreviatedName | string | No          | Yes       | Abbreviated name of the way type |
| wayName         | string | No          | Yes       | Full name of the way type        |

**Example:**

```json
{
    "abbreviatedName": "Ave.",
    "wayName": "Avenue"
}
```

---

### VoicemailProperties

**Description:** Voicemail properties for a Freefax line account.

**Properties:**

| Property                   | Type                                      | Can Be Null | Read Only | Description                                                       |
| -------------------------- | ----------------------------------------- | ----------- | --------- | ----------------------------------------------------------------- |
| announceMessage            | string                                    | No          | Yes       | Name of the voicemail panel announce file                         |
| audioFormat                | telephony.ServiceVoicemailAudioFormatEnum | No          | No        | Voicemail audio format                                            |
| doNotRecord                | boolean                                   | No          | No        | Don't allow callers to leave voicemails                           |
| forcePassword              | boolean                                   | No          | No        | Force password request to access the voicemail panel              |
| fromEmail                  | string                                    | No          | No        | Email address from which voicemail notifications will be sent     |
| fromName                   | string                                    | No          | No        | Name from which voicemail notifications will be sent              |
| fullGreetingSoundId        | long                                      | No          | Yes       | Sound ID of the long greeting                                     |
| greetingType               | telephony.VoicemailGreetingEnum           | No          | No        | Greeting type                                                     |
| isNewVersion               | boolean                                   | No          | Yes       | Current voicemail version                                         |
| keepMessage                | boolean                                   | No          | No        | Don't delete voicemails after they've been sent by email          |
| redirectionEmails          | telephony.ServiceVoicemailNotifications[] | No          | No        | Email addresses to notify when a new voicemail is left            |
| shortGreetingSoundId       | long                                      | No          | Yes       | Sound ID of the short greeting played before an automated message |
| temporaryGreetingActivated | boolean                                   | No          | No        | Play the temporary greeting instead of the regular one            |
| temporaryGreetingSoundId   | long                                      | No          | Yes       | Sound ID of the temporary greeting                                |
| unreadMessages             | long                                      | No          | No        | Number of unread voicemails                                       |

**Example:**

```json
{
    "announceMessage": "voicemail_announce",
    "audioFormat": "mp3",
    "doNotRecord": false,
    "forcePassword": true,
    "fromEmail": "voicemail@email.com",
    "fromName": "Voicemail Service",
    "fullGreetingSoundId": 12345,
    "greetingType": "default",
    "isNewVersion": true,
    "keepMessage": false,
    "redirectionEmails": [
        {
            "email": "admin@email.com",
            "type": "attachment"
        }
    ],
    "shortGreetingSoundId": 67890,
    "temporaryGreetingActivated": false,
    "temporaryGreetingSoundId": null,
    "unreadMessages": 0
}
```

---

### ServiceVoicemailAudioFormatEnum

**Description:** Supported audio formats for voicemail.

**Enum Values:**

- `aiff`
- `au`
- `flac`
- `mp3`
- `ogg`
- `wav`

---

### VoicemailNumbers

**Description:** Internal and external numbers for voicemail service.

**Properties:**

| Property | Type   | Can Be Null | Read Only | Description                   |
| -------- | ------ | ----------- | --------- | ----------------------------- |
| external | string | No          | Yes       | The external voicemail number |
| internal | string | No          | Yes       | The internal voicemail number |

**Example:**

```json
{
    "external": "+33123456789",
    "internal": "123456789"
}
```

---

## Error Handling

All API operations may return errors in the following format:

```json
{
    "message": "Error description",
    "status": "error"
}
```

Common error cases include:

- **Invalid serviceName**: The phone number does not correspond to a valid Freefax line account.
- **Missing IAM permissions**: The authenticated user does not have the required IAM actions to perform the operation.
- **Invalid parameters**: The provided parameters do not match the expected schema or constraints (e.g., password must be 4 digits).

---

## Notes

- All operations are versioned under `apiVersion: 1.0` in the API definition.
- The `freefax` resource path is `/freefax`.
- All operations are scoped to the `eu.api.ovh.com` region.
- The `models` section defines all data structures used in requests and responses.

---

## References

- [OVH API Documentation](https://api.ovh.com)
- [IAM Resource Metadata](https://docs.ovh.com/en/public/api/iam/)
- [Freefax Overview](https://www.ovhcloud.com/en/public-cloud/telephony/freefax/)

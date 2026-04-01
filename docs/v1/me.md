# OVHcloud Account API - `/me` Endpoint

**Version**: 1.0
**Status**: Stable production version (`PRODUCTION`)
**Last updated**: 2026-03-31

---

## Overview

The `/me` endpoint provides access to account-related operations for managing your **nichandle** (OVHcloud account identifier) and access restrictions. It is part of the **OVHcloud Account API** and requires authentication unless specified otherwise.

---

## Available Operations

### 1. Get Account Details

- **HTTP Method**: `GET`
- **Path**: `/me`
- **Operation ID**: `getAccountDetails`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `nichandle.Nichandle`
- **Description**: Retrieve details about your nichandle.

#### IAM Actions

| Action                  | Required |
| ----------------------- | -------- |
| `account:apiovh:me/get` | ✅ Yes   |

#### Parameters

None.

---

### 2. Update Account Details

- **HTTP Method**: `PUT`
- **Path**: `/me`
- **Operation ID**: `editAccountDetails`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Description**: Update the details of your nichandle.

#### IAM Actions

| Action                   | Required |
| ------------------------ | -------- |
| `account:apiovh:me/edit` | ✅ Yes   |

#### Parameters

| Parameter | Type                  | Required | Description                                           |
| --------- | --------------------- | -------- | ----------------------------------------------------- |
| `body`    | `nichandle.Nichandle` | ✅ Yes   | Request Body containing the new properties to update. |

---

### 3. Retrieve Abuse Cases List

- **HTTP Method**: `GET`
- **Path**: `/me/abuse`
- **Status**: Beta version (`BETA`)
- **Authentication**: Required
- **Response Type**: `string[]`
- **Description**: Retrieve a list of abuse cases related to your account.

#### IAM Actions

| Action                        | Required |
| ----------------------------- | -------- |
| `account:apiovh:me/abuse/get` | ✅ Yes   |

#### Parameters

None.

---

### 4. Check Specific Abuse Case

- **HTTP Method**: `GET`
- **Path**: `/me/abuse/{id}`
- **Status**: Beta version (`BETA`)
- **Authentication**: Required
- **Response Type**: `me.abuse.Abuse`
- **Operation ID**: `checkAbuseCase`

#### IAM Actions

| Action                        | Required |
| ----------------------------- | -------- |
| `account:apiovh:me/abuse/get` | ✅ Yes   |

#### Parameters

| Parameter | Type     | Required | Description                        |
| --------- | -------- | -------- | ---------------------------------- |
| `id`      | `string` | ✅ Yes   | The ID of the abuse case to check. |

---

### 5. SOTP Two-Factor Authentication

#### a. Add a SOTP Access Restriction

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/backupCode`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `nichandle.accessRestriction.SOTPSecret`
- **Operation ID**: `addSOTPSecret`

#### IAM Actions

| Action                                                  | Required |
| ------------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/backupCode/create` | ✅ Yes   |

#### Parameters

| Parameter | Type       | Required | Description                               |
| --------- | ---------- | -------- | ----------------------------------------- |
| `code`    | `password` | ✅ Yes   | The OTP code provided by the application. |

---

#### b. Disable SOTP Access Restriction

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/backupCode/disable`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `disableSOTPAccount`

#### IAM Actions

| Action                                                   | Required |
| -------------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/backupCode/disable` | ✅ Yes   |

#### Parameters

| Parameter | Type       | Required | Description                               |
| --------- | ---------- | -------- | ----------------------------------------- |
| `code`    | `password` | ✅ Yes   | The OTP code provided by the application. |

---

#### c. Enable SOTP Access Restriction

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/backupCode/enable`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `enableSOTPAccount`

#### IAM Actions

| Action                                                  | Required |
| ------------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/backupCode/enable` | ✅ Yes   |

#### Parameters

| Parameter | Type       | Required | Description                               |
| --------- | ---------- | -------- | ----------------------------------------- |
| `code`    | `password` | ✅ Yes   | The OTP code provided by the application. |

---

#### d. Validate SOTP Access Restriction

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/backupCode/validate`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `nichandle.accessRestriction.SOTPValidate`
- **Operation ID**: `validateSOTPAccount`

#### IAM Actions

| Action                                                    | Required |
| --------------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/backupCode/validate` | ✅ Yes   |

#### Parameters

| Parameter | Type       | Required | Description                               |
| --------- | ---------- | -------- | ----------------------------------------- |
| `code`    | `password` | ✅ Yes   | The OTP code provided by the application. |

---

### 6. Developer Mode Access Restriction

#### a. Get Developer Mode Restriction Properties

- **HTTP Method**: `GET`
- **Path**: `/me/accessRestriction/developerMode`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `nichandle.DeveloperModeRestriction`
- **Operation ID**: `getDeveloperModeRestriction`

#### IAM Actions

| Action                                                  | Required |
| ------------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/developerMode/get` | ✅ Yes   |

#### Parameters

None.

---

#### b. Update Developer Mode Restriction Properties

- **HTTP Method**: `PUT`
- **Path**: `/me/accessRestriction/developerMode`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `editDeveloperModeRestriction`

#### IAM Actions

| Action                                                   | Required |
| -------------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/developerMode/edit` | ✅ Yes   |

#### Parameters

| Parameter | Type                                 | Required | Description                                           |
| --------- | ------------------------------------ | -------- | ----------------------------------------------------- |
| `body`    | `nichandle.DeveloperModeRestriction` | ✅ Yes   | Request Body containing the new properties to update. |

---

### 7. IP Access Restrictions

#### a. List IP Restrictions

- **HTTP Method**: `GET`
- **Path**: `/me/accessRestriction/ip`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `long[]`
- **Operation ID**: `listIpRestrictions`
- **Description**: Retrieve a list of IP restrictions applied to your account.

#### IAM Actions

| Action                                       | Required |
| -------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/ip/get` | ✅ Yes   |

#### Parameters

None.

---

#### b. Get Specific IP Restriction Properties

- **HTTP Method**: `GET`
- **Path**: `/me/accessRestriction/ip/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `nichandle.IpRestriction`
- **Operation ID**: `getIpRestriction`

#### IAM Actions

| Action                                       | Required |
| -------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/ip/get` | ✅ Yes   |

#### Parameters

| Parameter | Type   | Required | Description                               |
| --------- | ------ | -------- | ----------------------------------------- |
| `id`      | `long` | ✅ Yes   | The ID of the IP restriction to retrieve. |

---

#### c. Add IP Access Restriction

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/ip`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `addIpRestriction`
- **Description**: Add a new IP access restriction to your account.

#### IAM Actions

| Action                                          | Required |
| ----------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/ip/create` | ✅ Yes   |

#### Parameters

| Parameter | Type                                                | Required | Description                                                       |
| --------- | --------------------------------------------------- | -------- | ----------------------------------------------------------------- |
| `ip`      | `ipBlock`                                           | ✅ Yes   | The IP range to apply the restriction to.                         |
| `rule`    | `nichandle.accessRestriction.IpRestrictionRuleEnum` | ✅ Yes   | The rule to apply (accept or deny).                               |
| `warning` | `boolean`                                           | ✅ Yes   | Whether to send an email if someone tries to access with this IP. |

---

#### d. Delete IP Access Restriction

- **HTTP Method**: `DELETE`
- **Path**: `/me/accessRestriction/ip/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `deleteIpRestriction`
- **Description**: Remove an IP access restriction from your account.

#### IAM Actions

| Action                                          | Required |
| ----------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/ip/delete` | ✅ Yes   |

#### Parameters

| Parameter | Type   | Required | Description                             |
| --------- | ------ | -------- | --------------------------------------- |
| `id`      | `long` | ✅ Yes   | The ID of the IP restriction to delete. |

---

#### e. Update IP Access Restriction Properties

- **HTTP Method**: `PUT`
- **Path**: `/me/accessRestriction/ip/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `editIpRestriction`

#### IAM Actions

| Action                                        | Required |
| --------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/ip/edit` | ✅ Yes   |

#### Parameters

| Parameter | Type                      | Required | Description                                           |
| --------- | ------------------------- | -------- | ----------------------------------------------------- |
| `body`    | `nichandle.IpRestriction` | ✅ Yes   | Request Body containing the new properties to update. |
| `id`      | `long`                    | ✅ Yes   | The ID of the IP restriction to update.               |

---

### 8. IP Restriction Default Rule

#### a. Get Default Rule Properties

- **HTTP Method**: `GET`
- **Path**: `/me/accessRestriction/ipDefaultRule`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `nichandle.IpRestrictionDefaultRule`
- **Operation ID**: `getIpRestrictionDefaultRule`
- **Description**: Retrieve the default rule for IP access restrictions.

#### IAM Actions

| Action                                                  | Required |
| ------------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/ipDefaultRule/get` | ✅ Yes   |

#### Parameters

None.

---

#### b. Update Default Rule Properties

- **HTTP Method**: `PUT`
- **Path**: `/me/accessRestriction/ipDefaultRule`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `editIpRestrictionDefaultRule`
- **Description**: Modify the default rule for IP access restrictions.

#### IAM Actions

| Action                                                   | Required |
| -------------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/ipDefaultRule/edit` | ✅ Yes   |

#### Parameters

| Parameter | Type                                 | Required | Description                                           |
| --------- | ------------------------------------ | -------- | ----------------------------------------------------- |
| `body`    | `nichandle.IpRestrictionDefaultRule` | ✅ Yes   | Request Body containing the new properties to update. |

---

### 9. SMS Access Restrictions

#### a. List SMS Access Restrictions

- **HTTP Method**: `GET`
- **Path**: `/me/accessRestriction/sms`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `long[]`
- **Operation ID**: `listSmsRestrictions`
- **Description**: Retrieve a list of SMS access restrictions applied to your account.

#### IAM Actions

| Action                                        | Required |
| --------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/sms/get` | ✅ Yes   |

#### Parameters

None.

---

#### b. Add SMS Access Restriction

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/sms`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `nichandle.accessRestriction.SmsSecret`
- **Operation ID**: `addSmsRestriction`
- **Description**: Register a new SMS access restriction for your account.

#### IAM Actions

| Action                                           | Required |
| ------------------------------------------------ | -------- |
| `account:apiovh:me/accessRestriction/sms/create` | ✅ Yes   |

#### Parameters

| Parameter | Type     | Required | Description                        |
| --------- | -------- | -------- | ---------------------------------- |
| `phone`   | `string` | ✅ Yes   | The cell phone number to register. |

---

#### c. Delete SMS Access Restriction

- **HTTP Method**: `DELETE`
- **Path**: `/me/accessRestriction/sms/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `deleteSmsRestriction`
- **Description**: Remove an SMS access restriction from your account.

#### IAM Actions

| Action                                           | Required |
| ------------------------------------------------ | -------- |
| `account:apiovh:me/accessRestriction/sms/delete` | ✅ Yes   |

#### Parameters

| Parameter | Type   | Required | Description                              |
| --------- | ------ | -------- | ---------------------------------------- |
| `id`      | `long` | ✅ Yes   | The ID of the SMS restriction to delete. |

---

#### d. Get SMS Access Restriction Properties

- **HTTP Method**: `GET`
- **Path**: `/me/accessRestriction/sms/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `nichandle.accessRestriction.SmsAccount`
- **Operation ID**: `getSmsRestriction`

#### IAM Actions

| Action                                        | Required |
| --------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/sms/get` | ✅ Yes   |

#### Parameters

| Parameter | Type   | Required | Description                                |
| --------- | ------ | -------- | ------------------------------------------ |
| `id`      | `long` | ✅ Yes   | The ID of the SMS restriction to retrieve. |

---

#### e. Update SMS Access Restriction Properties

- **HTTP Method**: `PUT`
- **Path**: `/me/accessRestriction/sms/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `editSmsRestriction`

#### IAM Actions

| Action                                         | Required |
| ---------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/sms/edit` | ✅ Yes   |

#### Parameters

| Parameter | Type                                     | Required | Description                                           |
| --------- | ---------------------------------------- | -------- | ----------------------------------------------------- |
| `body`    | `nichandle.accessRestriction.SmsAccount` | ✅ Yes   | Request Body containing the new properties to update. |
| `id`      | `long`                                   | ✅ Yes   | The ID of the SMS restriction to update.              |

---

#### f. Disable SMS Access Restriction

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/sms/{id}/disable`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `disableSmsAccount`

#### IAM Actions

| Action                                                 | Required |
| ------------------------------------------------------ | -------- |
| `account:apiovh:me/accessRestriction/sms/{id}/disable` | ✅ Yes   |

#### Parameters

| Parameter | Type       | Required | Description                               |
| --------- | ---------- | -------- | ----------------------------------------- |
| `code`    | `password` | ✅ Yes   | The SMS code sent by the cellphone.       |
| `id`      | `long`     | ✅ Yes   | The ID of the SMS restriction to disable. |

---

#### g. Enable SMS Access Restriction

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/sms/{id}/enable`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `enableSmsAccount`

#### IAM Actions

| Action                                                | Required |
| ----------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/sms/{id}/enable` | ✅ Yes   |

#### Parameters

| Parameter | Type       | Required | Description                              |
| --------- | ---------- | -------- | ---------------------------------------- |
| `code`    | `password` | ✅ Yes   | The SMS code sent by the cellphone.      |
| `id`      | `long`     | ✅ Yes   | The ID of the SMS restriction to enable. |

---

#### h. Send SMS Code

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/sms/{id}/sendCode`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `nichandle.accessRestriction.SmsCode`
- **Operation ID**: `sendSmsCode`
- **Description**: Send an SMS code to the registered cellphone number.

#### IAM Actions

| Action                                                  | Required |
| ------------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/sms/{id}/sendCode` | ✅ Yes   |

#### Parameters

| Parameter | Type   | Required | Description                                         |
| --------- | ------ | -------- | --------------------------------------------------- |
| `id`      | `long` | ✅ Yes   | The ID of the SMS restriction to send the code for. |

---

#### i. Validate SMS Code

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/sms/{id}/validate`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `validateSmsAccount`
- **Description**: Validate the SMS code sent to the registered cellphone number.

#### IAM Actions

| Action                                                  | Required |
| ------------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/sms/{id}/validate` | ✅ Yes   |

#### Parameters

| Parameter | Type       | Required | Description                                |
| --------- | ---------- | -------- | ------------------------------------------ |
| `code`    | `password` | ✅ Yes   | The SMS code sent to the cellphone.        |
| `id`      | `long`     | ✅ Yes   | The ID of the SMS restriction to validate. |

---

### 10. TOTP Access Restrictions

#### a. List TOTP Access Restrictions

- **HTTP Method**: `GET`
- **Path**: `/me/accessRestriction/totp`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `long[]`
- **Operation ID**: `listTotpRestrictions`
- **Description**: Retrieve a list of TOTP access restrictions applied to your account.

#### IAM Actions

| Action                                         | Required |
| ---------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/totp/get` | ✅ Yes   |

#### Parameters

None.

---

#### b. Add TOTP Access Restriction

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/totp`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `nichandle.accessRestriction.TOTPSecret`
- **Operation ID**: `addTotpRestriction`
- **Description**: Register a new TOTP access restriction for your account.

#### IAM Actions

| Action                                            | Required |
| ------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/totp/create` | ✅ Yes   |

#### Parameters

None.

---

#### c. Delete TOTP Access Restriction

- **HTTP Method**: `DELETE`
- **Path**: `/me/accessRestriction/totp/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `deleteTotpRestriction`

#### IAM Actions

| Action                                            | Required |
| ------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/totp/delete` | ✅ Yes   |

#### Parameters

| Parameter | Type   | Required | Description                               |
| --------- | ------ | -------- | ----------------------------------------- |
| `id`      | `long` | ✅ Yes   | The ID of the TOTP restriction to delete. |

---

#### d. Get TOTP Access Restriction Properties

- **HTTP Method**: `GET`
- **Path**: `/me/accessRestriction/totp/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `nichandle.accessRestriction.TOTPAccount`
- **Operation ID**: `getTotpRestriction`

#### IAM Actions

| Action                                         | Required |
| ---------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/totp/get` | ✅ Yes   |

#### Parameters

| Parameter | Type   | Required | Description                                 |
| --------- | ------ | -------- | ------------------------------------------- |
| `id`      | `long` | ✅ Yes   | The ID of the TOTP restriction to retrieve. |

---

#### e. Update TOTP Access Restriction Properties

- **HTTP Method**: `PUT`
- **Path**: `/me/accessRestriction/totp/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `editTotpRestriction`

#### IAM Actions

| Action                                          | Required |
| ----------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/totp/edit` | ✅ Yes   |

#### Parameters

| Parameter | Type                                      | Required | Description                                           |
| --------- | ----------------------------------------- | -------- | ----------------------------------------------------- |
| `body`    | `nichandle.accessRestriction.TOTPAccount` | ✅ Yes   | Request Body containing the new properties to update. |
| `id`      | `long`                                    | ✅ Yes   | The ID of the TOTP restriction to update.             |

---

#### f. Disable TOTP Access Restriction

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/totp/{id}/disable`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `disableTotpAccount`

#### IAM Actions

| Action                                                  | Required |
| ------------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/totp/{id}/disable` | ✅ Yes   |

#### Parameters

| Parameter | Type       | Required | Description                                |
| --------- | ---------- | -------- | ------------------------------------------ |
| `code`    | `password` | ✅ Yes   | The OTP code provided by the application.  |
| `id`      | `long`     | ✅ Yes   | The ID of the TOTP restriction to disable. |

---

#### g. Enable TOTP Access Restriction

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/totp/{id}/enable`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `enableTotpAccount`

#### IAM Actions

| Action                                                 | Required |
| ------------------------------------------------------ | -------- |
| `account:apiovh:me/accessRestriction/totp/{id}/enable` | ✅ Yes   |

#### Parameters

| Parameter | Type       | Required | Description                               |
| --------- | ---------- | -------- | ----------------------------------------- |
| `code`    | `password` | ✅ Yes   | The OTP code provided by the application. |
| `id`      | `long`     | ✅ Yes   | The ID of the TOTP restriction to enable. |

---

#### h. Validate TOTP Access Restriction

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/totp/{id}/validate`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `validateTotpAccount`

#### IAM Actions

| Action                                                   | Required |
| -------------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/totp/{id}/validate` | ✅ Yes   |

#### Parameters

| Parameter | Type       | Required | Description                                 |
| --------- | ---------- | -------- | ------------------------------------------- |
| `code`    | `password` | ✅ Yes   | The OTP code provided by the application.   |
| `id`      | `long`     | ✅ Yes   | The ID of the TOTP restriction to validate. |

---

### 11. U2F Access Restrictions

#### a. List U2F Access Restrictions

- **HTTP Method**: `GET`
- **Path**: `/me/accessRestriction/u2f`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `long[]`
- **Operation ID**: `listU2fRestrictions`
- **Description**: Retrieve a list of U2F access restrictions applied to your account.

#### IAM Actions

| Action                                        | Required |
| --------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/u2f/get` | ✅ Yes   |

#### Parameters

None.

---

#### b. Add U2F Access Restriction

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/u2f`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `nichandle.accessRestriction.U2FRegisterChallenge`
- **Operation ID**: `addU2fRestriction`
- **Description**: Register a new U2F access restriction for your account.

#### IAM Actions

| Action                                           | Required |
| ------------------------------------------------ | -------- |
| `account:apiovh:me/accessRestriction/u2f/create` | ✅ Yes   |

#### Parameters

None.

---

#### c. Delete U2F Access Restriction

- **HTTP Method**: `DELETE`
- **Path**: `/me/accessRestriction/u2f/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `deleteU2fRestriction`

#### IAM Actions

| Action                                           | Required |
| ------------------------------------------------ | -------- |
| `account:apiovh:me/accessRestriction/u2f/delete` | ✅ Yes   |

#### Parameters

| Parameter | Type   | Required | Description                              |
| --------- | ------ | -------- | ---------------------------------------- |
| `id`      | `long` | ✅ Yes   | The ID of the U2F restriction to delete. |

---

#### d. Get U2F Access Restriction Properties

- **HTTP Method**: `GET`
- **Path**: `/me/accessRestriction/u2f/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `nichandle.accessRestriction.U2FAccount`
- **Operation ID**: `getU2fRestriction`

#### IAM Actions

| Action                                        | Required |
| --------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/u2f/get` | ✅ Yes   |

#### Parameters

| Parameter | Type   | Required | Description                                |
| --------- | ------ | -------- | ------------------------------------------ |
| `id`      | `long` | ✅ Yes   | The ID of the U2F restriction to retrieve. |

---

#### e. Update U2F Access Restriction Properties

- **HTTP Method**: `PUT`
- **Path**: `/me/accessRestriction/u2f/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `editU2fRestriction`

#### IAM Actions

| Action                                         | Required |
| ---------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/u2f/edit` | ✅ Yes   |

#### Parameters

| Parameter | Type                                     | Required | Description                                           |
| --------- | ---------------------------------------- | -------- | ----------------------------------------------------- |
| `body`    | `nichandle.accessRestriction.U2FAccount` | ✅ Yes   | Request Body containing the new properties to update. |
| `id`      | `long`                                   | ✅ Yes   | The ID of the U2F restriction to update.              |

---

#### f. Disable U2F Access Restriction

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/u2f/{id}/disable`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `disableU2fAccount`

#### IAM Actions

| Action                                                 | Required |
| ------------------------------------------------------ | -------- |
| `account:apiovh:me/accessRestriction/u2f/{id}/disable` | ✅ Yes   |

#### Parameters

| Parameter | Type   | Required | Description                               |
| --------- | ------ | -------- | ----------------------------------------- |
| `id`      | `long` | ✅ Yes   | The ID of the U2F restriction to disable. |

---

#### g. Enable U2F Access Restriction

- **HTTP Method**: `POST`
- **Path**: `/me/accessRestriction/u2f/{id}/enable`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `void`
- **Operation ID**: `enableU2fAccount`

#### IAM Actions

| Action                                                | Required |
| ----------------------------------------------------- | -------- |
| `account:apiovh:me/accessRestriction/u2f/{id}/enable` | ✅ Yes   |

#### Parameters

| Parameter | Type   | Required | Description                              |
| --------- | ------ | -------- | ---------------------------------------- |
| `id`      | `long` | ✅ Yes   | The ID of the U2F restriction to enable. |

---

### 12. Create New Account (Linked Billing)

- **HTTP Method**: `POST`
- **Path**: `/me/account`
- **Status**: Alpha version (`ALPHA`)
- **Authentication**: Required
- **Response Type**: `nichandle.Nichandle`
- **Operation ID**: `createAccount`
- **Description**: Create a new account whose billing will be linked to your current account's billing.

#### IAM Actions

| Action                             | Required |
| ---------------------------------- | -------- |
| `account:apiovh:me/account/create` | ✅ Yes   |

#### Parameters

| Parameter | Type                 | Required | Description                                         |
| --------- | -------------------- | -------- | --------------------------------------------------- |
| `body`    | `reseller.Nichandle` | ✅ Yes   | Request Body containing the new account properties. |

---

### 13. List Agreements

- **HTTP Method**: `GET`
- **Path**: `/me/agreements`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `long[]`
- **Operation ID**: `listAgreements`
- **Description**: Retrieve a list of contracts signed between you and OVHcloud.

#### IAM Actions

| Action                             | Required |
| ---------------------------------- | -------- |
| `account:apiovh:me/agreements/get` | ✅ Yes   |

#### Parameters

| Parameter    | Type                            | Required | Description                                   |
| ------------ | ------------------------------- | -------- | --------------------------------------------- |
| `agreed`     | `agreements.AgreementStateEnum` | ❌ No    | Filter by the agreed property (e.g., `like`). |
| `contractId` | `long`                          | ❌ No    | Filter by the contract ID.                    |

---

### 14. Get Agreement Details

- **HTTP Method**: `GET`
- **Path**: `/me/agreements/{id}`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `agreements.ContractAgreement`
- **Operation ID**: `getAgreement`
- **Description**: Retrieve details about a specific contract agreement.

#### IAM Actions

| Action                             | Required |
| ---------------------------------- | -------- |
| `account:apiovh:me/agreements/get` | ✅ Yes   |

#### Parameters

| Parameter | Type   | Required | Description                                   |
| --------- | ------ | -------- | --------------------------------------------- |
| `id`      | `long` | ✅ Yes   | The ID of the contract agreement to retrieve. |

---

### 15. Accept Agreement

- **HTTP Method**: `POST`
- **Path**: `/me/agreements/{id}/accept`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `string`
- **Operation ID**: `acceptAgreement`
- **Description**: Accept a contract agreement.

#### IAM Actions

| Action                                | Required |
| ------------------------------------- | -------- |
| `account:apiovh:me/agreements/accept` | ✅ Yes   |

#### Parameters

| Parameter | Type   | Required | Description                                 |
| --------- | ------ | -------- | ------------------------------------------- |
| `id`      | `long` | ✅ Yes   | The ID of the contract agreement to accept. |

---

### 16. Get Contract Details

- **HTTP Method**: `GET`
- **Path**: `/me/agreements/{id}/contract`
- **Status**: Stable production version (`PRODUCTION`)
- **Authentication**: Required
- **Response Type**: `agreements.Contract`
- **Operation ID**: `getContract`
- **Description**: Retrieve details about the contract associated with a specific agreement.

#### IAM Actions

| Action                                      | Required |
| ------------------------------------------- | -------- |
| `account:apiovh:me/agreements/contract/get` | ✅ Yes   |

#### Parameters

| Parameter | Type   | Required | Description                         |
| --------- | ------ | -------- | ----------------------------------- |
| `id`      | `long` | ✅ Yes   | The ID of the contract to retrieve. |

---

## Notes

- **Authentication**: All operations under `/me` require authentication unless explicitly marked as `noAuthentication: true`.
- **IAM Actions**: These are required permissions for the operations. Ensure your credentials have the necessary IAM roles before attempting to use these endpoints.
- **Status**: Most operations are in `PRODUCTION` status, meaning they are stable and production-ready. A few are in `BETA` or `ALPHA` status, indicating they may be subject to change or are still in development.

---

## Error Handling

- **Authentication Errors**: If you attempt to access these endpoints without proper authentication, you will receive a `401 Unauthorized` error.
- **Permission Errors**: If your credentials lack the required IAM roles, you will receive a `403 Forbidden` error.
- **Validation Errors**: Some operations require specific parameters (e.g., `code` for disabling or enabling restrictions). If these are missing or invalid, you will receive a `400 Bad Request` error.

---

## References

- [OVHcloud API Documentation](https://api.ovh.com/)
- [OVHcloud IAM Documentation](https://docs.ovh.com/en/public-api/managing-consumer-key/)
- [OVHcloud Account API Reference](https://api.ovh.com/1.0/me)
